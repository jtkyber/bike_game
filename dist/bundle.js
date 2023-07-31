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
            powerUps: [{ name: 'invincibility', xPercAlongPlat: 0.8, distAbovePlat: 300 }],
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
        { y: 600, len: 800, gapToNext: 0 },
        { y: 550, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock3', xLocsOnPlatByPerc: [0.1] }] },
        { y: 410, len: 1000, gapToNext: 0 },
        { y: 700, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock1', xLocsOnPlatByPerc: [0.6] }] },
        { y: 600, len: 800, gapToNext: 0 },
        { y: 700, len: 1200, gapToNext: 0 },
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
    function Hud(ctx, world, abilities, framerate) {
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
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.ellipse(this.world.width - rInner + xOffset, rInner + yOffset, rInner, rInner, 2 * Math.PI, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
        // Middle circle
        this.ctx.strokeStyle = 'green';
        this.ctx.lineWidth = circleSeparation - 2;
        this.ctx.beginPath();
        this.ctx.ellipse(this.world.width - rOuter + xOffset + circleSeparation, rOuter + yOffset - circleSeparation, rOuter - circleSeparation / 2, rOuter - circleSeparation / 2, 2 * Math.PI, -Math.PI / 2 + 2 * Math.PI * this.powerUpPercentUsed, (3 * Math.PI) / 2);
        this.ctx.stroke();
        // Outer circle
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.ellipse(this.world.width - rOuter + xOffset + circleSeparation, rOuter + yOffset - circleSeparation, rOuter, rOuter, 2 * Math.PI, 0, 2 * Math.PI);
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
                hud = new _hud__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, world, abilities, frameRate);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxRQUFRLEdBQVc7SUFDeEIsU0FBUyxFQUFFO1FBQ1Y7WUFDQyxDQUFDLEVBQUUsR0FBRztZQUNOLEdBQUcsRUFBRSxJQUFJO1lBQ1QsU0FBUyxFQUFFLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3hELFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUM5RTtRQUNEO1lBQ0MsQ0FBQyxFQUFFLEdBQUc7WUFDTixHQUFHLEVBQUUsSUFBSTtZQUNULFNBQVMsRUFBRSxDQUFDO1NBQ1o7UUFDRDtZQUNDLENBQUMsRUFBRSxHQUFHO1lBQ04sR0FBRyxFQUFFLElBQUk7WUFDVCxTQUFTLEVBQUUsQ0FBQztTQUNaO1FBQ0QsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRTtRQUNsQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUM3RixFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFO1FBQ25DLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzdGLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUU7UUFDbkMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRTtRQUNsQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFO1FBQ2xDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzdGLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUU7UUFDbkMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDN0YsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRTtRQUNsQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFO1FBQ25DLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUs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QUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0YsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbE9EO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vcHVibGljL2dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL2FiaWxpdGllcy50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvY29sbGlzaW9ucy50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvaHVkLnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvcGxhdGZvcm1zLnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS8uL3NyYy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElHYW1lT2JqZWN0LCBJTGV2ZWwgfSBmcm9tICcuLi9zcmMvdHlwZXMnO1xyXG5cclxuY29uc3QgbGV2ZWxPbmU6IElMZXZlbCA9IHtcclxuXHRwbGF0Zm9ybXM6IFtcclxuXHRcdHtcclxuXHRcdFx0eTogNjAwLFxyXG5cdFx0XHRsZW46IDMwMDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMCxcclxuXHRcdFx0ZGVjb3I6IFt7IG5hbWU6ICdzdGFydFNpZ24nLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuNl0gfV0sXHJcblx0XHRcdHBvd2VyVXBzOiBbeyBuYW1lOiAnaW52aW5jaWJpbGl0eScsIHhQZXJjQWxvbmdQbGF0OiAwLjgsIGRpc3RBYm92ZVBsYXQ6IDMwMCB9XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHk6IDYwMCxcclxuXHRcdFx0bGVuOiAyMDAwLFxyXG5cdFx0XHRnYXBUb05leHQ6IDAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR5OiA3MDAsXHJcblx0XHRcdGxlbjogMTAwMCxcclxuXHRcdFx0Z2FwVG9OZXh0OiAwLFxyXG5cdFx0fSxcclxuXHRcdHsgeTogNjAwLCBsZW46IDgwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDUwMCwgbGVuOiAyMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2syJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjRdIH1dIH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMjAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNDUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazMnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuOF0gfV0gfSxcclxuXHRcdHsgeTogNjUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA2MjUsIGxlbjogNjAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNjAwLCBsZW46IDgwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDU1MCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2szJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjFdIH1dIH0sXHJcblx0XHR7IHk6IDQxMCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazEnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuNl0gfV0gfSxcclxuXHRcdHsgeTogNjAwLCBsZW46IDgwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMjAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNDUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazEnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuOF0gfV0gfSxcclxuXHRcdHtcclxuXHRcdFx0eTogNjUwLFxyXG5cdFx0XHRsZW46IDEwMDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMCxcclxuXHRcdFx0cG93ZXJVcHM6IFt7IG5hbWU6ICdoZWFsdGhCb29zdCcsIHhQZXJjQWxvbmdQbGF0OiAwLjEsIGRpc3RBYm92ZVBsYXQ6IDMwMCB9XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHk6IDYyNSxcclxuXHRcdFx0bGVuOiA2MDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMCxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRwbGF0Zm9ybVRleHR1cmU6ICdkaXJ0UGxhdCcsXHJcblx0cGxhdGZvcm1IOiBudWxsLFxyXG5cdGJhY2tncm91bmRJbWc6ICdiZ0xldmVsMScsXHJcblx0YmdJbWdZT2Zmc2V0OiAwLFxyXG5cdG1heFBsYXRMZW46IDQwMDAsXHJcblx0c3BlZWQ6IDE0LFxyXG59O1xyXG5cclxuY29uc3QgbGV2ZWxUd286IElMZXZlbCA9IHtcclxuXHRwbGF0Zm9ybXM6IFtcclxuXHRcdHtcclxuXHRcdFx0eTogNjAwLFxyXG5cdFx0XHRsZW46IDMwMDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHk6IDYwMCxcclxuXHRcdFx0bGVuOiAyMDAwLFxyXG5cdFx0XHRnYXBUb05leHQ6IDIwMCxcclxuXHRcdH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2sxJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjFdIH1dIH0sXHJcblx0XHR7IHk6IDYwMCwgbGVuOiA4MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA1MDAsIGxlbjogMjAwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMicsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC40XSB9XSB9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMTIwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDQ1MCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2szJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjhdIH1dIH0sXHJcblx0XHR7IHk6IDY1MCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNjI1LCBsZW46IDYwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7XHJcblx0XHRcdHk6IDYwMCxcclxuXHRcdFx0bGVuOiA4MDAsXHJcblx0XHRcdGdhcFRvTmV4dDogNTAsXHJcblx0XHRcdHBvd2VyVXBzOiBbeyBuYW1lOiAnaGVhbHRoQm9vc3QnLCB4UGVyY0Fsb25nUGxhdDogMC4yLCBkaXN0QWJvdmVQbGF0OiAzMDAgfV0sXHJcblx0XHR9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMjAwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDU1MCwgbGVuOiA3MDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazMnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuMV0gfV0gfSxcclxuXHRcdHsgeTogNDEwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMzAwIH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAsIG9ic3RpY2xlczogW3sgbmFtZTogJ3JvY2sxJywgeExvY3NPblBsYXRCeVBlcmM6IFswLjZdIH1dIH0sXHJcblx0XHR7IHk6IDYwMCwgbGVuOiA4MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA1NTAsIGxlbjogMTUwMCwgZ2FwVG9OZXh0OiAwLCBvYnN0aWNsZXM6IFt7IG5hbWU6ICdyb2NrMycsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC40XSB9XSB9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMTIwMCwgZ2FwVG9OZXh0OiAxMDAgfSxcclxuXHRcdHsgeTogNDUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBuYW1lOiAncm9jazEnLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuOF0gfV0gfSxcclxuXHRcdHsgeTogNjUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA2MjUsIGxlbjogNjAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRdLFxyXG5cdHBsYXRmb3JtVGV4dHVyZTogJ3dvb2RQbGF0JyxcclxuXHRwbGF0Zm9ybUg6IDE2LFxyXG5cdGJhY2tncm91bmRJbWc6ICdiZ0xldmVsMicsXHJcblx0YmdJbWdZT2Zmc2V0OiA2MDAsXHJcblx0bWF4UGxhdExlbjogNDAwMCxcclxuXHRzcGVlZDogMTYsXHJcbn07XHJcblxyXG5jb25zdCBnYW1lT2JqZWN0OiBJR2FtZU9iamVjdCA9IHtcclxuXHRsZXZlbHM6IFtsZXZlbE9uZSwgbGV2ZWxUd29dLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZU9iamVjdDtcclxuIiwiaW1wb3J0IENvbGxpc2lvbnMgZnJvbSAnLi9jb2xsaXNpb25zJztcclxuaW1wb3J0IEh1ZCBmcm9tICcuL2h1ZCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBDb250ZXh0LCBJUG93ZXJVcCB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJpbGl0aWVzIHtcclxuXHRwcml2YXRlIGN0eDogQ29udGV4dDtcclxuXHRwcml2YXRlIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHRwcml2YXRlIGh1ZDogSHVkO1xyXG5cdHByaXZhdGUgY29sbGlzaW9uczogQ29sbGlzaW9ucztcclxuXHRwcml2YXRlIHBsYXllcjogUGxheWVyO1xyXG5cdHByaXZhdGUgaW1hZ2VQYXRoczogc3RyaW5nW107XHJcblx0cHJpdmF0ZSBpbWFnZXM6IGFueTtcclxuXHRwcml2YXRlIGNvbGxlY3RlZFBvd2VyVXBzOiBzdHJpbmdbXTtcclxuXHRwdWJsaWMgY3VycmVudFBvd2VyVXA6IHtcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdGR1cmF0aW9uSW5TZWNzOiBudW1iZXI7XHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQsIGh1ZDogSHVkLCBjb2xsaXNpb25zOiBDb2xsaXNpb25zLCBwbGF5ZXI6IFBsYXllcikge1xyXG5cdFx0dGhpcy5jdHggPSBjdHg7XHJcblx0XHR0aGlzLndvcmxkID0gd29ybGQ7XHJcblx0XHR0aGlzLmh1ZCA9IGh1ZDtcclxuXHRcdHRoaXMuY29sbGlzaW9ucyA9IGNvbGxpc2lvbnM7XHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHRcdHRoaXMuaW1hZ2VQYXRocyA9IFsnLi4vcHVibGljL2hlYWx0aEJvb3N0LnBuZycsICcuLi9wdWJsaWMvaW52aW5jaWJpbGl0eS5wbmcnXTtcclxuXHRcdHRoaXMuaW1hZ2VzID0ge307XHJcblx0XHR0aGlzLmNvbGxlY3RlZFBvd2VyVXBzID0gW107XHJcblx0XHR0aGlzLmN1cnJlbnRQb3dlclVwID0ge1xyXG5cdFx0XHRuYW1lOiAnJyxcclxuXHRcdFx0ZHVyYXRpb25JblNlY3M6IDAsXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIHNldFVwKCkge1xyXG5cdFx0Y29uc3QgcHJlbG9hZEltYWdlcyA9ICgpID0+IHtcclxuXHRcdFx0Y29uc3QgcHJvbWlzZXMgPSB0aGlzLmltYWdlUGF0aHMubWFwKChwYXRoOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IHBhdGguc3BsaXQoJy8nKS5wb3AoKT8uc3BsaXQoJy4nKVswXTtcclxuXHRcdFx0XHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcblxyXG5cdFx0XHRcdFx0aW1hZ2Uuc3JjID0gcGF0aDtcclxuXHRcdFx0XHRcdGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZShbbmFtZSwgaW1hZ2VdKTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRpbWFnZS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KGBJbWFnZSBmYWlsZWQgdG8gbG9hZDogJHtwYXRofWApO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgaW1nQXJyYXl0ZW1wOiBhbnlbXSA9IGF3YWl0IHByZWxvYWRJbWFnZXMoKTtcclxuXHRcdHRoaXMuaW1hZ2VzID0gT2JqZWN0LmZyb21FbnRyaWVzKGltZ0FycmF5dGVtcCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZmluaXNoUG93ZXJVcCgpIHtcclxuXHRcdHN3aXRjaCAodGhpcy5jdXJyZW50UG93ZXJVcC5uYW1lKSB7XHJcblx0XHRcdGNhc2UgJ2ludmluY2liaWxpdHknOlxyXG5cdFx0XHRcdHRoaXMuY29sbGlzaW9ucy5pZ25vcmVPYmplY3RDb2xsaXNpb24gPSBmYWxzZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJlbnRQb3dlclVwID0ge1xyXG5cdFx0XHRuYW1lOiAnJyxcclxuXHRcdFx0ZHVyYXRpb25JblNlY3M6IDAsXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5odWQuY3VycmVudFBvd2VyVXAgPSB0aGlzLmN1cnJlbnRQb3dlclVwO1xyXG5cdFx0dGhpcy5odWQucG93ZXJVcFBlcmNlbnRVc2VkID0gMDtcclxuXHRcdHRoaXMuaHVkLnVzaW5nUG93ZXJVcCA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVzZVBvd2VyVXAoKSB7XHJcblx0XHRzd2l0Y2ggKHRoaXMuY3VycmVudFBvd2VyVXAubmFtZSkge1xyXG5cdFx0XHRjYXNlICdpbnZpbmNpYmlsaXR5JzpcclxuXHRcdFx0XHR0aGlzLmNvbGxpc2lvbnMuaWdub3JlT2JqZWN0Q29sbGlzaW9uID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmh1ZC51c2luZ1Bvd2VyVXAgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBncmFiUG93ZXJVcChwb3dlclVwOiBzdHJpbmcpIHtcclxuXHRcdHN3aXRjaCAocG93ZXJVcCkge1xyXG5cdFx0XHRjYXNlICdoZWFsdGhCb29zdCc6XHJcblx0XHRcdFx0dGhpcy5odWQuaW5jcmVhc2VIZWFsdGgoMjApO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdpbnZpbmNpYmlsaXR5JzpcclxuXHRcdFx0XHRpZiAodGhpcy5jdXJyZW50UG93ZXJVcC5uYW1lKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50UG93ZXJVcCA9IHtcclxuXHRcdFx0XHRcdG5hbWU6IHBvd2VyVXAsXHJcblx0XHRcdFx0XHRkdXJhdGlvbkluU2VjczogNSxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMuaHVkLmN1cnJlbnRQb3dlclVwID0gdGhpcy5jdXJyZW50UG93ZXJVcDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkcmF3KHBvd2VyVXBzOiBJUG93ZXJVcFtdLCBwbGF0WVRvcDogbnVtYmVyLCBwbGF0WDogbnVtYmVyLCBwbGF0TGVuOiBudW1iZXIsIHBsYXRJbmRleDogbnVtYmVyKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBvd2VyVXBzPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpbWdTcmM6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLmltYWdlc1twb3dlclVwc1tpXS5uYW1lXTtcclxuXHJcblx0XHRcdGlmICghaW1nU3JjKSBjb250aW51ZTtcclxuXHJcblx0XHRcdGNvbnN0IGltZ1ggPSBwbGF0WCArIHBsYXRMZW4gKiBwb3dlclVwc1tpXS54UGVyY0Fsb25nUGxhdDtcclxuXHRcdFx0Y29uc3QgaW1nWSA9IHBsYXRZVG9wIC0gaW1nU3JjLmhlaWdodCArIDEwIC0gcG93ZXJVcHNbaV0uZGlzdEFib3ZlUGxhdDtcclxuXHRcdFx0Y29uc3Qgb2JqZWN0ID0gYCR7cG93ZXJVcHNbaV0ubmFtZX1fJHtwbGF0SW5kZXh9XyR7cG93ZXJVcHNbaV0ueFBlcmNBbG9uZ1BsYXR9YDtcclxuXHJcblx0XHRcdGlmICh0aGlzLmNvbGxlY3RlZFBvd2VyVXBzLmluY2x1ZGVzKG9iamVjdCkpIHtcclxuXHRcdFx0XHRpZiAoaW1nWCArIGltZ1NyYy53aWR0aCA8IDApIHRoaXMuY29sbGVjdGVkUG93ZXJVcHMuc2hpZnQoKTtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKGltZ1NyYywgaW1nWCwgaW1nWSwgaW1nU3JjLndpZHRoLCBpbWdTcmMuaGVpZ2h0KTtcclxuXHJcblx0XHRcdGNvbnN0IGNvbGxpZGVkV2l0aFBvd2VyVXAgPSB0aGlzLmNvbGxpc2lvbnMucG93ZXJVcENvbGxpc2lvbih7XHJcblx0XHRcdFx0eDE6IHRoaXMucGxheWVyLngsXHJcblx0XHRcdFx0eTE6IHRoaXMucGxheWVyLnksXHJcblx0XHRcdFx0eDI6IGltZ1gsXHJcblx0XHRcdFx0eTI6IGltZ1ksXHJcblx0XHRcdFx0dzE6IHRoaXMucGxheWVyLncsXHJcblx0XHRcdFx0aDE6IHRoaXMucGxheWVyLmgsXHJcblx0XHRcdFx0dzI6IHRoaXMuaW1hZ2VzW3Bvd2VyVXBzW2ldLm5hbWVdLndpZHRoLFxyXG5cdFx0XHRcdGgyOlxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbcG93ZXJVcHNbaV0ubmFtZV0uaGVpZ2h0IHx8XHJcblx0XHRcdFx0XHR0aGlzLndvcmxkLmhlaWdodCAtIChwbGF0WVRvcCAtIHRoaXMuaW1hZ2VzW3Bvd2VyVXBzW2ldLm5hbWVdLmhlaWdodCArIDEwKSxcclxuXHRcdFx0XHRtYXJnaW46IDAsXHJcblx0XHRcdFx0b2JqZWN0OiBvYmplY3QsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKGNvbGxpZGVkV2l0aFBvd2VyVXApIHtcclxuXHRcdFx0XHR0aGlzLmNvbGxlY3RlZFBvd2VyVXBzLnB1c2gob2JqZWN0KTtcclxuXHRcdFx0XHR0aGlzLmdyYWJQb3dlclVwKHBvd2VyVXBzW2ldLm5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBIdWQgZnJvbSAnLi9odWQnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgQ29udGV4dCwgSUNvbGxpc2lvbkFyZ3MgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbnMge1xyXG5cdHByaXZhdGUgY3R4OiBDb250ZXh0O1xyXG5cdHByaXZhdGUgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cdHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XHJcblx0cHJpdmF0ZSBodWQ6IEh1ZDtcclxuXHRwdWJsaWMgaWdub3JlT2JqZWN0Q29sbGlzaW9uOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjdHg6IENvbnRleHQsIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudCwgcGxheWVyOiBQbGF5ZXIsIGh1ZDogSHVkKSB7XHJcblx0XHR0aGlzLmN0eCA9IGN0eDtcclxuXHRcdHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cdFx0dGhpcy5odWQgPSBodWQ7XHJcblx0XHR0aGlzLmlnbm9yZU9iamVjdENvbGxpc2lvbiA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoZWNrRm9yUGxhdENvbGxpc2lvbih7IHgxLCB5MSwgeDIsIHkyLCB3MSwgaDEsIHcyLCBoMiwgbWFyZ2luLCBvYmplY3QgfTogSUNvbGxpc2lvbkFyZ3MpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IHBsYXllclJpZ2h0T2ZQbGF0TGVmdCA9IHgxICsgdzEgPj0geDIgKyBtYXJnaW47IC8vIFBsYXllciByaWdodCBzaWRlIHRvIHJpZ2h0IG9mIHBsYXQgbGVmdFxyXG5cdFx0Y29uc3QgcGxheWVyTGVmdE9mUGxhdFJpZ2h0ID0geDEgPD0geDIgKyB3MjsgLy8gUGxheWVyIGxlZnQgc2lkZSB0byBsZWZ0IG9mIHBsYXQgcmlnaHRcclxuXHRcdGNvbnN0IHBsYXllckFib3ZlUGxhdEJvdCA9IHkxIDw9IHkyICsgaDI7IC8vUGxheWVyIHRvcCBhYm92ZSBwbGF0IGJvdHRvbVxyXG5cdFx0Y29uc3QgcGxheWVyQmVsb3dQbGF0VG9wID0geTEgKyB0aGlzLnBsYXllci5oID4geTIgKyAodGhpcy5wbGF5ZXIuaXNJbkFpciA/IG1hcmdpbiA6IDApOyAvLyBQbGF5ZXIgYm90dG9tIGFib3ZlIHBsYXQgdG9wXHJcblxyXG5cdFx0aWYgKHBsYXllclJpZ2h0T2ZQbGF0TGVmdCAmJiBwbGF5ZXJMZWZ0T2ZQbGF0UmlnaHQgJiYgcGxheWVyQWJvdmVQbGF0Qm90KSB7XHJcblx0XHRcdC8vIExhbmQgaWYgbmVnYXRpdmUgdmVsb2NpdHkgYW5kIHdpdGhpbiAyMHB4IG9mIHBsYXRmb3JtXHJcblx0XHRcdGlmICh0aGlzLnBsYXllci55VmVsb2NpdHkgPD0gMCAmJiBNYXRoLmFicyh5MiAtICh5MSArIGgxKSkgPCAxNikge1xyXG5cdFx0XHRcdHRoaXMucGxheWVyLmxhbmQoeTIpO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHBsYXllckJlbG93UGxhdFRvcCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdQbGF0Zm9ybSBDb2xsaXNpb24hJyk7XHJcblx0XHRcdFx0dGhpcy5odWQuaGVhbHRoID0gMDtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMucGxheWVyLnkgKyB0aGlzLnBsYXllci5oID4gdGhpcy53b3JsZC5oZWlnaHQpIHtcclxuXHRcdFx0dGhpcy5odWQuaGVhbHRoID0gMDtcclxuXHRcdFx0Y29uc29sZS5sb2coJ091dCBPZiBCb3VuZHMgQ29sbGlzaW9uIScpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjaGVja0ZvckNvbGxpc2lvbih7IHgxLCB5MSwgeDIsIHkyLCB3MSwgaDEsIHcyLCBoMiwgbWFyZ2luLCBvYmplY3QgfTogSUNvbGxpc2lvbkFyZ3MpIHtcclxuXHRcdGlmICh0aGlzLmlnbm9yZU9iamVjdENvbGxpc2lvbikgcmV0dXJuO1xyXG5cdFx0aWYgKFxyXG5cdFx0XHR4MSArIHcxID49IHgyICsgbWFyZ2luICYmIC8vIENoZWNrIHBsYXllciByaWdodCBjb2xsaXNpb25cclxuXHRcdFx0eDEgPD0geDIgKyB3MiAmJiAvLyBDaGVjayBwbGF5ZXIgbGVmdCBjb2xsaXNpb25cclxuXHRcdFx0eTEgPD0geTIgKyBoMiAmJiAvLyBDaGVjayBwbGF5ZXIgdG9wIGNvbGxpc2lvblxyXG5cdFx0XHR5MSArIGgxID4geTIgLy8gQ2hlY2sgcGxheWVyIGJvdHRvbSBjb2xsaXNpb25cclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLmh1ZC5yZWR1Y2VIZWFsdGgob2JqZWN0LCAzMCk7XHJcblx0XHRcdHRoaXMucGxheWVyLmNoYW5nZVRvRGFtYWdlZEltZ3Mob2JqZWN0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwb3dlclVwQ29sbGlzaW9uKHsgeDEsIHkxLCB4MiwgeTIsIHcxLCBoMSwgdzIsIGgyLCBtYXJnaW4sIG9iamVjdCB9OiBJQ29sbGlzaW9uQXJncyk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHR4MSArIHcxID49IHgyICsgbWFyZ2luICYmIC8vIENoZWNrIHBsYXllciByaWdodCBjb2xsaXNpb25cclxuXHRcdFx0eDEgPD0geDIgKyB3MiAmJiAvLyBDaGVjayBwbGF5ZXIgbGVmdCBjb2xsaXNpb25cclxuXHRcdFx0eTEgPD0geTIgKyBoMiAmJiAvLyBDaGVjayBwbGF5ZXIgdG9wIGNvbGxpc2lvblxyXG5cdFx0XHR5MSArIGgxID4geTIgLy8gQ2hlY2sgcGxheWVyIGJvdHRvbSBjb2xsaXNpb25cclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHRocm90dGxlIGZyb20gJy4uL3V0aWxzL3Rocm90dGxlJztcclxuaW1wb3J0IEFiaWxpdGllcyBmcm9tICcuL2FiaWxpdGllcyc7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh1ZCB7XHJcblx0cHJpdmF0ZSBjdHg6IENvbnRleHQ7XHJcblx0cHJpdmF0ZSB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblx0cHVibGljIGhlYWx0aDogbnVtYmVyO1xyXG5cdHByaXZhdGUgbGFzdE9iamVjdEhpdDogYW55O1xyXG5cdHB1YmxpYyBkcmF3aW5nTGV2ZWxUZXh0OiBib29sZWFuO1xyXG5cdHByaXZhdGUgbGV2ZWxUZXh0T3BhY2l0eTogbnVtYmVyO1xyXG5cdHByaXZhdGUgbGV2ZWxUZXh0T3BhY2l0eUluYzogbnVtYmVyO1xyXG5cdHB1YmxpYyBjdXJyZW50TGV2ZWw6IG51bWJlcjtcclxuXHRwdWJsaWMgZnBzOiBudW1iZXI7XHJcblx0cHVibGljIGZyYW1lcmF0ZTogbnVtYmVyO1xyXG5cdHB1YmxpYyBmcHNFbmFibGVkOiBib29sZWFuO1xyXG5cdHByaXZhdGUgaW1hZ2VQYXRoczogc3RyaW5nW107XHJcblx0cHJpdmF0ZSBpbWFnZXM6IGFueTtcclxuXHRwdWJsaWMgY3VycmVudFBvd2VyVXA6IHtcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdGR1cmF0aW9uSW5TZWNzOiBudW1iZXI7XHJcblx0fTtcclxuXHRwdWJsaWMgdXNpbmdQb3dlclVwOiBib29sZWFuO1xyXG5cdHB1YmxpYyBwb3dlclVwUGVyY2VudFVzZWQ6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQsIGFiaWxpdGllczogQWJpbGl0aWVzLCBmcmFtZXJhdGU6IG51bWJlcikge1xyXG5cdFx0dGhpcy5jdHggPSBjdHg7XHJcblx0XHR0aGlzLndvcmxkID0gd29ybGQ7XHJcblx0XHR0aGlzLmhlYWx0aCA9IDEwMDtcclxuXHRcdHRoaXMubGFzdE9iamVjdEhpdCA9ICcnO1xyXG5cdFx0dGhpcy5kcmF3aW5nTGV2ZWxUZXh0ID0gZmFsc2U7XHJcblx0XHR0aGlzLmxldmVsVGV4dE9wYWNpdHkgPSAwO1xyXG5cdFx0dGhpcy5sZXZlbFRleHRPcGFjaXR5SW5jID0gMC4wMjtcclxuXHRcdHRoaXMuY3VycmVudExldmVsID0gMDtcclxuXHRcdHRoaXMuZnBzID0gMDtcclxuXHRcdHRoaXMuZnJhbWVyYXRlID0gZnJhbWVyYXRlO1xyXG5cdFx0dGhpcy5mcHNFbmFibGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLmltYWdlUGF0aHMgPSBbJy4uL3B1YmxpYy9pbnZpbmNpYmlsaXR5LnBuZyddO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSB7fTtcclxuXHRcdHRoaXMuY3VycmVudFBvd2VyVXAgPSB7XHJcblx0XHRcdG5hbWU6ICcnLFxyXG5cdFx0XHRkdXJhdGlvbkluU2VjczogMCxcclxuXHRcdH07XHJcblx0XHR0aGlzLnBvd2VyVXBQZXJjZW50VXNlZCA9IDA7XHJcblx0XHR0aGlzLnVzaW5nUG93ZXJVcCA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIHNldFVwKCkge1xyXG5cdFx0Y29uc3QgcHJlbG9hZEltYWdlcyA9ICgpID0+IHtcclxuXHRcdFx0Y29uc3QgcHJvbWlzZXMgPSB0aGlzLmltYWdlUGF0aHMubWFwKChwYXRoOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IHBhdGguc3BsaXQoJy8nKS5wb3AoKT8uc3BsaXQoJy4nKVswXTtcclxuXHRcdFx0XHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcblxyXG5cdFx0XHRcdFx0aW1hZ2Uuc3JjID0gcGF0aDtcclxuXHRcdFx0XHRcdGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZShbbmFtZSwgaW1hZ2VdKTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRpbWFnZS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KGBJbWFnZSBmYWlsZWQgdG8gbG9hZDogJHtwYXRofWApO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgaW1nQXJyYXl0ZW1wOiBhbnlbXSA9IGF3YWl0IHByZWxvYWRJbWFnZXMoKTtcclxuXHRcdHRoaXMuaW1hZ2VzID0gT2JqZWN0LmZyb21FbnRyaWVzKGltZ0FycmF5dGVtcCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdQb3dlclVwKCkge1xyXG5cdFx0aWYgKCF0aGlzLmN1cnJlbnRQb3dlclVwLm5hbWUpIHJldHVybjtcclxuXHJcblx0XHRjb25zdCB3ID0gdGhpcy5pbWFnZXNbdGhpcy5jdXJyZW50UG93ZXJVcC5uYW1lXS53aWR0aDtcclxuXHRcdGNvbnN0IGggPSB0aGlzLmltYWdlc1t0aGlzLmN1cnJlbnRQb3dlclVwLm5hbWVdLmhlaWdodDtcclxuXHRcdGNvbnN0IGNpcmNsZVNlcGFyYXRpb24gPSA2O1xyXG5cdFx0Y29uc3QgcklubmVyID0gTWF0aC5tYXgodywgaCkgLyAyICsgMTA7XHJcblx0XHRjb25zdCByT3V0ZXIgPSBySW5uZXIgKyBjaXJjbGVTZXBhcmF0aW9uO1xyXG5cdFx0Y29uc3QgeE9mZnNldCA9IC0yMDtcclxuXHRcdGNvbnN0IHlPZmZzZXQgPSAyMDtcclxuXHJcblx0XHQvLyBJbm5lciBjaXJjbGVcclxuXHRcdHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuNSknO1xyXG5cdFx0dGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xyXG5cdFx0dGhpcy5jdHgubGluZVdpZHRoID0gMjtcclxuXHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0dGhpcy5jdHguZWxsaXBzZShcclxuXHRcdFx0dGhpcy53b3JsZC53aWR0aCAtIHJJbm5lciArIHhPZmZzZXQsXHJcblx0XHRcdHJJbm5lciArIHlPZmZzZXQsXHJcblx0XHRcdHJJbm5lcixcclxuXHRcdFx0cklubmVyLFxyXG5cdFx0XHQyICogTWF0aC5QSSxcclxuXHRcdFx0MCxcclxuXHRcdFx0MiAqIE1hdGguUElcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN0eC5maWxsKCk7XHJcblx0XHR0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcblx0XHQvLyBNaWRkbGUgY2lyY2xlXHJcblx0XHR0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdncmVlbic7XHJcblx0XHR0aGlzLmN0eC5saW5lV2lkdGggPSBjaXJjbGVTZXBhcmF0aW9uIC0gMjtcclxuXHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0dGhpcy5jdHguZWxsaXBzZShcclxuXHRcdFx0dGhpcy53b3JsZC53aWR0aCAtIHJPdXRlciArIHhPZmZzZXQgKyBjaXJjbGVTZXBhcmF0aW9uLFxyXG5cdFx0XHRyT3V0ZXIgKyB5T2Zmc2V0IC0gY2lyY2xlU2VwYXJhdGlvbixcclxuXHRcdFx0ck91dGVyIC0gY2lyY2xlU2VwYXJhdGlvbiAvIDIsXHJcblx0XHRcdHJPdXRlciAtIGNpcmNsZVNlcGFyYXRpb24gLyAyLFxyXG5cdFx0XHQyICogTWF0aC5QSSxcclxuXHRcdFx0LU1hdGguUEkgLyAyICsgMiAqIE1hdGguUEkgKiB0aGlzLnBvd2VyVXBQZXJjZW50VXNlZCxcclxuXHRcdFx0KDMgKiBNYXRoLlBJKSAvIDJcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcblx0XHQvLyBPdXRlciBjaXJjbGVcclxuXHRcdHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ2JsYWNrJztcclxuXHRcdHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XHJcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdHRoaXMuY3R4LmVsbGlwc2UoXHJcblx0XHRcdHRoaXMud29ybGQud2lkdGggLSByT3V0ZXIgKyB4T2Zmc2V0ICsgY2lyY2xlU2VwYXJhdGlvbixcclxuXHRcdFx0ck91dGVyICsgeU9mZnNldCAtIGNpcmNsZVNlcGFyYXRpb24sXHJcblx0XHRcdHJPdXRlcixcclxuXHRcdFx0ck91dGVyLFxyXG5cdFx0XHQyICogTWF0aC5QSSxcclxuXHRcdFx0MCxcclxuXHRcdFx0MiAqIE1hdGguUElcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdHRoaXMuaW1hZ2VzW3RoaXMuY3VycmVudFBvd2VyVXAubmFtZV0sXHJcblx0XHRcdHRoaXMud29ybGQud2lkdGggLSBySW5uZXIgLSB3IC8gMiArIHhPZmZzZXQsXHJcblx0XHRcdHlPZmZzZXQgKyBySW5uZXIgLSBoIC8gMixcclxuXHRcdFx0dyxcclxuXHRcdFx0aFxyXG5cdFx0KTtcclxuXHJcblx0XHRpZiAodGhpcy51c2luZ1Bvd2VyVXApIHtcclxuXHRcdFx0dGhpcy5wb3dlclVwUGVyY2VudFVzZWQgKz0gMSAvICh0aGlzLmZyYW1lcmF0ZSAqIHRoaXMuY3VycmVudFBvd2VyVXAuZHVyYXRpb25JblNlY3MpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3RnBzKCkge1xyXG5cdFx0aWYgKCF0aGlzLmZwc0VuYWJsZWQpIHJldHVybjtcclxuXHJcblx0XHR0aGlzLmN0eC5mb250ID0gJzIwcHggQXJpYWwnO1xyXG5cdFx0dGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMjU1LCAwLCAxKSc7XHJcblx0XHR0aGlzLmN0eC50ZXh0QWxpZ24gPSAncmlnaHQnO1xyXG5cdFx0dGhpcy5jdHguZmlsbFRleHQoYCR7dGhpcy5mcHN9IEZQU2AsIHRoaXMud29ybGQud2lkdGggLSAyMCwgMzApO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGRyYXdKdW1wQ2hhcmdlKHBlcmNlbnRDaGFyZ2VkOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcblx0XHRjb25zdCB3ID0gODtcclxuXHRcdGNvbnN0IGggPSA2MDtcclxuXHRcdGNvbnN0IHhPZmZzZXQgPSAwO1xyXG5cdFx0Y29uc3QgeU9mZnNldCA9IC0yMDtcclxuXHRcdHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYigwLCAwLCAwKSc7XHJcblx0XHR0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiKDcsIDE5MSwgNCknO1xyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHR0aGlzLmN0eC5yZWN0KHggKyB4T2Zmc2V0IC0gMSwgeSArIHlPZmZzZXQgLSAxLCB3ICsgMiwgaCArIDIpO1xyXG5cdFx0dGhpcy5jdHguc3Ryb2tlKCk7XHJcblx0XHR0aGlzLmN0eC5maWxsUmVjdCh4ICsgeE9mZnNldCwgeSArIHlPZmZzZXQgKyBoLCB3LCAtaCAqIHBlcmNlbnRDaGFyZ2VkKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZWR1Y2VIZWFsdGgob2JqZWN0OiBzdHJpbmcsIGFtdDogbnVtYmVyKSB7XHJcblx0XHRpZiAodGhpcy5sYXN0T2JqZWN0SGl0ID09PSBvYmplY3QpIHJldHVybjtcclxuXHRcdGlmICh0aGlzLmhlYWx0aCAtIGFtdCA8PSAwKSB0aGlzLmhlYWx0aCA9IDA7XHJcblx0XHRlbHNlIHRoaXMuaGVhbHRoIC09IGFtdDtcclxuXHJcblx0XHR0aGlzLmxhc3RPYmplY3RIaXQgPSBvYmplY3Q7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaW5jcmVhc2VIZWFsdGgoYW10OiBudW1iZXIpIHtcclxuXHRcdGlmICh0aGlzLmhlYWx0aCArIGFtdCA+PSAxMDApIHRoaXMuaGVhbHRoID0gMTAwO1xyXG5cdFx0ZWxzZSB0aGlzLmhlYWx0aCArPSBhbXQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdIZWFsdGgoKSB7XHJcblx0XHRjb25zdCBzZWN0aW9uU3RhcnRYID0gMzA7XHJcblx0XHRjb25zdCBzZWN0aW9uU3RhcnRZID0gMTE7XHJcblx0XHRjb25zdCBzZWN0aW9uVyA9IDE2MDtcclxuXHRcdGNvbnN0IHNlY3Rpb25IID0gMTI7XHJcblxyXG5cdFx0dGhpcy5jdHguc2hhZG93T2Zmc2V0WCA9IDM7XHJcblx0XHR0aGlzLmN0eC5zaGFkb3dPZmZzZXRZID0gMztcclxuXHRcdHRoaXMuY3R4LnNoYWRvd0NvbG9yID0gJ3JnYmEoMCwgMCwgMCwgMC41KSc7XHJcblx0XHR0aGlzLmN0eC5zaGFkb3dCbHVyID0gNDtcclxuXHJcblx0XHR0aGlzLmN0eC5saW5lV2lkdGggPSAyO1xyXG5cdFx0dGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAxKSc7XHJcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdHRoaXMuY3R4LnJvdW5kUmVjdChzZWN0aW9uU3RhcnRYIC0gMSwgc2VjdGlvblN0YXJ0WSAtIDEsIHNlY3Rpb25XICsgMiwgc2VjdGlvbkggKyAyLCAxMCk7XHJcblx0XHR0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcblx0XHR0aGlzLmN0eC5maWxsU3R5bGUgPVxyXG5cdFx0XHR0aGlzLmhlYWx0aCA+PSA5MFxyXG5cdFx0XHRcdD8gJ3JnYmEoMCwgMTcwLCAwLCAxKSdcclxuXHRcdFx0XHQ6IHRoaXMuaGVhbHRoID49IDUwICYmIHRoaXMuaGVhbHRoIDwgOTBcclxuXHRcdFx0XHQ/ICdyZ2JhKDE3MCwgMTcwLCAwLCAxKSdcclxuXHRcdFx0XHQ6ICdyZ2JhKDI1NSwgMCwgMCwgMSknO1xyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHR0aGlzLmN0eC5yb3VuZFJlY3Qoc2VjdGlvblN0YXJ0WCwgc2VjdGlvblN0YXJ0WSwgc2VjdGlvblcgKiAodGhpcy5oZWFsdGggLyAxMDApLCBzZWN0aW9uSCwgMTApO1xyXG5cdFx0dGhpcy5jdHguZmlsbCgpO1xyXG5cclxuXHRcdHRoaXMuY3R4LnNoYWRvd09mZnNldFggPSAwO1xyXG5cdFx0dGhpcy5jdHguc2hhZG93T2Zmc2V0WSA9IDA7XHJcblx0XHR0aGlzLmN0eC5zaGFkb3dCbHVyID0gMDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZHJhd05leHRMZXZlbFRleHQoKSB7XHJcblx0XHRjb25zdCB3ID0gMjUwO1xyXG5cdFx0Y29uc3QgaCA9IDcwO1xyXG5cdFx0Y29uc3QgeU9mZnNldCA9IC0yMDA7XHJcblxyXG5cdFx0dGhpcy5jdHguZmlsbFN0eWxlID0gYHJnYmEoMCwgMCwgMCwgJHt0aGlzLmxldmVsVGV4dE9wYWNpdHkgPj0gMC43ID8gMC43IDogdGhpcy5sZXZlbFRleHRPcGFjaXR5fSlgO1xyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHR0aGlzLmN0eC5yb3VuZFJlY3QodGhpcy53b3JsZC53aWR0aCAvIDIgLSB3IC8gMiwgdGhpcy53b3JsZC5oZWlnaHQgLyAyIC0gaCAvIDIgKyB5T2Zmc2V0LCB3LCBoLCAxMCk7XHJcblx0XHR0aGlzLmN0eC5maWxsKCk7XHJcblxyXG5cdFx0dGhpcy5jdHguZm9udCA9ICc0MHB4IEFyaWFsJztcclxuXHRcdHRoaXMuY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDI1NSwgMjU1LCAyNTUsICR7dGhpcy5sZXZlbFRleHRPcGFjaXR5fSlgO1xyXG5cdFx0dGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcblx0XHR0aGlzLmN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcclxuXHRcdHRoaXMuY3R4LmZpbGxUZXh0KFxyXG5cdFx0XHRgTGV2ZWwgJHt0aGlzLmN1cnJlbnRMZXZlbCArIDF9YCxcclxuXHRcdFx0dGhpcy53b3JsZC53aWR0aCAvIDIsXHJcblx0XHRcdHRoaXMud29ybGQuaGVpZ2h0IC8gMiArIHlPZmZzZXRcclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5sZXZlbFRleHRPcGFjaXR5ICs9IHRoaXMubGV2ZWxUZXh0T3BhY2l0eUluYztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBiZWdpbkxldmVsVGV4dEFuaW1hdGlvbigpIHtcclxuXHRcdHRoaXMuZHJhd2luZ0xldmVsVGV4dCA9IHRydWU7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5sZXZlbFRleHRPcGFjaXR5SW5jICo9IC0xO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmRyYXdpbmdMZXZlbFRleHQgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmxldmVsVGV4dE9wYWNpdHlJbmMgKj0gLTE7XHJcblx0XHRcdH0sIDE1MDApO1xyXG5cdFx0fSwgMTUwMCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhdygpIHtcclxuXHRcdHRoaXMuZHJhd0hlYWx0aCgpO1xyXG5cdFx0dGhpcy5kcmF3RnBzKCk7XHJcblx0XHR0aGlzLmRyYXdQb3dlclVwKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuZHJhd2luZ0xldmVsVGV4dCkgdGhpcy5kcmF3TmV4dExldmVsVGV4dCgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgZ2FtZU9iamVjdCBmcm9tICcuLi9wdWJsaWMvZ2FtZU9iamVjdCc7XHJcbmltcG9ydCBBYmlsaXRpZXMgZnJvbSAnLi9hYmlsaXRpZXMnO1xyXG5pbXBvcnQgQ29sbGlzaW9ucyBmcm9tICcuL2NvbGxpc2lvbnMnO1xyXG5pbXBvcnQgSHVkIGZyb20gJy4vaHVkJztcclxuaW1wb3J0IFBsYXRmb3JtcyBmcm9tICcuL3BsYXRmb3Jtcyc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5cclxuY29uc3Qgd29ybGQgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmxkJyk7XHJcbmNvbnN0IGN0eCA9IDxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ+d29ybGQuZ2V0Q29udGV4dCgnMmQnLCB7IGFscGhhOiBmYWxzZSB9KTtcclxuXHJcbmNvbnN0IHN0YXJ0QnRuID0gPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydEJ0bicpO1xyXG5cclxuLy8gRm9yIGdhbWUgbG9vcFxyXG5sZXQgcmVxdWVzdElkOiBudW1iZXIgfCBudWxsLCBub3c6IG51bWJlciwgdGhlbjogbnVtYmVyLCBlbGFwc2VkOiBudW1iZXIsIGZwc0ludGVydmFsOiBudW1iZXI7XHJcblxyXG5sZXQgZnJhbWVSYXRlID0gNjA7XHJcbmxldCBmcmFtZXMgPSAwO1xyXG5sZXQgcGF1c2VkID0gZmFsc2U7XHJcbmxldCBsZXZlbHNTdGFydGVkID0gLTE7XHJcblxyXG4vLyBDbGFzc2VzXHJcbmxldCBwbGF0Zm9ybXM6IFBsYXRmb3JtcywgcGxheWVyOiBQbGF5ZXIsIGh1ZDogSHVkLCBjb2xsaXNpb25zOiBDb2xsaXNpb25zLCBhYmlsaXRpZXM6IEFiaWxpdGllcztcclxuXHJcbmNvbnN0IGVuZEdhbWUgPSAoKSA9PiB7XHJcblx0aWYgKHJlcXVlc3RJZCkgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElkKTtcclxuXHRyZXF1ZXN0SWQgPSBudWxsO1xyXG5cdHByZXBHYW1lKCk7XHJcblx0c3RhcnRCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0c3RhcnRCdG4uaW5uZXJIVE1MID0gJ1BsYXkgQWdhaW4nO1xyXG5cdGxldmVsc1N0YXJ0ZWQgPSAtMTtcclxufTtcclxuXHJcbmNvbnN0IGdhbWVMb29wID0gKCkgPT4ge1xyXG5cdHJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcblxyXG5cdGZwc0ludGVydmFsID0gMTAwMCAvIGZyYW1lUmF0ZTtcclxuXHRub3cgPSBEYXRlLm5vdygpO1xyXG5cdGVsYXBzZWQgPSBub3cgLSAodGhlbiB8fCAwKTtcclxuXHJcblx0aWYgKGVsYXBzZWQgPiBmcHNJbnRlcnZhbCkge1xyXG5cdFx0aWYgKGZyYW1lcyA9PT0gMClcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0aHVkLmZwcyA9IGZyYW1lcztcclxuXHRcdFx0XHRmcmFtZXMgPSAwO1xyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHRcdGZyYW1lcyArPSAxO1xyXG5cdFx0dGhlbiA9IG5vdyAtIChlbGFwc2VkICUgZnBzSW50ZXJ2YWwpO1xyXG5cclxuXHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgd29ybGQud2lkdGgsIHdvcmxkLmhlaWdodCk7XHJcblx0XHRpZiAoIXBhdXNlZCkge1xyXG5cdFx0XHRwbGF0Zm9ybXMubW92ZSgpO1xyXG5cdFx0XHRwbGF5ZXIuc3BlZWQgPSBnYW1lT2JqZWN0LmxldmVsc1twbGF0Zm9ybXMuY3VycmVudExldmVsXS5zcGVlZDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHBsYXllci5zcGVlZCA9IDA7XHJcblx0XHR9XHJcblx0XHRwbGF0Zm9ybXMuZHJhdygpO1xyXG5cdFx0cGxheWVyLmRyYXcoKTtcclxuXHRcdGh1ZC5kcmF3KCk7XHJcblxyXG5cdFx0aWYgKGh1ZC5jdXJyZW50UG93ZXJVcC5uYW1lICYmIGh1ZC5wb3dlclVwUGVyY2VudFVzZWQgPj0gMSkgYWJpbGl0aWVzLmZpbmlzaFBvd2VyVXAoKTtcclxuXHJcblx0XHQvLyBpZiAocGxhdGZvcm1zLnBsYXRzVmlzaWJsZT8uWzBdPy5pbmRleCA9PT0gMCAmJiBwbGF0Zm9ybXMuY3VycmVudExldmVsID4gbGV2ZWxzU3RhcnRlZCkge1xyXG5cdFx0Ly8gXHRsZXZlbHNTdGFydGVkID0gcGxhdGZvcm1zLmN1cnJlbnRMZXZlbDtcclxuXHRcdC8vIH1cclxuXHJcblx0XHRpZiAoaHVkLmhlYWx0aCA9PT0gMCkgZW5kR2FtZSgpO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuXHRnYW1lTG9vcCgpO1xyXG59O1xyXG5cclxuY29uc3QgcHJlcEdhbWUgPSBhc3luYyAoKSA9PiB7XHJcblx0T2JqZWN0LmZyZWV6ZShnYW1lT2JqZWN0KTtcclxuXHJcblx0aHVkID0gbmV3IEh1ZChjdHgsIHdvcmxkLCBhYmlsaXRpZXMsIGZyYW1lUmF0ZSk7XHJcblx0cGxheWVyID0gbmV3IFBsYXllcihjdHgsIHdvcmxkLCBodWQpO1xyXG5cdGNvbGxpc2lvbnMgPSBuZXcgQ29sbGlzaW9ucyhjdHgsIHdvcmxkLCBwbGF5ZXIsIGh1ZCk7XHJcblx0YWJpbGl0aWVzID0gbmV3IEFiaWxpdGllcyhjdHgsIHdvcmxkLCBodWQsIGNvbGxpc2lvbnMsIHBsYXllcik7XHJcblx0cGxhdGZvcm1zID0gbmV3IFBsYXRmb3JtcyhjdHgsIHdvcmxkLCBwbGF5ZXIsIGh1ZCwgY29sbGlzaW9ucywgYWJpbGl0aWVzLCBnYW1lT2JqZWN0KTtcclxuXHJcblx0YXdhaXQgcGxhdGZvcm1zLnNldFVwKCk7XHJcblx0YXdhaXQgcGxheWVyLnNldFVwKCk7XHJcblx0YXdhaXQgYWJpbGl0aWVzLnNldFVwKCk7XHJcblx0YXdhaXQgaHVkLnNldFVwKCk7XHJcblxyXG5cdC8vIHN0YXJ0R2FtZSgpO1xyXG5cdHN0YXJ0QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdC8vIHN0YXJ0QnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn07XHJcblxyXG5wcmVwR2FtZSgpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xyXG5cdHN3aXRjaCAoZS5jb2RlKSB7XHJcblx0XHRjYXNlICdTcGFjZSc6XHJcblx0XHRcdGlmIChyZXF1ZXN0SWQpIHtcclxuXHRcdFx0XHRpZiAocGF1c2VkKSB7XHJcblx0XHRcdFx0XHRwYXVzZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKCFwbGF5ZXIubG9hZGluZ0p1bXApIHBsYXllci5sb2FkaW5nSnVtcCA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xyXG5cdHN3aXRjaCAoZS5jb2RlKSB7XHJcblx0XHRjYXNlICdFc2NhcGUnOlxyXG5cdFx0XHRpZiAocGF1c2VkKSB7XHJcblx0XHRcdFx0cGF1c2VkID0gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cGF1c2VkID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSAnU3BhY2UnOlxyXG5cdFx0XHRwbGF5ZXIuanVtcCgpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ0tleUUnOlxyXG5cdFx0XHRhYmlsaXRpZXMudXNlUG93ZXJVcCgpO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn0pO1xyXG5cclxuc3RhcnRCdG4ub25jbGljayA9ICgpID0+IHtcclxuXHRzdGFydEdhbWUoKTtcclxuXHRzdGFydEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59O1xyXG4iLCJpbXBvcnQgQWJpbGl0aWVzIGZyb20gJy4vYWJpbGl0aWVzJztcclxuaW1wb3J0IENvbGxpc2lvbnMgZnJvbSAnLi9jb2xsaXNpb25zJztcclxuaW1wb3J0IEh1ZCBmcm9tICcuL2h1ZCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBDb250ZXh0LCBJR2FtZU9iamVjdCwgSUxldmVsLCBJUGxhdE9iamVjdCwgSVBsYXRmb3JtLCBJUG93ZXJVcCwgSVZpc2libGVQbGF0IH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybXMge1xyXG5cdHByaXZhdGUgY3R4OiBDb250ZXh0O1xyXG5cdHByaXZhdGUgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cdHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XHJcblx0cHJpdmF0ZSBodWQ6IEh1ZDtcclxuXHRwcml2YXRlIGNvbGxpc2lvbnM6IENvbGxpc2lvbnM7XHJcblx0cHJpdmF0ZSBhYmlsaXRpZXM6IEFiaWxpdGllcztcclxuXHRwcml2YXRlIGdhbWVPYmplY3Q6IElHYW1lT2JqZWN0O1xyXG5cdHB1YmxpYyBjdXJyZW50TGV2ZWw6IG51bWJlcjtcclxuXHRwdWJsaWMgcGxhdHNWaXNpYmxlOiBJVmlzaWJsZVBsYXRbXTtcclxuXHRwcml2YXRlIGJhY2tncm91bmRYOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBiYWNrZ3JvdW5kWDI6IG51bWJlcjtcclxuXHRwcml2YXRlIGJnSW1nWU9mZnNldDogbnVtYmVyO1xyXG5cdHByaXZhdGUgYmdJbWdZT2Zmc2V0MjogbnVtYmVyO1xyXG5cdHB1YmxpYyBnYW1lT3ZlcjogYm9vbGVhbjtcclxuXHRwcml2YXRlIGNvbGxpc2lvbk1hcmdpbjogbnVtYmVyO1xyXG5cdHByaXZhdGUgaW1hZ2VQYXRoczogc3RyaW5nW107XHJcblx0cHJpdmF0ZSBpbWFnZXM6IGFueTtcclxuXHRwcml2YXRlIGJnSW1nMTogc3RyaW5nO1xyXG5cdHByaXZhdGUgYmdJbWcyOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0Y3R4OiBDb250ZXh0LFxyXG5cdFx0d29ybGQ6IEhUTUxDYW52YXNFbGVtZW50LFxyXG5cdFx0cGxheWVyOiBQbGF5ZXIsXHJcblx0XHRodWQ6IEh1ZCxcclxuXHRcdGNvbGxpc2lvbnM6IENvbGxpc2lvbnMsXHJcblx0XHRhYmlsaXRpZXM6IEFiaWxpdGllcyxcclxuXHRcdGdhbWVPYmplY3Q6IGFueVxyXG5cdCkge1xyXG5cdFx0dGhpcy5jdHggPSBjdHg7XHJcblx0XHR0aGlzLndvcmxkID0gd29ybGQ7XHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHRcdHRoaXMuaHVkID0gaHVkO1xyXG5cdFx0dGhpcy5jb2xsaXNpb25zID0gY29sbGlzaW9ucztcclxuXHRcdHRoaXMuYWJpbGl0aWVzID0gYWJpbGl0aWVzO1xyXG5cdFx0dGhpcy5nYW1lT2JqZWN0ID0gZ2FtZU9iamVjdDtcclxuXHRcdHRoaXMuY3VycmVudExldmVsID0gMDtcclxuXHRcdHRoaXMucGxhdHNWaXNpYmxlID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW5kZXg6IDAsXHJcblx0XHRcdFx0eDogMCxcclxuXHRcdFx0XHRsZXZlbDogMCxcclxuXHRcdFx0fSxcclxuXHRcdF07XHJcblx0XHR0aGlzLmJhY2tncm91bmRYID0gMDtcclxuXHRcdHRoaXMuYmFja2dyb3VuZFgyID0gdGhpcy53b3JsZC53aWR0aDtcclxuXHRcdHRoaXMuYmdJbWdZT2Zmc2V0ID0gMDtcclxuXHRcdHRoaXMuYmdJbWdZT2Zmc2V0MiA9IDA7XHJcblx0XHR0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcblx0XHR0aGlzLmNvbGxpc2lvbk1hcmdpbiA9IDI2O1xyXG5cdFx0dGhpcy5pbWFnZVBhdGhzID0gW1xyXG5cdFx0XHQnLi4vcHVibGljL2JnTGV2ZWwxLnBuZycsXHJcblx0XHRcdCcuLi9wdWJsaWMvYmdMZXZlbDIucG5nJyxcclxuXHRcdFx0Ly8gUGxhdGZvcm0gVGV4dHVyZXNcclxuXHRcdFx0Jy4uL3B1YmxpYy93b29kUGxhdC5wbmcnLFxyXG5cdFx0XHQnLi4vcHVibGljL2RpcnRQbGF0LnBuZycsXHJcblx0XHRcdC8vIERlY29yXHJcblx0XHRcdCcuLi9wdWJsaWMvc3RhcnRTaWduLnBuZycsXHJcblx0XHRcdC8vIE9ic3RpY2xlc1xyXG5cdFx0XHQnLi4vcHVibGljL3JvY2sxLnBuZycsXHJcblx0XHRcdCcuLi9wdWJsaWMvcm9jazIucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy9yb2NrMy5wbmcnLFxyXG5cdFx0XTtcclxuXHRcdHRoaXMuaW1hZ2VzID0ge307XHJcblx0XHR0aGlzLmJnSW1nMSA9ICcnO1xyXG5cdFx0dGhpcy5iZ0ltZzIgPSAnJztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBzZXRVcCgpIHtcclxuXHRcdGNvbnN0IHByZWxvYWRJbWFnZXMgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5pbWFnZVBhdGhzLm1hcCgocGF0aDogc3RyaW5nKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSBwYXRoLnNwbGl0KCcvJykucG9wKCk/LnNwbGl0KCcuJylbMF07XHJcblx0XHRcdFx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuXHRcdFx0XHRcdGltYWdlLnNyYyA9IHBhdGg7XHJcblx0XHRcdFx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoW25hbWUsIGltYWdlXSk7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0aW1hZ2Uub25lcnJvciA9ICgpID0+IHJlamVjdChgSW1hZ2UgZmFpbGVkIHRvIGxvYWQ6ICR7cGF0aH1gKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGltZ0FycmF5dGVtcDogYW55W10gPSBhd2FpdCBwcmVsb2FkSW1hZ2VzKCk7XHJcblx0XHR0aGlzLmltYWdlcyA9IE9iamVjdC5mcm9tRW50cmllcyhpbWdBcnJheXRlbXApO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBuZXh0UGxhdGZvcm0oKSB7XHJcblx0XHRjb25zdCBsYXN0VmlzaWJsZVBsYXQ6IElWaXNpYmxlUGxhdCA9IHRoaXMucGxhdHNWaXNpYmxlW3RoaXMucGxhdHNWaXNpYmxlLmxlbmd0aCAtIDFdO1xyXG5cdFx0Y29uc3QgcGxhdHNSZWY6IElQbGF0Zm9ybVtdID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0ucGxhdGZvcm1zO1xyXG5cdFx0Y29uc3QgbGFzdFBsYXRSZWY6IElQbGF0Zm9ybSA9IHBsYXRzUmVmW2xhc3RWaXNpYmxlUGxhdC5pbmRleF07XHJcblx0XHQvLyBjb25zdCBuZXh0UGxhdDogSVBsYXRmb3JtID0gcGxhdHNSZWZbbGFzdFZpc2libGVQbGF0LmluZGV4ICsgMV07XHJcblxyXG5cdFx0aWYgKGxhc3RWaXNpYmxlUGxhdC5pbmRleCA9PT0gcGxhdHNSZWYubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRMZXZlbCArPSAxO1xyXG5cclxuXHRcdFx0dGhpcy5wbGF0c1Zpc2libGUucHVzaCh7XHJcblx0XHRcdFx0aW5kZXg6IDAsXHJcblx0XHRcdFx0eDogbGFzdFZpc2libGVQbGF0LnggKyBsYXN0UGxhdFJlZi5sZW4gKyBsYXN0UGxhdFJlZi5nYXBUb05leHQsXHJcblx0XHRcdFx0bGV2ZWw6IHRoaXMuY3VycmVudExldmVsLFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnBsYXRzVmlzaWJsZVswXS54ICsgcGxhdHNSZWZbdGhpcy5wbGF0c1Zpc2libGVbMF0uaW5kZXhdLmxlbiA8IDApIHRoaXMucGxhdHNWaXNpYmxlLnNoaWZ0KCk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGxhc3RWaXNpYmxlUGxhdC5pbmRleCA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLmh1ZC5jdXJyZW50TGV2ZWwgPSB0aGlzLmN1cnJlbnRMZXZlbDtcclxuXHRcdFx0dGhpcy5odWQuYmVnaW5MZXZlbFRleHRBbmltYXRpb24oKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnBsYXRzVmlzaWJsZS5wdXNoKHtcclxuXHRcdFx0aW5kZXg6IGxhc3RWaXNpYmxlUGxhdC5pbmRleCArIDEsXHJcblx0XHRcdHg6IGxhc3RWaXNpYmxlUGxhdC54ICsgbGFzdFBsYXRSZWYubGVuICsgbGFzdFBsYXRSZWYuZ2FwVG9OZXh0LFxyXG5cdFx0XHRsZXZlbDogdGhpcy5jdXJyZW50TGV2ZWwsXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAodGhpcy5wbGF0c1Zpc2libGVbMF0ueCArIHBsYXRzUmVmW3RoaXMucGxhdHNWaXNpYmxlWzBdLmluZGV4XS5sZW4gPCAwKSB0aGlzLnBsYXRzVmlzaWJsZS5zaGlmdCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG1vdmUoKSB7XHJcblx0XHRjb25zdCBsZXZlbDogSUxldmVsID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF07XHJcblx0XHRjb25zdCBwbGF0UmVmOiBJUGxhdGZvcm0gPSBsZXZlbC5wbGF0Zm9ybXNbdGhpcy5wbGF0c1Zpc2libGVbdGhpcy5wbGF0c1Zpc2libGUubGVuZ3RoIC0gMV0uaW5kZXhdO1xyXG5cclxuXHRcdGNvbnN0IGxhc3RQbGF0WCA9IHRoaXMucGxhdHNWaXNpYmxlW3RoaXMucGxhdHNWaXNpYmxlLmxlbmd0aCAtIDFdLng7XHJcblxyXG5cdFx0aWYgKGxhc3RQbGF0WCArIHBsYXRSZWYubGVuIDw9IHRoaXMud29ybGQud2lkdGgpIHRoaXMubmV4dFBsYXRmb3JtKCk7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXRzVmlzaWJsZS5sZW5ndGg7IGkrKykgdGhpcy5wbGF0c1Zpc2libGVbaV0ueCAtPSBsZXZlbC5zcGVlZDtcclxuXHRcdHRoaXMuYmFja2dyb3VuZFggLT0gbGV2ZWwuc3BlZWQgLyA4O1xyXG5cdFx0aWYgKHRoaXMuYmdJbWcyKSB0aGlzLmJhY2tncm91bmRYMiAtPSBsZXZlbC5zcGVlZCAvIDg7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdEZWNvckZvclBsYXQoZGVjb3I6IElQbGF0T2JqZWN0W10sIHBsYXRZVG9wOiBudW1iZXIsIHBsYXRYOiBudW1iZXIsIHBsYXRMZW46IG51bWJlcikge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkZWNvcj8ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgaW1nU3JjOiBIVE1MSW1hZ2VFbGVtZW50ID0gdGhpcy5pbWFnZXNbZGVjb3JbaV0ubmFtZV07XHJcblx0XHRcdGNvbnN0IGRlY29yWFZhbHMgPSBkZWNvcltpXS54TG9jc09uUGxhdEJ5UGVyYztcclxuXHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGVjb3JYVmFscz8ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0XHRpbWdTcmMsXHJcblx0XHRcdFx0XHRwbGF0WCArIHBsYXRMZW4gKiBkZWNvclhWYWxzW2ldLFxyXG5cdFx0XHRcdFx0cGxhdFlUb3AgLSB0aGlzLmltYWdlc1tkZWNvcltpXS5uYW1lXS5oZWlnaHQgKyAxMCxcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2VzW2RlY29yW2ldLm5hbWVdLndpZHRoLFxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbZGVjb3JbaV0ubmFtZV0uaGVpZ2h0XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3T2JzdGljbGVPblBsYXQoXHJcblx0XHRvYnN0aWNsZXM6IElQbGF0T2JqZWN0W10sXHJcblx0XHRwbGF0WVRvcDogbnVtYmVyLFxyXG5cdFx0cGxhdFg6IG51bWJlcixcclxuXHRcdHBsYXRMZW46IG51bWJlcixcclxuXHRcdHBsYXRJbmRleDogbnVtYmVyXHJcblx0KSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG9ic3RpY2xlcz8ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgaW1nU3JjOiBIVE1MSW1hZ2VFbGVtZW50ID0gdGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdO1xyXG5cdFx0XHRjb25zdCBvYnN0aWNsZVhWYWxzID0gb2JzdGljbGVzW2ldLnhMb2NzT25QbGF0QnlQZXJjO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvYnN0aWNsZVhWYWxzPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0XHRcdGltZ1NyYyxcclxuXHRcdFx0XHRcdHBsYXRYICsgcGxhdExlbiAqIG9ic3RpY2xlWFZhbHNbaV0sXHJcblx0XHRcdFx0XHRwbGF0WVRvcCAtIHRoaXMuaW1hZ2VzW29ic3RpY2xlc1tpXS5uYW1lXS5oZWlnaHQgKyAxMCxcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2VzW29ic3RpY2xlc1tpXS5uYW1lXS53aWR0aCxcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2VzW29ic3RpY2xlc1tpXS5uYW1lXS5oZWlnaHRcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHR0aGlzLmNvbGxpc2lvbnMuY2hlY2tGb3JDb2xsaXNpb24oe1xyXG5cdFx0XHRcdFx0eDE6IHRoaXMucGxheWVyLngsXHJcblx0XHRcdFx0XHR5MTogdGhpcy5wbGF5ZXIueSxcclxuXHRcdFx0XHRcdHgyOiBwbGF0WCArIHBsYXRMZW4gKiBvYnN0aWNsZVhWYWxzW2ldLFxyXG5cdFx0XHRcdFx0eTI6IHBsYXRZVG9wIC0gdGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdLmhlaWdodCArIDEwLFxyXG5cdFx0XHRcdFx0dzE6IHRoaXMucGxheWVyLncsXHJcblx0XHRcdFx0XHRoMTogdGhpcy5wbGF5ZXIuaCxcclxuXHRcdFx0XHRcdHcyOiB0aGlzLmltYWdlc1tvYnN0aWNsZXNbaV0ubmFtZV0ud2lkdGgsXHJcblx0XHRcdFx0XHRoMjpcclxuXHRcdFx0XHRcdFx0dGhpcy5pbWFnZXNbb2JzdGljbGVzW2ldLm5hbWVdLmhlaWdodCB8fFxyXG5cdFx0XHRcdFx0XHR0aGlzLndvcmxkLmhlaWdodCAtIChwbGF0WVRvcCAtIHRoaXMuaW1hZ2VzW29ic3RpY2xlc1tpXS5uYW1lXS5oZWlnaHQgKyAxMCksXHJcblx0XHRcdFx0XHRtYXJnaW46IHRoaXMuY29sbGlzaW9uTWFyZ2luLFxyXG5cdFx0XHRcdFx0b2JqZWN0OiBgJHtvYnN0aWNsZXNbaV0ubmFtZX1fJHtwbGF0SW5kZXh9XyR7b2JzdGljbGVYVmFsc1tpXX1gLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdCZ0ltYWdlKCkge1xyXG5cdFx0aWYgKCF0aGlzLmJnSW1nMS5sZW5ndGgpIHtcclxuXHRcdFx0dGhpcy5iZ0ltZ1lPZmZzZXQgPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXS5iZ0ltZ1lPZmZzZXQ7XHJcblx0XHRcdHRoaXMuYmdJbWcxID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0uYmFja2dyb3VuZEltZztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5iZ0ltZzIubGVuZ3RoICYmIHRoaXMuYmFja2dyb3VuZFgyIDw9IDApIHtcclxuXHRcdFx0dGhpcy5iZ0ltZzEgPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXS5iYWNrZ3JvdW5kSW1nO1xyXG5cdFx0XHR0aGlzLmJnSW1nMiA9ICcnO1xyXG5cdFx0XHR0aGlzLmJhY2tncm91bmRYID0gdGhpcy5iYWNrZ3JvdW5kWDI7XHJcblx0XHRcdHRoaXMuYmFja2dyb3VuZFgyID0gdGhpcy53b3JsZC53aWR0aDtcclxuXHRcdFx0dGhpcy5iZ0ltZ1lPZmZzZXQgPSB0aGlzLmJnSW1nWU9mZnNldDI7XHJcblx0XHRcdHRoaXMuYmdJbWdZT2Zmc2V0MiA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgYmdJbWFnZTEgPSB0aGlzLmltYWdlc1t0aGlzLmJnSW1nMV07IC8vIExlZnQgU2lkZSBCYWNrZ3JvdW5kXHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHQodGhpcy5iYWNrZ3JvdW5kWCArIGJnSW1hZ2UxLndpZHRoIDwgdGhpcy53b3JsZC53aWR0aCB8fFxyXG5cdFx0XHRcdHRoaXMucGxhdHNWaXNpYmxlWzBdLmxldmVsICE9PSB0aGlzLmN1cnJlbnRMZXZlbCkgJiZcclxuXHRcdFx0IXRoaXMuYmdJbWcyLmxlbmd0aFxyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMuYmFja2dyb3VuZFgyID0gdGhpcy53b3JsZC53aWR0aDtcclxuXHRcdFx0dGhpcy5iZ0ltZ1lPZmZzZXQyID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0uYmdJbWdZT2Zmc2V0O1xyXG5cdFx0XHR0aGlzLmJnSW1nMiA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdLmJhY2tncm91bmRJbWc7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgYmdJbWFnZTIgPSB0aGlzLmltYWdlcz8uW3RoaXMuYmdJbWcyXTsgLy8gUmlnaHQgU2lkZSBCYWNrZ3JvdW5kXHJcblxyXG5cdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRiZ0ltYWdlMSxcclxuXHRcdFx0MCxcclxuXHRcdFx0MCxcclxuXHRcdFx0YmdJbWFnZTEud2lkdGgsXHJcblx0XHRcdGJnSW1hZ2UxLmhlaWdodCxcclxuXHRcdFx0dGhpcy5iYWNrZ3JvdW5kWCxcclxuXHRcdFx0dGhpcy53b3JsZC5oZWlnaHQgLSBiZ0ltYWdlMS5oZWlnaHQgKyB0aGlzLmJnSW1nWU9mZnNldCxcclxuXHRcdFx0YmdJbWFnZTEud2lkdGgsXHJcblx0XHRcdGJnSW1hZ2UxLmhlaWdodFxyXG5cdFx0KTtcclxuXHJcblx0XHRpZiAoYmdJbWFnZTIpIHtcclxuXHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRcdGJnSW1hZ2UyLFxyXG5cdFx0XHRcdDAsXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHRiZ0ltYWdlMi53aWR0aCxcclxuXHRcdFx0XHRiZ0ltYWdlMi5oZWlnaHQsXHJcblx0XHRcdFx0dGhpcy5iYWNrZ3JvdW5kWDIsXHJcblx0XHRcdFx0dGhpcy53b3JsZC5oZWlnaHQgLSBiZ0ltYWdlMi5oZWlnaHQgKyB0aGlzLmJnSW1nWU9mZnNldDIsXHJcblx0XHRcdFx0YmdJbWFnZTIud2lkdGgsXHJcblx0XHRcdFx0YmdJbWFnZTIuaGVpZ2h0XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhdygpIHtcclxuXHRcdHRoaXMuZHJhd0JnSW1hZ2UoKTtcclxuXHJcblx0XHRsZXQgaXNGYWxsaW5nID0gdHJ1ZTtcclxuXHRcdGZvciAoY29uc3QgcGxhdCBvZiB0aGlzLnBsYXRzVmlzaWJsZSkge1xyXG5cdFx0XHRjb25zdCBsZXZlbDogSUxldmVsID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1twbGF0LmxldmVsXTtcclxuXHRcdFx0Y29uc3QgaW1nVyA9XHJcblx0XHRcdFx0dGhpcy5pbWFnZXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlXS53aWR0aCAqIChsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ubGVuIC8gbGV2ZWwubWF4UGxhdExlbik7XHJcblxyXG5cdFx0XHRjb25zdCBwbGF0Zm9ybTogSVBsYXRmb3JtID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1twbGF0LmxldmVsXS5wbGF0Zm9ybXNbcGxhdC5pbmRleF0gfHwgW107XHJcblxyXG5cdFx0XHRpZiAocGxhdGZvcm0/LmRlY29yKSB7XHJcblx0XHRcdFx0dGhpcy5kcmF3RGVjb3JGb3JQbGF0KFxyXG5cdFx0XHRcdFx0cGxhdGZvcm0uZGVjb3IsXHJcblx0XHRcdFx0XHRsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ueSxcclxuXHRcdFx0XHRcdHBsYXQueCxcclxuXHRcdFx0XHRcdGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS5sZW5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwbGF0Zm9ybT8ub2JzdGljbGVzKSB7XHJcblx0XHRcdFx0dGhpcy5kcmF3T2JzdGljbGVPblBsYXQocGxhdGZvcm0ub2JzdGljbGVzLCBwbGF0Zm9ybS55LCBwbGF0LngsIHBsYXRmb3JtLmxlbiwgcGxhdC5pbmRleCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHBsYXRmb3JtPy5wb3dlclVwcykge1xyXG5cdFx0XHRcdHRoaXMuYWJpbGl0aWVzLmRyYXcocGxhdGZvcm0ucG93ZXJVcHMsIHBsYXRmb3JtLnksIHBsYXQueCwgcGxhdGZvcm0ubGVuLCBwbGF0LmluZGV4KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGxldmVsLnBsYXRmb3JtSCkge1xyXG5cdFx0XHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2VzW2xldmVsLnBsYXRmb3JtVGV4dHVyZV0sXHJcblx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0MCxcclxuXHRcdFx0XHRcdGltZ1csXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tsZXZlbC5wbGF0Zm9ybVRleHR1cmVdLmhlaWdodCxcclxuXHRcdFx0XHRcdHBsYXQueCxcclxuXHRcdFx0XHRcdGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55LFxyXG5cdFx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLmxlbixcclxuXHRcdFx0XHRcdGxldmVsLnBsYXRmb3JtSFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlXSxcclxuXHRcdFx0XHRcdDAsXHJcblx0XHRcdFx0XHR0aGlzLmltYWdlc1tsZXZlbC5wbGF0Zm9ybVRleHR1cmVdLmhlaWdodCxcclxuXHRcdFx0XHRcdGltZ1csXHJcblx0XHRcdFx0XHQtMi41ICpcclxuXHRcdFx0XHRcdFx0dGhpcy5pbWFnZXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlXS5oZWlnaHQgKlxyXG5cdFx0XHRcdFx0XHQoKHRoaXMud29ybGQuaGVpZ2h0IC0gbGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnkpIC8gdGhpcy5pbWFnZXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlXS5oZWlnaHQpLFxyXG5cdFx0XHRcdFx0cGxhdC54LFxyXG5cdFx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnksXHJcblx0XHRcdFx0XHRsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ubGVuLFxyXG5cdFx0XHRcdFx0dGhpcy53b3JsZC5oZWlnaHQgLSBsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ueVxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdC8vIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ2JsYWNrJztcclxuXHRcdFx0XHQvLyB0aGlzLmN0eC5yZWN0KFxyXG5cdFx0XHRcdC8vIFx0cGxhdC54LFxyXG5cdFx0XHRcdC8vIFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnksXHJcblx0XHRcdFx0Ly8gXHRsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ubGVuLFxyXG5cdFx0XHRcdC8vIFx0dGhpcy53b3JsZC5oZWlnaHQgLSBsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ueVxyXG5cdFx0XHRcdC8vICk7XHJcblx0XHRcdFx0Ly8gdGhpcy5jdHguc3Ryb2tlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IGlzQ29sbGlkaW5nID0gdGhpcy5jb2xsaXNpb25zLmNoZWNrRm9yUGxhdENvbGxpc2lvbih7XHJcblx0XHRcdFx0eDE6IHRoaXMucGxheWVyLngsXHJcblx0XHRcdFx0eTE6IHRoaXMucGxheWVyLnksXHJcblx0XHRcdFx0eDI6IHBsYXQueCxcclxuXHRcdFx0XHR5MjogbGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnksXHJcblx0XHRcdFx0dzE6IHRoaXMucGxheWVyLncsXHJcblx0XHRcdFx0aDE6IHRoaXMucGxheWVyLmgsXHJcblx0XHRcdFx0dzI6IGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS5sZW4sXHJcblx0XHRcdFx0aDI6IGxldmVsLnBsYXRmb3JtSCB8fCB0aGlzLndvcmxkLmhlaWdodCAtIGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55LFxyXG5cdFx0XHRcdG1hcmdpbjogdGhpcy5jb2xsaXNpb25NYXJnaW4sXHJcblx0XHRcdFx0b2JqZWN0OiBgJHt0aGlzLmN1cnJlbnRMZXZlbH1fJHtwbGF0LmluZGV4fWAsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKGlzQ29sbGlkaW5nKSBpc0ZhbGxpbmcgPSBmYWxzZTtcclxuXHJcblx0XHRcdC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMyknO1xyXG5cdFx0XHQvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0Ly8gdGhpcy5jdHgucmVjdCh0aGlzLnBsYXRmb3Jtc1tpXS54LCB0aGlzLnBsYXRmb3Jtc1tpXS55LCB0aGlzLnBsYXRmb3Jtc1tpXS53LCB0aGlzLmgpO1xyXG5cdFx0XHQvLyB0aGlzLmN0eC5maWxsKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGlzRmFsbGluZykgdGhpcy5wbGF5ZXIuaXNJbkFpciA9IHRydWU7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBIdWQgZnJvbSAnLi9odWQnO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG5cdHByaXZhdGUgY3R4OiBDb250ZXh0O1xyXG5cdHByaXZhdGUgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cdHByaXZhdGUgaHVkOiBIdWQ7XHJcblx0cHJpdmF0ZSBhc3BlY3RSYXRpbzogbnVtYmVyO1xyXG5cdHB1YmxpYyB4OiBudW1iZXI7XHJcblx0cHVibGljIHk6IG51bWJlcjtcclxuXHRwdWJsaWMgdzogbnVtYmVyO1xyXG5cdHB1YmxpYyBoOiBudW1iZXI7XHJcblx0cHVibGljIGlzSW5BaXI6IGJvb2xlYW47XHJcblx0cHVibGljIG1heEp1bXBTdGFydDogbnVtYmVyO1xyXG5cdHB1YmxpYyBqdW1wVmVsU3RhcnRSZXNldDogbnVtYmVyO1xyXG5cdHB1YmxpYyBqdW1wVmVsU3RhcnQ6IG51bWJlcjtcclxuXHRwdWJsaWMgeVZlbG9jaXR5OiBudW1iZXI7XHJcblx0cHVibGljIHlBY2M6IG51bWJlcjtcclxuXHRwcml2YXRlIHJvdGF0aW9uOiBudW1iZXI7XHJcblx0cHJpdmF0ZSByb3RhdGlvblNwZWVkOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBpc0p1bXBpbmc6IGJvb2xlYW47XHJcblx0cHVibGljIGxvYWRpbmdKdW1wOiBib29sZWFuO1xyXG5cdHByaXZhdGUgd2hlZWxSb3Q6IG51bWJlcjtcclxuXHRwcml2YXRlIHJvdENvb3Jkc0Zvckp1bXA6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcclxuXHRwdWJsaWMgc3BlZWQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGltYWdlUGF0aHM6IHN0cmluZ1tdO1xyXG5cdHByaXZhdGUgaW1hZ2VzOiBhbnk7XHJcblx0cHJpdmF0ZSBpc0JlaW5nRGFtYWdlZDogYm9vbGVhbjtcclxuXHRwcml2YXRlIGxhc3RPYmplY3RIaXQ6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQsIGh1ZDogSHVkKSB7XHJcblx0XHR0aGlzLmN0eCA9IGN0eDtcclxuXHRcdHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHRcdHRoaXMuYXNwZWN0UmF0aW8gPSAxLjE7XHJcblx0XHR0aGlzLnggPSAxMDA7XHJcblx0XHR0aGlzLnkgPSAxMDA7XHJcblx0XHR0aGlzLncgPSAxNTA7XHJcblx0XHR0aGlzLmggPSB0aGlzLncgLyB0aGlzLmFzcGVjdFJhdGlvO1xyXG5cdFx0dGhpcy5pc0luQWlyID0gdHJ1ZTtcclxuXHRcdHRoaXMubWF4SnVtcFN0YXJ0ID0gMjA7XHJcblx0XHR0aGlzLmp1bXBWZWxTdGFydFJlc2V0ID0gMTA7XHJcblx0XHR0aGlzLmp1bXBWZWxTdGFydCA9IHRoaXMuanVtcFZlbFN0YXJ0UmVzZXQ7XHJcblx0XHR0aGlzLnlWZWxvY2l0eSA9IDA7XHJcblx0XHR0aGlzLnlBY2MgPSAwLjg7XHJcblx0XHR0aGlzLnJvdGF0aW9uID0gMDtcclxuXHRcdHRoaXMucm90YXRpb25TcGVlZCA9IDA7XHJcblx0XHR0aGlzLmlzSnVtcGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5sb2FkaW5nSnVtcCA9IGZhbHNlO1xyXG5cdFx0dGhpcy53aGVlbFJvdCA9IDA7XHJcblx0XHR0aGlzLnJvdENvb3Jkc0Zvckp1bXAgPSB7IHg6IDAsIHk6IDAgfTtcclxuXHRcdHRoaXMuc3BlZWQgPSAwO1xyXG5cdFx0dGhpcy5odWQgPSBodWQ7XHJcblx0XHR0aGlzLmltYWdlUGF0aHMgPSBbXHJcblx0XHRcdCcuLi9wdWJsaWMvZnJhbWUucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy9mcmFtZURhbWFnZWQucG5nJyxcclxuXHRcdFx0Jy4uL3B1YmxpYy93aGVlbC5wbmcnLFxyXG5cdFx0XHQnLi4vcHVibGljL3doZWVsRGFtYWdlZC5wbmcnLFxyXG5cdFx0XTtcclxuXHRcdHRoaXMuaW1hZ2VzID0ge307XHJcblx0XHR0aGlzLmlzQmVpbmdEYW1hZ2VkID0gZmFsc2U7XHJcblx0XHR0aGlzLmxhc3RPYmplY3RIaXQgPSAnJztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBzZXRVcCgpIHtcclxuXHRcdGNvbnN0IHByZWxvYWRJbWFnZXMgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5pbWFnZVBhdGhzLm1hcCgocGF0aDogc3RyaW5nKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSBwYXRoLnNwbGl0KCcvJykucG9wKCk/LnNwbGl0KCcuJylbMF07XHJcblx0XHRcdFx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuXHRcdFx0XHRcdGltYWdlLnNyYyA9IHBhdGg7XHJcblx0XHRcdFx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoW25hbWUsIGltYWdlXSk7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0aW1hZ2Uub25lcnJvciA9ICgpID0+IHJlamVjdChgSW1hZ2UgZmFpbGVkIHRvIGxvYWQ6ICR7cGF0aH1gKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGltZ0FycmF5dGVtcDogYW55W10gPSBhd2FpdCBwcmVsb2FkSW1hZ2VzKCk7XHJcblx0XHR0aGlzLmltYWdlcyA9IE9iamVjdC5mcm9tRW50cmllcyhpbWdBcnJheXRlbXApO1xyXG5cdFx0dGhpcy53ID0gdGhpcy5pbWFnZXMuZnJhbWUud2lkdGg7XHJcblx0XHR0aGlzLmggPSB0aGlzLmltYWdlcy5mcmFtZS5oZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hhbmdlVG9EYW1hZ2VkSW1ncyhvYmplY3Q6IHN0cmluZykge1xyXG5cdFx0aWYgKG9iamVjdCA9PT0gdGhpcy5sYXN0T2JqZWN0SGl0KSByZXR1cm47XHJcblx0XHR0aGlzLmxhc3RPYmplY3RIaXQgPSBvYmplY3Q7XHJcblx0XHR0aGlzLmlzQmVpbmdEYW1hZ2VkID0gdHJ1ZTtcclxuXHRcdGNvbnN0IGZsYXNoSW50ZXJ2YWwgPSA1MDtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA9IGZhbHNlO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmlzQmVpbmdEYW1hZ2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaXNCZWluZ0RhbWFnZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlzQmVpbmdEYW1hZ2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9LCBmbGFzaEludGVydmFsKTtcclxuXHRcdFx0XHRcdH0sIGZsYXNoSW50ZXJ2YWwpO1xyXG5cdFx0XHRcdH0sIGZsYXNoSW50ZXJ2YWwpO1xyXG5cdFx0XHR9LCBmbGFzaEludGVydmFsKTtcclxuXHRcdH0sIGZsYXNoSW50ZXJ2YWwpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxhbmQoeTogbnVtYmVyKSB7XHJcblx0XHRpZiAodGhpcy5yb3RhdGlvbiA8IDApIHJldHVybjtcclxuXHRcdHRoaXMuaXNJbkFpciA9IGZhbHNlO1xyXG5cdFx0dGhpcy5pc0p1bXBpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMucm90YXRpb25TcGVlZCA9IDA7XHJcblx0XHR0aGlzLnJvdGF0aW9uID0gMDtcclxuXHRcdHRoaXMueVZlbG9jaXR5ID0gMDtcclxuXHRcdHRoaXMueSA9IHkgLSB0aGlzLmg7XHJcblx0XHRpZiAoIXRoaXMubG9hZGluZ0p1bXApIHRoaXMuanVtcFZlbFN0YXJ0ID0gdGhpcy5qdW1wVmVsU3RhcnRSZXNldDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBqdW1wKCkge1xyXG5cdFx0dGhpcy5sb2FkaW5nSnVtcCA9IGZhbHNlO1xyXG5cdFx0aWYgKHRoaXMuaXNKdW1waW5nIHx8IHRoaXMuaXNJbkFpciB8fCB0aGlzLnlWZWxvY2l0eSA8IDApIHJldHVybjtcclxuXHRcdHRoaXMucm90YXRpb25TcGVlZCA9IHRoaXMuanVtcFZlbFN0YXJ0O1xyXG5cdFx0dGhpcy5pc0p1bXBpbmcgPSB0cnVlO1xyXG5cclxuXHRcdHRoaXMuaXNJbkFpciA9IHRydWU7XHJcblx0XHR0aGlzLnlWZWxvY2l0eSA9IHRoaXMuanVtcFZlbFN0YXJ0O1xyXG5cdFx0dGhpcy5qdW1wVmVsU3RhcnQgPSB0aGlzLmp1bXBWZWxTdGFydFJlc2V0O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsb2FkSnVtcCgpIHtcclxuXHRcdGlmICh0aGlzLmp1bXBWZWxTdGFydCA8IHRoaXMubWF4SnVtcFN0YXJ0KSB7XHJcblx0XHRcdHRoaXMuanVtcFZlbFN0YXJ0ICs9IDAuNTtcclxuXHRcdFx0dGhpcy5odWQuZHJhd0p1bXBDaGFyZ2UoXHJcblx0XHRcdFx0MSAtICh0aGlzLm1heEp1bXBTdGFydCAtIHRoaXMuanVtcFZlbFN0YXJ0KSAvICh0aGlzLm1heEp1bXBTdGFydCAtIHRoaXMuanVtcFZlbFN0YXJ0UmVzZXQpLFxyXG5cdFx0XHRcdHRoaXMueCxcclxuXHRcdFx0XHR0aGlzLnlcclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaHVkLmRyYXdKdW1wQ2hhcmdlKDEsIHRoaXMueCwgdGhpcy55KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZHJhd0ZyYW1lKCkge1xyXG5cdFx0Ly8gY29uc3QgeU9mZnNldCA9IDU7XHJcblx0XHR0aGlzLmN0eC5zYXZlKCk7XHJcblx0XHR0aGlzLmN0eC50cmFuc2xhdGUodGhpcy5yb3RDb29yZHNGb3JKdW1wLngsIHRoaXMucm90Q29vcmRzRm9ySnVtcC55KTtcclxuXHRcdHRoaXMuY3R4LnJvdGF0ZSgodGhpcy5yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKTtcclxuXHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA/IHRoaXMuaW1hZ2VzLmZyYW1lRGFtYWdlZCA6IHRoaXMuaW1hZ2VzLmZyYW1lLFxyXG5cdFx0XHQtdGhpcy5pbWFnZXMud2hlZWwud2lkdGggLyAyLFxyXG5cdFx0XHQtdGhpcy5oICsgdGhpcy5pbWFnZXMud2hlZWwuaGVpZ2h0IC8gMixcclxuXHRcdFx0dGhpcy53LFxyXG5cdFx0XHR0aGlzLmhcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN0eC5yZXN0b3JlKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdXaGVlbHMoKSB7XHJcblx0XHRjb25zdCByb3RPZmZzZXQgPSB0aGlzLmh1ZC5oZWFsdGggPj0gOTAgPyAwIDogdGhpcy5odWQuaGVhbHRoIDwgOTAgJiYgdGhpcy5odWQuaGVhbHRoID49IDUwID8gMSA6IDI7XHJcblxyXG5cdFx0dGhpcy5jdHguc2F2ZSgpO1xyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKHRoaXMucm90Q29vcmRzRm9ySnVtcC54ICsgcm90T2Zmc2V0LCB0aGlzLnJvdENvb3Jkc0Zvckp1bXAueSk7XHJcblx0XHR0aGlzLmN0eC5yb3RhdGUoKHRoaXMucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7IC8vIFJvdGF0ZSBmb3IganVtcFxyXG5cdFx0dGhpcy5jdHgucm90YXRlKCh0aGlzLndoZWVsUm90ICogTWF0aC5QSSkgLyAxODApOyAvLyBSb3RhdGUgZm9yIHdoZWVsIHNwaW5cclxuXHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0dGhpcy5pc0JlaW5nRGFtYWdlZCA/IHRoaXMuaW1hZ2VzLndoZWVsRGFtYWdlZCA6IHRoaXMuaW1hZ2VzLndoZWVsLFxyXG5cdFx0XHQtdGhpcy5pbWFnZXMud2hlZWwud2lkdGggLyAyIC0gcm90T2Zmc2V0LFxyXG5cdFx0XHQtdGhpcy5pbWFnZXMud2hlZWwuaGVpZ2h0IC8gMixcclxuXHRcdFx0dGhpcy5pbWFnZXMud2hlZWwud2lkdGggLSAwLjUsXHJcblx0XHRcdHRoaXMuaW1hZ2VzLndoZWVsLmhlaWdodCAtIDAuNVxyXG5cdFx0KTtcclxuXHRcdHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuXHJcblx0XHR0aGlzLmN0eC5zYXZlKCk7XHJcblx0XHR0aGlzLmN0eC50cmFuc2xhdGUodGhpcy5yb3RDb29yZHNGb3JKdW1wLngsIHRoaXMucm90Q29vcmRzRm9ySnVtcC55ICsgcm90T2Zmc2V0KTtcclxuXHRcdHRoaXMuY3R4LnJvdGF0ZSgodGhpcy5yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKTsgLy8gUm90YXRlIGZvciBqdW1wXHJcblx0XHR0aGlzLmN0eC50cmFuc2xhdGUoLXRoaXMucm90Q29vcmRzRm9ySnVtcC54LCAtdGhpcy5yb3RDb29yZHNGb3JKdW1wLnkpOyAvLyBNb3ZlIHRvIHN0YXJ0XHJcblx0XHR0aGlzLmN0eC50cmFuc2xhdGUodGhpcy54ICsgdGhpcy53IC0gdGhpcy5pbWFnZXMud2hlZWwud2lkdGggLyAyLCB0aGlzLnJvdENvb3Jkc0Zvckp1bXAueSk7XHJcblx0XHR0aGlzLmN0eC5yb3RhdGUoKHRoaXMud2hlZWxSb3QgKiBNYXRoLlBJKSAvIDE4MCk7IC8vIFJvdGF0ZSBmb3Igd2hlZWwgc3BpblxyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKC0odGhpcy54ICsgdGhpcy53IC0gdGhpcy5pbWFnZXMud2hlZWwud2lkdGggLyAyKSwgLXRoaXMucm90Q29vcmRzRm9ySnVtcC55KTsgLy8gTW92ZSB0byBzdGFydFxyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKHRoaXMucm90Q29vcmRzRm9ySnVtcC54LCB0aGlzLnJvdENvb3Jkc0Zvckp1bXAueSk7XHJcblxyXG5cdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHR0aGlzLmlzQmVpbmdEYW1hZ2VkID8gdGhpcy5pbWFnZXMud2hlZWxEYW1hZ2VkIDogdGhpcy5pbWFnZXMud2hlZWwsXHJcblx0XHRcdC0odGhpcy5yb3RDb29yZHNGb3JKdW1wLnggLSB0aGlzLngpICsgdGhpcy53IC0gdGhpcy5pbWFnZXMud2hlZWwud2lkdGgsXHJcblx0XHRcdC10aGlzLmltYWdlcy53aGVlbC5oZWlnaHQgLyAyIC0gcm90T2Zmc2V0LFxyXG5cdFx0XHR0aGlzLmltYWdlcy53aGVlbC53aWR0aCAtIDAuNSxcclxuXHRcdFx0dGhpcy5pbWFnZXMud2hlZWwuaGVpZ2h0IC0gMC41XHJcblx0XHQpO1xyXG5cdFx0dGhpcy5jdHgucmVzdG9yZSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGRyYXcoKSB7XHJcblx0XHRpZiAoIXRoaXMuaW1hZ2VzPy5mcmFtZSkgcmV0dXJuO1xyXG5cdFx0dGhpcy53aGVlbFJvdCArPSB0aGlzLnNwZWVkO1xyXG5cdFx0Ly8gdGhpcy53aGVlbFJvdCArPSAxMDtcclxuXHJcblx0XHRpZiAodGhpcy5sb2FkaW5nSnVtcCkgdGhpcy5sb2FkSnVtcCgpO1xyXG5cclxuXHRcdHRoaXMueSAtPSB0aGlzLnlWZWxvY2l0eTtcclxuXHRcdGlmICh0aGlzLmlzSW5BaXIpIHRoaXMueVZlbG9jaXR5IC09IHRoaXMueUFjYztcclxuXHJcblx0XHRpZiAodGhpcy5pc0p1bXBpbmcpIHtcclxuXHRcdFx0dGhpcy5yb3RhdGlvbiAtPSB0aGlzLnJvdGF0aW9uU3BlZWQgLyA0O1xyXG5cdFx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgLT0gdGhpcy55QWNjICogMjtcclxuXHJcblx0XHRcdGlmICh0aGlzLnJvdGF0aW9uID49IDUpIHtcclxuXHRcdFx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYigwLCAwLCAwLCAwLjUpJztcclxuXHRcdC8vIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0Ly8gdGhpcy5jdHgucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53LCB0aGlzLmgpO1xyXG5cdFx0Ly8gdGhpcy5jdHguZmlsbCgpO1xyXG5cclxuXHRcdHRoaXMucm90Q29vcmRzRm9ySnVtcCA9IHtcclxuXHRcdFx0eDogdGhpcy54ICsgdGhpcy5pbWFnZXMud2hlZWwud2lkdGggLyAyLFxyXG5cdFx0XHR5OiB0aGlzLnkgKyB0aGlzLmggLSB0aGlzLmltYWdlcy53aGVlbC5oZWlnaHQgLyAyLFxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmRyYXdXaGVlbHMoKTtcclxuXHRcdHRoaXMuZHJhd0ZyYW1lKCk7XHJcblx0fVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FiaWxpdGllcy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb2xsaXNpb25zLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2h1ZC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wbGF0Zm9ybXMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGxheWVyLnRzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHlwZXMudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=