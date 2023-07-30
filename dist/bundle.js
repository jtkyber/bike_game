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
            powerUps: [{ name: 'healthBoost', xPercAlongPlat: 0.8, distAbovePlat: 300 }],
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
                this.hud.increaseHealth(20);
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
            if (this.player.yVelocity <= 0 && Math.abs(y2 - (y1 + h1)) < 20) {
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
    // private drawHeart(sectionW: number, heartIndex: number, sectionStartX: number) {
    // 	const xShiftInsideBox = 8;
    // 	const heartContainerW = 50;
    // 	const xoff =
    // 		(heartIndex === 0 ? 0 : heartIndex === 1 ? heartContainerW : heartContainerW * 2) +
    // 		sectionStartX +
    // 		xShiftInsideBox;
    // 	const yoff = 14;
    // 	const scale = 0.06;
    // 	this.ctx.fillStyle = 'red';
    // 	this.ctx.strokeStyle = 'rgba(255, 0, 0, 0.6)';
    // 	this.ctx.lineWidth = 2;
    // 	this.ctx.beginPath();
    // 	this.ctx.moveTo(scale * 372 + xoff, scale * 240 + yoff);
    // 	this.ctx.bezierCurveTo(
    // 		scale * 487 + xoff,
    // 		scale * 117 + yoff,
    // 		scale * 642 + xoff,
    // 		scale * 262 + yoff,
    // 		scale * 551 + xoff,
    // 		scale * 363 + yoff
    // 	);
    // 	this.ctx.bezierCurveTo(
    // 		scale * 541 + xoff,
    // 		scale * 374 + yoff,
    // 		scale * 398 + xoff,
    // 		scale * 550 + yoff,
    // 		scale * 385 + xoff,
    // 		scale * 594 + yoff
    // 	);
    // 	this.ctx.bezierCurveTo(
    // 		scale * 371 + xoff,
    // 		scale * 550 + yoff,
    // 		scale * 233 + xoff,
    // 		scale * 379 + yoff,
    // 		scale * 222 + xoff,
    // 		scale * 367 + yoff
    // 	);
    // 	this.ctx.bezierCurveTo(
    // 		scale * 121 + xoff,
    // 		scale * 257 + yoff,
    // 		scale * 294 + xoff,
    // 		scale * 125 + yoff,
    // 		scale * 385 + xoff,
    // 		scale * 246 + yoff
    // 	);
    // 	this.ctx.save();
    // 	this.ctx.clip();
    // 	this.ctx.lineWidth *= 2;
    // 	this.ctx.stroke();
    // 	this.ctx.restore();
    // 	if (heartIndex + 1 <= this.lives) this.ctx.fill();
    // }
    // private drawLives() {
    // 	const sectionStartX = 30;
    // 	const sectionStartY = 11;
    // 	const sectionW = 160;
    // 	const sectionH = 50;
    // 	this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    // 	this.ctx.beginPath();
    // 	this.ctx.roundRect(sectionStartX, sectionStartY, sectionW, sectionH, 10);
    // 	this.ctx.fill();
    // 	for (let i = 0; i < 3; i++) {
    // 		this.drawHeart(sectionW, i, sectionStartX);
    // 	}
    // }
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
        var rotOffset = this.hud.health >= 90 ? 0 : this.hud.health < 90 && this.hud.health >= 50 ? 2 : 4;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jpa2VfZ2FtZS8uL3B1YmxpYy9nYW1lT2JqZWN0LnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS8uL3NyYy9hYmlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL2NvbGxpc2lvbnMudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL2h1ZC50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL3BsYXRmb3Jtcy50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvcGxheWVyLnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJR2FtZU9iamVjdCwgSUxldmVsIH0gZnJvbSAnLi4vc3JjL3R5cGVzJztcclxuXHJcbmNvbnN0IGxldmVsT25lOiBJTGV2ZWwgPSB7XHJcblx0cGxhdGZvcm1zOiBbXHJcblx0XHR7XHJcblx0XHRcdHk6IDYwMCxcclxuXHRcdFx0bGVuOiAzMDAwLFxyXG5cdFx0XHRnYXBUb05leHQ6IDAsXHJcblx0XHRcdGRlY29yOiBbeyBuYW1lOiAnc3RhcnRTaWduJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjZdIH1dLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0eTogNjAwLFxyXG5cdFx0XHRsZW46IDIwMDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMjAwLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0eTogNzAwLFxyXG5cdFx0XHRsZW46IDEwMDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMCxcclxuXHRcdH0sXHJcblx0XHR7IHk6IDYwMCwgbGVuOiA4MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA1MDAsIGxlbjogMjAwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMicsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC40XSB9XSB9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMTIwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDQ1MCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2szJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjhdIH1dIH0sXHJcblx0XHR7IHk6IDY1MCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNjI1LCBsZW46IDYwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDYwMCwgbGVuOiA4MDAsIGdhcFRvTmV4dDogNTAgfSxcclxuXHRcdHsgeTogNTUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazMnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuMV0gfV0gfSxcclxuXHRcdHsgeTogNDEwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMzAwIH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2sxJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjZdIH1dIH0sXHJcblx0XHR7IHk6IDYwMCwgbGVuOiA4MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMTIwMCwgZ2FwVG9OZXh0OiAxMDAgfSxcclxuXHRcdHsgeTogNDUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazEnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuOF0gfV0gfSxcclxuXHRcdHtcclxuXHRcdFx0eTogNjUwLFxyXG5cdFx0XHRsZW46IDEwMDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMCxcclxuXHRcdFx0cG93ZXJVcHM6IFt7IG5hbWU6ICdoZWFsdGhCb29zdCcsIHhQZXJjQWxvbmdQbGF0OiAwLjgsIGRpc3RBYm92ZVBsYXQ6IDMwMCB9XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHk6IDYyNSxcclxuXHRcdFx0bGVuOiA2MDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMCxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRwbGF0Zm9ybVRleHR1cmU6ICdkaXJ0UGxhdCcsXHJcblx0cGxhdGZvcm1IOiBudWxsLFxyXG5cdGJhY2tncm91bmRJbWc6ICdiZ0xldmVsMScsXHJcblx0YmdJbWdZT2Zmc2V0OiAwLFxyXG5cdG1heFBsYXRMZW46IDQwMDAsXHJcblx0c3BlZWQ6IDIwLFxyXG59O1xyXG5cclxuY29uc3QgbGV2ZWxUd286IElMZXZlbCA9IHtcclxuXHRwbGF0Zm9ybXM6IFtcclxuXHRcdHtcclxuXHRcdFx0eTogNjAwLFxyXG5cdFx0XHRsZW46IDMwMDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMCxcclxuXHRcdFx0ZGVjb3I6IFt7IG5hbWU6ICdzdGFydFNpZ24nLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuNl0gfV0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR5OiA2MDAsXHJcblx0XHRcdGxlbjogMjAwMCxcclxuXHRcdFx0Z2FwVG9OZXh0OiAyMDAsXHJcblx0XHR9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMScsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC4xXSB9XSB9LFxyXG5cdFx0eyB5OiA2MDAsIGxlbjogODAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNTAwLCBsZW46IDIwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazInLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuNF0gfV0gfSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDEyMDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA0NTAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMycsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC44XSB9XSB9LFxyXG5cdFx0eyB5OiA2NTAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDYyNSwgbGVuOiA2MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0e1xyXG5cdFx0XHR5OiA2MDAsXHJcblx0XHRcdGxlbjogODAwLFxyXG5cdFx0XHRnYXBUb05leHQ6IDUwLFxyXG5cdFx0XHRwb3dlclVwczogW3sgbmFtZTogJ2hlYWx0aEJvb3N0JywgeFBlcmNBbG9uZ1BsYXQ6IDAuMiwgZGlzdEFib3ZlUGxhdDogMzAwIH1dLFxyXG5cdFx0fSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDIwMDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA1NTAsIGxlbjogNzAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2szJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjFdIH1dIH0sXHJcblx0XHR7IHk6IDQxMCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDMwMCB9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMScsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC42XSB9XSB9LFxyXG5cdFx0eyB5OiA2MDAsIGxlbjogODAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNTUwLCBsZW46IDE1MDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazMnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuNF0gfV0gfSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDEyMDAsIGdhcFRvTmV4dDogMTAwIH0sXHJcblx0XHR7IHk6IDQ1MCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2sxJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjhdIH1dIH0sXHJcblx0XHR7IHk6IDY1MCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNjI1LCBsZW46IDYwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XSxcclxuXHRwbGF0Zm9ybVRleHR1cmU6ICd3b29kUGxhdCcsXHJcblx0cGxhdGZvcm1IOiAxNixcclxuXHRiYWNrZ3JvdW5kSW1nOiAnYmdMZXZlbDInLFxyXG5cdGJnSW1nWU9mZnNldDogNjAwLFxyXG5cdG1heFBsYXRMZW46IDQwMDAsXHJcblx0c3BlZWQ6IDIwLFxyXG59O1xyXG5cclxuY29uc3QgZ2FtZU9iamVjdDogSUdhbWVPYmplY3QgPSB7XHJcblx0bGV2ZWxzOiBbbGV2ZWxPbmUsIGxldmVsVHdvXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVPYmplY3Q7XHJcbiIsImltcG9ydCBDb2xsaXNpb25zIGZyb20gJy4vY29sbGlzaW9ucyc7XHJcbmltcG9ydCBIdWQgZnJvbSAnLi9odWQnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgQ29udGV4dCwgSVBvd2VyVXAgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFiaWxpdGllcyB7XHJcblx0Y3R4OiBDb250ZXh0O1xyXG5cdHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHRodWQ6IEh1ZDtcclxuXHRjb2xsaXNpb25zOiBDb2xsaXNpb25zO1xyXG5cdHBsYXllcjogUGxheWVyO1xyXG5cdGltYWdlUGF0aHM6IHN0cmluZ1tdO1xyXG5cdGltYWdlczogYW55O1xyXG5cdGNvbGxlY3RlZFBvd2VyVXBzOiBzdHJpbmdbXTtcclxuXHJcblx0Y29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQsIGh1ZDogSHVkLCBjb2xsaXNpb25zOiBDb2xsaXNpb25zLCBwbGF5ZXI6IFBsYXllcikge1xyXG5cdFx0dGhpcy5jdHggPSBjdHg7XHJcblx0XHR0aGlzLndvcmxkID0gd29ybGQ7XHJcblx0XHR0aGlzLmh1ZCA9IGh1ZDtcclxuXHRcdHRoaXMuY29sbGlzaW9ucyA9IGNvbGxpc2lvbnM7XHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHRcdHRoaXMuaW1hZ2VQYXRocyA9IFsnLi4vcHVibGljL2hlYWx0aEJvb3N0LnBuZyddO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSB7fTtcclxuXHRcdHRoaXMuY29sbGVjdGVkUG93ZXJVcHMgPSBbXTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBzZXRVcCgpIHtcclxuXHRcdGNvbnN0IHByZWxvYWRJbWFnZXMgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5pbWFnZVBhdGhzLm1hcCgocGF0aDogc3RyaW5nKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSBwYXRoLnNwbGl0KCcvJykucG9wKCk/LnNwbGl0KCcuJylbMF07XHJcblx0XHRcdFx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuXHRcdFx0XHRcdGltYWdlLnNyYyA9IHBhdGg7XHJcblx0XHRcdFx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoW25hbWUsIGltYWdlXSk7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0aW1hZ2Uub25lcnJvciA9ICgpID0+IHJlamVjdChgSW1hZ2UgZmFpbGVkIHRvIGxvYWQ6ICR7cGF0aH1gKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGltZ0FycmF5dGVtcDogYW55W10gPSBhd2FpdCBwcmVsb2FkSW1hZ2VzKCk7XHJcblx0XHR0aGlzLmltYWdlcyA9IE9iamVjdC5mcm9tRW50cmllcyhpbWdBcnJheXRlbXApO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGRyYXcocG93ZXJVcHM6IElQb3dlclVwW10sIHBsYXRZVG9wOiBudW1iZXIsIHBsYXRYOiBudW1iZXIsIHBsYXRMZW46IG51bWJlciwgcGxhdEluZGV4OiBudW1iZXIpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG93ZXJVcHM/Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGltZ1NyYzogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMuaW1hZ2VzW3Bvd2VyVXBzW2ldLm5hbWVdO1xyXG5cclxuXHRcdFx0aWYgKCFpbWdTcmMpIGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0Y29uc3QgaW1nWCA9IHBsYXRYICsgcGxhdExlbiAqIHBvd2VyVXBzW2ldLnhQZXJjQWxvbmdQbGF0O1xyXG5cdFx0XHRjb25zdCBpbWdZID0gcGxhdFlUb3AgLSBpbWdTcmMuaGVpZ2h0ICsgMTAgLSBwb3dlclVwc1tpXS5kaXN0QWJvdmVQbGF0O1xyXG5cdFx0XHRjb25zdCBvYmplY3QgPSBgJHtwb3dlclVwc1tpXS5uYW1lfV8ke3BsYXRJbmRleH1fJHtwb3dlclVwc1tpXS54UGVyY0Fsb25nUGxhdH1gO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuY29sbGVjdGVkUG93ZXJVcHMuaW5jbHVkZXMob2JqZWN0KSkge1xyXG5cdFx0XHRcdGlmIChpbWdYICsgaW1nU3JjLndpZHRoIDwgMCkgdGhpcy5jb2xsZWN0ZWRQb3dlclVwcy5zaGlmdCgpO1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nU3JjLCBpbWdYLCBpbWdZLCBpbWdTcmMud2lkdGgsIGltZ1NyYy5oZWlnaHQpO1xyXG5cclxuXHRcdFx0Y29uc3QgY29sbGlkZWRXaXRoUG93ZXJVcCA9IHRoaXMuY29sbGlzaW9ucy5wb3dlclVwQ29sbGlzaW9uKHtcclxuXHRcdFx0XHR4MTogdGhpcy5wbGF5ZXIueCxcclxuXHRcdFx0XHR5MTogdGhpcy5wbGF5ZXIueSxcclxuXHRcdFx0XHR4MjogaW1nWCxcclxuXHRcdFx0XHR5MjogaW1nWSxcclxuXHRcdFx0XHR3MTogdGhpcy5wbGF5ZXIudyxcclxuXHRcdFx0XHRoMTogdGhpcy5wbGF5ZXIuaCxcclxuXHRcdFx0XHR3MjogdGhpcy5pbWFnZXNbcG93ZXJVcHNbaV0ubmFtZV0ud2lkdGgsXHJcblx0XHRcdFx0aDI6XHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1twb3dlclVwc1tpXS5uYW1lXS5oZWlnaHQgfHxcclxuXHRcdFx0XHRcdHRoaXMud29ybGQuaGVpZ2h0IC0gKHBsYXRZVG9wIC0gdGhpcy5pbWFnZXNbcG93ZXJVcHNbaV0ubmFtZV0uaGVpZ2h0ICsgMTApLFxyXG5cdFx0XHRcdG1hcmdpbjogMCxcclxuXHRcdFx0XHRvYmplY3Q6IG9iamVjdCxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoY29sbGlkZWRXaXRoUG93ZXJVcCkge1xyXG5cdFx0XHRcdHRoaXMuY29sbGVjdGVkUG93ZXJVcHMucHVzaChvYmplY3QpO1xyXG5cdFx0XHRcdHRoaXMuaHVkLmluY3JlYXNlSGVhbHRoKDIwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgSHVkIGZyb20gJy4vaHVkJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IENvbnRleHQsIElDb2xsaXNpb25BcmdzIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaXNpb25zIHtcclxuXHRwcml2YXRlIGN0eDogQ29udGV4dDtcclxuXHRwcml2YXRlIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHRwcml2YXRlIHBsYXllcjogUGxheWVyO1xyXG5cdHByaXZhdGUgaHVkOiBIdWQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGN0eDogQ29udGV4dCwgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50LCBwbGF5ZXI6IFBsYXllciwgaHVkOiBIdWQpIHtcclxuXHRcdHRoaXMuY3R4ID0gY3R4O1xyXG5cdFx0dGhpcy53b3JsZCA9IHdvcmxkO1xyXG5cdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblx0XHR0aGlzLmh1ZCA9IGh1ZDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjaGVja0ZvclBsYXRDb2xsaXNpb24oeyB4MSwgeTEsIHgyLCB5MiwgdzEsIGgxLCB3MiwgaDIsIG1hcmdpbiwgb2JqZWN0IH06IElDb2xsaXNpb25BcmdzKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBwbGF5ZXJSaWdodE9mUGxhdExlZnQgPSB4MSArIHcxID49IHgyICsgbWFyZ2luOyAvLyBQbGF5ZXIgcmlnaHQgc2lkZSB0byByaWdodCBvZiBwbGF0IGxlZnRcclxuXHRcdGNvbnN0IHBsYXllckxlZnRPZlBsYXRSaWdodCA9IHgxIDw9IHgyICsgdzI7IC8vIFBsYXllciBsZWZ0IHNpZGUgdG8gbGVmdCBvZiBwbGF0IHJpZ2h0XHJcblx0XHRjb25zdCBwbGF5ZXJBYm92ZVBsYXRCb3QgPSB5MSA8PSB5MiArIGgyOyAvL1BsYXllciB0b3AgYWJvdmUgcGxhdCBib3R0b21cclxuXHRcdGNvbnN0IHBsYXllckJlbG93UGxhdFRvcCA9IHkxICsgdGhpcy5wbGF5ZXIuaCA+IHkyICsgKHRoaXMucGxheWVyLmlzSW5BaXIgPyBtYXJnaW4gOiAwKTsgLy8gUGxheWVyIGJvdHRvbSBhYm92ZSBwbGF0IHRvcFxyXG5cclxuXHRcdGlmIChwbGF5ZXJSaWdodE9mUGxhdExlZnQgJiYgcGxheWVyTGVmdE9mUGxhdFJpZ2h0ICYmIHBsYXllckFib3ZlUGxhdEJvdCkge1xyXG5cdFx0XHQvLyBMYW5kIGlmIG5lZ2F0aXZlIHZlbG9jaXR5IGFuZCB3aXRoaW4gMjBweCBvZiBwbGF0Zm9ybVxyXG5cdFx0XHRpZiAodGhpcy5wbGF5ZXIueVZlbG9jaXR5IDw9IDAgJiYgTWF0aC5hYnMoeTIgLSAoeTEgKyBoMSkpIDwgMjApIHtcclxuXHRcdFx0XHR0aGlzLnBsYXllci5sYW5kKHkyKTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIGlmIChwbGF5ZXJCZWxvd1BsYXRUb3ApIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnUGxhdGZvcm0gQ29sbGlzaW9uIScpO1xyXG5cdFx0XHRcdHRoaXMuaHVkLmhlYWx0aCA9IDA7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnBsYXllci55ICsgdGhpcy5wbGF5ZXIuaCA+IHRoaXMud29ybGQuaGVpZ2h0KSB7XHJcblx0XHRcdHRoaXMuaHVkLmhlYWx0aCA9IDA7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdPdXQgT2YgQm91bmRzIENvbGxpc2lvbiEnKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hlY2tGb3JDb2xsaXNpb24oeyB4MSwgeTEsIHgyLCB5MiwgdzEsIGgxLCB3MiwgaDIsIG1hcmdpbiwgb2JqZWN0IH06IElDb2xsaXNpb25BcmdzKSB7XHJcblx0XHRpZiAoXHJcblx0XHRcdHgxICsgdzEgPj0geDIgKyBtYXJnaW4gJiYgLy8gQ2hlY2sgcGxheWVyIHJpZ2h0IGNvbGxpc2lvblxyXG5cdFx0XHR4MSA8PSB4MiArIHcyICYmIC8vIENoZWNrIHBsYXllciBsZWZ0IGNvbGxpc2lvblxyXG5cdFx0XHR5MSA8PSB5MiArIGgyICYmIC8vIENoZWNrIHBsYXllciB0b3AgY29sbGlzaW9uXHJcblx0XHRcdHkxICsgaDEgPiB5MiAvLyBDaGVjayBwbGF5ZXIgYm90dG9tIGNvbGxpc2lvblxyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMuaHVkLnJlZHVjZUhlYWx0aChvYmplY3QsIDMwKTtcclxuXHRcdFx0dGhpcy5wbGF5ZXIuY2hhbmdlVG9EYW1hZ2VkSW1ncyhvYmplY3QpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHBvd2VyVXBDb2xsaXNpb24oeyB4MSwgeTEsIHgyLCB5MiwgdzEsIGgxLCB3MiwgaDIsIG1hcmdpbiwgb2JqZWN0IH06IElDb2xsaXNpb25BcmdzKTogYm9vbGVhbiB7XHJcblx0XHRpZiAoXHJcblx0XHRcdHgxICsgdzEgPj0geDIgKyBtYXJnaW4gJiYgLy8gQ2hlY2sgcGxheWVyIHJpZ2h0IGNvbGxpc2lvblxyXG5cdFx0XHR4MSA8PSB4MiArIHcyICYmIC8vIENoZWNrIHBsYXllciBsZWZ0IGNvbGxpc2lvblxyXG5cdFx0XHR5MSA8PSB5MiArIGgyICYmIC8vIENoZWNrIHBsYXllciB0b3AgY29sbGlzaW9uXHJcblx0XHRcdHkxICsgaDEgPiB5MiAvLyBDaGVjayBwbGF5ZXIgYm90dG9tIGNvbGxpc2lvblxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi4vdXRpbHMvdGhyb3R0bGUnO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdWQge1xyXG5cdHByaXZhdGUgY3R4OiBDb250ZXh0O1xyXG5cdHByaXZhdGUgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cdHB1YmxpYyBoZWFsdGg6IG51bWJlcjtcclxuXHRwcml2YXRlIGxhc3RPYmplY3RIaXQ6IGFueTtcclxuXHRwdWJsaWMgZHJhd2luZ0xldmVsVGV4dDogYm9vbGVhbjtcclxuXHRwcml2YXRlIGxldmVsVGV4dE9wYWNpdHk6IG51bWJlcjtcclxuXHRwcml2YXRlIGxldmVsVGV4dE9wYWNpdHlJbmM6IG51bWJlcjtcclxuXHRwdWJsaWMgY3VycmVudExldmVsOiBudW1iZXI7XHJcblx0cHVibGljIGZwczogbnVtYmVyO1xyXG5cdHB1YmxpYyBmcHNFbmFibGVkOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjdHg6IENvbnRleHQsIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG5cdFx0dGhpcy5jdHggPSBjdHg7XHJcblx0XHR0aGlzLndvcmxkID0gd29ybGQ7XHJcblx0XHR0aGlzLmhlYWx0aCA9IDEwMDtcclxuXHRcdHRoaXMubGFzdE9iamVjdEhpdCA9ICcnO1xyXG5cdFx0dGhpcy5kcmF3aW5nTGV2ZWxUZXh0ID0gZmFsc2U7XHJcblx0XHR0aGlzLmxldmVsVGV4dE9wYWNpdHkgPSAwO1xyXG5cdFx0dGhpcy5sZXZlbFRleHRPcGFjaXR5SW5jID0gMC4wMjtcclxuXHRcdHRoaXMuY3VycmVudExldmVsID0gMDtcclxuXHRcdHRoaXMuZnBzID0gMDtcclxuXHRcdHRoaXMuZnBzRW5hYmxlZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdGcHMoKSB7XHJcblx0XHRpZiAoIXRoaXMuZnBzRW5hYmxlZCkgcmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY3R4LmZvbnQgPSAnMjBweCBBcmlhbCc7XHJcblx0XHR0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAyNTUsIDAsIDEpJztcclxuXHRcdHRoaXMuY3R4LnRleHRBbGlnbiA9ICdyaWdodCc7XHJcblx0XHR0aGlzLmN0eC5maWxsVGV4dChgJHt0aGlzLmZwc30gRlBTYCwgdGhpcy53b3JsZC53aWR0aCAtIDIwLCAzMCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhd0p1bXBDaGFyZ2UocGVyY2VudENoYXJnZWQ6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IHcgPSA4O1xyXG5cdFx0Y29uc3QgaCA9IDYwO1xyXG5cdFx0Y29uc3QgeE9mZnNldCA9IDA7XHJcblx0XHRjb25zdCB5T2Zmc2V0ID0gLTIwO1xyXG5cdFx0dGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiKDAsIDAsIDApJztcclxuXHRcdHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2IoNywgMTkxLCA0KSc7XHJcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdHRoaXMuY3R4LnJlY3QoeCArIHhPZmZzZXQgLSAxLCB5ICsgeU9mZnNldCAtIDEsIHcgKyAyLCBoICsgMik7XHJcblx0XHR0aGlzLmN0eC5zdHJva2UoKTtcclxuXHRcdHRoaXMuY3R4LmZpbGxSZWN0KHggKyB4T2Zmc2V0LCB5ICsgeU9mZnNldCArIGgsIHcsIC1oICogcGVyY2VudENoYXJnZWQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlZHVjZUhlYWx0aChvYmplY3Q6IHN0cmluZywgYW10OiBudW1iZXIpIHtcclxuXHRcdGlmICh0aGlzLmxhc3RPYmplY3RIaXQgPT09IG9iamVjdCkgcmV0dXJuO1xyXG5cdFx0aWYgKHRoaXMuaGVhbHRoIC0gYW10IDw9IDApIHRoaXMuaGVhbHRoID0gMDtcclxuXHRcdGVsc2UgdGhpcy5oZWFsdGggLT0gYW10O1xyXG5cclxuXHRcdHRoaXMubGFzdE9iamVjdEhpdCA9IG9iamVjdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbmNyZWFzZUhlYWx0aChhbXQ6IG51bWJlcikge1xyXG5cdFx0aWYgKHRoaXMuaGVhbHRoICsgYW10ID49IDEwMCkgdGhpcy5oZWFsdGggPSAxMDA7XHJcblx0XHRlbHNlIHRoaXMuaGVhbHRoICs9IGFtdDtcclxuXHR9XHJcblxyXG5cdC8vIHByaXZhdGUgZHJhd0hlYXJ0KHNlY3Rpb25XOiBudW1iZXIsIGhlYXJ0SW5kZXg6IG51bWJlciwgc2VjdGlvblN0YXJ0WDogbnVtYmVyKSB7XHJcblx0Ly8gXHRjb25zdCB4U2hpZnRJbnNpZGVCb3ggPSA4O1xyXG5cdC8vIFx0Y29uc3QgaGVhcnRDb250YWluZXJXID0gNTA7XHJcblx0Ly8gXHRjb25zdCB4b2ZmID1cclxuXHQvLyBcdFx0KGhlYXJ0SW5kZXggPT09IDAgPyAwIDogaGVhcnRJbmRleCA9PT0gMSA/IGhlYXJ0Q29udGFpbmVyVyA6IGhlYXJ0Q29udGFpbmVyVyAqIDIpICtcclxuXHQvLyBcdFx0c2VjdGlvblN0YXJ0WCArXHJcblx0Ly8gXHRcdHhTaGlmdEluc2lkZUJveDtcclxuXHQvLyBcdGNvbnN0IHlvZmYgPSAxNDtcclxuXHQvLyBcdGNvbnN0IHNjYWxlID0gMC4wNjtcclxuXHJcblx0Ly8gXHR0aGlzLmN0eC5maWxsU3R5bGUgPSAncmVkJztcclxuXHQvLyBcdHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LCAwLCAwLCAwLjYpJztcclxuXHQvLyBcdHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XHJcblxyXG5cdC8vIFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0Ly8gXHR0aGlzLmN0eC5tb3ZlVG8oc2NhbGUgKiAzNzIgKyB4b2ZmLCBzY2FsZSAqIDI0MCArIHlvZmYpO1xyXG5cdC8vIFx0dGhpcy5jdHguYmV6aWVyQ3VydmVUbyhcclxuXHQvLyBcdFx0c2NhbGUgKiA0ODcgKyB4b2ZmLFxyXG5cdC8vIFx0XHRzY2FsZSAqIDExNyArIHlvZmYsXHJcblx0Ly8gXHRcdHNjYWxlICogNjQyICsgeG9mZixcclxuXHQvLyBcdFx0c2NhbGUgKiAyNjIgKyB5b2ZmLFxyXG5cdC8vIFx0XHRzY2FsZSAqIDU1MSArIHhvZmYsXHJcblx0Ly8gXHRcdHNjYWxlICogMzYzICsgeW9mZlxyXG5cdC8vIFx0KTtcclxuXHQvLyBcdHRoaXMuY3R4LmJlemllckN1cnZlVG8oXHJcblx0Ly8gXHRcdHNjYWxlICogNTQxICsgeG9mZixcclxuXHQvLyBcdFx0c2NhbGUgKiAzNzQgKyB5b2ZmLFxyXG5cdC8vIFx0XHRzY2FsZSAqIDM5OCArIHhvZmYsXHJcblx0Ly8gXHRcdHNjYWxlICogNTUwICsgeW9mZixcclxuXHQvLyBcdFx0c2NhbGUgKiAzODUgKyB4b2ZmLFxyXG5cdC8vIFx0XHRzY2FsZSAqIDU5NCArIHlvZmZcclxuXHQvLyBcdCk7XHJcblx0Ly8gXHR0aGlzLmN0eC5iZXppZXJDdXJ2ZVRvKFxyXG5cdC8vIFx0XHRzY2FsZSAqIDM3MSArIHhvZmYsXHJcblx0Ly8gXHRcdHNjYWxlICogNTUwICsgeW9mZixcclxuXHQvLyBcdFx0c2NhbGUgKiAyMzMgKyB4b2ZmLFxyXG5cdC8vIFx0XHRzY2FsZSAqIDM3OSArIHlvZmYsXHJcblx0Ly8gXHRcdHNjYWxlICogMjIyICsgeG9mZixcclxuXHQvLyBcdFx0c2NhbGUgKiAzNjcgKyB5b2ZmXHJcblx0Ly8gXHQpO1xyXG5cdC8vIFx0dGhpcy5jdHguYmV6aWVyQ3VydmVUbyhcclxuXHQvLyBcdFx0c2NhbGUgKiAxMjEgKyB4b2ZmLFxyXG5cdC8vIFx0XHRzY2FsZSAqIDI1NyArIHlvZmYsXHJcblx0Ly8gXHRcdHNjYWxlICogMjk0ICsgeG9mZixcclxuXHQvLyBcdFx0c2NhbGUgKiAxMjUgKyB5b2ZmLFxyXG5cdC8vIFx0XHRzY2FsZSAqIDM4NSArIHhvZmYsXHJcblx0Ly8gXHRcdHNjYWxlICogMjQ2ICsgeW9mZlxyXG5cdC8vIFx0KTtcclxuXHJcblx0Ly8gXHR0aGlzLmN0eC5zYXZlKCk7XHJcblx0Ly8gXHR0aGlzLmN0eC5jbGlwKCk7XHJcblx0Ly8gXHR0aGlzLmN0eC5saW5lV2lkdGggKj0gMjtcclxuXHQvLyBcdHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cdC8vIFx0dGhpcy5jdHgucmVzdG9yZSgpO1xyXG5cclxuXHQvLyBcdGlmIChoZWFydEluZGV4ICsgMSA8PSB0aGlzLmxpdmVzKSB0aGlzLmN0eC5maWxsKCk7XHJcblx0Ly8gfVxyXG5cclxuXHQvLyBwcml2YXRlIGRyYXdMaXZlcygpIHtcclxuXHQvLyBcdGNvbnN0IHNlY3Rpb25TdGFydFggPSAzMDtcclxuXHQvLyBcdGNvbnN0IHNlY3Rpb25TdGFydFkgPSAxMTtcclxuXHQvLyBcdGNvbnN0IHNlY3Rpb25XID0gMTYwO1xyXG5cdC8vIFx0Y29uc3Qgc2VjdGlvbkggPSA1MDtcclxuXHQvLyBcdHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuNSknO1xyXG5cdC8vIFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0Ly8gXHR0aGlzLmN0eC5yb3VuZFJlY3Qoc2VjdGlvblN0YXJ0WCwgc2VjdGlvblN0YXJ0WSwgc2VjdGlvblcsIHNlY3Rpb25ILCAxMCk7XHJcblx0Ly8gXHR0aGlzLmN0eC5maWxsKCk7XHJcblxyXG5cdC8vIFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuXHQvLyBcdFx0dGhpcy5kcmF3SGVhcnQoc2VjdGlvblcsIGksIHNlY3Rpb25TdGFydFgpO1xyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3SGVhbHRoKCkge1xyXG5cdFx0Y29uc3Qgc2VjdGlvblN0YXJ0WCA9IDMwO1xyXG5cdFx0Y29uc3Qgc2VjdGlvblN0YXJ0WSA9IDExO1xyXG5cdFx0Y29uc3Qgc2VjdGlvblcgPSAxNjA7XHJcblx0XHRjb25zdCBzZWN0aW9uSCA9IDEyO1xyXG5cclxuXHRcdHRoaXMuY3R4LnNoYWRvd09mZnNldFggPSAzO1xyXG5cdFx0dGhpcy5jdHguc2hhZG93T2Zmc2V0WSA9IDM7XHJcblx0XHR0aGlzLmN0eC5zaGFkb3dDb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDAuNSknO1xyXG5cdFx0dGhpcy5jdHguc2hhZG93Qmx1ciA9IDQ7XHJcblxyXG5cdFx0dGhpcy5jdHgubGluZVdpZHRoID0gMjtcclxuXHRcdHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMSknO1xyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHR0aGlzLmN0eC5yb3VuZFJlY3Qoc2VjdGlvblN0YXJ0WCAtIDEsIHNlY3Rpb25TdGFydFkgLSAxLCBzZWN0aW9uVyArIDIsIHNlY3Rpb25IICsgMiwgMTApO1xyXG5cdFx0dGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG5cdFx0dGhpcy5jdHguZmlsbFN0eWxlID1cclxuXHRcdFx0dGhpcy5oZWFsdGggPj0gOTBcclxuXHRcdFx0XHQ/ICdyZ2JhKDAsIDE3MCwgMCwgMSknXHJcblx0XHRcdFx0OiB0aGlzLmhlYWx0aCA+PSA1MCAmJiB0aGlzLmhlYWx0aCA8IDkwXHJcblx0XHRcdFx0PyAncmdiYSgxNzAsIDE3MCwgMCwgMSknXHJcblx0XHRcdFx0OiAncmdiYSgyNTUsIDAsIDAsIDEpJztcclxuXHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0dGhpcy5jdHgucm91bmRSZWN0KHNlY3Rpb25TdGFydFgsIHNlY3Rpb25TdGFydFksIHNlY3Rpb25XICogKHRoaXMuaGVhbHRoIC8gMTAwKSwgc2VjdGlvbkgsIDEwKTtcclxuXHRcdHRoaXMuY3R4LmZpbGwoKTtcclxuXHJcblx0XHR0aGlzLmN0eC5zaGFkb3dPZmZzZXRYID0gMDtcclxuXHRcdHRoaXMuY3R4LnNoYWRvd09mZnNldFkgPSAwO1xyXG5cdFx0dGhpcy5jdHguc2hhZG93Qmx1ciA9IDA7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdOZXh0TGV2ZWxUZXh0KCkge1xyXG5cdFx0dGhpcy5jdHguZm9udCA9ICc3MHB4IEFyaWFsJztcclxuXHRcdHRoaXMuY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDAsIDAsIDAsICR7dGhpcy5sZXZlbFRleHRPcGFjaXR5fSlgO1xyXG5cdFx0dGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcblx0XHR0aGlzLmN0eC5maWxsVGV4dChgTGV2ZWwgJHt0aGlzLmN1cnJlbnRMZXZlbCArIDF9YCwgdGhpcy53b3JsZC53aWR0aCAvIDIsIHRoaXMud29ybGQuaGVpZ2h0IC8gMik7XHJcblx0XHR0aGlzLmxldmVsVGV4dE9wYWNpdHkgKz0gdGhpcy5sZXZlbFRleHRPcGFjaXR5SW5jO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGJlZ2luTGV2ZWxUZXh0QW5pbWF0aW9uKCkge1xyXG5cdFx0dGhpcy5kcmF3aW5nTGV2ZWxUZXh0ID0gdHJ1ZTtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmxldmVsVGV4dE9wYWNpdHlJbmMgKj0gLTE7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZHJhd2luZ0xldmVsVGV4dCA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMubGV2ZWxUZXh0T3BhY2l0eUluYyAqPSAtMTtcclxuXHRcdFx0fSwgMTUwMCk7XHJcblx0XHR9LCAxNTAwKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkcmF3KCkge1xyXG5cdFx0dGhpcy5kcmF3SGVhbHRoKCk7XHJcblx0XHR0aGlzLmRyYXdGcHMoKTtcclxuXHJcblx0XHRpZiAodGhpcy5kcmF3aW5nTGV2ZWxUZXh0KSB0aGlzLmRyYXdOZXh0TGV2ZWxUZXh0KCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBnYW1lT2JqZWN0IGZyb20gJy4uL3B1YmxpYy9nYW1lT2JqZWN0JztcclxuaW1wb3J0IEFiaWxpdGllcyBmcm9tICcuL2FiaWxpdGllcyc7XHJcbmltcG9ydCBDb2xsaXNpb25zIGZyb20gJy4vY29sbGlzaW9ucyc7XHJcbmltcG9ydCBIdWQgZnJvbSAnLi9odWQnO1xyXG5pbXBvcnQgUGxhdGZvcm1zIGZyb20gJy4vcGxhdGZvcm1zJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcblxyXG5jb25zdCB3b3JsZCA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ybGQnKTtcclxuY29uc3QgY3R4ID0gPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRD53b3JsZC5nZXRDb250ZXh0KCcyZCcsIHsgYWxwaGE6IGZhbHNlIH0pO1xyXG5cclxuY29uc3Qgc3RhcnRCdG4gPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0QnRuJyk7XHJcblxyXG4vLyBGb3IgZ2FtZSBsb29wXHJcbmxldCByZXF1ZXN0SWQ6IG51bWJlciB8IG51bGwsIG5vdzogbnVtYmVyLCB0aGVuOiBudW1iZXIsIGVsYXBzZWQ6IG51bWJlciwgZnBzSW50ZXJ2YWw6IG51bWJlcjtcclxuXHJcbmxldCBmcmFtZVJhdGUgPSA2MDtcclxubGV0IGZyYW1lcyA9IDA7XHJcbmxldCBwYXVzZWQgPSBmYWxzZTtcclxubGV0IGxldmVsc1N0YXJ0ZWQgPSAtMTtcclxuXHJcbi8vIENsYXNzZXNcclxubGV0IHBsYXRmb3JtczogUGxhdGZvcm1zLCBwbGF5ZXI6IFBsYXllciwgaHVkOiBIdWQsIGNvbGxpc2lvbnM6IENvbGxpc2lvbnMsIGFiaWxpdGllczogQWJpbGl0aWVzO1xyXG5cclxuY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcclxuXHRpZiAocmVxdWVzdElkKSBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SWQpO1xyXG5cdHJlcXVlc3RJZCA9IG51bGw7XHJcblx0Ly8gcHJlcEdhbWUoKTtcclxuXHQvLyBzdGFydEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHQvLyBzdGFydEJ0bi5pbm5lckhUTUwgPSAnUGxheSBBZ2Fpbic7XHJcblx0Ly8gbGV2ZWxzU3RhcnRlZCA9IC0xO1xyXG59O1xyXG5cclxuY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XHJcblx0cmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcclxuXHJcblx0ZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnJhbWVSYXRlO1xyXG5cdG5vdyA9IERhdGUubm93KCk7XHJcblx0ZWxhcHNlZCA9IG5vdyAtICh0aGVuIHx8IDApO1xyXG5cclxuXHRpZiAoZWxhcHNlZCA+IGZwc0ludGVydmFsKSB7XHJcblx0XHRpZiAoZnJhbWVzID09PSAwKVxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRodWQuZnBzID0gZnJhbWVzO1xyXG5cdFx0XHRcdGZyYW1lcyA9IDA7XHJcblx0XHRcdH0sIDEwMDApO1xyXG5cdFx0ZnJhbWVzICs9IDE7XHJcblx0XHR0aGVuID0gbm93IC0gKGVsYXBzZWQgJSBmcHNJbnRlcnZhbCk7XHJcblxyXG5cdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCB3b3JsZC53aWR0aCwgd29ybGQuaGVpZ2h0KTtcclxuXHRcdGlmICghcGF1c2VkKSB7XHJcblx0XHRcdHBsYXRmb3Jtcy5tb3ZlKCk7XHJcblx0XHRcdHBsYXllci5zcGVlZCA9IGdhbWVPYmplY3QubGV2ZWxzW3BsYXRmb3Jtcy5jdXJyZW50TGV2ZWxdLnNwZWVkO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cGxheWVyLnNwZWVkID0gMDtcclxuXHRcdH1cclxuXHRcdHBsYXRmb3Jtcy5kcmF3KCk7XHJcblx0XHRwbGF5ZXIuZHJhdygpO1xyXG5cdFx0aHVkLmRyYXcoKTtcclxuXHJcblx0XHQvLyBpZiAocGxhdGZvcm1zLnBsYXRzVmlzaWJsZT8uWzBdPy5pbmRleCA9PT0gMCAmJiBwbGF0Zm9ybXMuY3VycmVudExldmVsID4gbGV2ZWxzU3RhcnRlZCkge1xyXG5cdFx0Ly8gXHRsZXZlbHNTdGFydGVkID0gcGxhdGZvcm1zLmN1cnJlbnRMZXZlbDtcclxuXHRcdC8vIH1cclxuXHJcblx0XHRpZiAoaHVkLmhlYWx0aCA9PT0gMCkgZW5kR2FtZSgpO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuXHRnYW1lTG9vcCgpO1xyXG59O1xyXG5cclxuY29uc3QgcHJlcEdhbWUgPSBhc3luYyAoKSA9PiB7XHJcblx0T2JqZWN0LmZyZWV6ZShnYW1lT2JqZWN0KTtcclxuXHJcblx0aHVkID0gbmV3IEh1ZChjdHgsIHdvcmxkKTtcclxuXHRwbGF5ZXIgPSBuZXcgUGxheWVyKGN0eCwgd29ybGQsIGh1ZCk7XHJcblx0Y29sbGlzaW9ucyA9IG5ldyBDb2xsaXNpb25zKGN0eCwgd29ybGQsIHBsYXllciwgaHVkKTtcclxuXHRhYmlsaXRpZXMgPSBuZXcgQWJpbGl0aWVzKGN0eCwgd29ybGQsIGh1ZCwgY29sbGlzaW9ucywgcGxheWVyKTtcclxuXHRwbGF0Zm9ybXMgPSBuZXcgUGxhdGZvcm1zKGN0eCwgd29ybGQsIHBsYXllciwgaHVkLCBjb2xsaXNpb25zLCBhYmlsaXRpZXMsIGdhbWVPYmplY3QpO1xyXG5cclxuXHRhd2FpdCBwbGF0Zm9ybXMuc2V0VXAoKTtcclxuXHRhd2FpdCBwbGF5ZXIuc2V0VXAoKTtcclxuXHRhd2FpdCBhYmlsaXRpZXMuc2V0VXAoKTtcclxuXHJcblx0c3RhcnRHYW1lKCk7XHJcblx0c3RhcnRCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufTtcclxuXHJcbnByZXBHYW1lKCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XHJcblx0c3dpdGNoIChlLmNvZGUpIHtcclxuXHRcdGNhc2UgJ1NwYWNlJzpcclxuXHRcdFx0aWYgKHJlcXVlc3RJZCkge1xyXG5cdFx0XHRcdGlmIChwYXVzZWQpIHtcclxuXHRcdFx0XHRcdHBhdXNlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoIXBsYXllci5sb2FkaW5nSnVtcCkgcGxheWVyLmxvYWRpbmdKdW1wID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XHJcblx0c3dpdGNoIChlLmNvZGUpIHtcclxuXHRcdGNhc2UgJ0VzY2FwZSc6XHJcblx0XHRcdGlmIChwYXVzZWQpIHtcclxuXHRcdFx0XHRwYXVzZWQgPSBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwYXVzZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRjYXNlICdTcGFjZSc6XHJcblx0XHRcdHBsYXllci5qdW1wKCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufSk7XHJcblxyXG5zdGFydEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG5cdHN0YXJ0R2FtZSgpO1xyXG5cdHN0YXJ0QnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn07XHJcbiIsImltcG9ydCBBYmlsaXRpZXMgZnJvbSAnLi9hYmlsaXRpZXMnO1xyXG5pbXBvcnQgQ29sbGlzaW9ucyBmcm9tICcuL2NvbGxpc2lvbnMnO1xyXG5pbXBvcnQgSHVkIGZyb20gJy4vaHVkJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IENvbnRleHQsIElHYW1lT2JqZWN0LCBJTGV2ZWwsIElQbGF0T2JqZWN0LCBJUGxhdGZvcm0sIElQb3dlclVwLCBJVmlzaWJsZVBsYXQgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtcyB7XHJcblx0cHJpdmF0ZSBjdHg6IENvbnRleHQ7XHJcblx0cHJpdmF0ZSB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblx0cHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcclxuXHRwcml2YXRlIGh1ZDogSHVkO1xyXG5cdHByaXZhdGUgY29sbGlzaW9uczogQ29sbGlzaW9ucztcclxuXHRwcml2YXRlIGFiaWxpdGllczogQWJpbGl0aWVzO1xyXG5cdHByaXZhdGUgZ2FtZU9iamVjdDogSUdhbWVPYmplY3Q7XHJcblx0cHVibGljIGN1cnJlbnRMZXZlbDogbnVtYmVyO1xyXG5cdHB1YmxpYyBwbGF0c1Zpc2libGU6IElWaXNpYmxlUGxhdFtdO1xyXG5cdHByaXZhdGUgYmFja2dyb3VuZFg6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhY2tncm91bmRYMjogbnVtYmVyO1xyXG5cdHByaXZhdGUgYmdJbWdZT2Zmc2V0OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBiZ0ltZ1lPZmZzZXQyOiBudW1iZXI7XHJcblx0cHVibGljIGdhbWVPdmVyOiBib29sZWFuO1xyXG5cdHByaXZhdGUgY29sbGlzaW9uTWFyZ2luOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBpbWFnZVBhdGhzOiBzdHJpbmdbXTtcclxuXHRwcml2YXRlIGltYWdlczogYW55O1xyXG5cdHByaXZhdGUgYmdJbWcxOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBiZ0ltZzI6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRjdHg6IENvbnRleHQsXHJcblx0XHR3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQsXHJcblx0XHRwbGF5ZXI6IFBsYXllcixcclxuXHRcdGh1ZDogSHVkLFxyXG5cdFx0Y29sbGlzaW9uczogQ29sbGlzaW9ucyxcclxuXHRcdGFiaWxpdGllczogQWJpbGl0aWVzLFxyXG5cdFx0Z2FtZU9iamVjdDogYW55XHJcblx0KSB7XHJcblx0XHR0aGlzLmN0eCA9IGN0eDtcclxuXHRcdHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cdFx0dGhpcy5odWQgPSBodWQ7XHJcblx0XHR0aGlzLmNvbGxpc2lvbnMgPSBjb2xsaXNpb25zO1xyXG5cdFx0dGhpcy5hYmlsaXRpZXMgPSBhYmlsaXRpZXM7XHJcblx0XHR0aGlzLmdhbWVPYmplY3QgPSBnYW1lT2JqZWN0O1xyXG5cdFx0dGhpcy5jdXJyZW50TGV2ZWwgPSAwO1xyXG5cdFx0dGhpcy5wbGF0c1Zpc2libGUgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbmRleDogMCxcclxuXHRcdFx0XHR4OiAwLFxyXG5cdFx0XHRcdGxldmVsOiAwLFxyXG5cdFx0XHR9LFxyXG5cdFx0XTtcclxuXHRcdHRoaXMuYmFja2dyb3VuZFggPSAwO1xyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kWDIgPSB0aGlzLndvcmxkLndpZHRoO1xyXG5cdFx0dGhpcy5iZ0ltZ1lPZmZzZXQgPSAwO1xyXG5cdFx0dGhpcy5iZ0ltZ1lPZmZzZXQyID0gMDtcclxuXHRcdHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcclxuXHRcdHRoaXMuY29sbGlzaW9uTWFyZ2luID0gMzA7XHJcblx0XHR0aGlzLmltYWdlUGF0aHMgPSBbXHJcblx0XHRcdCcuLi9wdWJsaWMvYmdMZXZlbDEucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy9iZ0xldmVsMi5wbmcnLFxyXG5cdFx0XHQvLyBQbGF0Zm9ybSBUZXh0dXJlc1xyXG5cdFx0XHQnLi4vcHVibGljL3dvb2RQbGF0LnBuZycsXHJcblx0XHRcdCcuLi9wdWJsaWMvZGlydFBsYXQucG5nJyxcclxuXHRcdFx0Ly8gRGVjb3JcclxuXHRcdFx0Jy4uL3B1YmxpYy9zdGFydFNpZ24ucG5nJyxcclxuXHRcdFx0Ly8gT2JzdGljbGVzXHJcblx0XHRcdCcuLi9wdWJsaWMvcm9jazEucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy9yb2NrMi5wbmcnLFxyXG5cdFx0XHQnLi4vcHVibGljL3JvY2szLnBuZycsXHJcblx0XHRdO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSB7fTtcclxuXHRcdHRoaXMuYmdJbWcxID0gJyc7XHJcblx0XHR0aGlzLmJnSW1nMiA9ICcnO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIHNldFVwKCkge1xyXG5cdFx0Y29uc3QgcHJlbG9hZEltYWdlcyA9ICgpID0+IHtcclxuXHRcdFx0Y29uc3QgcHJvbWlzZXMgPSB0aGlzLmltYWdlUGF0aHMubWFwKChwYXRoOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IHBhdGguc3BsaXQoJy8nKS5wb3AoKT8uc3BsaXQoJy4nKVswXTtcclxuXHRcdFx0XHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcblxyXG5cdFx0XHRcdFx0aW1hZ2Uuc3JjID0gcGF0aDtcclxuXHRcdFx0XHRcdGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZShbbmFtZSwgaW1hZ2VdKTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRpbWFnZS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KGBJbWFnZSBmYWlsZWQgdG8gbG9hZDogJHtwYXRofWApO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgaW1nQXJyYXl0ZW1wOiBhbnlbXSA9IGF3YWl0IHByZWxvYWRJbWFnZXMoKTtcclxuXHRcdHRoaXMuaW1hZ2VzID0gT2JqZWN0LmZyb21FbnRyaWVzKGltZ0FycmF5dGVtcCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG5leHRQbGF0Zm9ybSgpIHtcclxuXHRcdGNvbnN0IGxhc3RWaXNpYmxlUGxhdDogSVZpc2libGVQbGF0ID0gdGhpcy5wbGF0c1Zpc2libGVbdGhpcy5wbGF0c1Zpc2libGUubGVuZ3RoIC0gMV07XHJcblx0XHRjb25zdCBwbGF0c1JlZjogSVBsYXRmb3JtW10gPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXS5wbGF0Zm9ybXM7XHJcblx0XHRjb25zdCBsYXN0UGxhdFJlZjogSVBsYXRmb3JtID0gcGxhdHNSZWZbbGFzdFZpc2libGVQbGF0LmluZGV4XTtcclxuXHRcdC8vIGNvbnN0IG5leHRQbGF0OiBJUGxhdGZvcm0gPSBwbGF0c1JlZltsYXN0VmlzaWJsZVBsYXQuaW5kZXggKyAxXTtcclxuXHJcblx0XHRpZiAobGFzdFZpc2libGVQbGF0LmluZGV4ID09PSBwbGF0c1JlZi5sZW5ndGggLSAxKSB7XHJcblx0XHRcdHRoaXMuY3VycmVudExldmVsICs9IDE7XHJcblxyXG5cdFx0XHR0aGlzLnBsYXRzVmlzaWJsZS5wdXNoKHtcclxuXHRcdFx0XHRpbmRleDogMCxcclxuXHRcdFx0XHR4OiBsYXN0VmlzaWJsZVBsYXQueCArIGxhc3RQbGF0UmVmLmxlbiArIGxhc3RQbGF0UmVmLmdhcFRvTmV4dCxcclxuXHRcdFx0XHRsZXZlbDogdGhpcy5jdXJyZW50TGV2ZWwsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMucGxhdHNWaXNpYmxlWzBdLnggKyBwbGF0c1JlZlt0aGlzLnBsYXRzVmlzaWJsZVswXS5pbmRleF0ubGVuIDwgMCkgdGhpcy5wbGF0c1Zpc2libGUuc2hpZnQoKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAobGFzdFZpc2libGVQbGF0LmluZGV4ID09PSAwKSB7XHJcblx0XHRcdHRoaXMuaHVkLmN1cnJlbnRMZXZlbCA9IHRoaXMuY3VycmVudExldmVsO1xyXG5cdFx0XHR0aGlzLmh1ZC5iZWdpbkxldmVsVGV4dEFuaW1hdGlvbigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGxhdHNWaXNpYmxlLnB1c2goe1xyXG5cdFx0XHRpbmRleDogbGFzdFZpc2libGVQbGF0LmluZGV4ICsgMSxcclxuXHRcdFx0eDogbGFzdFZpc2libGVQbGF0LnggKyBsYXN0UGxhdFJlZi5sZW4gKyBsYXN0UGxhdFJlZi5nYXBUb05leHQsXHJcblx0XHRcdGxldmVsOiB0aGlzLmN1cnJlbnRMZXZlbCxcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmICh0aGlzLnBsYXRzVmlzaWJsZVswXS54ICsgcGxhdHNSZWZbdGhpcy5wbGF0c1Zpc2libGVbMF0uaW5kZXhdLmxlbiA8IDApIHRoaXMucGxhdHNWaXNpYmxlLnNoaWZ0KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbW92ZSgpIHtcclxuXHRcdGNvbnN0IGxldmVsOiBJTGV2ZWwgPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXTtcclxuXHRcdGNvbnN0IHBsYXRSZWY6IElQbGF0Zm9ybSA9IGxldmVsLnBsYXRmb3Jtc1t0aGlzLnBsYXRzVmlzaWJsZVt0aGlzLnBsYXRzVmlzaWJsZS5sZW5ndGggLSAxXS5pbmRleF07XHJcblxyXG5cdFx0Y29uc3QgbGFzdFBsYXRYID0gdGhpcy5wbGF0c1Zpc2libGVbdGhpcy5wbGF0c1Zpc2libGUubGVuZ3RoIC0gMV0ueDtcclxuXHJcblx0XHRpZiAobGFzdFBsYXRYICsgcGxhdFJlZi5sZW4gPD0gdGhpcy53b3JsZC53aWR0aCkgdGhpcy5uZXh0UGxhdGZvcm0oKTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxhdHNWaXNpYmxlLmxlbmd0aDsgaSsrKSB0aGlzLnBsYXRzVmlzaWJsZVtpXS54IC09IGxldmVsLnNwZWVkO1xyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kWCAtPSBsZXZlbC5zcGVlZCAvIDg7XHJcblx0XHRpZiAodGhpcy5iZ0ltZzIpIHRoaXMuYmFja2dyb3VuZFgyIC09IGxldmVsLnNwZWVkIC8gODtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZHJhd0RlY29yRm9yUGxhdChkZWNvcjogSVBsYXRPYmplY3RbXSwgcGxhdFlUb3A6IG51bWJlciwgcGxhdFg6IG51bWJlciwgcGxhdExlbjogbnVtYmVyKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRlY29yPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpbWdTcmM6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLmltYWdlc1tkZWNvcltpXS5uYW1lXTtcclxuXHRcdFx0Y29uc3QgZGVjb3JYVmFscyA9IGRlY29yW2ldLnhMb2NzT25QbGF0QnlQZXJjO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkZWNvclhWYWxzPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0XHRcdGltZ1NyYyxcclxuXHRcdFx0XHRcdHBsYXRYICsgcGxhdExlbiAqIGRlY29yWFZhbHNbaV0sXHJcblx0XHRcdFx0XHRwbGF0WVRvcCAtIHRoaXMuaW1hZ2VzW2RlY29yW2ldLm5hbWVdLmhlaWdodCArIDEwLFxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbZGVjb3JbaV0ubmFtZV0ud2lkdGgsXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tkZWNvcltpXS5uYW1lXS5oZWlnaHRcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdPYnN0aWNsZU9uUGxhdChcclxuXHRcdG9ic3RpY2xlczogSVBsYXRPYmplY3RbXSxcclxuXHRcdHBsYXRZVG9wOiBudW1iZXIsXHJcblx0XHRwbGF0WDogbnVtYmVyLFxyXG5cdFx0cGxhdExlbjogbnVtYmVyLFxyXG5cdFx0cGxhdEluZGV4OiBudW1iZXJcclxuXHQpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb2JzdGljbGVzPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpbWdTcmM6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV07XHJcblx0XHRcdGNvbnN0IG9ic3RpY2xlWFZhbHMgPSBvYnN0aWNsZXNbaV0ueExvY3NPblBsYXRCeVBlcmM7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG9ic3RpY2xlWFZhbHM/Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRcdFx0aW1nU3JjLFxyXG5cdFx0XHRcdFx0cGxhdFggKyBwbGF0TGVuICogb2JzdGljbGVYVmFsc1tpXSxcclxuXHRcdFx0XHRcdHBsYXRZVG9wIC0gdGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdLmhlaWdodCArIDEwLFxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdLndpZHRoLFxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdLmhlaWdodFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuY29sbGlzaW9ucy5jaGVja0ZvckNvbGxpc2lvbih7XHJcblx0XHRcdFx0XHR4MTogdGhpcy5wbGF5ZXIueCxcclxuXHRcdFx0XHRcdHkxOiB0aGlzLnBsYXllci55LFxyXG5cdFx0XHRcdFx0eDI6IHBsYXRYICsgcGxhdExlbiAqIG9ic3RpY2xlWFZhbHNbaV0sXHJcblx0XHRcdFx0XHR5MjogcGxhdFlUb3AgLSB0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0uaGVpZ2h0ICsgMTAsXHJcblx0XHRcdFx0XHR3MTogdGhpcy5wbGF5ZXIudyxcclxuXHRcdFx0XHRcdGgxOiB0aGlzLnBsYXllci5oLFxyXG5cdFx0XHRcdFx0dzI6IHRoaXMuaW1hZ2VzW29ic3RpY2xlc1tpXS5uYW1lXS53aWR0aCxcclxuXHRcdFx0XHRcdGgyOlxyXG5cdFx0XHRcdFx0XHR0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0uaGVpZ2h0IHx8XHJcblx0XHRcdFx0XHRcdHRoaXMud29ybGQuaGVpZ2h0IC0gKHBsYXRZVG9wIC0gdGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdLmhlaWdodCArIDEwKSxcclxuXHRcdFx0XHRcdG1hcmdpbjogdGhpcy5jb2xsaXNpb25NYXJnaW4sXHJcblx0XHRcdFx0XHRvYmplY3Q6IGAke29ic3RpY2xlc1tpXS5uYW1lfV8ke3BsYXRJbmRleH1fJHtvYnN0aWNsZVhWYWxzW2ldfWAsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZHJhd0JnSW1hZ2UoKSB7XHJcblx0XHRpZiAoIXRoaXMuYmdJbWcxLmxlbmd0aCkge1xyXG5cdFx0XHR0aGlzLmJnSW1nWU9mZnNldCA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdLmJnSW1nWU9mZnNldDtcclxuXHRcdFx0dGhpcy5iZ0ltZzEgPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXS5iYWNrZ3JvdW5kSW1nO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmJnSW1nMi5sZW5ndGggJiYgdGhpcy5iYWNrZ3JvdW5kWDIgPD0gMCkge1xyXG5cdFx0XHR0aGlzLmJnSW1nMSA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdLmJhY2tncm91bmRJbWc7XHJcblx0XHRcdHRoaXMuYmdJbWcyID0gJyc7XHJcblx0XHRcdHRoaXMuYmFja2dyb3VuZFggPSB0aGlzLmJhY2tncm91bmRYMjtcclxuXHRcdFx0dGhpcy5iYWNrZ3JvdW5kWDIgPSB0aGlzLndvcmxkLndpZHRoO1xyXG5cdFx0XHR0aGlzLmJnSW1nWU9mZnNldCA9IHRoaXMuYmdJbWdZT2Zmc2V0MjtcclxuXHRcdFx0dGhpcy5iZ0ltZ1lPZmZzZXQyID0gMDtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBiZ0ltYWdlMSA9IHRoaXMuaW1hZ2VzW3RoaXMuYmdJbWcxXTsgLy8gTGVmdCBTaWRlIEJhY2tncm91bmRcclxuXHJcblx0XHRpZiAoXHJcblx0XHRcdCh0aGlzLmJhY2tncm91bmRYICsgYmdJbWFnZTEud2lkdGggPCB0aGlzLndvcmxkLndpZHRoIHx8XHJcblx0XHRcdFx0dGhpcy5wbGF0c1Zpc2libGVbMF0ubGV2ZWwgIT09IHRoaXMuY3VycmVudExldmVsKSAmJlxyXG5cdFx0XHQhdGhpcy5iZ0ltZzIubGVuZ3RoXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy5iYWNrZ3JvdW5kWDIgPSB0aGlzLndvcmxkLndpZHRoO1xyXG5cdFx0XHR0aGlzLmJnSW1nWU9mZnNldDIgPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXS5iZ0ltZ1lPZmZzZXQ7XHJcblx0XHRcdHRoaXMuYmdJbWcyID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0uYmFja2dyb3VuZEltZztcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBiZ0ltYWdlMiA9IHRoaXMuaW1hZ2VzPy5bdGhpcy5iZ0ltZzJdOyAvLyBSaWdodCBTaWRlIEJhY2tncm91bmRcclxuXHJcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdGJnSW1hZ2UxLFxyXG5cdFx0XHQwLFxyXG5cdFx0XHQwLFxyXG5cdFx0XHRiZ0ltYWdlMS53aWR0aCxcclxuXHRcdFx0YmdJbWFnZTEuaGVpZ2h0LFxyXG5cdFx0XHR0aGlzLmJhY2tncm91bmRYLFxyXG5cdFx0XHR0aGlzLndvcmxkLmhlaWdodCAtIGJnSW1hZ2UxLmhlaWdodCArIHRoaXMuYmdJbWdZT2Zmc2V0LFxyXG5cdFx0XHRiZ0ltYWdlMS53aWR0aCxcclxuXHRcdFx0YmdJbWFnZTEuaGVpZ2h0XHJcblx0XHQpO1xyXG5cclxuXHRcdGlmIChiZ0ltYWdlMikge1xyXG5cdFx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0YmdJbWFnZTIsXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdGJnSW1hZ2UyLndpZHRoLFxyXG5cdFx0XHRcdGJnSW1hZ2UyLmhlaWdodCxcclxuXHRcdFx0XHR0aGlzLmJhY2tncm91bmRYMixcclxuXHRcdFx0XHR0aGlzLndvcmxkLmhlaWdodCAtIGJnSW1hZ2UyLmhlaWdodCArIHRoaXMuYmdJbWdZT2Zmc2V0MixcclxuXHRcdFx0XHRiZ0ltYWdlMi53aWR0aCxcclxuXHRcdFx0XHRiZ0ltYWdlMi5oZWlnaHRcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkcmF3KCkge1xyXG5cdFx0dGhpcy5kcmF3QmdJbWFnZSgpO1xyXG5cclxuXHRcdGxldCBpc0ZhbGxpbmcgPSB0cnVlO1xyXG5cdFx0Zm9yIChjb25zdCBwbGF0IG9mIHRoaXMucGxhdHNWaXNpYmxlKSB7XHJcblx0XHRcdGNvbnN0IGxldmVsOiBJTGV2ZWwgPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3BsYXQubGV2ZWxdO1xyXG5cdFx0XHRjb25zdCBpbWdXID1cclxuXHRcdFx0XHR0aGlzLmltYWdlc1tsZXZlbC5wbGF0Zm9ybVRleHR1cmVdLndpZHRoICogKGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS5sZW4gLyBsZXZlbC5tYXhQbGF0TGVuKTtcclxuXHJcblx0XHRcdGNvbnN0IHBsYXRmb3JtOiBJUGxhdGZvcm0gPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3BsYXQubGV2ZWxdLnBsYXRmb3Jtc1twbGF0LmluZGV4XSB8fCBbXTtcclxuXHJcblx0XHRcdGlmIChwbGF0Zm9ybT8uZGVjb3IpIHtcclxuXHRcdFx0XHR0aGlzLmRyYXdEZWNvckZvclBsYXQoXHJcblx0XHRcdFx0XHRwbGF0Zm9ybS5kZWNvcixcclxuXHRcdFx0XHRcdGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55LFxyXG5cdFx0XHRcdFx0cGxhdC54LFxyXG5cdFx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLmxlblxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHBsYXRmb3JtPy5vYnN0aWNsZXMpIHtcclxuXHRcdFx0XHR0aGlzLmRyYXdPYnN0aWNsZU9uUGxhdChwbGF0Zm9ybS5vYnN0aWNsZXMsIHBsYXRmb3JtLnksIHBsYXQueCwgcGxhdGZvcm0ubGVuLCBwbGF0LmluZGV4KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocGxhdGZvcm0/LnBvd2VyVXBzKSB7XHJcblx0XHRcdFx0dGhpcy5hYmlsaXRpZXMuZHJhdyhwbGF0Zm9ybS5wb3dlclVwcywgcGxhdGZvcm0ueSwgcGxhdC54LCBwbGF0Zm9ybS5sZW4sIHBsYXQuaW5kZXgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobGV2ZWwucGxhdGZvcm1IKSB7XHJcblx0XHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlXSxcclxuXHRcdFx0XHRcdDAsXHJcblx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0aW1nVyxcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2VzW2xldmVsLnBsYXRmb3JtVGV4dHVyZV0uaGVpZ2h0LFxyXG5cdFx0XHRcdFx0cGxhdC54LFxyXG5cdFx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnksXHJcblx0XHRcdFx0XHRsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ubGVuLFxyXG5cdFx0XHRcdFx0bGV2ZWwucGxhdGZvcm1IXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tsZXZlbC5wbGF0Zm9ybVRleHR1cmVdLFxyXG5cdFx0XHRcdFx0MCxcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2VzW2xldmVsLnBsYXRmb3JtVGV4dHVyZV0uaGVpZ2h0LFxyXG5cdFx0XHRcdFx0aW1nVyxcclxuXHRcdFx0XHRcdC0zICpcclxuXHRcdFx0XHRcdFx0dGhpcy5pbWFnZXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlXS5oZWlnaHQgKlxyXG5cdFx0XHRcdFx0XHQoKHRoaXMud29ybGQuaGVpZ2h0IC0gbGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnkpIC8gdGhpcy5pbWFnZXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlXS5oZWlnaHQpLFxyXG5cdFx0XHRcdFx0cGxhdC54LFxyXG5cdFx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnksXHJcblx0XHRcdFx0XHRsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ubGVuLFxyXG5cdFx0XHRcdFx0dGhpcy53b3JsZC5oZWlnaHQgLSBsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ueVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IGlzQ29sbGlkaW5nID0gdGhpcy5jb2xsaXNpb25zLmNoZWNrRm9yUGxhdENvbGxpc2lvbih7XHJcblx0XHRcdFx0eDE6IHRoaXMucGxheWVyLngsXHJcblx0XHRcdFx0eTE6IHRoaXMucGxheWVyLnksXHJcblx0XHRcdFx0eDI6IHBsYXQueCxcclxuXHRcdFx0XHR5MjogbGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnksXHJcblx0XHRcdFx0dzE6IHRoaXMucGxheWVyLncsXHJcblx0XHRcdFx0aDE6IHRoaXMucGxheWVyLmgsXHJcblx0XHRcdFx0dzI6IGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS5sZW4sXHJcblx0XHRcdFx0aDI6IGxldmVsLnBsYXRmb3JtSCB8fCB0aGlzLndvcmxkLmhlaWdodCAtIGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55LFxyXG5cdFx0XHRcdG1hcmdpbjogdGhpcy5jb2xsaXNpb25NYXJnaW4sXHJcblx0XHRcdFx0b2JqZWN0OiBgJHt0aGlzLmN1cnJlbnRMZXZlbH1fJHtwbGF0LmluZGV4fWAsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKGlzQ29sbGlkaW5nKSBpc0ZhbGxpbmcgPSBmYWxzZTtcclxuXHJcblx0XHRcdC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMyknO1xyXG5cdFx0XHQvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0Ly8gdGhpcy5jdHgucmVjdCh0aGlzLnBsYXRmb3Jtc1tpXS54LCB0aGlzLnBsYXRmb3Jtc1tpXS55LCB0aGlzLnBsYXRmb3Jtc1tpXS53LCB0aGlzLmgpO1xyXG5cdFx0XHQvLyB0aGlzLmN0eC5maWxsKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGlzRmFsbGluZykgdGhpcy5wbGF5ZXIuaXNJbkFpciA9IHRydWU7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBIdWQgZnJvbSAnLi9odWQnO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG5cdHByaXZhdGUgY3R4OiBDb250ZXh0O1xyXG5cdHByaXZhdGUgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cdHByaXZhdGUgaHVkOiBIdWQ7XHJcblx0cHJpdmF0ZSBhc3BlY3RSYXRpbzogbnVtYmVyO1xyXG5cdHB1YmxpYyB4OiBudW1iZXI7XHJcblx0cHVibGljIHk6IG51bWJlcjtcclxuXHRwdWJsaWMgdzogbnVtYmVyO1xyXG5cdHB1YmxpYyBoOiBudW1iZXI7XHJcblx0cHVibGljIGlzSW5BaXI6IGJvb2xlYW47XHJcblx0cHVibGljIG1heEp1bXBTdGFydDogbnVtYmVyO1xyXG5cdHB1YmxpYyBqdW1wVmVsU3RhcnRSZXNldDogbnVtYmVyO1xyXG5cdHB1YmxpYyBqdW1wVmVsU3RhcnQ6IG51bWJlcjtcclxuXHRwdWJsaWMgeVZlbG9jaXR5OiBudW1iZXI7XHJcblx0cHVibGljIHlBY2M6IG51bWJlcjtcclxuXHRwcml2YXRlIHJvdGF0aW9uOiBudW1iZXI7XHJcblx0cHJpdmF0ZSByb3RhdGlvblNwZWVkOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBpc0p1bXBpbmc6IGJvb2xlYW47XHJcblx0cHVibGljIGxvYWRpbmdKdW1wOiBib29sZWFuO1xyXG5cdHByaXZhdGUgd2hlZWxSb3Q6IG51bWJlcjtcclxuXHRwcml2YXRlIHJvdENvb3Jkc0Zvckp1bXA6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcclxuXHRwdWJsaWMgc3BlZWQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGltYWdlUGF0aHM6IHN0cmluZ1tdO1xyXG5cdHByaXZhdGUgaW1hZ2VzOiBhbnk7XHJcblx0cHJpdmF0ZSBpc0JlaW5nRGFtYWdlZDogYm9vbGVhbjtcclxuXHRwcml2YXRlIGxhc3RPYmplY3RIaXQ6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQsIGh1ZDogSHVkKSB7XHJcblx0XHR0aGlzLmN0eCA9IGN0eDtcclxuXHRcdHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHRcdHRoaXMuYXNwZWN0UmF0aW8gPSAxLjE7XHJcblx0XHR0aGlzLnggPSAxMDA7XHJcblx0XHR0aGlzLnkgPSAxMDA7XHJcblx0XHR0aGlzLncgPSAxNzA7XHJcblx0XHR0aGlzLmggPSB0aGlzLncgLyB0aGlzLmFzcGVjdFJhdGlvO1xyXG5cdFx0dGhpcy5pc0luQWlyID0gdHJ1ZTtcclxuXHRcdHRoaXMubWF4SnVtcFN0YXJ0ID0gMjA7XHJcblx0XHR0aGlzLmp1bXBWZWxTdGFydFJlc2V0ID0gMTA7XHJcblx0XHR0aGlzLmp1bXBWZWxTdGFydCA9IHRoaXMuanVtcFZlbFN0YXJ0UmVzZXQ7XHJcblx0XHR0aGlzLnlWZWxvY2l0eSA9IDA7XHJcblx0XHR0aGlzLnlBY2MgPSAwLjg7XHJcblx0XHR0aGlzLnJvdGF0aW9uID0gMDtcclxuXHRcdHRoaXMucm90YXRpb25TcGVlZCA9IDA7XHJcblx0XHR0aGlzLmlzSnVtcGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5sb2FkaW5nSnVtcCA9IGZhbHNlO1xyXG5cdFx0dGhpcy53aGVlbFJvdCA9IDA7XHJcblx0XHR0aGlzLnJvdENvb3Jkc0Zvckp1bXAgPSB7IHg6IDAsIHk6IDAgfTtcclxuXHRcdHRoaXMuc3BlZWQgPSAwO1xyXG5cdFx0dGhpcy5odWQgPSBodWQ7XHJcblx0XHR0aGlzLmltYWdlUGF0aHMgPSBbXHJcblx0XHRcdCcuLi9wdWJsaWMvZnJhbWUucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy9mcmFtZURhbWFnZWQucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy93aGVlbC5wbmcnLFxyXG5cdFx0XHQnLi4vcHVibGljL3doZWVsRGFtYWdlZC5wbmcnLFxyXG5cdFx0XTtcclxuXHRcdHRoaXMuaW1hZ2VzID0ge307XHJcblx0XHR0aGlzLmlzQmVpbmdEYW1hZ2VkID0gZmFsc2U7XHJcblx0XHR0aGlzLmxhc3RPYmplY3RIaXQgPSAnJztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBzZXRVcCgpIHtcclxuXHRcdGNvbnN0IHByZWxvYWRJbWFnZXMgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5pbWFnZVBhdGhzLm1hcCgocGF0aDogc3RyaW5nKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSBwYXRoLnNwbGl0KCcvJykucG9wKCk/LnNwbGl0KCcuJylbMF07XHJcblx0XHRcdFx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuXHRcdFx0XHRcdGltYWdlLnNyYyA9IHBhdGg7XHJcblx0XHRcdFx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoW25hbWUsIGltYWdlXSk7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0aW1hZ2Uub25lcnJvciA9ICgpID0+IHJlamVjdChgSW1hZ2UgZmFpbGVkIHRvIGxvYWQ6ICR7cGF0aH1gKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGltZ0FycmF5dGVtcDogYW55W10gPSBhd2FpdCBwcmVsb2FkSW1hZ2VzKCk7XHJcblx0XHR0aGlzLmltYWdlcyA9IE9iamVjdC5mcm9tRW50cmllcyhpbWdBcnJheXRlbXApO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoYW5nZVRvRGFtYWdlZEltZ3Mob2JqZWN0OiBzdHJpbmcpIHtcclxuXHRcdGlmIChvYmplY3QgPT09IHRoaXMubGFzdE9iamVjdEhpdCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5sYXN0T2JqZWN0SGl0ID0gb2JqZWN0O1xyXG5cdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA9IHRydWU7XHJcblx0XHRjb25zdCBmbGFzaEludGVydmFsID0gNTA7XHJcblxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuaXNCZWluZ0RhbWFnZWQgPSBmYWxzZTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA9IHRydWU7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmlzQmVpbmdEYW1hZ2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaXNCZWluZ0RhbWFnZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fSwgZmxhc2hJbnRlcnZhbCk7XHJcblx0XHRcdFx0XHR9LCBmbGFzaEludGVydmFsKTtcclxuXHRcdFx0XHR9LCBmbGFzaEludGVydmFsKTtcclxuXHRcdFx0fSwgZmxhc2hJbnRlcnZhbCk7XHJcblx0XHR9LCBmbGFzaEludGVydmFsKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBsYW5kKHk6IG51bWJlcikge1xyXG5cdFx0aWYgKHRoaXMucm90YXRpb24gPCAwKSByZXR1cm47XHJcblx0XHR0aGlzLmlzSW5BaXIgPSBmYWxzZTtcclxuXHRcdHRoaXMuaXNKdW1waW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwO1xyXG5cdFx0dGhpcy5yb3RhdGlvbiA9IDA7XHJcblx0XHR0aGlzLnlWZWxvY2l0eSA9IDA7XHJcblx0XHR0aGlzLnkgPSB5IC0gdGhpcy5oO1xyXG5cdFx0aWYgKCF0aGlzLmxvYWRpbmdKdW1wKSB0aGlzLmp1bXBWZWxTdGFydCA9IHRoaXMuanVtcFZlbFN0YXJ0UmVzZXQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMganVtcCgpIHtcclxuXHRcdHRoaXMubG9hZGluZ0p1bXAgPSBmYWxzZTtcclxuXHRcdGlmICh0aGlzLmlzSnVtcGluZyB8fCB0aGlzLmlzSW5BaXIgfHwgdGhpcy55VmVsb2NpdHkgPCAwKSByZXR1cm47XHJcblx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSB0aGlzLmp1bXBWZWxTdGFydDtcclxuXHRcdHRoaXMuaXNKdW1waW5nID0gdHJ1ZTtcclxuXHJcblx0XHR0aGlzLmlzSW5BaXIgPSB0cnVlO1xyXG5cdFx0dGhpcy55VmVsb2NpdHkgPSB0aGlzLmp1bXBWZWxTdGFydDtcclxuXHRcdHRoaXMuanVtcFZlbFN0YXJ0ID0gdGhpcy5qdW1wVmVsU3RhcnRSZXNldDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbG9hZEp1bXAoKSB7XHJcblx0XHRpZiAodGhpcy5qdW1wVmVsU3RhcnQgPCB0aGlzLm1heEp1bXBTdGFydCkge1xyXG5cdFx0XHR0aGlzLmp1bXBWZWxTdGFydCArPSAwLjU7XHJcblx0XHRcdHRoaXMuaHVkLmRyYXdKdW1wQ2hhcmdlKFxyXG5cdFx0XHRcdDEgLSAodGhpcy5tYXhKdW1wU3RhcnQgLSB0aGlzLmp1bXBWZWxTdGFydCkgLyAodGhpcy5tYXhKdW1wU3RhcnQgLSB0aGlzLmp1bXBWZWxTdGFydFJlc2V0KSxcclxuXHRcdFx0XHR0aGlzLngsXHJcblx0XHRcdFx0dGhpcy55XHJcblx0XHRcdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmh1ZC5kcmF3SnVtcENoYXJnZSgxLCB0aGlzLngsIHRoaXMueSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdGcmFtZSgpIHtcclxuXHRcdC8vIGNvbnN0IHlPZmZzZXQgPSA1O1xyXG5cdFx0dGhpcy5jdHguc2F2ZSgpO1xyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKHRoaXMucm90Q29vcmRzRm9ySnVtcC54LCB0aGlzLnJvdENvb3Jkc0Zvckp1bXAueSk7XHJcblx0XHR0aGlzLmN0eC5yb3RhdGUoKHRoaXMucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7XHJcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdHRoaXMuaXNCZWluZ0RhbWFnZWQgPyB0aGlzLmltYWdlcy5mcmFtZURhbWFnZWQgOiB0aGlzLmltYWdlcy5mcmFtZSxcclxuXHRcdFx0LXRoaXMuaW1hZ2VzLndoZWVsLndpZHRoIC8gMixcclxuXHRcdFx0LXRoaXMuaCArIHRoaXMuaW1hZ2VzLndoZWVsLmhlaWdodCAvIDIsXHJcblx0XHRcdHRoaXMudyxcclxuXHRcdFx0dGhpcy5oXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5jdHgucmVzdG9yZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3V2hlZWxzKCkge1xyXG5cdFx0Y29uc3Qgcm90T2Zmc2V0ID0gdGhpcy5odWQuaGVhbHRoID49IDkwID8gMCA6IHRoaXMuaHVkLmhlYWx0aCA8IDkwICYmIHRoaXMuaHVkLmhlYWx0aCA+PSA1MCA/IDIgOiA0O1xyXG5cclxuXHRcdHRoaXMuY3R4LnNhdmUoKTtcclxuXHRcdHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLnJvdENvb3Jkc0Zvckp1bXAueCArIHJvdE9mZnNldCwgdGhpcy5yb3RDb29yZHNGb3JKdW1wLnkpO1xyXG5cdFx0dGhpcy5jdHgucm90YXRlKCh0aGlzLnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODApOyAvLyBSb3RhdGUgZm9yIGp1bXBcclxuXHRcdHRoaXMuY3R4LnJvdGF0ZSgodGhpcy53aGVlbFJvdCAqIE1hdGguUEkpIC8gMTgwKTsgLy8gUm90YXRlIGZvciB3aGVlbCBzcGluXHJcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdHRoaXMuaXNCZWluZ0RhbWFnZWQgPyB0aGlzLmltYWdlcy53aGVlbERhbWFnZWQgOiB0aGlzLmltYWdlcy53aGVlbCxcclxuXHRcdFx0LXRoaXMuaW1hZ2VzLndoZWVsLndpZHRoIC8gMiAtIHJvdE9mZnNldCxcclxuXHRcdFx0LXRoaXMuaW1hZ2VzLndoZWVsLmhlaWdodCAvIDIsXHJcblx0XHRcdHRoaXMuaW1hZ2VzLndoZWVsLndpZHRoLFxyXG5cdFx0XHR0aGlzLmltYWdlcy53aGVlbC5oZWlnaHRcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN0eC5yZXN0b3JlKCk7XHJcblxyXG5cdFx0dGhpcy5jdHguc2F2ZSgpO1xyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKHRoaXMucm90Q29vcmRzRm9ySnVtcC54LCB0aGlzLnJvdENvb3Jkc0Zvckp1bXAueSArIHJvdE9mZnNldCk7XHJcblx0XHR0aGlzLmN0eC5yb3RhdGUoKHRoaXMucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7IC8vIFJvdGF0ZSBmb3IganVtcFxyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKC10aGlzLnJvdENvb3Jkc0Zvckp1bXAueCwgLXRoaXMucm90Q29vcmRzRm9ySnVtcC55KTsgLy8gTW92ZSB0byBzdGFydFxyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKHRoaXMueCArIHRoaXMudyAtIHRoaXMuaW1hZ2VzLndoZWVsLndpZHRoIC8gMiwgdGhpcy5yb3RDb29yZHNGb3JKdW1wLnkpO1xyXG5cdFx0dGhpcy5jdHgucm90YXRlKCh0aGlzLndoZWVsUm90ICogTWF0aC5QSSkgLyAxODApOyAvLyBSb3RhdGUgZm9yIHdoZWVsIHNwaW5cclxuXHRcdHRoaXMuY3R4LnRyYW5zbGF0ZSgtKHRoaXMueCArIHRoaXMudyAtIHRoaXMuaW1hZ2VzLndoZWVsLndpZHRoIC8gMiksIC10aGlzLnJvdENvb3Jkc0Zvckp1bXAueSk7IC8vIE1vdmUgdG8gc3RhcnRcclxuXHRcdHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLnJvdENvb3Jkc0Zvckp1bXAueCwgdGhpcy5yb3RDb29yZHNGb3JKdW1wLnkpO1xyXG5cclxuXHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA/IHRoaXMuaW1hZ2VzLndoZWVsRGFtYWdlZCA6IHRoaXMuaW1hZ2VzLndoZWVsLFxyXG5cdFx0XHQtKHRoaXMucm90Q29vcmRzRm9ySnVtcC54IC0gdGhpcy54KSArIHRoaXMudyAtIHRoaXMuaW1hZ2VzLndoZWVsLndpZHRoLFxyXG5cdFx0XHQtdGhpcy5pbWFnZXMud2hlZWwuaGVpZ2h0IC8gMiAtIHJvdE9mZnNldCxcclxuXHRcdFx0dGhpcy5pbWFnZXMud2hlZWwud2lkdGgsXHJcblx0XHRcdHRoaXMuaW1hZ2VzLndoZWVsLmhlaWdodFxyXG5cdFx0KTtcclxuXHRcdHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkcmF3KCkge1xyXG5cdFx0aWYgKCF0aGlzLmltYWdlcz8uZnJhbWUpIHJldHVybjtcclxuXHRcdHRoaXMud2hlZWxSb3QgKz0gdGhpcy5zcGVlZDtcclxuXHJcblx0XHRpZiAodGhpcy5sb2FkaW5nSnVtcCkgdGhpcy5sb2FkSnVtcCgpO1xyXG5cclxuXHRcdHRoaXMueSAtPSB0aGlzLnlWZWxvY2l0eTtcclxuXHRcdGlmICh0aGlzLmlzSW5BaXIpIHRoaXMueVZlbG9jaXR5IC09IHRoaXMueUFjYztcclxuXHJcblx0XHRpZiAodGhpcy5pc0p1bXBpbmcpIHtcclxuXHRcdFx0dGhpcy5yb3RhdGlvbiAtPSB0aGlzLnJvdGF0aW9uU3BlZWQgLyA0O1xyXG5cdFx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgLT0gdGhpcy55QWNjICogMjtcclxuXHJcblx0XHRcdGlmICh0aGlzLnJvdGF0aW9uID49IDUpIHtcclxuXHRcdFx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYigwLCAwLCAwLCAwLjUpJztcclxuXHRcdC8vIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0Ly8gdGhpcy5jdHgucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53LCB0aGlzLmgpO1xyXG5cdFx0Ly8gdGhpcy5jdHguZmlsbCgpO1xyXG5cclxuXHRcdHRoaXMucm90Q29vcmRzRm9ySnVtcCA9IHtcclxuXHRcdFx0eDogdGhpcy54ICsgdGhpcy5pbWFnZXMud2hlZWwud2lkdGggLyAyLFxyXG5cdFx0XHR5OiB0aGlzLnkgKyB0aGlzLmggLSB0aGlzLmltYWdlcy53aGVlbC5oZWlnaHQgLyAyLFxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmRyYXdXaGVlbHMoKTtcclxuXHRcdHRoaXMuZHJhd0ZyYW1lKCk7XHJcblx0fVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FiaWxpdGllcy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb2xsaXNpb25zLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2h1ZC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wbGF0Zm9ybXMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGxheWVyLnRzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHlwZXMudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=