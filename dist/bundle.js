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
var decor_startSign = {
    fileName: 'startSign',
    w: 50,
    h: 50,
};
var obsticle_rock1 = {
    fileName: 'rock1',
    w: 70,
    h: 70,
};
var obsticle_rock2 = {
    fileName: 'rock2',
    w: 70,
    h: 70,
};
var levelOne = {
    platforms: [
        {
            y: 600,
            len: 2000,
            gapToNext: 200,
            decor: [{ imgInfo: decor_startSign, xLocsOnPlatByPerc: [0.1] }],
            obsticles: [{ imgInfo: obsticle_rock1, xLocsOnPlatByPerc: [0.6] }],
        },
        { y: 700, len: 1000, gapToNext: 0 },
        { y: 600, len: 800, gapToNext: 0 },
        { y: 500, len: 2000, gapToNext: 0, obsticles: [{ imgInfo: obsticle_rock2, xLocsOnPlatByPerc: [0.4] }] },
        { y: 700, len: 1200, gapToNext: 0 },
        { y: 450, len: 1000, gapToNext: 0 },
        { y: 650, len: 1000, gapToNext: 0 },
        { y: 625, len: 600, gapToNext: 0 },
        { y: 600, len: 800, gapToNext: 0 },
        { y: 700, len: 2000, gapToNext: 0 },
        { y: 650, len: 700, gapToNext: 0 },
        { y: 610, len: 1000, gapToNext: 0 },
    ],
    platformTexture: 'woodPlat',
    platformH: 16,
    backgroundImg: '',
    maxPlatLen: 4000,
    speed: 15,
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
var ctx = world.getContext('2d');
// For game loop
var requestId, now, then, elapsed, fpsInterval;
var frameRate = 60;
var paused = true;
var spdIntervalId;
// Classes
var platforms, player;
var endGame = function () {
    if (requestId)
        cancelAnimationFrame(requestId);
    requestId = null;
    clearInterval(spdIntervalId);
};
var gameLoop = function () {
    requestId = requestAnimationFrame(gameLoop);
    fpsInterval = 1000 / frameRate;
    now = Date.now();
    elapsed = now - (then || 0);
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, world.width, world.height);
        if (!paused)
            platforms.move();
        platforms.draw();
        player.draw();
        if (platforms.checkForCollision() || platforms.gameOver)
            endGame();
    }
};
var setSpdIncInterval = function () {
    spdIntervalId = setInterval(function () {
        // platforms.increaseSpeed();
    }, 5000);
};
var startGame = function () {
    Object.freeze(_public_gameObject__WEBPACK_IMPORTED_MODULE_0__["default"]);
    player = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, world);
    platforms = new _platforms__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, world, player, _public_gameObject__WEBPACK_IMPORTED_MODULE_0__["default"]);
    gameLoop();
};
startGame();
document.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'Space':
            if (requestId) {
                if (paused) {
                    paused = false;
                    setSpdIncInterval();
                }
                else {
                    if (!player.loadingJump)
                        player.loadingJump = true;
                    // player.jump();
                }
            }
            else {
                paused = false;
                setSpdIncInterval();
                startGame();
            }
            break;
    }
});
document.addEventListener('keyup', function (e) {
    switch (e.code) {
        case 'Escape':
            if (paused) {
                paused = false;
                setSpdIncInterval();
            }
            else {
                paused = true;
                clearInterval(spdIntervalId);
            }
        case 'Space':
            player.loadingJump = false;
            player.jump();
            break;
    }
});


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
var Platforms = /** @class */ (function () {
    function Platforms(ctx, world, player, gameObject) {
        this.ctx = ctx;
        this.world = world;
        this.player = player;
        this.speed = 20;
        // Backgrounds -------------------------------------------
        this.bg_mountains = new Image();
        this.bg_mountains.src = '../public/bg_mountains.png';
        // Platforms ---------------------------------------------
        this.woodPlat = new Image();
        this.woodPlat.src = '../public/woodPlat.png';
        this.dirtPlat = new Image();
        this.dirtPlat.src = '../public/dirtPlat.png';
        // Decor -------------------------------------------------
        this.startSign = new Image();
        this.startSign.src = '../public/start_sign.png';
        // Obsticles ---------------------------------------------
        this.rock1 = new Image();
        this.rock1.src = '../public/rock1.png';
        this.rock2 = new Image();
        this.rock2.src = '../public/rock2.png';
        // -------------------------------------------------------
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
    }
    Platforms.prototype.increaseSpeed = function () {
        // this.speed += 0.5;
        // this.platXGap = this.speed * 10;
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
                else if (this.player.y + this.player.h > platY + this.collisionMargin) {
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
            this.player.x <= xVal + obsticle.imgInfo.w && // Check player left collision
            this.player.y <= yVal + (obsticle.imgInfo.h || this.world.height - yVal) && // Check player top collision
            this.player.y + this.player.h > yVal // Check player bottom collision
        ) {
            console.log('Collision with: ', obsticle.imgInfo.fileName);
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
            var imgSrc = this[decor[i].imgInfo.fileName];
            var decorXVals = decor[i].xLocsOnPlatByPerc;
            for (var i_1 = 0; i_1 < (decorXVals === null || decorXVals === void 0 ? void 0 : decorXVals.length); i_1++) {
                this.ctx.drawImage(imgSrc, platX + platLen * decorXVals[i_1], platYTop - decor[i_1].imgInfo.h + 10, decor[i_1].imgInfo.w, decor[i_1].imgInfo.h);
            }
        }
    };
    Platforms.prototype.drawObsticleOnPlat = function (obsticles, platYTop, platX, platLen) {
        for (var i = 0; i < (obsticles === null || obsticles === void 0 ? void 0 : obsticles.length); i++) {
            var imgSrc = this[obsticles[i].imgInfo.fileName];
            var obsticleXVals = obsticles[i].xLocsOnPlatByPerc;
            for (var i_2 = 0; i_2 < (obsticleXVals === null || obsticleXVals === void 0 ? void 0 : obsticleXVals.length); i_2++) {
                this.ctx.drawImage(imgSrc, platX + platLen * obsticleXVals[i_2], platYTop - obsticles[i_2].imgInfo.h + 10, obsticles[i_2].imgInfo.w, obsticles[i_2].imgInfo.h);
                this.checkObsticleCollision(obsticles[i_2], platX + platLen * obsticleXVals[i_2], platYTop - obsticles[i_2].imgInfo.h + 10);
            }
        }
    };
    Platforms.prototype.draw = function () {
        // Draw BG
        this.ctx.drawImage(this.bg_mountains, 0, 0, this.bg_mountains.width, this.bg_mountains.height, this.backgroundX, this.world.height - this.bg_mountains.height, this.bg_mountains.width, this.bg_mountains.height);
        for (var _i = 0, _a = this.platsVisible; _i < _a.length; _i++) {
            var plat = _a[_i];
            var level = this.gameObject.levels[this.currentLevel];
            var imgW = this[level.platformTexture].width *
                (level.platforms[plat.index].len / level.maxPlatLen);
            var platform = this.gameObject.levels[this.currentLevel].platforms[plat.index] || [];
            if (platform === null || platform === void 0 ? void 0 : platform.decor) {
                this.drawDecorForPlat(platform.decor, level.platforms[plat.index].y, plat.x, level.platforms[plat.index].len);
            }
            if (platform === null || platform === void 0 ? void 0 : platform.obsticles) {
                this.drawObsticleOnPlat(platform.obsticles, platform.y, plat.x, platform.len);
            }
            this.ctx.drawImage(this[level.platformTexture], 0, 0, imgW, this[level.platformTexture].height, plat.x, level.platforms[plat.index].y, level.platforms[plat.index].len, level.platformH || this.world.height - level.platforms[plat.index].y);
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
        this.bikeImg = new Image();
        this.bikeImg.src = '../public/mtb_resized.png';
        this.aspectRatio = 1.84;
        this.x = 100;
        this.y = 100;
        this.w = 170;
        this.h = this.w / this.aspectRatio;
        this.isInAir = false;
        this.jumpVelStart = 10;
        this.yVelocity = 0;
        this.yAcc = 0.8;
        this.rotation = 0;
        this.rotationSpeed = 0;
        this.isJumping = false;
        this.loadingJump = false;
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
            this.jumpVelStart = 10;
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
        this.jumpVelStart += 0.6;
    };
    Player.prototype.draw = function () {
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
        // this.ctx.fillStyle = 'rgb(0, 0, 0)';
        // this.ctx.beginPath();
        // this.ctx.rect(this.x, this.y, this.w, this.h);
        // this.ctx.fill();
        this.ctx.save();
        this.ctx.translate(this.x + this.w * 0.25, this.y + this.h * 0.7);
        this.ctx.rotate((this.rotation * Math.PI) / 180);
        this.ctx.drawImage(this.bikeImg, -this.w + this.w * (1 - 0.25), -this.h + this.h * (1 - 0.7), this.w, this.h);
        this.ctx.restore();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9wdWJsaWMvZ2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL3BsYXRmb3Jtcy50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvcGxheWVyLnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJR2FtZU9iamVjdCwgSUltZ0luZm8sIElMZXZlbCwgSVBsYXRPYmplY3QgfSBmcm9tICcuLi9zcmMvdHlwZXMnO1xyXG5cclxuY29uc3QgZGVjb3Jfc3RhcnRTaWduOiBJSW1nSW5mbyA9IHtcclxuXHRmaWxlTmFtZTogJ3N0YXJ0U2lnbicsXHJcblx0dzogNTAsXHJcblx0aDogNTAsXHJcbn07XHJcblxyXG5jb25zdCBvYnN0aWNsZV9yb2NrMTogSUltZ0luZm8gPSB7XHJcblx0ZmlsZU5hbWU6ICdyb2NrMScsXHJcblx0dzogNzAsXHJcblx0aDogNzAsXHJcbn07XHJcblxyXG5jb25zdCBvYnN0aWNsZV9yb2NrMjogSUltZ0luZm8gPSB7XHJcblx0ZmlsZU5hbWU6ICdyb2NrMicsXHJcblx0dzogNzAsXHJcblx0aDogNzAsXHJcbn07XHJcblxyXG5jb25zdCBsZXZlbE9uZTogSUxldmVsID0ge1xyXG5cdHBsYXRmb3JtczogW1xyXG5cdFx0e1xyXG5cdFx0XHR5OiA2MDAsXHJcblx0XHRcdGxlbjogMjAwMCxcclxuXHRcdFx0Z2FwVG9OZXh0OiAyMDAsXHJcblx0XHRcdGRlY29yOiBbeyBpbWdJbmZvOiBkZWNvcl9zdGFydFNpZ24sIHhMb2NzT25QbGF0QnlQZXJjOiBbMC4xXSB9XSxcclxuXHRcdFx0b2JzdGljbGVzOiBbeyBpbWdJbmZvOiBvYnN0aWNsZV9yb2NrMSwgeExvY3NPblBsYXRCeVBlcmM6IFswLjZdIH1dLFxyXG5cdFx0fSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA2MDAsIGxlbjogODAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNTAwLCBsZW46IDIwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBpbWdJbmZvOiBvYnN0aWNsZV9yb2NrMiwgeExvY3NPblBsYXRCeVBlcmM6IFswLjRdIH1dIH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiAxMjAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNDUwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA2NTAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDYyNSwgbGVuOiA2MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA2MDAsIGxlbjogODAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDIwMDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA2NTAsIGxlbjogNzAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNjEwLCBsZW46IDEwMDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdF0sXHJcblx0cGxhdGZvcm1UZXh0dXJlOiAnd29vZFBsYXQnLFxyXG5cdHBsYXRmb3JtSDogMTYsXHJcblx0YmFja2dyb3VuZEltZzogJycsXHJcblx0bWF4UGxhdExlbjogNDAwMCxcclxuXHRzcGVlZDogMTUsXHJcbn07XHJcblxyXG5jb25zdCBnYW1lT2JqZWN0OiBJR2FtZU9iamVjdCA9IHtcclxuXHRsZXZlbHM6IFtsZXZlbE9uZV0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lT2JqZWN0O1xyXG4iLCJpbXBvcnQgZ2FtZU9iamVjdCBmcm9tICcuLi9wdWJsaWMvZ2FtZU9iamVjdCc7XHJcbmltcG9ydCBQbGF0Zm9ybXMgZnJvbSAnLi9wbGF0Zm9ybXMnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuXHJcbmNvbnN0IHdvcmxkID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3JsZCcpO1xyXG5jb25zdCBjdHggPSA8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPndvcmxkLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4vLyBGb3IgZ2FtZSBsb29wXHJcbmxldCByZXF1ZXN0SWQ6IG51bWJlciB8IG51bGwsIG5vdzogbnVtYmVyLCB0aGVuOiBudW1iZXIsIGVsYXBzZWQ6IG51bWJlciwgZnBzSW50ZXJ2YWw6IG51bWJlcjtcclxuXHJcbmxldCBmcmFtZVJhdGUgPSA2MDtcclxubGV0IHBhdXNlZCA9IHRydWU7XHJcbmxldCBzcGRJbnRlcnZhbElkOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD47XHJcblxyXG4vLyBDbGFzc2VzXHJcbmxldCBwbGF0Zm9ybXM6IFBsYXRmb3JtcywgcGxheWVyOiBQbGF5ZXI7XHJcblxyXG5jb25zdCBlbmRHYW1lID0gKCkgPT4ge1xyXG5cdGlmIChyZXF1ZXN0SWQpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJZCk7XHJcblx0cmVxdWVzdElkID0gbnVsbDtcclxuXHRjbGVhckludGVydmFsKHNwZEludGVydmFsSWQpO1xyXG59O1xyXG5cclxuY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XHJcblx0cmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcclxuXHJcblx0ZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnJhbWVSYXRlO1xyXG5cdG5vdyA9IERhdGUubm93KCk7XHJcblx0ZWxhcHNlZCA9IG5vdyAtICh0aGVuIHx8IDApO1xyXG5cclxuXHRpZiAoZWxhcHNlZCA+IGZwc0ludGVydmFsKSB7XHJcblx0XHR0aGVuID0gbm93IC0gKGVsYXBzZWQgJSBmcHNJbnRlcnZhbCk7XHJcblxyXG5cdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCB3b3JsZC53aWR0aCwgd29ybGQuaGVpZ2h0KTtcclxuXHRcdGlmICghcGF1c2VkKSBwbGF0Zm9ybXMubW92ZSgpO1xyXG5cdFx0cGxhdGZvcm1zLmRyYXcoKTtcclxuXHRcdHBsYXllci5kcmF3KCk7XHJcblxyXG5cdFx0aWYgKHBsYXRmb3Jtcy5jaGVja0ZvckNvbGxpc2lvbigpIHx8IHBsYXRmb3Jtcy5nYW1lT3ZlcikgZW5kR2FtZSgpO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IHNldFNwZEluY0ludGVydmFsID0gKCkgPT4ge1xyXG5cdHNwZEludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHQvLyBwbGF0Zm9ybXMuaW5jcmVhc2VTcGVlZCgpO1xyXG5cdH0sIDUwMDApO1xyXG59O1xyXG5cclxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG5cdE9iamVjdC5mcmVlemUoZ2FtZU9iamVjdCk7XHJcblx0cGxheWVyID0gbmV3IFBsYXllcihjdHgsIHdvcmxkKTtcclxuXHRwbGF0Zm9ybXMgPSBuZXcgUGxhdGZvcm1zKGN0eCwgd29ybGQsIHBsYXllciwgZ2FtZU9iamVjdCk7XHJcblx0Z2FtZUxvb3AoKTtcclxufTtcclxuXHJcbnN0YXJ0R2FtZSgpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xyXG5cdHN3aXRjaCAoZS5jb2RlKSB7XHJcblx0XHRjYXNlICdTcGFjZSc6XHJcblx0XHRcdGlmIChyZXF1ZXN0SWQpIHtcclxuXHRcdFx0XHRpZiAocGF1c2VkKSB7XHJcblx0XHRcdFx0XHRwYXVzZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHNldFNwZEluY0ludGVydmFsKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICghcGxheWVyLmxvYWRpbmdKdW1wKSBwbGF5ZXIubG9hZGluZ0p1bXAgPSB0cnVlO1xyXG5cdFx0XHRcdFx0Ly8gcGxheWVyLmp1bXAoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cGF1c2VkID0gZmFsc2U7XHJcblx0XHRcdFx0c2V0U3BkSW5jSW50ZXJ2YWwoKTtcclxuXHRcdFx0XHRzdGFydEdhbWUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcclxuXHRzd2l0Y2ggKGUuY29kZSkge1xyXG5cdFx0Y2FzZSAnRXNjYXBlJzpcclxuXHRcdFx0aWYgKHBhdXNlZCkge1xyXG5cdFx0XHRcdHBhdXNlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdHNldFNwZEluY0ludGVydmFsKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cGF1c2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKHNwZEludGVydmFsSWQpO1xyXG5cdFx0XHR9XHJcblx0XHRjYXNlICdTcGFjZSc6XHJcblx0XHRcdHBsYXllci5sb2FkaW5nSnVtcCA9IGZhbHNlO1xyXG5cdFx0XHRwbGF5ZXIuanVtcCgpO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn0pO1xyXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgQ29udGV4dCwgSUdhbWVPYmplY3QsIElMZXZlbCwgSVBsYXRPYmplY3QsIElQbGF0Zm9ybSwgSVZpc2libGVQbGF0IH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybXMge1xyXG5cdHByaXZhdGUgY3R4OiBDb250ZXh0O1xyXG5cdHByaXZhdGUgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cdHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XHJcblx0cHVibGljIHNwZWVkOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBiZ19tb3VudGFpbnM6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblx0cHJpdmF0ZSB3b29kUGxhdDogSFRNTEltYWdlRWxlbWVudDtcclxuXHRwcml2YXRlIGRpcnRQbGF0OiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cdHByaXZhdGUgc3RhcnRTaWduOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cdHByaXZhdGUgcm9jazE6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblx0cHJpdmF0ZSByb2NrMjogSFRNTEltYWdlRWxlbWVudDtcclxuXHRwcml2YXRlIGdhbWVPYmplY3Q6IElHYW1lT2JqZWN0O1xyXG5cdHByaXZhdGUgY3VycmVudExldmVsOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBwbGF0c1Zpc2libGU6IElWaXNpYmxlUGxhdFtdO1xyXG5cdHByaXZhdGUgYmFja2dyb3VuZFg6IG51bWJlcjtcclxuXHRwdWJsaWMgZ2FtZU92ZXI6IGJvb2xlYW47XHJcblx0cHJpdmF0ZSBjb2xsaXNpb25NYXJnaW46IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQsIHBsYXllcjogUGxheWVyLCBnYW1lT2JqZWN0OiBhbnkpIHtcclxuXHRcdHRoaXMuY3R4ID0gY3R4O1xyXG5cdFx0dGhpcy53b3JsZCA9IHdvcmxkO1xyXG5cdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblx0XHR0aGlzLnNwZWVkID0gMjA7XHJcblx0XHQvLyBCYWNrZ3JvdW5kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHR0aGlzLmJnX21vdW50YWlucyA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0dGhpcy5iZ19tb3VudGFpbnMuc3JjID0gJy4uL3B1YmxpYy9iZ19tb3VudGFpbnMucG5nJztcclxuXHRcdC8vIFBsYXRmb3JtcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdHRoaXMud29vZFBsYXQgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdHRoaXMud29vZFBsYXQuc3JjID0gJy4uL3B1YmxpYy93b29kUGxhdC5wbmcnO1xyXG5cdFx0dGhpcy5kaXJ0UGxhdCA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0dGhpcy5kaXJ0UGxhdC5zcmMgPSAnLi4vcHVibGljL2RpcnRQbGF0LnBuZyc7XHJcblx0XHQvLyBEZWNvciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHR0aGlzLnN0YXJ0U2lnbiA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0dGhpcy5zdGFydFNpZ24uc3JjID0gJy4uL3B1YmxpYy9zdGFydF9zaWduLnBuZyc7XHJcblx0XHQvLyBPYnN0aWNsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHR0aGlzLnJvY2sxID0gbmV3IEltYWdlKCk7XHJcblx0XHR0aGlzLnJvY2sxLnNyYyA9ICcuLi9wdWJsaWMvcm9jazEucG5nJztcclxuXHRcdHRoaXMucm9jazIgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdHRoaXMucm9jazIuc3JjID0gJy4uL3B1YmxpYy9yb2NrMi5wbmcnO1xyXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0dGhpcy5nYW1lT2JqZWN0ID0gZ2FtZU9iamVjdDtcclxuXHRcdHRoaXMuY3VycmVudExldmVsID0gMDtcclxuXHRcdHRoaXMucGxhdHNWaXNpYmxlID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW5kZXg6IDAsXHJcblx0XHRcdFx0eDogMCxcclxuXHRcdFx0fSxcclxuXHRcdF07XHJcblx0XHR0aGlzLmJhY2tncm91bmRYID0gMDtcclxuXHRcdHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcclxuXHRcdHRoaXMuY29sbGlzaW9uTWFyZ2luID0gMjU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaW5jcmVhc2VTcGVlZCgpIHtcclxuXHRcdC8vIHRoaXMuc3BlZWQgKz0gMC41O1xyXG5cdFx0Ly8gdGhpcy5wbGF0WEdhcCA9IHRoaXMuc3BlZWQgKiAxMDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjaGVja0ZvckNvbGxpc2lvbigpIHtcclxuXHRcdGlmICh0aGlzLnBsYXllci55ID4gdGhpcy53b3JsZC5oZWlnaHQgLSB0aGlzLnBsYXllci5oKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdHcm91bmQgQ29sbGlzaW9uISEhJyk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXRzVmlzaWJsZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBwbGF0WCA9IHRoaXMucGxhdHNWaXNpYmxlW2ldLng7XHJcblx0XHRcdGNvbnN0IGxldmVsOiBJTGV2ZWwgPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXTtcclxuXHRcdFx0Y29uc3QgcGxhdFJlZjogSVBsYXRmb3JtID0gbGV2ZWwucGxhdGZvcm1zW3RoaXMucGxhdHNWaXNpYmxlW2ldLmluZGV4XTtcclxuXHRcdFx0Y29uc3QgcGxhdFkgPSBwbGF0UmVmLnk7XHJcblx0XHRcdGNvbnN0IGxlbiA9IHBsYXRSZWYubGVuO1xyXG5cclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHRoaXMucGxheWVyLnggKyB0aGlzLnBsYXllci53ID49IHBsYXRYICsgdGhpcy5jb2xsaXNpb25NYXJnaW4gJiYgLy8gQ2hlY2sgcGxheWVyIHJpZ2h0IGNvbGxpc2lvblxyXG5cdFx0XHRcdHRoaXMucGxheWVyLnggPD0gcGxhdFggKyBsZW4gJiYgLy8gQ2hlY2sgcGxheWVyIGxlZnQgY29sbGlzaW9uXHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIueSA8PSBwbGF0WSArIChsZXZlbC5wbGF0Zm9ybUggfHwgdGhpcy53b3JsZC5oZWlnaHQgLSBwbGF0WSkgLy8gQ2hlY2sgcGxheWVyIHRvcCBjb2xsaXNpb25cclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0aWYgKHRoaXMucGxheWVyLnlWZWxvY2l0eSA8IDAgJiYgTWF0aC5hYnMocGxhdFkgLSAodGhpcy5wbGF5ZXIueSArIHRoaXMucGxheWVyLmgpKSA8IDIwKSB7XHJcblx0XHRcdFx0XHQvLyBMYW5kIGlmIG5lZ2F0aXZlIHZlbG9jaXR5IGFuZCB3aXRoaW4gMjBweFxyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubGFuZChwbGF0WSk7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnBsYXllci55ICsgdGhpcy5wbGF5ZXIuaCA+IHBsYXRZICsgdGhpcy5jb2xsaXNpb25NYXJnaW4pIHtcclxuXHRcdFx0XHRcdC8vIENoZWNrIHBsYXllciBib3R0b20gY29sbGlzaW9uXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnUGxhdGZvcm0gQ29sbGlzaW9uISEhJyk7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2hlY2tPYnN0aWNsZUNvbGxpc2lvbihvYnN0aWNsZTogSVBsYXRPYmplY3QsIHhWYWw6IG51bWJlciwgeVZhbDogbnVtYmVyKSB7XHJcblx0XHRpZiAoXHJcblx0XHRcdHRoaXMucGxheWVyLnggKyB0aGlzLnBsYXllci53ID49IHhWYWwgKyB0aGlzLmNvbGxpc2lvbk1hcmdpbiAmJiAvLyBDaGVjayBwbGF5ZXIgcmlnaHQgY29sbGlzaW9uXHJcblx0XHRcdHRoaXMucGxheWVyLnggPD0geFZhbCArIG9ic3RpY2xlLmltZ0luZm8udyAmJiAvLyBDaGVjayBwbGF5ZXIgbGVmdCBjb2xsaXNpb25cclxuXHRcdFx0dGhpcy5wbGF5ZXIueSA8PSB5VmFsICsgKG9ic3RpY2xlLmltZ0luZm8uaCB8fCB0aGlzLndvcmxkLmhlaWdodCAtIHlWYWwpICYmIC8vIENoZWNrIHBsYXllciB0b3AgY29sbGlzaW9uXHJcblx0XHRcdHRoaXMucGxheWVyLnkgKyB0aGlzLnBsYXllci5oID4geVZhbCAvLyBDaGVjayBwbGF5ZXIgYm90dG9tIGNvbGxpc2lvblxyXG5cdFx0KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdDb2xsaXNpb24gd2l0aDogJywgb2JzdGljbGUuaW1nSW5mby5maWxlTmFtZSk7XHJcblx0XHRcdHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBuZXh0UGxhdGZvcm0oKSB7XHJcblx0XHRjb25zdCBsYXN0VmlzaWJsZVBsYXQ6IElWaXNpYmxlUGxhdCA9IHRoaXMucGxhdHNWaXNpYmxlW3RoaXMucGxhdHNWaXNpYmxlLmxlbmd0aCAtIDFdO1xyXG5cdFx0Y29uc3QgcGxhdHNSZWY6IElQbGF0Zm9ybVtdID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0ucGxhdGZvcm1zO1xyXG5cdFx0Y29uc3QgbGFzdFBsYXRSZWY6IElQbGF0Zm9ybSA9IHBsYXRzUmVmW2xhc3RWaXNpYmxlUGxhdC5pbmRleF07XHJcblx0XHRjb25zdCBuZXh0UGxhdDogSVBsYXRmb3JtID1cclxuXHRcdFx0dGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0ucGxhdGZvcm1zW2xhc3RWaXNpYmxlUGxhdC5pbmRleCArIDFdO1xyXG5cclxuXHRcdGlmICghbmV4dFBsYXQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ05vIE1vcmUgUGxhdGZvcm1zJyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnBsYXRzVmlzaWJsZS5wdXNoKHtcclxuXHRcdFx0aW5kZXg6IGxhc3RWaXNpYmxlUGxhdC5pbmRleCArIDEsXHJcblx0XHRcdHg6IGxhc3RWaXNpYmxlUGxhdC54ICsgbGFzdFBsYXRSZWYubGVuICsgbGFzdFBsYXRSZWYuZ2FwVG9OZXh0LFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHRoaXMucGxhdHNWaXNpYmxlWzBdLnggKyBwbGF0c1JlZlt0aGlzLnBsYXRzVmlzaWJsZVswXS5pbmRleF0ubGVuIDwgMCkgdGhpcy5wbGF0c1Zpc2libGUuc2hpZnQoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBtb3ZlKCkge1xyXG5cdFx0Y29uc3QgbGV2ZWw6IElMZXZlbCA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdO1xyXG5cdFx0Y29uc3QgcGxhdFJlZjogSVBsYXRmb3JtID0gbGV2ZWwucGxhdGZvcm1zW3RoaXMucGxhdHNWaXNpYmxlW3RoaXMucGxhdHNWaXNpYmxlLmxlbmd0aCAtIDFdLmluZGV4XTtcclxuXHJcblx0XHRjb25zdCBsYXN0UGxhdFggPSB0aGlzLnBsYXRzVmlzaWJsZVt0aGlzLnBsYXRzVmlzaWJsZS5sZW5ndGggLSAxXS54O1xyXG5cclxuXHRcdGlmIChsYXN0UGxhdFggKyBwbGF0UmVmLmxlbiA8PSB0aGlzLndvcmxkLndpZHRoKSB0aGlzLm5leHRQbGF0Zm9ybSgpO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF0c1Zpc2libGUubGVuZ3RoOyBpKyspIHRoaXMucGxhdHNWaXNpYmxlW2ldLnggLT0gbGV2ZWwuc3BlZWQ7XHJcblx0XHR0aGlzLmJhY2tncm91bmRYIC09IGxldmVsLnNwZWVkIC8gODtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZHJhd0RlY29yRm9yUGxhdChkZWNvcjogSVBsYXRPYmplY3RbXSwgcGxhdFlUb3A6IG51bWJlciwgcGxhdFg6IG51bWJlciwgcGxhdExlbjogbnVtYmVyKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRlY29yPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpbWdTcmM6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzW2RlY29yW2ldLmltZ0luZm8uZmlsZU5hbWUgYXMga2V5b2YgdGhpc10gYXMgSFRNTEltYWdlRWxlbWVudDtcclxuXHRcdFx0Y29uc3QgZGVjb3JYVmFscyA9IGRlY29yW2ldLnhMb2NzT25QbGF0QnlQZXJjO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkZWNvclhWYWxzPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0XHRcdGltZ1NyYyxcclxuXHRcdFx0XHRcdHBsYXRYICsgcGxhdExlbiAqIGRlY29yWFZhbHNbaV0sXHJcblx0XHRcdFx0XHRwbGF0WVRvcCAtIGRlY29yW2ldLmltZ0luZm8uaCArIDEwLFxyXG5cdFx0XHRcdFx0ZGVjb3JbaV0uaW1nSW5mby53LFxyXG5cdFx0XHRcdFx0ZGVjb3JbaV0uaW1nSW5mby5oXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3T2JzdGljbGVPblBsYXQob2JzdGljbGVzOiBJUGxhdE9iamVjdFtdLCBwbGF0WVRvcDogbnVtYmVyLCBwbGF0WDogbnVtYmVyLCBwbGF0TGVuOiBudW1iZXIpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb2JzdGljbGVzPy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpbWdTcmM6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzW29ic3RpY2xlc1tpXS5pbWdJbmZvLmZpbGVOYW1lIGFzIGtleW9mIHRoaXNdIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcblx0XHRcdGNvbnN0IG9ic3RpY2xlWFZhbHMgPSBvYnN0aWNsZXNbaV0ueExvY3NPblBsYXRCeVBlcmM7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG9ic3RpY2xlWFZhbHM/Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRcdFx0aW1nU3JjLFxyXG5cdFx0XHRcdFx0cGxhdFggKyBwbGF0TGVuICogb2JzdGljbGVYVmFsc1tpXSxcclxuXHRcdFx0XHRcdHBsYXRZVG9wIC0gb2JzdGljbGVzW2ldLmltZ0luZm8uaCArIDEwLFxyXG5cdFx0XHRcdFx0b2JzdGljbGVzW2ldLmltZ0luZm8udyxcclxuXHRcdFx0XHRcdG9ic3RpY2xlc1tpXS5pbWdJbmZvLmhcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHR0aGlzLmNoZWNrT2JzdGljbGVDb2xsaXNpb24oXHJcblx0XHRcdFx0XHRvYnN0aWNsZXNbaV0sXHJcblx0XHRcdFx0XHRwbGF0WCArIHBsYXRMZW4gKiBvYnN0aWNsZVhWYWxzW2ldLFxyXG5cdFx0XHRcdFx0cGxhdFlUb3AgLSBvYnN0aWNsZXNbaV0uaW1nSW5mby5oICsgMTBcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhdygpIHtcclxuXHRcdC8vIERyYXcgQkdcclxuXHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0dGhpcy5iZ19tb3VudGFpbnMsXHJcblx0XHRcdDAsXHJcblx0XHRcdDAsXHJcblx0XHRcdHRoaXMuYmdfbW91bnRhaW5zLndpZHRoLFxyXG5cdFx0XHR0aGlzLmJnX21vdW50YWlucy5oZWlnaHQsXHJcblx0XHRcdHRoaXMuYmFja2dyb3VuZFgsXHJcblx0XHRcdHRoaXMud29ybGQuaGVpZ2h0IC0gdGhpcy5iZ19tb3VudGFpbnMuaGVpZ2h0LFxyXG5cdFx0XHR0aGlzLmJnX21vdW50YWlucy53aWR0aCxcclxuXHRcdFx0dGhpcy5iZ19tb3VudGFpbnMuaGVpZ2h0XHJcblx0XHQpO1xyXG5cclxuXHRcdGZvciAoY29uc3QgcGxhdCBvZiB0aGlzLnBsYXRzVmlzaWJsZSkge1xyXG5cdFx0XHRjb25zdCBsZXZlbDogSUxldmVsID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF07XHJcblx0XHRcdGNvbnN0IGltZ1cgPVxyXG5cdFx0XHRcdCg8SFRNTEltYWdlRWxlbWVudD50aGlzW2xldmVsLnBsYXRmb3JtVGV4dHVyZSBhcyBrZXlvZiB0aGlzXSkud2lkdGggKlxyXG5cdFx0XHRcdChsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ubGVuIC8gbGV2ZWwubWF4UGxhdExlbik7XHJcblxyXG5cdFx0XHRjb25zdCBwbGF0Zm9ybTogSVBsYXRmb3JtID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0ucGxhdGZvcm1zW3BsYXQuaW5kZXhdIHx8IFtdO1xyXG5cclxuXHRcdFx0aWYgKHBsYXRmb3JtPy5kZWNvcikge1xyXG5cdFx0XHRcdHRoaXMuZHJhd0RlY29yRm9yUGxhdChcclxuXHRcdFx0XHRcdHBsYXRmb3JtLmRlY29yLFxyXG5cdFx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnksXHJcblx0XHRcdFx0XHRwbGF0LngsXHJcblx0XHRcdFx0XHRsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ubGVuXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocGxhdGZvcm0/Lm9ic3RpY2xlcykge1xyXG5cdFx0XHRcdHRoaXMuZHJhd09ic3RpY2xlT25QbGF0KHBsYXRmb3JtLm9ic3RpY2xlcywgcGxhdGZvcm0ueSwgcGxhdC54LCBwbGF0Zm9ybS5sZW4pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0PEhUTUxJbWFnZUVsZW1lbnQ+dGhpc1tsZXZlbC5wbGF0Zm9ybVRleHR1cmUgYXMga2V5b2YgdGhpc10sXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdGltZ1csXHJcblx0XHRcdFx0KDxIVE1MSW1hZ2VFbGVtZW50PnRoaXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlIGFzIGtleW9mIHRoaXNdKS5oZWlnaHQsXHJcblx0XHRcdFx0cGxhdC54LFxyXG5cdFx0XHRcdGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55LFxyXG5cdFx0XHRcdGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS5sZW4sXHJcblx0XHRcdFx0bGV2ZWwucGxhdGZvcm1IIHx8IHRoaXMud29ybGQuaGVpZ2h0IC0gbGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnlcclxuXHRcdFx0KTtcclxuXHRcdFx0Ly8gdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC4zKSc7XHJcblx0XHRcdC8vIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHQvLyB0aGlzLmN0eC5yZWN0KHRoaXMucGxhdGZvcm1zW2ldLngsIHRoaXMucGxhdGZvcm1zW2ldLnksIHRoaXMucGxhdGZvcm1zW2ldLncsIHRoaXMuaCk7XHJcblx0XHRcdC8vIHRoaXMuY3R4LmZpbGwoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuXHRwcml2YXRlIGN0eDogQ29udGV4dDtcclxuXHRwcml2YXRlIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHRwcml2YXRlIGJpa2VJbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblx0cHJpdmF0ZSBhc3BlY3RSYXRpbzogbnVtYmVyO1xyXG5cdHB1YmxpYyB4OiBudW1iZXI7XHJcblx0cHVibGljIHk6IG51bWJlcjtcclxuXHRwdWJsaWMgdzogbnVtYmVyO1xyXG5cdHB1YmxpYyBoOiBudW1iZXI7XHJcblx0cHVibGljIGlzSW5BaXI6IGJvb2xlYW47XHJcblx0cHVibGljIGp1bXBWZWxTdGFydDogbnVtYmVyO1xyXG5cdHB1YmxpYyB5VmVsb2NpdHk6IG51bWJlcjtcclxuXHRwdWJsaWMgeUFjYzogbnVtYmVyO1xyXG5cdHByaXZhdGUgcm90YXRpb246IG51bWJlcjtcclxuXHRwcml2YXRlIHJvdGF0aW9uU3BlZWQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGlzSnVtcGluZzogYm9vbGVhbjtcclxuXHRwdWJsaWMgbG9hZGluZ0p1bXA6IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKGN0eDogQ29udGV4dCwgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcblx0XHR0aGlzLmN0eCA9IGN0eDtcclxuXHRcdHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHRcdHRoaXMuYmlrZUltZyA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0dGhpcy5iaWtlSW1nLnNyYyA9ICcuLi9wdWJsaWMvbXRiX3Jlc2l6ZWQucG5nJztcclxuXHRcdHRoaXMuYXNwZWN0UmF0aW8gPSAxLjg0O1xyXG5cdFx0dGhpcy54ID0gMTAwO1xyXG5cdFx0dGhpcy55ID0gMTAwO1xyXG5cdFx0dGhpcy53ID0gMTcwO1xyXG5cdFx0dGhpcy5oID0gdGhpcy53IC8gdGhpcy5hc3BlY3RSYXRpbztcclxuXHRcdHRoaXMuaXNJbkFpciA9IGZhbHNlO1xyXG5cdFx0dGhpcy5qdW1wVmVsU3RhcnQgPSAxMDtcclxuXHRcdHRoaXMueVZlbG9jaXR5ID0gMDtcclxuXHRcdHRoaXMueUFjYyA9IDAuODtcclxuXHRcdHRoaXMucm90YXRpb24gPSAwO1xyXG5cdFx0dGhpcy5yb3RhdGlvblNwZWVkID0gMDtcclxuXHRcdHRoaXMuaXNKdW1waW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLmxvYWRpbmdKdW1wID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbGFuZCh5OiBudW1iZXIpIHtcclxuXHRcdGlmICh0aGlzLnJvdGF0aW9uIDwgMCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5pc0luQWlyID0gZmFsc2U7XHJcblx0XHR0aGlzLmlzSnVtcGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5yb3RhdGlvblNwZWVkID0gMDtcclxuXHRcdHRoaXMucm90YXRpb24gPSAwO1xyXG5cdFx0dGhpcy55VmVsb2NpdHkgPSAwO1xyXG5cdFx0dGhpcy55ID0geSAtIHRoaXMuaDtcclxuXHRcdGlmICghdGhpcy5sb2FkaW5nSnVtcCkgdGhpcy5qdW1wVmVsU3RhcnQgPSAxMDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBqdW1wKCkge1xyXG5cdFx0aWYgKHRoaXMuaXNKdW1waW5nIHx8IHRoaXMuaXNJbkFpciB8fCB0aGlzLnlWZWxvY2l0eSA8IDApIHJldHVybjtcclxuXHRcdHRoaXMucm90YXRpb25TcGVlZCA9IHRoaXMuanVtcFZlbFN0YXJ0O1xyXG5cdFx0dGhpcy5pc0p1bXBpbmcgPSB0cnVlO1xyXG5cclxuXHRcdHRoaXMuaXNJbkFpciA9IHRydWU7XHJcblx0XHR0aGlzLnlWZWxvY2l0eSA9IHRoaXMuanVtcFZlbFN0YXJ0O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsb2FkSnVtcCgpIHtcclxuXHRcdGlmICh0aGlzLmp1bXBWZWxTdGFydCA+PSAyMCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5qdW1wVmVsU3RhcnQgKz0gMC42O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGRyYXcoKSB7XHJcblx0XHRpZiAodGhpcy5sb2FkaW5nSnVtcCkgdGhpcy5sb2FkSnVtcCgpO1xyXG5cclxuXHRcdHRoaXMueSAtPSB0aGlzLnlWZWxvY2l0eTtcclxuXHRcdHRoaXMueVZlbG9jaXR5IC09IHRoaXMueUFjYztcclxuXHJcblx0XHRpZiAodGhpcy5pc0p1bXBpbmcpIHtcclxuXHRcdFx0dGhpcy5yb3RhdGlvbiAtPSB0aGlzLnJvdGF0aW9uU3BlZWQgLyA0O1xyXG5cdFx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgLT0gdGhpcy55QWNjICogMjtcclxuXHJcblx0XHRcdGlmICh0aGlzLnJvdGF0aW9uID49IDUpIHtcclxuXHRcdFx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYigwLCAwLCAwKSc7XHJcblx0XHQvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdC8vIHRoaXMuY3R4LnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMudywgdGhpcy5oKTtcclxuXHRcdC8vIHRoaXMuY3R4LmZpbGwoKTtcclxuXHJcblx0XHR0aGlzLmN0eC5zYXZlKCk7XHJcblx0XHR0aGlzLmN0eC50cmFuc2xhdGUodGhpcy54ICsgdGhpcy53ICogMC4yNSwgdGhpcy55ICsgdGhpcy5oICogMC43KTtcclxuXHRcdHRoaXMuY3R4LnJvdGF0ZSgodGhpcy5yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKTtcclxuXHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0dGhpcy5iaWtlSW1nLFxyXG5cdFx0XHQtdGhpcy53ICsgdGhpcy53ICogKDEgLSAwLjI1KSxcclxuXHRcdFx0LXRoaXMuaCArIHRoaXMuaCAqICgxIC0gMC43KSxcclxuXHRcdFx0dGhpcy53LFxyXG5cdFx0XHR0aGlzLmhcclxuXHRcdCk7XHJcblx0XHR0aGlzLmN0eC5yZXN0b3JlKCk7XHJcblx0fVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BsYXRmb3Jtcy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wbGF5ZXIudHNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90eXBlcy50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==