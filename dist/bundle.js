/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/gameObject.ts":
/*!******************************!*\
  !*** ./public/gameObject.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// const decor_startSign: IImgInfo = {
// 	fileName: 'startSign',
// 	w: 50,
// 	h: 50,
// };
// const obsticle_rock1: IImgInfo = {
// 	fileName: 'rock1',
// 	w: 70,
// 	h: 70,
// };
// const obsticle_rock2: IImgInfo = {
// 	fileName: 'rock2',
// 	w: 70,
// 	h: 70,
// };
// const obsticle_rock3: IImgInfo = {
// 	fileName: 'rock3',
// 	w: 70,
// 	h: 70,
// };
var levelOne = {
    platforms: [
        {
            y: 600,
            len: 3000,
            gapToNext: 0,
            decor: [{ name: 'startSign', xLocsOnPlatByPerc: [0.6] }],
        },
        {
            y: 600,
            len: 3000,
            gapToNext: 200,
        },
        { y: 700, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock1', xLocsOnPlatByPerc: [0.1] }] },
        { y: 600, len: 800, gapToNext: 0 },
        { y: 500, len: 2000, gapToNext: 0, obsticles: [{ name: 'rock2', xLocsOnPlatByPerc: [0.4] }] },
        { y: 700, len: 1200, gapToNext: 0 },
        { y: 450, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock3', xLocsOnPlatByPerc: [0.8] }] },
        { y: 650, len: 1000, gapToNext: 0 },
        { y: 625, len: 600, gapToNext: 0 },
        { y: 600, len: 800, gapToNext: 50 },
        { y: 700, len: 2000, gapToNext: 0 },
        { y: 550, len: 700, gapToNext: 0, obsticles: [{ name: 'rock3', xLocsOnPlatByPerc: [0.1] }] },
        { y: 410, len: 1000, gapToNext: 300 },
        { y: 700, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock1', xLocsOnPlatByPerc: [0.6] }] },
        { y: 600, len: 800, gapToNext: 0 },
        { y: 550, len: 1500, gapToNext: 0, obsticles: [{ name: 'rock3', xLocsOnPlatByPerc: [0.4] }] },
        { y: 700, len: 1200, gapToNext: 100 },
        { y: 450, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock1', xLocsOnPlatByPerc: [0.8] }] },
        { y: 650, len: 1000, gapToNext: 0 },
        { y: 625, len: 600, gapToNext: 0 },
    ],
    platformTexture: 'woodPlat',
    platformH: 16,
    backgroundImg: '',
    maxPlatLen: 4000,
    speed: 20,
};
var gameObject = {
    levels: [levelOne],
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameObject);


/***/ }),

/***/ "./src/collisions.ts":
/*!***************************!*\
  !*** ./src/collisions.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Collisions = /** @class */ (function () {
    function Collisions(ctx, world, player, hud) {
        this.ctx = ctx;
        this.world = world;
        this.player = player;
        this.hud = hud;
    }
    Collisions.prototype.checkForPlatCollision = function (_a) {
        var x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2, w1 = _a.w1, h1 = _a.h1, w2 = _a.w2, h2 = _a.h2, margin = _a.margin, object = _a.object;
        if (x1 + w1 >= x2 + margin && // Check player right collision
            x1 <= x2 + w2 && // Check player left collision
            y1 <= y2 + h2 // Check player top collision
        ) {
            // Land if negative velocity and within 20px of platform
            if (this.player.yVelocity <= 0 && Math.abs(y2 - (y1 + h1)) < 20)
                this.player.land(y2);
            // Check player bottom collision
            else if (y1 + this.player.h > y2 + (this.player.isInAir ? margin : 0)) {
                console.log('Platform Collision!!!');
                this.hud.lives = 0;
            }
            // Player is in air if not touching platform
            else
                this.player.isInAir = true;
        }
    };
    Collisions.prototype.checkForCollision = function (_a) {
        var x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2, w1 = _a.w1, h1 = _a.h1, w2 = _a.w2, h2 = _a.h2, margin = _a.margin, object = _a.object;
        if (x1 + w1 >= x2 + margin && // Check player right collision
            x1 <= x2 + w2 && // Check player left collision
            y1 <= y2 + h2 && // Check player top collision
            y1 + h1 > y2 // Check player bottom collision
        ) {
            console.log('checkForCollision');
            this.hud.reduceHealth(object);
        }
    };
    return Collisions;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collisions);


/***/ }),

/***/ "./src/hud.ts":
/*!********************!*\
  !*** ./src/hud.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Hud = /** @class */ (function () {
    function Hud(ctx, world) {
        this.ctx = ctx;
        this.world = world;
        this.lives = 3;
        this.lastObjectHit = '';
    }
    Hud.prototype.reduceHealth = function (object) {
        if (this.lastObjectHit === object)
            return;
        this.lives -= 1;
        this.lastObjectHit = object;
    };
    Hud.prototype.drawHeart = function (sectionW, heartIndex, sectionStartX) {
        var xShiftInsideBox = 8;
        var heartContainerW = 50;
        var xoff = (heartIndex === 0 ? 0 : heartIndex === 1 ? heartContainerW : heartContainerW * 2) +
            sectionStartX +
            xShiftInsideBox;
        var yoff = 14;
        var scale = 0.06;
        this.ctx.fillStyle = 'red';
        this.ctx.strokeStyle = 'red';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(scale * 372 + xoff, scale * 240 + yoff);
        this.ctx.bezierCurveTo(scale * 487 + xoff, scale * 117 + yoff, scale * 642 + xoff, scale * 262 + yoff, scale * 551 + xoff, scale * 363 + yoff);
        this.ctx.bezierCurveTo(scale * 541 + xoff, scale * 374 + yoff, scale * 398 + xoff, scale * 550 + yoff, scale * 385 + xoff, scale * 594 + yoff);
        this.ctx.bezierCurveTo(scale * 371 + xoff, scale * 550 + yoff, scale * 233 + xoff, scale * 379 + yoff, scale * 222 + xoff, scale * 367 + yoff);
        this.ctx.bezierCurveTo(scale * 121 + xoff, scale * 257 + yoff, scale * 294 + xoff, scale * 125 + yoff, scale * 385 + xoff, scale * 246 + yoff);
        this.ctx.save();
        this.ctx.clip();
        this.ctx.lineWidth *= 2;
        this.ctx.stroke();
        this.ctx.restore();
        if (heartIndex + 1 <= this.lives)
            this.ctx.fill();
    };
    Hud.prototype.drawLives = function () {
        var sectionStartX = 30;
        var sectionStartY = 11;
        var sectionW = 160;
        var sectionH = 50;
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.ctx.beginPath();
        this.ctx.roundRect(sectionStartX, sectionStartY, sectionW, sectionH, 10);
        this.ctx.fill();
        for (var i = 0; i < 3; i++) {
            this.drawHeart(sectionW, i, sectionStartX);
        }
    };
    Hud.prototype.draw = function () {
        this.drawLives();
    };
    return Hud;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hud);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/gameObject */ "./public/gameObject.ts");
/* harmony import */ var _collisions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collisions */ "./src/collisions.ts");
/* harmony import */ var _hud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hud */ "./src/hud.ts");
/* harmony import */ var _platforms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./platforms */ "./src/platforms.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ "./src/player.ts");





var world = document.getElementById('world');
var ctx = world.getContext('2d', { alpha: false });
var titleDiv = document.querySelector('.titleDiv');
var startBtn = document.querySelector('.startBtn');
// For game loop
var requestId, now, then, elapsed, fpsInterval;
var frameRate = 60;
var paused = false;
var levelsStarted = -1;
// Classes
var platforms, player, hud, collisions;
var endGame = function () {
    if (requestId)
        cancelAnimationFrame(requestId);
    requestId = null;
    // prepGame();
    // startBtn.style.display = 'block';
    // startBtn.innerHTML = 'Play Again';
    // levelsStarted = -1;
};
var gameLoop = function () {
    var _a, _b;
    requestId = requestAnimationFrame(gameLoop);
    fpsInterval = 1000 / frameRate;
    now = Date.now();
    elapsed = now - (then || 0);
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, world.width, world.height);
        if (!paused) {
            platforms.move();
            player.speed = _public_gameObject__WEBPACK_IMPORTED_MODULE_0__["default"].levels[platforms.currentLevel].speed;
        }
        else {
            player.speed = 0;
        }
        platforms.draw();
        player.draw();
        hud.draw();
        if (((_b = (_a = platforms.platsVisible) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.index) === 0 && platforms.currentLevel > levelsStarted) {
            levelsStarted = platforms.currentLevel;
            setTimeout(function () {
                titleDiv.children[0].innerHTML = "Level ".concat(platforms.currentLevel + 1);
                titleDiv.style.display = 'block';
                setTimeout(function () {
                    titleDiv.style.display = 'none';
                }, 3000);
            }, 1000);
        }
        if (hud.lives === 0)
            endGame();
    }
};
var startGame = function () {
    gameLoop();
};
var prepGame = function () {
    Object.freeze(_public_gameObject__WEBPACK_IMPORTED_MODULE_0__["default"]);
    hud = new _hud__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, world);
    player = new _player__WEBPACK_IMPORTED_MODULE_4__["default"](ctx, world, hud);
    collisions = new _collisions__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, world, player, hud);
    platforms = new _platforms__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, world, player, hud, collisions, _public_gameObject__WEBPACK_IMPORTED_MODULE_0__["default"]);
    platforms.setUp();
    startGame();
    startBtn.style.display = 'none';
};
prepGame();
document.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'Space':
            if (requestId) {
                if (paused) {
                    paused = false;
                }
                else {
                    if (!player.loadingJump)
                        player.loadingJump = true;
                }
            }
            break;
    }
});
document.addEventListener('keyup', function (e) {
    switch (e.code) {
        case 'Escape':
            if (paused) {
                paused = false;
            }
            else {
                paused = true;
            }
        case 'Space':
            player.jump();
            break;
    }
});
startBtn.onclick = function () {
    startGame();
    startBtn.style.display = 'none';
};


/***/ }),

/***/ "./src/platforms.ts":
/*!**************************!*\
  !*** ./src/platforms.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Platforms = /** @class */ (function () {
    function Platforms(ctx, world, player, hud, collisions, gameObject) {
        this.ctx = ctx;
        this.world = world;
        this.player = player;
        this.hud = hud;
        this.collisions = collisions;
        this.gameObject = gameObject;
        this.currentLevel = 0;
        this.platsVisible = [
            {
                index: 0,
                x: 0,
            },
        ];
        this.backgroundX = 0;
        this.gameOver = false;
        this.collisionMargin = 30;
        this.imagePaths = [
            '../public/bgMountains.png',
            // Platform Textures
            '../public/woodPlat.png',
            '../public/dirtPlat.png',
            // Decor
            '../public/startSign.png',
            // Obsticles
            '../public/rock1.png',
            '../public/rock2.png',
            '../public/rock3.png',
        ];
        this.images = {};
    }
    Platforms.prototype.setUp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var preloadImages, imgArraytemp;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        preloadImages = function () {
                            var promises = _this.imagePaths.map(function (path) {
                                return new Promise(function (resolve, reject) {
                                    var _a;
                                    var name = (_a = path.split('/').pop()) === null || _a === void 0 ? void 0 : _a.split('.')[0];
                                    var image = new Image();
                                    image.src = path;
                                    image.onload = function () {
                                        resolve([name, image]);
                                    };
                                    image.onerror = function () { return reject("Image failed to load: ".concat(path)); };
                                });
                            });
                            return Promise.all(promises);
                        };
                        return [4 /*yield*/, preloadImages()];
                    case 1:
                        imgArraytemp = _a.sent();
                        this.images = Object.fromEntries(imgArraytemp);
                        return [2 /*return*/];
                }
            });
        });
    };
    // private checkObsticleCollision(obsticle: IPlatObject, xVal: number, yVal: number) {
    // 	if (
    // 		this.player.x + this.player.w >= xVal + this.collisionMargin && // Check player right collision
    // 		this.player.x <= xVal + this.images[obsticle.name].width && // Check player left collision
    // 		this.player.y <= yVal + (this.images[obsticle.name].height || this.world.height - yVal) && // Check player top collision
    // 		this.player.y + this.player.h > yVal // Check player bottom collision
    // 	) {
    // 		console.log('Collision with: ', obsticle.name);
    // 		this.gameOver = true;
    // 	}
    // }
    Platforms.prototype.nextPlatform = function () {
        var lastVisiblePlat = this.platsVisible[this.platsVisible.length - 1];
        var platsRef = this.gameObject.levels[this.currentLevel].platforms;
        var lastPlatRef = platsRef[lastVisiblePlat.index];
        var nextPlat = this.gameObject.levels[this.currentLevel].platforms[lastVisiblePlat.index + 1];
        if (!nextPlat) {
            console.log('No More Platforms');
            return;
        }
        this.platsVisible.push({
            index: lastVisiblePlat.index + 1,
            x: lastVisiblePlat.x + lastPlatRef.len + lastPlatRef.gapToNext,
        });
        if (this.platsVisible[0].x + platsRef[this.platsVisible[0].index].len < 0)
            this.platsVisible.shift();
    };
    Platforms.prototype.move = function () {
        var level = this.gameObject.levels[this.currentLevel];
        var platRef = level.platforms[this.platsVisible[this.platsVisible.length - 1].index];
        var lastPlatX = this.platsVisible[this.platsVisible.length - 1].x;
        if (lastPlatX + platRef.len <= this.world.width)
            this.nextPlatform();
        for (var i = 0; i < this.platsVisible.length; i++)
            this.platsVisible[i].x -= level.speed;
        this.backgroundX -= level.speed / 8;
    };
    Platforms.prototype.drawDecorForPlat = function (decor, platYTop, platX, platLen) {
        for (var i = 0; i < (decor === null || decor === void 0 ? void 0 : decor.length); i++) {
            var imgSrc = this.images[decor[i].name];
            var decorXVals = decor[i].xLocsOnPlatByPerc;
            // console.log(this.images[decor[i].name].height);
            for (var i_1 = 0; i_1 < (decorXVals === null || decorXVals === void 0 ? void 0 : decorXVals.length); i_1++) {
                this.ctx.drawImage(imgSrc, platX + platLen * decorXVals[i_1], platYTop - this.images[decor[i_1].name].height + 10, this.images[decor[i_1].name].width, this.images[decor[i_1].name].height);
            }
        }
    };
    Platforms.prototype.drawObsticleOnPlat = function (obsticles, platYTop, platX, platLen, platIndex) {
        for (var i = 0; i < (obsticles === null || obsticles === void 0 ? void 0 : obsticles.length); i++) {
            var imgSrc = this.images[obsticles[i].name];
            var obsticleXVals = obsticles[i].xLocsOnPlatByPerc;
            for (var i_2 = 0; i_2 < (obsticleXVals === null || obsticleXVals === void 0 ? void 0 : obsticleXVals.length); i_2++) {
                this.ctx.drawImage(imgSrc, platX + platLen * obsticleXVals[i_2], platYTop - this.images[obsticles[i_2].name].height + 10, this.images[obsticles[i_2].name].width, this.images[obsticles[i_2].name].height);
                this.collisions.checkForCollision({
                    x1: this.player.x,
                    y1: this.player.y,
                    x2: platX + platLen * obsticleXVals[i_2],
                    y2: platYTop - this.images[obsticles[i_2].name].height + 10,
                    w1: this.player.w,
                    h1: this.player.h,
                    w2: this.images[obsticles[i_2].name].width,
                    h2: this.images[obsticles[i_2].name].height ||
                        this.world.height - (platYTop - this.images[obsticles[i_2].name].height + 10),
                    margin: this.collisionMargin,
                    object: "".concat(obsticles[i_2].name, "_").concat(platIndex, "_").concat(obsticleXVals[i_2]),
                });
            }
        }
    };
    Platforms.prototype.draw = function () {
        var _a;
        if (!((_a = this.images) === null || _a === void 0 ? void 0 : _a.bgMountains))
            return;
        // Draw BG
        this.ctx.drawImage(this.images.bgMountains, 0, 0, this.images.bgMountains.width, this.images.bgMountains.height, this.backgroundX, this.world.height - this.images.bgMountains.height, this.images.bgMountains.width, this.images.bgMountains.height);
        for (var _i = 0, _b = this.platsVisible; _i < _b.length; _i++) {
            var plat = _b[_i];
            var level = this.gameObject.levels[this.currentLevel];
            var imgW = this.images[level.platformTexture].width * (level.platforms[plat.index].len / level.maxPlatLen);
            var platform = this.gameObject.levels[this.currentLevel].platforms[plat.index] || [];
            if (platform === null || platform === void 0 ? void 0 : platform.decor) {
                this.drawDecorForPlat(platform.decor, level.platforms[plat.index].y, plat.x, level.platforms[plat.index].len);
            }
            if (platform === null || platform === void 0 ? void 0 : platform.obsticles) {
                this.drawObsticleOnPlat(platform.obsticles, platform.y, plat.x, platform.len, plat.index);
            }
            this.ctx.drawImage(this.images[level.platformTexture], 0, 0, imgW, this.images[level.platformTexture].height, plat.x, level.platforms[plat.index].y, level.platforms[plat.index].len, level.platformH || this.world.height - level.platforms[plat.index].y);
            this.collisions.checkForPlatCollision({
                x1: this.player.x,
                y1: this.player.y,
                x2: plat.x,
                y2: level.platforms[plat.index].y,
                w1: this.player.w,
                h1: this.player.h,
                w2: level.platforms[plat.index].len,
                h2: level.platformH || this.world.height - level.platforms[plat.index].y,
                margin: this.collisionMargin,
                object: "".concat(this.currentLevel, "_").concat(plat.index),
            });
            // this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            // this.ctx.beginPath();
            // this.ctx.rect(this.platforms[i].x, this.platforms[i].y, this.platforms[i].w, this.h);
            // this.ctx.fill();
        }
    };
    return Platforms;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Platforms);


/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Player = /** @class */ (function () {
    function Player(ctx, world, hud) {
        this.ctx = ctx;
        this.world = world;
        this.frameImg = new Image();
        this.frameImg.src = '../public/frame2.png';
        this.wheelImg = new Image();
        this.wheelImg.src = '../public/wheel.png';
        this.aspectRatio = 1.1;
        this.x = 100;
        this.y = 100;
        this.w = 170;
        this.h = this.w / this.aspectRatio;
        this.isInAir = true;
        this.jumpVelStartReset = 10;
        this.jumpVelStart = this.jumpVelStartReset;
        this.yVelocity = 0;
        this.yAcc = 0.8;
        this.rotation = 0;
        this.rotationSpeed = 0;
        this.isJumping = false;
        this.loadingJump = false;
        this.wheelRot = 0;
        this.rotCoordsForJump = { x: 0, y: 0 };
        this.speed = 0;
        this.hud = hud;
    }
    Player.prototype.land = function (y) {
        if (this.rotation < 0)
            return;
        this.isInAir = false;
        this.isJumping = false;
        this.rotationSpeed = 0;
        this.rotation = 0;
        this.yVelocity = 0;
        this.y = y - this.h;
        if (!this.loadingJump)
            this.jumpVelStart = this.jumpVelStartReset;
    };
    Player.prototype.jump = function () {
        if (this.isJumping || this.isInAir || this.yVelocity < 0)
            return;
        this.rotationSpeed = this.jumpVelStart;
        this.isJumping = true;
        this.loadingJump = false;
        this.isInAir = true;
        this.yVelocity = this.jumpVelStart;
        this.jumpVelStart = this.jumpVelStartReset;
    };
    Player.prototype.loadJump = function () {
        if (this.jumpVelStart >= 20)
            return;
        this.jumpVelStart += 0.5;
    };
    Player.prototype.drawFrame = function () {
        // const yOffset = 5;
        this.ctx.save();
        this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y);
        this.ctx.rotate((this.rotation * Math.PI) / 180);
        this.ctx.drawImage(this.frameImg, -this.wheelImg.width / 2, -this.h + this.wheelImg.height / 2, this.w, this.h);
        this.ctx.restore();
    };
    Player.prototype.drawWheels = function () {
        var rotOffset = this.hud.lives === 3 ? 0 : this.hud.lives === 2 ? 2 : 4;
        this.ctx.save();
        this.ctx.translate(this.rotCoordsForJump.x + rotOffset, this.rotCoordsForJump.y);
        this.ctx.rotate((this.rotation * Math.PI) / 180); // Rotate for jump
        this.ctx.rotate((this.wheelRot * Math.PI) / 180); // Rotate for wheel spin
        this.ctx.drawImage(this.wheelImg, -this.wheelImg.width / 2 - rotOffset, -this.wheelImg.height / 2, this.wheelImg.width, this.wheelImg.height);
        this.ctx.restore();
        this.ctx.save();
        this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y + rotOffset);
        this.ctx.rotate((this.rotation * Math.PI) / 180); // Rotate for jump
        this.ctx.translate(-this.rotCoordsForJump.x, -this.rotCoordsForJump.y); // Move to start
        this.ctx.translate(this.x + this.w - this.wheelImg.width / 2, this.rotCoordsForJump.y);
        this.ctx.rotate((this.wheelRot * Math.PI) / 180); // Rotate for wheel spin
        this.ctx.translate(-(this.x + this.w - this.wheelImg.width / 2), -this.rotCoordsForJump.y); // Move to start
        this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y);
        this.ctx.drawImage(this.wheelImg, -(this.rotCoordsForJump.x - this.x) + this.w - this.wheelImg.width, -this.wheelImg.height / 2 - rotOffset, this.wheelImg.width, this.wheelImg.height);
        this.ctx.restore();
    };
    Player.prototype.draw = function () {
        this.wheelRot += this.speed;
        if (this.loadingJump)
            this.loadJump();
        this.y -= this.yVelocity;
        if (this.isInAir)
            this.yVelocity -= this.yAcc;
        if (this.isJumping) {
            this.rotation -= this.rotationSpeed / 4;
            this.rotationSpeed -= this.yAcc * 2;
            if (this.rotation >= 5) {
                this.rotationSpeed = 0;
            }
        }
        // this.ctx.fillStyle = 'rgb(0, 0, 0, 0.5)';
        // this.ctx.beginPath();
        // this.ctx.rect(this.x, this.y, this.w, this.h);
        // this.ctx.fill();
        this.rotCoordsForJump = {
            x: this.x + this.wheelImg.width / 2,
            y: this.y + this.h - this.wheelImg.height / 2,
        };
        this.drawWheels();
        this.drawFrame();
    };
    return Player;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/platforms.ts");
/******/ 	__webpack_require__("./src/player.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/types.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jpa2VfZ2FtZS8uL3B1YmxpYy9nYW1lT2JqZWN0LnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS8uL3NyYy9jb2xsaXNpb25zLnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS8uL3NyYy9odWQudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS8uL3NyYy9wbGF0Zm9ybXMudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL3BsYXllci50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUdhbWVPYmplY3QsIElMZXZlbCwgSVBsYXRPYmplY3QgfSBmcm9tICcuLi9zcmMvdHlwZXMnO1xyXG5cclxuLy8gY29uc3QgZGVjb3Jfc3RhcnRTaWduOiBJSW1nSW5mbyA9IHtcclxuLy8gXHRmaWxlTmFtZTogJ3N0YXJ0U2lnbicsXHJcbi8vIFx0dzogNTAsXHJcbi8vIFx0aDogNTAsXHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBvYnN0aWNsZV9yb2NrMTogSUltZ0luZm8gPSB7XHJcbi8vIFx0ZmlsZU5hbWU6ICdyb2NrMScsXHJcbi8vIFx0dzogNzAsXHJcbi8vIFx0aDogNzAsXHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBvYnN0aWNsZV9yb2NrMjogSUltZ0luZm8gPSB7XHJcbi8vIFx0ZmlsZU5hbWU6ICdyb2NrMicsXHJcbi8vIFx0dzogNzAsXHJcbi8vIFx0aDogNzAsXHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBvYnN0aWNsZV9yb2NrMzogSUltZ0luZm8gPSB7XHJcbi8vIFx0ZmlsZU5hbWU6ICdyb2NrMycsXHJcbi8vIFx0dzogNzAsXHJcbi8vIFx0aDogNzAsXHJcbi8vIH07XHJcblxyXG5jb25zdCBsZXZlbE9uZTogSUxldmVsID0ge1xyXG5cdHBsYXRmb3JtczogW1xyXG5cdFx0e1xyXG5cdFx0XHR5OiA2MDAsXHJcblx0XHRcdGxlbjogMzAwMCxcclxuXHRcdFx0Z2FwVG9OZXh0OiAwLFxyXG5cdFx0XHRkZWNvcjogW3sgbmFtZTogJ3N0YXJ0U2lnbicsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC42XSB9XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHk6IDYwMCxcclxuXHRcdFx0bGVuOiAzMDAwLFxyXG5cdFx0XHRnYXBUb05leHQ6IDIwMCxcclxuXHRcdH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2sxJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjFdIH1dIH0sXHJcblx0XHR7IHk6IDYwMCwgbGVuOiA4MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA1MDAsIGxlbjogMjAwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMicsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC40XSB9XSB9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMTIwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDQ1MCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2szJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjhdIH1dIH0sXHJcblx0XHR7IHk6IDY1MCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNjI1LCBsZW46IDYwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDYwMCwgbGVuOiA4MDAsIGdhcFRvTmV4dDogNTAgfSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDIwMDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA1NTAsIGxlbjogNzAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2szJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjFdIH1dIH0sXHJcblx0XHR7IHk6IDQxMCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDMwMCB9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMScsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC42XSB9XSB9LFxyXG5cdFx0eyB5OiA2MDAsIGxlbjogODAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNTUwLCBsZW46IDE1MDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazMnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuNF0gfV0gfSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDEyMDAsIGdhcFRvTmV4dDogMTAwIH0sXHJcblx0XHR7IHk6IDQ1MCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2sxJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjhdIH1dIH0sXHJcblx0XHR7IHk6IDY1MCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNjI1LCBsZW46IDYwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XSxcclxuXHRwbGF0Zm9ybVRleHR1cmU6ICd3b29kUGxhdCcsXHJcblx0cGxhdGZvcm1IOiAxNixcclxuXHRiYWNrZ3JvdW5kSW1nOiAnJyxcclxuXHRtYXhQbGF0TGVuOiA0MDAwLFxyXG5cdHNwZWVkOiAyMCxcclxufTtcclxuXHJcbmNvbnN0IGdhbWVPYmplY3Q6IElHYW1lT2JqZWN0ID0ge1xyXG5cdGxldmVsczogW2xldmVsT25lXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVPYmplY3Q7XHJcbiIsImltcG9ydCBIdWQgZnJvbSAnLi9odWQnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgQ29udGV4dCwgSUNvbGxpc2lvbkFyZ3MgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbnMge1xyXG5cdHByaXZhdGUgY3R4OiBDb250ZXh0O1xyXG5cdHByaXZhdGUgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cdHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XHJcblx0cHJpdmF0ZSBodWQ6IEh1ZDtcclxuXHJcblx0Y29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQsIHBsYXllcjogUGxheWVyLCBodWQ6IEh1ZCkge1xyXG5cdFx0dGhpcy5jdHggPSBjdHg7XHJcblx0XHR0aGlzLndvcmxkID0gd29ybGQ7XHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHRcdHRoaXMuaHVkID0gaHVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoZWNrRm9yUGxhdENvbGxpc2lvbih7IHgxLCB5MSwgeDIsIHkyLCB3MSwgaDEsIHcyLCBoMiwgbWFyZ2luLCBvYmplY3QgfTogSUNvbGxpc2lvbkFyZ3MpIHtcclxuXHRcdGlmIChcclxuXHRcdFx0eDEgKyB3MSA+PSB4MiArIG1hcmdpbiAmJiAvLyBDaGVjayBwbGF5ZXIgcmlnaHQgY29sbGlzaW9uXHJcblx0XHRcdHgxIDw9IHgyICsgdzIgJiYgLy8gQ2hlY2sgcGxheWVyIGxlZnQgY29sbGlzaW9uXHJcblx0XHRcdHkxIDw9IHkyICsgaDIgLy8gQ2hlY2sgcGxheWVyIHRvcCBjb2xsaXNpb25cclxuXHRcdCkge1xyXG5cdFx0XHQvLyBMYW5kIGlmIG5lZ2F0aXZlIHZlbG9jaXR5IGFuZCB3aXRoaW4gMjBweCBvZiBwbGF0Zm9ybVxyXG5cdFx0XHRpZiAodGhpcy5wbGF5ZXIueVZlbG9jaXR5IDw9IDAgJiYgTWF0aC5hYnMoeTIgLSAoeTEgKyBoMSkpIDwgMjApIHRoaXMucGxheWVyLmxhbmQoeTIpO1xyXG5cdFx0XHQvLyBDaGVjayBwbGF5ZXIgYm90dG9tIGNvbGxpc2lvblxyXG5cdFx0XHRlbHNlIGlmICh5MSArIHRoaXMucGxheWVyLmggPiB5MiArICh0aGlzLnBsYXllci5pc0luQWlyID8gbWFyZ2luIDogMCkpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnUGxhdGZvcm0gQ29sbGlzaW9uISEhJyk7XHJcblx0XHRcdFx0dGhpcy5odWQubGl2ZXMgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIFBsYXllciBpcyBpbiBhaXIgaWYgbm90IHRvdWNoaW5nIHBsYXRmb3JtXHJcblx0XHRcdGVsc2UgdGhpcy5wbGF5ZXIuaXNJbkFpciA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hlY2tGb3JDb2xsaXNpb24oeyB4MSwgeTEsIHgyLCB5MiwgdzEsIGgxLCB3MiwgaDIsIG1hcmdpbiwgb2JqZWN0IH06IElDb2xsaXNpb25BcmdzKSB7XHJcblx0XHRpZiAoXHJcblx0XHRcdHgxICsgdzEgPj0geDIgKyBtYXJnaW4gJiYgLy8gQ2hlY2sgcGxheWVyIHJpZ2h0IGNvbGxpc2lvblxyXG5cdFx0XHR4MSA8PSB4MiArIHcyICYmIC8vIENoZWNrIHBsYXllciBsZWZ0IGNvbGxpc2lvblxyXG5cdFx0XHR5MSA8PSB5MiArIGgyICYmIC8vIENoZWNrIHBsYXllciB0b3AgY29sbGlzaW9uXHJcblx0XHRcdHkxICsgaDEgPiB5MiAvLyBDaGVjayBwbGF5ZXIgYm90dG9tIGNvbGxpc2lvblxyXG5cdFx0KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdjaGVja0ZvckNvbGxpc2lvbicpO1xyXG5cdFx0XHR0aGlzLmh1ZC5yZWR1Y2VIZWFsdGgob2JqZWN0KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHRocm90dGxlIGZyb20gJy4uL3V0aWxzL3Rocm90dGxlJztcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHVkIHtcclxuXHRwcml2YXRlIGN0eDogQ29udGV4dDtcclxuXHRwcml2YXRlIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHRwdWJsaWMgbGl2ZXM6IG51bWJlcjtcclxuXHRwcml2YXRlIGxhc3RPYmplY3RIaXQ6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuXHRcdHRoaXMuY3R4ID0gY3R4O1xyXG5cdFx0dGhpcy53b3JsZCA9IHdvcmxkO1xyXG5cdFx0dGhpcy5saXZlcyA9IDM7XHJcblx0XHR0aGlzLmxhc3RPYmplY3RIaXQgPSAnJztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZWR1Y2VIZWFsdGgob2JqZWN0OiBzdHJpbmcpIHtcclxuXHRcdGlmICh0aGlzLmxhc3RPYmplY3RIaXQgPT09IG9iamVjdCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5saXZlcyAtPSAxO1xyXG5cdFx0dGhpcy5sYXN0T2JqZWN0SGl0ID0gb2JqZWN0O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3SGVhcnQoc2VjdGlvblc6IG51bWJlciwgaGVhcnRJbmRleDogbnVtYmVyLCBzZWN0aW9uU3RhcnRYOiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IHhTaGlmdEluc2lkZUJveCA9IDg7XHJcblx0XHRjb25zdCBoZWFydENvbnRhaW5lclcgPSA1MDtcclxuXHRcdGNvbnN0IHhvZmYgPVxyXG5cdFx0XHQoaGVhcnRJbmRleCA9PT0gMCA/IDAgOiBoZWFydEluZGV4ID09PSAxID8gaGVhcnRDb250YWluZXJXIDogaGVhcnRDb250YWluZXJXICogMikgK1xyXG5cdFx0XHRzZWN0aW9uU3RhcnRYICtcclxuXHRcdFx0eFNoaWZ0SW5zaWRlQm94O1xyXG5cdFx0Y29uc3QgeW9mZiA9IDE0O1xyXG5cdFx0Y29uc3Qgc2NhbGUgPSAwLjA2O1xyXG5cclxuXHRcdHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xyXG5cdFx0dGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcclxuXHRcdHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XHJcblxyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHR0aGlzLmN0eC5tb3ZlVG8oc2NhbGUgKiAzNzIgKyB4b2ZmLCBzY2FsZSAqIDI0MCArIHlvZmYpO1xyXG5cdFx0dGhpcy5jdHguYmV6aWVyQ3VydmVUbyhcclxuXHRcdFx0c2NhbGUgKiA0ODcgKyB4b2ZmLFxyXG5cdFx0XHRzY2FsZSAqIDExNyArIHlvZmYsXHJcblx0XHRcdHNjYWxlICogNjQyICsgeG9mZixcclxuXHRcdFx0c2NhbGUgKiAyNjIgKyB5b2ZmLFxyXG5cdFx0XHRzY2FsZSAqIDU1MSArIHhvZmYsXHJcblx0XHRcdHNjYWxlICogMzYzICsgeW9mZlxyXG5cdFx0KTtcclxuXHRcdHRoaXMuY3R4LmJlemllckN1cnZlVG8oXHJcblx0XHRcdHNjYWxlICogNTQxICsgeG9mZixcclxuXHRcdFx0c2NhbGUgKiAzNzQgKyB5b2ZmLFxyXG5cdFx0XHRzY2FsZSAqIDM5OCArIHhvZmYsXHJcblx0XHRcdHNjYWxlICogNTUwICsgeW9mZixcclxuXHRcdFx0c2NhbGUgKiAzODUgKyB4b2ZmLFxyXG5cdFx0XHRzY2FsZSAqIDU5NCArIHlvZmZcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN0eC5iZXppZXJDdXJ2ZVRvKFxyXG5cdFx0XHRzY2FsZSAqIDM3MSArIHhvZmYsXHJcblx0XHRcdHNjYWxlICogNTUwICsgeW9mZixcclxuXHRcdFx0c2NhbGUgKiAyMzMgKyB4b2ZmLFxyXG5cdFx0XHRzY2FsZSAqIDM3OSArIHlvZmYsXHJcblx0XHRcdHNjYWxlICogMjIyICsgeG9mZixcclxuXHRcdFx0c2NhbGUgKiAzNjcgKyB5b2ZmXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5jdHguYmV6aWVyQ3VydmVUbyhcclxuXHRcdFx0c2NhbGUgKiAxMjEgKyB4b2ZmLFxyXG5cdFx0XHRzY2FsZSAqIDI1NyArIHlvZmYsXHJcblx0XHRcdHNjYWxlICogMjk0ICsgeG9mZixcclxuXHRcdFx0c2NhbGUgKiAxMjUgKyB5b2ZmLFxyXG5cdFx0XHRzY2FsZSAqIDM4NSArIHhvZmYsXHJcblx0XHRcdHNjYWxlICogMjQ2ICsgeW9mZlxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmN0eC5zYXZlKCk7XHJcblx0XHR0aGlzLmN0eC5jbGlwKCk7XHJcblx0XHR0aGlzLmN0eC5saW5lV2lkdGggKj0gMjtcclxuXHRcdHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cdFx0dGhpcy5jdHgucmVzdG9yZSgpO1xyXG5cclxuXHRcdGlmIChoZWFydEluZGV4ICsgMSA8PSB0aGlzLmxpdmVzKSB0aGlzLmN0eC5maWxsKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdMaXZlcygpIHtcclxuXHRcdGNvbnN0IHNlY3Rpb25TdGFydFggPSAzMDtcclxuXHRcdGNvbnN0IHNlY3Rpb25TdGFydFkgPSAxMTtcclxuXHRcdGNvbnN0IHNlY3Rpb25XID0gMTYwO1xyXG5cdFx0Y29uc3Qgc2VjdGlvbkggPSA1MDtcclxuXHRcdHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuNSknO1xyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHR0aGlzLmN0eC5yb3VuZFJlY3Qoc2VjdGlvblN0YXJ0WCwgc2VjdGlvblN0YXJ0WSwgc2VjdGlvblcsIHNlY3Rpb25ILCAxMCk7XHJcblx0XHR0aGlzLmN0eC5maWxsKCk7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuXHRcdFx0dGhpcy5kcmF3SGVhcnQoc2VjdGlvblcsIGksIHNlY3Rpb25TdGFydFgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGRyYXcoKSB7XHJcblx0XHR0aGlzLmRyYXdMaXZlcygpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgZ2FtZU9iamVjdCBmcm9tICcuLi9wdWJsaWMvZ2FtZU9iamVjdCc7XHJcbmltcG9ydCBDb2xsaXNpb25zIGZyb20gJy4vY29sbGlzaW9ucyc7XHJcbmltcG9ydCBIdWQgZnJvbSAnLi9odWQnO1xyXG5pbXBvcnQgUGxhdGZvcm1zIGZyb20gJy4vcGxhdGZvcm1zJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcblxyXG5jb25zdCB3b3JsZCA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ybGQnKTtcclxuY29uc3QgY3R4ID0gPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRD53b3JsZC5nZXRDb250ZXh0KCcyZCcsIHsgYWxwaGE6IGZhbHNlIH0pO1xyXG5cclxuY29uc3QgdGl0bGVEaXYgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlRGl2Jyk7XHJcbmNvbnN0IHN0YXJ0QnRuID0gPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydEJ0bicpO1xyXG5cclxuLy8gRm9yIGdhbWUgbG9vcFxyXG5sZXQgcmVxdWVzdElkOiBudW1iZXIgfCBudWxsLCBub3c6IG51bWJlciwgdGhlbjogbnVtYmVyLCBlbGFwc2VkOiBudW1iZXIsIGZwc0ludGVydmFsOiBudW1iZXI7XHJcblxyXG5sZXQgZnJhbWVSYXRlID0gNjA7XHJcbmxldCBwYXVzZWQgPSBmYWxzZTtcclxubGV0IGxldmVsc1N0YXJ0ZWQgPSAtMTtcclxuXHJcbi8vIENsYXNzZXNcclxubGV0IHBsYXRmb3JtczogUGxhdGZvcm1zLCBwbGF5ZXI6IFBsYXllciwgaHVkOiBIdWQsIGNvbGxpc2lvbnM6IENvbGxpc2lvbnM7XHJcblxyXG5jb25zdCBlbmRHYW1lID0gKCkgPT4ge1xyXG5cdGlmIChyZXF1ZXN0SWQpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJZCk7XHJcblx0cmVxdWVzdElkID0gbnVsbDtcclxuXHQvLyBwcmVwR2FtZSgpO1xyXG5cdC8vIHN0YXJ0QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdC8vIHN0YXJ0QnRuLmlubmVySFRNTCA9ICdQbGF5IEFnYWluJztcclxuXHQvLyBsZXZlbHNTdGFydGVkID0gLTE7XHJcbn07XHJcblxyXG5jb25zdCBnYW1lTG9vcCA9ICgpID0+IHtcclxuXHRyZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xyXG5cclxuXHRmcHNJbnRlcnZhbCA9IDEwMDAgLyBmcmFtZVJhdGU7XHJcblx0bm93ID0gRGF0ZS5ub3coKTtcclxuXHRlbGFwc2VkID0gbm93IC0gKHRoZW4gfHwgMCk7XHJcblxyXG5cdGlmIChlbGFwc2VkID4gZnBzSW50ZXJ2YWwpIHtcclxuXHRcdHRoZW4gPSBub3cgLSAoZWxhcHNlZCAlIGZwc0ludGVydmFsKTtcclxuXHJcblx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIHdvcmxkLndpZHRoLCB3b3JsZC5oZWlnaHQpO1xyXG5cdFx0aWYgKCFwYXVzZWQpIHtcclxuXHRcdFx0cGxhdGZvcm1zLm1vdmUoKTtcclxuXHRcdFx0cGxheWVyLnNwZWVkID0gZ2FtZU9iamVjdC5sZXZlbHNbcGxhdGZvcm1zLmN1cnJlbnRMZXZlbF0uc3BlZWQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRwbGF5ZXIuc3BlZWQgPSAwO1xyXG5cdFx0fVxyXG5cdFx0cGxhdGZvcm1zLmRyYXcoKTtcclxuXHRcdHBsYXllci5kcmF3KCk7XHJcblx0XHRodWQuZHJhdygpO1xyXG5cclxuXHRcdGlmIChwbGF0Zm9ybXMucGxhdHNWaXNpYmxlPy5bMF0/LmluZGV4ID09PSAwICYmIHBsYXRmb3Jtcy5jdXJyZW50TGV2ZWwgPiBsZXZlbHNTdGFydGVkKSB7XHJcblx0XHRcdGxldmVsc1N0YXJ0ZWQgPSBwbGF0Zm9ybXMuY3VycmVudExldmVsO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aXRsZURpdi5jaGlsZHJlblswXS5pbm5lckhUTUwgPSBgTGV2ZWwgJHtwbGF0Zm9ybXMuY3VycmVudExldmVsICsgMX1gO1xyXG5cdFx0XHRcdHRpdGxlRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGl0bGVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0fSwgMTAwMCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGh1ZC5saXZlcyA9PT0gMCkgZW5kR2FtZSgpO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuXHRnYW1lTG9vcCgpO1xyXG59O1xyXG5cclxuY29uc3QgcHJlcEdhbWUgPSAoKSA9PiB7XHJcblx0T2JqZWN0LmZyZWV6ZShnYW1lT2JqZWN0KTtcclxuXHRodWQgPSBuZXcgSHVkKGN0eCwgd29ybGQpO1xyXG5cdHBsYXllciA9IG5ldyBQbGF5ZXIoY3R4LCB3b3JsZCwgaHVkKTtcclxuXHRjb2xsaXNpb25zID0gbmV3IENvbGxpc2lvbnMoY3R4LCB3b3JsZCwgcGxheWVyLCBodWQpO1xyXG5cdHBsYXRmb3JtcyA9IG5ldyBQbGF0Zm9ybXMoY3R4LCB3b3JsZCwgcGxheWVyLCBodWQsIGNvbGxpc2lvbnMsIGdhbWVPYmplY3QpO1xyXG5cdHBsYXRmb3Jtcy5zZXRVcCgpO1xyXG5cclxuXHRzdGFydEdhbWUoKTtcclxuXHRzdGFydEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59O1xyXG5cclxucHJlcEdhbWUoKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcclxuXHRzd2l0Y2ggKGUuY29kZSkge1xyXG5cdFx0Y2FzZSAnU3BhY2UnOlxyXG5cdFx0XHRpZiAocmVxdWVzdElkKSB7XHJcblx0XHRcdFx0aWYgKHBhdXNlZCkge1xyXG5cdFx0XHRcdFx0cGF1c2VkID0gZmFsc2U7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICghcGxheWVyLmxvYWRpbmdKdW1wKSBwbGF5ZXIubG9hZGluZ0p1bXAgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcclxuXHRzd2l0Y2ggKGUuY29kZSkge1xyXG5cdFx0Y2FzZSAnRXNjYXBlJzpcclxuXHRcdFx0aWYgKHBhdXNlZCkge1xyXG5cdFx0XHRcdHBhdXNlZCA9IGZhbHNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHBhdXNlZCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdGNhc2UgJ1NwYWNlJzpcclxuXHRcdFx0cGxheWVyLmp1bXAoKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59KTtcclxuXHJcbnN0YXJ0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcblx0c3RhcnRHYW1lKCk7XHJcblx0c3RhcnRCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufTtcclxuIiwiaW1wb3J0IENvbGxpc2lvbnMgZnJvbSAnLi9jb2xsaXNpb25zJztcclxuaW1wb3J0IEh1ZCBmcm9tICcuL2h1ZCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBDb250ZXh0LCBJR2FtZU9iamVjdCwgSUxldmVsLCBJUGxhdE9iamVjdCwgSVBsYXRmb3JtLCBJVmlzaWJsZVBsYXQgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtcyB7XHJcblx0cHJpdmF0ZSBjdHg6IENvbnRleHQ7XHJcblx0cHJpdmF0ZSB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblx0cHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcclxuXHRwcml2YXRlIGh1ZDogSHVkO1xyXG5cdHByaXZhdGUgY29sbGlzaW9uczogQ29sbGlzaW9ucztcclxuXHRwcml2YXRlIGdhbWVPYmplY3Q6IElHYW1lT2JqZWN0O1xyXG5cdHB1YmxpYyBjdXJyZW50TGV2ZWw6IG51bWJlcjtcclxuXHRwdWJsaWMgcGxhdHNWaXNpYmxlOiBJVmlzaWJsZVBsYXRbXTtcclxuXHRwcml2YXRlIGJhY2tncm91bmRYOiBudW1iZXI7XHJcblx0cHVibGljIGdhbWVPdmVyOiBib29sZWFuO1xyXG5cdHByaXZhdGUgY29sbGlzaW9uTWFyZ2luOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBpbWFnZVBhdGhzOiBhbnlbXTtcclxuXHRwcml2YXRlIGltYWdlczogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdGN0eDogQ29udGV4dCxcclxuXHRcdHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudCxcclxuXHRcdHBsYXllcjogUGxheWVyLFxyXG5cdFx0aHVkOiBIdWQsXHJcblx0XHRjb2xsaXNpb25zOiBDb2xsaXNpb25zLFxyXG5cdFx0Z2FtZU9iamVjdDogYW55XHJcblx0KSB7XHJcblx0XHR0aGlzLmN0eCA9IGN0eDtcclxuXHRcdHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cdFx0dGhpcy5odWQgPSBodWQ7XHJcblx0XHR0aGlzLmNvbGxpc2lvbnMgPSBjb2xsaXNpb25zO1xyXG5cdFx0dGhpcy5nYW1lT2JqZWN0ID0gZ2FtZU9iamVjdDtcclxuXHRcdHRoaXMuY3VycmVudExldmVsID0gMDtcclxuXHRcdHRoaXMucGxhdHNWaXNpYmxlID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW5kZXg6IDAsXHJcblx0XHRcdFx0eDogMCxcclxuXHRcdFx0fSxcclxuXHRcdF07XHJcblx0XHR0aGlzLmJhY2tncm91bmRYID0gMDtcclxuXHRcdHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcclxuXHRcdHRoaXMuY29sbGlzaW9uTWFyZ2luID0gMzA7XHJcblx0XHR0aGlzLmltYWdlUGF0aHMgPSBbXHJcblx0XHRcdCcuLi9wdWJsaWMvYmdNb3VudGFpbnMucG5nJyxcclxuXHRcdFx0Ly8gUGxhdGZvcm0gVGV4dHVyZXNcclxuXHRcdFx0Jy4uL3B1YmxpYy93b29kUGxhdC5wbmcnLFxyXG5cdFx0XHQnLi4vcHVibGljL2RpcnRQbGF0LnBuZycsXHJcblx0XHRcdC8vIERlY29yXHJcblx0XHRcdCcuLi9wdWJsaWMvc3RhcnRTaWduLnBuZycsXHJcblx0XHRcdC8vIE9ic3RpY2xlc1xyXG5cdFx0XHQnLi4vcHVibGljL3JvY2sxLnBuZycsXHJcblx0XHRcdCcuLi9wdWJsaWMvcm9jazIucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy9yb2NrMy5wbmcnLFxyXG5cdFx0XTtcclxuXHRcdHRoaXMuaW1hZ2VzID0ge307XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgc2V0VXAoKSB7XHJcblx0XHRjb25zdCBwcmVsb2FkSW1hZ2VzID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBwcm9taXNlcyA9IHRoaXMuaW1hZ2VQYXRocy5tYXAoKHBhdGg6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBuYW1lID0gcGF0aC5zcGxpdCgnLycpLnBvcCgpPy5zcGxpdCgnLicpWzBdO1xyXG5cdFx0XHRcdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHJcblx0XHRcdFx0XHRpbWFnZS5zcmMgPSBwYXRoO1xyXG5cdFx0XHRcdFx0aW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKFtuYW1lLCBpbWFnZV0pO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdGltYWdlLm9uZXJyb3IgPSAoKSA9PiByZWplY3QoYEltYWdlIGZhaWxlZCB0byBsb2FkOiAke3BhdGh9YCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBpbWdBcnJheXRlbXA6IGFueVtdID0gYXdhaXQgcHJlbG9hZEltYWdlcygpO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoaW1nQXJyYXl0ZW1wKTtcclxuXHR9XHJcblxyXG5cdC8vIHByaXZhdGUgY2hlY2tPYnN0aWNsZUNvbGxpc2lvbihvYnN0aWNsZTogSVBsYXRPYmplY3QsIHhWYWw6IG51bWJlciwgeVZhbDogbnVtYmVyKSB7XHJcblx0Ly8gXHRpZiAoXHJcblxyXG5cdC8vIFx0XHR0aGlzLnBsYXllci54ICsgdGhpcy5wbGF5ZXIudyA+PSB4VmFsICsgdGhpcy5jb2xsaXNpb25NYXJnaW4gJiYgLy8gQ2hlY2sgcGxheWVyIHJpZ2h0IGNvbGxpc2lvblxyXG5cdC8vIFx0XHR0aGlzLnBsYXllci54IDw9IHhWYWwgKyB0aGlzLmltYWdlc1tvYnN0aWNsZS5uYW1lXS53aWR0aCAmJiAvLyBDaGVjayBwbGF5ZXIgbGVmdCBjb2xsaXNpb25cclxuXHQvLyBcdFx0dGhpcy5wbGF5ZXIueSA8PSB5VmFsICsgKHRoaXMuaW1hZ2VzW29ic3RpY2xlLm5hbWVdLmhlaWdodCB8fCB0aGlzLndvcmxkLmhlaWdodCAtIHlWYWwpICYmIC8vIENoZWNrIHBsYXllciB0b3AgY29sbGlzaW9uXHJcblx0Ly8gXHRcdHRoaXMucGxheWVyLnkgKyB0aGlzLnBsYXllci5oID4geVZhbCAvLyBDaGVjayBwbGF5ZXIgYm90dG9tIGNvbGxpc2lvblxyXG5cdC8vIFx0KSB7XHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKCdDb2xsaXNpb24gd2l0aDogJywgb2JzdGljbGUubmFtZSk7XHJcblx0Ly8gXHRcdHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHJcblx0cHJpdmF0ZSBuZXh0UGxhdGZvcm0oKSB7XHJcblx0XHRjb25zdCBsYXN0VmlzaWJsZVBsYXQ6IElWaXNpYmxlUGxhdCA9IHRoaXMucGxhdHNWaXNpYmxlW3RoaXMucGxhdHNWaXNpYmxlLmxlbmd0aCAtIDFdO1xyXG5cdFx0Y29uc3QgcGxhdHNSZWY6IElQbGF0Zm9ybVtdID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0ucGxhdGZvcm1zO1xyXG5cdFx0Y29uc3QgbGFzdFBsYXRSZWY6IElQbGF0Zm9ybSA9IHBsYXRzUmVmW2xhc3RWaXNpYmxlUGxhdC5pbmRleF07XHJcblx0XHRjb25zdCBuZXh0UGxhdDogSVBsYXRmb3JtID1cclxuXHRcdFx0dGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0ucGxhdGZvcm1zW2xhc3RWaXNpYmxlUGxhdC5pbmRleCArIDFdO1xyXG5cclxuXHRcdGlmICghbmV4dFBsYXQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ05vIE1vcmUgUGxhdGZvcm1zJyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnBsYXRzVmlzaWJsZS5wdXNoKHtcclxuXHRcdFx0aW5kZXg6IGxhc3RWaXNpYmxlUGxhdC5pbmRleCArIDEsXHJcblx0XHRcdHg6IGxhc3RWaXNpYmxlUGxhdC54ICsgbGFzdFBsYXRSZWYubGVuICsgbGFzdFBsYXRSZWYuZ2FwVG9OZXh0LFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHRoaXMucGxhdHNWaXNpYmxlWzBdLnggKyBwbGF0c1JlZlt0aGlzLnBsYXRzVmlzaWJsZVswXS5pbmRleF0ubGVuIDwgMCkgdGhpcy5wbGF0c1Zpc2libGUuc2hpZnQoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBtb3ZlKCkge1xyXG5cdFx0Y29uc3QgbGV2ZWw6IElMZXZlbCA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdO1xyXG5cdFx0Y29uc3QgcGxhdFJlZjogSVBsYXRmb3JtID0gbGV2ZWwucGxhdGZvcm1zW3RoaXMucGxhdHNWaXNpYmxlW3RoaXMucGxhdHNWaXNpYmxlLmxlbmd0aCAtIDFdLmluZGV4XTtcclxuXHJcblx0XHRjb25zdCBsYXN0UGxhdFggPSB0aGlzLnBsYXRzVmlzaWJsZVt0aGlzLnBsYXRzVmlzaWJsZS5sZW5ndGggLSAxXS54O1xyXG5cclxuXHRcdGlmIChsYXN0UGxhdFggKyBwbGF0UmVmLmxlbiA8PSB0aGlzLndvcmxkLndpZHRoKSB0aGlzLm5leHRQbGF0Zm9ybSgpO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF0c1Zpc2libGUubGVuZ3RoOyBpKyspIHRoaXMucGxhdHNWaXNpYmxlW2ldLnggLT0gbGV2ZWwuc3BlZWQ7XHJcblx0XHR0aGlzLmJhY2tncm91bmRYIC09IGxldmVsLnNwZWVkIC8gODtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZHJhd0RlY29yRm9yUGxhdChkZWNvcjogSVBsYXRPYmplY3RbXSwgcGxhdFlUb3A6IG51bWJlciwgcGxhdFg6IG51bWJlciwgcGxhdExlbjogbnVtYmVyKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRlY29yPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpbWdTcmM6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLmltYWdlc1tkZWNvcltpXS5uYW1lXTtcclxuXHRcdFx0Y29uc3QgZGVjb3JYVmFscyA9IGRlY29yW2ldLnhMb2NzT25QbGF0QnlQZXJjO1xyXG5cclxuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5pbWFnZXNbZGVjb3JbaV0ubmFtZV0uaGVpZ2h0KTtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkZWNvclhWYWxzPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0XHRcdGltZ1NyYyxcclxuXHRcdFx0XHRcdHBsYXRYICsgcGxhdExlbiAqIGRlY29yWFZhbHNbaV0sXHJcblx0XHRcdFx0XHRwbGF0WVRvcCAtIHRoaXMuaW1hZ2VzW2RlY29yW2ldLm5hbWVdLmhlaWdodCArIDEwLFxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbZGVjb3JbaV0ubmFtZV0ud2lkdGgsXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tkZWNvcltpXS5uYW1lXS5oZWlnaHRcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdPYnN0aWNsZU9uUGxhdChcclxuXHRcdG9ic3RpY2xlczogSVBsYXRPYmplY3RbXSxcclxuXHRcdHBsYXRZVG9wOiBudW1iZXIsXHJcblx0XHRwbGF0WDogbnVtYmVyLFxyXG5cdFx0cGxhdExlbjogbnVtYmVyLFxyXG5cdFx0cGxhdEluZGV4OiBudW1iZXJcclxuXHQpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb2JzdGljbGVzPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpbWdTcmM6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV07XHJcblx0XHRcdGNvbnN0IG9ic3RpY2xlWFZhbHMgPSBvYnN0aWNsZXNbaV0ueExvY3NPblBsYXRCeVBlcmM7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG9ic3RpY2xlWFZhbHM/Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRcdFx0aW1nU3JjLFxyXG5cdFx0XHRcdFx0cGxhdFggKyBwbGF0TGVuICogb2JzdGljbGVYVmFsc1tpXSxcclxuXHRcdFx0XHRcdHBsYXRZVG9wIC0gdGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdLmhlaWdodCArIDEwLFxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdLndpZHRoLFxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdLmhlaWdodFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuY29sbGlzaW9ucy5jaGVja0ZvckNvbGxpc2lvbih7XHJcblx0XHRcdFx0XHR4MTogdGhpcy5wbGF5ZXIueCxcclxuXHRcdFx0XHRcdHkxOiB0aGlzLnBsYXllci55LFxyXG5cdFx0XHRcdFx0eDI6IHBsYXRYICsgcGxhdExlbiAqIG9ic3RpY2xlWFZhbHNbaV0sXHJcblx0XHRcdFx0XHR5MjogcGxhdFlUb3AgLSB0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0uaGVpZ2h0ICsgMTAsXHJcblx0XHRcdFx0XHR3MTogdGhpcy5wbGF5ZXIudyxcclxuXHRcdFx0XHRcdGgxOiB0aGlzLnBsYXllci5oLFxyXG5cdFx0XHRcdFx0dzI6IHRoaXMuaW1hZ2VzW29ic3RpY2xlc1tpXS5uYW1lXS53aWR0aCxcclxuXHRcdFx0XHRcdGgyOlxyXG5cdFx0XHRcdFx0XHR0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0uaGVpZ2h0IHx8XHJcblx0XHRcdFx0XHRcdHRoaXMud29ybGQuaGVpZ2h0IC0gKHBsYXRZVG9wIC0gdGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdLmhlaWdodCArIDEwKSxcclxuXHRcdFx0XHRcdG1hcmdpbjogdGhpcy5jb2xsaXNpb25NYXJnaW4sXHJcblx0XHRcdFx0XHRvYmplY3Q6IGAke29ic3RpY2xlc1tpXS5uYW1lfV8ke3BsYXRJbmRleH1fJHtvYnN0aWNsZVhWYWxzW2ldfWAsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkcmF3KCkge1xyXG5cdFx0aWYgKCF0aGlzLmltYWdlcz8uYmdNb3VudGFpbnMpIHJldHVybjtcclxuXHRcdC8vIERyYXcgQkdcclxuXHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0dGhpcy5pbWFnZXMuYmdNb3VudGFpbnMsXHJcblx0XHRcdDAsXHJcblx0XHRcdDAsXHJcblx0XHRcdHRoaXMuaW1hZ2VzLmJnTW91bnRhaW5zLndpZHRoLFxyXG5cdFx0XHR0aGlzLmltYWdlcy5iZ01vdW50YWlucy5oZWlnaHQsXHJcblx0XHRcdHRoaXMuYmFja2dyb3VuZFgsXHJcblx0XHRcdHRoaXMud29ybGQuaGVpZ2h0IC0gdGhpcy5pbWFnZXMuYmdNb3VudGFpbnMuaGVpZ2h0LFxyXG5cdFx0XHR0aGlzLmltYWdlcy5iZ01vdW50YWlucy53aWR0aCxcclxuXHRcdFx0dGhpcy5pbWFnZXMuYmdNb3VudGFpbnMuaGVpZ2h0XHJcblx0XHQpO1xyXG5cclxuXHRcdGZvciAoY29uc3QgcGxhdCBvZiB0aGlzLnBsYXRzVmlzaWJsZSkge1xyXG5cdFx0XHRjb25zdCBsZXZlbDogSUxldmVsID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF07XHJcblx0XHRcdGNvbnN0IGltZ1cgPVxyXG5cdFx0XHRcdHRoaXMuaW1hZ2VzW2xldmVsLnBsYXRmb3JtVGV4dHVyZV0ud2lkdGggKiAobGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLmxlbiAvIGxldmVsLm1heFBsYXRMZW4pO1xyXG5cclxuXHRcdFx0Y29uc3QgcGxhdGZvcm06IElQbGF0Zm9ybSA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdLnBsYXRmb3Jtc1twbGF0LmluZGV4XSB8fCBbXTtcclxuXHJcblx0XHRcdGlmIChwbGF0Zm9ybT8uZGVjb3IpIHtcclxuXHRcdFx0XHR0aGlzLmRyYXdEZWNvckZvclBsYXQoXHJcblx0XHRcdFx0XHRwbGF0Zm9ybS5kZWNvcixcclxuXHRcdFx0XHRcdGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55LFxyXG5cdFx0XHRcdFx0cGxhdC54LFxyXG5cdFx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLmxlblxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHBsYXRmb3JtPy5vYnN0aWNsZXMpIHtcclxuXHRcdFx0XHR0aGlzLmRyYXdPYnN0aWNsZU9uUGxhdChwbGF0Zm9ybS5vYnN0aWNsZXMsIHBsYXRmb3JtLnksIHBsYXQueCwgcGxhdGZvcm0ubGVuLCBwbGF0LmluZGV4KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRcdHRoaXMuaW1hZ2VzW2xldmVsLnBsYXRmb3JtVGV4dHVyZV0sXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdGltZ1csXHJcblx0XHRcdFx0dGhpcy5pbWFnZXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlXS5oZWlnaHQsXHJcblx0XHRcdFx0cGxhdC54LFxyXG5cdFx0XHRcdGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55LFxyXG5cdFx0XHRcdGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS5sZW4sXHJcblx0XHRcdFx0bGV2ZWwucGxhdGZvcm1IIHx8IHRoaXMud29ybGQuaGVpZ2h0IC0gbGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnlcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHRoaXMuY29sbGlzaW9ucy5jaGVja0ZvclBsYXRDb2xsaXNpb24oe1xyXG5cdFx0XHRcdHgxOiB0aGlzLnBsYXllci54LFxyXG5cdFx0XHRcdHkxOiB0aGlzLnBsYXllci55LFxyXG5cdFx0XHRcdHgyOiBwbGF0LngsXHJcblx0XHRcdFx0eTI6IGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55LFxyXG5cdFx0XHRcdHcxOiB0aGlzLnBsYXllci53LFxyXG5cdFx0XHRcdGgxOiB0aGlzLnBsYXllci5oLFxyXG5cdFx0XHRcdHcyOiBsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ubGVuLFxyXG5cdFx0XHRcdGgyOiBsZXZlbC5wbGF0Zm9ybUggfHwgdGhpcy53b3JsZC5oZWlnaHQgLSBsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ueSxcclxuXHRcdFx0XHRtYXJnaW46IHRoaXMuY29sbGlzaW9uTWFyZ2luLFxyXG5cdFx0XHRcdG9iamVjdDogYCR7dGhpcy5jdXJyZW50TGV2ZWx9XyR7cGxhdC5pbmRleH1gLFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMyknO1xyXG5cdFx0XHQvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0Ly8gdGhpcy5jdHgucmVjdCh0aGlzLnBsYXRmb3Jtc1tpXS54LCB0aGlzLnBsYXRmb3Jtc1tpXS55LCB0aGlzLnBsYXRmb3Jtc1tpXS53LCB0aGlzLmgpO1xyXG5cdFx0XHQvLyB0aGlzLmN0eC5maWxsKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBIdWQgZnJvbSAnLi9odWQnO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG5cdHByaXZhdGUgY3R4OiBDb250ZXh0O1xyXG5cdHByaXZhdGUgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cdHByaXZhdGUgaHVkOiBIdWQ7XHJcblx0cHJpdmF0ZSBmcmFtZUltZzogSFRNTEltYWdlRWxlbWVudDtcclxuXHRwcml2YXRlIHdoZWVsSW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cdHByaXZhdGUgYXNwZWN0UmF0aW86IG51bWJlcjtcclxuXHRwdWJsaWMgeDogbnVtYmVyO1xyXG5cdHB1YmxpYyB5OiBudW1iZXI7XHJcblx0cHVibGljIHc6IG51bWJlcjtcclxuXHRwdWJsaWMgaDogbnVtYmVyO1xyXG5cdHB1YmxpYyBpc0luQWlyOiBib29sZWFuO1xyXG5cdHB1YmxpYyBqdW1wVmVsU3RhcnRSZXNldDogbnVtYmVyO1xyXG5cdHB1YmxpYyBqdW1wVmVsU3RhcnQ6IG51bWJlcjtcclxuXHRwdWJsaWMgeVZlbG9jaXR5OiBudW1iZXI7XHJcblx0cHVibGljIHlBY2M6IG51bWJlcjtcclxuXHRwcml2YXRlIHJvdGF0aW9uOiBudW1iZXI7XHJcblx0cHJpdmF0ZSByb3RhdGlvblNwZWVkOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBpc0p1bXBpbmc6IGJvb2xlYW47XHJcblx0cHVibGljIGxvYWRpbmdKdW1wOiBib29sZWFuO1xyXG5cdHByaXZhdGUgd2hlZWxSb3Q6IG51bWJlcjtcclxuXHRwcml2YXRlIHJvdENvb3Jkc0Zvckp1bXA6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcclxuXHRwdWJsaWMgc3BlZWQ6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQsIGh1ZDogSHVkKSB7XHJcblx0XHR0aGlzLmN0eCA9IGN0eDtcclxuXHRcdHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHRcdHRoaXMuZnJhbWVJbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdHRoaXMuZnJhbWVJbWcuc3JjID0gJy4uL3B1YmxpYy9mcmFtZTIucG5nJztcclxuXHRcdHRoaXMud2hlZWxJbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdHRoaXMud2hlZWxJbWcuc3JjID0gJy4uL3B1YmxpYy93aGVlbC5wbmcnO1xyXG5cdFx0dGhpcy5hc3BlY3RSYXRpbyA9IDEuMTtcclxuXHRcdHRoaXMueCA9IDEwMDtcclxuXHRcdHRoaXMueSA9IDEwMDtcclxuXHRcdHRoaXMudyA9IDE3MDtcclxuXHRcdHRoaXMuaCA9IHRoaXMudyAvIHRoaXMuYXNwZWN0UmF0aW87XHJcblx0XHR0aGlzLmlzSW5BaXIgPSB0cnVlO1xyXG5cdFx0dGhpcy5qdW1wVmVsU3RhcnRSZXNldCA9IDEwO1xyXG5cdFx0dGhpcy5qdW1wVmVsU3RhcnQgPSB0aGlzLmp1bXBWZWxTdGFydFJlc2V0O1xyXG5cdFx0dGhpcy55VmVsb2NpdHkgPSAwO1xyXG5cdFx0dGhpcy55QWNjID0gMC44O1xyXG5cdFx0dGhpcy5yb3RhdGlvbiA9IDA7XHJcblx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwO1xyXG5cdFx0dGhpcy5pc0p1bXBpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMubG9hZGluZ0p1bXAgPSBmYWxzZTtcclxuXHRcdHRoaXMud2hlZWxSb3QgPSAwO1xyXG5cdFx0dGhpcy5yb3RDb29yZHNGb3JKdW1wID0geyB4OiAwLCB5OiAwIH07XHJcblx0XHR0aGlzLnNwZWVkID0gMDtcclxuXHRcdHRoaXMuaHVkID0gaHVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxhbmQoeTogbnVtYmVyKSB7XHJcblx0XHRpZiAodGhpcy5yb3RhdGlvbiA8IDApIHJldHVybjtcclxuXHRcdHRoaXMuaXNJbkFpciA9IGZhbHNlO1xyXG5cdFx0dGhpcy5pc0p1bXBpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMucm90YXRpb25TcGVlZCA9IDA7XHJcblx0XHR0aGlzLnJvdGF0aW9uID0gMDtcclxuXHRcdHRoaXMueVZlbG9jaXR5ID0gMDtcclxuXHRcdHRoaXMueSA9IHkgLSB0aGlzLmg7XHJcblx0XHRpZiAoIXRoaXMubG9hZGluZ0p1bXApIHRoaXMuanVtcFZlbFN0YXJ0ID0gdGhpcy5qdW1wVmVsU3RhcnRSZXNldDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBqdW1wKCkge1xyXG5cdFx0aWYgKHRoaXMuaXNKdW1waW5nIHx8IHRoaXMuaXNJbkFpciB8fCB0aGlzLnlWZWxvY2l0eSA8IDApIHJldHVybjtcclxuXHRcdHRoaXMucm90YXRpb25TcGVlZCA9IHRoaXMuanVtcFZlbFN0YXJ0O1xyXG5cdFx0dGhpcy5pc0p1bXBpbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5sb2FkaW5nSnVtcCA9IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMuaXNJbkFpciA9IHRydWU7XHJcblx0XHR0aGlzLnlWZWxvY2l0eSA9IHRoaXMuanVtcFZlbFN0YXJ0O1xyXG5cdFx0dGhpcy5qdW1wVmVsU3RhcnQgPSB0aGlzLmp1bXBWZWxTdGFydFJlc2V0O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsb2FkSnVtcCgpIHtcclxuXHRcdGlmICh0aGlzLmp1bXBWZWxTdGFydCA+PSAyMCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5qdW1wVmVsU3RhcnQgKz0gMC41O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3RnJhbWUoKSB7XHJcblx0XHQvLyBjb25zdCB5T2Zmc2V0ID0gNTtcclxuXHRcdHRoaXMuY3R4LnNhdmUoKTtcclxuXHRcdHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLnJvdENvb3Jkc0Zvckp1bXAueCwgdGhpcy5yb3RDb29yZHNGb3JKdW1wLnkpO1xyXG5cdFx0dGhpcy5jdHgucm90YXRlKCh0aGlzLnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODApO1xyXG5cdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHR0aGlzLmZyYW1lSW1nLFxyXG5cdFx0XHQtdGhpcy53aGVlbEltZy53aWR0aCAvIDIsXHJcblx0XHRcdC10aGlzLmggKyB0aGlzLndoZWVsSW1nLmhlaWdodCAvIDIsXHJcblx0XHRcdHRoaXMudyxcclxuXHRcdFx0dGhpcy5oXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5jdHgucmVzdG9yZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3V2hlZWxzKCkge1xyXG5cdFx0Y29uc3Qgcm90T2Zmc2V0ID0gdGhpcy5odWQubGl2ZXMgPT09IDMgPyAwIDogdGhpcy5odWQubGl2ZXMgPT09IDIgPyAyIDogNDtcclxuXHRcdHRoaXMuY3R4LnNhdmUoKTtcclxuXHRcdHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLnJvdENvb3Jkc0Zvckp1bXAueCArIHJvdE9mZnNldCwgdGhpcy5yb3RDb29yZHNGb3JKdW1wLnkpO1xyXG5cdFx0dGhpcy5jdHgucm90YXRlKCh0aGlzLnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODApOyAvLyBSb3RhdGUgZm9yIGp1bXBcclxuXHRcdHRoaXMuY3R4LnJvdGF0ZSgodGhpcy53aGVlbFJvdCAqIE1hdGguUEkpIC8gMTgwKTsgLy8gUm90YXRlIGZvciB3aGVlbCBzcGluXHJcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdHRoaXMud2hlZWxJbWcsXHJcblx0XHRcdC10aGlzLndoZWVsSW1nLndpZHRoIC8gMiAtIHJvdE9mZnNldCxcclxuXHRcdFx0LXRoaXMud2hlZWxJbWcuaGVpZ2h0IC8gMixcclxuXHRcdFx0dGhpcy53aGVlbEltZy53aWR0aCxcclxuXHRcdFx0dGhpcy53aGVlbEltZy5oZWlnaHRcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN0eC5yZXN0b3JlKCk7XHJcblxyXG5cdFx0dGhpcy5jdHguc2F2ZSgpO1xyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKHRoaXMucm90Q29vcmRzRm9ySnVtcC54LCB0aGlzLnJvdENvb3Jkc0Zvckp1bXAueSArIHJvdE9mZnNldCk7XHJcblx0XHR0aGlzLmN0eC5yb3RhdGUoKHRoaXMucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7IC8vIFJvdGF0ZSBmb3IganVtcFxyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKC10aGlzLnJvdENvb3Jkc0Zvckp1bXAueCwgLXRoaXMucm90Q29vcmRzRm9ySnVtcC55KTsgLy8gTW92ZSB0byBzdGFydFxyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKHRoaXMueCArIHRoaXMudyAtIHRoaXMud2hlZWxJbWcud2lkdGggLyAyLCB0aGlzLnJvdENvb3Jkc0Zvckp1bXAueSk7XHJcblx0XHR0aGlzLmN0eC5yb3RhdGUoKHRoaXMud2hlZWxSb3QgKiBNYXRoLlBJKSAvIDE4MCk7IC8vIFJvdGF0ZSBmb3Igd2hlZWwgc3BpblxyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKC0odGhpcy54ICsgdGhpcy53IC0gdGhpcy53aGVlbEltZy53aWR0aCAvIDIpLCAtdGhpcy5yb3RDb29yZHNGb3JKdW1wLnkpOyAvLyBNb3ZlIHRvIHN0YXJ0XHJcblx0XHR0aGlzLmN0eC50cmFuc2xhdGUodGhpcy5yb3RDb29yZHNGb3JKdW1wLngsIHRoaXMucm90Q29vcmRzRm9ySnVtcC55KTtcclxuXHJcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdHRoaXMud2hlZWxJbWcsXHJcblx0XHRcdC0odGhpcy5yb3RDb29yZHNGb3JKdW1wLnggLSB0aGlzLngpICsgdGhpcy53IC0gdGhpcy53aGVlbEltZy53aWR0aCxcclxuXHRcdFx0LXRoaXMud2hlZWxJbWcuaGVpZ2h0IC8gMiAtIHJvdE9mZnNldCxcclxuXHRcdFx0dGhpcy53aGVlbEltZy53aWR0aCxcclxuXHRcdFx0dGhpcy53aGVlbEltZy5oZWlnaHRcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN0eC5yZXN0b3JlKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhdygpIHtcclxuXHRcdHRoaXMud2hlZWxSb3QgKz0gdGhpcy5zcGVlZDtcclxuXHJcblx0XHRpZiAodGhpcy5sb2FkaW5nSnVtcCkgdGhpcy5sb2FkSnVtcCgpO1xyXG5cclxuXHRcdHRoaXMueSAtPSB0aGlzLnlWZWxvY2l0eTtcclxuXHRcdGlmICh0aGlzLmlzSW5BaXIpIHRoaXMueVZlbG9jaXR5IC09IHRoaXMueUFjYztcclxuXHJcblx0XHRpZiAodGhpcy5pc0p1bXBpbmcpIHtcclxuXHRcdFx0dGhpcy5yb3RhdGlvbiAtPSB0aGlzLnJvdGF0aW9uU3BlZWQgLyA0O1xyXG5cdFx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgLT0gdGhpcy55QWNjICogMjtcclxuXHJcblx0XHRcdGlmICh0aGlzLnJvdGF0aW9uID49IDUpIHtcclxuXHRcdFx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYigwLCAwLCAwLCAwLjUpJztcclxuXHRcdC8vIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0Ly8gdGhpcy5jdHgucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53LCB0aGlzLmgpO1xyXG5cdFx0Ly8gdGhpcy5jdHguZmlsbCgpO1xyXG5cclxuXHRcdHRoaXMucm90Q29vcmRzRm9ySnVtcCA9IHtcclxuXHRcdFx0eDogdGhpcy54ICsgdGhpcy53aGVlbEltZy53aWR0aCAvIDIsXHJcblx0XHRcdHk6IHRoaXMueSArIHRoaXMuaCAtIHRoaXMud2hlZWxJbWcuaGVpZ2h0IC8gMixcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5kcmF3V2hlZWxzKCk7XHJcblx0XHR0aGlzLmRyYXdGcmFtZSgpO1xyXG5cdH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wbGF0Zm9ybXMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGxheWVyLnRzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHlwZXMudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=