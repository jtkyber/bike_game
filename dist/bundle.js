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
            gapToNext: 0,
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
        {
            y: 600,
            len: 800,
            gapToNext: 0,
            powerUps: [{ name: 'invincibility', xPercAlongPlat: 0.8, distAbovePlat: 300 }],
        },
        { y: 550, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock3', xLocsOnPlatByPerc: [0.1] }] },
        { y: 410, len: 1000, gapToNext: 0 },
        { y: 700, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock1', xLocsOnPlatByPerc: [0.6] }] },
        { y: 600, len: 800, gapToNext: 0 },
        { y: 700, len: 1200, gapToNext: 0 },
        { y: 450, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock1', xLocsOnPlatByPerc: [0.8] }] },
        {
            y: 600,
            len: 2000,
            gapToNext: 0,
            powerUps: [{ name: 'healthBoost', xPercAlongPlat: 0.1, distAbovePlat: 300 }],
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
        {
            y: 600,
            len: 800,
            gapToNext: 0,
            powerUps: [{ name: 'invincibility', xPercAlongPlat: 0.3, distAbovePlat: 200 }],
        },
        {
            y: 500,
            len: 2000,
            gapToNext: 0,
            obsticles: [{ name: 'rock2', xLocsOnPlatByPerc: [0.4] }],
        },
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
        {
            y: 700,
            len: 2000,
            gapToNext: 0,
        },
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
    bgImgYOffset: 0,
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
        this.imagePaths = ['../public/healthBoost.png', '../public/invincibility.png'];
        this.images = {};
        this.collectedPowerUps = [];
        this.currentPowerUp = {
            name: '',
            durationInSecs: 0,
        };
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
    Abilities.prototype.finishPowerUp = function () {
        switch (this.currentPowerUp.name) {
            case 'invincibility':
                this.collisions.ignoreObjectCollision = false;
                break;
            default:
                break;
        }
        this.currentPowerUp = {
            name: '',
            durationInSecs: 0,
        };
        this.hud.currentPowerUp = this.currentPowerUp;
        this.hud.powerUpPercentUsed = 0;
        this.hud.usingPowerUp = false;
    };
    Abilities.prototype.usePowerUp = function () {
        switch (this.currentPowerUp.name) {
            case 'invincibility':
                this.collisions.ignoreObjectCollision = true;
                this.hud.usingPowerUp = true;
                break;
            default:
                break;
        }
    };
    Abilities.prototype.grabPowerUp = function (powerUp) {
        switch (powerUp) {
            case 'healthBoost':
                this.hud.increaseHealth(20);
                break;
            case 'invincibility':
                if (this.currentPowerUp.name)
                    return;
                this.currentPowerUp = {
                    name: powerUp,
                    durationInSecs: 5,
                };
                this.hud.currentPowerUp = this.currentPowerUp;
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
                this.grabPowerUp(powerUps[i].name);
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
        this.ignoreObjectCollision = false;
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
        if (this.ignoreObjectCollision)
            return;
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
var Hud = /** @class */ (function () {
    function Hud(ctx, world, framerate) {
        this.ctx = ctx;
        this.world = world;
        this.health = 100;
        this.lastObjectHit = '';
        this.drawingLevelText = false;
        this.levelTextOpacity = 0;
        this.levelTextOpacityInc = 0.02;
        this.currentLevel = 0;
        this.fps = 0;
        this.framerate = framerate;
        this.fpsEnabled = false;
        this.imagePaths = ['../public/invincibility.png'];
        this.images = {};
        this.currentPowerUp = {
            name: '',
            durationInSecs: 0,
        };
        this.powerUpPercentUsed = 0;
        this.usingPowerUp = false;
    }
    Hud.prototype.setUp = function () {
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
    Hud.prototype.drawPowerUp = function () {
        if (!this.currentPowerUp.name)
            return;
        var w = this.images[this.currentPowerUp.name].width;
        var h = this.images[this.currentPowerUp.name].height;
        var circleSeparation = 6;
        var rInner = Math.max(w, h) / 2 + 10;
        var rOuter = rInner + circleSeparation;
        var xOffset = -20;
        var yOffset = 20;
        // Inner circle
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.ctx.beginPath();
        this.ctx.ellipse(this.world.width - rInner + xOffset, rInner + yOffset, rInner, rInner, 2 * Math.PI, 0, 2 * Math.PI);
        this.ctx.fill();
        // Middle circle Static
        this.ctx.strokeStyle = 'rgba(40, 40, 40, 1)';
        this.ctx.lineWidth = circleSeparation + 2;
        this.ctx.beginPath();
        this.ctx.ellipse(this.world.width - rOuter + xOffset + circleSeparation, rOuter + yOffset - circleSeparation, rOuter - circleSeparation / 2 + 1, rOuter - circleSeparation / 2 + 1, 2 * Math.PI, -Math.PI / 2, (3 * Math.PI) / 2);
        this.ctx.stroke();
        // Middle circle Dynamic
        this.ctx.strokeStyle = 'rgba(7, 191, 4, 1)';
        this.ctx.lineWidth = circleSeparation;
        this.ctx.beginPath();
        this.ctx.ellipse(this.world.width - rOuter + xOffset + circleSeparation, rOuter + yOffset - circleSeparation, rOuter - circleSeparation / 2, rOuter - circleSeparation / 2, 2 * Math.PI, -Math.PI / 2 + 2 * Math.PI * this.powerUpPercentUsed, (3 * Math.PI) / 2);
        this.ctx.stroke();
        this.ctx.drawImage(this.images[this.currentPowerUp.name], this.world.width - rInner - w / 2 + xOffset, yOffset + rInner - h / 2, w, h);
        if (this.usingPowerUp) {
            this.powerUpPercentUsed += 1 / (this.framerate * this.currentPowerUp.durationInSecs);
        }
    };
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
        this.ctx.strokeStyle = 'rgb(40, 40, 40)';
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = 'rgb(7, 191, 4)';
        this.ctx.beginPath();
        this.ctx.roundRect(x + xOffset - 1, y + yOffset - 1, w + 2, h + 2, 8);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.roundRect(x + xOffset, y + yOffset + h, w, -h * percentCharged, 8);
        this.ctx.fill();
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
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        this.ctx.beginPath();
        this.ctx.roundRect(sectionStartX - 2, sectionStartY - 2, sectionW + 4, sectionH + 4, 10);
        this.ctx.fill();
        this.ctx.fillStyle =
            this.health >= 90
                ? 'rgba(7, 191, 4, 1)'
                : this.health >= 50 && this.health < 90
                    ? 'rgba(200, 200, 0, 1)'
                    : 'rgba(230, 0, 0, 1)';
        this.ctx.beginPath();
        this.ctx.roundRect(sectionStartX, sectionStartY, sectionW * (this.health / 100), sectionH, 10);
        this.ctx.fill();
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
        this.drawPowerUp();
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
                // console.log(frames);
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
        if (hud.currentPowerUp.name && hud.powerUpPercentUsed >= 1)
            abilities.finishPowerUp();
        // if (platforms.platsVisible?.[0]?.index === 0 && platforms.currentLevel > levelsStarted) {
        // 	levelsStarted = platforms.currentLevel;
        // }
        if (hud.health === 0 || platforms.gameCompleted)
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
                hud = new _hud__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, world, frameRate);
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
                return [4 /*yield*/, hud.setUp()];
            case 4:
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
        case 'KeyE':
            abilities.usePowerUp();
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
        this.gameCompleted = false;
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
            if (!this.gameObject.levels[this.currentLevel + 1]) {
                this.gameCompleted = true;
                return;
            }
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
        if (this.gameCompleted)
            return;
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
        // If no bg image 1, assign to it and assign it's y offset
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
        // this.ctx.drawImage(
        // 	bgImage1,
        // 	0,
        // 	bgImage1.height - bgImage1.height * this.bgImgScaler,
        // 	bgImage1.width * this.bgImgScaler,
        // 	bgImage1.height * this.bgImgScaler,
        // 	this.backgroundX,
        // 	this.world.height + this.bgImgYOffset,
        // 	bgImage1.width,
        // 	-bgImage1.height
        // );
        // console.log(this.world.width / bgImage1.width);
        this.ctx.drawImage(bgImage1, -this.backgroundX, bgImage1.height, bgImage1.width * (this.world.width / bgImage1.width), -bgImage1.height * (this.world.height / bgImage1.height), 0, 0, this.world.width, this.world.height);
        if (bgImage2) {
            // this.ctx.drawImage(
            // 	bgImage2,
            // 	0,
            // 	bgImage2.height - bgImage2.height * this.bgImgScaler2,
            // 	bgImage2.width * this.bgImgScaler2,
            // 	bgImage2.height * this.bgImgScaler2,
            // 	this.backgroundX2,
            // 	this.world.height + this.bgImgYOffset2,
            // 	bgImage2.width,
            // 	-bgImage2.height
            // );
            this.ctx.drawImage(bgImage2, -this.backgroundX2, bgImage2.height, bgImage2.width * (this.world.width / bgImage2.width), -bgImage2.height * (this.world.height / bgImage2.height), 0, 0, this.world.width, this.world.height);
        }
    };
    Platforms.prototype.draw = function () {
        this.drawBgImage();
        var isFalling = true;
        for (var i = 0; i < this.platsVisible.length; i++) {
            var level = this.gameObject.levels[this.platsVisible[i].level];
            var imgW = this.images[level.platformTexture].width *
                (level.platforms[this.platsVisible[i].index].len / level.maxPlatLen);
            var platform = this.gameObject.levels[this.platsVisible[i].level].platforms[this.platsVisible[i].index] || [];
            if (platform === null || platform === void 0 ? void 0 : platform.decor) {
                this.drawDecorForPlat(platform.decor, level.platforms[this.platsVisible[i].index].y, this.platsVisible[i].x, level.platforms[this.platsVisible[i].index].len);
            }
            if (platform === null || platform === void 0 ? void 0 : platform.obsticles) {
                this.drawObsticleOnPlat(platform.obsticles, platform.y, this.platsVisible[i].x, platform.len, this.platsVisible[i].index);
            }
            if (platform === null || platform === void 0 ? void 0 : platform.powerUps) {
                this.abilities.draw(platform.powerUps, platform.y, this.platsVisible[i].x, platform.len, this.platsVisible[i].index);
            }
            if (level.platformH) {
                this.ctx.drawImage(this.images[level.platformTexture], 0, 0, imgW, this.images[level.platformTexture].height, this.platsVisible[i].x, level.platforms[this.platsVisible[i].index].y, level.platforms[this.platsVisible[i].index].len, level.platformH);
            }
            else {
                this.ctx.drawImage(this.images[level.platformTexture], 0, this.images[level.platformTexture].height, imgW, -2.5 *
                    this.images[level.platformTexture].height *
                    ((this.world.height - level.platforms[this.platsVisible[i].index].y) /
                        this.images[level.platformTexture].height), this.platsVisible[i].x, level.platforms[this.platsVisible[i].index].y, level.platforms[this.platsVisible[i].index].len, this.world.height - level.platforms[this.platsVisible[i].index].y);
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
                x2: this.platsVisible[i].x,
                y2: level.platforms[this.platsVisible[i].index].y,
                w1: this.player.w,
                h1: this.player.h,
                w2: level.platforms[this.platsVisible[i].index].len,
                h2: level.platformH || this.world.height - level.platforms[this.platsVisible[i].index].y,
                margin: this.collisionMargin,
                object: "".concat(this.currentLevel, "_").concat(this.platsVisible[i].index),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDLGdCQUFnQixHQUFHO1lBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQ3ZDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7U0FDakQsQ0FBQztRQUVGLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNGLGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xPRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jpa2VfZ2FtZS8uL3B1YmxpYy9nYW1lT2JqZWN0LnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS8uL3NyYy9hYmlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL2NvbGxpc2lvbnMudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL2h1ZC50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL3BsYXRmb3Jtcy50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvcGxheWVyLnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJR2FtZU9iamVjdCwgSUxldmVsIH0gZnJvbSAnLi4vc3JjL3R5cGVzJztcclxuXHJcbmNvbnN0IGxldmVsT25lOiBJTGV2ZWwgPSB7XHJcblx0cGxhdGZvcm1zOiBbXHJcblx0XHR7XHJcblx0XHRcdHk6IDYwMCxcclxuXHRcdFx0bGVuOiAzMDAwLFxyXG5cdFx0XHRnYXBUb05leHQ6IDAsXHJcblx0XHRcdGRlY29yOiBbeyBuYW1lOiAnc3RhcnRTaWduJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjZdIH1dLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0eTogNjAwLFxyXG5cdFx0XHRsZW46IDIwMDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHk6IDcwMCxcclxuXHRcdFx0bGVuOiAxMDAwLFxyXG5cdFx0XHRnYXBUb05leHQ6IDAsXHJcblx0XHR9LFxyXG5cdFx0eyB5OiA2MDAsIGxlbjogODAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNTAwLCBsZW46IDIwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazInLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuNF0gfV0gfSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDEyMDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA0NTAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMycsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC44XSB9XSB9LFxyXG5cdFx0eyB5OiA2NTAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDYyNSwgbGVuOiA2MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0e1xyXG5cdFx0XHR5OiA2MDAsXHJcblx0XHRcdGxlbjogODAwLFxyXG5cdFx0XHRnYXBUb05leHQ6IDAsXHJcblx0XHRcdHBvd2VyVXBzOiBbeyBuYW1lOiAnaW52aW5jaWJpbGl0eScsIHhQZXJjQWxvbmdQbGF0OiAwLjgsIGRpc3RBYm92ZVBsYXQ6IDMwMCB9XSxcclxuXHRcdH0sXHJcblx0XHR7IHk6IDU1MCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2szJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjFdIH1dIH0sXHJcblx0XHR7IHk6IDQxMCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazEnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuNl0gfV0gfSxcclxuXHRcdHsgeTogNjAwLCBsZW46IDgwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMjAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNDUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazEnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuOF0gfV0gfSxcclxuXHRcdHtcclxuXHRcdFx0eTogNjAwLFxyXG5cdFx0XHRsZW46IDIwMDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMCxcclxuXHRcdFx0cG93ZXJVcHM6IFt7IG5hbWU6ICdoZWFsdGhCb29zdCcsIHhQZXJjQWxvbmdQbGF0OiAwLjEsIGRpc3RBYm92ZVBsYXQ6IDMwMCB9XSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRwbGF0Zm9ybVRleHR1cmU6ICdkaXJ0UGxhdCcsXHJcblx0cGxhdGZvcm1IOiBudWxsLFxyXG5cdGJhY2tncm91bmRJbWc6ICdiZ0xldmVsMScsXHJcblx0YmdJbWdZT2Zmc2V0OiAwLFxyXG5cdG1heFBsYXRMZW46IDQwMDAsXHJcblx0c3BlZWQ6IDE0LFxyXG59O1xyXG5cclxuY29uc3QgbGV2ZWxUd286IElMZXZlbCA9IHtcclxuXHRwbGF0Zm9ybXM6IFtcclxuXHRcdHtcclxuXHRcdFx0eTogNjAwLFxyXG5cdFx0XHRsZW46IDMwMDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHk6IDYwMCxcclxuXHRcdFx0bGVuOiAyMDAwLFxyXG5cdFx0XHRnYXBUb05leHQ6IDIwMCxcclxuXHRcdH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2sxJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjFdIH1dIH0sXHJcblx0XHR7XHJcblx0XHRcdHk6IDYwMCxcclxuXHRcdFx0bGVuOiA4MDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMCxcclxuXHRcdFx0cG93ZXJVcHM6IFt7IG5hbWU6ICdpbnZpbmNpYmlsaXR5JywgeFBlcmNBbG9uZ1BsYXQ6IDAuMywgZGlzdEFib3ZlUGxhdDogMjAwIH1dLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0eTogNTAwLFxyXG5cdFx0XHRsZW46IDIwMDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMCxcclxuXHRcdFx0b2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazInLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuNF0gfV0sXHJcblx0XHR9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMTIwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDQ1MCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2szJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjhdIH1dIH0sXHJcblx0XHR7IHk6IDY1MCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNjI1LCBsZW46IDYwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7XHJcblx0XHRcdHk6IDYwMCxcclxuXHRcdFx0bGVuOiA4MDAsXHJcblx0XHRcdGdhcFRvTmV4dDogNTAsXHJcblx0XHRcdHBvd2VyVXBzOiBbeyBuYW1lOiAnaGVhbHRoQm9vc3QnLCB4UGVyY0Fsb25nUGxhdDogMC4yLCBkaXN0QWJvdmVQbGF0OiAzMDAgfV0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR5OiA3MDAsXHJcblx0XHRcdGxlbjogMjAwMCxcclxuXHRcdFx0Z2FwVG9OZXh0OiAwLFxyXG5cdFx0fSxcclxuXHRcdHsgeTogNTUwLCBsZW46IDcwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMycsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC4xXSB9XSB9LFxyXG5cdFx0eyB5OiA0MTAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAzMDAgfSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazEnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuNl0gfV0gfSxcclxuXHRcdHsgeTogNjAwLCBsZW46IDgwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDU1MCwgbGVuOiAxNTAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2szJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjRdIH1dIH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMjAwLCBnYXBUb05leHQ6IDEwMCB9LFxyXG5cdFx0eyB5OiA0NTAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMScsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC44XSB9XSB9LFxyXG5cdFx0eyB5OiA2NTAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDYyNSwgbGVuOiA2MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdF0sXHJcblx0cGxhdGZvcm1UZXh0dXJlOiAnd29vZFBsYXQnLFxyXG5cdHBsYXRmb3JtSDogMTYsXHJcblx0YmFja2dyb3VuZEltZzogJ2JnTGV2ZWwyJyxcclxuXHRiZ0ltZ1lPZmZzZXQ6IDAsXHJcblx0bWF4UGxhdExlbjogNDAwMCxcclxuXHRzcGVlZDogMTYsXHJcbn07XHJcblxyXG5jb25zdCBnYW1lT2JqZWN0OiBJR2FtZU9iamVjdCA9IHtcclxuXHRsZXZlbHM6IFtsZXZlbE9uZSwgbGV2ZWxUd29dLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZU9iamVjdDtcclxuIiwiaW1wb3J0IENvbGxpc2lvbnMgZnJvbSAnLi9jb2xsaXNpb25zJztcclxuaW1wb3J0IEh1ZCBmcm9tICcuL2h1ZCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBDb250ZXh0LCBJUG93ZXJVcCB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJpbGl0aWVzIHtcclxuXHRwcml2YXRlIGN0eDogQ29udGV4dDtcclxuXHRwcml2YXRlIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHRwcml2YXRlIGh1ZDogSHVkO1xyXG5cdHByaXZhdGUgY29sbGlzaW9uczogQ29sbGlzaW9ucztcclxuXHRwcml2YXRlIHBsYXllcjogUGxheWVyO1xyXG5cdHByaXZhdGUgaW1hZ2VQYXRoczogc3RyaW5nW107XHJcblx0cHJpdmF0ZSBpbWFnZXM6IGFueTtcclxuXHRwcml2YXRlIGNvbGxlY3RlZFBvd2VyVXBzOiBzdHJpbmdbXTtcclxuXHRwdWJsaWMgY3VycmVudFBvd2VyVXA6IHtcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdGR1cmF0aW9uSW5TZWNzOiBudW1iZXI7XHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQsIGh1ZDogSHVkLCBjb2xsaXNpb25zOiBDb2xsaXNpb25zLCBwbGF5ZXI6IFBsYXllcikge1xyXG5cdFx0dGhpcy5jdHggPSBjdHg7XHJcblx0XHR0aGlzLndvcmxkID0gd29ybGQ7XHJcblx0XHR0aGlzLmh1ZCA9IGh1ZDtcclxuXHRcdHRoaXMuY29sbGlzaW9ucyA9IGNvbGxpc2lvbnM7XHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHRcdHRoaXMuaW1hZ2VQYXRocyA9IFsnLi4vcHVibGljL2hlYWx0aEJvb3N0LnBuZycsICcuLi9wdWJsaWMvaW52aW5jaWJpbGl0eS5wbmcnXTtcclxuXHRcdHRoaXMuaW1hZ2VzID0ge307XHJcblx0XHR0aGlzLmNvbGxlY3RlZFBvd2VyVXBzID0gW107XHJcblx0XHR0aGlzLmN1cnJlbnRQb3dlclVwID0ge1xyXG5cdFx0XHRuYW1lOiAnJyxcclxuXHRcdFx0ZHVyYXRpb25JblNlY3M6IDAsXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIHNldFVwKCkge1xyXG5cdFx0Y29uc3QgcHJlbG9hZEltYWdlcyA9ICgpID0+IHtcclxuXHRcdFx0Y29uc3QgcHJvbWlzZXMgPSB0aGlzLmltYWdlUGF0aHMubWFwKChwYXRoOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IHBhdGguc3BsaXQoJy8nKS5wb3AoKT8uc3BsaXQoJy4nKVswXTtcclxuXHRcdFx0XHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcblxyXG5cdFx0XHRcdFx0aW1hZ2Uuc3JjID0gcGF0aDtcclxuXHRcdFx0XHRcdGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZShbbmFtZSwgaW1hZ2VdKTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRpbWFnZS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KGBJbWFnZSBmYWlsZWQgdG8gbG9hZDogJHtwYXRofWApO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgaW1nQXJyYXl0ZW1wOiBhbnlbXSA9IGF3YWl0IHByZWxvYWRJbWFnZXMoKTtcclxuXHRcdHRoaXMuaW1hZ2VzID0gT2JqZWN0LmZyb21FbnRyaWVzKGltZ0FycmF5dGVtcCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZmluaXNoUG93ZXJVcCgpIHtcclxuXHRcdHN3aXRjaCAodGhpcy5jdXJyZW50UG93ZXJVcC5uYW1lKSB7XHJcblx0XHRcdGNhc2UgJ2ludmluY2liaWxpdHknOlxyXG5cdFx0XHRcdHRoaXMuY29sbGlzaW9ucy5pZ25vcmVPYmplY3RDb2xsaXNpb24gPSBmYWxzZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJlbnRQb3dlclVwID0ge1xyXG5cdFx0XHRuYW1lOiAnJyxcclxuXHRcdFx0ZHVyYXRpb25JblNlY3M6IDAsXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5odWQuY3VycmVudFBvd2VyVXAgPSB0aGlzLmN1cnJlbnRQb3dlclVwO1xyXG5cdFx0dGhpcy5odWQucG93ZXJVcFBlcmNlbnRVc2VkID0gMDtcclxuXHRcdHRoaXMuaHVkLnVzaW5nUG93ZXJVcCA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVzZVBvd2VyVXAoKSB7XHJcblx0XHRzd2l0Y2ggKHRoaXMuY3VycmVudFBvd2VyVXAubmFtZSkge1xyXG5cdFx0XHRjYXNlICdpbnZpbmNpYmlsaXR5JzpcclxuXHRcdFx0XHR0aGlzLmNvbGxpc2lvbnMuaWdub3JlT2JqZWN0Q29sbGlzaW9uID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmh1ZC51c2luZ1Bvd2VyVXAgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBncmFiUG93ZXJVcChwb3dlclVwOiBzdHJpbmcpIHtcclxuXHRcdHN3aXRjaCAocG93ZXJVcCkge1xyXG5cdFx0XHRjYXNlICdoZWFsdGhCb29zdCc6XHJcblx0XHRcdFx0dGhpcy5odWQuaW5jcmVhc2VIZWFsdGgoMjApO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdpbnZpbmNpYmlsaXR5JzpcclxuXHRcdFx0XHRpZiAodGhpcy5jdXJyZW50UG93ZXJVcC5uYW1lKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50UG93ZXJVcCA9IHtcclxuXHRcdFx0XHRcdG5hbWU6IHBvd2VyVXAsXHJcblx0XHRcdFx0XHRkdXJhdGlvbkluU2VjczogNSxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMuaHVkLmN1cnJlbnRQb3dlclVwID0gdGhpcy5jdXJyZW50UG93ZXJVcDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkcmF3KHBvd2VyVXBzOiBJUG93ZXJVcFtdLCBwbGF0WVRvcDogbnVtYmVyLCBwbGF0WDogbnVtYmVyLCBwbGF0TGVuOiBudW1iZXIsIHBsYXRJbmRleDogbnVtYmVyKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBvd2VyVXBzPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpbWdTcmM6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLmltYWdlc1twb3dlclVwc1tpXS5uYW1lXTtcclxuXHJcblx0XHRcdGlmICghaW1nU3JjKSBjb250aW51ZTtcclxuXHJcblx0XHRcdGNvbnN0IGltZ1ggPSBwbGF0WCArIHBsYXRMZW4gKiBwb3dlclVwc1tpXS54UGVyY0Fsb25nUGxhdDtcclxuXHRcdFx0Y29uc3QgaW1nWSA9IHBsYXRZVG9wIC0gaW1nU3JjLmhlaWdodCArIDEwIC0gcG93ZXJVcHNbaV0uZGlzdEFib3ZlUGxhdDtcclxuXHRcdFx0Y29uc3Qgb2JqZWN0ID0gYCR7cG93ZXJVcHNbaV0ubmFtZX1fJHtwbGF0SW5kZXh9XyR7cG93ZXJVcHNbaV0ueFBlcmNBbG9uZ1BsYXR9YDtcclxuXHJcblx0XHRcdGlmICh0aGlzLmNvbGxlY3RlZFBvd2VyVXBzLmluY2x1ZGVzKG9iamVjdCkpIHtcclxuXHRcdFx0XHRpZiAoaW1nWCArIGltZ1NyYy53aWR0aCA8IDApIHRoaXMuY29sbGVjdGVkUG93ZXJVcHMuc2hpZnQoKTtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKGltZ1NyYywgaW1nWCwgaW1nWSwgaW1nU3JjLndpZHRoLCBpbWdTcmMuaGVpZ2h0KTtcclxuXHJcblx0XHRcdGNvbnN0IGNvbGxpZGVkV2l0aFBvd2VyVXAgPSB0aGlzLmNvbGxpc2lvbnMucG93ZXJVcENvbGxpc2lvbih7XHJcblx0XHRcdFx0eDE6IHRoaXMucGxheWVyLngsXHJcblx0XHRcdFx0eTE6IHRoaXMucGxheWVyLnksXHJcblx0XHRcdFx0eDI6IGltZ1gsXHJcblx0XHRcdFx0eTI6IGltZ1ksXHJcblx0XHRcdFx0dzE6IHRoaXMucGxheWVyLncsXHJcblx0XHRcdFx0aDE6IHRoaXMucGxheWVyLmgsXHJcblx0XHRcdFx0dzI6IHRoaXMuaW1hZ2VzW3Bvd2VyVXBzW2ldLm5hbWVdLndpZHRoLFxyXG5cdFx0XHRcdGgyOlxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbcG93ZXJVcHNbaV0ubmFtZV0uaGVpZ2h0IHx8XHJcblx0XHRcdFx0XHR0aGlzLndvcmxkLmhlaWdodCAtIChwbGF0WVRvcCAtIHRoaXMuaW1hZ2VzW3Bvd2VyVXBzW2ldLm5hbWVdLmhlaWdodCArIDEwKSxcclxuXHRcdFx0XHRtYXJnaW46IDAsXHJcblx0XHRcdFx0b2JqZWN0OiBvYmplY3QsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKGNvbGxpZGVkV2l0aFBvd2VyVXApIHtcclxuXHRcdFx0XHR0aGlzLmNvbGxlY3RlZFBvd2VyVXBzLnB1c2gob2JqZWN0KTtcclxuXHRcdFx0XHR0aGlzLmdyYWJQb3dlclVwKHBvd2VyVXBzW2ldLm5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBIdWQgZnJvbSAnLi9odWQnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgQ29udGV4dCwgSUNvbGxpc2lvbkFyZ3MgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbnMge1xyXG5cdHByaXZhdGUgY3R4OiBDb250ZXh0O1xyXG5cdHByaXZhdGUgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cdHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XHJcblx0cHJpdmF0ZSBodWQ6IEh1ZDtcclxuXHRwdWJsaWMgaWdub3JlT2JqZWN0Q29sbGlzaW9uOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjdHg6IENvbnRleHQsIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudCwgcGxheWVyOiBQbGF5ZXIsIGh1ZDogSHVkKSB7XHJcblx0XHR0aGlzLmN0eCA9IGN0eDtcclxuXHRcdHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cdFx0dGhpcy5odWQgPSBodWQ7XHJcblx0XHR0aGlzLmlnbm9yZU9iamVjdENvbGxpc2lvbiA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoZWNrRm9yUGxhdENvbGxpc2lvbih7IHgxLCB5MSwgeDIsIHkyLCB3MSwgaDEsIHcyLCBoMiwgbWFyZ2luLCBvYmplY3QgfTogSUNvbGxpc2lvbkFyZ3MpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IHBsYXllclJpZ2h0T2ZQbGF0TGVmdCA9IHgxICsgdzEgPj0geDIgKyBtYXJnaW47IC8vIFBsYXllciByaWdodCBzaWRlIHRvIHJpZ2h0IG9mIHBsYXQgbGVmdFxyXG5cdFx0Y29uc3QgcGxheWVyTGVmdE9mUGxhdFJpZ2h0ID0geDEgPD0geDIgKyB3MjsgLy8gUGxheWVyIGxlZnQgc2lkZSB0byBsZWZ0IG9mIHBsYXQgcmlnaHRcclxuXHRcdGNvbnN0IHBsYXllckFib3ZlUGxhdEJvdCA9IHkxIDw9IHkyICsgaDI7IC8vUGxheWVyIHRvcCBhYm92ZSBwbGF0IGJvdHRvbVxyXG5cdFx0Y29uc3QgcGxheWVyQmVsb3dQbGF0VG9wID0geTEgKyB0aGlzLnBsYXllci5oID4geTIgKyAodGhpcy5wbGF5ZXIuaXNJbkFpciA/IG1hcmdpbiA6IDApOyAvLyBQbGF5ZXIgYm90dG9tIGFib3ZlIHBsYXQgdG9wXHJcblxyXG5cdFx0aWYgKHBsYXllclJpZ2h0T2ZQbGF0TGVmdCAmJiBwbGF5ZXJMZWZ0T2ZQbGF0UmlnaHQgJiYgcGxheWVyQWJvdmVQbGF0Qm90KSB7XHJcblx0XHRcdC8vIExhbmQgaWYgbmVnYXRpdmUgdmVsb2NpdHkgYW5kIHdpdGhpbiAyMHB4IG9mIHBsYXRmb3JtXHJcblx0XHRcdGlmICh0aGlzLnBsYXllci55VmVsb2NpdHkgPD0gMCAmJiBNYXRoLmFicyh5MiAtICh5MSArIGgxKSkgPCAxNikge1xyXG5cdFx0XHRcdHRoaXMucGxheWVyLmxhbmQoeTIpO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHBsYXllckJlbG93UGxhdFRvcCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdQbGF0Zm9ybSBDb2xsaXNpb24hJyk7XHJcblx0XHRcdFx0dGhpcy5odWQuaGVhbHRoID0gMDtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMucGxheWVyLnkgKyB0aGlzLnBsYXllci5oID4gdGhpcy53b3JsZC5oZWlnaHQpIHtcclxuXHRcdFx0dGhpcy5odWQuaGVhbHRoID0gMDtcclxuXHRcdFx0Y29uc29sZS5sb2coJ091dCBPZiBCb3VuZHMgQ29sbGlzaW9uIScpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjaGVja0ZvckNvbGxpc2lvbih7IHgxLCB5MSwgeDIsIHkyLCB3MSwgaDEsIHcyLCBoMiwgbWFyZ2luLCBvYmplY3QgfTogSUNvbGxpc2lvbkFyZ3MpIHtcclxuXHRcdGlmICh0aGlzLmlnbm9yZU9iamVjdENvbGxpc2lvbikgcmV0dXJuO1xyXG5cdFx0aWYgKFxyXG5cdFx0XHR4MSArIHcxID49IHgyICsgbWFyZ2luICYmIC8vIENoZWNrIHBsYXllciByaWdodCBjb2xsaXNpb25cclxuXHRcdFx0eDEgPD0geDIgKyB3MiAmJiAvLyBDaGVjayBwbGF5ZXIgbGVmdCBjb2xsaXNpb25cclxuXHRcdFx0eTEgPD0geTIgKyBoMiAmJiAvLyBDaGVjayBwbGF5ZXIgdG9wIGNvbGxpc2lvblxyXG5cdFx0XHR5MSArIGgxID4geTIgLy8gQ2hlY2sgcGxheWVyIGJvdHRvbSBjb2xsaXNpb25cclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLmh1ZC5yZWR1Y2VIZWFsdGgob2JqZWN0LCAzMCk7XHJcblx0XHRcdHRoaXMucGxheWVyLmNoYW5nZVRvRGFtYWdlZEltZ3Mob2JqZWN0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwb3dlclVwQ29sbGlzaW9uKHsgeDEsIHkxLCB4MiwgeTIsIHcxLCBoMSwgdzIsIGgyLCBtYXJnaW4sIG9iamVjdCB9OiBJQ29sbGlzaW9uQXJncyk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHR4MSArIHcxID49IHgyICsgbWFyZ2luICYmIC8vIENoZWNrIHBsYXllciByaWdodCBjb2xsaXNpb25cclxuXHRcdFx0eDEgPD0geDIgKyB3MiAmJiAvLyBDaGVjayBwbGF5ZXIgbGVmdCBjb2xsaXNpb25cclxuXHRcdFx0eTEgPD0geTIgKyBoMiAmJiAvLyBDaGVjayBwbGF5ZXIgdG9wIGNvbGxpc2lvblxyXG5cdFx0XHR5MSArIGgxID4geTIgLy8gQ2hlY2sgcGxheWVyIGJvdHRvbSBjb2xsaXNpb25cclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHVkIHtcclxuXHRwcml2YXRlIGN0eDogQ29udGV4dDtcclxuXHRwcml2YXRlIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHRwdWJsaWMgaGVhbHRoOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBsYXN0T2JqZWN0SGl0OiBhbnk7XHJcblx0cHVibGljIGRyYXdpbmdMZXZlbFRleHQ6IGJvb2xlYW47XHJcblx0cHJpdmF0ZSBsZXZlbFRleHRPcGFjaXR5OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBsZXZlbFRleHRPcGFjaXR5SW5jOiBudW1iZXI7XHJcblx0cHVibGljIGN1cnJlbnRMZXZlbDogbnVtYmVyO1xyXG5cdHB1YmxpYyBmcHM6IG51bWJlcjtcclxuXHRwdWJsaWMgZnJhbWVyYXRlOiBudW1iZXI7XHJcblx0cHVibGljIGZwc0VuYWJsZWQ6IGJvb2xlYW47XHJcblx0cHJpdmF0ZSBpbWFnZVBhdGhzOiBzdHJpbmdbXTtcclxuXHRwcml2YXRlIGltYWdlczogYW55O1xyXG5cdHB1YmxpYyBjdXJyZW50UG93ZXJVcDoge1xyXG5cdFx0bmFtZTogc3RyaW5nO1xyXG5cdFx0ZHVyYXRpb25JblNlY3M6IG51bWJlcjtcclxuXHR9O1xyXG5cdHB1YmxpYyB1c2luZ1Bvd2VyVXA6IGJvb2xlYW47XHJcblx0cHVibGljIHBvd2VyVXBQZXJjZW50VXNlZDogbnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjdHg6IENvbnRleHQsIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudCwgZnJhbWVyYXRlOiBudW1iZXIpIHtcclxuXHRcdHRoaXMuY3R4ID0gY3R4O1xyXG5cdFx0dGhpcy53b3JsZCA9IHdvcmxkO1xyXG5cdFx0dGhpcy5oZWFsdGggPSAxMDA7XHJcblx0XHR0aGlzLmxhc3RPYmplY3RIaXQgPSAnJztcclxuXHRcdHRoaXMuZHJhd2luZ0xldmVsVGV4dCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5sZXZlbFRleHRPcGFjaXR5ID0gMDtcclxuXHRcdHRoaXMubGV2ZWxUZXh0T3BhY2l0eUluYyA9IDAuMDI7XHJcblx0XHR0aGlzLmN1cnJlbnRMZXZlbCA9IDA7XHJcblx0XHR0aGlzLmZwcyA9IDA7XHJcblx0XHR0aGlzLmZyYW1lcmF0ZSA9IGZyYW1lcmF0ZTtcclxuXHRcdHRoaXMuZnBzRW5hYmxlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5pbWFnZVBhdGhzID0gWycuLi9wdWJsaWMvaW52aW5jaWJpbGl0eS5wbmcnXTtcclxuXHRcdHRoaXMuaW1hZ2VzID0ge307XHJcblx0XHR0aGlzLmN1cnJlbnRQb3dlclVwID0ge1xyXG5cdFx0XHRuYW1lOiAnJyxcclxuXHRcdFx0ZHVyYXRpb25JblNlY3M6IDAsXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5wb3dlclVwUGVyY2VudFVzZWQgPSAwO1xyXG5cdFx0dGhpcy51c2luZ1Bvd2VyVXAgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBzZXRVcCgpIHtcclxuXHRcdGNvbnN0IHByZWxvYWRJbWFnZXMgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5pbWFnZVBhdGhzLm1hcCgocGF0aDogc3RyaW5nKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSBwYXRoLnNwbGl0KCcvJykucG9wKCk/LnNwbGl0KCcuJylbMF07XHJcblx0XHRcdFx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuXHRcdFx0XHRcdGltYWdlLnNyYyA9IHBhdGg7XHJcblx0XHRcdFx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoW25hbWUsIGltYWdlXSk7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0aW1hZ2Uub25lcnJvciA9ICgpID0+IHJlamVjdChgSW1hZ2UgZmFpbGVkIHRvIGxvYWQ6ICR7cGF0aH1gKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGltZ0FycmF5dGVtcDogYW55W10gPSBhd2FpdCBwcmVsb2FkSW1hZ2VzKCk7XHJcblx0XHR0aGlzLmltYWdlcyA9IE9iamVjdC5mcm9tRW50cmllcyhpbWdBcnJheXRlbXApO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3UG93ZXJVcCgpIHtcclxuXHRcdGlmICghdGhpcy5jdXJyZW50UG93ZXJVcC5uYW1lKSByZXR1cm47XHJcblxyXG5cdFx0Y29uc3QgdyA9IHRoaXMuaW1hZ2VzW3RoaXMuY3VycmVudFBvd2VyVXAubmFtZV0ud2lkdGg7XHJcblx0XHRjb25zdCBoID0gdGhpcy5pbWFnZXNbdGhpcy5jdXJyZW50UG93ZXJVcC5uYW1lXS5oZWlnaHQ7XHJcblx0XHRjb25zdCBjaXJjbGVTZXBhcmF0aW9uID0gNjtcclxuXHRcdGNvbnN0IHJJbm5lciA9IE1hdGgubWF4KHcsIGgpIC8gMiArIDEwO1xyXG5cdFx0Y29uc3Qgck91dGVyID0gcklubmVyICsgY2lyY2xlU2VwYXJhdGlvbjtcclxuXHRcdGNvbnN0IHhPZmZzZXQgPSAtMjA7XHJcblx0XHRjb25zdCB5T2Zmc2V0ID0gMjA7XHJcblxyXG5cdFx0Ly8gSW5uZXIgY2lyY2xlXHJcblx0XHR0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjUpJztcclxuXHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0dGhpcy5jdHguZWxsaXBzZShcclxuXHRcdFx0dGhpcy53b3JsZC53aWR0aCAtIHJJbm5lciArIHhPZmZzZXQsXHJcblx0XHRcdHJJbm5lciArIHlPZmZzZXQsXHJcblx0XHRcdHJJbm5lcixcclxuXHRcdFx0cklubmVyLFxyXG5cdFx0XHQyICogTWF0aC5QSSxcclxuXHRcdFx0MCxcclxuXHRcdFx0MiAqIE1hdGguUElcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN0eC5maWxsKCk7XHJcblxyXG5cdFx0Ly8gTWlkZGxlIGNpcmNsZSBTdGF0aWNcclxuXHRcdHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoNDAsIDQwLCA0MCwgMSknO1xyXG5cdFx0dGhpcy5jdHgubGluZVdpZHRoID0gY2lyY2xlU2VwYXJhdGlvbiArIDI7XHJcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdHRoaXMuY3R4LmVsbGlwc2UoXHJcblx0XHRcdHRoaXMud29ybGQud2lkdGggLSByT3V0ZXIgKyB4T2Zmc2V0ICsgY2lyY2xlU2VwYXJhdGlvbixcclxuXHRcdFx0ck91dGVyICsgeU9mZnNldCAtIGNpcmNsZVNlcGFyYXRpb24sXHJcblx0XHRcdHJPdXRlciAtIGNpcmNsZVNlcGFyYXRpb24gLyAyICsgMSxcclxuXHRcdFx0ck91dGVyIC0gY2lyY2xlU2VwYXJhdGlvbiAvIDIgKyAxLFxyXG5cdFx0XHQyICogTWF0aC5QSSxcclxuXHRcdFx0LU1hdGguUEkgLyAyLFxyXG5cdFx0XHQoMyAqIE1hdGguUEkpIC8gMlxyXG5cdFx0KTtcclxuXHRcdHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuXHRcdC8vIE1pZGRsZSBjaXJjbGUgRHluYW1pY1xyXG5cdFx0dGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSg3LCAxOTEsIDQsIDEpJztcclxuXHRcdHRoaXMuY3R4LmxpbmVXaWR0aCA9IGNpcmNsZVNlcGFyYXRpb247XHJcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdHRoaXMuY3R4LmVsbGlwc2UoXHJcblx0XHRcdHRoaXMud29ybGQud2lkdGggLSByT3V0ZXIgKyB4T2Zmc2V0ICsgY2lyY2xlU2VwYXJhdGlvbixcclxuXHRcdFx0ck91dGVyICsgeU9mZnNldCAtIGNpcmNsZVNlcGFyYXRpb24sXHJcblx0XHRcdHJPdXRlciAtIGNpcmNsZVNlcGFyYXRpb24gLyAyLFxyXG5cdFx0XHRyT3V0ZXIgLSBjaXJjbGVTZXBhcmF0aW9uIC8gMixcclxuXHRcdFx0MiAqIE1hdGguUEksXHJcblx0XHRcdC1NYXRoLlBJIC8gMiArIDIgKiBNYXRoLlBJICogdGhpcy5wb3dlclVwUGVyY2VudFVzZWQsXHJcblx0XHRcdCgzICogTWF0aC5QSSkgLyAyXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG5cdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHR0aGlzLmltYWdlc1t0aGlzLmN1cnJlbnRQb3dlclVwLm5hbWVdLFxyXG5cdFx0XHR0aGlzLndvcmxkLndpZHRoIC0gcklubmVyIC0gdyAvIDIgKyB4T2Zmc2V0LFxyXG5cdFx0XHR5T2Zmc2V0ICsgcklubmVyIC0gaCAvIDIsXHJcblx0XHRcdHcsXHJcblx0XHRcdGhcclxuXHRcdCk7XHJcblxyXG5cdFx0aWYgKHRoaXMudXNpbmdQb3dlclVwKSB7XHJcblx0XHRcdHRoaXMucG93ZXJVcFBlcmNlbnRVc2VkICs9IDEgLyAodGhpcy5mcmFtZXJhdGUgKiB0aGlzLmN1cnJlbnRQb3dlclVwLmR1cmF0aW9uSW5TZWNzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZHJhd0ZwcygpIHtcclxuXHRcdGlmICghdGhpcy5mcHNFbmFibGVkKSByZXR1cm47XHJcblxyXG5cdFx0dGhpcy5jdHguZm9udCA9ICcyMHB4IEFyaWFsJztcclxuXHRcdHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDI1NSwgMCwgMSknO1xyXG5cdFx0dGhpcy5jdHgudGV4dEFsaWduID0gJ3JpZ2h0JztcclxuXHRcdHRoaXMuY3R4LmZpbGxUZXh0KGAke3RoaXMuZnBzfSBGUFNgLCB0aGlzLndvcmxkLndpZHRoIC0gMjAsIDMwKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkcmF3SnVtcENoYXJnZShwZXJjZW50Q2hhcmdlZDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG5cdFx0Y29uc3QgdyA9IDg7XHJcblx0XHRjb25zdCBoID0gNjA7XHJcblx0XHRjb25zdCB4T2Zmc2V0ID0gMDtcclxuXHRcdGNvbnN0IHlPZmZzZXQgPSAtMjA7XHJcblx0XHR0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdyZ2IoNDAsIDQwLCA0MCknO1xyXG5cdFx0dGhpcy5jdHgubGluZVdpZHRoID0gMjtcclxuXHRcdHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2IoNywgMTkxLCA0KSc7XHJcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdHRoaXMuY3R4LnJvdW5kUmVjdCh4ICsgeE9mZnNldCAtIDEsIHkgKyB5T2Zmc2V0IC0gMSwgdyArIDIsIGggKyAyLCA4KTtcclxuXHRcdHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuXHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0dGhpcy5jdHgucm91bmRSZWN0KHggKyB4T2Zmc2V0LCB5ICsgeU9mZnNldCArIGgsIHcsIC1oICogcGVyY2VudENoYXJnZWQsIDgpO1xyXG5cdFx0dGhpcy5jdHguZmlsbCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlZHVjZUhlYWx0aChvYmplY3Q6IHN0cmluZywgYW10OiBudW1iZXIpIHtcclxuXHRcdGlmICh0aGlzLmxhc3RPYmplY3RIaXQgPT09IG9iamVjdCkgcmV0dXJuO1xyXG5cdFx0aWYgKHRoaXMuaGVhbHRoIC0gYW10IDw9IDApIHRoaXMuaGVhbHRoID0gMDtcclxuXHRcdGVsc2UgdGhpcy5oZWFsdGggLT0gYW10O1xyXG5cclxuXHRcdHRoaXMubGFzdE9iamVjdEhpdCA9IG9iamVjdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbmNyZWFzZUhlYWx0aChhbXQ6IG51bWJlcikge1xyXG5cdFx0aWYgKHRoaXMuaGVhbHRoICsgYW10ID49IDEwMCkgdGhpcy5oZWFsdGggPSAxMDA7XHJcblx0XHRlbHNlIHRoaXMuaGVhbHRoICs9IGFtdDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZHJhd0hlYWx0aCgpIHtcclxuXHRcdGNvbnN0IHNlY3Rpb25TdGFydFggPSAzMDtcclxuXHRcdGNvbnN0IHNlY3Rpb25TdGFydFkgPSAxMTtcclxuXHRcdGNvbnN0IHNlY3Rpb25XID0gMTYwO1xyXG5cdFx0Y29uc3Qgc2VjdGlvbkggPSAxMjtcclxuXHJcblx0XHR0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjcpJztcclxuXHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0dGhpcy5jdHgucm91bmRSZWN0KHNlY3Rpb25TdGFydFggLSAyLCBzZWN0aW9uU3RhcnRZIC0gMiwgc2VjdGlvblcgKyA0LCBzZWN0aW9uSCArIDQsIDEwKTtcclxuXHRcdHRoaXMuY3R4LmZpbGwoKTtcclxuXHJcblx0XHR0aGlzLmN0eC5maWxsU3R5bGUgPVxyXG5cdFx0XHR0aGlzLmhlYWx0aCA+PSA5MFxyXG5cdFx0XHRcdD8gJ3JnYmEoNywgMTkxLCA0LCAxKSdcclxuXHRcdFx0XHQ6IHRoaXMuaGVhbHRoID49IDUwICYmIHRoaXMuaGVhbHRoIDwgOTBcclxuXHRcdFx0XHQ/ICdyZ2JhKDIwMCwgMjAwLCAwLCAxKSdcclxuXHRcdFx0XHQ6ICdyZ2JhKDIzMCwgMCwgMCwgMSknO1xyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHR0aGlzLmN0eC5yb3VuZFJlY3Qoc2VjdGlvblN0YXJ0WCwgc2VjdGlvblN0YXJ0WSwgc2VjdGlvblcgKiAodGhpcy5oZWFsdGggLyAxMDApLCBzZWN0aW9uSCwgMTApO1xyXG5cdFx0dGhpcy5jdHguZmlsbCgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3TmV4dExldmVsVGV4dCgpIHtcclxuXHRcdGNvbnN0IHcgPSAyNTA7XHJcblx0XHRjb25zdCBoID0gNzA7XHJcblx0XHRjb25zdCB5T2Zmc2V0ID0gLTIwMDtcclxuXHJcblx0XHR0aGlzLmN0eC5maWxsU3R5bGUgPSBgcmdiYSgwLCAwLCAwLCAke3RoaXMubGV2ZWxUZXh0T3BhY2l0eSA+PSAwLjcgPyAwLjcgOiB0aGlzLmxldmVsVGV4dE9wYWNpdHl9KWA7XHJcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdHRoaXMuY3R4LnJvdW5kUmVjdCh0aGlzLndvcmxkLndpZHRoIC8gMiAtIHcgLyAyLCB0aGlzLndvcmxkLmhlaWdodCAvIDIgLSBoIC8gMiArIHlPZmZzZXQsIHcsIGgsIDEwKTtcclxuXHRcdHRoaXMuY3R4LmZpbGwoKTtcclxuXHJcblx0XHR0aGlzLmN0eC5mb250ID0gJzQwcHggQXJpYWwnO1xyXG5cdFx0dGhpcy5jdHguZmlsbFN0eWxlID0gYHJnYmEoMjU1LCAyNTUsIDI1NSwgJHt0aGlzLmxldmVsVGV4dE9wYWNpdHl9KWA7XHJcblx0XHR0aGlzLmN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuXHRcdHRoaXMuY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG5cdFx0dGhpcy5jdHguZmlsbFRleHQoXHJcblx0XHRcdGBMZXZlbCAke3RoaXMuY3VycmVudExldmVsICsgMX1gLFxyXG5cdFx0XHR0aGlzLndvcmxkLndpZHRoIC8gMixcclxuXHRcdFx0dGhpcy53b3JsZC5oZWlnaHQgLyAyICsgeU9mZnNldFxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmxldmVsVGV4dE9wYWNpdHkgKz0gdGhpcy5sZXZlbFRleHRPcGFjaXR5SW5jO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGJlZ2luTGV2ZWxUZXh0QW5pbWF0aW9uKCkge1xyXG5cdFx0dGhpcy5kcmF3aW5nTGV2ZWxUZXh0ID0gdHJ1ZTtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmxldmVsVGV4dE9wYWNpdHlJbmMgKj0gLTE7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZHJhd2luZ0xldmVsVGV4dCA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMubGV2ZWxUZXh0T3BhY2l0eUluYyAqPSAtMTtcclxuXHRcdFx0fSwgMTUwMCk7XHJcblx0XHR9LCAxNTAwKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkcmF3KCkge1xyXG5cdFx0dGhpcy5kcmF3SGVhbHRoKCk7XHJcblx0XHR0aGlzLmRyYXdGcHMoKTtcclxuXHRcdHRoaXMuZHJhd1Bvd2VyVXAoKTtcclxuXHJcblx0XHRpZiAodGhpcy5kcmF3aW5nTGV2ZWxUZXh0KSB0aGlzLmRyYXdOZXh0TGV2ZWxUZXh0KCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBnYW1lT2JqZWN0IGZyb20gJy4uL3B1YmxpYy9nYW1lT2JqZWN0JztcclxuaW1wb3J0IEFiaWxpdGllcyBmcm9tICcuL2FiaWxpdGllcyc7XHJcbmltcG9ydCBDb2xsaXNpb25zIGZyb20gJy4vY29sbGlzaW9ucyc7XHJcbmltcG9ydCBIdWQgZnJvbSAnLi9odWQnO1xyXG5pbXBvcnQgUGxhdGZvcm1zIGZyb20gJy4vcGxhdGZvcm1zJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcblxyXG5jb25zdCB3b3JsZCA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ybGQnKTtcclxuY29uc3QgY3R4ID0gPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRD53b3JsZC5nZXRDb250ZXh0KCcyZCcsIHsgYWxwaGE6IGZhbHNlIH0pO1xyXG5cclxuY29uc3Qgc3RhcnRCdG4gPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0QnRuJyk7XHJcblxyXG4vLyBGb3IgZ2FtZSBsb29wXHJcbmxldCByZXF1ZXN0SWQ6IG51bWJlciB8IG51bGwsIG5vdzogbnVtYmVyLCB0aGVuOiBudW1iZXIsIGVsYXBzZWQ6IG51bWJlciwgZnBzSW50ZXJ2YWw6IG51bWJlcjtcclxuXHJcbmxldCBmcmFtZVJhdGUgPSA2MDtcclxubGV0IGZyYW1lcyA9IDA7XHJcbmxldCBwYXVzZWQgPSBmYWxzZTtcclxubGV0IGxldmVsc1N0YXJ0ZWQgPSAtMTtcclxuXHJcbi8vIENsYXNzZXNcclxubGV0IHBsYXRmb3JtczogUGxhdGZvcm1zLCBwbGF5ZXI6IFBsYXllciwgaHVkOiBIdWQsIGNvbGxpc2lvbnM6IENvbGxpc2lvbnMsIGFiaWxpdGllczogQWJpbGl0aWVzO1xyXG5cclxuY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcclxuXHRpZiAocmVxdWVzdElkKSBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SWQpO1xyXG5cdHJlcXVlc3RJZCA9IG51bGw7XHJcblx0cHJlcEdhbWUoKTtcclxuXHRzdGFydEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRzdGFydEJ0bi5pbm5lckhUTUwgPSAnUGxheSBBZ2Fpbic7XHJcblx0bGV2ZWxzU3RhcnRlZCA9IC0xO1xyXG59O1xyXG5cclxuY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XHJcblx0cmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcclxuXHJcblx0ZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnJhbWVSYXRlO1xyXG5cdG5vdyA9IERhdGUubm93KCk7XHJcblx0ZWxhcHNlZCA9IG5vdyAtICh0aGVuIHx8IDApO1xyXG5cclxuXHRpZiAoZWxhcHNlZCA+IGZwc0ludGVydmFsKSB7XHJcblx0XHRpZiAoZnJhbWVzID09PSAwKVxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRodWQuZnBzID0gZnJhbWVzO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGZyYW1lcyk7XHJcblx0XHRcdFx0ZnJhbWVzID0gMDtcclxuXHRcdFx0fSwgMTAwMCk7XHJcblx0XHRmcmFtZXMgKz0gMTtcclxuXHRcdHRoZW4gPSBub3cgLSAoZWxhcHNlZCAlIGZwc0ludGVydmFsKTtcclxuXHJcblx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIHdvcmxkLndpZHRoLCB3b3JsZC5oZWlnaHQpO1xyXG5cdFx0aWYgKCFwYXVzZWQpIHtcclxuXHRcdFx0cGxhdGZvcm1zLm1vdmUoKTtcclxuXHRcdFx0cGxheWVyLnNwZWVkID0gZ2FtZU9iamVjdC5sZXZlbHNbcGxhdGZvcm1zLmN1cnJlbnRMZXZlbF0uc3BlZWQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRwbGF5ZXIuc3BlZWQgPSAwO1xyXG5cdFx0fVxyXG5cdFx0cGxhdGZvcm1zLmRyYXcoKTtcclxuXHRcdHBsYXllci5kcmF3KCk7XHJcblx0XHRodWQuZHJhdygpO1xyXG5cclxuXHRcdGlmIChodWQuY3VycmVudFBvd2VyVXAubmFtZSAmJiBodWQucG93ZXJVcFBlcmNlbnRVc2VkID49IDEpIGFiaWxpdGllcy5maW5pc2hQb3dlclVwKCk7XHJcblxyXG5cdFx0Ly8gaWYgKHBsYXRmb3Jtcy5wbGF0c1Zpc2libGU/LlswXT8uaW5kZXggPT09IDAgJiYgcGxhdGZvcm1zLmN1cnJlbnRMZXZlbCA+IGxldmVsc1N0YXJ0ZWQpIHtcclxuXHRcdC8vIFx0bGV2ZWxzU3RhcnRlZCA9IHBsYXRmb3Jtcy5jdXJyZW50TGV2ZWw7XHJcblx0XHQvLyB9XHJcblxyXG5cdFx0aWYgKGh1ZC5oZWFsdGggPT09IDAgfHwgcGxhdGZvcm1zLmdhbWVDb21wbGV0ZWQpIGVuZEdhbWUoKTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XHJcblx0Z2FtZUxvb3AoKTtcclxufTtcclxuXHJcbmNvbnN0IHByZXBHYW1lID0gYXN5bmMgKCkgPT4ge1xyXG5cdE9iamVjdC5mcmVlemUoZ2FtZU9iamVjdCk7XHJcblxyXG5cdGh1ZCA9IG5ldyBIdWQoY3R4LCB3b3JsZCwgZnJhbWVSYXRlKTtcclxuXHRwbGF5ZXIgPSBuZXcgUGxheWVyKGN0eCwgd29ybGQsIGh1ZCk7XHJcblx0Y29sbGlzaW9ucyA9IG5ldyBDb2xsaXNpb25zKGN0eCwgd29ybGQsIHBsYXllciwgaHVkKTtcclxuXHRhYmlsaXRpZXMgPSBuZXcgQWJpbGl0aWVzKGN0eCwgd29ybGQsIGh1ZCwgY29sbGlzaW9ucywgcGxheWVyKTtcclxuXHRwbGF0Zm9ybXMgPSBuZXcgUGxhdGZvcm1zKGN0eCwgd29ybGQsIHBsYXllciwgaHVkLCBjb2xsaXNpb25zLCBhYmlsaXRpZXMsIGdhbWVPYmplY3QpO1xyXG5cclxuXHRhd2FpdCBwbGF0Zm9ybXMuc2V0VXAoKTtcclxuXHRhd2FpdCBwbGF5ZXIuc2V0VXAoKTtcclxuXHRhd2FpdCBhYmlsaXRpZXMuc2V0VXAoKTtcclxuXHRhd2FpdCBodWQuc2V0VXAoKTtcclxuXHJcblx0Ly8gc3RhcnRHYW1lKCk7XHJcblx0c3RhcnRCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0Ly8gc3RhcnRCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufTtcclxuXHJcbnByZXBHYW1lKCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XHJcblx0c3dpdGNoIChlLmNvZGUpIHtcclxuXHRcdGNhc2UgJ1NwYWNlJzpcclxuXHRcdFx0aWYgKHJlcXVlc3RJZCkge1xyXG5cdFx0XHRcdGlmIChwYXVzZWQpIHtcclxuXHRcdFx0XHRcdHBhdXNlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoIXBsYXllci5sb2FkaW5nSnVtcCkgcGxheWVyLmxvYWRpbmdKdW1wID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XHJcblx0c3dpdGNoIChlLmNvZGUpIHtcclxuXHRcdGNhc2UgJ0VzY2FwZSc6XHJcblx0XHRcdGlmIChwYXVzZWQpIHtcclxuXHRcdFx0XHRwYXVzZWQgPSBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwYXVzZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRjYXNlICdTcGFjZSc6XHJcblx0XHRcdHBsYXllci5qdW1wKCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAnS2V5RSc6XHJcblx0XHRcdGFiaWxpdGllcy51c2VQb3dlclVwKCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufSk7XHJcblxyXG5zdGFydEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG5cdHN0YXJ0R2FtZSgpO1xyXG5cdHN0YXJ0QnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn07XHJcbiIsImltcG9ydCBBYmlsaXRpZXMgZnJvbSAnLi9hYmlsaXRpZXMnO1xyXG5pbXBvcnQgQ29sbGlzaW9ucyBmcm9tICcuL2NvbGxpc2lvbnMnO1xyXG5pbXBvcnQgSHVkIGZyb20gJy4vaHVkJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IENvbnRleHQsIElHYW1lT2JqZWN0LCBJTGV2ZWwsIElQbGF0T2JqZWN0LCBJUGxhdGZvcm0sIElQb3dlclVwLCBJVmlzaWJsZVBsYXQgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtcyB7XHJcblx0cHJpdmF0ZSBjdHg6IENvbnRleHQ7XHJcblx0cHJpdmF0ZSB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblx0cHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcclxuXHRwcml2YXRlIGh1ZDogSHVkO1xyXG5cdHByaXZhdGUgY29sbGlzaW9uczogQ29sbGlzaW9ucztcclxuXHRwcml2YXRlIGFiaWxpdGllczogQWJpbGl0aWVzO1xyXG5cdHByaXZhdGUgZ2FtZU9iamVjdDogSUdhbWVPYmplY3Q7XHJcblx0cHVibGljIGN1cnJlbnRMZXZlbDogbnVtYmVyO1xyXG5cdHB1YmxpYyBwbGF0c1Zpc2libGU6IElWaXNpYmxlUGxhdFtdO1xyXG5cdHByaXZhdGUgYmFja2dyb3VuZFg6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhY2tncm91bmRYMjogbnVtYmVyO1xyXG5cdHByaXZhdGUgYmdJbWdZT2Zmc2V0OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBiZ0ltZ1lPZmZzZXQyOiBudW1iZXI7XHJcblx0cHVibGljIGdhbWVPdmVyOiBib29sZWFuO1xyXG5cdHByaXZhdGUgY29sbGlzaW9uTWFyZ2luOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBpbWFnZVBhdGhzOiBzdHJpbmdbXTtcclxuXHRwcml2YXRlIGltYWdlczogYW55O1xyXG5cdHByaXZhdGUgYmdJbWcxOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBiZ0ltZzI6IHN0cmluZztcclxuXHRwdWJsaWMgZ2FtZUNvbXBsZXRlZDogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRjdHg6IENvbnRleHQsXHJcblx0XHR3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQsXHJcblx0XHRwbGF5ZXI6IFBsYXllcixcclxuXHRcdGh1ZDogSHVkLFxyXG5cdFx0Y29sbGlzaW9uczogQ29sbGlzaW9ucyxcclxuXHRcdGFiaWxpdGllczogQWJpbGl0aWVzLFxyXG5cdFx0Z2FtZU9iamVjdDogYW55XHJcblx0KSB7XHJcblx0XHR0aGlzLmN0eCA9IGN0eDtcclxuXHRcdHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cdFx0dGhpcy5odWQgPSBodWQ7XHJcblx0XHR0aGlzLmNvbGxpc2lvbnMgPSBjb2xsaXNpb25zO1xyXG5cdFx0dGhpcy5hYmlsaXRpZXMgPSBhYmlsaXRpZXM7XHJcblx0XHR0aGlzLmdhbWVPYmplY3QgPSBnYW1lT2JqZWN0O1xyXG5cdFx0dGhpcy5jdXJyZW50TGV2ZWwgPSAwO1xyXG5cdFx0dGhpcy5wbGF0c1Zpc2libGUgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbmRleDogMCxcclxuXHRcdFx0XHR4OiAwLFxyXG5cdFx0XHRcdGxldmVsOiAwLFxyXG5cdFx0XHR9LFxyXG5cdFx0XTtcclxuXHRcdHRoaXMuYmFja2dyb3VuZFggPSAwO1xyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kWDIgPSB0aGlzLndvcmxkLndpZHRoO1xyXG5cdFx0dGhpcy5iZ0ltZ1lPZmZzZXQgPSAwO1xyXG5cdFx0dGhpcy5iZ0ltZ1lPZmZzZXQyID0gMDtcclxuXHRcdHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcclxuXHRcdHRoaXMuY29sbGlzaW9uTWFyZ2luID0gMjY7XHJcblx0XHR0aGlzLmltYWdlUGF0aHMgPSBbXHJcblx0XHRcdCcuLi9wdWJsaWMvYmdMZXZlbDEucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy9iZ0xldmVsMi5wbmcnLFxyXG5cdFx0XHQvLyBQbGF0Zm9ybSBUZXh0dXJlc1xyXG5cdFx0XHQnLi4vcHVibGljL3dvb2RQbGF0LnBuZycsXHJcblx0XHRcdCcuLi9wdWJsaWMvZGlydFBsYXQucG5nJyxcclxuXHRcdFx0Ly8gRGVjb3JcclxuXHRcdFx0Jy4uL3B1YmxpYy9zdGFydFNpZ24ucG5nJyxcclxuXHRcdFx0Ly8gT2JzdGljbGVzXHJcblx0XHRcdCcuLi9wdWJsaWMvcm9jazEucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy9yb2NrMi5wbmcnLFxyXG5cdFx0XHQnLi4vcHVibGljL3JvY2szLnBuZycsXHJcblx0XHRdO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSB7fTtcclxuXHRcdHRoaXMuYmdJbWcxID0gJyc7XHJcblx0XHR0aGlzLmJnSW1nMiA9ICcnO1xyXG5cdFx0dGhpcy5nYW1lQ29tcGxldGVkID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgc2V0VXAoKSB7XHJcblx0XHRjb25zdCBwcmVsb2FkSW1hZ2VzID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBwcm9taXNlcyA9IHRoaXMuaW1hZ2VQYXRocy5tYXAoKHBhdGg6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBuYW1lID0gcGF0aC5zcGxpdCgnLycpLnBvcCgpPy5zcGxpdCgnLicpWzBdO1xyXG5cdFx0XHRcdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHJcblx0XHRcdFx0XHRpbWFnZS5zcmMgPSBwYXRoO1xyXG5cdFx0XHRcdFx0aW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKFtuYW1lLCBpbWFnZV0pO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdGltYWdlLm9uZXJyb3IgPSAoKSA9PiByZWplY3QoYEltYWdlIGZhaWxlZCB0byBsb2FkOiAke3BhdGh9YCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBpbWdBcnJheXRlbXA6IGFueVtdID0gYXdhaXQgcHJlbG9hZEltYWdlcygpO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoaW1nQXJyYXl0ZW1wKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbmV4dFBsYXRmb3JtKCkge1xyXG5cdFx0Y29uc3QgbGFzdFZpc2libGVQbGF0OiBJVmlzaWJsZVBsYXQgPSB0aGlzLnBsYXRzVmlzaWJsZVt0aGlzLnBsYXRzVmlzaWJsZS5sZW5ndGggLSAxXTtcclxuXHRcdGNvbnN0IHBsYXRzUmVmOiBJUGxhdGZvcm1bXSA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdLnBsYXRmb3JtcztcclxuXHRcdGNvbnN0IGxhc3RQbGF0UmVmOiBJUGxhdGZvcm0gPSBwbGF0c1JlZltsYXN0VmlzaWJsZVBsYXQuaW5kZXhdO1xyXG5cdFx0Ly8gY29uc3QgbmV4dFBsYXQ6IElQbGF0Zm9ybSA9IHBsYXRzUmVmW2xhc3RWaXNpYmxlUGxhdC5pbmRleCArIDFdO1xyXG5cclxuXHRcdGlmIChsYXN0VmlzaWJsZVBsYXQuaW5kZXggPT09IHBsYXRzUmVmLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0aWYgKCF0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsICsgMV0pIHtcclxuXHRcdFx0XHR0aGlzLmdhbWVDb21wbGV0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmN1cnJlbnRMZXZlbCArPSAxO1xyXG5cclxuXHRcdFx0dGhpcy5wbGF0c1Zpc2libGUucHVzaCh7XHJcblx0XHRcdFx0aW5kZXg6IDAsXHJcblx0XHRcdFx0eDogbGFzdFZpc2libGVQbGF0LnggKyBsYXN0UGxhdFJlZi5sZW4gKyBsYXN0UGxhdFJlZi5nYXBUb05leHQsXHJcblx0XHRcdFx0bGV2ZWw6IHRoaXMuY3VycmVudExldmVsLFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnBsYXRzVmlzaWJsZVswXS54ICsgcGxhdHNSZWZbdGhpcy5wbGF0c1Zpc2libGVbMF0uaW5kZXhdLmxlbiA8IDApIHRoaXMucGxhdHNWaXNpYmxlLnNoaWZ0KCk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGxhc3RWaXNpYmxlUGxhdC5pbmRleCA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLmh1ZC5jdXJyZW50TGV2ZWwgPSB0aGlzLmN1cnJlbnRMZXZlbDtcclxuXHRcdFx0dGhpcy5odWQuYmVnaW5MZXZlbFRleHRBbmltYXRpb24oKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnBsYXRzVmlzaWJsZS5wdXNoKHtcclxuXHRcdFx0aW5kZXg6IGxhc3RWaXNpYmxlUGxhdC5pbmRleCArIDEsXHJcblx0XHRcdHg6IGxhc3RWaXNpYmxlUGxhdC54ICsgbGFzdFBsYXRSZWYubGVuICsgbGFzdFBsYXRSZWYuZ2FwVG9OZXh0LFxyXG5cdFx0XHRsZXZlbDogdGhpcy5jdXJyZW50TGV2ZWwsXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAodGhpcy5wbGF0c1Zpc2libGVbMF0ueCArIHBsYXRzUmVmW3RoaXMucGxhdHNWaXNpYmxlWzBdLmluZGV4XS5sZW4gPCAwKSB0aGlzLnBsYXRzVmlzaWJsZS5zaGlmdCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG1vdmUoKSB7XHJcblx0XHRpZiAodGhpcy5nYW1lQ29tcGxldGVkKSByZXR1cm47XHJcblxyXG5cdFx0Y29uc3QgbGV2ZWw6IElMZXZlbCA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdO1xyXG5cdFx0Y29uc3QgcGxhdFJlZjogSVBsYXRmb3JtID0gbGV2ZWwucGxhdGZvcm1zW3RoaXMucGxhdHNWaXNpYmxlW3RoaXMucGxhdHNWaXNpYmxlLmxlbmd0aCAtIDFdLmluZGV4XTtcclxuXHJcblx0XHRjb25zdCBsYXN0UGxhdFggPSB0aGlzLnBsYXRzVmlzaWJsZVt0aGlzLnBsYXRzVmlzaWJsZS5sZW5ndGggLSAxXS54O1xyXG5cclxuXHRcdGlmIChsYXN0UGxhdFggKyBwbGF0UmVmLmxlbiA8PSB0aGlzLndvcmxkLndpZHRoKSB0aGlzLm5leHRQbGF0Zm9ybSgpO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF0c1Zpc2libGUubGVuZ3RoOyBpKyspIHRoaXMucGxhdHNWaXNpYmxlW2ldLnggLT0gbGV2ZWwuc3BlZWQ7XHJcblx0XHR0aGlzLmJhY2tncm91bmRYIC09IGxldmVsLnNwZWVkIC8gODtcclxuXHRcdGlmICh0aGlzLmJnSW1nMikgdGhpcy5iYWNrZ3JvdW5kWDIgLT0gbGV2ZWwuc3BlZWQgLyA4O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3RGVjb3JGb3JQbGF0KGRlY29yOiBJUGxhdE9iamVjdFtdLCBwbGF0WVRvcDogbnVtYmVyLCBwbGF0WDogbnVtYmVyLCBwbGF0TGVuOiBudW1iZXIpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGVjb3I/Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGltZ1NyYzogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMuaW1hZ2VzW2RlY29yW2ldLm5hbWVdO1xyXG5cdFx0XHRjb25zdCBkZWNvclhWYWxzID0gZGVjb3JbaV0ueExvY3NPblBsYXRCeVBlcmM7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRlY29yWFZhbHM/Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRcdFx0aW1nU3JjLFxyXG5cdFx0XHRcdFx0cGxhdFggKyBwbGF0TGVuICogZGVjb3JYVmFsc1tpXSxcclxuXHRcdFx0XHRcdHBsYXRZVG9wIC0gdGhpcy5pbWFnZXNbZGVjb3JbaV0ubmFtZV0uaGVpZ2h0ICsgMTAsXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tkZWNvcltpXS5uYW1lXS53aWR0aCxcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2VzW2RlY29yW2ldLm5hbWVdLmhlaWdodFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZHJhd09ic3RpY2xlT25QbGF0KFxyXG5cdFx0b2JzdGljbGVzOiBJUGxhdE9iamVjdFtdLFxyXG5cdFx0cGxhdFlUb3A6IG51bWJlcixcclxuXHRcdHBsYXRYOiBudW1iZXIsXHJcblx0XHRwbGF0TGVuOiBudW1iZXIsXHJcblx0XHRwbGF0SW5kZXg6IG51bWJlclxyXG5cdCkge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvYnN0aWNsZXM/Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGltZ1NyYzogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMuaW1hZ2VzW29ic3RpY2xlc1tpXS5uYW1lXTtcclxuXHRcdFx0Y29uc3Qgb2JzdGljbGVYVmFscyA9IG9ic3RpY2xlc1tpXS54TG9jc09uUGxhdEJ5UGVyYztcclxuXHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb2JzdGljbGVYVmFscz8ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0XHRpbWdTcmMsXHJcblx0XHRcdFx0XHRwbGF0WCArIHBsYXRMZW4gKiBvYnN0aWNsZVhWYWxzW2ldLFxyXG5cdFx0XHRcdFx0cGxhdFlUb3AgLSB0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0uaGVpZ2h0ICsgMTAsXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0ud2lkdGgsXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0uaGVpZ2h0XHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0dGhpcy5jb2xsaXNpb25zLmNoZWNrRm9yQ29sbGlzaW9uKHtcclxuXHRcdFx0XHRcdHgxOiB0aGlzLnBsYXllci54LFxyXG5cdFx0XHRcdFx0eTE6IHRoaXMucGxheWVyLnksXHJcblx0XHRcdFx0XHR4MjogcGxhdFggKyBwbGF0TGVuICogb2JzdGljbGVYVmFsc1tpXSxcclxuXHRcdFx0XHRcdHkyOiBwbGF0WVRvcCAtIHRoaXMuaW1hZ2VzW29ic3RpY2xlc1tpXS5uYW1lXS5oZWlnaHQgKyAxMCxcclxuXHRcdFx0XHRcdHcxOiB0aGlzLnBsYXllci53LFxyXG5cdFx0XHRcdFx0aDE6IHRoaXMucGxheWVyLmgsXHJcblx0XHRcdFx0XHR3MjogdGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdLndpZHRoLFxyXG5cdFx0XHRcdFx0aDI6XHJcblx0XHRcdFx0XHRcdHRoaXMuaW1hZ2VzW29ic3RpY2xlc1tpXS5uYW1lXS5oZWlnaHQgfHxcclxuXHRcdFx0XHRcdFx0dGhpcy53b3JsZC5oZWlnaHQgLSAocGxhdFlUb3AgLSB0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0uaGVpZ2h0ICsgMTApLFxyXG5cdFx0XHRcdFx0bWFyZ2luOiB0aGlzLmNvbGxpc2lvbk1hcmdpbixcclxuXHRcdFx0XHRcdG9iamVjdDogYCR7b2JzdGljbGVzW2ldLm5hbWV9XyR7cGxhdEluZGV4fV8ke29ic3RpY2xlWFZhbHNbaV19YCxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3QmdJbWFnZSgpIHtcclxuXHRcdC8vIElmIG5vIGJnIGltYWdlIDEsIGFzc2lnbiB0byBpdCBhbmQgYXNzaWduIGl0J3MgeSBvZmZzZXRcclxuXHRcdGlmICghdGhpcy5iZ0ltZzEubGVuZ3RoKSB7XHJcblx0XHRcdHRoaXMuYmdJbWdZT2Zmc2V0ID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0uYmdJbWdZT2Zmc2V0O1xyXG5cdFx0XHR0aGlzLmJnSW1nMSA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdLmJhY2tncm91bmRJbWc7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuYmdJbWcyLmxlbmd0aCAmJiB0aGlzLmJhY2tncm91bmRYMiA8PSAwKSB7XHJcblx0XHRcdHRoaXMuYmdJbWcxID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0uYmFja2dyb3VuZEltZztcclxuXHRcdFx0dGhpcy5iZ0ltZzIgPSAnJztcclxuXHRcdFx0dGhpcy5iYWNrZ3JvdW5kWCA9IHRoaXMuYmFja2dyb3VuZFgyO1xyXG5cdFx0XHR0aGlzLmJhY2tncm91bmRYMiA9IHRoaXMud29ybGQud2lkdGg7XHJcblx0XHRcdHRoaXMuYmdJbWdZT2Zmc2V0ID0gdGhpcy5iZ0ltZ1lPZmZzZXQyO1xyXG5cdFx0XHR0aGlzLmJnSW1nWU9mZnNldDIgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGJnSW1hZ2UxID0gdGhpcy5pbWFnZXNbdGhpcy5iZ0ltZzFdOyAvLyBMZWZ0IFNpZGUgQmFja2dyb3VuZFxyXG5cclxuXHRcdGlmIChcclxuXHRcdFx0KHRoaXMuYmFja2dyb3VuZFggKyBiZ0ltYWdlMS53aWR0aCA8IHRoaXMud29ybGQud2lkdGggfHxcclxuXHRcdFx0XHR0aGlzLnBsYXRzVmlzaWJsZVswXS5sZXZlbCAhPT0gdGhpcy5jdXJyZW50TGV2ZWwpICYmXHJcblx0XHRcdCF0aGlzLmJnSW1nMi5sZW5ndGhcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLmJhY2tncm91bmRYMiA9IHRoaXMud29ybGQud2lkdGg7XHJcblx0XHRcdHRoaXMuYmdJbWdZT2Zmc2V0MiA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdLmJnSW1nWU9mZnNldDtcclxuXHRcdFx0dGhpcy5iZ0ltZzIgPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXS5iYWNrZ3JvdW5kSW1nO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGJnSW1hZ2UyID0gdGhpcy5pbWFnZXM/Llt0aGlzLmJnSW1nMl07IC8vIFJpZ2h0IFNpZGUgQmFja2dyb3VuZFxyXG5cclxuXHRcdC8vIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdC8vIFx0YmdJbWFnZTEsXHJcblx0XHQvLyBcdDAsXHJcblx0XHQvLyBcdGJnSW1hZ2UxLmhlaWdodCAtIGJnSW1hZ2UxLmhlaWdodCAqIHRoaXMuYmdJbWdTY2FsZXIsXHJcblx0XHQvLyBcdGJnSW1hZ2UxLndpZHRoICogdGhpcy5iZ0ltZ1NjYWxlcixcclxuXHRcdC8vIFx0YmdJbWFnZTEuaGVpZ2h0ICogdGhpcy5iZ0ltZ1NjYWxlcixcclxuXHRcdC8vIFx0dGhpcy5iYWNrZ3JvdW5kWCxcclxuXHRcdC8vIFx0dGhpcy53b3JsZC5oZWlnaHQgKyB0aGlzLmJnSW1nWU9mZnNldCxcclxuXHRcdC8vIFx0YmdJbWFnZTEud2lkdGgsXHJcblx0XHQvLyBcdC1iZ0ltYWdlMS5oZWlnaHRcclxuXHRcdC8vICk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLndvcmxkLndpZHRoIC8gYmdJbWFnZTEud2lkdGgpO1xyXG5cclxuXHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0YmdJbWFnZTEsXHJcblx0XHRcdC10aGlzLmJhY2tncm91bmRYLFxyXG5cdFx0XHRiZ0ltYWdlMS5oZWlnaHQsXHJcblx0XHRcdGJnSW1hZ2UxLndpZHRoICogKHRoaXMud29ybGQud2lkdGggLyBiZ0ltYWdlMS53aWR0aCksXHJcblx0XHRcdC1iZ0ltYWdlMS5oZWlnaHQgKiAodGhpcy53b3JsZC5oZWlnaHQgLyBiZ0ltYWdlMS5oZWlnaHQpLFxyXG5cdFx0XHQwLFxyXG5cdFx0XHQwLFxyXG5cdFx0XHR0aGlzLndvcmxkLndpZHRoLFxyXG5cdFx0XHR0aGlzLndvcmxkLmhlaWdodFxyXG5cdFx0KTtcclxuXHJcblx0XHRpZiAoYmdJbWFnZTIpIHtcclxuXHRcdFx0Ly8gdGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHQvLyBcdGJnSW1hZ2UyLFxyXG5cdFx0XHQvLyBcdDAsXHJcblx0XHRcdC8vIFx0YmdJbWFnZTIuaGVpZ2h0IC0gYmdJbWFnZTIuaGVpZ2h0ICogdGhpcy5iZ0ltZ1NjYWxlcjIsXHJcblx0XHRcdC8vIFx0YmdJbWFnZTIud2lkdGggKiB0aGlzLmJnSW1nU2NhbGVyMixcclxuXHRcdFx0Ly8gXHRiZ0ltYWdlMi5oZWlnaHQgKiB0aGlzLmJnSW1nU2NhbGVyMixcclxuXHRcdFx0Ly8gXHR0aGlzLmJhY2tncm91bmRYMixcclxuXHRcdFx0Ly8gXHR0aGlzLndvcmxkLmhlaWdodCArIHRoaXMuYmdJbWdZT2Zmc2V0MixcclxuXHRcdFx0Ly8gXHRiZ0ltYWdlMi53aWR0aCxcclxuXHRcdFx0Ly8gXHQtYmdJbWFnZTIuaGVpZ2h0XHJcblx0XHRcdC8vICk7XHJcblx0XHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0XHRiZ0ltYWdlMixcclxuXHRcdFx0XHQtdGhpcy5iYWNrZ3JvdW5kWDIsXHJcblx0XHRcdFx0YmdJbWFnZTIuaGVpZ2h0LFxyXG5cdFx0XHRcdGJnSW1hZ2UyLndpZHRoICogKHRoaXMud29ybGQud2lkdGggLyBiZ0ltYWdlMi53aWR0aCksXHJcblx0XHRcdFx0LWJnSW1hZ2UyLmhlaWdodCAqICh0aGlzLndvcmxkLmhlaWdodCAvIGJnSW1hZ2UyLmhlaWdodCksXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdHRoaXMud29ybGQud2lkdGgsXHJcblx0XHRcdFx0dGhpcy53b3JsZC5oZWlnaHRcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkcmF3KCkge1xyXG5cdFx0dGhpcy5kcmF3QmdJbWFnZSgpO1xyXG5cclxuXHRcdGxldCBpc0ZhbGxpbmcgPSB0cnVlO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXRzVmlzaWJsZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBsZXZlbDogSUxldmVsID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLnBsYXRzVmlzaWJsZVtpXS5sZXZlbF07XHJcblx0XHRcdGNvbnN0IGltZ1cgPVxyXG5cdFx0XHRcdHRoaXMuaW1hZ2VzW2xldmVsLnBsYXRmb3JtVGV4dHVyZV0ud2lkdGggKlxyXG5cdFx0XHRcdChsZXZlbC5wbGF0Zm9ybXNbdGhpcy5wbGF0c1Zpc2libGVbaV0uaW5kZXhdLmxlbiAvIGxldmVsLm1heFBsYXRMZW4pO1xyXG5cclxuXHRcdFx0Y29uc3QgcGxhdGZvcm06IElQbGF0Zm9ybSA9XHJcblx0XHRcdFx0dGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLnBsYXRzVmlzaWJsZVtpXS5sZXZlbF0ucGxhdGZvcm1zW3RoaXMucGxhdHNWaXNpYmxlW2ldLmluZGV4XSB8fCBbXTtcclxuXHJcblx0XHRcdGlmIChwbGF0Zm9ybT8uZGVjb3IpIHtcclxuXHRcdFx0XHR0aGlzLmRyYXdEZWNvckZvclBsYXQoXHJcblx0XHRcdFx0XHRwbGF0Zm9ybS5kZWNvcixcclxuXHRcdFx0XHRcdGxldmVsLnBsYXRmb3Jtc1t0aGlzLnBsYXRzVmlzaWJsZVtpXS5pbmRleF0ueSxcclxuXHRcdFx0XHRcdHRoaXMucGxhdHNWaXNpYmxlW2ldLngsXHJcblx0XHRcdFx0XHRsZXZlbC5wbGF0Zm9ybXNbdGhpcy5wbGF0c1Zpc2libGVbaV0uaW5kZXhdLmxlblxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHBsYXRmb3JtPy5vYnN0aWNsZXMpIHtcclxuXHRcdFx0XHR0aGlzLmRyYXdPYnN0aWNsZU9uUGxhdChcclxuXHRcdFx0XHRcdHBsYXRmb3JtLm9ic3RpY2xlcyxcclxuXHRcdFx0XHRcdHBsYXRmb3JtLnksXHJcblx0XHRcdFx0XHR0aGlzLnBsYXRzVmlzaWJsZVtpXS54LFxyXG5cdFx0XHRcdFx0cGxhdGZvcm0ubGVuLFxyXG5cdFx0XHRcdFx0dGhpcy5wbGF0c1Zpc2libGVbaV0uaW5kZXhcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwbGF0Zm9ybT8ucG93ZXJVcHMpIHtcclxuXHRcdFx0XHR0aGlzLmFiaWxpdGllcy5kcmF3KFxyXG5cdFx0XHRcdFx0cGxhdGZvcm0ucG93ZXJVcHMsXHJcblx0XHRcdFx0XHRwbGF0Zm9ybS55LFxyXG5cdFx0XHRcdFx0dGhpcy5wbGF0c1Zpc2libGVbaV0ueCxcclxuXHRcdFx0XHRcdHBsYXRmb3JtLmxlbixcclxuXHRcdFx0XHRcdHRoaXMucGxhdHNWaXNpYmxlW2ldLmluZGV4XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGxldmVsLnBsYXRmb3JtSCkge1xyXG5cdFx0XHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2VzW2xldmVsLnBsYXRmb3JtVGV4dHVyZV0sXHJcblx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0MCxcclxuXHRcdFx0XHRcdGltZ1csXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tsZXZlbC5wbGF0Zm9ybVRleHR1cmVdLmhlaWdodCxcclxuXHRcdFx0XHRcdHRoaXMucGxhdHNWaXNpYmxlW2ldLngsXHJcblx0XHRcdFx0XHRsZXZlbC5wbGF0Zm9ybXNbdGhpcy5wbGF0c1Zpc2libGVbaV0uaW5kZXhdLnksXHJcblx0XHRcdFx0XHRsZXZlbC5wbGF0Zm9ybXNbdGhpcy5wbGF0c1Zpc2libGVbaV0uaW5kZXhdLmxlbixcclxuXHRcdFx0XHRcdGxldmVsLnBsYXRmb3JtSFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlXSxcclxuXHRcdFx0XHRcdDAsXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tsZXZlbC5wbGF0Zm9ybVRleHR1cmVdLmhlaWdodCxcclxuXHRcdFx0XHRcdGltZ1csXHJcblx0XHRcdFx0XHQtMi41ICpcclxuXHRcdFx0XHRcdFx0dGhpcy5pbWFnZXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlXS5oZWlnaHQgKlxyXG5cdFx0XHRcdFx0XHQoKHRoaXMud29ybGQuaGVpZ2h0IC0gbGV2ZWwucGxhdGZvcm1zW3RoaXMucGxhdHNWaXNpYmxlW2ldLmluZGV4XS55KSAvXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5pbWFnZXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlXS5oZWlnaHQpLFxyXG5cdFx0XHRcdFx0dGhpcy5wbGF0c1Zpc2libGVbaV0ueCxcclxuXHRcdFx0XHRcdGxldmVsLnBsYXRmb3Jtc1t0aGlzLnBsYXRzVmlzaWJsZVtpXS5pbmRleF0ueSxcclxuXHRcdFx0XHRcdGxldmVsLnBsYXRmb3Jtc1t0aGlzLnBsYXRzVmlzaWJsZVtpXS5pbmRleF0ubGVuLFxyXG5cdFx0XHRcdFx0dGhpcy53b3JsZC5oZWlnaHQgLSBsZXZlbC5wbGF0Zm9ybXNbdGhpcy5wbGF0c1Zpc2libGVbaV0uaW5kZXhdLnlcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHQvLyB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XHJcblx0XHRcdFx0Ly8gdGhpcy5jdHgucmVjdChcclxuXHRcdFx0XHQvLyBcdHBsYXQueCxcclxuXHRcdFx0XHQvLyBcdGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55LFxyXG5cdFx0XHRcdC8vIFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLmxlbixcclxuXHRcdFx0XHQvLyBcdHRoaXMud29ybGQuaGVpZ2h0IC0gbGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnlcclxuXHRcdFx0XHQvLyApO1xyXG5cdFx0XHRcdC8vIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBpc0NvbGxpZGluZyA9IHRoaXMuY29sbGlzaW9ucy5jaGVja0ZvclBsYXRDb2xsaXNpb24oe1xyXG5cdFx0XHRcdHgxOiB0aGlzLnBsYXllci54LFxyXG5cdFx0XHRcdHkxOiB0aGlzLnBsYXllci55LFxyXG5cdFx0XHRcdHgyOiB0aGlzLnBsYXRzVmlzaWJsZVtpXS54LFxyXG5cdFx0XHRcdHkyOiBsZXZlbC5wbGF0Zm9ybXNbdGhpcy5wbGF0c1Zpc2libGVbaV0uaW5kZXhdLnksXHJcblx0XHRcdFx0dzE6IHRoaXMucGxheWVyLncsXHJcblx0XHRcdFx0aDE6IHRoaXMucGxheWVyLmgsXHJcblx0XHRcdFx0dzI6IGxldmVsLnBsYXRmb3Jtc1t0aGlzLnBsYXRzVmlzaWJsZVtpXS5pbmRleF0ubGVuLFxyXG5cdFx0XHRcdGgyOiBsZXZlbC5wbGF0Zm9ybUggfHwgdGhpcy53b3JsZC5oZWlnaHQgLSBsZXZlbC5wbGF0Zm9ybXNbdGhpcy5wbGF0c1Zpc2libGVbaV0uaW5kZXhdLnksXHJcblx0XHRcdFx0bWFyZ2luOiB0aGlzLmNvbGxpc2lvbk1hcmdpbixcclxuXHRcdFx0XHRvYmplY3Q6IGAke3RoaXMuY3VycmVudExldmVsfV8ke3RoaXMucGxhdHNWaXNpYmxlW2ldLmluZGV4fWAsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKGlzQ29sbGlkaW5nKSBpc0ZhbGxpbmcgPSBmYWxzZTtcclxuXHJcblx0XHRcdC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMyknO1xyXG5cdFx0XHQvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0Ly8gdGhpcy5jdHgucmVjdCh0aGlzLnBsYXRmb3Jtc1tpXS54LCB0aGlzLnBsYXRmb3Jtc1tpXS55LCB0aGlzLnBsYXRmb3Jtc1tpXS53LCB0aGlzLmgpO1xyXG5cdFx0XHQvLyB0aGlzLmN0eC5maWxsKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGlzRmFsbGluZykgdGhpcy5wbGF5ZXIuaXNJbkFpciA9IHRydWU7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBIdWQgZnJvbSAnLi9odWQnO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG5cdHByaXZhdGUgY3R4OiBDb250ZXh0O1xyXG5cdHByaXZhdGUgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cdHByaXZhdGUgaHVkOiBIdWQ7XHJcblx0cHJpdmF0ZSBhc3BlY3RSYXRpbzogbnVtYmVyO1xyXG5cdHB1YmxpYyB4OiBudW1iZXI7XHJcblx0cHVibGljIHk6IG51bWJlcjtcclxuXHRwdWJsaWMgdzogbnVtYmVyO1xyXG5cdHB1YmxpYyBoOiBudW1iZXI7XHJcblx0cHVibGljIGlzSW5BaXI6IGJvb2xlYW47XHJcblx0cHVibGljIG1heEp1bXBTdGFydDogbnVtYmVyO1xyXG5cdHB1YmxpYyBqdW1wVmVsU3RhcnRSZXNldDogbnVtYmVyO1xyXG5cdHB1YmxpYyBqdW1wVmVsU3RhcnQ6IG51bWJlcjtcclxuXHRwdWJsaWMgeVZlbG9jaXR5OiBudW1iZXI7XHJcblx0cHVibGljIHlBY2M6IG51bWJlcjtcclxuXHRwcml2YXRlIHJvdGF0aW9uOiBudW1iZXI7XHJcblx0cHJpdmF0ZSByb3RhdGlvblNwZWVkOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBpc0p1bXBpbmc6IGJvb2xlYW47XHJcblx0cHVibGljIGxvYWRpbmdKdW1wOiBib29sZWFuO1xyXG5cdHByaXZhdGUgd2hlZWxSb3Q6IG51bWJlcjtcclxuXHRwcml2YXRlIHJvdENvb3Jkc0Zvckp1bXA6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcclxuXHRwdWJsaWMgc3BlZWQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGltYWdlUGF0aHM6IHN0cmluZ1tdO1xyXG5cdHByaXZhdGUgaW1hZ2VzOiBhbnk7XHJcblx0cHJpdmF0ZSBpc0JlaW5nRGFtYWdlZDogYm9vbGVhbjtcclxuXHRwcml2YXRlIGxhc3RPYmplY3RIaXQ6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQsIGh1ZDogSHVkKSB7XHJcblx0XHR0aGlzLmN0eCA9IGN0eDtcclxuXHRcdHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHRcdHRoaXMuYXNwZWN0UmF0aW8gPSAxLjE7XHJcblx0XHR0aGlzLnggPSAxMDA7XHJcblx0XHR0aGlzLnkgPSAxMDA7XHJcblx0XHR0aGlzLncgPSAxNTA7XHJcblx0XHR0aGlzLmggPSB0aGlzLncgLyB0aGlzLmFzcGVjdFJhdGlvO1xyXG5cdFx0dGhpcy5pc0luQWlyID0gdHJ1ZTtcclxuXHRcdHRoaXMubWF4SnVtcFN0YXJ0ID0gMjA7XHJcblx0XHR0aGlzLmp1bXBWZWxTdGFydFJlc2V0ID0gMTA7XHJcblx0XHR0aGlzLmp1bXBWZWxTdGFydCA9IHRoaXMuanVtcFZlbFN0YXJ0UmVzZXQ7XHJcblx0XHR0aGlzLnlWZWxvY2l0eSA9IDA7XHJcblx0XHR0aGlzLnlBY2MgPSAwLjg7XHJcblx0XHR0aGlzLnJvdGF0aW9uID0gMDtcclxuXHRcdHRoaXMucm90YXRpb25TcGVlZCA9IDA7XHJcblx0XHR0aGlzLmlzSnVtcGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5sb2FkaW5nSnVtcCA9IGZhbHNlO1xyXG5cdFx0dGhpcy53aGVlbFJvdCA9IDA7XHJcblx0XHR0aGlzLnJvdENvb3Jkc0Zvckp1bXAgPSB7IHg6IDAsIHk6IDAgfTtcclxuXHRcdHRoaXMuc3BlZWQgPSAwO1xyXG5cdFx0dGhpcy5odWQgPSBodWQ7XHJcblx0XHR0aGlzLmltYWdlUGF0aHMgPSBbXHJcblx0XHRcdCcuLi9wdWJsaWMvZnJhbWUucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy9mcmFtZURhbWFnZWQucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy93aGVlbC5wbmcnLFxyXG5cdFx0XHQnLi4vcHVibGljL3doZWVsRGFtYWdlZC5wbmcnLFxyXG5cdFx0XTtcclxuXHRcdHRoaXMuaW1hZ2VzID0ge307XHJcblx0XHR0aGlzLmlzQmVpbmdEYW1hZ2VkID0gZmFsc2U7XHJcblx0XHR0aGlzLmxhc3RPYmplY3RIaXQgPSAnJztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBzZXRVcCgpIHtcclxuXHRcdGNvbnN0IHByZWxvYWRJbWFnZXMgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5pbWFnZVBhdGhzLm1hcCgocGF0aDogc3RyaW5nKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSBwYXRoLnNwbGl0KCcvJykucG9wKCk/LnNwbGl0KCcuJylbMF07XHJcblx0XHRcdFx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuXHRcdFx0XHRcdGltYWdlLnNyYyA9IHBhdGg7XHJcblx0XHRcdFx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoW25hbWUsIGltYWdlXSk7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0aW1hZ2Uub25lcnJvciA9ICgpID0+IHJlamVjdChgSW1hZ2UgZmFpbGVkIHRvIGxvYWQ6ICR7cGF0aH1gKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGltZ0FycmF5dGVtcDogYW55W10gPSBhd2FpdCBwcmVsb2FkSW1hZ2VzKCk7XHJcblx0XHR0aGlzLmltYWdlcyA9IE9iamVjdC5mcm9tRW50cmllcyhpbWdBcnJheXRlbXApO1xyXG5cdFx0dGhpcy53ID0gdGhpcy5pbWFnZXMuZnJhbWUud2lkdGg7XHJcblx0XHR0aGlzLmggPSB0aGlzLmltYWdlcy5mcmFtZS5oZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hhbmdlVG9EYW1hZ2VkSW1ncyhvYmplY3Q6IHN0cmluZykge1xyXG5cdFx0aWYgKG9iamVjdCA9PT0gdGhpcy5sYXN0T2JqZWN0SGl0KSByZXR1cm47XHJcblx0XHR0aGlzLmxhc3RPYmplY3RIaXQgPSBvYmplY3Q7XHJcblx0XHR0aGlzLmlzQmVpbmdEYW1hZ2VkID0gdHJ1ZTtcclxuXHRcdGNvbnN0IGZsYXNoSW50ZXJ2YWwgPSA1MDtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA9IGZhbHNlO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmlzQmVpbmdEYW1hZ2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaXNCZWluZ0RhbWFnZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlzQmVpbmdEYW1hZ2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9LCBmbGFzaEludGVydmFsKTtcclxuXHRcdFx0XHRcdH0sIGZsYXNoSW50ZXJ2YWwpO1xyXG5cdFx0XHRcdH0sIGZsYXNoSW50ZXJ2YWwpO1xyXG5cdFx0XHR9LCBmbGFzaEludGVydmFsKTtcclxuXHRcdH0sIGZsYXNoSW50ZXJ2YWwpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxhbmQoeTogbnVtYmVyKSB7XHJcblx0XHRpZiAodGhpcy5yb3RhdGlvbiA8IDApIHJldHVybjtcclxuXHRcdHRoaXMuaXNJbkFpciA9IGZhbHNlO1xyXG5cdFx0dGhpcy5pc0p1bXBpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMucm90YXRpb25TcGVlZCA9IDA7XHJcblx0XHR0aGlzLnJvdGF0aW9uID0gMDtcclxuXHRcdHRoaXMueVZlbG9jaXR5ID0gMDtcclxuXHRcdHRoaXMueSA9IHkgLSB0aGlzLmg7XHJcblx0XHRpZiAoIXRoaXMubG9hZGluZ0p1bXApIHRoaXMuanVtcFZlbFN0YXJ0ID0gdGhpcy5qdW1wVmVsU3RhcnRSZXNldDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBqdW1wKCkge1xyXG5cdFx0dGhpcy5sb2FkaW5nSnVtcCA9IGZhbHNlO1xyXG5cdFx0aWYgKHRoaXMuaXNKdW1waW5nIHx8IHRoaXMuaXNJbkFpciB8fCB0aGlzLnlWZWxvY2l0eSA8IDApIHJldHVybjtcclxuXHRcdHRoaXMucm90YXRpb25TcGVlZCA9IHRoaXMuanVtcFZlbFN0YXJ0O1xyXG5cdFx0dGhpcy5pc0p1bXBpbmcgPSB0cnVlO1xyXG5cclxuXHRcdHRoaXMuaXNJbkFpciA9IHRydWU7XHJcblx0XHR0aGlzLnlWZWxvY2l0eSA9IHRoaXMuanVtcFZlbFN0YXJ0O1xyXG5cdFx0dGhpcy5qdW1wVmVsU3RhcnQgPSB0aGlzLmp1bXBWZWxTdGFydFJlc2V0O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsb2FkSnVtcCgpIHtcclxuXHRcdGlmICh0aGlzLmp1bXBWZWxTdGFydCA8IHRoaXMubWF4SnVtcFN0YXJ0KSB7XHJcblx0XHRcdHRoaXMuanVtcFZlbFN0YXJ0ICs9IDAuNTtcclxuXHRcdFx0dGhpcy5odWQuZHJhd0p1bXBDaGFyZ2UoXHJcblx0XHRcdFx0MSAtICh0aGlzLm1heEp1bXBTdGFydCAtIHRoaXMuanVtcFZlbFN0YXJ0KSAvICh0aGlzLm1heEp1bXBTdGFydCAtIHRoaXMuanVtcFZlbFN0YXJ0UmVzZXQpLFxyXG5cdFx0XHRcdHRoaXMueCxcclxuXHRcdFx0XHR0aGlzLnlcclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaHVkLmRyYXdKdW1wQ2hhcmdlKDEsIHRoaXMueCwgdGhpcy55KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZHJhd0ZyYW1lKCkge1xyXG5cdFx0Ly8gY29uc3QgeU9mZnNldCA9IDU7XHJcblx0XHR0aGlzLmN0eC5zYXZlKCk7XHJcblx0XHR0aGlzLmN0eC50cmFuc2xhdGUodGhpcy5yb3RDb29yZHNGb3JKdW1wLngsIHRoaXMucm90Q29vcmRzRm9ySnVtcC55KTtcclxuXHRcdHRoaXMuY3R4LnJvdGF0ZSgodGhpcy5yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKTtcclxuXHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA/IHRoaXMuaW1hZ2VzLmZyYW1lRGFtYWdlZCA6IHRoaXMuaW1hZ2VzLmZyYW1lLFxyXG5cdFx0XHQtdGhpcy5pbWFnZXMud2hlZWwud2lkdGggLyAyLFxyXG5cdFx0XHQtdGhpcy5oICsgdGhpcy5pbWFnZXMud2hlZWwuaGVpZ2h0IC8gMixcclxuXHRcdFx0dGhpcy53LFxyXG5cdFx0XHR0aGlzLmhcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN0eC5yZXN0b3JlKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdXaGVlbHMoKSB7XHJcblx0XHRjb25zdCByb3RPZmZzZXQgPSB0aGlzLmh1ZC5oZWFsdGggPj0gOTAgPyAwIDogdGhpcy5odWQuaGVhbHRoIDwgOTAgJiYgdGhpcy5odWQuaGVhbHRoID49IDUwID8gMSA6IDI7XHJcblxyXG5cdFx0dGhpcy5jdHguc2F2ZSgpO1xyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKHRoaXMucm90Q29vcmRzRm9ySnVtcC54ICsgcm90T2Zmc2V0LCB0aGlzLnJvdENvb3Jkc0Zvckp1bXAueSk7XHJcblx0XHR0aGlzLmN0eC5yb3RhdGUoKHRoaXMucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7IC8vIFJvdGF0ZSBmb3IganVtcFxyXG5cdFx0dGhpcy5jdHgucm90YXRlKCh0aGlzLndoZWVsUm90ICogTWF0aC5QSSkgLyAxODApOyAvLyBSb3RhdGUgZm9yIHdoZWVsIHNwaW5cclxuXHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA/IHRoaXMuaW1hZ2VzLndoZWVsRGFtYWdlZCA6IHRoaXMuaW1hZ2VzLndoZWVsLFxyXG5cdFx0XHQtdGhpcy5pbWFnZXMud2hlZWwud2lkdGggLyAyIC0gcm90T2Zmc2V0LFxyXG5cdFx0XHQtdGhpcy5pbWFnZXMud2hlZWwuaGVpZ2h0IC8gMixcclxuXHRcdFx0dGhpcy5pbWFnZXMud2hlZWwud2lkdGggLSAwLjUsXHJcblx0XHRcdHRoaXMuaW1hZ2VzLndoZWVsLmhlaWdodCAtIDAuNVxyXG5cdFx0KTtcclxuXHRcdHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuXHJcblx0XHR0aGlzLmN0eC5zYXZlKCk7XHJcblx0XHR0aGlzLmN0eC50cmFuc2xhdGUodGhpcy5yb3RDb29yZHNGb3JKdW1wLngsIHRoaXMucm90Q29vcmRzRm9ySnVtcC55ICsgcm90T2Zmc2V0KTtcclxuXHRcdHRoaXMuY3R4LnJvdGF0ZSgodGhpcy5yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKTsgLy8gUm90YXRlIGZvciBqdW1wXHJcblx0XHR0aGlzLmN0eC50cmFuc2xhdGUoLXRoaXMucm90Q29vcmRzRm9ySnVtcC54LCAtdGhpcy5yb3RDb29yZHNGb3JKdW1wLnkpOyAvLyBNb3ZlIHRvIHN0YXJ0XHJcblx0XHR0aGlzLmN0eC50cmFuc2xhdGUodGhpcy54ICsgdGhpcy53IC0gdGhpcy5pbWFnZXMud2hlZWwud2lkdGggLyAyLCB0aGlzLnJvdENvb3Jkc0Zvckp1bXAueSk7XHJcblx0XHR0aGlzLmN0eC5yb3RhdGUoKHRoaXMud2hlZWxSb3QgKiBNYXRoLlBJKSAvIDE4MCk7IC8vIFJvdGF0ZSBmb3Igd2hlZWwgc3BpblxyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKC0odGhpcy54ICsgdGhpcy53IC0gdGhpcy5pbWFnZXMud2hlZWwud2lkdGggLyAyKSwgLXRoaXMucm90Q29vcmRzRm9ySnVtcC55KTsgLy8gTW92ZSB0byBzdGFydFxyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKHRoaXMucm90Q29vcmRzRm9ySnVtcC54LCB0aGlzLnJvdENvb3Jkc0Zvckp1bXAueSk7XHJcblxyXG5cdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHR0aGlzLmlzQmVpbmdEYW1hZ2VkID8gdGhpcy5pbWFnZXMud2hlZWxEYW1hZ2VkIDogdGhpcy5pbWFnZXMud2hlZWwsXHJcblx0XHRcdC0odGhpcy5yb3RDb29yZHNGb3JKdW1wLnggLSB0aGlzLngpICsgdGhpcy53IC0gdGhpcy5pbWFnZXMud2hlZWwud2lkdGgsXHJcblx0XHRcdC10aGlzLmltYWdlcy53aGVlbC5oZWlnaHQgLyAyIC0gcm90T2Zmc2V0LFxyXG5cdFx0XHR0aGlzLmltYWdlcy53aGVlbC53aWR0aCAtIDAuNSxcclxuXHRcdFx0dGhpcy5pbWFnZXMud2hlZWwuaGVpZ2h0IC0gMC41XHJcblx0XHQpO1xyXG5cdFx0dGhpcy5jdHgucmVzdG9yZSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGRyYXcoKSB7XHJcblx0XHRpZiAoIXRoaXMuaW1hZ2VzPy5mcmFtZSkgcmV0dXJuO1xyXG5cdFx0dGhpcy53aGVlbFJvdCArPSB0aGlzLnNwZWVkO1xyXG5cdFx0Ly8gdGhpcy53aGVlbFJvdCArPSAxMDtcclxuXHJcblx0XHRpZiAodGhpcy5sb2FkaW5nSnVtcCkgdGhpcy5sb2FkSnVtcCgpO1xyXG5cclxuXHRcdHRoaXMueSAtPSB0aGlzLnlWZWxvY2l0eTtcclxuXHRcdGlmICh0aGlzLmlzSW5BaXIpIHRoaXMueVZlbG9jaXR5IC09IHRoaXMueUFjYztcclxuXHJcblx0XHRpZiAodGhpcy5pc0p1bXBpbmcpIHtcclxuXHRcdFx0dGhpcy5yb3RhdGlvbiAtPSB0aGlzLnJvdGF0aW9uU3BlZWQgLyA0O1xyXG5cdFx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgLT0gdGhpcy55QWNjICogMjtcclxuXHJcblx0XHRcdGlmICh0aGlzLnJvdGF0aW9uID49IDUpIHtcclxuXHRcdFx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYigwLCAwLCAwLCAwLjUpJztcclxuXHRcdC8vIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0Ly8gdGhpcy5jdHgucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53LCB0aGlzLmgpO1xyXG5cdFx0Ly8gdGhpcy5jdHguZmlsbCgpO1xyXG5cclxuXHRcdHRoaXMucm90Q29vcmRzRm9ySnVtcCA9IHtcclxuXHRcdFx0eDogdGhpcy54ICsgdGhpcy5pbWFnZXMud2hlZWwud2lkdGggLyAyLFxyXG5cdFx0XHR5OiB0aGlzLnkgKyB0aGlzLmggLSB0aGlzLmltYWdlcy53aGVlbC5oZWlnaHQgLyAyLFxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmRyYXdXaGVlbHMoKTtcclxuXHRcdHRoaXMuZHJhd0ZyYW1lKCk7XHJcblx0fVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FiaWxpdGllcy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb2xsaXNpb25zLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2h1ZC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wbGF0Zm9ybXMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGxheWVyLnRzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHlwZXMudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=