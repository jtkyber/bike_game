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
        },
        {
            y: 700,
            len: 1000,
            gapToNext: 0,
        },
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
        {
            y: 650,
            len: 1000,
            gapToNext: 0,
            powerUps: [{ name: 'healthBoost', xPercAlongPlat: 0.1, distAbovePlat: 300 }],
        },
        {
            y: 625,
            len: 600,
            gapToNext: 0,
        },
    ],
    platformTexture: 'dirtPlat',
    platformH: null,
    backgroundImg: 'bgLevel1',
    bgImgYOffset: 0,
    maxPlatLen: 4000,
    speed: 14,
};
var levelTwo = {
    platforms: [
        {
            y: 600,
            len: 3000,
            gapToNext: 0,
        },
        {
            y: 600,
            len: 2000,
            gapToNext: 200,
        },
        { y: 700, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock1', xLocsOnPlatByPerc: [0.1] }] },
        { y: 600, len: 800, gapToNext: 0 },
        { y: 500, len: 2000, gapToNext: 0, obsticles: [{ name: 'rock2', xLocsOnPlatByPerc: [0.4] }] },
        { y: 700, len: 1200, gapToNext: 0 },
        { y: 450, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock3', xLocsOnPlatByPerc: [0.8] }] },
        { y: 650, len: 1000, gapToNext: 0 },
        { y: 625, len: 600, gapToNext: 0 },
        {
            y: 600,
            len: 800,
            gapToNext: 50,
            powerUps: [{ name: 'healthBoost', xPercAlongPlat: 0.2, distAbovePlat: 300 }],
        },
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
    speed: 16,
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
    function Abilities(ctx, world, hud, collisions, player) {
        this.ctx = ctx;
        this.world = world;
        this.hud = hud;
        this.collisions = collisions;
        this.player = player;
        this.imagePaths = ['../public/healthBoost.png'];
        this.images = {};
        this.collectedPowerUps = [];
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
    Abilities.prototype.activatePowerUp = function (powerUp) {
        switch (powerUp) {
            case 'healthBoost':
                this.hud.increaseHealth(20);
                break;
        }
    };
    Abilities.prototype.draw = function (powerUps, platYTop, platX, platLen, platIndex) {
        for (var i = 0; i < (powerUps === null || powerUps === void 0 ? void 0 : powerUps.length); i++) {
            var imgSrc = this.images[powerUps[i].name];
            if (!imgSrc)
                continue;
            var imgX = platX + platLen * powerUps[i].xPercAlongPlat;
            var imgY = platYTop - imgSrc.height + 10 - powerUps[i].distAbovePlat;
            var object = "".concat(powerUps[i].name, "_").concat(platIndex, "_").concat(powerUps[i].xPercAlongPlat);
            if (this.collectedPowerUps.includes(object)) {
                if (imgX + imgSrc.width < 0)
                    this.collectedPowerUps.shift();
                continue;
            }
            this.ctx.drawImage(imgSrc, imgX, imgY, imgSrc.width, imgSrc.height);
            var collidedWithPowerUp = this.collisions.powerUpCollision({
                x1: this.player.x,
                y1: this.player.y,
                x2: imgX,
                y2: imgY,
                w1: this.player.w,
                h1: this.player.h,
                w2: this.images[powerUps[i].name].width,
                h2: this.images[powerUps[i].name].height ||
                    this.world.height - (platYTop - this.images[powerUps[i].name].height + 10),
                margin: 0,
                object: object,
            });
            if (collidedWithPowerUp) {
                this.collectedPowerUps.push(object);
                this.activatePowerUp(powerUps[i].name);
            }
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
            if (this.player.yVelocity <= 0 && Math.abs(y2 - (y1 + h1)) < 16) {
                this.player.land(y2);
                return true;
            }
            else if (playerBelowPlatTop) {
                console.log('Platform Collision!');
                this.hud.health = 0;
                return true;
            }
        }
        if (this.player.y + this.player.h > this.world.height) {
            this.hud.health = 0;
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
            this.hud.reduceHealth(object, 30);
            this.player.changeToDamagedImgs(object);
        }
    };
    Collisions.prototype.powerUpCollision = function (_a) {
        var x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2, w1 = _a.w1, h1 = _a.h1, w2 = _a.w2, h2 = _a.h2, margin = _a.margin, object = _a.object;
        if (x1 + w1 >= x2 + margin && // Check player right collision
            x1 <= x2 + w2 && // Check player left collision
            y1 <= y2 + h2 && // Check player top collision
            y1 + h1 > y2 // Check player bottom collision
        ) {
            return true;
        }
        return false;
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
        this.health = 100;
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
        this.ctx.rect(x + xOffset - 1, y + yOffset - 1, w + 2, h + 2);
        this.ctx.stroke();
        this.ctx.fillRect(x + xOffset, y + yOffset + h, w, -h * percentCharged);
    };
    Hud.prototype.reduceHealth = function (object, amt) {
        if (this.lastObjectHit === object)
            return;
        if (this.health - amt <= 0)
            this.health = 0;
        else
            this.health -= amt;
        this.lastObjectHit = object;
    };
    Hud.prototype.increaseHealth = function (amt) {
        if (this.health + amt >= 100)
            this.health = 100;
        else
            this.health += amt;
    };
    Hud.prototype.drawHealth = function () {
        var sectionStartX = 30;
        var sectionStartY = 11;
        var sectionW = 160;
        var sectionH = 12;
        this.ctx.shadowOffsetX = 3;
        this.ctx.shadowOffsetY = 3;
        this.ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        this.ctx.shadowBlur = 4;
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
        this.ctx.beginPath();
        this.ctx.roundRect(sectionStartX - 1, sectionStartY - 1, sectionW + 2, sectionH + 2, 10);
        this.ctx.stroke();
        this.ctx.fillStyle =
            this.health >= 90
                ? 'rgba(0, 170, 0, 1)'
                : this.health >= 50 && this.health < 90
                    ? 'rgba(170, 170, 0, 1)'
                    : 'rgba(255, 0, 0, 1)';
        this.ctx.beginPath();
        this.ctx.roundRect(sectionStartX, sectionStartY, sectionW * (this.health / 100), sectionH, 10);
        this.ctx.fill();
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;
        this.ctx.shadowBlur = 0;
    };
    Hud.prototype.drawNextLevelText = function () {
        var w = 250;
        var h = 70;
        var yOffset = -200;
        this.ctx.fillStyle = "rgba(0, 0, 0, ".concat(this.levelTextOpacity >= 0.7 ? 0.7 : this.levelTextOpacity, ")");
        this.ctx.beginPath();
        this.ctx.roundRect(this.world.width / 2 - w / 2, this.world.height / 2 - h / 2 + yOffset, w, h, 10);
        this.ctx.fill();
        this.ctx.font = '40px Arial';
        this.ctx.fillStyle = "rgba(255, 255, 255, ".concat(this.levelTextOpacity, ")");
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText("Level ".concat(this.currentLevel + 1), this.world.width / 2, this.world.height / 2 + yOffset);
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
        this.drawHealth();
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
    prepGame();
    startBtn.style.display = 'block';
    startBtn.innerHTML = 'Play Again';
    levelsStarted = -1;
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
        if (hud.health === 0)
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
                abilities = new _abilities__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, world, hud, collisions, player);
                platforms = new _platforms__WEBPACK_IMPORTED_MODULE_4__["default"](ctx, world, player, hud, collisions, abilities, _public_gameObject__WEBPACK_IMPORTED_MODULE_0__["default"]);
                return [4 /*yield*/, platforms.setUp()];
            case 1:
                _a.sent();
                return [4 /*yield*/, player.setUp()];
            case 2:
                _a.sent();
                return [4 /*yield*/, abilities.setUp()];
            case 3:
                _a.sent();
                // startGame();
                startBtn.style.display = 'block';
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
        this.collisionMargin = 26;
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
                this.ctx.drawImage(this.images[level.platformTexture], 0, this.images[level.platformTexture].height, imgW, -2.5 *
                    this.images[level.platformTexture].height *
                    ((this.world.height - level.platforms[plat.index].y) / this.images[level.platformTexture].height), plat.x, level.platforms[plat.index].y, level.platforms[plat.index].len, this.world.height - level.platforms[plat.index].y);
                // this.ctx.strokeStyle = 'black';
                // this.ctx.rect(
                // 	plat.x,
                // 	level.platforms[plat.index].y,
                // 	level.platforms[plat.index].len,
                // 	this.world.height - level.platforms[plat.index].y
                // );
                // this.ctx.stroke();
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
        this.w = 150;
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
                        this.w = this.images.frame.width;
                        this.h = this.images.frame.height;
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
        var rotOffset = this.hud.health >= 90 ? 0 : this.hud.health < 90 && this.hud.health >= 50 ? 1 : 2;
        this.ctx.save();
        this.ctx.translate(this.rotCoordsForJump.x + rotOffset, this.rotCoordsForJump.y);
        this.ctx.rotate((this.rotation * Math.PI) / 180); // Rotate for jump
        this.ctx.rotate((this.wheelRot * Math.PI) / 180); // Rotate for wheel spin
        this.ctx.drawImage(this.isBeingDamaged ? this.images.wheelDamaged : this.images.wheel, -this.images.wheel.width / 2 - rotOffset, -this.images.wheel.height / 2, this.images.wheel.width - 0.5, this.images.wheel.height - 0.5);
        this.ctx.restore();
        this.ctx.save();
        this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y + rotOffset);
        this.ctx.rotate((this.rotation * Math.PI) / 180); // Rotate for jump
        this.ctx.translate(-this.rotCoordsForJump.x, -this.rotCoordsForJump.y); // Move to start
        this.ctx.translate(this.x + this.w - this.images.wheel.width / 2, this.rotCoordsForJump.y);
        this.ctx.rotate((this.wheelRot * Math.PI) / 180); // Rotate for wheel spin
        this.ctx.translate(-(this.x + this.w - this.images.wheel.width / 2), -this.rotCoordsForJump.y); // Move to start
        this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y);
        this.ctx.drawImage(this.isBeingDamaged ? this.images.wheelDamaged : this.images.wheel, -(this.rotCoordsForJump.x - this.x) + this.w - this.images.wheel.width, -this.images.wheel.height / 2 - rotOffset, this.images.wheel.width - 0.5, this.images.wheel.height - 0.5);
        this.ctx.restore();
    };
    Player.prototype.draw = function () {
        var _a;
        if (!((_a = this.images) === null || _a === void 0 ? void 0 : _a.frame))
            return;
        this.wheelRot += this.speed;
        // this.wheelRot += 10;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vcHVibGljL2dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL2FiaWxpdGllcy50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvY29sbGlzaW9ucy50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvaHVkLnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvcGxhdGZvcm1zLnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS8uL3NyYy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElHYW1lT2JqZWN0LCBJTGV2ZWwgfSBmcm9tICcuLi9zcmMvdHlwZXMnO1xyXG5cclxuY29uc3QgbGV2ZWxPbmU6IElMZXZlbCA9IHtcclxuXHRwbGF0Zm9ybXM6IFtcclxuXHRcdHtcclxuXHRcdFx0eTogNjAwLFxyXG5cdFx0XHRsZW46IDMwMDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMCxcclxuXHRcdFx0ZGVjb3I6IFt7IG5hbWU6ICdzdGFydFNpZ24nLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuNl0gfV0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR5OiA2MDAsXHJcblx0XHRcdGxlbjogMjAwMCxcclxuXHRcdFx0Z2FwVG9OZXh0OiAyMDAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR5OiA3MDAsXHJcblx0XHRcdGxlbjogMTAwMCxcclxuXHRcdFx0Z2FwVG9OZXh0OiAwLFxyXG5cdFx0fSxcclxuXHRcdHsgeTogNjAwLCBsZW46IDgwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDUwMCwgbGVuOiAyMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2syJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjRdIH1dIH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMjAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNDUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazMnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuOF0gfV0gfSxcclxuXHRcdHsgeTogNjUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA2MjUsIGxlbjogNjAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNjAwLCBsZW46IDgwMCwgZ2FwVG9OZXh0OiA1MCB9LFxyXG5cdFx0eyB5OiA1NTAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMycsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC4xXSB9XSB9LFxyXG5cdFx0eyB5OiA0MTAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAzMDAgfSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazEnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuNl0gfV0gfSxcclxuXHRcdHsgeTogNjAwLCBsZW46IDgwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMjAwLCBnYXBUb05leHQ6IDEwMCB9LFxyXG5cdFx0eyB5OiA0NTAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMScsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC44XSB9XSB9LFxyXG5cdFx0e1xyXG5cdFx0XHR5OiA2NTAsXHJcblx0XHRcdGxlbjogMTAwMCxcclxuXHRcdFx0Z2FwVG9OZXh0OiAwLFxyXG5cdFx0XHRwb3dlclVwczogW3sgbmFtZTogJ2hlYWx0aEJvb3N0JywgeFBlcmNBbG9uZ1BsYXQ6IDAuMSwgZGlzdEFib3ZlUGxhdDogMzAwIH1dLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0eTogNjI1LFxyXG5cdFx0XHRsZW46IDYwMCxcclxuXHRcdFx0Z2FwVG9OZXh0OiAwLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdHBsYXRmb3JtVGV4dHVyZTogJ2RpcnRQbGF0JyxcclxuXHRwbGF0Zm9ybUg6IG51bGwsXHJcblx0YmFja2dyb3VuZEltZzogJ2JnTGV2ZWwxJyxcclxuXHRiZ0ltZ1lPZmZzZXQ6IDAsXHJcblx0bWF4UGxhdExlbjogNDAwMCxcclxuXHRzcGVlZDogMTQsXHJcbn07XHJcblxyXG5jb25zdCBsZXZlbFR3bzogSUxldmVsID0ge1xyXG5cdHBsYXRmb3JtczogW1xyXG5cdFx0e1xyXG5cdFx0XHR5OiA2MDAsXHJcblx0XHRcdGxlbjogMzAwMCxcclxuXHRcdFx0Z2FwVG9OZXh0OiAwLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0eTogNjAwLFxyXG5cdFx0XHRsZW46IDIwMDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMjAwLFxyXG5cdFx0fSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazEnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuMV0gfV0gfSxcclxuXHRcdHsgeTogNjAwLCBsZW46IDgwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDUwMCwgbGVuOiAyMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2syJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjRdIH1dIH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMjAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNDUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazMnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuOF0gfV0gfSxcclxuXHRcdHsgeTogNjUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA2MjUsIGxlbjogNjAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHtcclxuXHRcdFx0eTogNjAwLFxyXG5cdFx0XHRsZW46IDgwMCxcclxuXHRcdFx0Z2FwVG9OZXh0OiA1MCxcclxuXHRcdFx0cG93ZXJVcHM6IFt7IG5hbWU6ICdoZWFsdGhCb29zdCcsIHhQZXJjQWxvbmdQbGF0OiAwLjIsIGRpc3RBYm92ZVBsYXQ6IDMwMCB9XSxcclxuXHRcdH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAyMDAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNTUwLCBsZW46IDcwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMycsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC4xXSB9XSB9LFxyXG5cdFx0eyB5OiA0MTAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAzMDAgfSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazEnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuNl0gfV0gfSxcclxuXHRcdHsgeTogNjAwLCBsZW46IDgwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDU1MCwgbGVuOiAxNTAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2szJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjRdIH1dIH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMjAwLCBnYXBUb05leHQ6IDEwMCB9LFxyXG5cdFx0eyB5OiA0NTAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMScsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC44XSB9XSB9LFxyXG5cdFx0eyB5OiA2NTAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDYyNSwgbGVuOiA2MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdF0sXHJcblx0cGxhdGZvcm1UZXh0dXJlOiAnd29vZFBsYXQnLFxyXG5cdHBsYXRmb3JtSDogMTYsXHJcblx0YmFja2dyb3VuZEltZzogJ2JnTGV2ZWwyJyxcclxuXHRiZ0ltZ1lPZmZzZXQ6IDYwMCxcclxuXHRtYXhQbGF0TGVuOiA0MDAwLFxyXG5cdHNwZWVkOiAxNixcclxufTtcclxuXHJcbmNvbnN0IGdhbWVPYmplY3Q6IElHYW1lT2JqZWN0ID0ge1xyXG5cdGxldmVsczogW2xldmVsT25lLCBsZXZlbFR3b10sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lT2JqZWN0O1xyXG4iLCJpbXBvcnQgQ29sbGlzaW9ucyBmcm9tICcuL2NvbGxpc2lvbnMnO1xyXG5pbXBvcnQgSHVkIGZyb20gJy4vaHVkJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IENvbnRleHQsIElQb3dlclVwIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYmlsaXRpZXMge1xyXG5cdGN0eDogQ29udGV4dDtcclxuXHR3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblx0aHVkOiBIdWQ7XHJcblx0Y29sbGlzaW9uczogQ29sbGlzaW9ucztcclxuXHRwbGF5ZXI6IFBsYXllcjtcclxuXHRpbWFnZVBhdGhzOiBzdHJpbmdbXTtcclxuXHRpbWFnZXM6IGFueTtcclxuXHRjb2xsZWN0ZWRQb3dlclVwczogc3RyaW5nW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGN0eDogQ29udGV4dCwgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50LCBodWQ6IEh1ZCwgY29sbGlzaW9uczogQ29sbGlzaW9ucywgcGxheWVyOiBQbGF5ZXIpIHtcclxuXHRcdHRoaXMuY3R4ID0gY3R4O1xyXG5cdFx0dGhpcy53b3JsZCA9IHdvcmxkO1xyXG5cdFx0dGhpcy5odWQgPSBodWQ7XHJcblx0XHR0aGlzLmNvbGxpc2lvbnMgPSBjb2xsaXNpb25zO1xyXG5cdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblx0XHR0aGlzLmltYWdlUGF0aHMgPSBbJy4uL3B1YmxpYy9oZWFsdGhCb29zdC5wbmcnXTtcclxuXHRcdHRoaXMuaW1hZ2VzID0ge307XHJcblx0XHR0aGlzLmNvbGxlY3RlZFBvd2VyVXBzID0gW107XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgc2V0VXAoKSB7XHJcblx0XHRjb25zdCBwcmVsb2FkSW1hZ2VzID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBwcm9taXNlcyA9IHRoaXMuaW1hZ2VQYXRocy5tYXAoKHBhdGg6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBuYW1lID0gcGF0aC5zcGxpdCgnLycpLnBvcCgpPy5zcGxpdCgnLicpWzBdO1xyXG5cdFx0XHRcdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHJcblx0XHRcdFx0XHRpbWFnZS5zcmMgPSBwYXRoO1xyXG5cdFx0XHRcdFx0aW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKFtuYW1lLCBpbWFnZV0pO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdGltYWdlLm9uZXJyb3IgPSAoKSA9PiByZWplY3QoYEltYWdlIGZhaWxlZCB0byBsb2FkOiAke3BhdGh9YCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBpbWdBcnJheXRlbXA6IGFueVtdID0gYXdhaXQgcHJlbG9hZEltYWdlcygpO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoaW1nQXJyYXl0ZW1wKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYWN0aXZhdGVQb3dlclVwKHBvd2VyVXA6IHN0cmluZykge1xyXG5cdFx0c3dpdGNoIChwb3dlclVwKSB7XHJcblx0XHRcdGNhc2UgJ2hlYWx0aEJvb3N0JzpcclxuXHRcdFx0XHR0aGlzLmh1ZC5pbmNyZWFzZUhlYWx0aCgyMCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhdyhwb3dlclVwczogSVBvd2VyVXBbXSwgcGxhdFlUb3A6IG51bWJlciwgcGxhdFg6IG51bWJlciwgcGxhdExlbjogbnVtYmVyLCBwbGF0SW5kZXg6IG51bWJlcikge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb3dlclVwcz8ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgaW1nU3JjOiBIVE1MSW1hZ2VFbGVtZW50ID0gdGhpcy5pbWFnZXNbcG93ZXJVcHNbaV0ubmFtZV07XHJcblxyXG5cdFx0XHRpZiAoIWltZ1NyYykgY29udGludWU7XHJcblxyXG5cdFx0XHRjb25zdCBpbWdYID0gcGxhdFggKyBwbGF0TGVuICogcG93ZXJVcHNbaV0ueFBlcmNBbG9uZ1BsYXQ7XHJcblx0XHRcdGNvbnN0IGltZ1kgPSBwbGF0WVRvcCAtIGltZ1NyYy5oZWlnaHQgKyAxMCAtIHBvd2VyVXBzW2ldLmRpc3RBYm92ZVBsYXQ7XHJcblx0XHRcdGNvbnN0IG9iamVjdCA9IGAke3Bvd2VyVXBzW2ldLm5hbWV9XyR7cGxhdEluZGV4fV8ke3Bvd2VyVXBzW2ldLnhQZXJjQWxvbmdQbGF0fWA7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5jb2xsZWN0ZWRQb3dlclVwcy5pbmNsdWRlcyhvYmplY3QpKSB7XHJcblx0XHRcdFx0aWYgKGltZ1ggKyBpbWdTcmMud2lkdGggPCAwKSB0aGlzLmNvbGxlY3RlZFBvd2VyVXBzLnNoaWZ0KCk7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuY3R4LmRyYXdJbWFnZShpbWdTcmMsIGltZ1gsIGltZ1ksIGltZ1NyYy53aWR0aCwgaW1nU3JjLmhlaWdodCk7XHJcblxyXG5cdFx0XHRjb25zdCBjb2xsaWRlZFdpdGhQb3dlclVwID0gdGhpcy5jb2xsaXNpb25zLnBvd2VyVXBDb2xsaXNpb24oe1xyXG5cdFx0XHRcdHgxOiB0aGlzLnBsYXllci54LFxyXG5cdFx0XHRcdHkxOiB0aGlzLnBsYXllci55LFxyXG5cdFx0XHRcdHgyOiBpbWdYLFxyXG5cdFx0XHRcdHkyOiBpbWdZLFxyXG5cdFx0XHRcdHcxOiB0aGlzLnBsYXllci53LFxyXG5cdFx0XHRcdGgxOiB0aGlzLnBsYXllci5oLFxyXG5cdFx0XHRcdHcyOiB0aGlzLmltYWdlc1twb3dlclVwc1tpXS5uYW1lXS53aWR0aCxcclxuXHRcdFx0XHRoMjpcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2VzW3Bvd2VyVXBzW2ldLm5hbWVdLmhlaWdodCB8fFxyXG5cdFx0XHRcdFx0dGhpcy53b3JsZC5oZWlnaHQgLSAocGxhdFlUb3AgLSB0aGlzLmltYWdlc1twb3dlclVwc1tpXS5uYW1lXS5oZWlnaHQgKyAxMCksXHJcblx0XHRcdFx0bWFyZ2luOiAwLFxyXG5cdFx0XHRcdG9iamVjdDogb2JqZWN0LFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChjb2xsaWRlZFdpdGhQb3dlclVwKSB7XHJcblx0XHRcdFx0dGhpcy5jb2xsZWN0ZWRQb3dlclVwcy5wdXNoKG9iamVjdCk7XHJcblx0XHRcdFx0dGhpcy5hY3RpdmF0ZVBvd2VyVXAocG93ZXJVcHNbaV0ubmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IEh1ZCBmcm9tICcuL2h1ZCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBDb250ZXh0LCBJQ29sbGlzaW9uQXJncyB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlzaW9ucyB7XHJcblx0cHJpdmF0ZSBjdHg6IENvbnRleHQ7XHJcblx0cHJpdmF0ZSB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblx0cHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcclxuXHRwcml2YXRlIGh1ZDogSHVkO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjdHg6IENvbnRleHQsIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudCwgcGxheWVyOiBQbGF5ZXIsIGh1ZDogSHVkKSB7XHJcblx0XHR0aGlzLmN0eCA9IGN0eDtcclxuXHRcdHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cdFx0dGhpcy5odWQgPSBodWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hlY2tGb3JQbGF0Q29sbGlzaW9uKHsgeDEsIHkxLCB4MiwgeTIsIHcxLCBoMSwgdzIsIGgyLCBtYXJnaW4sIG9iamVjdCB9OiBJQ29sbGlzaW9uQXJncyk6IGJvb2xlYW4ge1xyXG5cdFx0Y29uc3QgcGxheWVyUmlnaHRPZlBsYXRMZWZ0ID0geDEgKyB3MSA+PSB4MiArIG1hcmdpbjsgLy8gUGxheWVyIHJpZ2h0IHNpZGUgdG8gcmlnaHQgb2YgcGxhdCBsZWZ0XHJcblx0XHRjb25zdCBwbGF5ZXJMZWZ0T2ZQbGF0UmlnaHQgPSB4MSA8PSB4MiArIHcyOyAvLyBQbGF5ZXIgbGVmdCBzaWRlIHRvIGxlZnQgb2YgcGxhdCByaWdodFxyXG5cdFx0Y29uc3QgcGxheWVyQWJvdmVQbGF0Qm90ID0geTEgPD0geTIgKyBoMjsgLy9QbGF5ZXIgdG9wIGFib3ZlIHBsYXQgYm90dG9tXHJcblx0XHRjb25zdCBwbGF5ZXJCZWxvd1BsYXRUb3AgPSB5MSArIHRoaXMucGxheWVyLmggPiB5MiArICh0aGlzLnBsYXllci5pc0luQWlyID8gbWFyZ2luIDogMCk7IC8vIFBsYXllciBib3R0b20gYWJvdmUgcGxhdCB0b3BcclxuXHJcblx0XHRpZiAocGxheWVyUmlnaHRPZlBsYXRMZWZ0ICYmIHBsYXllckxlZnRPZlBsYXRSaWdodCAmJiBwbGF5ZXJBYm92ZVBsYXRCb3QpIHtcclxuXHRcdFx0Ly8gTGFuZCBpZiBuZWdhdGl2ZSB2ZWxvY2l0eSBhbmQgd2l0aGluIDIwcHggb2YgcGxhdGZvcm1cclxuXHRcdFx0aWYgKHRoaXMucGxheWVyLnlWZWxvY2l0eSA8PSAwICYmIE1hdGguYWJzKHkyIC0gKHkxICsgaDEpKSA8IDE2KSB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIubGFuZCh5Mik7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAocGxheWVyQmVsb3dQbGF0VG9wKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ1BsYXRmb3JtIENvbGxpc2lvbiEnKTtcclxuXHRcdFx0XHR0aGlzLmh1ZC5oZWFsdGggPSAwO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5wbGF5ZXIueSArIHRoaXMucGxheWVyLmggPiB0aGlzLndvcmxkLmhlaWdodCkge1xyXG5cdFx0XHR0aGlzLmh1ZC5oZWFsdGggPSAwO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnT3V0IE9mIEJvdW5kcyBDb2xsaXNpb24hJyk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoZWNrRm9yQ29sbGlzaW9uKHsgeDEsIHkxLCB4MiwgeTIsIHcxLCBoMSwgdzIsIGgyLCBtYXJnaW4sIG9iamVjdCB9OiBJQ29sbGlzaW9uQXJncykge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHR4MSArIHcxID49IHgyICsgbWFyZ2luICYmIC8vIENoZWNrIHBsYXllciByaWdodCBjb2xsaXNpb25cclxuXHRcdFx0eDEgPD0geDIgKyB3MiAmJiAvLyBDaGVjayBwbGF5ZXIgbGVmdCBjb2xsaXNpb25cclxuXHRcdFx0eTEgPD0geTIgKyBoMiAmJiAvLyBDaGVjayBwbGF5ZXIgdG9wIGNvbGxpc2lvblxyXG5cdFx0XHR5MSArIGgxID4geTIgLy8gQ2hlY2sgcGxheWVyIGJvdHRvbSBjb2xsaXNpb25cclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLmh1ZC5yZWR1Y2VIZWFsdGgob2JqZWN0LCAzMCk7XHJcblx0XHRcdHRoaXMucGxheWVyLmNoYW5nZVRvRGFtYWdlZEltZ3Mob2JqZWN0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwb3dlclVwQ29sbGlzaW9uKHsgeDEsIHkxLCB4MiwgeTIsIHcxLCBoMSwgdzIsIGgyLCBtYXJnaW4sIG9iamVjdCB9OiBJQ29sbGlzaW9uQXJncyk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHR4MSArIHcxID49IHgyICsgbWFyZ2luICYmIC8vIENoZWNrIHBsYXllciByaWdodCBjb2xsaXNpb25cclxuXHRcdFx0eDEgPD0geDIgKyB3MiAmJiAvLyBDaGVjayBwbGF5ZXIgbGVmdCBjb2xsaXNpb25cclxuXHRcdFx0eTEgPD0geTIgKyBoMiAmJiAvLyBDaGVjayBwbGF5ZXIgdG9wIGNvbGxpc2lvblxyXG5cdFx0XHR5MSArIGgxID4geTIgLy8gQ2hlY2sgcGxheWVyIGJvdHRvbSBjb2xsaXNpb25cclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHRocm90dGxlIGZyb20gJy4uL3V0aWxzL3Rocm90dGxlJztcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHVkIHtcclxuXHRwcml2YXRlIGN0eDogQ29udGV4dDtcclxuXHRwcml2YXRlIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHRwdWJsaWMgaGVhbHRoOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBsYXN0T2JqZWN0SGl0OiBhbnk7XHJcblx0cHVibGljIGRyYXdpbmdMZXZlbFRleHQ6IGJvb2xlYW47XHJcblx0cHJpdmF0ZSBsZXZlbFRleHRPcGFjaXR5OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBsZXZlbFRleHRPcGFjaXR5SW5jOiBudW1iZXI7XHJcblx0cHVibGljIGN1cnJlbnRMZXZlbDogbnVtYmVyO1xyXG5cdHB1YmxpYyBmcHM6IG51bWJlcjtcclxuXHRwdWJsaWMgZnBzRW5hYmxlZDogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuXHRcdHRoaXMuY3R4ID0gY3R4O1xyXG5cdFx0dGhpcy53b3JsZCA9IHdvcmxkO1xyXG5cdFx0dGhpcy5oZWFsdGggPSAxMDA7XHJcblx0XHR0aGlzLmxhc3RPYmplY3RIaXQgPSAnJztcclxuXHRcdHRoaXMuZHJhd2luZ0xldmVsVGV4dCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5sZXZlbFRleHRPcGFjaXR5ID0gMDtcclxuXHRcdHRoaXMubGV2ZWxUZXh0T3BhY2l0eUluYyA9IDAuMDI7XHJcblx0XHR0aGlzLmN1cnJlbnRMZXZlbCA9IDA7XHJcblx0XHR0aGlzLmZwcyA9IDA7XHJcblx0XHR0aGlzLmZwc0VuYWJsZWQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3RnBzKCkge1xyXG5cdFx0aWYgKCF0aGlzLmZwc0VuYWJsZWQpIHJldHVybjtcclxuXHJcblx0XHR0aGlzLmN0eC5mb250ID0gJzIwcHggQXJpYWwnO1xyXG5cdFx0dGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMjU1LCAwLCAxKSc7XHJcblx0XHR0aGlzLmN0eC50ZXh0QWxpZ24gPSAncmlnaHQnO1xyXG5cdFx0dGhpcy5jdHguZmlsbFRleHQoYCR7dGhpcy5mcHN9IEZQU2AsIHRoaXMud29ybGQud2lkdGggLSAyMCwgMzApO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGRyYXdKdW1wQ2hhcmdlKHBlcmNlbnRDaGFyZ2VkOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcblx0XHRjb25zdCB3ID0gODtcclxuXHRcdGNvbnN0IGggPSA2MDtcclxuXHRcdGNvbnN0IHhPZmZzZXQgPSAwO1xyXG5cdFx0Y29uc3QgeU9mZnNldCA9IC0yMDtcclxuXHRcdHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYigwLCAwLCAwKSc7XHJcblx0XHR0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiKDcsIDE5MSwgNCknO1xyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHR0aGlzLmN0eC5yZWN0KHggKyB4T2Zmc2V0IC0gMSwgeSArIHlPZmZzZXQgLSAxLCB3ICsgMiwgaCArIDIpO1xyXG5cdFx0dGhpcy5jdHguc3Ryb2tlKCk7XHJcblx0XHR0aGlzLmN0eC5maWxsUmVjdCh4ICsgeE9mZnNldCwgeSArIHlPZmZzZXQgKyBoLCB3LCAtaCAqIHBlcmNlbnRDaGFyZ2VkKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZWR1Y2VIZWFsdGgob2JqZWN0OiBzdHJpbmcsIGFtdDogbnVtYmVyKSB7XHJcblx0XHRpZiAodGhpcy5sYXN0T2JqZWN0SGl0ID09PSBvYmplY3QpIHJldHVybjtcclxuXHRcdGlmICh0aGlzLmhlYWx0aCAtIGFtdCA8PSAwKSB0aGlzLmhlYWx0aCA9IDA7XHJcblx0XHRlbHNlIHRoaXMuaGVhbHRoIC09IGFtdDtcclxuXHJcblx0XHR0aGlzLmxhc3RPYmplY3RIaXQgPSBvYmplY3Q7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaW5jcmVhc2VIZWFsdGgoYW10OiBudW1iZXIpIHtcclxuXHRcdGlmICh0aGlzLmhlYWx0aCArIGFtdCA+PSAxMDApIHRoaXMuaGVhbHRoID0gMTAwO1xyXG5cdFx0ZWxzZSB0aGlzLmhlYWx0aCArPSBhbXQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdIZWFsdGgoKSB7XHJcblx0XHRjb25zdCBzZWN0aW9uU3RhcnRYID0gMzA7XHJcblx0XHRjb25zdCBzZWN0aW9uU3RhcnRZID0gMTE7XHJcblx0XHRjb25zdCBzZWN0aW9uVyA9IDE2MDtcclxuXHRcdGNvbnN0IHNlY3Rpb25IID0gMTI7XHJcblxyXG5cdFx0dGhpcy5jdHguc2hhZG93T2Zmc2V0WCA9IDM7XHJcblx0XHR0aGlzLmN0eC5zaGFkb3dPZmZzZXRZID0gMztcclxuXHRcdHRoaXMuY3R4LnNoYWRvd0NvbG9yID0gJ3JnYmEoMCwgMCwgMCwgMC41KSc7XHJcblx0XHR0aGlzLmN0eC5zaGFkb3dCbHVyID0gNDtcclxuXHJcblx0XHR0aGlzLmN0eC5saW5lV2lkdGggPSAyO1xyXG5cdFx0dGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAxKSc7XHJcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdHRoaXMuY3R4LnJvdW5kUmVjdChzZWN0aW9uU3RhcnRYIC0gMSwgc2VjdGlvblN0YXJ0WSAtIDEsIHNlY3Rpb25XICsgMiwgc2VjdGlvbkggKyAyLCAxMCk7XHJcblx0XHR0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcblx0XHR0aGlzLmN0eC5maWxsU3R5bGUgPVxyXG5cdFx0XHR0aGlzLmhlYWx0aCA+PSA5MFxyXG5cdFx0XHRcdD8gJ3JnYmEoMCwgMTcwLCAwLCAxKSdcclxuXHRcdFx0XHQ6IHRoaXMuaGVhbHRoID49IDUwICYmIHRoaXMuaGVhbHRoIDwgOTBcclxuXHRcdFx0XHQ/ICdyZ2JhKDE3MCwgMTcwLCAwLCAxKSdcclxuXHRcdFx0XHQ6ICdyZ2JhKDI1NSwgMCwgMCwgMSknO1xyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHR0aGlzLmN0eC5yb3VuZFJlY3Qoc2VjdGlvblN0YXJ0WCwgc2VjdGlvblN0YXJ0WSwgc2VjdGlvblcgKiAodGhpcy5oZWFsdGggLyAxMDApLCBzZWN0aW9uSCwgMTApO1xyXG5cdFx0dGhpcy5jdHguZmlsbCgpO1xyXG5cclxuXHRcdHRoaXMuY3R4LnNoYWRvd09mZnNldFggPSAwO1xyXG5cdFx0dGhpcy5jdHguc2hhZG93T2Zmc2V0WSA9IDA7XHJcblx0XHR0aGlzLmN0eC5zaGFkb3dCbHVyID0gMDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZHJhd05leHRMZXZlbFRleHQoKSB7XHJcblx0XHRjb25zdCB3ID0gMjUwO1xyXG5cdFx0Y29uc3QgaCA9IDcwO1xyXG5cdFx0Y29uc3QgeU9mZnNldCA9IC0yMDA7XHJcblxyXG5cdFx0dGhpcy5jdHguZmlsbFN0eWxlID0gYHJnYmEoMCwgMCwgMCwgJHt0aGlzLmxldmVsVGV4dE9wYWNpdHkgPj0gMC43ID8gMC43IDogdGhpcy5sZXZlbFRleHRPcGFjaXR5fSlgO1xyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHR0aGlzLmN0eC5yb3VuZFJlY3QodGhpcy53b3JsZC53aWR0aCAvIDIgLSB3IC8gMiwgdGhpcy53b3JsZC5oZWlnaHQgLyAyIC0gaCAvIDIgKyB5T2Zmc2V0LCB3LCBoLCAxMCk7XHJcblx0XHR0aGlzLmN0eC5maWxsKCk7XHJcblxyXG5cdFx0dGhpcy5jdHguZm9udCA9ICc0MHB4IEFyaWFsJztcclxuXHRcdHRoaXMuY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDI1NSwgMjU1LCAyNTUsICR7dGhpcy5sZXZlbFRleHRPcGFjaXR5fSlgO1xyXG5cdFx0dGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcblx0XHR0aGlzLmN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcclxuXHRcdHRoaXMuY3R4LmZpbGxUZXh0KFxyXG5cdFx0XHRgTGV2ZWwgJHt0aGlzLmN1cnJlbnRMZXZlbCArIDF9YCxcclxuXHRcdFx0dGhpcy53b3JsZC53aWR0aCAvIDIsXHJcblx0XHRcdHRoaXMud29ybGQuaGVpZ2h0IC8gMiArIHlPZmZzZXRcclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5sZXZlbFRleHRPcGFjaXR5ICs9IHRoaXMubGV2ZWxUZXh0T3BhY2l0eUluYztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBiZWdpbkxldmVsVGV4dEFuaW1hdGlvbigpIHtcclxuXHRcdHRoaXMuZHJhd2luZ0xldmVsVGV4dCA9IHRydWU7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5sZXZlbFRleHRPcGFjaXR5SW5jICo9IC0xO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmRyYXdpbmdMZXZlbFRleHQgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmxldmVsVGV4dE9wYWNpdHlJbmMgKj0gLTE7XHJcblx0XHRcdH0sIDE1MDApO1xyXG5cdFx0fSwgMTUwMCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhdygpIHtcclxuXHRcdHRoaXMuZHJhd0hlYWx0aCgpO1xyXG5cdFx0dGhpcy5kcmF3RnBzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuZHJhd2luZ0xldmVsVGV4dCkgdGhpcy5kcmF3TmV4dExldmVsVGV4dCgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgZ2FtZU9iamVjdCBmcm9tICcuLi9wdWJsaWMvZ2FtZU9iamVjdCc7XHJcbmltcG9ydCBBYmlsaXRpZXMgZnJvbSAnLi9hYmlsaXRpZXMnO1xyXG5pbXBvcnQgQ29sbGlzaW9ucyBmcm9tICcuL2NvbGxpc2lvbnMnO1xyXG5pbXBvcnQgSHVkIGZyb20gJy4vaHVkJztcclxuaW1wb3J0IFBsYXRmb3JtcyBmcm9tICcuL3BsYXRmb3Jtcyc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5cclxuY29uc3Qgd29ybGQgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmxkJyk7XHJcbmNvbnN0IGN0eCA9IDxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ+d29ybGQuZ2V0Q29udGV4dCgnMmQnLCB7IGFscGhhOiBmYWxzZSB9KTtcclxuXHJcbmNvbnN0IHN0YXJ0QnRuID0gPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydEJ0bicpO1xyXG5cclxuLy8gRm9yIGdhbWUgbG9vcFxyXG5sZXQgcmVxdWVzdElkOiBudW1iZXIgfCBudWxsLCBub3c6IG51bWJlciwgdGhlbjogbnVtYmVyLCBlbGFwc2VkOiBudW1iZXIsIGZwc0ludGVydmFsOiBudW1iZXI7XHJcblxyXG5sZXQgZnJhbWVSYXRlID0gNjA7XHJcbmxldCBmcmFtZXMgPSAwO1xyXG5sZXQgcGF1c2VkID0gZmFsc2U7XHJcbmxldCBsZXZlbHNTdGFydGVkID0gLTE7XHJcblxyXG4vLyBDbGFzc2VzXHJcbmxldCBwbGF0Zm9ybXM6IFBsYXRmb3JtcywgcGxheWVyOiBQbGF5ZXIsIGh1ZDogSHVkLCBjb2xsaXNpb25zOiBDb2xsaXNpb25zLCBhYmlsaXRpZXM6IEFiaWxpdGllcztcclxuXHJcbmNvbnN0IGVuZEdhbWUgPSAoKSA9PiB7XHJcblx0aWYgKHJlcXVlc3RJZCkgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElkKTtcclxuXHRyZXF1ZXN0SWQgPSBudWxsO1xyXG5cdHByZXBHYW1lKCk7XHJcblx0c3RhcnRCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0c3RhcnRCdG4uaW5uZXJIVE1MID0gJ1BsYXkgQWdhaW4nO1xyXG5cdGxldmVsc1N0YXJ0ZWQgPSAtMTtcclxufTtcclxuXHJcbmNvbnN0IGdhbWVMb29wID0gKCkgPT4ge1xyXG5cdHJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcblxyXG5cdGZwc0ludGVydmFsID0gMTAwMCAvIGZyYW1lUmF0ZTtcclxuXHRub3cgPSBEYXRlLm5vdygpO1xyXG5cdGVsYXBzZWQgPSBub3cgLSAodGhlbiB8fCAwKTtcclxuXHJcblx0aWYgKGVsYXBzZWQgPiBmcHNJbnRlcnZhbCkge1xyXG5cdFx0aWYgKGZyYW1lcyA9PT0gMClcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0aHVkLmZwcyA9IGZyYW1lcztcclxuXHRcdFx0XHRmcmFtZXMgPSAwO1xyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHRcdGZyYW1lcyArPSAxO1xyXG5cdFx0dGhlbiA9IG5vdyAtIChlbGFwc2VkICUgZnBzSW50ZXJ2YWwpO1xyXG5cclxuXHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgd29ybGQud2lkdGgsIHdvcmxkLmhlaWdodCk7XHJcblx0XHRpZiAoIXBhdXNlZCkge1xyXG5cdFx0XHRwbGF0Zm9ybXMubW92ZSgpO1xyXG5cdFx0XHRwbGF5ZXIuc3BlZWQgPSBnYW1lT2JqZWN0LmxldmVsc1twbGF0Zm9ybXMuY3VycmVudExldmVsXS5zcGVlZDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHBsYXllci5zcGVlZCA9IDA7XHJcblx0XHR9XHJcblx0XHRwbGF0Zm9ybXMuZHJhdygpO1xyXG5cdFx0cGxheWVyLmRyYXcoKTtcclxuXHRcdGh1ZC5kcmF3KCk7XHJcblxyXG5cdFx0Ly8gaWYgKHBsYXRmb3Jtcy5wbGF0c1Zpc2libGU/LlswXT8uaW5kZXggPT09IDAgJiYgcGxhdGZvcm1zLmN1cnJlbnRMZXZlbCA+IGxldmVsc1N0YXJ0ZWQpIHtcclxuXHRcdC8vIFx0bGV2ZWxzU3RhcnRlZCA9IHBsYXRmb3Jtcy5jdXJyZW50TGV2ZWw7XHJcblx0XHQvLyB9XHJcblxyXG5cdFx0aWYgKGh1ZC5oZWFsdGggPT09IDApIGVuZEdhbWUoKTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XHJcblx0Z2FtZUxvb3AoKTtcclxufTtcclxuXHJcbmNvbnN0IHByZXBHYW1lID0gYXN5bmMgKCkgPT4ge1xyXG5cdE9iamVjdC5mcmVlemUoZ2FtZU9iamVjdCk7XHJcblxyXG5cdGh1ZCA9IG5ldyBIdWQoY3R4LCB3b3JsZCk7XHJcblx0cGxheWVyID0gbmV3IFBsYXllcihjdHgsIHdvcmxkLCBodWQpO1xyXG5cdGNvbGxpc2lvbnMgPSBuZXcgQ29sbGlzaW9ucyhjdHgsIHdvcmxkLCBwbGF5ZXIsIGh1ZCk7XHJcblx0YWJpbGl0aWVzID0gbmV3IEFiaWxpdGllcyhjdHgsIHdvcmxkLCBodWQsIGNvbGxpc2lvbnMsIHBsYXllcik7XHJcblx0cGxhdGZvcm1zID0gbmV3IFBsYXRmb3JtcyhjdHgsIHdvcmxkLCBwbGF5ZXIsIGh1ZCwgY29sbGlzaW9ucywgYWJpbGl0aWVzLCBnYW1lT2JqZWN0KTtcclxuXHJcblx0YXdhaXQgcGxhdGZvcm1zLnNldFVwKCk7XHJcblx0YXdhaXQgcGxheWVyLnNldFVwKCk7XHJcblx0YXdhaXQgYWJpbGl0aWVzLnNldFVwKCk7XHJcblxyXG5cdC8vIHN0YXJ0R2FtZSgpO1xyXG5cdHN0YXJ0QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59O1xyXG5cclxucHJlcEdhbWUoKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcclxuXHRzd2l0Y2ggKGUuY29kZSkge1xyXG5cdFx0Y2FzZSAnU3BhY2UnOlxyXG5cdFx0XHRpZiAocmVxdWVzdElkKSB7XHJcblx0XHRcdFx0aWYgKHBhdXNlZCkge1xyXG5cdFx0XHRcdFx0cGF1c2VkID0gZmFsc2U7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICghcGxheWVyLmxvYWRpbmdKdW1wKSBwbGF5ZXIubG9hZGluZ0p1bXAgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcclxuXHRzd2l0Y2ggKGUuY29kZSkge1xyXG5cdFx0Y2FzZSAnRXNjYXBlJzpcclxuXHRcdFx0aWYgKHBhdXNlZCkge1xyXG5cdFx0XHRcdHBhdXNlZCA9IGZhbHNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHBhdXNlZCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdGNhc2UgJ1NwYWNlJzpcclxuXHRcdFx0cGxheWVyLmp1bXAoKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59KTtcclxuXHJcbnN0YXJ0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcblx0c3RhcnRHYW1lKCk7XHJcblx0c3RhcnRCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufTtcclxuIiwiaW1wb3J0IEFiaWxpdGllcyBmcm9tICcuL2FiaWxpdGllcyc7XHJcbmltcG9ydCBDb2xsaXNpb25zIGZyb20gJy4vY29sbGlzaW9ucyc7XHJcbmltcG9ydCBIdWQgZnJvbSAnLi9odWQnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgQ29udGV4dCwgSUdhbWVPYmplY3QsIElMZXZlbCwgSVBsYXRPYmplY3QsIElQbGF0Zm9ybSwgSVBvd2VyVXAsIElWaXNpYmxlUGxhdCB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1zIHtcclxuXHRwcml2YXRlIGN0eDogQ29udGV4dDtcclxuXHRwcml2YXRlIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHRwcml2YXRlIHBsYXllcjogUGxheWVyO1xyXG5cdHByaXZhdGUgaHVkOiBIdWQ7XHJcblx0cHJpdmF0ZSBjb2xsaXNpb25zOiBDb2xsaXNpb25zO1xyXG5cdHByaXZhdGUgYWJpbGl0aWVzOiBBYmlsaXRpZXM7XHJcblx0cHJpdmF0ZSBnYW1lT2JqZWN0OiBJR2FtZU9iamVjdDtcclxuXHRwdWJsaWMgY3VycmVudExldmVsOiBudW1iZXI7XHJcblx0cHVibGljIHBsYXRzVmlzaWJsZTogSVZpc2libGVQbGF0W107XHJcblx0cHJpdmF0ZSBiYWNrZ3JvdW5kWDogbnVtYmVyO1xyXG5cdHByaXZhdGUgYmFja2dyb3VuZFgyOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBiZ0ltZ1lPZmZzZXQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGJnSW1nWU9mZnNldDI6IG51bWJlcjtcclxuXHRwdWJsaWMgZ2FtZU92ZXI6IGJvb2xlYW47XHJcblx0cHJpdmF0ZSBjb2xsaXNpb25NYXJnaW46IG51bWJlcjtcclxuXHRwcml2YXRlIGltYWdlUGF0aHM6IHN0cmluZ1tdO1xyXG5cdHByaXZhdGUgaW1hZ2VzOiBhbnk7XHJcblx0cHJpdmF0ZSBiZ0ltZzE6IHN0cmluZztcclxuXHRwcml2YXRlIGJnSW1nMjogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdGN0eDogQ29udGV4dCxcclxuXHRcdHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudCxcclxuXHRcdHBsYXllcjogUGxheWVyLFxyXG5cdFx0aHVkOiBIdWQsXHJcblx0XHRjb2xsaXNpb25zOiBDb2xsaXNpb25zLFxyXG5cdFx0YWJpbGl0aWVzOiBBYmlsaXRpZXMsXHJcblx0XHRnYW1lT2JqZWN0OiBhbnlcclxuXHQpIHtcclxuXHRcdHRoaXMuY3R4ID0gY3R4O1xyXG5cdFx0dGhpcy53b3JsZCA9IHdvcmxkO1xyXG5cdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblx0XHR0aGlzLmh1ZCA9IGh1ZDtcclxuXHRcdHRoaXMuY29sbGlzaW9ucyA9IGNvbGxpc2lvbnM7XHJcblx0XHR0aGlzLmFiaWxpdGllcyA9IGFiaWxpdGllcztcclxuXHRcdHRoaXMuZ2FtZU9iamVjdCA9IGdhbWVPYmplY3Q7XHJcblx0XHR0aGlzLmN1cnJlbnRMZXZlbCA9IDA7XHJcblx0XHR0aGlzLnBsYXRzVmlzaWJsZSA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGluZGV4OiAwLFxyXG5cdFx0XHRcdHg6IDAsXHJcblx0XHRcdFx0bGV2ZWw6IDAsXHJcblx0XHRcdH0sXHJcblx0XHRdO1xyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kWCA9IDA7XHJcblx0XHR0aGlzLmJhY2tncm91bmRYMiA9IHRoaXMud29ybGQud2lkdGg7XHJcblx0XHR0aGlzLmJnSW1nWU9mZnNldCA9IDA7XHJcblx0XHR0aGlzLmJnSW1nWU9mZnNldDIgPSAwO1xyXG5cdFx0dGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xyXG5cdFx0dGhpcy5jb2xsaXNpb25NYXJnaW4gPSAyNjtcclxuXHRcdHRoaXMuaW1hZ2VQYXRocyA9IFtcclxuXHRcdFx0Jy4uL3B1YmxpYy9iZ0xldmVsMS5wbmcnLFxyXG5cdFx0XHQnLi4vcHVibGljL2JnTGV2ZWwyLnBuZycsXHJcblx0XHRcdC8vIFBsYXRmb3JtIFRleHR1cmVzXHJcblx0XHRcdCcuLi9wdWJsaWMvd29vZFBsYXQucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy9kaXJ0UGxhdC5wbmcnLFxyXG5cdFx0XHQvLyBEZWNvclxyXG5cdFx0XHQnLi4vcHVibGljL3N0YXJ0U2lnbi5wbmcnLFxyXG5cdFx0XHQvLyBPYnN0aWNsZXNcclxuXHRcdFx0Jy4uL3B1YmxpYy9yb2NrMS5wbmcnLFxyXG5cdFx0XHQnLi4vcHVibGljL3JvY2syLnBuZycsXHJcblx0XHRcdCcuLi9wdWJsaWMvcm9jazMucG5nJyxcclxuXHRcdF07XHJcblx0XHR0aGlzLmltYWdlcyA9IHt9O1xyXG5cdFx0dGhpcy5iZ0ltZzEgPSAnJztcclxuXHRcdHRoaXMuYmdJbWcyID0gJyc7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgc2V0VXAoKSB7XHJcblx0XHRjb25zdCBwcmVsb2FkSW1hZ2VzID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBwcm9taXNlcyA9IHRoaXMuaW1hZ2VQYXRocy5tYXAoKHBhdGg6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBuYW1lID0gcGF0aC5zcGxpdCgnLycpLnBvcCgpPy5zcGxpdCgnLicpWzBdO1xyXG5cdFx0XHRcdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHJcblx0XHRcdFx0XHRpbWFnZS5zcmMgPSBwYXRoO1xyXG5cdFx0XHRcdFx0aW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKFtuYW1lLCBpbWFnZV0pO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdGltYWdlLm9uZXJyb3IgPSAoKSA9PiByZWplY3QoYEltYWdlIGZhaWxlZCB0byBsb2FkOiAke3BhdGh9YCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBpbWdBcnJheXRlbXA6IGFueVtdID0gYXdhaXQgcHJlbG9hZEltYWdlcygpO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoaW1nQXJyYXl0ZW1wKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbmV4dFBsYXRmb3JtKCkge1xyXG5cdFx0Y29uc3QgbGFzdFZpc2libGVQbGF0OiBJVmlzaWJsZVBsYXQgPSB0aGlzLnBsYXRzVmlzaWJsZVt0aGlzLnBsYXRzVmlzaWJsZS5sZW5ndGggLSAxXTtcclxuXHRcdGNvbnN0IHBsYXRzUmVmOiBJUGxhdGZvcm1bXSA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdLnBsYXRmb3JtcztcclxuXHRcdGNvbnN0IGxhc3RQbGF0UmVmOiBJUGxhdGZvcm0gPSBwbGF0c1JlZltsYXN0VmlzaWJsZVBsYXQuaW5kZXhdO1xyXG5cdFx0Ly8gY29uc3QgbmV4dFBsYXQ6IElQbGF0Zm9ybSA9IHBsYXRzUmVmW2xhc3RWaXNpYmxlUGxhdC5pbmRleCArIDFdO1xyXG5cclxuXHRcdGlmIChsYXN0VmlzaWJsZVBsYXQuaW5kZXggPT09IHBsYXRzUmVmLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50TGV2ZWwgKz0gMTtcclxuXHJcblx0XHRcdHRoaXMucGxhdHNWaXNpYmxlLnB1c2goe1xyXG5cdFx0XHRcdGluZGV4OiAwLFxyXG5cdFx0XHRcdHg6IGxhc3RWaXNpYmxlUGxhdC54ICsgbGFzdFBsYXRSZWYubGVuICsgbGFzdFBsYXRSZWYuZ2FwVG9OZXh0LFxyXG5cdFx0XHRcdGxldmVsOiB0aGlzLmN1cnJlbnRMZXZlbCxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5wbGF0c1Zpc2libGVbMF0ueCArIHBsYXRzUmVmW3RoaXMucGxhdHNWaXNpYmxlWzBdLmluZGV4XS5sZW4gPCAwKSB0aGlzLnBsYXRzVmlzaWJsZS5zaGlmdCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChsYXN0VmlzaWJsZVBsYXQuaW5kZXggPT09IDApIHtcclxuXHRcdFx0dGhpcy5odWQuY3VycmVudExldmVsID0gdGhpcy5jdXJyZW50TGV2ZWw7XHJcblx0XHRcdHRoaXMuaHVkLmJlZ2luTGV2ZWxUZXh0QW5pbWF0aW9uKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wbGF0c1Zpc2libGUucHVzaCh7XHJcblx0XHRcdGluZGV4OiBsYXN0VmlzaWJsZVBsYXQuaW5kZXggKyAxLFxyXG5cdFx0XHR4OiBsYXN0VmlzaWJsZVBsYXQueCArIGxhc3RQbGF0UmVmLmxlbiArIGxhc3RQbGF0UmVmLmdhcFRvTmV4dCxcclxuXHRcdFx0bGV2ZWw6IHRoaXMuY3VycmVudExldmVsLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHRoaXMucGxhdHNWaXNpYmxlWzBdLnggKyBwbGF0c1JlZlt0aGlzLnBsYXRzVmlzaWJsZVswXS5pbmRleF0ubGVuIDwgMCkgdGhpcy5wbGF0c1Zpc2libGUuc2hpZnQoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBtb3ZlKCkge1xyXG5cdFx0Y29uc3QgbGV2ZWw6IElMZXZlbCA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdO1xyXG5cdFx0Y29uc3QgcGxhdFJlZjogSVBsYXRmb3JtID0gbGV2ZWwucGxhdGZvcm1zW3RoaXMucGxhdHNWaXNpYmxlW3RoaXMucGxhdHNWaXNpYmxlLmxlbmd0aCAtIDFdLmluZGV4XTtcclxuXHJcblx0XHRjb25zdCBsYXN0UGxhdFggPSB0aGlzLnBsYXRzVmlzaWJsZVt0aGlzLnBsYXRzVmlzaWJsZS5sZW5ndGggLSAxXS54O1xyXG5cclxuXHRcdGlmIChsYXN0UGxhdFggKyBwbGF0UmVmLmxlbiA8PSB0aGlzLndvcmxkLndpZHRoKSB0aGlzLm5leHRQbGF0Zm9ybSgpO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF0c1Zpc2libGUubGVuZ3RoOyBpKyspIHRoaXMucGxhdHNWaXNpYmxlW2ldLnggLT0gbGV2ZWwuc3BlZWQ7XHJcblx0XHR0aGlzLmJhY2tncm91bmRYIC09IGxldmVsLnNwZWVkIC8gODtcclxuXHRcdGlmICh0aGlzLmJnSW1nMikgdGhpcy5iYWNrZ3JvdW5kWDIgLT0gbGV2ZWwuc3BlZWQgLyA4O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3RGVjb3JGb3JQbGF0KGRlY29yOiBJUGxhdE9iamVjdFtdLCBwbGF0WVRvcDogbnVtYmVyLCBwbGF0WDogbnVtYmVyLCBwbGF0TGVuOiBudW1iZXIpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGVjb3I/Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGltZ1NyYzogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMuaW1hZ2VzW2RlY29yW2ldLm5hbWVdO1xyXG5cdFx0XHRjb25zdCBkZWNvclhWYWxzID0gZGVjb3JbaV0ueExvY3NPblBsYXRCeVBlcmM7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRlY29yWFZhbHM/Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRcdFx0aW1nU3JjLFxyXG5cdFx0XHRcdFx0cGxhdFggKyBwbGF0TGVuICogZGVjb3JYVmFsc1tpXSxcclxuXHRcdFx0XHRcdHBsYXRZVG9wIC0gdGhpcy5pbWFnZXNbZGVjb3JbaV0ubmFtZV0uaGVpZ2h0ICsgMTAsXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tkZWNvcltpXS5uYW1lXS53aWR0aCxcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2VzW2RlY29yW2ldLm5hbWVdLmhlaWdodFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZHJhd09ic3RpY2xlT25QbGF0KFxyXG5cdFx0b2JzdGljbGVzOiBJUGxhdE9iamVjdFtdLFxyXG5cdFx0cGxhdFlUb3A6IG51bWJlcixcclxuXHRcdHBsYXRYOiBudW1iZXIsXHJcblx0XHRwbGF0TGVuOiBudW1iZXIsXHJcblx0XHRwbGF0SW5kZXg6IG51bWJlclxyXG5cdCkge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvYnN0aWNsZXM/Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGltZ1NyYzogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMuaW1hZ2VzW29ic3RpY2xlc1tpXS5uYW1lXTtcclxuXHRcdFx0Y29uc3Qgb2JzdGljbGVYVmFscyA9IG9ic3RpY2xlc1tpXS54TG9jc09uUGxhdEJ5UGVyYztcclxuXHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb2JzdGljbGVYVmFscz8ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0XHRpbWdTcmMsXHJcblx0XHRcdFx0XHRwbGF0WCArIHBsYXRMZW4gKiBvYnN0aWNsZVhWYWxzW2ldLFxyXG5cdFx0XHRcdFx0cGxhdFlUb3AgLSB0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0uaGVpZ2h0ICsgMTAsXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0ud2lkdGgsXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0uaGVpZ2h0XHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0dGhpcy5jb2xsaXNpb25zLmNoZWNrRm9yQ29sbGlzaW9uKHtcclxuXHRcdFx0XHRcdHgxOiB0aGlzLnBsYXllci54LFxyXG5cdFx0XHRcdFx0eTE6IHRoaXMucGxheWVyLnksXHJcblx0XHRcdFx0XHR4MjogcGxhdFggKyBwbGF0TGVuICogb2JzdGljbGVYVmFsc1tpXSxcclxuXHRcdFx0XHRcdHkyOiBwbGF0WVRvcCAtIHRoaXMuaW1hZ2VzW29ic3RpY2xlc1tpXS5uYW1lXS5oZWlnaHQgKyAxMCxcclxuXHRcdFx0XHRcdHcxOiB0aGlzLnBsYXllci53LFxyXG5cdFx0XHRcdFx0aDE6IHRoaXMucGxheWVyLmgsXHJcblx0XHRcdFx0XHR3MjogdGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdLndpZHRoLFxyXG5cdFx0XHRcdFx0aDI6XHJcblx0XHRcdFx0XHRcdHRoaXMuaW1hZ2VzW29ic3RpY2xlc1tpXS5uYW1lXS5oZWlnaHQgfHxcclxuXHRcdFx0XHRcdFx0dGhpcy53b3JsZC5oZWlnaHQgLSAocGxhdFlUb3AgLSB0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0uaGVpZ2h0ICsgMTApLFxyXG5cdFx0XHRcdFx0bWFyZ2luOiB0aGlzLmNvbGxpc2lvbk1hcmdpbixcclxuXHRcdFx0XHRcdG9iamVjdDogYCR7b2JzdGljbGVzW2ldLm5hbWV9XyR7cGxhdEluZGV4fV8ke29ic3RpY2xlWFZhbHNbaV19YCxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3QmdJbWFnZSgpIHtcclxuXHRcdGlmICghdGhpcy5iZ0ltZzEubGVuZ3RoKSB7XHJcblx0XHRcdHRoaXMuYmdJbWdZT2Zmc2V0ID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0uYmdJbWdZT2Zmc2V0O1xyXG5cdFx0XHR0aGlzLmJnSW1nMSA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdLmJhY2tncm91bmRJbWc7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuYmdJbWcyLmxlbmd0aCAmJiB0aGlzLmJhY2tncm91bmRYMiA8PSAwKSB7XHJcblx0XHRcdHRoaXMuYmdJbWcxID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0uYmFja2dyb3VuZEltZztcclxuXHRcdFx0dGhpcy5iZ0ltZzIgPSAnJztcclxuXHRcdFx0dGhpcy5iYWNrZ3JvdW5kWCA9IHRoaXMuYmFja2dyb3VuZFgyO1xyXG5cdFx0XHR0aGlzLmJhY2tncm91bmRYMiA9IHRoaXMud29ybGQud2lkdGg7XHJcblx0XHRcdHRoaXMuYmdJbWdZT2Zmc2V0ID0gdGhpcy5iZ0ltZ1lPZmZzZXQyO1xyXG5cdFx0XHR0aGlzLmJnSW1nWU9mZnNldDIgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGJnSW1hZ2UxID0gdGhpcy5pbWFnZXNbdGhpcy5iZ0ltZzFdOyAvLyBMZWZ0IFNpZGUgQmFja2dyb3VuZFxyXG5cclxuXHRcdGlmIChcclxuXHRcdFx0KHRoaXMuYmFja2dyb3VuZFggKyBiZ0ltYWdlMS53aWR0aCA8IHRoaXMud29ybGQud2lkdGggfHxcclxuXHRcdFx0XHR0aGlzLnBsYXRzVmlzaWJsZVswXS5sZXZlbCAhPT0gdGhpcy5jdXJyZW50TGV2ZWwpICYmXHJcblx0XHRcdCF0aGlzLmJnSW1nMi5sZW5ndGhcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLmJhY2tncm91bmRYMiA9IHRoaXMud29ybGQud2lkdGg7XHJcblx0XHRcdHRoaXMuYmdJbWdZT2Zmc2V0MiA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdLmJnSW1nWU9mZnNldDtcclxuXHRcdFx0dGhpcy5iZ0ltZzIgPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXS5iYWNrZ3JvdW5kSW1nO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGJnSW1hZ2UyID0gdGhpcy5pbWFnZXM/Llt0aGlzLmJnSW1nMl07IC8vIFJpZ2h0IFNpZGUgQmFja2dyb3VuZFxyXG5cclxuXHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0YmdJbWFnZTEsXHJcblx0XHRcdDAsXHJcblx0XHRcdDAsXHJcblx0XHRcdGJnSW1hZ2UxLndpZHRoLFxyXG5cdFx0XHRiZ0ltYWdlMS5oZWlnaHQsXHJcblx0XHRcdHRoaXMuYmFja2dyb3VuZFgsXHJcblx0XHRcdHRoaXMud29ybGQuaGVpZ2h0IC0gYmdJbWFnZTEuaGVpZ2h0ICsgdGhpcy5iZ0ltZ1lPZmZzZXQsXHJcblx0XHRcdGJnSW1hZ2UxLndpZHRoLFxyXG5cdFx0XHRiZ0ltYWdlMS5oZWlnaHRcclxuXHRcdCk7XHJcblxyXG5cdFx0aWYgKGJnSW1hZ2UyKSB7XHJcblx0XHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0XHRiZ0ltYWdlMixcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdDAsXHJcblx0XHRcdFx0YmdJbWFnZTIud2lkdGgsXHJcblx0XHRcdFx0YmdJbWFnZTIuaGVpZ2h0LFxyXG5cdFx0XHRcdHRoaXMuYmFja2dyb3VuZFgyLFxyXG5cdFx0XHRcdHRoaXMud29ybGQuaGVpZ2h0IC0gYmdJbWFnZTIuaGVpZ2h0ICsgdGhpcy5iZ0ltZ1lPZmZzZXQyLFxyXG5cdFx0XHRcdGJnSW1hZ2UyLndpZHRoLFxyXG5cdFx0XHRcdGJnSW1hZ2UyLmhlaWdodFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGRyYXcoKSB7XHJcblx0XHR0aGlzLmRyYXdCZ0ltYWdlKCk7XHJcblxyXG5cdFx0bGV0IGlzRmFsbGluZyA9IHRydWU7XHJcblx0XHRmb3IgKGNvbnN0IHBsYXQgb2YgdGhpcy5wbGF0c1Zpc2libGUpIHtcclxuXHRcdFx0Y29uc3QgbGV2ZWw6IElMZXZlbCA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbcGxhdC5sZXZlbF07XHJcblx0XHRcdGNvbnN0IGltZ1cgPVxyXG5cdFx0XHRcdHRoaXMuaW1hZ2VzW2xldmVsLnBsYXRmb3JtVGV4dHVyZV0ud2lkdGggKiAobGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLmxlbiAvIGxldmVsLm1heFBsYXRMZW4pO1xyXG5cclxuXHRcdFx0Y29uc3QgcGxhdGZvcm06IElQbGF0Zm9ybSA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbcGxhdC5sZXZlbF0ucGxhdGZvcm1zW3BsYXQuaW5kZXhdIHx8IFtdO1xyXG5cclxuXHRcdFx0aWYgKHBsYXRmb3JtPy5kZWNvcikge1xyXG5cdFx0XHRcdHRoaXMuZHJhd0RlY29yRm9yUGxhdChcclxuXHRcdFx0XHRcdHBsYXRmb3JtLmRlY29yLFxyXG5cdFx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnksXHJcblx0XHRcdFx0XHRwbGF0LngsXHJcblx0XHRcdFx0XHRsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ubGVuXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocGxhdGZvcm0/Lm9ic3RpY2xlcykge1xyXG5cdFx0XHRcdHRoaXMuZHJhd09ic3RpY2xlT25QbGF0KHBsYXRmb3JtLm9ic3RpY2xlcywgcGxhdGZvcm0ueSwgcGxhdC54LCBwbGF0Zm9ybS5sZW4sIHBsYXQuaW5kZXgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwbGF0Zm9ybT8ucG93ZXJVcHMpIHtcclxuXHRcdFx0XHR0aGlzLmFiaWxpdGllcy5kcmF3KHBsYXRmb3JtLnBvd2VyVXBzLCBwbGF0Zm9ybS55LCBwbGF0LngsIHBsYXRmb3JtLmxlbiwgcGxhdC5pbmRleCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChsZXZlbC5wbGF0Zm9ybUgpIHtcclxuXHRcdFx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tsZXZlbC5wbGF0Zm9ybVRleHR1cmVdLFxyXG5cdFx0XHRcdFx0MCxcclxuXHRcdFx0XHRcdDAsXHJcblx0XHRcdFx0XHRpbWdXLFxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlXS5oZWlnaHQsXHJcblx0XHRcdFx0XHRwbGF0LngsXHJcblx0XHRcdFx0XHRsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ueSxcclxuXHRcdFx0XHRcdGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS5sZW4sXHJcblx0XHRcdFx0XHRsZXZlbC5wbGF0Zm9ybUhcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2VzW2xldmVsLnBsYXRmb3JtVGV4dHVyZV0sXHJcblx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlXS5oZWlnaHQsXHJcblx0XHRcdFx0XHRpbWdXLFxyXG5cdFx0XHRcdFx0LTIuNSAqXHJcblx0XHRcdFx0XHRcdHRoaXMuaW1hZ2VzW2xldmVsLnBsYXRmb3JtVGV4dHVyZV0uaGVpZ2h0ICpcclxuXHRcdFx0XHRcdFx0KCh0aGlzLndvcmxkLmhlaWdodCAtIGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55KSAvIHRoaXMuaW1hZ2VzW2xldmVsLnBsYXRmb3JtVGV4dHVyZV0uaGVpZ2h0KSxcclxuXHRcdFx0XHRcdHBsYXQueCxcclxuXHRcdFx0XHRcdGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55LFxyXG5cdFx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLmxlbixcclxuXHRcdFx0XHRcdHRoaXMud29ybGQuaGVpZ2h0IC0gbGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnlcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHQvLyB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XHJcblx0XHRcdFx0Ly8gdGhpcy5jdHgucmVjdChcclxuXHRcdFx0XHQvLyBcdHBsYXQueCxcclxuXHRcdFx0XHQvLyBcdGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55LFxyXG5cdFx0XHRcdC8vIFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLmxlbixcclxuXHRcdFx0XHQvLyBcdHRoaXMud29ybGQuaGVpZ2h0IC0gbGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnlcclxuXHRcdFx0XHQvLyApO1xyXG5cdFx0XHRcdC8vIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBpc0NvbGxpZGluZyA9IHRoaXMuY29sbGlzaW9ucy5jaGVja0ZvclBsYXRDb2xsaXNpb24oe1xyXG5cdFx0XHRcdHgxOiB0aGlzLnBsYXllci54LFxyXG5cdFx0XHRcdHkxOiB0aGlzLnBsYXllci55LFxyXG5cdFx0XHRcdHgyOiBwbGF0LngsXHJcblx0XHRcdFx0eTI6IGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55LFxyXG5cdFx0XHRcdHcxOiB0aGlzLnBsYXllci53LFxyXG5cdFx0XHRcdGgxOiB0aGlzLnBsYXllci5oLFxyXG5cdFx0XHRcdHcyOiBsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ubGVuLFxyXG5cdFx0XHRcdGgyOiBsZXZlbC5wbGF0Zm9ybUggfHwgdGhpcy53b3JsZC5oZWlnaHQgLSBsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ueSxcclxuXHRcdFx0XHRtYXJnaW46IHRoaXMuY29sbGlzaW9uTWFyZ2luLFxyXG5cdFx0XHRcdG9iamVjdDogYCR7dGhpcy5jdXJyZW50TGV2ZWx9XyR7cGxhdC5pbmRleH1gLFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChpc0NvbGxpZGluZykgaXNGYWxsaW5nID0gZmFsc2U7XHJcblxyXG5cdFx0XHQvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjMpJztcclxuXHRcdFx0Ly8gdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHRcdC8vIHRoaXMuY3R4LnJlY3QodGhpcy5wbGF0Zm9ybXNbaV0ueCwgdGhpcy5wbGF0Zm9ybXNbaV0ueSwgdGhpcy5wbGF0Zm9ybXNbaV0udywgdGhpcy5oKTtcclxuXHRcdFx0Ly8gdGhpcy5jdHguZmlsbCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpc0ZhbGxpbmcpIHRoaXMucGxheWVyLmlzSW5BaXIgPSB0cnVlO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgSHVkIGZyb20gJy4vaHVkJztcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuXHRwcml2YXRlIGN0eDogQ29udGV4dDtcclxuXHRwcml2YXRlIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHRwcml2YXRlIGh1ZDogSHVkO1xyXG5cdHByaXZhdGUgYXNwZWN0UmF0aW86IG51bWJlcjtcclxuXHRwdWJsaWMgeDogbnVtYmVyO1xyXG5cdHB1YmxpYyB5OiBudW1iZXI7XHJcblx0cHVibGljIHc6IG51bWJlcjtcclxuXHRwdWJsaWMgaDogbnVtYmVyO1xyXG5cdHB1YmxpYyBpc0luQWlyOiBib29sZWFuO1xyXG5cdHB1YmxpYyBtYXhKdW1wU3RhcnQ6IG51bWJlcjtcclxuXHRwdWJsaWMganVtcFZlbFN0YXJ0UmVzZXQ6IG51bWJlcjtcclxuXHRwdWJsaWMganVtcFZlbFN0YXJ0OiBudW1iZXI7XHJcblx0cHVibGljIHlWZWxvY2l0eTogbnVtYmVyO1xyXG5cdHB1YmxpYyB5QWNjOiBudW1iZXI7XHJcblx0cHJpdmF0ZSByb3RhdGlvbjogbnVtYmVyO1xyXG5cdHByaXZhdGUgcm90YXRpb25TcGVlZDogbnVtYmVyO1xyXG5cdHByaXZhdGUgaXNKdW1waW5nOiBib29sZWFuO1xyXG5cdHB1YmxpYyBsb2FkaW5nSnVtcDogYm9vbGVhbjtcclxuXHRwcml2YXRlIHdoZWVsUm90OiBudW1iZXI7XHJcblx0cHJpdmF0ZSByb3RDb29yZHNGb3JKdW1wOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XHJcblx0cHVibGljIHNwZWVkOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBpbWFnZVBhdGhzOiBzdHJpbmdbXTtcclxuXHRwcml2YXRlIGltYWdlczogYW55O1xyXG5cdHByaXZhdGUgaXNCZWluZ0RhbWFnZWQ6IGJvb2xlYW47XHJcblx0cHJpdmF0ZSBsYXN0T2JqZWN0SGl0OiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGN0eDogQ29udGV4dCwgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50LCBodWQ6IEh1ZCkge1xyXG5cdFx0dGhpcy5jdHggPSBjdHg7XHJcblx0XHR0aGlzLndvcmxkID0gd29ybGQ7XHJcblx0XHR0aGlzLmFzcGVjdFJhdGlvID0gMS4xO1xyXG5cdFx0dGhpcy54ID0gMTAwO1xyXG5cdFx0dGhpcy55ID0gMTAwO1xyXG5cdFx0dGhpcy53ID0gMTUwO1xyXG5cdFx0dGhpcy5oID0gdGhpcy53IC8gdGhpcy5hc3BlY3RSYXRpbztcclxuXHRcdHRoaXMuaXNJbkFpciA9IHRydWU7XHJcblx0XHR0aGlzLm1heEp1bXBTdGFydCA9IDIwO1xyXG5cdFx0dGhpcy5qdW1wVmVsU3RhcnRSZXNldCA9IDEwO1xyXG5cdFx0dGhpcy5qdW1wVmVsU3RhcnQgPSB0aGlzLmp1bXBWZWxTdGFydFJlc2V0O1xyXG5cdFx0dGhpcy55VmVsb2NpdHkgPSAwO1xyXG5cdFx0dGhpcy55QWNjID0gMC44O1xyXG5cdFx0dGhpcy5yb3RhdGlvbiA9IDA7XHJcblx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwO1xyXG5cdFx0dGhpcy5pc0p1bXBpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMubG9hZGluZ0p1bXAgPSBmYWxzZTtcclxuXHRcdHRoaXMud2hlZWxSb3QgPSAwO1xyXG5cdFx0dGhpcy5yb3RDb29yZHNGb3JKdW1wID0geyB4OiAwLCB5OiAwIH07XHJcblx0XHR0aGlzLnNwZWVkID0gMDtcclxuXHRcdHRoaXMuaHVkID0gaHVkO1xyXG5cdFx0dGhpcy5pbWFnZVBhdGhzID0gW1xyXG5cdFx0XHQnLi4vcHVibGljL2ZyYW1lLnBuZycsXHJcblx0XHRcdCcuLi9wdWJsaWMvZnJhbWVEYW1hZ2VkLnBuZycsXHJcblx0XHRcdCcuLi9wdWJsaWMvd2hlZWwucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy93aGVlbERhbWFnZWQucG5nJyxcclxuXHRcdF07XHJcblx0XHR0aGlzLmltYWdlcyA9IHt9O1xyXG5cdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5sYXN0T2JqZWN0SGl0ID0gJyc7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgc2V0VXAoKSB7XHJcblx0XHRjb25zdCBwcmVsb2FkSW1hZ2VzID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBwcm9taXNlcyA9IHRoaXMuaW1hZ2VQYXRocy5tYXAoKHBhdGg6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBuYW1lID0gcGF0aC5zcGxpdCgnLycpLnBvcCgpPy5zcGxpdCgnLicpWzBdO1xyXG5cdFx0XHRcdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHJcblx0XHRcdFx0XHRpbWFnZS5zcmMgPSBwYXRoO1xyXG5cdFx0XHRcdFx0aW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKFtuYW1lLCBpbWFnZV0pO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdGltYWdlLm9uZXJyb3IgPSAoKSA9PiByZWplY3QoYEltYWdlIGZhaWxlZCB0byBsb2FkOiAke3BhdGh9YCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBpbWdBcnJheXRlbXA6IGFueVtdID0gYXdhaXQgcHJlbG9hZEltYWdlcygpO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoaW1nQXJyYXl0ZW1wKTtcclxuXHRcdHRoaXMudyA9IHRoaXMuaW1hZ2VzLmZyYW1lLndpZHRoO1xyXG5cdFx0dGhpcy5oID0gdGhpcy5pbWFnZXMuZnJhbWUuaGVpZ2h0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoYW5nZVRvRGFtYWdlZEltZ3Mob2JqZWN0OiBzdHJpbmcpIHtcclxuXHRcdGlmIChvYmplY3QgPT09IHRoaXMubGFzdE9iamVjdEhpdCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5sYXN0T2JqZWN0SGl0ID0gb2JqZWN0O1xyXG5cdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA9IHRydWU7XHJcblx0XHRjb25zdCBmbGFzaEludGVydmFsID0gNTA7XHJcblxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuaXNCZWluZ0RhbWFnZWQgPSBmYWxzZTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA9IHRydWU7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmlzQmVpbmdEYW1hZ2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaXNCZWluZ0RhbWFnZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fSwgZmxhc2hJbnRlcnZhbCk7XHJcblx0XHRcdFx0XHR9LCBmbGFzaEludGVydmFsKTtcclxuXHRcdFx0XHR9LCBmbGFzaEludGVydmFsKTtcclxuXHRcdFx0fSwgZmxhc2hJbnRlcnZhbCk7XHJcblx0XHR9LCBmbGFzaEludGVydmFsKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBsYW5kKHk6IG51bWJlcikge1xyXG5cdFx0aWYgKHRoaXMucm90YXRpb24gPCAwKSByZXR1cm47XHJcblx0XHR0aGlzLmlzSW5BaXIgPSBmYWxzZTtcclxuXHRcdHRoaXMuaXNKdW1waW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwO1xyXG5cdFx0dGhpcy5yb3RhdGlvbiA9IDA7XHJcblx0XHR0aGlzLnlWZWxvY2l0eSA9IDA7XHJcblx0XHR0aGlzLnkgPSB5IC0gdGhpcy5oO1xyXG5cdFx0aWYgKCF0aGlzLmxvYWRpbmdKdW1wKSB0aGlzLmp1bXBWZWxTdGFydCA9IHRoaXMuanVtcFZlbFN0YXJ0UmVzZXQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMganVtcCgpIHtcclxuXHRcdHRoaXMubG9hZGluZ0p1bXAgPSBmYWxzZTtcclxuXHRcdGlmICh0aGlzLmlzSnVtcGluZyB8fCB0aGlzLmlzSW5BaXIgfHwgdGhpcy55VmVsb2NpdHkgPCAwKSByZXR1cm47XHJcblx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSB0aGlzLmp1bXBWZWxTdGFydDtcclxuXHRcdHRoaXMuaXNKdW1waW5nID0gdHJ1ZTtcclxuXHJcblx0XHR0aGlzLmlzSW5BaXIgPSB0cnVlO1xyXG5cdFx0dGhpcy55VmVsb2NpdHkgPSB0aGlzLmp1bXBWZWxTdGFydDtcclxuXHRcdHRoaXMuanVtcFZlbFN0YXJ0ID0gdGhpcy5qdW1wVmVsU3RhcnRSZXNldDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbG9hZEp1bXAoKSB7XHJcblx0XHRpZiAodGhpcy5qdW1wVmVsU3RhcnQgPCB0aGlzLm1heEp1bXBTdGFydCkge1xyXG5cdFx0XHR0aGlzLmp1bXBWZWxTdGFydCArPSAwLjU7XHJcblx0XHRcdHRoaXMuaHVkLmRyYXdKdW1wQ2hhcmdlKFxyXG5cdFx0XHRcdDEgLSAodGhpcy5tYXhKdW1wU3RhcnQgLSB0aGlzLmp1bXBWZWxTdGFydCkgLyAodGhpcy5tYXhKdW1wU3RhcnQgLSB0aGlzLmp1bXBWZWxTdGFydFJlc2V0KSxcclxuXHRcdFx0XHR0aGlzLngsXHJcblx0XHRcdFx0dGhpcy55XHJcblx0XHRcdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmh1ZC5kcmF3SnVtcENoYXJnZSgxLCB0aGlzLngsIHRoaXMueSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdGcmFtZSgpIHtcclxuXHRcdC8vIGNvbnN0IHlPZmZzZXQgPSA1O1xyXG5cdFx0dGhpcy5jdHguc2F2ZSgpO1xyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKHRoaXMucm90Q29vcmRzRm9ySnVtcC54LCB0aGlzLnJvdENvb3Jkc0Zvckp1bXAueSk7XHJcblx0XHR0aGlzLmN0eC5yb3RhdGUoKHRoaXMucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7XHJcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdHRoaXMuaXNCZWluZ0RhbWFnZWQgPyB0aGlzLmltYWdlcy5mcmFtZURhbWFnZWQgOiB0aGlzLmltYWdlcy5mcmFtZSxcclxuXHRcdFx0LXRoaXMuaW1hZ2VzLndoZWVsLndpZHRoIC8gMixcclxuXHRcdFx0LXRoaXMuaCArIHRoaXMuaW1hZ2VzLndoZWVsLmhlaWdodCAvIDIsXHJcblx0XHRcdHRoaXMudyxcclxuXHRcdFx0dGhpcy5oXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5jdHgucmVzdG9yZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3V2hlZWxzKCkge1xyXG5cdFx0Y29uc3Qgcm90T2Zmc2V0ID0gdGhpcy5odWQuaGVhbHRoID49IDkwID8gMCA6IHRoaXMuaHVkLmhlYWx0aCA8IDkwICYmIHRoaXMuaHVkLmhlYWx0aCA+PSA1MCA/IDEgOiAyO1xyXG5cclxuXHRcdHRoaXMuY3R4LnNhdmUoKTtcclxuXHRcdHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLnJvdENvb3Jkc0Zvckp1bXAueCArIHJvdE9mZnNldCwgdGhpcy5yb3RDb29yZHNGb3JKdW1wLnkpO1xyXG5cdFx0dGhpcy5jdHgucm90YXRlKCh0aGlzLnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODApOyAvLyBSb3RhdGUgZm9yIGp1bXBcclxuXHRcdHRoaXMuY3R4LnJvdGF0ZSgodGhpcy53aGVlbFJvdCAqIE1hdGguUEkpIC8gMTgwKTsgLy8gUm90YXRlIGZvciB3aGVlbCBzcGluXHJcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdHRoaXMuaXNCZWluZ0RhbWFnZWQgPyB0aGlzLmltYWdlcy53aGVlbERhbWFnZWQgOiB0aGlzLmltYWdlcy53aGVlbCxcclxuXHRcdFx0LXRoaXMuaW1hZ2VzLndoZWVsLndpZHRoIC8gMiAtIHJvdE9mZnNldCxcclxuXHRcdFx0LXRoaXMuaW1hZ2VzLndoZWVsLmhlaWdodCAvIDIsXHJcblx0XHRcdHRoaXMuaW1hZ2VzLndoZWVsLndpZHRoIC0gMC41LFxyXG5cdFx0XHR0aGlzLmltYWdlcy53aGVlbC5oZWlnaHQgLSAwLjVcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN0eC5yZXN0b3JlKCk7XHJcblxyXG5cdFx0dGhpcy5jdHguc2F2ZSgpO1xyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKHRoaXMucm90Q29vcmRzRm9ySnVtcC54LCB0aGlzLnJvdENvb3Jkc0Zvckp1bXAueSArIHJvdE9mZnNldCk7XHJcblx0XHR0aGlzLmN0eC5yb3RhdGUoKHRoaXMucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7IC8vIFJvdGF0ZSBmb3IganVtcFxyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKC10aGlzLnJvdENvb3Jkc0Zvckp1bXAueCwgLXRoaXMucm90Q29vcmRzRm9ySnVtcC55KTsgLy8gTW92ZSB0byBzdGFydFxyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKHRoaXMueCArIHRoaXMudyAtIHRoaXMuaW1hZ2VzLndoZWVsLndpZHRoIC8gMiwgdGhpcy5yb3RDb29yZHNGb3JKdW1wLnkpO1xyXG5cdFx0dGhpcy5jdHgucm90YXRlKCh0aGlzLndoZWVsUm90ICogTWF0aC5QSSkgLyAxODApOyAvLyBSb3RhdGUgZm9yIHdoZWVsIHNwaW5cclxuXHRcdHRoaXMuY3R4LnRyYW5zbGF0ZSgtKHRoaXMueCArIHRoaXMudyAtIHRoaXMuaW1hZ2VzLndoZWVsLndpZHRoIC8gMiksIC10aGlzLnJvdENvb3Jkc0Zvckp1bXAueSk7IC8vIE1vdmUgdG8gc3RhcnRcclxuXHRcdHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLnJvdENvb3Jkc0Zvckp1bXAueCwgdGhpcy5yb3RDb29yZHNGb3JKdW1wLnkpO1xyXG5cclxuXHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA/IHRoaXMuaW1hZ2VzLndoZWVsRGFtYWdlZCA6IHRoaXMuaW1hZ2VzLndoZWVsLFxyXG5cdFx0XHQtKHRoaXMucm90Q29vcmRzRm9ySnVtcC54IC0gdGhpcy54KSArIHRoaXMudyAtIHRoaXMuaW1hZ2VzLndoZWVsLndpZHRoLFxyXG5cdFx0XHQtdGhpcy5pbWFnZXMud2hlZWwuaGVpZ2h0IC8gMiAtIHJvdE9mZnNldCxcclxuXHRcdFx0dGhpcy5pbWFnZXMud2hlZWwud2lkdGggLSAwLjUsXHJcblx0XHRcdHRoaXMuaW1hZ2VzLndoZWVsLmhlaWdodCAtIDAuNVxyXG5cdFx0KTtcclxuXHRcdHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkcmF3KCkge1xyXG5cdFx0aWYgKCF0aGlzLmltYWdlcz8uZnJhbWUpIHJldHVybjtcclxuXHRcdHRoaXMud2hlZWxSb3QgKz0gdGhpcy5zcGVlZDtcclxuXHRcdC8vIHRoaXMud2hlZWxSb3QgKz0gMTA7XHJcblxyXG5cdFx0aWYgKHRoaXMubG9hZGluZ0p1bXApIHRoaXMubG9hZEp1bXAoKTtcclxuXHJcblx0XHR0aGlzLnkgLT0gdGhpcy55VmVsb2NpdHk7XHJcblx0XHRpZiAodGhpcy5pc0luQWlyKSB0aGlzLnlWZWxvY2l0eSAtPSB0aGlzLnlBY2M7XHJcblxyXG5cdFx0aWYgKHRoaXMuaXNKdW1waW5nKSB7XHJcblx0XHRcdHRoaXMucm90YXRpb24gLT0gdGhpcy5yb3RhdGlvblNwZWVkIC8gNDtcclxuXHRcdFx0dGhpcy5yb3RhdGlvblNwZWVkIC09IHRoaXMueUFjYyAqIDI7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5yb3RhdGlvbiA+PSA1KSB7XHJcblx0XHRcdFx0dGhpcy5yb3RhdGlvblNwZWVkID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMCwgMCwgMCwgMC41KSc7XHJcblx0XHQvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdC8vIHRoaXMuY3R4LnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMudywgdGhpcy5oKTtcclxuXHRcdC8vIHRoaXMuY3R4LmZpbGwoKTtcclxuXHJcblx0XHR0aGlzLnJvdENvb3Jkc0Zvckp1bXAgPSB7XHJcblx0XHRcdHg6IHRoaXMueCArIHRoaXMuaW1hZ2VzLndoZWVsLndpZHRoIC8gMixcclxuXHRcdFx0eTogdGhpcy55ICsgdGhpcy5oIC0gdGhpcy5pbWFnZXMud2hlZWwuaGVpZ2h0IC8gMixcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5kcmF3V2hlZWxzKCk7XHJcblx0XHR0aGlzLmRyYXdGcmFtZSgpO1xyXG5cdH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hYmlsaXRpZXMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY29sbGlzaW9ucy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9odWQudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGxhdGZvcm1zLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BsYXllci50c1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3R5cGVzLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9