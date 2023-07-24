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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/gameObject */ "./public/gameObject.ts");
/* harmony import */ var _platforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platforms */ "./src/platforms.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.ts");



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
var platforms, player;
var endGame = function () {
    if (requestId)
        cancelAnimationFrame(requestId);
    requestId = null;
    prepGame();
    startBtn.style.display = 'block';
    startBtn.innerHTML = 'Play Again';
    levelsStarted = -1;
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
        if (platforms.checkForCollision() || platforms.gameOver) {
            endGame();
        }
    }
};
var startGame = function () {
    gameLoop();
};
var prepGame = function () {
    Object.freeze(_public_gameObject__WEBPACK_IMPORTED_MODULE_0__["default"]);
    player = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, world);
    platforms = new _platforms__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, world, player, _public_gameObject__WEBPACK_IMPORTED_MODULE_0__["default"]);
    platforms.setUp();
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
            player.loadingJump = false;
            player.jump();
            player.jumpVelStart = player.jumpVelStartReset;
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
    function Platforms(ctx, world, player, gameObject) {
        this.ctx = ctx;
        this.world = world;
        this.player = player;
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
        this.collisionMargin = 25;
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
    Platforms.prototype.checkForCollision = function () {
        if (this.player.y > this.world.height - this.player.h) {
            console.log('Ground Collision!!!');
            return true;
        }
        for (var i = 0; i < this.platsVisible.length; i++) {
            var platX = this.platsVisible[i].x;
            var level = this.gameObject.levels[this.currentLevel];
            var platRef = level.platforms[this.platsVisible[i].index];
            var platY = platRef.y;
            var len = platRef.len;
            if (this.player.x + this.player.w >= platX + this.collisionMargin && // Check player right collision
                this.player.x <= platX + len && // Check player left collision
                this.player.y <= platY + (level.platformH || this.world.height - platY) // Check player top collision
            ) {
                if (this.player.yVelocity < 0 && Math.abs(platY - (this.player.y + this.player.h)) < 20) {
                    // Land if negative velocity and within 20px
                    this.player.land(platY);
                }
                else if (this.player.y + this.player.h > platY + (this.player.isInAir ? this.collisionMargin : 0)) {
                    // Check player bottom collision
                    console.log('Platform Collision!!!');
                    return true;
                }
            }
        }
        return false;
    };
    Platforms.prototype.checkObsticleCollision = function (obsticle, xVal, yVal) {
        if (this.player.x + this.player.w >= xVal + this.collisionMargin && // Check player right collision
            this.player.x <= xVal + this.images[obsticle.name].width && // Check player left collision
            this.player.x <= xVal + this.images[obsticle.name].width && // Check player left collision
            this.player.y <= yVal + (this.images[obsticle.name].height || this.world.height - yVal) && // Check player top collision
            this.player.y + this.player.h > yVal // Check player bottom collision
        ) {
            console.log('Collision with: ', obsticle.name);
            this.gameOver = true;
        }
    };
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
    Platforms.prototype.drawObsticleOnPlat = function (obsticles, platYTop, platX, platLen) {
        for (var i = 0; i < (obsticles === null || obsticles === void 0 ? void 0 : obsticles.length); i++) {
            var imgSrc = this.images[obsticles[i].name];
            var obsticleXVals = obsticles[i].xLocsOnPlatByPerc;
            for (var i_2 = 0; i_2 < (obsticleXVals === null || obsticleXVals === void 0 ? void 0 : obsticleXVals.length); i_2++) {
                this.ctx.drawImage(imgSrc, platX + platLen * obsticleXVals[i_2], platYTop - this.images[obsticles[i_2].name].height + 10, this.images[obsticles[i_2].name].width, this.images[obsticles[i_2].name].height);
                this.checkObsticleCollision(obsticles[i_2], platX + platLen * obsticleXVals[i_2], platYTop - this.images[obsticles[i_2].name].height + 10);
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
                this.drawObsticleOnPlat(platform.obsticles, platform.y, plat.x, platform.len);
            }
            this.ctx.drawImage(this.images[level.platformTexture], 0, 0, imgW, this.images[level.platformTexture].height, plat.x, level.platforms[plat.index].y, level.platforms[plat.index].len, level.platformH || this.world.height - level.platforms[plat.index].y);
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
    function Player(ctx, world) {
        this.ctx = ctx;
        this.world = world;
        this.frameImg = new Image();
        this.frameImg.src = '../public/frame.png';
        this.wheelImg = new Image();
        this.wheelImg.src = '../public/wheel.png';
        this.aspectRatio = 1.84;
        this.x = 100;
        this.y = 100;
        this.w = 170;
        this.h = this.w / this.aspectRatio;
        this.isInAir = false;
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
        this.isInAir = true;
        this.yVelocity = this.jumpVelStart;
    };
    Player.prototype.loadJump = function () {
        if (this.jumpVelStart >= 20)
            return;
        this.jumpVelStart += 0.5;
    };
    Player.prototype.drawFrame = function () {
        var yOffset = 5;
        this.ctx.save();
        this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y);
        this.ctx.rotate((this.rotation * Math.PI) / 180);
        this.ctx.drawImage(this.frameImg, -this.wheelImg.width / 2, -this.wheelImg.height + yOffset, this.w, this.h);
        this.ctx.restore();
    };
    Player.prototype.drawWheels = function () {
        // console.log(this.wheelImg);
        this.ctx.save();
        this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y);
        this.ctx.rotate((this.rotation * Math.PI) / 180); // Rotate for jump
        this.ctx.rotate((this.wheelRot * Math.PI) / 180); // Rotate for wheel spin
        this.ctx.drawImage(this.wheelImg, -this.wheelImg.width / 2, -this.wheelImg.height / 2, this.wheelImg.width, this.wheelImg.height);
        this.ctx.restore();
        this.ctx.save();
        this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y);
        this.ctx.rotate((this.rotation * Math.PI) / 180); // Rotate for jump
        this.ctx.translate(-this.rotCoordsForJump.x, -this.rotCoordsForJump.y); // Move to start
        this.ctx.translate(this.x + this.w - this.wheelImg.width / 2, this.rotCoordsForJump.y);
        this.ctx.rotate((this.wheelRot * Math.PI) / 180); // Rotate for wheel spin
        this.ctx.translate(-(this.x + this.w - this.wheelImg.width / 2), -this.rotCoordsForJump.y); // Move to start
        this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y);
        this.ctx.drawImage(this.wheelImg, -(this.rotCoordsForJump.x - this.x) + this.w - this.wheelImg.width, -this.wheelImg.height / 2, this.wheelImg.width, this.wheelImg.height);
        this.ctx.restore();
    };
    Player.prototype.draw = function () {
        this.wheelRot += this.speed;
        if (this.loadingJump)
            this.loadJump();
        this.y -= this.yVelocity;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxHQUFHLENBQUM7WUFDbkMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO1NBQzdDLENBQUM7UUFFRixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRixhQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzSkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9wdWJsaWMvZ2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL3BsYXRmb3Jtcy50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvcGxheWVyLnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJR2FtZU9iamVjdCwgSUxldmVsLCBJUGxhdE9iamVjdCB9IGZyb20gJy4uL3NyYy90eXBlcyc7XHJcblxyXG4vLyBjb25zdCBkZWNvcl9zdGFydFNpZ246IElJbWdJbmZvID0ge1xyXG4vLyBcdGZpbGVOYW1lOiAnc3RhcnRTaWduJyxcclxuLy8gXHR3OiA1MCxcclxuLy8gXHRoOiA1MCxcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IG9ic3RpY2xlX3JvY2sxOiBJSW1nSW5mbyA9IHtcclxuLy8gXHRmaWxlTmFtZTogJ3JvY2sxJyxcclxuLy8gXHR3OiA3MCxcclxuLy8gXHRoOiA3MCxcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IG9ic3RpY2xlX3JvY2syOiBJSW1nSW5mbyA9IHtcclxuLy8gXHRmaWxlTmFtZTogJ3JvY2syJyxcclxuLy8gXHR3OiA3MCxcclxuLy8gXHRoOiA3MCxcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IG9ic3RpY2xlX3JvY2szOiBJSW1nSW5mbyA9IHtcclxuLy8gXHRmaWxlTmFtZTogJ3JvY2szJyxcclxuLy8gXHR3OiA3MCxcclxuLy8gXHRoOiA3MCxcclxuLy8gfTtcclxuXHJcbmNvbnN0IGxldmVsT25lOiBJTGV2ZWwgPSB7XHJcblx0cGxhdGZvcm1zOiBbXHJcblx0XHR7XHJcblx0XHRcdHk6IDYwMCxcclxuXHRcdFx0bGVuOiAzMDAwLFxyXG5cdFx0XHRnYXBUb05leHQ6IDAsXHJcblx0XHRcdGRlY29yOiBbeyBuYW1lOiAnc3RhcnRTaWduJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjZdIH1dLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0eTogNjAwLFxyXG5cdFx0XHRsZW46IDMwMDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMjAwLFxyXG5cdFx0fSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazEnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuMV0gfV0gfSxcclxuXHRcdHsgeTogNjAwLCBsZW46IDgwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDUwMCwgbGVuOiAyMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2syJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjRdIH1dIH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMjAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNDUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazMnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuOF0gfV0gfSxcclxuXHRcdHsgeTogNjUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA2MjUsIGxlbjogNjAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNjAwLCBsZW46IDgwMCwgZ2FwVG9OZXh0OiA1MCB9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMjAwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDU1MCwgbGVuOiA3MDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazMnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuMV0gfV0gfSxcclxuXHRcdHsgeTogNDEwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMzAwIH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2sxJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjZdIH1dIH0sXHJcblx0XHR7IHk6IDYwMCwgbGVuOiA4MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA1NTAsIGxlbjogMTUwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMycsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC40XSB9XSB9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMTIwMCwgZ2FwVG9OZXh0OiAxMDAgfSxcclxuXHRcdHsgeTogNDUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazEnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuOF0gfV0gfSxcclxuXHRcdHsgeTogNjUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA2MjUsIGxlbjogNjAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRdLFxyXG5cdHBsYXRmb3JtVGV4dHVyZTogJ3dvb2RQbGF0JyxcclxuXHRwbGF0Zm9ybUg6IDE2LFxyXG5cdGJhY2tncm91bmRJbWc6ICcnLFxyXG5cdG1heFBsYXRMZW46IDQwMDAsXHJcblx0c3BlZWQ6IDIwLFxyXG59O1xyXG5cclxuY29uc3QgZ2FtZU9iamVjdDogSUdhbWVPYmplY3QgPSB7XHJcblx0bGV2ZWxzOiBbbGV2ZWxPbmVdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZU9iamVjdDtcclxuIiwiaW1wb3J0IGdhbWVPYmplY3QgZnJvbSAnLi4vcHVibGljL2dhbWVPYmplY3QnO1xyXG5pbXBvcnQgUGxhdGZvcm1zIGZyb20gJy4vcGxhdGZvcm1zJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcblxyXG5jb25zdCB3b3JsZCA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ybGQnKTtcclxuY29uc3QgY3R4ID0gPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRD53b3JsZC5nZXRDb250ZXh0KCcyZCcsIHsgYWxwaGE6IGZhbHNlIH0pO1xyXG5cclxuY29uc3QgdGl0bGVEaXYgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlRGl2Jyk7XHJcbmNvbnN0IHN0YXJ0QnRuID0gPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydEJ0bicpO1xyXG5cclxuLy8gRm9yIGdhbWUgbG9vcFxyXG5sZXQgcmVxdWVzdElkOiBudW1iZXIgfCBudWxsLCBub3c6IG51bWJlciwgdGhlbjogbnVtYmVyLCBlbGFwc2VkOiBudW1iZXIsIGZwc0ludGVydmFsOiBudW1iZXI7XHJcblxyXG5sZXQgZnJhbWVSYXRlID0gNjA7XHJcbmxldCBwYXVzZWQgPSBmYWxzZTtcclxubGV0IGxldmVsc1N0YXJ0ZWQgPSAtMTtcclxuXHJcbi8vIENsYXNzZXNcclxubGV0IHBsYXRmb3JtczogUGxhdGZvcm1zLCBwbGF5ZXI6IFBsYXllcjtcclxuXHJcbmNvbnN0IGVuZEdhbWUgPSAoKSA9PiB7XHJcblx0aWYgKHJlcXVlc3RJZCkgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElkKTtcclxuXHRyZXF1ZXN0SWQgPSBudWxsO1xyXG5cdHByZXBHYW1lKCk7XHJcblx0c3RhcnRCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0c3RhcnRCdG4uaW5uZXJIVE1MID0gJ1BsYXkgQWdhaW4nO1xyXG5cdGxldmVsc1N0YXJ0ZWQgPSAtMTtcclxufTtcclxuXHJcbmNvbnN0IGdhbWVMb29wID0gKCkgPT4ge1xyXG5cdHJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcblxyXG5cdGZwc0ludGVydmFsID0gMTAwMCAvIGZyYW1lUmF0ZTtcclxuXHRub3cgPSBEYXRlLm5vdygpO1xyXG5cdGVsYXBzZWQgPSBub3cgLSAodGhlbiB8fCAwKTtcclxuXHJcblx0aWYgKGVsYXBzZWQgPiBmcHNJbnRlcnZhbCkge1xyXG5cdFx0dGhlbiA9IG5vdyAtIChlbGFwc2VkICUgZnBzSW50ZXJ2YWwpO1xyXG5cclxuXHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgd29ybGQud2lkdGgsIHdvcmxkLmhlaWdodCk7XHJcblx0XHRpZiAoIXBhdXNlZCkge1xyXG5cdFx0XHRwbGF0Zm9ybXMubW92ZSgpO1xyXG5cdFx0XHRwbGF5ZXIuc3BlZWQgPSBnYW1lT2JqZWN0LmxldmVsc1twbGF0Zm9ybXMuY3VycmVudExldmVsXS5zcGVlZDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHBsYXllci5zcGVlZCA9IDA7XHJcblx0XHR9XHJcblx0XHRwbGF0Zm9ybXMuZHJhdygpO1xyXG5cdFx0cGxheWVyLmRyYXcoKTtcclxuXHJcblx0XHRpZiAocGxhdGZvcm1zLnBsYXRzVmlzaWJsZT8uWzBdPy5pbmRleCA9PT0gMCAmJiBwbGF0Zm9ybXMuY3VycmVudExldmVsID4gbGV2ZWxzU3RhcnRlZCkge1xyXG5cdFx0XHRsZXZlbHNTdGFydGVkID0gcGxhdGZvcm1zLmN1cnJlbnRMZXZlbDtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGl0bGVEaXYuY2hpbGRyZW5bMF0uaW5uZXJIVE1MID0gYExldmVsICR7cGxhdGZvcm1zLmN1cnJlbnRMZXZlbCArIDF9YDtcclxuXHRcdFx0XHR0aXRsZURpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRpdGxlRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHRcdH0sIDEwMDApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChwbGF0Zm9ybXMuY2hlY2tGb3JDb2xsaXNpb24oKSB8fCBwbGF0Zm9ybXMuZ2FtZU92ZXIpIHtcclxuXHRcdFx0ZW5kR2FtZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuXHRnYW1lTG9vcCgpO1xyXG59O1xyXG5cclxuY29uc3QgcHJlcEdhbWUgPSAoKSA9PiB7XHJcblx0T2JqZWN0LmZyZWV6ZShnYW1lT2JqZWN0KTtcclxuXHRwbGF5ZXIgPSBuZXcgUGxheWVyKGN0eCwgd29ybGQpO1xyXG5cdHBsYXRmb3JtcyA9IG5ldyBQbGF0Zm9ybXMoY3R4LCB3b3JsZCwgcGxheWVyLCBnYW1lT2JqZWN0KTtcclxuXHRwbGF0Zm9ybXMuc2V0VXAoKTtcclxufTtcclxuXHJcbnByZXBHYW1lKCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XHJcblx0c3dpdGNoIChlLmNvZGUpIHtcclxuXHRcdGNhc2UgJ1NwYWNlJzpcclxuXHRcdFx0aWYgKHJlcXVlc3RJZCkge1xyXG5cdFx0XHRcdGlmIChwYXVzZWQpIHtcclxuXHRcdFx0XHRcdHBhdXNlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoIXBsYXllci5sb2FkaW5nSnVtcCkgcGxheWVyLmxvYWRpbmdKdW1wID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XHJcblx0c3dpdGNoIChlLmNvZGUpIHtcclxuXHRcdGNhc2UgJ0VzY2FwZSc6XHJcblx0XHRcdGlmIChwYXVzZWQpIHtcclxuXHRcdFx0XHRwYXVzZWQgPSBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwYXVzZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRjYXNlICdTcGFjZSc6XHJcblx0XHRcdHBsYXllci5sb2FkaW5nSnVtcCA9IGZhbHNlO1xyXG5cdFx0XHRwbGF5ZXIuanVtcCgpO1xyXG5cdFx0XHRwbGF5ZXIuanVtcFZlbFN0YXJ0ID0gcGxheWVyLmp1bXBWZWxTdGFydFJlc2V0O1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn0pO1xyXG5cclxuc3RhcnRCdG4ub25jbGljayA9ICgpID0+IHtcclxuXHRzdGFydEdhbWUoKTtcclxuXHRzdGFydEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59O1xyXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgQ29udGV4dCwgSUdhbWVPYmplY3QsIElMZXZlbCwgSVBsYXRPYmplY3QsIElQbGF0Zm9ybSwgSVZpc2libGVQbGF0IH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybXMge1xyXG5cdHByaXZhdGUgY3R4OiBDb250ZXh0O1xyXG5cdHByaXZhdGUgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cdHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XHJcblx0cHJpdmF0ZSBnYW1lT2JqZWN0OiBJR2FtZU9iamVjdDtcclxuXHRwdWJsaWMgY3VycmVudExldmVsOiBudW1iZXI7XHJcblx0cHVibGljIHBsYXRzVmlzaWJsZTogSVZpc2libGVQbGF0W107XHJcblx0cHJpdmF0ZSBiYWNrZ3JvdW5kWDogbnVtYmVyO1xyXG5cdHB1YmxpYyBnYW1lT3ZlcjogYm9vbGVhbjtcclxuXHRwcml2YXRlIGNvbGxpc2lvbk1hcmdpbjogbnVtYmVyO1xyXG5cdHByaXZhdGUgaW1hZ2VQYXRoczogYW55W107XHJcblx0cHJpdmF0ZSBpbWFnZXM6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQsIHBsYXllcjogUGxheWVyLCBnYW1lT2JqZWN0OiBhbnkpIHtcclxuXHRcdHRoaXMuY3R4ID0gY3R4O1xyXG5cdFx0dGhpcy53b3JsZCA9IHdvcmxkO1xyXG5cdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblx0XHR0aGlzLmdhbWVPYmplY3QgPSBnYW1lT2JqZWN0O1xyXG5cdFx0dGhpcy5jdXJyZW50TGV2ZWwgPSAwO1xyXG5cdFx0dGhpcy5wbGF0c1Zpc2libGUgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbmRleDogMCxcclxuXHRcdFx0XHR4OiAwLFxyXG5cdFx0XHR9LFxyXG5cdFx0XTtcclxuXHRcdHRoaXMuYmFja2dyb3VuZFggPSAwO1xyXG5cdFx0dGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xyXG5cdFx0dGhpcy5jb2xsaXNpb25NYXJnaW4gPSAyNTtcclxuXHRcdHRoaXMuaW1hZ2VQYXRocyA9IFtcclxuXHRcdFx0Jy4uL3B1YmxpYy9iZ01vdW50YWlucy5wbmcnLFxyXG5cdFx0XHQvLyBQbGF0Zm9ybSBUZXh0dXJlc1xyXG5cdFx0XHQnLi4vcHVibGljL3dvb2RQbGF0LnBuZycsXHJcblx0XHRcdCcuLi9wdWJsaWMvZGlydFBsYXQucG5nJyxcclxuXHRcdFx0Ly8gRGVjb3JcclxuXHRcdFx0Jy4uL3B1YmxpYy9zdGFydFNpZ24ucG5nJyxcclxuXHRcdFx0Ly8gT2JzdGljbGVzXHJcblx0XHRcdCcuLi9wdWJsaWMvcm9jazEucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy9yb2NrMi5wbmcnLFxyXG5cdFx0XHQnLi4vcHVibGljL3JvY2szLnBuZycsXHJcblx0XHRdO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSB7fTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBzZXRVcCgpIHtcclxuXHRcdGNvbnN0IHByZWxvYWRJbWFnZXMgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5pbWFnZVBhdGhzLm1hcCgocGF0aDogc3RyaW5nKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSBwYXRoLnNwbGl0KCcvJykucG9wKCk/LnNwbGl0KCcuJylbMF07XHJcblx0XHRcdFx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuXHRcdFx0XHRcdGltYWdlLnNyYyA9IHBhdGg7XHJcblx0XHRcdFx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoW25hbWUsIGltYWdlXSk7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0aW1hZ2Uub25lcnJvciA9ICgpID0+IHJlamVjdChgSW1hZ2UgZmFpbGVkIHRvIGxvYWQ6ICR7cGF0aH1gKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGltZ0FycmF5dGVtcDogYW55W10gPSBhd2FpdCBwcmVsb2FkSW1hZ2VzKCk7XHJcblx0XHR0aGlzLmltYWdlcyA9IE9iamVjdC5mcm9tRW50cmllcyhpbWdBcnJheXRlbXApO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoZWNrRm9yQ29sbGlzaW9uKCkge1xyXG5cdFx0aWYgKHRoaXMucGxheWVyLnkgPiB0aGlzLndvcmxkLmhlaWdodCAtIHRoaXMucGxheWVyLmgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0dyb3VuZCBDb2xsaXNpb24hISEnKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxhdHNWaXNpYmxlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHBsYXRYID0gdGhpcy5wbGF0c1Zpc2libGVbaV0ueDtcclxuXHRcdFx0Y29uc3QgbGV2ZWw6IElMZXZlbCA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdO1xyXG5cdFx0XHRjb25zdCBwbGF0UmVmOiBJUGxhdGZvcm0gPSBsZXZlbC5wbGF0Zm9ybXNbdGhpcy5wbGF0c1Zpc2libGVbaV0uaW5kZXhdO1xyXG5cdFx0XHRjb25zdCBwbGF0WSA9IHBsYXRSZWYueTtcclxuXHRcdFx0Y29uc3QgbGVuID0gcGxhdFJlZi5sZW47XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIueCArIHRoaXMucGxheWVyLncgPj0gcGxhdFggKyB0aGlzLmNvbGxpc2lvbk1hcmdpbiAmJiAvLyBDaGVjayBwbGF5ZXIgcmlnaHQgY29sbGlzaW9uXHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIueCA8PSBwbGF0WCArIGxlbiAmJiAvLyBDaGVjayBwbGF5ZXIgbGVmdCBjb2xsaXNpb25cclxuXHRcdFx0XHR0aGlzLnBsYXllci55IDw9IHBsYXRZICsgKGxldmVsLnBsYXRmb3JtSCB8fCB0aGlzLndvcmxkLmhlaWdodCAtIHBsYXRZKSAvLyBDaGVjayBwbGF5ZXIgdG9wIGNvbGxpc2lvblxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5wbGF5ZXIueVZlbG9jaXR5IDwgMCAmJiBNYXRoLmFicyhwbGF0WSAtICh0aGlzLnBsYXllci55ICsgdGhpcy5wbGF5ZXIuaCkpIDwgMjApIHtcclxuXHRcdFx0XHRcdC8vIExhbmQgaWYgbmVnYXRpdmUgdmVsb2NpdHkgYW5kIHdpdGhpbiAyMHB4XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5sYW5kKHBsYXRZKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucGxheWVyLnkgKyB0aGlzLnBsYXllci5oID4gcGxhdFkgKyAodGhpcy5wbGF5ZXIuaXNJbkFpciA/IHRoaXMuY29sbGlzaW9uTWFyZ2luIDogMCkpIHtcclxuXHRcdFx0XHRcdC8vIENoZWNrIHBsYXllciBib3R0b20gY29sbGlzaW9uXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnUGxhdGZvcm0gQ29sbGlzaW9uISEhJyk7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2hlY2tPYnN0aWNsZUNvbGxpc2lvbihvYnN0aWNsZTogSVBsYXRPYmplY3QsIHhWYWw6IG51bWJlciwgeVZhbDogbnVtYmVyKSB7XHJcblx0XHRpZiAoXHJcblx0XHRcdHRoaXMucGxheWVyLnggKyB0aGlzLnBsYXllci53ID49IHhWYWwgKyB0aGlzLmNvbGxpc2lvbk1hcmdpbiAmJiAvLyBDaGVjayBwbGF5ZXIgcmlnaHQgY29sbGlzaW9uXHJcblx0XHRcdHRoaXMucGxheWVyLnggPD0geFZhbCArIHRoaXMuaW1hZ2VzW29ic3RpY2xlLm5hbWVdLndpZHRoICYmIC8vIENoZWNrIHBsYXllciBsZWZ0IGNvbGxpc2lvblxyXG5cdFx0XHR0aGlzLnBsYXllci54IDw9IHhWYWwgKyB0aGlzLmltYWdlc1tvYnN0aWNsZS5uYW1lXS53aWR0aCAmJiAvLyBDaGVjayBwbGF5ZXIgbGVmdCBjb2xsaXNpb25cclxuXHRcdFx0dGhpcy5wbGF5ZXIueSA8PSB5VmFsICsgKHRoaXMuaW1hZ2VzW29ic3RpY2xlLm5hbWVdLmhlaWdodCB8fCB0aGlzLndvcmxkLmhlaWdodCAtIHlWYWwpICYmIC8vIENoZWNrIHBsYXllciB0b3AgY29sbGlzaW9uXHJcblx0XHRcdHRoaXMucGxheWVyLnkgKyB0aGlzLnBsYXllci5oID4geVZhbCAvLyBDaGVjayBwbGF5ZXIgYm90dG9tIGNvbGxpc2lvblxyXG5cdFx0KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdDb2xsaXNpb24gd2l0aDogJywgb2JzdGljbGUubmFtZSk7XHJcblx0XHRcdHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBuZXh0UGxhdGZvcm0oKSB7XHJcblx0XHRjb25zdCBsYXN0VmlzaWJsZVBsYXQ6IElWaXNpYmxlUGxhdCA9IHRoaXMucGxhdHNWaXNpYmxlW3RoaXMucGxhdHNWaXNpYmxlLmxlbmd0aCAtIDFdO1xyXG5cdFx0Y29uc3QgcGxhdHNSZWY6IElQbGF0Zm9ybVtdID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0ucGxhdGZvcm1zO1xyXG5cdFx0Y29uc3QgbGFzdFBsYXRSZWY6IElQbGF0Zm9ybSA9IHBsYXRzUmVmW2xhc3RWaXNpYmxlUGxhdC5pbmRleF07XHJcblx0XHRjb25zdCBuZXh0UGxhdDogSVBsYXRmb3JtID1cclxuXHRcdFx0dGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0ucGxhdGZvcm1zW2xhc3RWaXNpYmxlUGxhdC5pbmRleCArIDFdO1xyXG5cclxuXHRcdGlmICghbmV4dFBsYXQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ05vIE1vcmUgUGxhdGZvcm1zJyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnBsYXRzVmlzaWJsZS5wdXNoKHtcclxuXHRcdFx0aW5kZXg6IGxhc3RWaXNpYmxlUGxhdC5pbmRleCArIDEsXHJcblx0XHRcdHg6IGxhc3RWaXNpYmxlUGxhdC54ICsgbGFzdFBsYXRSZWYubGVuICsgbGFzdFBsYXRSZWYuZ2FwVG9OZXh0LFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHRoaXMucGxhdHNWaXNpYmxlWzBdLnggKyBwbGF0c1JlZlt0aGlzLnBsYXRzVmlzaWJsZVswXS5pbmRleF0ubGVuIDwgMCkgdGhpcy5wbGF0c1Zpc2libGUuc2hpZnQoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBtb3ZlKCkge1xyXG5cdFx0Y29uc3QgbGV2ZWw6IElMZXZlbCA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdO1xyXG5cdFx0Y29uc3QgcGxhdFJlZjogSVBsYXRmb3JtID0gbGV2ZWwucGxhdGZvcm1zW3RoaXMucGxhdHNWaXNpYmxlW3RoaXMucGxhdHNWaXNpYmxlLmxlbmd0aCAtIDFdLmluZGV4XTtcclxuXHJcblx0XHRjb25zdCBsYXN0UGxhdFggPSB0aGlzLnBsYXRzVmlzaWJsZVt0aGlzLnBsYXRzVmlzaWJsZS5sZW5ndGggLSAxXS54O1xyXG5cclxuXHRcdGlmIChsYXN0UGxhdFggKyBwbGF0UmVmLmxlbiA8PSB0aGlzLndvcmxkLndpZHRoKSB0aGlzLm5leHRQbGF0Zm9ybSgpO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF0c1Zpc2libGUubGVuZ3RoOyBpKyspIHRoaXMucGxhdHNWaXNpYmxlW2ldLnggLT0gbGV2ZWwuc3BlZWQ7XHJcblx0XHR0aGlzLmJhY2tncm91bmRYIC09IGxldmVsLnNwZWVkIC8gODtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZHJhd0RlY29yRm9yUGxhdChkZWNvcjogSVBsYXRPYmplY3RbXSwgcGxhdFlUb3A6IG51bWJlciwgcGxhdFg6IG51bWJlciwgcGxhdExlbjogbnVtYmVyKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRlY29yPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpbWdTcmM6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLmltYWdlc1tkZWNvcltpXS5uYW1lXTtcclxuXHRcdFx0Y29uc3QgZGVjb3JYVmFscyA9IGRlY29yW2ldLnhMb2NzT25QbGF0QnlQZXJjO1xyXG5cclxuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5pbWFnZXNbZGVjb3JbaV0ubmFtZV0uaGVpZ2h0KTtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkZWNvclhWYWxzPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0XHRcdGltZ1NyYyxcclxuXHRcdFx0XHRcdHBsYXRYICsgcGxhdExlbiAqIGRlY29yWFZhbHNbaV0sXHJcblx0XHRcdFx0XHRwbGF0WVRvcCAtIHRoaXMuaW1hZ2VzW2RlY29yW2ldLm5hbWVdLmhlaWdodCArIDEwLFxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbZGVjb3JbaV0ubmFtZV0ud2lkdGgsXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tkZWNvcltpXS5uYW1lXS5oZWlnaHRcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdPYnN0aWNsZU9uUGxhdChvYnN0aWNsZXM6IElQbGF0T2JqZWN0W10sIHBsYXRZVG9wOiBudW1iZXIsIHBsYXRYOiBudW1iZXIsIHBsYXRMZW46IG51bWJlcikge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvYnN0aWNsZXM/Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGltZ1NyYzogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMuaW1hZ2VzW29ic3RpY2xlc1tpXS5uYW1lXTtcclxuXHRcdFx0Y29uc3Qgb2JzdGljbGVYVmFscyA9IG9ic3RpY2xlc1tpXS54TG9jc09uUGxhdEJ5UGVyYztcclxuXHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb2JzdGljbGVYVmFscz8ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0XHRpbWdTcmMsXHJcblx0XHRcdFx0XHRwbGF0WCArIHBsYXRMZW4gKiBvYnN0aWNsZVhWYWxzW2ldLFxyXG5cdFx0XHRcdFx0cGxhdFlUb3AgLSB0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0uaGVpZ2h0ICsgMTAsXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0ud2lkdGgsXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0uaGVpZ2h0XHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0dGhpcy5jaGVja09ic3RpY2xlQ29sbGlzaW9uKFxyXG5cdFx0XHRcdFx0b2JzdGljbGVzW2ldLFxyXG5cdFx0XHRcdFx0cGxhdFggKyBwbGF0TGVuICogb2JzdGljbGVYVmFsc1tpXSxcclxuXHRcdFx0XHRcdHBsYXRZVG9wIC0gdGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdLmhlaWdodCArIDEwXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGRyYXcoKSB7XHJcblx0XHRpZiAoIXRoaXMuaW1hZ2VzPy5iZ01vdW50YWlucykgcmV0dXJuO1xyXG5cdFx0Ly8gRHJhdyBCR1xyXG5cdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHR0aGlzLmltYWdlcy5iZ01vdW50YWlucyxcclxuXHRcdFx0MCxcclxuXHRcdFx0MCxcclxuXHRcdFx0dGhpcy5pbWFnZXMuYmdNb3VudGFpbnMud2lkdGgsXHJcblx0XHRcdHRoaXMuaW1hZ2VzLmJnTW91bnRhaW5zLmhlaWdodCxcclxuXHRcdFx0dGhpcy5iYWNrZ3JvdW5kWCxcclxuXHRcdFx0dGhpcy53b3JsZC5oZWlnaHQgLSB0aGlzLmltYWdlcy5iZ01vdW50YWlucy5oZWlnaHQsXHJcblx0XHRcdHRoaXMuaW1hZ2VzLmJnTW91bnRhaW5zLndpZHRoLFxyXG5cdFx0XHR0aGlzLmltYWdlcy5iZ01vdW50YWlucy5oZWlnaHRcclxuXHRcdCk7XHJcblxyXG5cdFx0Zm9yIChjb25zdCBwbGF0IG9mIHRoaXMucGxhdHNWaXNpYmxlKSB7XHJcblx0XHRcdGNvbnN0IGxldmVsOiBJTGV2ZWwgPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXTtcclxuXHRcdFx0Y29uc3QgaW1nVyA9XHJcblx0XHRcdFx0dGhpcy5pbWFnZXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlXS53aWR0aCAqIChsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ubGVuIC8gbGV2ZWwubWF4UGxhdExlbik7XHJcblxyXG5cdFx0XHRjb25zdCBwbGF0Zm9ybTogSVBsYXRmb3JtID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0ucGxhdGZvcm1zW3BsYXQuaW5kZXhdIHx8IFtdO1xyXG5cclxuXHRcdFx0aWYgKHBsYXRmb3JtPy5kZWNvcikge1xyXG5cdFx0XHRcdHRoaXMuZHJhd0RlY29yRm9yUGxhdChcclxuXHRcdFx0XHRcdHBsYXRmb3JtLmRlY29yLFxyXG5cdFx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnksXHJcblx0XHRcdFx0XHRwbGF0LngsXHJcblx0XHRcdFx0XHRsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ubGVuXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocGxhdGZvcm0/Lm9ic3RpY2xlcykge1xyXG5cdFx0XHRcdHRoaXMuZHJhd09ic3RpY2xlT25QbGF0KHBsYXRmb3JtLm9ic3RpY2xlcywgcGxhdGZvcm0ueSwgcGxhdC54LCBwbGF0Zm9ybS5sZW4pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0dGhpcy5pbWFnZXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlXSxcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdDAsXHJcblx0XHRcdFx0aW1nVyxcclxuXHRcdFx0XHR0aGlzLmltYWdlc1tsZXZlbC5wbGF0Zm9ybVRleHR1cmVdLmhlaWdodCxcclxuXHRcdFx0XHRwbGF0LngsXHJcblx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnksXHJcblx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLmxlbixcclxuXHRcdFx0XHRsZXZlbC5wbGF0Zm9ybUggfHwgdGhpcy53b3JsZC5oZWlnaHQgLSBsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ueVxyXG5cdFx0XHQpO1xyXG5cdFx0XHQvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjMpJztcclxuXHRcdFx0Ly8gdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHRcdC8vIHRoaXMuY3R4LnJlY3QodGhpcy5wbGF0Zm9ybXNbaV0ueCwgdGhpcy5wbGF0Zm9ybXNbaV0ueSwgdGhpcy5wbGF0Zm9ybXNbaV0udywgdGhpcy5oKTtcclxuXHRcdFx0Ly8gdGhpcy5jdHguZmlsbCgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG5cdHByaXZhdGUgY3R4OiBDb250ZXh0O1xyXG5cdHByaXZhdGUgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cdHByaXZhdGUgZnJhbWVJbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblx0cHJpdmF0ZSB3aGVlbEltZzogSFRNTEltYWdlRWxlbWVudDtcclxuXHRwcml2YXRlIGFzcGVjdFJhdGlvOiBudW1iZXI7XHJcblx0cHVibGljIHg6IG51bWJlcjtcclxuXHRwdWJsaWMgeTogbnVtYmVyO1xyXG5cdHB1YmxpYyB3OiBudW1iZXI7XHJcblx0cHVibGljIGg6IG51bWJlcjtcclxuXHRwdWJsaWMgaXNJbkFpcjogYm9vbGVhbjtcclxuXHRwdWJsaWMganVtcFZlbFN0YXJ0UmVzZXQ6IG51bWJlcjtcclxuXHRwdWJsaWMganVtcFZlbFN0YXJ0OiBudW1iZXI7XHJcblx0cHVibGljIHlWZWxvY2l0eTogbnVtYmVyO1xyXG5cdHB1YmxpYyB5QWNjOiBudW1iZXI7XHJcblx0cHJpdmF0ZSByb3RhdGlvbjogbnVtYmVyO1xyXG5cdHByaXZhdGUgcm90YXRpb25TcGVlZDogbnVtYmVyO1xyXG5cdHByaXZhdGUgaXNKdW1waW5nOiBib29sZWFuO1xyXG5cdHB1YmxpYyBsb2FkaW5nSnVtcDogYm9vbGVhbjtcclxuXHRwcml2YXRlIHdoZWVsUm90OiBudW1iZXI7XHJcblx0cHJpdmF0ZSByb3RDb29yZHNGb3JKdW1wOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XHJcblx0cHVibGljIHNwZWVkOiBudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGN0eDogQ29udGV4dCwgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcblx0XHR0aGlzLmN0eCA9IGN0eDtcclxuXHRcdHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHRcdHRoaXMuZnJhbWVJbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdHRoaXMuZnJhbWVJbWcuc3JjID0gJy4uL3B1YmxpYy9mcmFtZS5wbmcnO1xyXG5cdFx0dGhpcy53aGVlbEltZyA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0dGhpcy53aGVlbEltZy5zcmMgPSAnLi4vcHVibGljL3doZWVsLnBuZyc7XHJcblx0XHR0aGlzLmFzcGVjdFJhdGlvID0gMS44NDtcclxuXHRcdHRoaXMueCA9IDEwMDtcclxuXHRcdHRoaXMueSA9IDEwMDtcclxuXHRcdHRoaXMudyA9IDE3MDtcclxuXHRcdHRoaXMuaCA9IHRoaXMudyAvIHRoaXMuYXNwZWN0UmF0aW87XHJcblx0XHR0aGlzLmlzSW5BaXIgPSBmYWxzZTtcclxuXHRcdHRoaXMuanVtcFZlbFN0YXJ0UmVzZXQgPSAxMDtcclxuXHRcdHRoaXMuanVtcFZlbFN0YXJ0ID0gdGhpcy5qdW1wVmVsU3RhcnRSZXNldDtcclxuXHRcdHRoaXMueVZlbG9jaXR5ID0gMDtcclxuXHRcdHRoaXMueUFjYyA9IDAuODtcclxuXHRcdHRoaXMucm90YXRpb24gPSAwO1xyXG5cdFx0dGhpcy5yb3RhdGlvblNwZWVkID0gMDtcclxuXHRcdHRoaXMuaXNKdW1waW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLmxvYWRpbmdKdW1wID0gZmFsc2U7XHJcblx0XHR0aGlzLndoZWVsUm90ID0gMDtcclxuXHRcdHRoaXMucm90Q29vcmRzRm9ySnVtcCA9IHsgeDogMCwgeTogMCB9O1xyXG5cdFx0dGhpcy5zcGVlZCA9IDA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbGFuZCh5OiBudW1iZXIpIHtcclxuXHRcdGlmICh0aGlzLnJvdGF0aW9uIDwgMCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5pc0luQWlyID0gZmFsc2U7XHJcblx0XHR0aGlzLmlzSnVtcGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5yb3RhdGlvblNwZWVkID0gMDtcclxuXHRcdHRoaXMucm90YXRpb24gPSAwO1xyXG5cdFx0dGhpcy55VmVsb2NpdHkgPSAwO1xyXG5cdFx0dGhpcy55ID0geSAtIHRoaXMuaDtcclxuXHRcdGlmICghdGhpcy5sb2FkaW5nSnVtcCkgdGhpcy5qdW1wVmVsU3RhcnQgPSB0aGlzLmp1bXBWZWxTdGFydFJlc2V0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGp1bXAoKSB7XHJcblx0XHRpZiAodGhpcy5pc0p1bXBpbmcgfHwgdGhpcy5pc0luQWlyIHx8IHRoaXMueVZlbG9jaXR5IDwgMCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5yb3RhdGlvblNwZWVkID0gdGhpcy5qdW1wVmVsU3RhcnQ7XHJcblx0XHR0aGlzLmlzSnVtcGluZyA9IHRydWU7XHJcblxyXG5cdFx0dGhpcy5pc0luQWlyID0gdHJ1ZTtcclxuXHRcdHRoaXMueVZlbG9jaXR5ID0gdGhpcy5qdW1wVmVsU3RhcnQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvYWRKdW1wKCkge1xyXG5cdFx0aWYgKHRoaXMuanVtcFZlbFN0YXJ0ID49IDIwKSByZXR1cm47XHJcblx0XHR0aGlzLmp1bXBWZWxTdGFydCArPSAwLjU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdGcmFtZSgpIHtcclxuXHRcdGNvbnN0IHlPZmZzZXQgPSA1O1xyXG5cdFx0dGhpcy5jdHguc2F2ZSgpO1xyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKHRoaXMucm90Q29vcmRzRm9ySnVtcC54LCB0aGlzLnJvdENvb3Jkc0Zvckp1bXAueSk7XHJcblx0XHR0aGlzLmN0eC5yb3RhdGUoKHRoaXMucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7XHJcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdHRoaXMuZnJhbWVJbWcsXHJcblx0XHRcdC10aGlzLndoZWVsSW1nLndpZHRoIC8gMixcclxuXHRcdFx0LXRoaXMud2hlZWxJbWcuaGVpZ2h0ICsgeU9mZnNldCxcclxuXHRcdFx0dGhpcy53LFxyXG5cdFx0XHR0aGlzLmhcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN0eC5yZXN0b3JlKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdXaGVlbHMoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLndoZWVsSW1nKTtcclxuXHRcdHRoaXMuY3R4LnNhdmUoKTtcclxuXHRcdHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLnJvdENvb3Jkc0Zvckp1bXAueCwgdGhpcy5yb3RDb29yZHNGb3JKdW1wLnkpO1xyXG5cdFx0dGhpcy5jdHgucm90YXRlKCh0aGlzLnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODApOyAvLyBSb3RhdGUgZm9yIGp1bXBcclxuXHRcdHRoaXMuY3R4LnJvdGF0ZSgodGhpcy53aGVlbFJvdCAqIE1hdGguUEkpIC8gMTgwKTsgLy8gUm90YXRlIGZvciB3aGVlbCBzcGluXHJcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdHRoaXMud2hlZWxJbWcsXHJcblx0XHRcdC10aGlzLndoZWVsSW1nLndpZHRoIC8gMixcclxuXHRcdFx0LXRoaXMud2hlZWxJbWcuaGVpZ2h0IC8gMixcclxuXHRcdFx0dGhpcy53aGVlbEltZy53aWR0aCxcclxuXHRcdFx0dGhpcy53aGVlbEltZy5oZWlnaHRcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN0eC5yZXN0b3JlKCk7XHJcblxyXG5cdFx0dGhpcy5jdHguc2F2ZSgpO1xyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKHRoaXMucm90Q29vcmRzRm9ySnVtcC54LCB0aGlzLnJvdENvb3Jkc0Zvckp1bXAueSk7XHJcblx0XHR0aGlzLmN0eC5yb3RhdGUoKHRoaXMucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7IC8vIFJvdGF0ZSBmb3IganVtcFxyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKC10aGlzLnJvdENvb3Jkc0Zvckp1bXAueCwgLXRoaXMucm90Q29vcmRzRm9ySnVtcC55KTsgLy8gTW92ZSB0byBzdGFydFxyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKHRoaXMueCArIHRoaXMudyAtIHRoaXMud2hlZWxJbWcud2lkdGggLyAyLCB0aGlzLnJvdENvb3Jkc0Zvckp1bXAueSk7XHJcblx0XHR0aGlzLmN0eC5yb3RhdGUoKHRoaXMud2hlZWxSb3QgKiBNYXRoLlBJKSAvIDE4MCk7IC8vIFJvdGF0ZSBmb3Igd2hlZWwgc3BpblxyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKC0odGhpcy54ICsgdGhpcy53IC0gdGhpcy53aGVlbEltZy53aWR0aCAvIDIpLCAtdGhpcy5yb3RDb29yZHNGb3JKdW1wLnkpOyAvLyBNb3ZlIHRvIHN0YXJ0XHJcblx0XHR0aGlzLmN0eC50cmFuc2xhdGUodGhpcy5yb3RDb29yZHNGb3JKdW1wLngsIHRoaXMucm90Q29vcmRzRm9ySnVtcC55KTtcclxuXHJcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdHRoaXMud2hlZWxJbWcsXHJcblx0XHRcdC0odGhpcy5yb3RDb29yZHNGb3JKdW1wLnggLSB0aGlzLngpICsgdGhpcy53IC0gdGhpcy53aGVlbEltZy53aWR0aCxcclxuXHRcdFx0LXRoaXMud2hlZWxJbWcuaGVpZ2h0IC8gMixcclxuXHRcdFx0dGhpcy53aGVlbEltZy53aWR0aCxcclxuXHRcdFx0dGhpcy53aGVlbEltZy5oZWlnaHRcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN0eC5yZXN0b3JlKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhdygpIHtcclxuXHRcdHRoaXMud2hlZWxSb3QgKz0gdGhpcy5zcGVlZDtcclxuXHJcblx0XHRpZiAodGhpcy5sb2FkaW5nSnVtcCkgdGhpcy5sb2FkSnVtcCgpO1xyXG5cclxuXHRcdHRoaXMueSAtPSB0aGlzLnlWZWxvY2l0eTtcclxuXHRcdHRoaXMueVZlbG9jaXR5IC09IHRoaXMueUFjYztcclxuXHJcblx0XHRpZiAodGhpcy5pc0p1bXBpbmcpIHtcclxuXHRcdFx0dGhpcy5yb3RhdGlvbiAtPSB0aGlzLnJvdGF0aW9uU3BlZWQgLyA0O1xyXG5cdFx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgLT0gdGhpcy55QWNjICogMjtcclxuXHJcblx0XHRcdGlmICh0aGlzLnJvdGF0aW9uID49IDUpIHtcclxuXHRcdFx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYigwLCAwLCAwLCAwLjUpJztcclxuXHRcdC8vIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0Ly8gdGhpcy5jdHgucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53LCB0aGlzLmgpO1xyXG5cdFx0Ly8gdGhpcy5jdHguZmlsbCgpO1xyXG5cclxuXHRcdHRoaXMucm90Q29vcmRzRm9ySnVtcCA9IHtcclxuXHRcdFx0eDogdGhpcy54ICsgdGhpcy53aGVlbEltZy53aWR0aCAvIDIsXHJcblx0XHRcdHk6IHRoaXMueSArIHRoaXMuaCAtIHRoaXMud2hlZWxJbWcuaGVpZ2h0IC8gMixcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5kcmF3V2hlZWxzKCk7XHJcblx0XHR0aGlzLmRyYXdGcmFtZSgpO1xyXG5cdH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wbGF0Zm9ybXMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGxheWVyLnRzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHlwZXMudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=