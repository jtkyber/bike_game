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
            len: 2000,
            gapToNext: 200,
            powerUps: [{ name: 'test', xPercAlongPlat: 0.5, distAbovePlat: 100 }],
        },
        { y: 700, len: 1000, gapToNext: 0 },
        { y: 600, len: 800, gapToNext: 0 },
        { y: 500, len: 2000, gapToNext: 0, obsticles: [{ name: 'rock2', xLocsOnPlatByPerc: [0.4] }] },
        { y: 700, len: 1200, gapToNext: 0 },
        { y: 450, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock3', xLocsOnPlatByPerc: [0.8] }] },
        { y: 650, len: 1000, gapToNext: 0 },
        { y: 625, len: 600, gapToNext: 0 },
        { y: 600, len: 800, gapToNext: 50 },
        { y: 550, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock3', xLocsOnPlatByPerc: [0.1] }] },
        { y: 410, len: 1000, gapToNext: 300 },
        { y: 700, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock1', xLocsOnPlatByPerc: [0.6] }] },
        { y: 600, len: 800, gapToNext: 0 },
        { y: 700, len: 1200, gapToNext: 100 },
        { y: 450, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock1', xLocsOnPlatByPerc: [0.8] }] },
        { y: 650, len: 1000, gapToNext: 0 },
        { y: 625, len: 600, gapToNext: 0 },
    ],
    platformTexture: 'dirtPlat',
    platformH: null,
    backgroundImg: 'bgLevel1',
    bgImgYOffset: 0,
    maxPlatLen: 4000,
    speed: 20,
};
var levelTwo = {
    platforms: [
        {
            y: 600,
            len: 3000,
            gapToNext: 0,
            decor: [{ name: 'startSign', xLocsOnPlatByPerc: [0.6] }],
        },
        {
            y: 600,
            len: 2000,
            gapToNext: 200,
            powerUps: [{ name: 'test', xPercAlongPlat: 0.5, distAbovePlat: 100 }],
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
    backgroundImg: 'bgLevel2',
    bgImgYOffset: 600,
    maxPlatLen: 4000,
    speed: 20,
};
var gameObject = {
    levels: [levelOne, levelTwo],
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameObject);


/***/ }),

/***/ "./src/abilities.ts":
/*!**************************!*\
  !*** ./src/abilities.ts ***!
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
var Abilities = /** @class */ (function () {
    function Abilities(ctx, world, hud) {
        this.ctx = ctx;
        this.world = world;
        this.hud = hud;
        this.imagePaths = ['../public/bgMountains.png'];
        this.images = {};
    }
    Abilities.prototype.setUp = function () {
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
    Abilities.prototype.draw = function (powerUps, platYTop, platX, platLen, platIndex) {
        for (var i = 0; i < (powerUps === null || powerUps === void 0 ? void 0 : powerUps.length); i++) {
            var imgSrc = this.images[powerUps[i].name];
            if (!imgSrc)
                continue;
            var puX = powerUps[i].xPercAlongPlat;
            this.ctx.drawImage(imgSrc, platX + platLen * puX, platYTop - imgSrc.height + 10, imgSrc.width, imgSrc.height);
        }
    };
    return Abilities;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Abilities);


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
        var playerRightOfPlatLeft = x1 + w1 >= x2 + margin; // Player right side to right of plat left
        var playerLeftOfPlatRight = x1 <= x2 + w2; // Player left side to left of plat right
        var playerAbovePlatBot = y1 <= y2 + h2; //Player top above plat bottom
        var playerBelowPlatTop = y1 + this.player.h > y2 + (this.player.isInAir ? margin : 0); // Player bottom above plat top
        if (playerRightOfPlatLeft && playerLeftOfPlatRight && playerAbovePlatBot) {
            // Land if negative velocity and within 20px of platform
            if (this.player.yVelocity <= 0 && Math.abs(y2 - (y1 + h1)) < 20) {
                this.player.land(y2);
                return true;
            }
            else if (playerBelowPlatTop) {
                console.log('Platform Collision!');
                this.hud.lives = 0;
                return true;
            }
        }
        if (this.player.y + this.player.h > this.world.height) {
            this.hud.lives = 0;
            console.log('Out Of Bounds Collision!');
            return true;
        }
        return false;
    };
    Collisions.prototype.checkForCollision = function (_a) {
        var x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2, w1 = _a.w1, h1 = _a.h1, w2 = _a.w2, h2 = _a.h2, margin = _a.margin, object = _a.object;
        if (x1 + w1 >= x2 + margin && // Check player right collision
            x1 <= x2 + w2 && // Check player left collision
            y1 <= y2 + h2 && // Check player top collision
            y1 + h1 > y2 // Check player bottom collision
        ) {
            this.hud.reduceHealth(object);
            this.player.changeToDamagedImgs(object);
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
        this.drawingLevelText = false;
        this.levelTextOpacity = 0;
        this.levelTextOpacityInc = 0.02;
        this.currentLevel = 0;
        this.fps = 0;
        this.fpsEnabled = true;
    }
    Hud.prototype.drawFps = function () {
        if (!this.fpsEnabled)
            return;
        this.ctx.font = '20px Arial';
        this.ctx.fillStyle = 'rgba(0, 255, 0, 1)';
        this.ctx.textAlign = 'right';
        this.ctx.fillText("".concat(this.fps, " FPS"), this.world.width - 20, 30);
    };
    Hud.prototype.drawJumpCharge = function (percentCharged, x, y) {
        var w = 8;
        var h = 60;
        var xOffset = 0;
        var yOffset = -20;
        this.ctx.strokeStyle = 'rgb(0, 0, 0)';
        this.ctx.fillStyle = 'rgb(7, 191, 4)';
        this.ctx.beginPath();
        this.ctx.rect(x + xOffset, y + yOffset, w, h);
        this.ctx.stroke();
        this.ctx.fillRect(x + xOffset, y + yOffset + h, w, -h * percentCharged);
    };
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
        this.ctx.strokeStyle = 'rgba(255, 0, 0, 0.6)';
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
    Hud.prototype.drawNextLevelText = function () {
        this.ctx.font = '70px Arial';
        this.ctx.fillStyle = "rgba(0, 0, 0, ".concat(this.levelTextOpacity, ")");
        this.ctx.textAlign = 'center';
        this.ctx.fillText("Level ".concat(this.currentLevel + 1), this.world.width / 2, this.world.height / 2);
        this.levelTextOpacity += this.levelTextOpacityInc;
    };
    Hud.prototype.beginLevelTextAnimation = function () {
        var _this = this;
        this.drawingLevelText = true;
        setTimeout(function () {
            _this.levelTextOpacityInc *= -1;
            setTimeout(function () {
                _this.drawingLevelText = false;
                _this.levelTextOpacityInc *= -1;
            }, 1500);
        }, 1500);
    };
    Hud.prototype.draw = function () {
        this.drawLives();
        this.drawFps();
        if (this.drawingLevelText)
            this.drawNextLevelText();
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
/* harmony import */ var _abilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abilities */ "./src/abilities.ts");
/* harmony import */ var _collisions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collisions */ "./src/collisions.ts");
/* harmony import */ var _hud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hud */ "./src/hud.ts");
/* harmony import */ var _platforms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./platforms */ "./src/platforms.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player */ "./src/player.ts");
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






var world = document.getElementById('world');
var ctx = world.getContext('2d', { alpha: false });
var startBtn = document.querySelector('.startBtn');
// For game loop
var requestId, now, then, elapsed, fpsInterval;
var frameRate = 60;
var frames = 0;
var paused = false;
var levelsStarted = -1;
// Classes
var platforms, player, hud, collisions, abilities;
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
    requestId = requestAnimationFrame(gameLoop);
    fpsInterval = 1000 / frameRate;
    now = Date.now();
    elapsed = now - (then || 0);
    if (elapsed > fpsInterval) {
        if (frames === 0)
            setTimeout(function () {
                hud.fps = frames;
                frames = 0;
            }, 1000);
        frames += 1;
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
        // if (platforms.platsVisible?.[0]?.index === 0 && platforms.currentLevel > levelsStarted) {
        // 	levelsStarted = platforms.currentLevel;
        // }
        if (hud.lives === 0)
            endGame();
    }
};
var startGame = function () {
    gameLoop();
};
var prepGame = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                Object.freeze(_public_gameObject__WEBPACK_IMPORTED_MODULE_0__["default"]);
                hud = new _hud__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, world);
                player = new _player__WEBPACK_IMPORTED_MODULE_5__["default"](ctx, world, hud);
                collisions = new _collisions__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, world, player, hud);
                abilities = new _abilities__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, world, hud);
                platforms = new _platforms__WEBPACK_IMPORTED_MODULE_4__["default"](ctx, world, player, hud, collisions, abilities, _public_gameObject__WEBPACK_IMPORTED_MODULE_0__["default"]);
                return [4 /*yield*/, platforms.setUp()];
            case 1:
                _a.sent();
                return [4 /*yield*/, player.setUp()];
            case 2:
                _a.sent();
                startGame();
                startBtn.style.display = 'none';
                return [2 /*return*/];
        }
    });
}); };
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
    function Platforms(ctx, world, player, hud, collisions, abilities, gameObject) {
        this.ctx = ctx;
        this.world = world;
        this.player = player;
        this.hud = hud;
        this.collisions = collisions;
        this.abilities = abilities;
        this.gameObject = gameObject;
        this.currentLevel = 0;
        this.platsVisible = [
            {
                index: 0,
                x: 0,
                level: 0,
            },
        ];
        this.backgroundX = 0;
        this.backgroundX2 = this.world.width;
        this.bgImgYOffset = 0;
        this.bgImgYOffset2 = 0;
        this.gameOver = false;
        this.collisionMargin = 30;
        this.imagePaths = [
            '../public/bgLevel1.png',
            '../public/bgLevel2.png',
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
        this.bgImg1 = '';
        this.bgImg2 = '';
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
    Platforms.prototype.nextPlatform = function () {
        var lastVisiblePlat = this.platsVisible[this.platsVisible.length - 1];
        var platsRef = this.gameObject.levels[this.currentLevel].platforms;
        var lastPlatRef = platsRef[lastVisiblePlat.index];
        // const nextPlat: IPlatform = platsRef[lastVisiblePlat.index + 1];
        if (lastVisiblePlat.index === platsRef.length - 1) {
            this.currentLevel += 1;
            this.platsVisible.push({
                index: 0,
                x: lastVisiblePlat.x + lastPlatRef.len + lastPlatRef.gapToNext,
                level: this.currentLevel,
            });
            if (this.platsVisible[0].x + platsRef[this.platsVisible[0].index].len < 0)
                this.platsVisible.shift();
            return;
        }
        if (lastVisiblePlat.index === 0) {
            this.hud.currentLevel = this.currentLevel;
            this.hud.beginLevelTextAnimation();
        }
        this.platsVisible.push({
            index: lastVisiblePlat.index + 1,
            x: lastVisiblePlat.x + lastPlatRef.len + lastPlatRef.gapToNext,
            level: this.currentLevel,
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
        if (this.bgImg2)
            this.backgroundX2 -= level.speed / 8;
    };
    Platforms.prototype.drawDecorForPlat = function (decor, platYTop, platX, platLen) {
        for (var i = 0; i < (decor === null || decor === void 0 ? void 0 : decor.length); i++) {
            var imgSrc = this.images[decor[i].name];
            var decorXVals = decor[i].xLocsOnPlatByPerc;
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
    Platforms.prototype.drawPowerUps = function (powerUps, platYTop, platX, platLen, platIndex) {
        for (var i = 0; i < (powerUps === null || powerUps === void 0 ? void 0 : powerUps.length); i++) {
            var imgSrc = this.images[powerUps[i].name];
            if (!imgSrc)
                continue;
            var puX = powerUps[i].xPercAlongPlat;
            this.ctx.drawImage(imgSrc, platX + platLen * puX, platYTop - imgSrc.height + 10, imgSrc.width, imgSrc.height);
        }
    };
    Platforms.prototype.drawBgImage = function () {
        var _a;
        if (!this.bgImg1.length) {
            this.bgImgYOffset = this.gameObject.levels[this.currentLevel].bgImgYOffset;
            this.bgImg1 = this.gameObject.levels[this.currentLevel].backgroundImg;
        }
        if (this.bgImg2.length && this.backgroundX2 <= 0) {
            this.bgImg1 = this.gameObject.levels[this.currentLevel].backgroundImg;
            this.bgImg2 = '';
            this.backgroundX = this.backgroundX2;
            this.backgroundX2 = this.world.width;
            this.bgImgYOffset = this.bgImgYOffset2;
            this.bgImgYOffset2 = 0;
        }
        var bgImage1 = this.images[this.bgImg1]; // Left Side Background
        if ((this.backgroundX + bgImage1.width < this.world.width ||
            this.platsVisible[0].level !== this.currentLevel) &&
            !this.bgImg2.length) {
            this.backgroundX2 = this.world.width;
            this.bgImgYOffset2 = this.gameObject.levels[this.currentLevel].bgImgYOffset;
            this.bgImg2 = this.gameObject.levels[this.currentLevel].backgroundImg;
        }
        var bgImage2 = (_a = this.images) === null || _a === void 0 ? void 0 : _a[this.bgImg2]; // Right Side Background
        this.ctx.drawImage(bgImage1, 0, 0, bgImage1.width, bgImage1.height, this.backgroundX, this.world.height - bgImage1.height + this.bgImgYOffset, bgImage1.width, bgImage1.height);
        if (bgImage2) {
            this.ctx.drawImage(bgImage2, 0, 0, bgImage2.width, bgImage2.height, this.backgroundX2, this.world.height - bgImage2.height + this.bgImgYOffset2, bgImage2.width, bgImage2.height);
        }
    };
    Platforms.prototype.draw = function () {
        this.drawBgImage();
        var isFalling = true;
        for (var _i = 0, _a = this.platsVisible; _i < _a.length; _i++) {
            var plat = _a[_i];
            var level = this.gameObject.levels[plat.level];
            var imgW = this.images[level.platformTexture].width * (level.platforms[plat.index].len / level.maxPlatLen);
            var platform = this.gameObject.levels[plat.level].platforms[plat.index] || [];
            if (platform === null || platform === void 0 ? void 0 : platform.decor) {
                this.drawDecorForPlat(platform.decor, level.platforms[plat.index].y, plat.x, level.platforms[plat.index].len);
            }
            if (platform === null || platform === void 0 ? void 0 : platform.obsticles) {
                this.drawObsticleOnPlat(platform.obsticles, platform.y, plat.x, platform.len, plat.index);
            }
            if (platform === null || platform === void 0 ? void 0 : platform.powerUps) {
                this.abilities.draw(platform.powerUps, platform.y, plat.x, platform.len, plat.index);
            }
            if (level.platformH) {
                this.ctx.drawImage(this.images[level.platformTexture], 0, 0, imgW, this.images[level.platformTexture].height, plat.x, level.platforms[plat.index].y, level.platforms[plat.index].len, level.platformH);
            }
            else {
                this.ctx.drawImage(this.images[level.platformTexture], 0, this.images[level.platformTexture].height, imgW, -3 *
                    this.images[level.platformTexture].height *
                    ((this.world.height - level.platforms[plat.index].y) / this.images[level.platformTexture].height), plat.x, level.platforms[plat.index].y, level.platforms[plat.index].len, this.world.height - level.platforms[plat.index].y);
            }
            var isColliding = this.collisions.checkForPlatCollision({
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
            if (isColliding)
                isFalling = false;
            // this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            // this.ctx.beginPath();
            // this.ctx.rect(this.platforms[i].x, this.platforms[i].y, this.platforms[i].w, this.h);
            // this.ctx.fill();
        }
        if (isFalling)
            this.player.isInAir = true;
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
var Player = /** @class */ (function () {
    function Player(ctx, world, hud) {
        this.ctx = ctx;
        this.world = world;
        this.aspectRatio = 1.1;
        this.x = 100;
        this.y = 100;
        this.w = 170;
        this.h = this.w / this.aspectRatio;
        this.isInAir = true;
        this.maxJumpStart = 20;
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
        this.imagePaths = [
            '../public/frame.png',
            '../public/frameDamaged.png',
            '../public/wheel.png',
            '../public/wheelDamaged.png',
        ];
        this.images = {};
        this.isBeingDamaged = false;
        this.lastObjectHit = '';
    }
    Player.prototype.setUp = function () {
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
    Player.prototype.changeToDamagedImgs = function (object) {
        var _this = this;
        if (object === this.lastObjectHit)
            return;
        this.lastObjectHit = object;
        this.isBeingDamaged = true;
        var flashInterval = 50;
        setTimeout(function () {
            _this.isBeingDamaged = false;
            setTimeout(function () {
                _this.isBeingDamaged = true;
                setTimeout(function () {
                    _this.isBeingDamaged = false;
                    setTimeout(function () {
                        _this.isBeingDamaged = true;
                        setTimeout(function () {
                            _this.isBeingDamaged = false;
                        }, flashInterval);
                    }, flashInterval);
                }, flashInterval);
            }, flashInterval);
        }, flashInterval);
    };
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
        this.loadingJump = false;
        if (this.isJumping || this.isInAir || this.yVelocity < 0)
            return;
        this.rotationSpeed = this.jumpVelStart;
        this.isJumping = true;
        this.isInAir = true;
        this.yVelocity = this.jumpVelStart;
        this.jumpVelStart = this.jumpVelStartReset;
    };
    Player.prototype.loadJump = function () {
        if (this.jumpVelStart < this.maxJumpStart) {
            this.jumpVelStart += 0.5;
            this.hud.drawJumpCharge(1 - (this.maxJumpStart - this.jumpVelStart) / (this.maxJumpStart - this.jumpVelStartReset), this.x, this.y);
        }
        else {
            this.hud.drawJumpCharge(1, this.x, this.y);
        }
    };
    Player.prototype.drawFrame = function () {
        // const yOffset = 5;
        this.ctx.save();
        this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y);
        this.ctx.rotate((this.rotation * Math.PI) / 180);
        this.ctx.drawImage(this.isBeingDamaged ? this.images.frameDamaged : this.images.frame, -this.images.wheel.width / 2, -this.h + this.images.wheel.height / 2, this.w, this.h);
        this.ctx.restore();
    };
    Player.prototype.drawWheels = function () {
        var rotOffset = this.hud.lives === 3 ? 0 : this.hud.lives === 2 ? 2 : 4;
        this.ctx.save();
        this.ctx.translate(this.rotCoordsForJump.x + rotOffset, this.rotCoordsForJump.y);
        this.ctx.rotate((this.rotation * Math.PI) / 180); // Rotate for jump
        this.ctx.rotate((this.wheelRot * Math.PI) / 180); // Rotate for wheel spin
        this.ctx.drawImage(this.isBeingDamaged ? this.images.wheelDamaged : this.images.wheel, -this.images.wheel.width / 2 - rotOffset, -this.images.wheel.height / 2, this.images.wheel.width, this.images.wheel.height);
        this.ctx.restore();
        this.ctx.save();
        this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y + rotOffset);
        this.ctx.rotate((this.rotation * Math.PI) / 180); // Rotate for jump
        this.ctx.translate(-this.rotCoordsForJump.x, -this.rotCoordsForJump.y); // Move to start
        this.ctx.translate(this.x + this.w - this.images.wheel.width / 2, this.rotCoordsForJump.y);
        this.ctx.rotate((this.wheelRot * Math.PI) / 180); // Rotate for wheel spin
        this.ctx.translate(-(this.x + this.w - this.images.wheel.width / 2), -this.rotCoordsForJump.y); // Move to start
        this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y);
        this.ctx.drawImage(this.isBeingDamaged ? this.images.wheelDamaged : this.images.wheel, -(this.rotCoordsForJump.x - this.x) + this.w - this.images.wheel.width, -this.images.wheel.height / 2 - rotOffset, this.images.wheel.width, this.images.wheel.height);
        this.ctx.restore();
    };
    Player.prototype.draw = function () {
        var _a;
        if (!((_a = this.images) === null || _a === void 0 ? void 0 : _a.frame))
            return;
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
            x: this.x + this.images.wheel.width / 2,
            y: this.y + this.h - this.images.wheel.height / 2,
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/abilities.ts");
/******/ 	__webpack_require__("./src/collisions.ts");
/******/ 	__webpack_require__("./src/hud.ts");
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	__webpack_require__("./src/platforms.ts");
/******/ 	__webpack_require__("./src/player.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/types.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3hCLGlEQUFpRDtRQUNqRCxtQkFBbUI7UUFFbkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHO1lBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQ3ZDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7U0FDakQsQ0FBQztRQUVGLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNGLGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlORDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jpa2VfZ2FtZS8uL3B1YmxpYy9nYW1lT2JqZWN0LnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS8uL3NyYy9hYmlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL2NvbGxpc2lvbnMudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL2h1ZC50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL3BsYXRmb3Jtcy50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvcGxheWVyLnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJR2FtZU9iamVjdCwgSUxldmVsIH0gZnJvbSAnLi4vc3JjL3R5cGVzJztcclxuXHJcbmNvbnN0IGxldmVsT25lOiBJTGV2ZWwgPSB7XHJcblx0cGxhdGZvcm1zOiBbXHJcblx0XHR7XHJcblx0XHRcdHk6IDYwMCxcclxuXHRcdFx0bGVuOiAzMDAwLFxyXG5cdFx0XHRnYXBUb05leHQ6IDAsXHJcblx0XHRcdGRlY29yOiBbeyBuYW1lOiAnc3RhcnRTaWduJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjZdIH1dLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0eTogNjAwLFxyXG5cdFx0XHRsZW46IDIwMDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMjAwLFxyXG5cdFx0XHRwb3dlclVwczogW3sgbmFtZTogJ3Rlc3QnLCB4UGVyY0Fsb25nUGxhdDogMC41LCBkaXN0QWJvdmVQbGF0OiAxMDAgfV0sXHJcblx0XHR9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDYwMCwgbGVuOiA4MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA1MDAsIGxlbjogMjAwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMicsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC40XSB9XSB9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMTIwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDQ1MCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2szJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjhdIH1dIH0sXHJcblx0XHR7IHk6IDY1MCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNjI1LCBsZW46IDYwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDYwMCwgbGVuOiA4MDAsIGdhcFRvTmV4dDogNTAgfSxcclxuXHRcdHsgeTogNTUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazMnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuMV0gfV0gfSxcclxuXHRcdHsgeTogNDEwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMzAwIH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2sxJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjZdIH1dIH0sXHJcblx0XHR7IHk6IDYwMCwgbGVuOiA4MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMTIwMCwgZ2FwVG9OZXh0OiAxMDAgfSxcclxuXHRcdHsgeTogNDUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazEnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuOF0gfV0gfSxcclxuXHRcdHsgeTogNjUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA2MjUsIGxlbjogNjAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRdLFxyXG5cdHBsYXRmb3JtVGV4dHVyZTogJ2RpcnRQbGF0JyxcclxuXHRwbGF0Zm9ybUg6IG51bGwsXHJcblx0YmFja2dyb3VuZEltZzogJ2JnTGV2ZWwxJyxcclxuXHRiZ0ltZ1lPZmZzZXQ6IDAsXHJcblx0bWF4UGxhdExlbjogNDAwMCxcclxuXHRzcGVlZDogMjAsXHJcbn07XHJcblxyXG5jb25zdCBsZXZlbFR3bzogSUxldmVsID0ge1xyXG5cdHBsYXRmb3JtczogW1xyXG5cdFx0e1xyXG5cdFx0XHR5OiA2MDAsXHJcblx0XHRcdGxlbjogMzAwMCxcclxuXHRcdFx0Z2FwVG9OZXh0OiAwLFxyXG5cdFx0XHRkZWNvcjogW3sgbmFtZTogJ3N0YXJ0U2lnbicsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC42XSB9XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHk6IDYwMCxcclxuXHRcdFx0bGVuOiAyMDAwLFxyXG5cdFx0XHRnYXBUb05leHQ6IDIwMCxcclxuXHRcdFx0cG93ZXJVcHM6IFt7IG5hbWU6ICd0ZXN0JywgeFBlcmNBbG9uZ1BsYXQ6IDAuNSwgZGlzdEFib3ZlUGxhdDogMTAwIH1dLFxyXG5cdFx0fSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazEnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuMV0gfV0gfSxcclxuXHRcdHsgeTogNjAwLCBsZW46IDgwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDUwMCwgbGVuOiAyMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2syJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjRdIH1dIH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMjAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNDUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazMnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuOF0gfV0gfSxcclxuXHRcdHsgeTogNjUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA2MjUsIGxlbjogNjAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNjAwLCBsZW46IDgwMCwgZ2FwVG9OZXh0OiA1MCB9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMjAwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDU1MCwgbGVuOiA3MDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazMnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuMV0gfV0gfSxcclxuXHRcdHsgeTogNDEwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMzAwIH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2sxJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjZdIH1dIH0sXHJcblx0XHR7IHk6IDYwMCwgbGVuOiA4MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA1NTAsIGxlbjogMTUwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMycsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC40XSB9XSB9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMTIwMCwgZ2FwVG9OZXh0OiAxMDAgfSxcclxuXHRcdHsgeTogNDUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazEnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuOF0gfV0gfSxcclxuXHRcdHsgeTogNjUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA2MjUsIGxlbjogNjAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRdLFxyXG5cdHBsYXRmb3JtVGV4dHVyZTogJ3dvb2RQbGF0JyxcclxuXHRwbGF0Zm9ybUg6IDE2LFxyXG5cdGJhY2tncm91bmRJbWc6ICdiZ0xldmVsMicsXHJcblx0YmdJbWdZT2Zmc2V0OiA2MDAsXHJcblx0bWF4UGxhdExlbjogNDAwMCxcclxuXHRzcGVlZDogMjAsXHJcbn07XHJcblxyXG5jb25zdCBnYW1lT2JqZWN0OiBJR2FtZU9iamVjdCA9IHtcclxuXHRsZXZlbHM6IFtsZXZlbE9uZSwgbGV2ZWxUd29dLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZU9iamVjdDtcclxuIiwiaW1wb3J0IEh1ZCBmcm9tICcuL2h1ZCc7XHJcbmltcG9ydCB7IENvbnRleHQsIElQb3dlclVwIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYmlsaXRpZXMge1xyXG5cdGN0eDogQ29udGV4dDtcclxuXHR3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblx0aHVkOiBIdWQ7XHJcblx0aW1hZ2VQYXRoczogc3RyaW5nW107XHJcblx0aW1hZ2VzOiBhbnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGN0eDogQ29udGV4dCwgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50LCBodWQ6IEh1ZCkge1xyXG5cdFx0dGhpcy5jdHggPSBjdHg7XHJcblx0XHR0aGlzLndvcmxkID0gd29ybGQ7XHJcblx0XHR0aGlzLmh1ZCA9IGh1ZDtcclxuXHRcdHRoaXMuaW1hZ2VQYXRocyA9IFsnLi4vcHVibGljL2JnTW91bnRhaW5zLnBuZyddO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSB7fTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBzZXRVcCgpIHtcclxuXHRcdGNvbnN0IHByZWxvYWRJbWFnZXMgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5pbWFnZVBhdGhzLm1hcCgocGF0aDogc3RyaW5nKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSBwYXRoLnNwbGl0KCcvJykucG9wKCk/LnNwbGl0KCcuJylbMF07XHJcblx0XHRcdFx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuXHRcdFx0XHRcdGltYWdlLnNyYyA9IHBhdGg7XHJcblx0XHRcdFx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoW25hbWUsIGltYWdlXSk7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0aW1hZ2Uub25lcnJvciA9ICgpID0+IHJlamVjdChgSW1hZ2UgZmFpbGVkIHRvIGxvYWQ6ICR7cGF0aH1gKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGltZ0FycmF5dGVtcDogYW55W10gPSBhd2FpdCBwcmVsb2FkSW1hZ2VzKCk7XHJcblx0XHR0aGlzLmltYWdlcyA9IE9iamVjdC5mcm9tRW50cmllcyhpbWdBcnJheXRlbXApO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGRyYXcocG93ZXJVcHM6IElQb3dlclVwW10sIHBsYXRZVG9wOiBudW1iZXIsIHBsYXRYOiBudW1iZXIsIHBsYXRMZW46IG51bWJlciwgcGxhdEluZGV4OiBudW1iZXIpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG93ZXJVcHM/Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGltZ1NyYzogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMuaW1hZ2VzW3Bvd2VyVXBzW2ldLm5hbWVdO1xyXG5cdFx0XHRpZiAoIWltZ1NyYykgY29udGludWU7XHJcblx0XHRcdGNvbnN0IHB1WCA9IHBvd2VyVXBzW2ldLnhQZXJjQWxvbmdQbGF0O1xyXG5cclxuXHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRcdGltZ1NyYyxcclxuXHRcdFx0XHRwbGF0WCArIHBsYXRMZW4gKiBwdVgsXHJcblx0XHRcdFx0cGxhdFlUb3AgLSBpbWdTcmMuaGVpZ2h0ICsgMTAsXHJcblx0XHRcdFx0aW1nU3JjLndpZHRoLFxyXG5cdFx0XHRcdGltZ1NyYy5oZWlnaHRcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IEh1ZCBmcm9tICcuL2h1ZCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBDb250ZXh0LCBJQ29sbGlzaW9uQXJncyB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlzaW9ucyB7XHJcblx0cHJpdmF0ZSBjdHg6IENvbnRleHQ7XHJcblx0cHJpdmF0ZSB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblx0cHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcclxuXHRwcml2YXRlIGh1ZDogSHVkO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjdHg6IENvbnRleHQsIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudCwgcGxheWVyOiBQbGF5ZXIsIGh1ZDogSHVkKSB7XHJcblx0XHR0aGlzLmN0eCA9IGN0eDtcclxuXHRcdHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cdFx0dGhpcy5odWQgPSBodWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hlY2tGb3JQbGF0Q29sbGlzaW9uKHsgeDEsIHkxLCB4MiwgeTIsIHcxLCBoMSwgdzIsIGgyLCBtYXJnaW4sIG9iamVjdCB9OiBJQ29sbGlzaW9uQXJncyk6IGJvb2xlYW4ge1xyXG5cdFx0Y29uc3QgcGxheWVyUmlnaHRPZlBsYXRMZWZ0ID0geDEgKyB3MSA+PSB4MiArIG1hcmdpbjsgLy8gUGxheWVyIHJpZ2h0IHNpZGUgdG8gcmlnaHQgb2YgcGxhdCBsZWZ0XHJcblx0XHRjb25zdCBwbGF5ZXJMZWZ0T2ZQbGF0UmlnaHQgPSB4MSA8PSB4MiArIHcyOyAvLyBQbGF5ZXIgbGVmdCBzaWRlIHRvIGxlZnQgb2YgcGxhdCByaWdodFxyXG5cdFx0Y29uc3QgcGxheWVyQWJvdmVQbGF0Qm90ID0geTEgPD0geTIgKyBoMjsgLy9QbGF5ZXIgdG9wIGFib3ZlIHBsYXQgYm90dG9tXHJcblx0XHRjb25zdCBwbGF5ZXJCZWxvd1BsYXRUb3AgPSB5MSArIHRoaXMucGxheWVyLmggPiB5MiArICh0aGlzLnBsYXllci5pc0luQWlyID8gbWFyZ2luIDogMCk7IC8vIFBsYXllciBib3R0b20gYWJvdmUgcGxhdCB0b3BcclxuXHJcblx0XHRpZiAocGxheWVyUmlnaHRPZlBsYXRMZWZ0ICYmIHBsYXllckxlZnRPZlBsYXRSaWdodCAmJiBwbGF5ZXJBYm92ZVBsYXRCb3QpIHtcclxuXHRcdFx0Ly8gTGFuZCBpZiBuZWdhdGl2ZSB2ZWxvY2l0eSBhbmQgd2l0aGluIDIwcHggb2YgcGxhdGZvcm1cclxuXHRcdFx0aWYgKHRoaXMucGxheWVyLnlWZWxvY2l0eSA8PSAwICYmIE1hdGguYWJzKHkyIC0gKHkxICsgaDEpKSA8IDIwKSB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIubGFuZCh5Mik7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAocGxheWVyQmVsb3dQbGF0VG9wKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ1BsYXRmb3JtIENvbGxpc2lvbiEnKTtcclxuXHRcdFx0XHR0aGlzLmh1ZC5saXZlcyA9IDA7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnBsYXllci55ICsgdGhpcy5wbGF5ZXIuaCA+IHRoaXMud29ybGQuaGVpZ2h0KSB7XHJcblx0XHRcdHRoaXMuaHVkLmxpdmVzID0gMDtcclxuXHRcdFx0Y29uc29sZS5sb2coJ091dCBPZiBCb3VuZHMgQ29sbGlzaW9uIScpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjaGVja0ZvckNvbGxpc2lvbih7IHgxLCB5MSwgeDIsIHkyLCB3MSwgaDEsIHcyLCBoMiwgbWFyZ2luLCBvYmplY3QgfTogSUNvbGxpc2lvbkFyZ3MpIHtcclxuXHRcdGlmIChcclxuXHRcdFx0eDEgKyB3MSA+PSB4MiArIG1hcmdpbiAmJiAvLyBDaGVjayBwbGF5ZXIgcmlnaHQgY29sbGlzaW9uXHJcblx0XHRcdHgxIDw9IHgyICsgdzIgJiYgLy8gQ2hlY2sgcGxheWVyIGxlZnQgY29sbGlzaW9uXHJcblx0XHRcdHkxIDw9IHkyICsgaDIgJiYgLy8gQ2hlY2sgcGxheWVyIHRvcCBjb2xsaXNpb25cclxuXHRcdFx0eTEgKyBoMSA+IHkyIC8vIENoZWNrIHBsYXllciBib3R0b20gY29sbGlzaW9uXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy5odWQucmVkdWNlSGVhbHRoKG9iamVjdCk7XHJcblx0XHRcdHRoaXMucGxheWVyLmNoYW5nZVRvRGFtYWdlZEltZ3Mob2JqZWN0KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHRocm90dGxlIGZyb20gJy4uL3V0aWxzL3Rocm90dGxlJztcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHVkIHtcclxuXHRwcml2YXRlIGN0eDogQ29udGV4dDtcclxuXHRwcml2YXRlIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHRwdWJsaWMgbGl2ZXM6IG51bWJlcjtcclxuXHRwcml2YXRlIGxhc3RPYmplY3RIaXQ6IGFueTtcclxuXHRwdWJsaWMgZHJhd2luZ0xldmVsVGV4dDogYm9vbGVhbjtcclxuXHRwcml2YXRlIGxldmVsVGV4dE9wYWNpdHk6IG51bWJlcjtcclxuXHRwcml2YXRlIGxldmVsVGV4dE9wYWNpdHlJbmM6IG51bWJlcjtcclxuXHRwdWJsaWMgY3VycmVudExldmVsOiBudW1iZXI7XHJcblx0cHVibGljIGZwczogbnVtYmVyO1xyXG5cdHB1YmxpYyBmcHNFbmFibGVkOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjdHg6IENvbnRleHQsIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG5cdFx0dGhpcy5jdHggPSBjdHg7XHJcblx0XHR0aGlzLndvcmxkID0gd29ybGQ7XHJcblx0XHR0aGlzLmxpdmVzID0gMztcclxuXHRcdHRoaXMubGFzdE9iamVjdEhpdCA9ICcnO1xyXG5cdFx0dGhpcy5kcmF3aW5nTGV2ZWxUZXh0ID0gZmFsc2U7XHJcblx0XHR0aGlzLmxldmVsVGV4dE9wYWNpdHkgPSAwO1xyXG5cdFx0dGhpcy5sZXZlbFRleHRPcGFjaXR5SW5jID0gMC4wMjtcclxuXHRcdHRoaXMuY3VycmVudExldmVsID0gMDtcclxuXHRcdHRoaXMuZnBzID0gMDtcclxuXHRcdHRoaXMuZnBzRW5hYmxlZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdGcHMoKSB7XHJcblx0XHRpZiAoIXRoaXMuZnBzRW5hYmxlZCkgcmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY3R4LmZvbnQgPSAnMjBweCBBcmlhbCc7XHJcblx0XHR0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAyNTUsIDAsIDEpJztcclxuXHRcdHRoaXMuY3R4LnRleHRBbGlnbiA9ICdyaWdodCc7XHJcblx0XHR0aGlzLmN0eC5maWxsVGV4dChgJHt0aGlzLmZwc30gRlBTYCwgdGhpcy53b3JsZC53aWR0aCAtIDIwLCAzMCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhd0p1bXBDaGFyZ2UocGVyY2VudENoYXJnZWQ6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IHcgPSA4O1xyXG5cdFx0Y29uc3QgaCA9IDYwO1xyXG5cdFx0Y29uc3QgeE9mZnNldCA9IDA7XHJcblx0XHRjb25zdCB5T2Zmc2V0ID0gLTIwO1xyXG5cdFx0dGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiKDAsIDAsIDApJztcclxuXHRcdHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2IoNywgMTkxLCA0KSc7XHJcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdHRoaXMuY3R4LnJlY3QoeCArIHhPZmZzZXQsIHkgKyB5T2Zmc2V0LCB3LCBoKTtcclxuXHRcdHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cdFx0dGhpcy5jdHguZmlsbFJlY3QoeCArIHhPZmZzZXQsIHkgKyB5T2Zmc2V0ICsgaCwgdywgLWggKiBwZXJjZW50Q2hhcmdlZCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVkdWNlSGVhbHRoKG9iamVjdDogc3RyaW5nKSB7XHJcblx0XHRpZiAodGhpcy5sYXN0T2JqZWN0SGl0ID09PSBvYmplY3QpIHJldHVybjtcclxuXHRcdHRoaXMubGl2ZXMgLT0gMTtcclxuXHRcdHRoaXMubGFzdE9iamVjdEhpdCA9IG9iamVjdDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZHJhd0hlYXJ0KHNlY3Rpb25XOiBudW1iZXIsIGhlYXJ0SW5kZXg6IG51bWJlciwgc2VjdGlvblN0YXJ0WDogbnVtYmVyKSB7XHJcblx0XHRjb25zdCB4U2hpZnRJbnNpZGVCb3ggPSA4O1xyXG5cdFx0Y29uc3QgaGVhcnRDb250YWluZXJXID0gNTA7XHJcblx0XHRjb25zdCB4b2ZmID1cclxuXHRcdFx0KGhlYXJ0SW5kZXggPT09IDAgPyAwIDogaGVhcnRJbmRleCA9PT0gMSA/IGhlYXJ0Q29udGFpbmVyVyA6IGhlYXJ0Q29udGFpbmVyVyAqIDIpICtcclxuXHRcdFx0c2VjdGlvblN0YXJ0WCArXHJcblx0XHRcdHhTaGlmdEluc2lkZUJveDtcclxuXHRcdGNvbnN0IHlvZmYgPSAxNDtcclxuXHRcdGNvbnN0IHNjYWxlID0gMC4wNjtcclxuXHJcblx0XHR0aGlzLmN0eC5maWxsU3R5bGUgPSAncmVkJztcclxuXHRcdHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LCAwLCAwLCAwLjYpJztcclxuXHRcdHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XHJcblxyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHR0aGlzLmN0eC5tb3ZlVG8oc2NhbGUgKiAzNzIgKyB4b2ZmLCBzY2FsZSAqIDI0MCArIHlvZmYpO1xyXG5cdFx0dGhpcy5jdHguYmV6aWVyQ3VydmVUbyhcclxuXHRcdFx0c2NhbGUgKiA0ODcgKyB4b2ZmLFxyXG5cdFx0XHRzY2FsZSAqIDExNyArIHlvZmYsXHJcblx0XHRcdHNjYWxlICogNjQyICsgeG9mZixcclxuXHRcdFx0c2NhbGUgKiAyNjIgKyB5b2ZmLFxyXG5cdFx0XHRzY2FsZSAqIDU1MSArIHhvZmYsXHJcblx0XHRcdHNjYWxlICogMzYzICsgeW9mZlxyXG5cdFx0KTtcclxuXHRcdHRoaXMuY3R4LmJlemllckN1cnZlVG8oXHJcblx0XHRcdHNjYWxlICogNTQxICsgeG9mZixcclxuXHRcdFx0c2NhbGUgKiAzNzQgKyB5b2ZmLFxyXG5cdFx0XHRzY2FsZSAqIDM5OCArIHhvZmYsXHJcblx0XHRcdHNjYWxlICogNTUwICsgeW9mZixcclxuXHRcdFx0c2NhbGUgKiAzODUgKyB4b2ZmLFxyXG5cdFx0XHRzY2FsZSAqIDU5NCArIHlvZmZcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN0eC5iZXppZXJDdXJ2ZVRvKFxyXG5cdFx0XHRzY2FsZSAqIDM3MSArIHhvZmYsXHJcblx0XHRcdHNjYWxlICogNTUwICsgeW9mZixcclxuXHRcdFx0c2NhbGUgKiAyMzMgKyB4b2ZmLFxyXG5cdFx0XHRzY2FsZSAqIDM3OSArIHlvZmYsXHJcblx0XHRcdHNjYWxlICogMjIyICsgeG9mZixcclxuXHRcdFx0c2NhbGUgKiAzNjcgKyB5b2ZmXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5jdHguYmV6aWVyQ3VydmVUbyhcclxuXHRcdFx0c2NhbGUgKiAxMjEgKyB4b2ZmLFxyXG5cdFx0XHRzY2FsZSAqIDI1NyArIHlvZmYsXHJcblx0XHRcdHNjYWxlICogMjk0ICsgeG9mZixcclxuXHRcdFx0c2NhbGUgKiAxMjUgKyB5b2ZmLFxyXG5cdFx0XHRzY2FsZSAqIDM4NSArIHhvZmYsXHJcblx0XHRcdHNjYWxlICogMjQ2ICsgeW9mZlxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmN0eC5zYXZlKCk7XHJcblx0XHR0aGlzLmN0eC5jbGlwKCk7XHJcblx0XHR0aGlzLmN0eC5saW5lV2lkdGggKj0gMjtcclxuXHRcdHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cdFx0dGhpcy5jdHgucmVzdG9yZSgpO1xyXG5cclxuXHRcdGlmIChoZWFydEluZGV4ICsgMSA8PSB0aGlzLmxpdmVzKSB0aGlzLmN0eC5maWxsKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdMaXZlcygpIHtcclxuXHRcdGNvbnN0IHNlY3Rpb25TdGFydFggPSAzMDtcclxuXHRcdGNvbnN0IHNlY3Rpb25TdGFydFkgPSAxMTtcclxuXHRcdGNvbnN0IHNlY3Rpb25XID0gMTYwO1xyXG5cdFx0Y29uc3Qgc2VjdGlvbkggPSA1MDtcclxuXHRcdHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuNSknO1xyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHR0aGlzLmN0eC5yb3VuZFJlY3Qoc2VjdGlvblN0YXJ0WCwgc2VjdGlvblN0YXJ0WSwgc2VjdGlvblcsIHNlY3Rpb25ILCAxMCk7XHJcblx0XHR0aGlzLmN0eC5maWxsKCk7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuXHRcdFx0dGhpcy5kcmF3SGVhcnQoc2VjdGlvblcsIGksIHNlY3Rpb25TdGFydFgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3TmV4dExldmVsVGV4dCgpIHtcclxuXHRcdHRoaXMuY3R4LmZvbnQgPSAnNzBweCBBcmlhbCc7XHJcblx0XHR0aGlzLmN0eC5maWxsU3R5bGUgPSBgcmdiYSgwLCAwLCAwLCAke3RoaXMubGV2ZWxUZXh0T3BhY2l0eX0pYDtcclxuXHRcdHRoaXMuY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG5cdFx0dGhpcy5jdHguZmlsbFRleHQoYExldmVsICR7dGhpcy5jdXJyZW50TGV2ZWwgKyAxfWAsIHRoaXMud29ybGQud2lkdGggLyAyLCB0aGlzLndvcmxkLmhlaWdodCAvIDIpO1xyXG5cdFx0dGhpcy5sZXZlbFRleHRPcGFjaXR5ICs9IHRoaXMubGV2ZWxUZXh0T3BhY2l0eUluYztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBiZWdpbkxldmVsVGV4dEFuaW1hdGlvbigpIHtcclxuXHRcdHRoaXMuZHJhd2luZ0xldmVsVGV4dCA9IHRydWU7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5sZXZlbFRleHRPcGFjaXR5SW5jICo9IC0xO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmRyYXdpbmdMZXZlbFRleHQgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmxldmVsVGV4dE9wYWNpdHlJbmMgKj0gLTE7XHJcblx0XHRcdH0sIDE1MDApO1xyXG5cdFx0fSwgMTUwMCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhdygpIHtcclxuXHRcdHRoaXMuZHJhd0xpdmVzKCk7XHJcblx0XHR0aGlzLmRyYXdGcHMoKTtcclxuXHJcblx0XHRpZiAodGhpcy5kcmF3aW5nTGV2ZWxUZXh0KSB0aGlzLmRyYXdOZXh0TGV2ZWxUZXh0KCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBnYW1lT2JqZWN0IGZyb20gJy4uL3B1YmxpYy9nYW1lT2JqZWN0JztcclxuaW1wb3J0IEFiaWxpdGllcyBmcm9tICcuL2FiaWxpdGllcyc7XHJcbmltcG9ydCBDb2xsaXNpb25zIGZyb20gJy4vY29sbGlzaW9ucyc7XHJcbmltcG9ydCBIdWQgZnJvbSAnLi9odWQnO1xyXG5pbXBvcnQgUGxhdGZvcm1zIGZyb20gJy4vcGxhdGZvcm1zJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcblxyXG5jb25zdCB3b3JsZCA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ybGQnKTtcclxuY29uc3QgY3R4ID0gPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRD53b3JsZC5nZXRDb250ZXh0KCcyZCcsIHsgYWxwaGE6IGZhbHNlIH0pO1xyXG5cclxuY29uc3Qgc3RhcnRCdG4gPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0QnRuJyk7XHJcblxyXG4vLyBGb3IgZ2FtZSBsb29wXHJcbmxldCByZXF1ZXN0SWQ6IG51bWJlciB8IG51bGwsIG5vdzogbnVtYmVyLCB0aGVuOiBudW1iZXIsIGVsYXBzZWQ6IG51bWJlciwgZnBzSW50ZXJ2YWw6IG51bWJlcjtcclxuXHJcbmxldCBmcmFtZVJhdGUgPSA2MDtcclxubGV0IGZyYW1lcyA9IDA7XHJcbmxldCBwYXVzZWQgPSBmYWxzZTtcclxubGV0IGxldmVsc1N0YXJ0ZWQgPSAtMTtcclxuXHJcbi8vIENsYXNzZXNcclxubGV0IHBsYXRmb3JtczogUGxhdGZvcm1zLCBwbGF5ZXI6IFBsYXllciwgaHVkOiBIdWQsIGNvbGxpc2lvbnM6IENvbGxpc2lvbnMsIGFiaWxpdGllczogQWJpbGl0aWVzO1xyXG5cclxuY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcclxuXHRpZiAocmVxdWVzdElkKSBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SWQpO1xyXG5cdHJlcXVlc3RJZCA9IG51bGw7XHJcblx0Ly8gcHJlcEdhbWUoKTtcclxuXHQvLyBzdGFydEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHQvLyBzdGFydEJ0bi5pbm5lckhUTUwgPSAnUGxheSBBZ2Fpbic7XHJcblx0Ly8gbGV2ZWxzU3RhcnRlZCA9IC0xO1xyXG59O1xyXG5cclxuY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XHJcblx0cmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcclxuXHJcblx0ZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnJhbWVSYXRlO1xyXG5cdG5vdyA9IERhdGUubm93KCk7XHJcblx0ZWxhcHNlZCA9IG5vdyAtICh0aGVuIHx8IDApO1xyXG5cclxuXHRpZiAoZWxhcHNlZCA+IGZwc0ludGVydmFsKSB7XHJcblx0XHRpZiAoZnJhbWVzID09PSAwKVxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRodWQuZnBzID0gZnJhbWVzO1xyXG5cdFx0XHRcdGZyYW1lcyA9IDA7XHJcblx0XHRcdH0sIDEwMDApO1xyXG5cdFx0ZnJhbWVzICs9IDE7XHJcblx0XHR0aGVuID0gbm93IC0gKGVsYXBzZWQgJSBmcHNJbnRlcnZhbCk7XHJcblxyXG5cdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCB3b3JsZC53aWR0aCwgd29ybGQuaGVpZ2h0KTtcclxuXHRcdGlmICghcGF1c2VkKSB7XHJcblx0XHRcdHBsYXRmb3Jtcy5tb3ZlKCk7XHJcblx0XHRcdHBsYXllci5zcGVlZCA9IGdhbWVPYmplY3QubGV2ZWxzW3BsYXRmb3Jtcy5jdXJyZW50TGV2ZWxdLnNwZWVkO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cGxheWVyLnNwZWVkID0gMDtcclxuXHRcdH1cclxuXHRcdHBsYXRmb3Jtcy5kcmF3KCk7XHJcblx0XHRwbGF5ZXIuZHJhdygpO1xyXG5cdFx0aHVkLmRyYXcoKTtcclxuXHJcblx0XHQvLyBpZiAocGxhdGZvcm1zLnBsYXRzVmlzaWJsZT8uWzBdPy5pbmRleCA9PT0gMCAmJiBwbGF0Zm9ybXMuY3VycmVudExldmVsID4gbGV2ZWxzU3RhcnRlZCkge1xyXG5cdFx0Ly8gXHRsZXZlbHNTdGFydGVkID0gcGxhdGZvcm1zLmN1cnJlbnRMZXZlbDtcclxuXHRcdC8vIH1cclxuXHJcblx0XHRpZiAoaHVkLmxpdmVzID09PSAwKSBlbmRHYW1lKCk7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG5cdGdhbWVMb29wKCk7XHJcbn07XHJcblxyXG5jb25zdCBwcmVwR2FtZSA9IGFzeW5jICgpID0+IHtcclxuXHRPYmplY3QuZnJlZXplKGdhbWVPYmplY3QpO1xyXG5cclxuXHRodWQgPSBuZXcgSHVkKGN0eCwgd29ybGQpO1xyXG5cdHBsYXllciA9IG5ldyBQbGF5ZXIoY3R4LCB3b3JsZCwgaHVkKTtcclxuXHRjb2xsaXNpb25zID0gbmV3IENvbGxpc2lvbnMoY3R4LCB3b3JsZCwgcGxheWVyLCBodWQpO1xyXG5cdGFiaWxpdGllcyA9IG5ldyBBYmlsaXRpZXMoY3R4LCB3b3JsZCwgaHVkKTtcclxuXHRwbGF0Zm9ybXMgPSBuZXcgUGxhdGZvcm1zKGN0eCwgd29ybGQsIHBsYXllciwgaHVkLCBjb2xsaXNpb25zLCBhYmlsaXRpZXMsIGdhbWVPYmplY3QpO1xyXG5cclxuXHRhd2FpdCBwbGF0Zm9ybXMuc2V0VXAoKTtcclxuXHRhd2FpdCBwbGF5ZXIuc2V0VXAoKTtcclxuXHJcblx0c3RhcnRHYW1lKCk7XHJcblx0c3RhcnRCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufTtcclxuXHJcbnByZXBHYW1lKCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XHJcblx0c3dpdGNoIChlLmNvZGUpIHtcclxuXHRcdGNhc2UgJ1NwYWNlJzpcclxuXHRcdFx0aWYgKHJlcXVlc3RJZCkge1xyXG5cdFx0XHRcdGlmIChwYXVzZWQpIHtcclxuXHRcdFx0XHRcdHBhdXNlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoIXBsYXllci5sb2FkaW5nSnVtcCkgcGxheWVyLmxvYWRpbmdKdW1wID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XHJcblx0c3dpdGNoIChlLmNvZGUpIHtcclxuXHRcdGNhc2UgJ0VzY2FwZSc6XHJcblx0XHRcdGlmIChwYXVzZWQpIHtcclxuXHRcdFx0XHRwYXVzZWQgPSBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwYXVzZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRjYXNlICdTcGFjZSc6XHJcblx0XHRcdHBsYXllci5qdW1wKCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufSk7XHJcblxyXG5zdGFydEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG5cdHN0YXJ0R2FtZSgpO1xyXG5cdHN0YXJ0QnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn07XHJcbiIsImltcG9ydCBBYmlsaXRpZXMgZnJvbSAnLi9hYmlsaXRpZXMnO1xyXG5pbXBvcnQgQ29sbGlzaW9ucyBmcm9tICcuL2NvbGxpc2lvbnMnO1xyXG5pbXBvcnQgSHVkIGZyb20gJy4vaHVkJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IENvbnRleHQsIElHYW1lT2JqZWN0LCBJTGV2ZWwsIElQbGF0T2JqZWN0LCBJUGxhdGZvcm0sIElQb3dlclVwLCBJVmlzaWJsZVBsYXQgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtcyB7XHJcblx0cHJpdmF0ZSBjdHg6IENvbnRleHQ7XHJcblx0cHJpdmF0ZSB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblx0cHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcclxuXHRwcml2YXRlIGh1ZDogSHVkO1xyXG5cdHByaXZhdGUgY29sbGlzaW9uczogQ29sbGlzaW9ucztcclxuXHRwcml2YXRlIGFiaWxpdGllczogQWJpbGl0aWVzO1xyXG5cdHByaXZhdGUgZ2FtZU9iamVjdDogSUdhbWVPYmplY3Q7XHJcblx0cHVibGljIGN1cnJlbnRMZXZlbDogbnVtYmVyO1xyXG5cdHB1YmxpYyBwbGF0c1Zpc2libGU6IElWaXNpYmxlUGxhdFtdO1xyXG5cdHByaXZhdGUgYmFja2dyb3VuZFg6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhY2tncm91bmRYMjogbnVtYmVyO1xyXG5cdHByaXZhdGUgYmdJbWdZT2Zmc2V0OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBiZ0ltZ1lPZmZzZXQyOiBudW1iZXI7XHJcblx0cHVibGljIGdhbWVPdmVyOiBib29sZWFuO1xyXG5cdHByaXZhdGUgY29sbGlzaW9uTWFyZ2luOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBpbWFnZVBhdGhzOiBzdHJpbmdbXTtcclxuXHRwcml2YXRlIGltYWdlczogYW55O1xyXG5cdHByaXZhdGUgYmdJbWcxOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBiZ0ltZzI6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRjdHg6IENvbnRleHQsXHJcblx0XHR3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQsXHJcblx0XHRwbGF5ZXI6IFBsYXllcixcclxuXHRcdGh1ZDogSHVkLFxyXG5cdFx0Y29sbGlzaW9uczogQ29sbGlzaW9ucyxcclxuXHRcdGFiaWxpdGllczogQWJpbGl0aWVzLFxyXG5cdFx0Z2FtZU9iamVjdDogYW55XHJcblx0KSB7XHJcblx0XHR0aGlzLmN0eCA9IGN0eDtcclxuXHRcdHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cdFx0dGhpcy5odWQgPSBodWQ7XHJcblx0XHR0aGlzLmNvbGxpc2lvbnMgPSBjb2xsaXNpb25zO1xyXG5cdFx0dGhpcy5hYmlsaXRpZXMgPSBhYmlsaXRpZXM7XHJcblx0XHR0aGlzLmdhbWVPYmplY3QgPSBnYW1lT2JqZWN0O1xyXG5cdFx0dGhpcy5jdXJyZW50TGV2ZWwgPSAwO1xyXG5cdFx0dGhpcy5wbGF0c1Zpc2libGUgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbmRleDogMCxcclxuXHRcdFx0XHR4OiAwLFxyXG5cdFx0XHRcdGxldmVsOiAwLFxyXG5cdFx0XHR9LFxyXG5cdFx0XTtcclxuXHRcdHRoaXMuYmFja2dyb3VuZFggPSAwO1xyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kWDIgPSB0aGlzLndvcmxkLndpZHRoO1xyXG5cdFx0dGhpcy5iZ0ltZ1lPZmZzZXQgPSAwO1xyXG5cdFx0dGhpcy5iZ0ltZ1lPZmZzZXQyID0gMDtcclxuXHRcdHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcclxuXHRcdHRoaXMuY29sbGlzaW9uTWFyZ2luID0gMzA7XHJcblx0XHR0aGlzLmltYWdlUGF0aHMgPSBbXHJcblx0XHRcdCcuLi9wdWJsaWMvYmdMZXZlbDEucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy9iZ0xldmVsMi5wbmcnLFxyXG5cdFx0XHQvLyBQbGF0Zm9ybSBUZXh0dXJlc1xyXG5cdFx0XHQnLi4vcHVibGljL3dvb2RQbGF0LnBuZycsXHJcblx0XHRcdCcuLi9wdWJsaWMvZGlydFBsYXQucG5nJyxcclxuXHRcdFx0Ly8gRGVjb3JcclxuXHRcdFx0Jy4uL3B1YmxpYy9zdGFydFNpZ24ucG5nJyxcclxuXHRcdFx0Ly8gT2JzdGljbGVzXHJcblx0XHRcdCcuLi9wdWJsaWMvcm9jazEucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy9yb2NrMi5wbmcnLFxyXG5cdFx0XHQnLi4vcHVibGljL3JvY2szLnBuZycsXHJcblx0XHRdO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSB7fTtcclxuXHRcdHRoaXMuYmdJbWcxID0gJyc7XHJcblx0XHR0aGlzLmJnSW1nMiA9ICcnO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIHNldFVwKCkge1xyXG5cdFx0Y29uc3QgcHJlbG9hZEltYWdlcyA9ICgpID0+IHtcclxuXHRcdFx0Y29uc3QgcHJvbWlzZXMgPSB0aGlzLmltYWdlUGF0aHMubWFwKChwYXRoOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IHBhdGguc3BsaXQoJy8nKS5wb3AoKT8uc3BsaXQoJy4nKVswXTtcclxuXHRcdFx0XHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcblxyXG5cdFx0XHRcdFx0aW1hZ2Uuc3JjID0gcGF0aDtcclxuXHRcdFx0XHRcdGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZShbbmFtZSwgaW1hZ2VdKTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRpbWFnZS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KGBJbWFnZSBmYWlsZWQgdG8gbG9hZDogJHtwYXRofWApO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgaW1nQXJyYXl0ZW1wOiBhbnlbXSA9IGF3YWl0IHByZWxvYWRJbWFnZXMoKTtcclxuXHRcdHRoaXMuaW1hZ2VzID0gT2JqZWN0LmZyb21FbnRyaWVzKGltZ0FycmF5dGVtcCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG5leHRQbGF0Zm9ybSgpIHtcclxuXHRcdGNvbnN0IGxhc3RWaXNpYmxlUGxhdDogSVZpc2libGVQbGF0ID0gdGhpcy5wbGF0c1Zpc2libGVbdGhpcy5wbGF0c1Zpc2libGUubGVuZ3RoIC0gMV07XHJcblx0XHRjb25zdCBwbGF0c1JlZjogSVBsYXRmb3JtW10gPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXS5wbGF0Zm9ybXM7XHJcblx0XHRjb25zdCBsYXN0UGxhdFJlZjogSVBsYXRmb3JtID0gcGxhdHNSZWZbbGFzdFZpc2libGVQbGF0LmluZGV4XTtcclxuXHRcdC8vIGNvbnN0IG5leHRQbGF0OiBJUGxhdGZvcm0gPSBwbGF0c1JlZltsYXN0VmlzaWJsZVBsYXQuaW5kZXggKyAxXTtcclxuXHJcblx0XHRpZiAobGFzdFZpc2libGVQbGF0LmluZGV4ID09PSBwbGF0c1JlZi5sZW5ndGggLSAxKSB7XHJcblx0XHRcdHRoaXMuY3VycmVudExldmVsICs9IDE7XHJcblxyXG5cdFx0XHR0aGlzLnBsYXRzVmlzaWJsZS5wdXNoKHtcclxuXHRcdFx0XHRpbmRleDogMCxcclxuXHRcdFx0XHR4OiBsYXN0VmlzaWJsZVBsYXQueCArIGxhc3RQbGF0UmVmLmxlbiArIGxhc3RQbGF0UmVmLmdhcFRvTmV4dCxcclxuXHRcdFx0XHRsZXZlbDogdGhpcy5jdXJyZW50TGV2ZWwsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMucGxhdHNWaXNpYmxlWzBdLnggKyBwbGF0c1JlZlt0aGlzLnBsYXRzVmlzaWJsZVswXS5pbmRleF0ubGVuIDwgMCkgdGhpcy5wbGF0c1Zpc2libGUuc2hpZnQoKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAobGFzdFZpc2libGVQbGF0LmluZGV4ID09PSAwKSB7XHJcblx0XHRcdHRoaXMuaHVkLmN1cnJlbnRMZXZlbCA9IHRoaXMuY3VycmVudExldmVsO1xyXG5cdFx0XHR0aGlzLmh1ZC5iZWdpbkxldmVsVGV4dEFuaW1hdGlvbigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGxhdHNWaXNpYmxlLnB1c2goe1xyXG5cdFx0XHRpbmRleDogbGFzdFZpc2libGVQbGF0LmluZGV4ICsgMSxcclxuXHRcdFx0eDogbGFzdFZpc2libGVQbGF0LnggKyBsYXN0UGxhdFJlZi5sZW4gKyBsYXN0UGxhdFJlZi5nYXBUb05leHQsXHJcblx0XHRcdGxldmVsOiB0aGlzLmN1cnJlbnRMZXZlbCxcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmICh0aGlzLnBsYXRzVmlzaWJsZVswXS54ICsgcGxhdHNSZWZbdGhpcy5wbGF0c1Zpc2libGVbMF0uaW5kZXhdLmxlbiA8IDApIHRoaXMucGxhdHNWaXNpYmxlLnNoaWZ0KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbW92ZSgpIHtcclxuXHRcdGNvbnN0IGxldmVsOiBJTGV2ZWwgPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXTtcclxuXHRcdGNvbnN0IHBsYXRSZWY6IElQbGF0Zm9ybSA9IGxldmVsLnBsYXRmb3Jtc1t0aGlzLnBsYXRzVmlzaWJsZVt0aGlzLnBsYXRzVmlzaWJsZS5sZW5ndGggLSAxXS5pbmRleF07XHJcblxyXG5cdFx0Y29uc3QgbGFzdFBsYXRYID0gdGhpcy5wbGF0c1Zpc2libGVbdGhpcy5wbGF0c1Zpc2libGUubGVuZ3RoIC0gMV0ueDtcclxuXHJcblx0XHRpZiAobGFzdFBsYXRYICsgcGxhdFJlZi5sZW4gPD0gdGhpcy53b3JsZC53aWR0aCkgdGhpcy5uZXh0UGxhdGZvcm0oKTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxhdHNWaXNpYmxlLmxlbmd0aDsgaSsrKSB0aGlzLnBsYXRzVmlzaWJsZVtpXS54IC09IGxldmVsLnNwZWVkO1xyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kWCAtPSBsZXZlbC5zcGVlZCAvIDg7XHJcblx0XHRpZiAodGhpcy5iZ0ltZzIpIHRoaXMuYmFja2dyb3VuZFgyIC09IGxldmVsLnNwZWVkIC8gODtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZHJhd0RlY29yRm9yUGxhdChkZWNvcjogSVBsYXRPYmplY3RbXSwgcGxhdFlUb3A6IG51bWJlciwgcGxhdFg6IG51bWJlciwgcGxhdExlbjogbnVtYmVyKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRlY29yPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpbWdTcmM6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLmltYWdlc1tkZWNvcltpXS5uYW1lXTtcclxuXHRcdFx0Y29uc3QgZGVjb3JYVmFscyA9IGRlY29yW2ldLnhMb2NzT25QbGF0QnlQZXJjO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkZWNvclhWYWxzPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0XHRcdGltZ1NyYyxcclxuXHRcdFx0XHRcdHBsYXRYICsgcGxhdExlbiAqIGRlY29yWFZhbHNbaV0sXHJcblx0XHRcdFx0XHRwbGF0WVRvcCAtIHRoaXMuaW1hZ2VzW2RlY29yW2ldLm5hbWVdLmhlaWdodCArIDEwLFxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbZGVjb3JbaV0ubmFtZV0ud2lkdGgsXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tkZWNvcltpXS5uYW1lXS5oZWlnaHRcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdPYnN0aWNsZU9uUGxhdChcclxuXHRcdG9ic3RpY2xlczogSVBsYXRPYmplY3RbXSxcclxuXHRcdHBsYXRZVG9wOiBudW1iZXIsXHJcblx0XHRwbGF0WDogbnVtYmVyLFxyXG5cdFx0cGxhdExlbjogbnVtYmVyLFxyXG5cdFx0cGxhdEluZGV4OiBudW1iZXJcclxuXHQpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb2JzdGljbGVzPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpbWdTcmM6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV07XHJcblx0XHRcdGNvbnN0IG9ic3RpY2xlWFZhbHMgPSBvYnN0aWNsZXNbaV0ueExvY3NPblBsYXRCeVBlcmM7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG9ic3RpY2xlWFZhbHM/Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRcdFx0aW1nU3JjLFxyXG5cdFx0XHRcdFx0cGxhdFggKyBwbGF0TGVuICogb2JzdGljbGVYVmFsc1tpXSxcclxuXHRcdFx0XHRcdHBsYXRZVG9wIC0gdGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdLmhlaWdodCArIDEwLFxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdLndpZHRoLFxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdLmhlaWdodFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuY29sbGlzaW9ucy5jaGVja0ZvckNvbGxpc2lvbih7XHJcblx0XHRcdFx0XHR4MTogdGhpcy5wbGF5ZXIueCxcclxuXHRcdFx0XHRcdHkxOiB0aGlzLnBsYXllci55LFxyXG5cdFx0XHRcdFx0eDI6IHBsYXRYICsgcGxhdExlbiAqIG9ic3RpY2xlWFZhbHNbaV0sXHJcblx0XHRcdFx0XHR5MjogcGxhdFlUb3AgLSB0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0uaGVpZ2h0ICsgMTAsXHJcblx0XHRcdFx0XHR3MTogdGhpcy5wbGF5ZXIudyxcclxuXHRcdFx0XHRcdGgxOiB0aGlzLnBsYXllci5oLFxyXG5cdFx0XHRcdFx0dzI6IHRoaXMuaW1hZ2VzW29ic3RpY2xlc1tpXS5uYW1lXS53aWR0aCxcclxuXHRcdFx0XHRcdGgyOlxyXG5cdFx0XHRcdFx0XHR0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0uaGVpZ2h0IHx8XHJcblx0XHRcdFx0XHRcdHRoaXMud29ybGQuaGVpZ2h0IC0gKHBsYXRZVG9wIC0gdGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdLmhlaWdodCArIDEwKSxcclxuXHRcdFx0XHRcdG1hcmdpbjogdGhpcy5jb2xsaXNpb25NYXJnaW4sXHJcblx0XHRcdFx0XHRvYmplY3Q6IGAke29ic3RpY2xlc1tpXS5uYW1lfV8ke3BsYXRJbmRleH1fJHtvYnN0aWNsZVhWYWxzW2ldfWAsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZHJhd1Bvd2VyVXBzKFxyXG5cdFx0cG93ZXJVcHM6IElQb3dlclVwW10sXHJcblx0XHRwbGF0WVRvcDogbnVtYmVyLFxyXG5cdFx0cGxhdFg6IG51bWJlcixcclxuXHRcdHBsYXRMZW46IG51bWJlcixcclxuXHRcdHBsYXRJbmRleDogbnVtYmVyXHJcblx0KSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBvd2VyVXBzPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpbWdTcmM6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLmltYWdlc1twb3dlclVwc1tpXS5uYW1lXTtcclxuXHRcdFx0aWYgKCFpbWdTcmMpIGNvbnRpbnVlO1xyXG5cdFx0XHRjb25zdCBwdVggPSBwb3dlclVwc1tpXS54UGVyY0Fsb25nUGxhdDtcclxuXHJcblx0XHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0XHRpbWdTcmMsXHJcblx0XHRcdFx0cGxhdFggKyBwbGF0TGVuICogcHVYLFxyXG5cdFx0XHRcdHBsYXRZVG9wIC0gaW1nU3JjLmhlaWdodCArIDEwLFxyXG5cdFx0XHRcdGltZ1NyYy53aWR0aCxcclxuXHRcdFx0XHRpbWdTcmMuaGVpZ2h0XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdCZ0ltYWdlKCkge1xyXG5cdFx0aWYgKCF0aGlzLmJnSW1nMS5sZW5ndGgpIHtcclxuXHRcdFx0dGhpcy5iZ0ltZ1lPZmZzZXQgPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXS5iZ0ltZ1lPZmZzZXQ7XHJcblx0XHRcdHRoaXMuYmdJbWcxID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0uYmFja2dyb3VuZEltZztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5iZ0ltZzIubGVuZ3RoICYmIHRoaXMuYmFja2dyb3VuZFgyIDw9IDApIHtcclxuXHRcdFx0dGhpcy5iZ0ltZzEgPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXS5iYWNrZ3JvdW5kSW1nO1xyXG5cdFx0XHR0aGlzLmJnSW1nMiA9ICcnO1xyXG5cdFx0XHR0aGlzLmJhY2tncm91bmRYID0gdGhpcy5iYWNrZ3JvdW5kWDI7XHJcblx0XHRcdHRoaXMuYmFja2dyb3VuZFgyID0gdGhpcy53b3JsZC53aWR0aDtcclxuXHRcdFx0dGhpcy5iZ0ltZ1lPZmZzZXQgPSB0aGlzLmJnSW1nWU9mZnNldDI7XHJcblx0XHRcdHRoaXMuYmdJbWdZT2Zmc2V0MiA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgYmdJbWFnZTEgPSB0aGlzLmltYWdlc1t0aGlzLmJnSW1nMV07IC8vIExlZnQgU2lkZSBCYWNrZ3JvdW5kXHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHQodGhpcy5iYWNrZ3JvdW5kWCArIGJnSW1hZ2UxLndpZHRoIDwgdGhpcy53b3JsZC53aWR0aCB8fFxyXG5cdFx0XHRcdHRoaXMucGxhdHNWaXNpYmxlWzBdLmxldmVsICE9PSB0aGlzLmN1cnJlbnRMZXZlbCkgJiZcclxuXHRcdFx0IXRoaXMuYmdJbWcyLmxlbmd0aFxyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMuYmFja2dyb3VuZFgyID0gdGhpcy53b3JsZC53aWR0aDtcclxuXHRcdFx0dGhpcy5iZ0ltZ1lPZmZzZXQyID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0uYmdJbWdZT2Zmc2V0O1xyXG5cdFx0XHR0aGlzLmJnSW1nMiA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdLmJhY2tncm91bmRJbWc7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgYmdJbWFnZTIgPSB0aGlzLmltYWdlcz8uW3RoaXMuYmdJbWcyXTsgLy8gUmlnaHQgU2lkZSBCYWNrZ3JvdW5kXHJcblxyXG5cdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRiZ0ltYWdlMSxcclxuXHRcdFx0MCxcclxuXHRcdFx0MCxcclxuXHRcdFx0YmdJbWFnZTEud2lkdGgsXHJcblx0XHRcdGJnSW1hZ2UxLmhlaWdodCxcclxuXHRcdFx0dGhpcy5iYWNrZ3JvdW5kWCxcclxuXHRcdFx0dGhpcy53b3JsZC5oZWlnaHQgLSBiZ0ltYWdlMS5oZWlnaHQgKyB0aGlzLmJnSW1nWU9mZnNldCxcclxuXHRcdFx0YmdJbWFnZTEud2lkdGgsXHJcblx0XHRcdGJnSW1hZ2UxLmhlaWdodFxyXG5cdFx0KTtcclxuXHJcblx0XHRpZiAoYmdJbWFnZTIpIHtcclxuXHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRcdGJnSW1hZ2UyLFxyXG5cdFx0XHRcdDAsXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHRiZ0ltYWdlMi53aWR0aCxcclxuXHRcdFx0XHRiZ0ltYWdlMi5oZWlnaHQsXHJcblx0XHRcdFx0dGhpcy5iYWNrZ3JvdW5kWDIsXHJcblx0XHRcdFx0dGhpcy53b3JsZC5oZWlnaHQgLSBiZ0ltYWdlMi5oZWlnaHQgKyB0aGlzLmJnSW1nWU9mZnNldDIsXHJcblx0XHRcdFx0YmdJbWFnZTIud2lkdGgsXHJcblx0XHRcdFx0YmdJbWFnZTIuaGVpZ2h0XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhdygpIHtcclxuXHRcdHRoaXMuZHJhd0JnSW1hZ2UoKTtcclxuXHJcblx0XHRsZXQgaXNGYWxsaW5nID0gdHJ1ZTtcclxuXHRcdGZvciAoY29uc3QgcGxhdCBvZiB0aGlzLnBsYXRzVmlzaWJsZSkge1xyXG5cdFx0XHRjb25zdCBsZXZlbDogSUxldmVsID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1twbGF0LmxldmVsXTtcclxuXHRcdFx0Y29uc3QgaW1nVyA9XHJcblx0XHRcdFx0dGhpcy5pbWFnZXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlXS53aWR0aCAqIChsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ubGVuIC8gbGV2ZWwubWF4UGxhdExlbik7XHJcblxyXG5cdFx0XHRjb25zdCBwbGF0Zm9ybTogSVBsYXRmb3JtID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1twbGF0LmxldmVsXS5wbGF0Zm9ybXNbcGxhdC5pbmRleF0gfHwgW107XHJcblxyXG5cdFx0XHRpZiAocGxhdGZvcm0/LmRlY29yKSB7XHJcblx0XHRcdFx0dGhpcy5kcmF3RGVjb3JGb3JQbGF0KFxyXG5cdFx0XHRcdFx0cGxhdGZvcm0uZGVjb3IsXHJcblx0XHRcdFx0XHRsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ueSxcclxuXHRcdFx0XHRcdHBsYXQueCxcclxuXHRcdFx0XHRcdGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS5sZW5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwbGF0Zm9ybT8ub2JzdGljbGVzKSB7XHJcblx0XHRcdFx0dGhpcy5kcmF3T2JzdGljbGVPblBsYXQocGxhdGZvcm0ub2JzdGljbGVzLCBwbGF0Zm9ybS55LCBwbGF0LngsIHBsYXRmb3JtLmxlbiwgcGxhdC5pbmRleCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHBsYXRmb3JtPy5wb3dlclVwcykge1xyXG5cdFx0XHRcdHRoaXMuYWJpbGl0aWVzLmRyYXcocGxhdGZvcm0ucG93ZXJVcHMsIHBsYXRmb3JtLnksIHBsYXQueCwgcGxhdGZvcm0ubGVuLCBwbGF0LmluZGV4KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGxldmVsLnBsYXRmb3JtSCkge1xyXG5cdFx0XHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2VzW2xldmVsLnBsYXRmb3JtVGV4dHVyZV0sXHJcblx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0MCxcclxuXHRcdFx0XHRcdGltZ1csXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tsZXZlbC5wbGF0Zm9ybVRleHR1cmVdLmhlaWdodCxcclxuXHRcdFx0XHRcdHBsYXQueCxcclxuXHRcdFx0XHRcdGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55LFxyXG5cdFx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLmxlbixcclxuXHRcdFx0XHRcdGxldmVsLnBsYXRmb3JtSFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlXSxcclxuXHRcdFx0XHRcdDAsXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tsZXZlbC5wbGF0Zm9ybVRleHR1cmVdLmhlaWdodCxcclxuXHRcdFx0XHRcdGltZ1csXHJcblx0XHRcdFx0XHQtMyAqXHJcblx0XHRcdFx0XHRcdHRoaXMuaW1hZ2VzW2xldmVsLnBsYXRmb3JtVGV4dHVyZV0uaGVpZ2h0ICpcclxuXHRcdFx0XHRcdFx0KCh0aGlzLndvcmxkLmhlaWdodCAtIGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55KSAvIHRoaXMuaW1hZ2VzW2xldmVsLnBsYXRmb3JtVGV4dHVyZV0uaGVpZ2h0KSxcclxuXHRcdFx0XHRcdHBsYXQueCxcclxuXHRcdFx0XHRcdGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55LFxyXG5cdFx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLmxlbixcclxuXHRcdFx0XHRcdHRoaXMud29ybGQuaGVpZ2h0IC0gbGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBpc0NvbGxpZGluZyA9IHRoaXMuY29sbGlzaW9ucy5jaGVja0ZvclBsYXRDb2xsaXNpb24oe1xyXG5cdFx0XHRcdHgxOiB0aGlzLnBsYXllci54LFxyXG5cdFx0XHRcdHkxOiB0aGlzLnBsYXllci55LFxyXG5cdFx0XHRcdHgyOiBwbGF0LngsXHJcblx0XHRcdFx0eTI6IGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55LFxyXG5cdFx0XHRcdHcxOiB0aGlzLnBsYXllci53LFxyXG5cdFx0XHRcdGgxOiB0aGlzLnBsYXllci5oLFxyXG5cdFx0XHRcdHcyOiBsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ubGVuLFxyXG5cdFx0XHRcdGgyOiBsZXZlbC5wbGF0Zm9ybUggfHwgdGhpcy53b3JsZC5oZWlnaHQgLSBsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ueSxcclxuXHRcdFx0XHRtYXJnaW46IHRoaXMuY29sbGlzaW9uTWFyZ2luLFxyXG5cdFx0XHRcdG9iamVjdDogYCR7dGhpcy5jdXJyZW50TGV2ZWx9XyR7cGxhdC5pbmRleH1gLFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChpc0NvbGxpZGluZykgaXNGYWxsaW5nID0gZmFsc2U7XHJcblxyXG5cdFx0XHQvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjMpJztcclxuXHRcdFx0Ly8gdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHRcdC8vIHRoaXMuY3R4LnJlY3QodGhpcy5wbGF0Zm9ybXNbaV0ueCwgdGhpcy5wbGF0Zm9ybXNbaV0ueSwgdGhpcy5wbGF0Zm9ybXNbaV0udywgdGhpcy5oKTtcclxuXHRcdFx0Ly8gdGhpcy5jdHguZmlsbCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpc0ZhbGxpbmcpIHRoaXMucGxheWVyLmlzSW5BaXIgPSB0cnVlO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgSHVkIGZyb20gJy4vaHVkJztcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuXHRwcml2YXRlIGN0eDogQ29udGV4dDtcclxuXHRwcml2YXRlIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHRwcml2YXRlIGh1ZDogSHVkO1xyXG5cdHByaXZhdGUgYXNwZWN0UmF0aW86IG51bWJlcjtcclxuXHRwdWJsaWMgeDogbnVtYmVyO1xyXG5cdHB1YmxpYyB5OiBudW1iZXI7XHJcblx0cHVibGljIHc6IG51bWJlcjtcclxuXHRwdWJsaWMgaDogbnVtYmVyO1xyXG5cdHB1YmxpYyBpc0luQWlyOiBib29sZWFuO1xyXG5cdHB1YmxpYyBtYXhKdW1wU3RhcnQ6IG51bWJlcjtcclxuXHRwdWJsaWMganVtcFZlbFN0YXJ0UmVzZXQ6IG51bWJlcjtcclxuXHRwdWJsaWMganVtcFZlbFN0YXJ0OiBudW1iZXI7XHJcblx0cHVibGljIHlWZWxvY2l0eTogbnVtYmVyO1xyXG5cdHB1YmxpYyB5QWNjOiBudW1iZXI7XHJcblx0cHJpdmF0ZSByb3RhdGlvbjogbnVtYmVyO1xyXG5cdHByaXZhdGUgcm90YXRpb25TcGVlZDogbnVtYmVyO1xyXG5cdHByaXZhdGUgaXNKdW1waW5nOiBib29sZWFuO1xyXG5cdHB1YmxpYyBsb2FkaW5nSnVtcDogYm9vbGVhbjtcclxuXHRwcml2YXRlIHdoZWVsUm90OiBudW1iZXI7XHJcblx0cHJpdmF0ZSByb3RDb29yZHNGb3JKdW1wOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XHJcblx0cHVibGljIHNwZWVkOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBpbWFnZVBhdGhzOiBzdHJpbmdbXTtcclxuXHRwcml2YXRlIGltYWdlczogYW55O1xyXG5cdHByaXZhdGUgaXNCZWluZ0RhbWFnZWQ6IGJvb2xlYW47XHJcblx0cHJpdmF0ZSBsYXN0T2JqZWN0SGl0OiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGN0eDogQ29udGV4dCwgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50LCBodWQ6IEh1ZCkge1xyXG5cdFx0dGhpcy5jdHggPSBjdHg7XHJcblx0XHR0aGlzLndvcmxkID0gd29ybGQ7XHJcblx0XHR0aGlzLmFzcGVjdFJhdGlvID0gMS4xO1xyXG5cdFx0dGhpcy54ID0gMTAwO1xyXG5cdFx0dGhpcy55ID0gMTAwO1xyXG5cdFx0dGhpcy53ID0gMTcwO1xyXG5cdFx0dGhpcy5oID0gdGhpcy53IC8gdGhpcy5hc3BlY3RSYXRpbztcclxuXHRcdHRoaXMuaXNJbkFpciA9IHRydWU7XHJcblx0XHR0aGlzLm1heEp1bXBTdGFydCA9IDIwO1xyXG5cdFx0dGhpcy5qdW1wVmVsU3RhcnRSZXNldCA9IDEwO1xyXG5cdFx0dGhpcy5qdW1wVmVsU3RhcnQgPSB0aGlzLmp1bXBWZWxTdGFydFJlc2V0O1xyXG5cdFx0dGhpcy55VmVsb2NpdHkgPSAwO1xyXG5cdFx0dGhpcy55QWNjID0gMC44O1xyXG5cdFx0dGhpcy5yb3RhdGlvbiA9IDA7XHJcblx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwO1xyXG5cdFx0dGhpcy5pc0p1bXBpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMubG9hZGluZ0p1bXAgPSBmYWxzZTtcclxuXHRcdHRoaXMud2hlZWxSb3QgPSAwO1xyXG5cdFx0dGhpcy5yb3RDb29yZHNGb3JKdW1wID0geyB4OiAwLCB5OiAwIH07XHJcblx0XHR0aGlzLnNwZWVkID0gMDtcclxuXHRcdHRoaXMuaHVkID0gaHVkO1xyXG5cdFx0dGhpcy5pbWFnZVBhdGhzID0gW1xyXG5cdFx0XHQnLi4vcHVibGljL2ZyYW1lLnBuZycsXHJcblx0XHRcdCcuLi9wdWJsaWMvZnJhbWVEYW1hZ2VkLnBuZycsXHJcblx0XHRcdCcuLi9wdWJsaWMvd2hlZWwucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy93aGVlbERhbWFnZWQucG5nJyxcclxuXHRcdF07XHJcblx0XHR0aGlzLmltYWdlcyA9IHt9O1xyXG5cdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5sYXN0T2JqZWN0SGl0ID0gJyc7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgc2V0VXAoKSB7XHJcblx0XHRjb25zdCBwcmVsb2FkSW1hZ2VzID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBwcm9taXNlcyA9IHRoaXMuaW1hZ2VQYXRocy5tYXAoKHBhdGg6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBuYW1lID0gcGF0aC5zcGxpdCgnLycpLnBvcCgpPy5zcGxpdCgnLicpWzBdO1xyXG5cdFx0XHRcdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHJcblx0XHRcdFx0XHRpbWFnZS5zcmMgPSBwYXRoO1xyXG5cdFx0XHRcdFx0aW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKFtuYW1lLCBpbWFnZV0pO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdGltYWdlLm9uZXJyb3IgPSAoKSA9PiByZWplY3QoYEltYWdlIGZhaWxlZCB0byBsb2FkOiAke3BhdGh9YCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBpbWdBcnJheXRlbXA6IGFueVtdID0gYXdhaXQgcHJlbG9hZEltYWdlcygpO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoaW1nQXJyYXl0ZW1wKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjaGFuZ2VUb0RhbWFnZWRJbWdzKG9iamVjdDogc3RyaW5nKSB7XHJcblx0XHRpZiAob2JqZWN0ID09PSB0aGlzLmxhc3RPYmplY3RIaXQpIHJldHVybjtcclxuXHRcdHRoaXMubGFzdE9iamVjdEhpdCA9IG9iamVjdDtcclxuXHRcdHRoaXMuaXNCZWluZ0RhbWFnZWQgPSB0cnVlO1xyXG5cdFx0Y29uc3QgZmxhc2hJbnRlcnZhbCA9IDUwO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmlzQmVpbmdEYW1hZ2VkID0gZmFsc2U7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuaXNCZWluZ0RhbWFnZWQgPSB0cnVlO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuaXNCZWluZ0RhbWFnZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmlzQmVpbmdEYW1hZ2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdH0sIGZsYXNoSW50ZXJ2YWwpO1xyXG5cdFx0XHRcdFx0fSwgZmxhc2hJbnRlcnZhbCk7XHJcblx0XHRcdFx0fSwgZmxhc2hJbnRlcnZhbCk7XHJcblx0XHRcdH0sIGZsYXNoSW50ZXJ2YWwpO1xyXG5cdFx0fSwgZmxhc2hJbnRlcnZhbCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbGFuZCh5OiBudW1iZXIpIHtcclxuXHRcdGlmICh0aGlzLnJvdGF0aW9uIDwgMCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5pc0luQWlyID0gZmFsc2U7XHJcblx0XHR0aGlzLmlzSnVtcGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5yb3RhdGlvblNwZWVkID0gMDtcclxuXHRcdHRoaXMucm90YXRpb24gPSAwO1xyXG5cdFx0dGhpcy55VmVsb2NpdHkgPSAwO1xyXG5cdFx0dGhpcy55ID0geSAtIHRoaXMuaDtcclxuXHRcdGlmICghdGhpcy5sb2FkaW5nSnVtcCkgdGhpcy5qdW1wVmVsU3RhcnQgPSB0aGlzLmp1bXBWZWxTdGFydFJlc2V0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGp1bXAoKSB7XHJcblx0XHR0aGlzLmxvYWRpbmdKdW1wID0gZmFsc2U7XHJcblx0XHRpZiAodGhpcy5pc0p1bXBpbmcgfHwgdGhpcy5pc0luQWlyIHx8IHRoaXMueVZlbG9jaXR5IDwgMCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5yb3RhdGlvblNwZWVkID0gdGhpcy5qdW1wVmVsU3RhcnQ7XHJcblx0XHR0aGlzLmlzSnVtcGluZyA9IHRydWU7XHJcblxyXG5cdFx0dGhpcy5pc0luQWlyID0gdHJ1ZTtcclxuXHRcdHRoaXMueVZlbG9jaXR5ID0gdGhpcy5qdW1wVmVsU3RhcnQ7XHJcblx0XHR0aGlzLmp1bXBWZWxTdGFydCA9IHRoaXMuanVtcFZlbFN0YXJ0UmVzZXQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvYWRKdW1wKCkge1xyXG5cdFx0aWYgKHRoaXMuanVtcFZlbFN0YXJ0IDwgdGhpcy5tYXhKdW1wU3RhcnQpIHtcclxuXHRcdFx0dGhpcy5qdW1wVmVsU3RhcnQgKz0gMC41O1xyXG5cdFx0XHR0aGlzLmh1ZC5kcmF3SnVtcENoYXJnZShcclxuXHRcdFx0XHQxIC0gKHRoaXMubWF4SnVtcFN0YXJ0IC0gdGhpcy5qdW1wVmVsU3RhcnQpIC8gKHRoaXMubWF4SnVtcFN0YXJ0IC0gdGhpcy5qdW1wVmVsU3RhcnRSZXNldCksXHJcblx0XHRcdFx0dGhpcy54LFxyXG5cdFx0XHRcdHRoaXMueVxyXG5cdFx0XHQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5odWQuZHJhd0p1bXBDaGFyZ2UoMSwgdGhpcy54LCB0aGlzLnkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3RnJhbWUoKSB7XHJcblx0XHQvLyBjb25zdCB5T2Zmc2V0ID0gNTtcclxuXHRcdHRoaXMuY3R4LnNhdmUoKTtcclxuXHRcdHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLnJvdENvb3Jkc0Zvckp1bXAueCwgdGhpcy5yb3RDb29yZHNGb3JKdW1wLnkpO1xyXG5cdFx0dGhpcy5jdHgucm90YXRlKCh0aGlzLnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODApO1xyXG5cdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHR0aGlzLmlzQmVpbmdEYW1hZ2VkID8gdGhpcy5pbWFnZXMuZnJhbWVEYW1hZ2VkIDogdGhpcy5pbWFnZXMuZnJhbWUsXHJcblx0XHRcdC10aGlzLmltYWdlcy53aGVlbC53aWR0aCAvIDIsXHJcblx0XHRcdC10aGlzLmggKyB0aGlzLmltYWdlcy53aGVlbC5oZWlnaHQgLyAyLFxyXG5cdFx0XHR0aGlzLncsXHJcblx0XHRcdHRoaXMuaFxyXG5cdFx0KTtcclxuXHRcdHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZHJhd1doZWVscygpIHtcclxuXHRcdGNvbnN0IHJvdE9mZnNldCA9IHRoaXMuaHVkLmxpdmVzID09PSAzID8gMCA6IHRoaXMuaHVkLmxpdmVzID09PSAyID8gMiA6IDQ7XHJcblx0XHR0aGlzLmN0eC5zYXZlKCk7XHJcblx0XHR0aGlzLmN0eC50cmFuc2xhdGUodGhpcy5yb3RDb29yZHNGb3JKdW1wLnggKyByb3RPZmZzZXQsIHRoaXMucm90Q29vcmRzRm9ySnVtcC55KTtcclxuXHRcdHRoaXMuY3R4LnJvdGF0ZSgodGhpcy5yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKTsgLy8gUm90YXRlIGZvciBqdW1wXHJcblx0XHR0aGlzLmN0eC5yb3RhdGUoKHRoaXMud2hlZWxSb3QgKiBNYXRoLlBJKSAvIDE4MCk7IC8vIFJvdGF0ZSBmb3Igd2hlZWwgc3BpblxyXG5cdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHR0aGlzLmlzQmVpbmdEYW1hZ2VkID8gdGhpcy5pbWFnZXMud2hlZWxEYW1hZ2VkIDogdGhpcy5pbWFnZXMud2hlZWwsXHJcblx0XHRcdC10aGlzLmltYWdlcy53aGVlbC53aWR0aCAvIDIgLSByb3RPZmZzZXQsXHJcblx0XHRcdC10aGlzLmltYWdlcy53aGVlbC5oZWlnaHQgLyAyLFxyXG5cdFx0XHR0aGlzLmltYWdlcy53aGVlbC53aWR0aCxcclxuXHRcdFx0dGhpcy5pbWFnZXMud2hlZWwuaGVpZ2h0XHJcblx0XHQpO1xyXG5cdFx0dGhpcy5jdHgucmVzdG9yZSgpO1xyXG5cclxuXHRcdHRoaXMuY3R4LnNhdmUoKTtcclxuXHRcdHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLnJvdENvb3Jkc0Zvckp1bXAueCwgdGhpcy5yb3RDb29yZHNGb3JKdW1wLnkgKyByb3RPZmZzZXQpO1xyXG5cdFx0dGhpcy5jdHgucm90YXRlKCh0aGlzLnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODApOyAvLyBSb3RhdGUgZm9yIGp1bXBcclxuXHRcdHRoaXMuY3R4LnRyYW5zbGF0ZSgtdGhpcy5yb3RDb29yZHNGb3JKdW1wLngsIC10aGlzLnJvdENvb3Jkc0Zvckp1bXAueSk7IC8vIE1vdmUgdG8gc3RhcnRcclxuXHRcdHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLnggKyB0aGlzLncgLSB0aGlzLmltYWdlcy53aGVlbC53aWR0aCAvIDIsIHRoaXMucm90Q29vcmRzRm9ySnVtcC55KTtcclxuXHRcdHRoaXMuY3R4LnJvdGF0ZSgodGhpcy53aGVlbFJvdCAqIE1hdGguUEkpIC8gMTgwKTsgLy8gUm90YXRlIGZvciB3aGVlbCBzcGluXHJcblx0XHR0aGlzLmN0eC50cmFuc2xhdGUoLSh0aGlzLnggKyB0aGlzLncgLSB0aGlzLmltYWdlcy53aGVlbC53aWR0aCAvIDIpLCAtdGhpcy5yb3RDb29yZHNGb3JKdW1wLnkpOyAvLyBNb3ZlIHRvIHN0YXJ0XHJcblx0XHR0aGlzLmN0eC50cmFuc2xhdGUodGhpcy5yb3RDb29yZHNGb3JKdW1wLngsIHRoaXMucm90Q29vcmRzRm9ySnVtcC55KTtcclxuXHJcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdHRoaXMuaXNCZWluZ0RhbWFnZWQgPyB0aGlzLmltYWdlcy53aGVlbERhbWFnZWQgOiB0aGlzLmltYWdlcy53aGVlbCxcclxuXHRcdFx0LSh0aGlzLnJvdENvb3Jkc0Zvckp1bXAueCAtIHRoaXMueCkgKyB0aGlzLncgLSB0aGlzLmltYWdlcy53aGVlbC53aWR0aCxcclxuXHRcdFx0LXRoaXMuaW1hZ2VzLndoZWVsLmhlaWdodCAvIDIgLSByb3RPZmZzZXQsXHJcblx0XHRcdHRoaXMuaW1hZ2VzLndoZWVsLndpZHRoLFxyXG5cdFx0XHR0aGlzLmltYWdlcy53aGVlbC5oZWlnaHRcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN0eC5yZXN0b3JlKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhdygpIHtcclxuXHRcdGlmICghdGhpcy5pbWFnZXM/LmZyYW1lKSByZXR1cm47XHJcblx0XHR0aGlzLndoZWVsUm90ICs9IHRoaXMuc3BlZWQ7XHJcblxyXG5cdFx0aWYgKHRoaXMubG9hZGluZ0p1bXApIHRoaXMubG9hZEp1bXAoKTtcclxuXHJcblx0XHR0aGlzLnkgLT0gdGhpcy55VmVsb2NpdHk7XHJcblx0XHRpZiAodGhpcy5pc0luQWlyKSB0aGlzLnlWZWxvY2l0eSAtPSB0aGlzLnlBY2M7XHJcblxyXG5cdFx0aWYgKHRoaXMuaXNKdW1waW5nKSB7XHJcblx0XHRcdHRoaXMucm90YXRpb24gLT0gdGhpcy5yb3RhdGlvblNwZWVkIC8gNDtcclxuXHRcdFx0dGhpcy5yb3RhdGlvblNwZWVkIC09IHRoaXMueUFjYyAqIDI7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5yb3RhdGlvbiA+PSA1KSB7XHJcblx0XHRcdFx0dGhpcy5yb3RhdGlvblNwZWVkID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMCwgMCwgMCwgMC41KSc7XHJcblx0XHQvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdC8vIHRoaXMuY3R4LnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMudywgdGhpcy5oKTtcclxuXHRcdC8vIHRoaXMuY3R4LmZpbGwoKTtcclxuXHJcblx0XHR0aGlzLnJvdENvb3Jkc0Zvckp1bXAgPSB7XHJcblx0XHRcdHg6IHRoaXMueCArIHRoaXMuaW1hZ2VzLndoZWVsLndpZHRoIC8gMixcclxuXHRcdFx0eTogdGhpcy55ICsgdGhpcy5oIC0gdGhpcy5pbWFnZXMud2hlZWwuaGVpZ2h0IC8gMixcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5kcmF3V2hlZWxzKCk7XHJcblx0XHR0aGlzLmRyYXdGcmFtZSgpO1xyXG5cdH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hYmlsaXRpZXMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY29sbGlzaW9ucy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9odWQudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGxhdGZvcm1zLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BsYXllci50c1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3R5cGVzLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9