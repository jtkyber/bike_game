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
            y: 610,
            len: 2000,
            gapToNext: 200,
            decor: [{ imgInfo: decor_startSign, xLocsOnPlatByPerc: [0.1] }],
            obsticles: [{ imgInfo: obsticle_rock1, xLocsOnPlatByPerc: [0.4] }],
        },
        { y: 650, len: 600, gapToNext: 0 },
        { y: 600, len: 800, gapToNext: 0 },
        { y: 700, len: 2000, gapToNext: 0, obsticles: [{ imgInfo: obsticle_rock2, xLocsOnPlatByPerc: [0.4] }] },
        { y: 700, len: 700, gapToNext: 0 },
        { y: 650, len: 1000, gapToNext: 0 },
        { y: 650, len: 1000, gapToNext: 0 },
        { y: 625, len: 600, gapToNext: 0 },
        { y: 600, len: 800, gapToNext: 0 },
        { y: 700, len: 2000, gapToNext: 0 },
        { y: 650, len: 700, gapToNext: 0 },
        { y: 610, len: 1000, gapToNext: 0 },
    ],
    platformTexture: 'dirtPlat',
    platformH: null,
    backgroundImg: '',
    maxPlatLen: 4000,
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
                else
                    player.jump();
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
            if (this.player.x + this.player.w >= platX && // Check player right collision
                this.player.x <= platX + len && // Check player left collision
                this.player.y <= platY + (level.platformH || this.world.height - platY) // Check player top collision
            ) {
                if (this.player.yVelocity < 0 && Math.abs(platY - (this.player.y + this.player.h)) < 20) {
                    // Land if negative velocity and within 20px
                    this.player.land(platY);
                    return false;
                }
                else if (this.player.y + this.player.h > platY) {
                    // Check player bottom collision
                    console.log('Platform Collision!!!');
                    return true;
                }
            }
        }
        return false;
    };
    Platforms.prototype.checkObsticleCollision = function (obsticle, xVal, yVal) {
        if (this.player.x + this.player.w >= xVal && // Check player right collision
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
        var platRefLen = this.gameObject.levels[this.currentLevel].platforms[this.platsVisible[this.platsVisible.length - 1].index].len;
        var lastPlatX = this.platsVisible[this.platsVisible.length - 1].x;
        if (lastPlatX + platRefLen <= this.world.width)
            this.nextPlatform();
        for (var i = 0; i < this.platsVisible.length; i++)
            this.platsVisible[i].x -= this.speed;
        this.backgroundX -= this.speed / 8;
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
        this.x = 100;
        this.y = 300;
        this.w = 50;
        this.h = 50;
        this.isInAir = false;
        this.jumpVelStart = 22;
        this.yVelocity = 0;
        this.yAcc = 2;
    }
    Player.prototype.land = function (y) {
        this.isInAir = false;
        this.yVelocity = 0;
        this.y = y - this.h;
    };
    Player.prototype.jump = function () {
        if (this.isInAir || this.yVelocity < 0)
            return;
        this.isInAir = true;
        this.yVelocity = this.jumpVelStart;
    };
    Player.prototype.drop = function () {
        this.isInAir = true;
    };
    Player.prototype.draw = function () {
        this.y -= this.yVelocity;
        this.yVelocity -= this.yAcc;
        this.ctx.fillStyle = 'rgb(0, 0, 0)';
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.w, this.h);
        this.ctx.fill();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vcHVibGljL2dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS8uL3NyYy9wbGF0Zm9ybXMudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL3BsYXllci50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUdhbWVPYmplY3QsIElJbWdJbmZvLCBJTGV2ZWwsIElQbGF0T2JqZWN0IH0gZnJvbSAnLi4vc3JjL3R5cGVzJztcclxuXHJcbmNvbnN0IGRlY29yX3N0YXJ0U2lnbjogSUltZ0luZm8gPSB7XHJcblx0ZmlsZU5hbWU6ICdzdGFydFNpZ24nLFxyXG5cdHc6IDUwLFxyXG5cdGg6IDUwLFxyXG59O1xyXG5cclxuY29uc3Qgb2JzdGljbGVfcm9jazE6IElJbWdJbmZvID0ge1xyXG5cdGZpbGVOYW1lOiAncm9jazEnLFxyXG5cdHc6IDcwLFxyXG5cdGg6IDcwLFxyXG59O1xyXG5cclxuY29uc3Qgb2JzdGljbGVfcm9jazI6IElJbWdJbmZvID0ge1xyXG5cdGZpbGVOYW1lOiAncm9jazInLFxyXG5cdHc6IDcwLFxyXG5cdGg6IDcwLFxyXG59O1xyXG5cclxuY29uc3QgbGV2ZWxPbmU6IElMZXZlbCA9IHtcclxuXHRwbGF0Zm9ybXM6IFtcclxuXHRcdHtcclxuXHRcdFx0eTogNjEwLFxyXG5cdFx0XHRsZW46IDIwMDAsXHJcblx0XHRcdGdhcFRvTmV4dDogMjAwLFxyXG5cdFx0XHRkZWNvcjogW3sgaW1nSW5mbzogZGVjb3Jfc3RhcnRTaWduLCB4TG9jc09uUGxhdEJ5UGVyYzogWzAuMV0gfV0sXHJcblx0XHRcdG9ic3RpY2xlczogW3sgaW1nSW5mbzogb2JzdGljbGVfcm9jazEsIHhMb2NzT25QbGF0QnlQZXJjOiBbMC40XSB9XSxcclxuXHRcdH0sXHJcblx0XHR7IHk6IDY1MCwgbGVuOiA2MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA2MDAsIGxlbjogODAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDIwMDAsIGdhcFRvTmV4dDogMCwgb2JzdGljbGVzOiBbeyBpbWdJbmZvOiBvYnN0aWNsZV9yb2NrMiwgeExvY3NPblBsYXRCeVBlcmM6IFswLjRdIH1dIH0sXHJcblx0XHR7IHk6IDcwMCwgbGVuOiA3MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA2NTAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDY1MCwgbGVuOiAxMDAwLCBnYXBUb05leHQ6IDAgfSxcclxuXHRcdHsgeTogNjI1LCBsZW46IDYwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDYwMCwgbGVuOiA4MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMjAwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XHR7IHk6IDY1MCwgbGVuOiA3MDAsIGdhcFRvTmV4dDogMCB9LFxyXG5cdFx0eyB5OiA2MTAsIGxlbjogMTAwMCwgZ2FwVG9OZXh0OiAwIH0sXHJcblx0XSxcclxuXHRwbGF0Zm9ybVRleHR1cmU6ICdkaXJ0UGxhdCcsXHJcblx0cGxhdGZvcm1IOiBudWxsLFxyXG5cdGJhY2tncm91bmRJbWc6ICcnLFxyXG5cdG1heFBsYXRMZW46IDQwMDAsXHJcbn07XHJcblxyXG5jb25zdCBnYW1lT2JqZWN0OiBJR2FtZU9iamVjdCA9IHtcclxuXHRsZXZlbHM6IFtsZXZlbE9uZV0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lT2JqZWN0O1xyXG4iLCJpbXBvcnQgZ2FtZU9iamVjdCBmcm9tICcuLi9wdWJsaWMvZ2FtZU9iamVjdCc7XHJcbmltcG9ydCBQbGF0Zm9ybXMgZnJvbSAnLi9wbGF0Zm9ybXMnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuXHJcbmNvbnN0IHdvcmxkID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3JsZCcpO1xyXG5jb25zdCBjdHggPSA8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPndvcmxkLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4vLyBGb3IgZ2FtZSBsb29wXHJcbmxldCByZXF1ZXN0SWQ6IG51bWJlciB8IG51bGwsIG5vdzogbnVtYmVyLCB0aGVuOiBudW1iZXIsIGVsYXBzZWQ6IG51bWJlciwgZnBzSW50ZXJ2YWw6IG51bWJlcjtcclxuXHJcbmxldCBmcmFtZVJhdGUgPSA2MDtcclxubGV0IHBhdXNlZCA9IHRydWU7XHJcbmxldCBzcGRJbnRlcnZhbElkOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD47XHJcblxyXG4vLyBDbGFzc2VzXHJcbmxldCBwbGF0Zm9ybXM6IFBsYXRmb3JtcywgcGxheWVyOiBQbGF5ZXI7XHJcblxyXG5jb25zdCBlbmRHYW1lID0gKCkgPT4ge1xyXG5cdGlmIChyZXF1ZXN0SWQpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJZCk7XHJcblx0cmVxdWVzdElkID0gbnVsbDtcclxuXHRjbGVhckludGVydmFsKHNwZEludGVydmFsSWQpO1xyXG59O1xyXG5cclxuY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XHJcblx0cmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcclxuXHJcblx0ZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnJhbWVSYXRlO1xyXG5cdG5vdyA9IERhdGUubm93KCk7XHJcblx0ZWxhcHNlZCA9IG5vdyAtICh0aGVuIHx8IDApO1xyXG5cclxuXHRpZiAoZWxhcHNlZCA+IGZwc0ludGVydmFsKSB7XHJcblx0XHR0aGVuID0gbm93IC0gKGVsYXBzZWQgJSBmcHNJbnRlcnZhbCk7XHJcblxyXG5cdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCB3b3JsZC53aWR0aCwgd29ybGQuaGVpZ2h0KTtcclxuXHRcdGlmICghcGF1c2VkKSBwbGF0Zm9ybXMubW92ZSgpO1xyXG5cdFx0cGxhdGZvcm1zLmRyYXcoKTtcclxuXHRcdHBsYXllci5kcmF3KCk7XHJcblxyXG5cdFx0aWYgKHBsYXRmb3Jtcy5jaGVja0ZvckNvbGxpc2lvbigpIHx8IHBsYXRmb3Jtcy5nYW1lT3ZlcikgZW5kR2FtZSgpO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IHNldFNwZEluY0ludGVydmFsID0gKCkgPT4ge1xyXG5cdHNwZEludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHQvLyBwbGF0Zm9ybXMuaW5jcmVhc2VTcGVlZCgpO1xyXG5cdH0sIDUwMDApO1xyXG59O1xyXG5cclxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG5cdE9iamVjdC5mcmVlemUoZ2FtZU9iamVjdCk7XHJcblx0cGxheWVyID0gbmV3IFBsYXllcihjdHgsIHdvcmxkKTtcclxuXHRwbGF0Zm9ybXMgPSBuZXcgUGxhdGZvcm1zKGN0eCwgd29ybGQsIHBsYXllciwgZ2FtZU9iamVjdCk7XHJcblx0Z2FtZUxvb3AoKTtcclxufTtcclxuXHJcbnN0YXJ0R2FtZSgpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xyXG5cdHN3aXRjaCAoZS5jb2RlKSB7XHJcblx0XHRjYXNlICdTcGFjZSc6XHJcblx0XHRcdGlmIChyZXF1ZXN0SWQpIHtcclxuXHRcdFx0XHRpZiAocGF1c2VkKSB7XHJcblx0XHRcdFx0XHRwYXVzZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHNldFNwZEluY0ludGVydmFsKCk7XHJcblx0XHRcdFx0fSBlbHNlIHBsYXllci5qdW1wKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cGF1c2VkID0gZmFsc2U7XHJcblx0XHRcdFx0c2V0U3BkSW5jSW50ZXJ2YWwoKTtcclxuXHRcdFx0XHRzdGFydEdhbWUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcclxuXHRzd2l0Y2ggKGUuY29kZSkge1xyXG5cdFx0Y2FzZSAnRXNjYXBlJzpcclxuXHRcdFx0aWYgKHBhdXNlZCkge1xyXG5cdFx0XHRcdHBhdXNlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdHNldFNwZEluY0ludGVydmFsKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cGF1c2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKHNwZEludGVydmFsSWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufSk7XHJcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBDb250ZXh0LCBJR2FtZU9iamVjdCwgSUxldmVsLCBJUGxhdE9iamVjdCwgSVBsYXRmb3JtLCBJVmlzaWJsZVBsYXQgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtcyB7XHJcblx0cHJpdmF0ZSBjdHg6IENvbnRleHQ7XHJcblx0cHJpdmF0ZSB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblx0cHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcclxuXHRwdWJsaWMgc3BlZWQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGJnX21vdW50YWluczogSFRNTEltYWdlRWxlbWVudDtcclxuXHRwcml2YXRlIHdvb2RQbGF0OiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cdHByaXZhdGUgZGlydFBsYXQ6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblx0cHJpdmF0ZSBzdGFydFNpZ246IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblx0cHJpdmF0ZSByb2NrMTogSFRNTEltYWdlRWxlbWVudDtcclxuXHRwcml2YXRlIHJvY2syOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cdHByaXZhdGUgZ2FtZU9iamVjdDogSUdhbWVPYmplY3Q7XHJcblx0cHJpdmF0ZSBjdXJyZW50TGV2ZWw6IG51bWJlcjtcclxuXHRwcml2YXRlIHBsYXRzVmlzaWJsZTogSVZpc2libGVQbGF0W107XHJcblx0cHJpdmF0ZSBiYWNrZ3JvdW5kWDogbnVtYmVyO1xyXG5cdHB1YmxpYyBnYW1lT3ZlcjogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQsIHBsYXllcjogUGxheWVyLCBnYW1lT2JqZWN0OiBhbnkpIHtcclxuXHRcdHRoaXMuY3R4ID0gY3R4O1xyXG5cdFx0dGhpcy53b3JsZCA9IHdvcmxkO1xyXG5cdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblx0XHR0aGlzLnNwZWVkID0gMjA7XHJcblx0XHQvLyBCYWNrZ3JvdW5kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHR0aGlzLmJnX21vdW50YWlucyA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0dGhpcy5iZ19tb3VudGFpbnMuc3JjID0gJy4uL3B1YmxpYy9iZ19tb3VudGFpbnMucG5nJztcclxuXHRcdC8vIFBsYXRmb3JtcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdHRoaXMud29vZFBsYXQgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdHRoaXMud29vZFBsYXQuc3JjID0gJy4uL3B1YmxpYy93b29kUGxhdC5wbmcnO1xyXG5cdFx0dGhpcy5kaXJ0UGxhdCA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0dGhpcy5kaXJ0UGxhdC5zcmMgPSAnLi4vcHVibGljL2RpcnRQbGF0LnBuZyc7XHJcblx0XHQvLyBEZWNvciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHR0aGlzLnN0YXJ0U2lnbiA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0dGhpcy5zdGFydFNpZ24uc3JjID0gJy4uL3B1YmxpYy9zdGFydF9zaWduLnBuZyc7XHJcblx0XHQvLyBPYnN0aWNsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHR0aGlzLnJvY2sxID0gbmV3IEltYWdlKCk7XHJcblx0XHR0aGlzLnJvY2sxLnNyYyA9ICcuLi9wdWJsaWMvcm9jazEucG5nJztcclxuXHRcdHRoaXMucm9jazIgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdHRoaXMucm9jazIuc3JjID0gJy4uL3B1YmxpYy9yb2NrMi5wbmcnO1xyXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0dGhpcy5nYW1lT2JqZWN0ID0gZ2FtZU9iamVjdDtcclxuXHRcdHRoaXMuY3VycmVudExldmVsID0gMDtcclxuXHRcdHRoaXMucGxhdHNWaXNpYmxlID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW5kZXg6IDAsXHJcblx0XHRcdFx0eDogMCxcclxuXHRcdFx0fSxcclxuXHRcdF07XHJcblx0XHR0aGlzLmJhY2tncm91bmRYID0gMDtcclxuXHRcdHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbmNyZWFzZVNwZWVkKCkge1xyXG5cdFx0Ly8gdGhpcy5zcGVlZCArPSAwLjU7XHJcblx0XHQvLyB0aGlzLnBsYXRYR2FwID0gdGhpcy5zcGVlZCAqIDEwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoZWNrRm9yQ29sbGlzaW9uKCkge1xyXG5cdFx0aWYgKHRoaXMucGxheWVyLnkgPiB0aGlzLndvcmxkLmhlaWdodCAtIHRoaXMucGxheWVyLmgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0dyb3VuZCBDb2xsaXNpb24hISEnKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxhdHNWaXNpYmxlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHBsYXRYID0gdGhpcy5wbGF0c1Zpc2libGVbaV0ueDtcclxuXHRcdFx0Y29uc3QgbGV2ZWw6IElMZXZlbCA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdO1xyXG5cdFx0XHRjb25zdCBwbGF0UmVmOiBJUGxhdGZvcm0gPSBsZXZlbC5wbGF0Zm9ybXNbdGhpcy5wbGF0c1Zpc2libGVbaV0uaW5kZXhdO1xyXG5cdFx0XHRjb25zdCBwbGF0WSA9IHBsYXRSZWYueTtcclxuXHRcdFx0Y29uc3QgbGVuID0gcGxhdFJlZi5sZW47XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIueCArIHRoaXMucGxheWVyLncgPj0gcGxhdFggJiYgLy8gQ2hlY2sgcGxheWVyIHJpZ2h0IGNvbGxpc2lvblxyXG5cdFx0XHRcdHRoaXMucGxheWVyLnggPD0gcGxhdFggKyBsZW4gJiYgLy8gQ2hlY2sgcGxheWVyIGxlZnQgY29sbGlzaW9uXHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIueSA8PSBwbGF0WSArIChsZXZlbC5wbGF0Zm9ybUggfHwgdGhpcy53b3JsZC5oZWlnaHQgLSBwbGF0WSkgLy8gQ2hlY2sgcGxheWVyIHRvcCBjb2xsaXNpb25cclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0aWYgKHRoaXMucGxheWVyLnlWZWxvY2l0eSA8IDAgJiYgTWF0aC5hYnMocGxhdFkgLSAodGhpcy5wbGF5ZXIueSArIHRoaXMucGxheWVyLmgpKSA8IDIwKSB7XHJcblx0XHRcdFx0XHQvLyBMYW5kIGlmIG5lZ2F0aXZlIHZlbG9jaXR5IGFuZCB3aXRoaW4gMjBweFxyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubGFuZChwbGF0WSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnBsYXllci55ICsgdGhpcy5wbGF5ZXIuaCA+IHBsYXRZKSB7XHJcblx0XHRcdFx0XHQvLyBDaGVjayBwbGF5ZXIgYm90dG9tIGNvbGxpc2lvblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1BsYXRmb3JtIENvbGxpc2lvbiEhIScpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNoZWNrT2JzdGljbGVDb2xsaXNpb24ob2JzdGljbGU6IElQbGF0T2JqZWN0LCB4VmFsOiBudW1iZXIsIHlWYWw6IG51bWJlcikge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHR0aGlzLnBsYXllci54ICsgdGhpcy5wbGF5ZXIudyA+PSB4VmFsICYmIC8vIENoZWNrIHBsYXllciByaWdodCBjb2xsaXNpb25cclxuXHRcdFx0dGhpcy5wbGF5ZXIueCA8PSB4VmFsICsgb2JzdGljbGUuaW1nSW5mby53ICYmIC8vIENoZWNrIHBsYXllciBsZWZ0IGNvbGxpc2lvblxyXG5cdFx0XHR0aGlzLnBsYXllci55IDw9IHlWYWwgKyAob2JzdGljbGUuaW1nSW5mby5oIHx8IHRoaXMud29ybGQuaGVpZ2h0IC0geVZhbCkgJiYgLy8gQ2hlY2sgcGxheWVyIHRvcCBjb2xsaXNpb25cclxuXHRcdFx0dGhpcy5wbGF5ZXIueSArIHRoaXMucGxheWVyLmggPiB5VmFsIC8vIENoZWNrIHBsYXllciBib3R0b20gY29sbGlzaW9uXHJcblx0XHQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0NvbGxpc2lvbiB3aXRoOiAnLCBvYnN0aWNsZS5pbWdJbmZvLmZpbGVOYW1lKTtcclxuXHRcdFx0dGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG5leHRQbGF0Zm9ybSgpIHtcclxuXHRcdGNvbnN0IGxhc3RWaXNpYmxlUGxhdDogSVZpc2libGVQbGF0ID0gdGhpcy5wbGF0c1Zpc2libGVbdGhpcy5wbGF0c1Zpc2libGUubGVuZ3RoIC0gMV07XHJcblx0XHRjb25zdCBwbGF0c1JlZjogSVBsYXRmb3JtW10gPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXS5wbGF0Zm9ybXM7XHJcblx0XHRjb25zdCBsYXN0UGxhdFJlZjogSVBsYXRmb3JtID0gcGxhdHNSZWZbbGFzdFZpc2libGVQbGF0LmluZGV4XTtcclxuXHRcdGNvbnN0IG5leHRQbGF0OiBJUGxhdGZvcm0gPVxyXG5cdFx0XHR0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXS5wbGF0Zm9ybXNbbGFzdFZpc2libGVQbGF0LmluZGV4ICsgMV07XHJcblxyXG5cdFx0aWYgKCFuZXh0UGxhdCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTm8gTW9yZSBQbGF0Zm9ybXMnKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGxhdHNWaXNpYmxlLnB1c2goe1xyXG5cdFx0XHRpbmRleDogbGFzdFZpc2libGVQbGF0LmluZGV4ICsgMSxcclxuXHRcdFx0eDogbGFzdFZpc2libGVQbGF0LnggKyBsYXN0UGxhdFJlZi5sZW4gKyBsYXN0UGxhdFJlZi5nYXBUb05leHQsXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAodGhpcy5wbGF0c1Zpc2libGVbMF0ueCArIHBsYXRzUmVmW3RoaXMucGxhdHNWaXNpYmxlWzBdLmluZGV4XS5sZW4gPCAwKSB0aGlzLnBsYXRzVmlzaWJsZS5zaGlmdCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG1vdmUoKSB7XHJcblx0XHRjb25zdCBwbGF0UmVmTGVuID1cclxuXHRcdFx0dGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0ucGxhdGZvcm1zW1xyXG5cdFx0XHRcdHRoaXMucGxhdHNWaXNpYmxlW3RoaXMucGxhdHNWaXNpYmxlLmxlbmd0aCAtIDFdLmluZGV4XHJcblx0XHRcdF0ubGVuO1xyXG5cclxuXHRcdGNvbnN0IGxhc3RQbGF0WCA9IHRoaXMucGxhdHNWaXNpYmxlW3RoaXMucGxhdHNWaXNpYmxlLmxlbmd0aCAtIDFdLng7XHJcblxyXG5cdFx0aWYgKGxhc3RQbGF0WCArIHBsYXRSZWZMZW4gPD0gdGhpcy53b3JsZC53aWR0aCkgdGhpcy5uZXh0UGxhdGZvcm0oKTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxhdHNWaXNpYmxlLmxlbmd0aDsgaSsrKSB0aGlzLnBsYXRzVmlzaWJsZVtpXS54IC09IHRoaXMuc3BlZWQ7XHJcblx0XHR0aGlzLmJhY2tncm91bmRYIC09IHRoaXMuc3BlZWQgLyA4O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkcmF3RGVjb3JGb3JQbGF0KGRlY29yOiBJUGxhdE9iamVjdFtdLCBwbGF0WVRvcDogbnVtYmVyLCBwbGF0WDogbnVtYmVyLCBwbGF0TGVuOiBudW1iZXIpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGVjb3I/Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGltZ1NyYzogSFRNTEltYWdlRWxlbWVudCA9IHRoaXNbZGVjb3JbaV0uaW1nSW5mby5maWxlTmFtZSBhcyBrZXlvZiB0aGlzXSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cdFx0XHRjb25zdCBkZWNvclhWYWxzID0gZGVjb3JbaV0ueExvY3NPblBsYXRCeVBlcmM7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRlY29yWFZhbHM/Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRcdFx0aW1nU3JjLFxyXG5cdFx0XHRcdFx0cGxhdFggKyBwbGF0TGVuICogZGVjb3JYVmFsc1tpXSxcclxuXHRcdFx0XHRcdHBsYXRZVG9wIC0gZGVjb3JbaV0uaW1nSW5mby5oICsgMTAsXHJcblx0XHRcdFx0XHRkZWNvcltpXS5pbWdJbmZvLncsXHJcblx0XHRcdFx0XHRkZWNvcltpXS5pbWdJbmZvLmhcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdPYnN0aWNsZU9uUGxhdChvYnN0aWNsZXM6IElQbGF0T2JqZWN0W10sIHBsYXRZVG9wOiBudW1iZXIsIHBsYXRYOiBudW1iZXIsIHBsYXRMZW46IG51bWJlcikge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvYnN0aWNsZXM/Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGltZ1NyYzogSFRNTEltYWdlRWxlbWVudCA9IHRoaXNbb2JzdGljbGVzW2ldLmltZ0luZm8uZmlsZU5hbWUgYXMga2V5b2YgdGhpc10gYXMgSFRNTEltYWdlRWxlbWVudDtcclxuXHRcdFx0Y29uc3Qgb2JzdGljbGVYVmFscyA9IG9ic3RpY2xlc1tpXS54TG9jc09uUGxhdEJ5UGVyYztcclxuXHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb2JzdGljbGVYVmFscz8ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0XHRpbWdTcmMsXHJcblx0XHRcdFx0XHRwbGF0WCArIHBsYXRMZW4gKiBvYnN0aWNsZVhWYWxzW2ldLFxyXG5cdFx0XHRcdFx0cGxhdFlUb3AgLSBvYnN0aWNsZXNbaV0uaW1nSW5mby5oICsgMTAsXHJcblx0XHRcdFx0XHRvYnN0aWNsZXNbaV0uaW1nSW5mby53LFxyXG5cdFx0XHRcdFx0b2JzdGljbGVzW2ldLmltZ0luZm8uaFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuY2hlY2tPYnN0aWNsZUNvbGxpc2lvbihcclxuXHRcdFx0XHRcdG9ic3RpY2xlc1tpXSxcclxuXHRcdFx0XHRcdHBsYXRYICsgcGxhdExlbiAqIG9ic3RpY2xlWFZhbHNbaV0sXHJcblx0XHRcdFx0XHRwbGF0WVRvcCAtIG9ic3RpY2xlc1tpXS5pbWdJbmZvLmggKyAxMFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkcmF3KCkge1xyXG5cdFx0Ly8gRHJhdyBCR1xyXG5cdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHR0aGlzLmJnX21vdW50YWlucyxcclxuXHRcdFx0MCxcclxuXHRcdFx0MCxcclxuXHRcdFx0dGhpcy5iZ19tb3VudGFpbnMud2lkdGgsXHJcblx0XHRcdHRoaXMuYmdfbW91bnRhaW5zLmhlaWdodCxcclxuXHRcdFx0dGhpcy5iYWNrZ3JvdW5kWCxcclxuXHRcdFx0dGhpcy53b3JsZC5oZWlnaHQgLSB0aGlzLmJnX21vdW50YWlucy5oZWlnaHQsXHJcblx0XHRcdHRoaXMuYmdfbW91bnRhaW5zLndpZHRoLFxyXG5cdFx0XHR0aGlzLmJnX21vdW50YWlucy5oZWlnaHRcclxuXHRcdCk7XHJcblxyXG5cdFx0Zm9yIChjb25zdCBwbGF0IG9mIHRoaXMucGxhdHNWaXNpYmxlKSB7XHJcblx0XHRcdGNvbnN0IGxldmVsOiBJTGV2ZWwgPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXTtcclxuXHRcdFx0Y29uc3QgaW1nVyA9XHJcblx0XHRcdFx0KDxIVE1MSW1hZ2VFbGVtZW50PnRoaXNbbGV2ZWwucGxhdGZvcm1UZXh0dXJlIGFzIGtleW9mIHRoaXNdKS53aWR0aCAqXHJcblx0XHRcdFx0KGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS5sZW4gLyBsZXZlbC5tYXhQbGF0TGVuKTtcclxuXHJcblx0XHRcdGNvbnN0IHBsYXRmb3JtOiBJUGxhdGZvcm0gPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXS5wbGF0Zm9ybXNbcGxhdC5pbmRleF0gfHwgW107XHJcblxyXG5cdFx0XHRpZiAocGxhdGZvcm0/LmRlY29yKSB7XHJcblx0XHRcdFx0dGhpcy5kcmF3RGVjb3JGb3JQbGF0KFxyXG5cdFx0XHRcdFx0cGxhdGZvcm0uZGVjb3IsXHJcblx0XHRcdFx0XHRsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ueSxcclxuXHRcdFx0XHRcdHBsYXQueCxcclxuXHRcdFx0XHRcdGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS5sZW5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwbGF0Zm9ybT8ub2JzdGljbGVzKSB7XHJcblx0XHRcdFx0dGhpcy5kcmF3T2JzdGljbGVPblBsYXQocGxhdGZvcm0ub2JzdGljbGVzLCBwbGF0Zm9ybS55LCBwbGF0LngsIHBsYXRmb3JtLmxlbik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0XHQ8SFRNTEltYWdlRWxlbWVudD50aGlzW2xldmVsLnBsYXRmb3JtVGV4dHVyZSBhcyBrZXlvZiB0aGlzXSxcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdDAsXHJcblx0XHRcdFx0aW1nVyxcclxuXHRcdFx0XHQoPEhUTUxJbWFnZUVsZW1lbnQ+dGhpc1tsZXZlbC5wbGF0Zm9ybVRleHR1cmUgYXMga2V5b2YgdGhpc10pLmhlaWdodCxcclxuXHRcdFx0XHRwbGF0LngsXHJcblx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnksXHJcblx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLmxlbixcclxuXHRcdFx0XHRsZXZlbC5wbGF0Zm9ybUggfHwgdGhpcy53b3JsZC5oZWlnaHQgLSBsZXZlbC5wbGF0Zm9ybXNbcGxhdC5pbmRleF0ueVxyXG5cdFx0XHQpO1xyXG5cdFx0XHQvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjMpJztcclxuXHRcdFx0Ly8gdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHRcdC8vIHRoaXMuY3R4LnJlY3QodGhpcy5wbGF0Zm9ybXNbaV0ueCwgdGhpcy5wbGF0Zm9ybXNbaV0ueSwgdGhpcy5wbGF0Zm9ybXNbaV0udywgdGhpcy5oKTtcclxuXHRcdFx0Ly8gdGhpcy5jdHguZmlsbCgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG5cdHByaXZhdGUgY3R4OiBDb250ZXh0O1xyXG5cdHByaXZhdGUgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cdHB1YmxpYyB4OiBudW1iZXI7XHJcblx0cHVibGljIHk6IG51bWJlcjtcclxuXHRwdWJsaWMgdzogbnVtYmVyO1xyXG5cdHB1YmxpYyBoOiBudW1iZXI7XHJcblx0cHVibGljIGlzSW5BaXI6IGJvb2xlYW47XHJcblx0cHVibGljIGp1bXBWZWxTdGFydDogbnVtYmVyO1xyXG5cdHB1YmxpYyB5VmVsb2NpdHk6IG51bWJlcjtcclxuXHRwdWJsaWMgeUFjYzogbnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjdHg6IENvbnRleHQsIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG5cdFx0dGhpcy5jdHggPSBjdHg7XHJcblx0XHR0aGlzLndvcmxkID0gd29ybGQ7XHJcblx0XHR0aGlzLnggPSAxMDA7XHJcblx0XHR0aGlzLnkgPSAzMDA7XHJcblx0XHR0aGlzLncgPSA1MDtcclxuXHRcdHRoaXMuaCA9IDUwO1xyXG5cdFx0dGhpcy5pc0luQWlyID0gZmFsc2U7XHJcblx0XHR0aGlzLmp1bXBWZWxTdGFydCA9IDIyO1xyXG5cdFx0dGhpcy55VmVsb2NpdHkgPSAwO1xyXG5cdFx0dGhpcy55QWNjID0gMjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBsYW5kKHk6IG51bWJlcikge1xyXG5cdFx0dGhpcy5pc0luQWlyID0gZmFsc2U7XHJcblx0XHR0aGlzLnlWZWxvY2l0eSA9IDA7XHJcblx0XHR0aGlzLnkgPSB5IC0gdGhpcy5oO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGp1bXAoKSB7XHJcblx0XHRpZiAodGhpcy5pc0luQWlyIHx8IHRoaXMueVZlbG9jaXR5IDwgMCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5pc0luQWlyID0gdHJ1ZTtcclxuXHRcdHRoaXMueVZlbG9jaXR5ID0gdGhpcy5qdW1wVmVsU3RhcnQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJvcCgpIHtcclxuXHRcdHRoaXMuaXNJbkFpciA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhdygpIHtcclxuXHRcdHRoaXMueSAtPSB0aGlzLnlWZWxvY2l0eTtcclxuXHRcdHRoaXMueVZlbG9jaXR5IC09IHRoaXMueUFjYztcclxuXHJcblx0XHR0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiKDAsIDAsIDApJztcclxuXHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0dGhpcy5jdHgucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53LCB0aGlzLmgpO1xyXG5cdFx0dGhpcy5jdHguZmlsbCgpO1xyXG5cdH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wbGF0Zm9ybXMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGxheWVyLnRzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHlwZXMudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=