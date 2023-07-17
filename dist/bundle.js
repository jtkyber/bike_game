/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_gameObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/gameObject.js */ "./public/gameObject.js");
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
        if (platforms.checkForCollision()) {
            cancelAnimationFrame(requestId);
            requestId = null;
            clearInterval(spdIntervalId);
        }
    }
};
var setSpdIncInterval = function () {
    spdIntervalId = setInterval(function () {
        platforms.increaseSpeed();
    }, 5000);
};
var startGame = function () {
    Object.freeze(_public_gameObject_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    player = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, world);
    platforms = new _platforms__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, world, player, frameRate, _public_gameObject_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
    function Platforms(ctx, world, player, frameRate, gameObject) {
        this.ctx = ctx;
        this.world = world;
        this.player = player;
        this.frameRate = frameRate;
        this.platforms = [
            { x: 0, y: gameObject.levels[0].platforms[0].y, l: gameObject.levels[0].platforms[0].len },
        ];
        this.platXGap = 10;
        this.platYGap = 100;
        this.speed = 20;
        this.minW = 800;
        this.maxW = 4000;
        this.h = 16;
        this.platTexture = new Image();
        this.platTexture.src = '../public/platform.png';
        this.gameObject = gameObject;
        this.currentLevel = 0;
        this.currentPlatform = 0;
    }
    Platforms.prototype.increaseSpeed = function () {
        this.speed += 0.5;
        this.platXGap = this.speed * 10;
        // console.log(this.platXGap);
    };
    Platforms.prototype.checkForCollision = function () {
        if (this.player.y > this.world.height - this.player.h) {
            console.log('Ground Collision!!!');
            return true;
        }
        for (var i = 0; i < this.platforms.length; i++) {
            if (this.player.x + this.player.w >= this.platforms[i].x && // Check player right collision
                this.player.x <= this.platforms[i].x + this.platforms[i].l && // Check player left collision
                this.player.y <= this.platforms[i].y + this.h // Check player top collision
            ) {
                if (this.player.yVelocity < 0 &&
                    Math.abs(this.platforms[i].y - (this.player.y + this.player.h)) < 20) {
                    // Land if negative velocity and within 20px
                    this.player.land(this.platforms[i].y);
                    return false;
                }
                else if (this.player.y + this.player.h > this.platforms[i].y) {
                    // Check player bottom collision
                    console.log('Platform Collision!!!');
                    return true;
                }
            }
        }
        return false;
    };
    // private getNextYValue() {
    // 	// Next Platform must be at least this value from the previous one
    // 	const offset = 30;
    // 	const lastPlat = this.platforms[this.platforms.length - 1];
    // 	// Max Posible Y Value
    // 	const max =
    // 		lastPlat.y + this.platYGap < this.world.height
    // 			? lastPlat.y - this.h + this.platYGap
    // 			: this.world.height - this.h;
    // 	// Min Posible Y Value
    // 	const min =
    // 		lastPlat.y - this.platYGap > this.world.height / 2
    // 			? lastPlat.y + this.h - this.platYGap
    // 			: this.world.height / 2;
    // 	// Randomly choose whether next Y is up (2) or down (1)
    // 	const randOneTwo = Math.ceil(Math.random() * 2);
    // 	let randPlatY;
    // 	if (randOneTwo === 1) {
    // 		randPlatY = Math.floor(Math.random() * (max - (lastPlat.y + offset)) + (lastPlat.y + offset));
    // 	} else {
    // 		const maxTemp = lastPlat.y - offset;
    // 		randPlatY = Math.floor(Math.random() * (maxTemp - min) + min);
    // 	}
    // 	// Set new plat Y value if out of bounds
    // 	if (randPlatY > this.world.height - this.h) {
    // 		return this.world.height - this.h - offset;
    // 	} else if (randPlatY < this.world.height / 2) {
    // 		return this.world.height / 2 + offset;
    // 	} else return randPlatY;
    // }
    Platforms.prototype.nextPlatform = function () {
        this.currentPlatform++;
        var nextPlat = this.gameObject.levels[this.currentLevel].platforms[this.currentPlatform];
        if (!nextPlat)
            console.log('Level Finished');
        this.platforms.push({
            x: this.platforms[this.platforms.length - 1].x +
                this.platforms[this.platforms.length - 1].l +
                Math.random() * (this.platXGap - 10) +
                10,
            y: nextPlat.y,
            // w: Math.random() * (this.maxW - this.minW) + this.minW,
            l: nextPlat.len,
        });
        if (this.platforms[0].x + this.platforms[0].l < 0)
            this.platforms.shift();
    };
    Platforms.prototype.move = function () {
        if (this.platforms[this.platforms.length - 1].x + this.platforms[this.platforms.length - 1].l <=
            this.world.width) {
            this.nextPlatform();
        }
        for (var i = 0; i < this.platforms.length; i++) {
            this.platforms[i].x -= this.speed;
        }
    };
    Platforms.prototype.draw = function () {
        for (var i = 0; i < this.platforms.length; i++) {
            var imgW = this.platTexture.width * (this.platforms[i].l / this.maxW);
            this.ctx.drawImage(this.platTexture, 0, 0, imgW, this.platTexture.height, this.platforms[i].x, this.platforms[i].y, this.platforms[i].l, this.h);
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
        this.ctx.fillStyle = 'blue';
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



/***/ }),

/***/ "./public/gameObject.js":
/*!******************************!*\
  !*** ./public/gameObject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	levels: [
		{
			platforms: [
				{ y: 680, len: 2000 },
				{ y: 650, len: 600 },
				{ y: 600, len: 800 },
				{ y: 700, len: 2000 },
				{ y: 700, len: 700 },
				{ y: 650, len: 1000 },
				{ y: 650, len: 1000 },
				{ y: 625, len: 600 },
				{ y: 600, len: 800 },
				{ y: 700, len: 2000 },
				{ y: 650, len: 700 },
				{ y: 610, len: 1000 },
			],
			platformTexture: 'platform',
			backgroundImg: '',
		},
	],
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL3BsYXRmb3Jtcy50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvcGxheWVyLnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS8uL3B1YmxpYy9nYW1lT2JqZWN0LmpzIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2FtZU9iamVjdCBmcm9tICcuLi9wdWJsaWMvZ2FtZU9iamVjdC5qcyc7XHJcbmltcG9ydCBQbGF0Zm9ybXMgZnJvbSAnLi9wbGF0Zm9ybXMnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuXHJcbmNvbnN0IHdvcmxkID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3JsZCcpO1xyXG5jb25zdCBjdHggPSA8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPndvcmxkLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4vLyBGb3IgZ2FtZSBsb29wXHJcbmxldCByZXF1ZXN0SWQ6IG51bWJlciB8IG51bGwsIG5vdzogbnVtYmVyLCB0aGVuOiBudW1iZXIsIGVsYXBzZWQ6IG51bWJlciwgZnBzSW50ZXJ2YWw6IG51bWJlcjtcclxuXHJcbmxldCBmcmFtZVJhdGUgPSA2MDtcclxubGV0IHBhdXNlZCA9IHRydWU7XHJcbmxldCBzcGRJbnRlcnZhbElkOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD47XHJcblxyXG4vLyBDbGFzc2VzXHJcbmxldCBwbGF0Zm9ybXM6IFBsYXRmb3JtcywgcGxheWVyOiBQbGF5ZXI7XHJcblxyXG5jb25zdCBnYW1lTG9vcCA9ICgpID0+IHtcclxuXHRyZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xyXG5cclxuXHRmcHNJbnRlcnZhbCA9IDEwMDAgLyBmcmFtZVJhdGU7XHJcblx0bm93ID0gRGF0ZS5ub3coKTtcclxuXHRlbGFwc2VkID0gbm93IC0gKHRoZW4gfHwgMCk7XHJcblxyXG5cdGlmIChlbGFwc2VkID4gZnBzSW50ZXJ2YWwpIHtcclxuXHRcdHRoZW4gPSBub3cgLSAoZWxhcHNlZCAlIGZwc0ludGVydmFsKTtcclxuXHJcblx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIHdvcmxkLndpZHRoLCB3b3JsZC5oZWlnaHQpO1xyXG5cdFx0aWYgKCFwYXVzZWQpIHBsYXRmb3Jtcy5tb3ZlKCk7XHJcblx0XHRwbGF0Zm9ybXMuZHJhdygpO1xyXG5cdFx0cGxheWVyLmRyYXcoKTtcclxuXHRcdGlmIChwbGF0Zm9ybXMuY2hlY2tGb3JDb2xsaXNpb24oKSkge1xyXG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SWQpO1xyXG5cdFx0XHRyZXF1ZXN0SWQgPSBudWxsO1xyXG5cdFx0XHRjbGVhckludGVydmFsKHNwZEludGVydmFsSWQpO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IHNldFNwZEluY0ludGVydmFsID0gKCkgPT4ge1xyXG5cdHNwZEludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRwbGF0Zm9ybXMuaW5jcmVhc2VTcGVlZCgpO1xyXG5cdH0sIDUwMDApO1xyXG59O1xyXG5cclxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG5cdE9iamVjdC5mcmVlemUoZ2FtZU9iamVjdCk7XHJcblx0cGxheWVyID0gbmV3IFBsYXllcihjdHgsIHdvcmxkKTtcclxuXHRwbGF0Zm9ybXMgPSBuZXcgUGxhdGZvcm1zKGN0eCwgd29ybGQsIHBsYXllciwgZnJhbWVSYXRlLCBnYW1lT2JqZWN0KTtcclxuXHRnYW1lTG9vcCgpO1xyXG59O1xyXG5cclxuc3RhcnRHYW1lKCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XHJcblx0c3dpdGNoIChlLmNvZGUpIHtcclxuXHRcdGNhc2UgJ1NwYWNlJzpcclxuXHRcdFx0aWYgKHJlcXVlc3RJZCkge1xyXG5cdFx0XHRcdGlmIChwYXVzZWQpIHtcclxuXHRcdFx0XHRcdHBhdXNlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0c2V0U3BkSW5jSW50ZXJ2YWwoKTtcclxuXHRcdFx0XHR9IGVsc2UgcGxheWVyLmp1bXAoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwYXVzZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRzZXRTcGRJbmNJbnRlcnZhbCgpO1xyXG5cdFx0XHRcdHN0YXJ0R2FtZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xyXG5cdHN3aXRjaCAoZS5jb2RlKSB7XHJcblx0XHRjYXNlICdFc2NhcGUnOlxyXG5cdFx0XHRpZiAocGF1c2VkKSB7XHJcblx0XHRcdFx0cGF1c2VkID0gZmFsc2U7XHJcblx0XHRcdFx0c2V0U3BkSW5jSW50ZXJ2YWwoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwYXVzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoc3BkSW50ZXJ2YWxJZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59KTtcclxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IENvbnRleHQsIElHYW1lT2JqZWN0LCBJUGxhdCB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1zIHtcclxuXHRwcml2YXRlIGN0eDogQ29udGV4dDtcclxuXHRwcml2YXRlIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHRwcml2YXRlIHBsYXllcjogUGxheWVyO1xyXG5cdHByaXZhdGUgZnJhbWVSYXRlOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBwbGF0Zm9ybXM6IElQbGF0W107XHJcblx0cHJpdmF0ZSBwbGF0WEdhcDogbnVtYmVyO1xyXG5cdHByaXZhdGUgcGxhdFlHYXA6IG51bWJlcjtcclxuXHRwcml2YXRlIHNwZWVkOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBtaW5XOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBtYXhXOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBoOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBwbGF0VGV4dHVyZTogYW55O1xyXG5cdHByaXZhdGUgZ2FtZU9iamVjdDogSUdhbWVPYmplY3Q7XHJcblx0cHJpdmF0ZSBjdXJyZW50TGV2ZWw6IG51bWJlcjtcclxuXHRwcml2YXRlIGN1cnJlbnRQbGF0Zm9ybTogbnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjdHg6IENvbnRleHQsIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudCwgcGxheWVyOiBQbGF5ZXIsIGZyYW1lUmF0ZTogbnVtYmVyLCBnYW1lT2JqZWN0OiBhbnkpIHtcclxuXHRcdHRoaXMuY3R4ID0gY3R4O1xyXG5cdFx0dGhpcy53b3JsZCA9IHdvcmxkO1xyXG5cdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblx0XHR0aGlzLmZyYW1lUmF0ZSA9IGZyYW1lUmF0ZTtcclxuXHRcdHRoaXMucGxhdGZvcm1zID0gW1xyXG5cdFx0XHR7IHg6IDAsIHk6IGdhbWVPYmplY3QubGV2ZWxzWzBdLnBsYXRmb3Jtc1swXS55LCBsOiBnYW1lT2JqZWN0LmxldmVsc1swXS5wbGF0Zm9ybXNbMF0ubGVuIH0sXHJcblx0XHRdO1xyXG5cdFx0dGhpcy5wbGF0WEdhcCA9IDEwO1xyXG5cdFx0dGhpcy5wbGF0WUdhcCA9IDEwMDtcclxuXHRcdHRoaXMuc3BlZWQgPSAyMDtcclxuXHRcdHRoaXMubWluVyA9IDgwMDtcclxuXHRcdHRoaXMubWF4VyA9IDQwMDA7XHJcblx0XHR0aGlzLmggPSAxNjtcclxuXHRcdHRoaXMucGxhdFRleHR1cmUgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdHRoaXMucGxhdFRleHR1cmUuc3JjID0gJy4uL3B1YmxpYy9wbGF0Zm9ybS5wbmcnO1xyXG5cdFx0dGhpcy5nYW1lT2JqZWN0ID0gZ2FtZU9iamVjdDtcclxuXHRcdHRoaXMuY3VycmVudExldmVsID0gMDtcclxuXHRcdHRoaXMuY3VycmVudFBsYXRmb3JtID0gMDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbmNyZWFzZVNwZWVkKCkge1xyXG5cdFx0dGhpcy5zcGVlZCArPSAwLjU7XHJcblx0XHR0aGlzLnBsYXRYR2FwID0gdGhpcy5zcGVlZCAqIDEwO1xyXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5wbGF0WEdhcCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hlY2tGb3JDb2xsaXNpb24oKSB7XHJcblx0XHRpZiAodGhpcy5wbGF5ZXIueSA+IHRoaXMud29ybGQuaGVpZ2h0IC0gdGhpcy5wbGF5ZXIuaCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnR3JvdW5kIENvbGxpc2lvbiEhIScpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHRoaXMucGxheWVyLnggKyB0aGlzLnBsYXllci53ID49IHRoaXMucGxhdGZvcm1zW2ldLnggJiYgLy8gQ2hlY2sgcGxheWVyIHJpZ2h0IGNvbGxpc2lvblxyXG5cdFx0XHRcdHRoaXMucGxheWVyLnggPD0gdGhpcy5wbGF0Zm9ybXNbaV0ueCArIHRoaXMucGxhdGZvcm1zW2ldLmwgJiYgLy8gQ2hlY2sgcGxheWVyIGxlZnQgY29sbGlzaW9uXHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIueSA8PSB0aGlzLnBsYXRmb3Jtc1tpXS55ICsgdGhpcy5oIC8vIENoZWNrIHBsYXllciB0b3AgY29sbGlzaW9uXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLnlWZWxvY2l0eSA8IDAgJiZcclxuXHRcdFx0XHRcdE1hdGguYWJzKHRoaXMucGxhdGZvcm1zW2ldLnkgLSAodGhpcy5wbGF5ZXIueSArIHRoaXMucGxheWVyLmgpKSA8IDIwXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHQvLyBMYW5kIGlmIG5lZ2F0aXZlIHZlbG9jaXR5IGFuZCB3aXRoaW4gMjBweFxyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubGFuZCh0aGlzLnBsYXRmb3Jtc1tpXS55KTtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucGxheWVyLnkgKyB0aGlzLnBsYXllci5oID4gdGhpcy5wbGF0Zm9ybXNbaV0ueSkge1xyXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgcGxheWVyIGJvdHRvbSBjb2xsaXNpb25cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdQbGF0Zm9ybSBDb2xsaXNpb24hISEnKTtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Ly8gcHJpdmF0ZSBnZXROZXh0WVZhbHVlKCkge1xyXG5cdC8vIFx0Ly8gTmV4dCBQbGF0Zm9ybSBtdXN0IGJlIGF0IGxlYXN0IHRoaXMgdmFsdWUgZnJvbSB0aGUgcHJldmlvdXMgb25lXHJcblx0Ly8gXHRjb25zdCBvZmZzZXQgPSAzMDtcclxuXHQvLyBcdGNvbnN0IGxhc3RQbGF0ID0gdGhpcy5wbGF0Zm9ybXNbdGhpcy5wbGF0Zm9ybXMubGVuZ3RoIC0gMV07XHJcblxyXG5cdC8vIFx0Ly8gTWF4IFBvc2libGUgWSBWYWx1ZVxyXG5cdC8vIFx0Y29uc3QgbWF4ID1cclxuXHQvLyBcdFx0bGFzdFBsYXQueSArIHRoaXMucGxhdFlHYXAgPCB0aGlzLndvcmxkLmhlaWdodFxyXG5cdC8vIFx0XHRcdD8gbGFzdFBsYXQueSAtIHRoaXMuaCArIHRoaXMucGxhdFlHYXBcclxuXHQvLyBcdFx0XHQ6IHRoaXMud29ybGQuaGVpZ2h0IC0gdGhpcy5oO1xyXG5cclxuXHQvLyBcdC8vIE1pbiBQb3NpYmxlIFkgVmFsdWVcclxuXHQvLyBcdGNvbnN0IG1pbiA9XHJcblx0Ly8gXHRcdGxhc3RQbGF0LnkgLSB0aGlzLnBsYXRZR2FwID4gdGhpcy53b3JsZC5oZWlnaHQgLyAyXHJcblx0Ly8gXHRcdFx0PyBsYXN0UGxhdC55ICsgdGhpcy5oIC0gdGhpcy5wbGF0WUdhcFxyXG5cdC8vIFx0XHRcdDogdGhpcy53b3JsZC5oZWlnaHQgLyAyO1xyXG5cclxuXHQvLyBcdC8vIFJhbmRvbWx5IGNob29zZSB3aGV0aGVyIG5leHQgWSBpcyB1cCAoMikgb3IgZG93biAoMSlcclxuXHQvLyBcdGNvbnN0IHJhbmRPbmVUd28gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG5cdC8vIFx0bGV0IHJhbmRQbGF0WTtcclxuXHJcblx0Ly8gXHRpZiAocmFuZE9uZVR3byA9PT0gMSkge1xyXG5cdC8vIFx0XHRyYW5kUGxhdFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gKGxhc3RQbGF0LnkgKyBvZmZzZXQpKSArIChsYXN0UGxhdC55ICsgb2Zmc2V0KSk7XHJcblx0Ly8gXHR9IGVsc2Uge1xyXG5cdC8vIFx0XHRjb25zdCBtYXhUZW1wID0gbGFzdFBsYXQueSAtIG9mZnNldDtcclxuXHQvLyBcdFx0cmFuZFBsYXRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heFRlbXAgLSBtaW4pICsgbWluKTtcclxuXHQvLyBcdH1cclxuXHJcblx0Ly8gXHQvLyBTZXQgbmV3IHBsYXQgWSB2YWx1ZSBpZiBvdXQgb2YgYm91bmRzXHJcblx0Ly8gXHRpZiAocmFuZFBsYXRZID4gdGhpcy53b3JsZC5oZWlnaHQgLSB0aGlzLmgpIHtcclxuXHQvLyBcdFx0cmV0dXJuIHRoaXMud29ybGQuaGVpZ2h0IC0gdGhpcy5oIC0gb2Zmc2V0O1xyXG5cdC8vIFx0fSBlbHNlIGlmIChyYW5kUGxhdFkgPCB0aGlzLndvcmxkLmhlaWdodCAvIDIpIHtcclxuXHQvLyBcdFx0cmV0dXJuIHRoaXMud29ybGQuaGVpZ2h0IC8gMiArIG9mZnNldDtcclxuXHQvLyBcdH0gZWxzZSByZXR1cm4gcmFuZFBsYXRZO1xyXG5cdC8vIH1cclxuXHJcblx0cHJpdmF0ZSBuZXh0UGxhdGZvcm0oKSB7XHJcblx0XHR0aGlzLmN1cnJlbnRQbGF0Zm9ybSsrO1xyXG5cdFx0Y29uc3QgbmV4dFBsYXQgPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXS5wbGF0Zm9ybXNbdGhpcy5jdXJyZW50UGxhdGZvcm1dO1xyXG5cdFx0aWYgKCFuZXh0UGxhdCkgY29uc29sZS5sb2coJ0xldmVsIEZpbmlzaGVkJyk7XHJcblxyXG5cdFx0dGhpcy5wbGF0Zm9ybXMucHVzaCh7XHJcblx0XHRcdHg6XHJcblx0XHRcdFx0dGhpcy5wbGF0Zm9ybXNbdGhpcy5wbGF0Zm9ybXMubGVuZ3RoIC0gMV0ueCArXHJcblx0XHRcdFx0dGhpcy5wbGF0Zm9ybXNbdGhpcy5wbGF0Zm9ybXMubGVuZ3RoIC0gMV0ubCArXHJcblx0XHRcdFx0TWF0aC5yYW5kb20oKSAqICh0aGlzLnBsYXRYR2FwIC0gMTApICtcclxuXHRcdFx0XHQxMCxcclxuXHRcdFx0eTogbmV4dFBsYXQueSxcclxuXHRcdFx0Ly8gdzogTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFcgLSB0aGlzLm1pblcpICsgdGhpcy5taW5XLFxyXG5cdFx0XHRsOiBuZXh0UGxhdC5sZW4sXHJcblx0XHR9KTtcclxuXHRcdGlmICh0aGlzLnBsYXRmb3Jtc1swXS54ICsgdGhpcy5wbGF0Zm9ybXNbMF0ubCA8IDApIHRoaXMucGxhdGZvcm1zLnNoaWZ0KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbW92ZSgpIHtcclxuXHRcdGlmIChcclxuXHRcdFx0dGhpcy5wbGF0Zm9ybXNbdGhpcy5wbGF0Zm9ybXMubGVuZ3RoIC0gMV0ueCArIHRoaXMucGxhdGZvcm1zW3RoaXMucGxhdGZvcm1zLmxlbmd0aCAtIDFdLmwgPD1cclxuXHRcdFx0dGhpcy53b3JsZC53aWR0aFxyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMubmV4dFBsYXRmb3JtKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR0aGlzLnBsYXRmb3Jtc1tpXS54IC09IHRoaXMuc3BlZWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZHJhdygpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgaW1nVyA9IHRoaXMucGxhdFRleHR1cmUud2lkdGggKiAodGhpcy5wbGF0Zm9ybXNbaV0ubCAvIHRoaXMubWF4Vyk7XHJcblxyXG5cdFx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0dGhpcy5wbGF0VGV4dHVyZSxcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdDAsXHJcblx0XHRcdFx0aW1nVyxcclxuXHRcdFx0XHR0aGlzLnBsYXRUZXh0dXJlLmhlaWdodCxcclxuXHRcdFx0XHR0aGlzLnBsYXRmb3Jtc1tpXS54LFxyXG5cdFx0XHRcdHRoaXMucGxhdGZvcm1zW2ldLnksXHJcblx0XHRcdFx0dGhpcy5wbGF0Zm9ybXNbaV0ubCxcclxuXHRcdFx0XHR0aGlzLmhcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMyknO1xyXG5cdFx0XHQvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0Ly8gdGhpcy5jdHgucmVjdCh0aGlzLnBsYXRmb3Jtc1tpXS54LCB0aGlzLnBsYXRmb3Jtc1tpXS55LCB0aGlzLnBsYXRmb3Jtc1tpXS53LCB0aGlzLmgpO1xyXG5cdFx0XHQvLyB0aGlzLmN0eC5maWxsKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcblx0cHJpdmF0ZSBjdHg6IENvbnRleHQ7XHJcblx0cHJpdmF0ZSB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblx0cHVibGljIHg6IG51bWJlcjtcclxuXHRwdWJsaWMgeTogbnVtYmVyO1xyXG5cdHB1YmxpYyB3OiBudW1iZXI7XHJcblx0cHVibGljIGg6IG51bWJlcjtcclxuXHRwdWJsaWMgaXNJbkFpcjogYm9vbGVhbjtcclxuXHRwdWJsaWMganVtcFZlbFN0YXJ0OiBudW1iZXI7XHJcblx0cHVibGljIHlWZWxvY2l0eTogbnVtYmVyO1xyXG5cdHB1YmxpYyB5QWNjOiBudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGN0eDogQ29udGV4dCwgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcblx0XHR0aGlzLmN0eCA9IGN0eDtcclxuXHRcdHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHRcdHRoaXMueCA9IDEwMDtcclxuXHRcdHRoaXMueSA9IDMwMDtcclxuXHRcdHRoaXMudyA9IDUwO1xyXG5cdFx0dGhpcy5oID0gNTA7XHJcblx0XHR0aGlzLmlzSW5BaXIgPSBmYWxzZTtcclxuXHRcdHRoaXMuanVtcFZlbFN0YXJ0ID0gMjI7XHJcblx0XHR0aGlzLnlWZWxvY2l0eSA9IDA7XHJcblx0XHR0aGlzLnlBY2MgPSAyO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxhbmQoeTogbnVtYmVyKSB7XHJcblx0XHR0aGlzLmlzSW5BaXIgPSBmYWxzZTtcclxuXHRcdHRoaXMueVZlbG9jaXR5ID0gMDtcclxuXHRcdHRoaXMueSA9IHkgLSB0aGlzLmg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMganVtcCgpIHtcclxuXHRcdGlmICh0aGlzLmlzSW5BaXIgfHwgdGhpcy55VmVsb2NpdHkgPCAwKSByZXR1cm47XHJcblx0XHR0aGlzLmlzSW5BaXIgPSB0cnVlO1xyXG5cdFx0dGhpcy55VmVsb2NpdHkgPSB0aGlzLmp1bXBWZWxTdGFydDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkcm9wKCkge1xyXG5cdFx0dGhpcy5pc0luQWlyID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkcmF3KCkge1xyXG5cdFx0dGhpcy55IC09IHRoaXMueVZlbG9jaXR5O1xyXG5cdFx0dGhpcy55VmVsb2NpdHkgLT0gdGhpcy55QWNjO1xyXG5cclxuXHRcdHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibHVlJztcclxuXHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0dGhpcy5jdHgucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53LCB0aGlzLmgpO1xyXG5cdFx0dGhpcy5jdHguZmlsbCgpO1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblx0bGV2ZWxzOiBbXHJcblx0XHR7XHJcblx0XHRcdHBsYXRmb3JtczogW1xyXG5cdFx0XHRcdHsgeTogNjgwLCBsZW46IDIwMDAgfSxcclxuXHRcdFx0XHR7IHk6IDY1MCwgbGVuOiA2MDAgfSxcclxuXHRcdFx0XHR7IHk6IDYwMCwgbGVuOiA4MDAgfSxcclxuXHRcdFx0XHR7IHk6IDcwMCwgbGVuOiAyMDAwIH0sXHJcblx0XHRcdFx0eyB5OiA3MDAsIGxlbjogNzAwIH0sXHJcblx0XHRcdFx0eyB5OiA2NTAsIGxlbjogMTAwMCB9LFxyXG5cdFx0XHRcdHsgeTogNjUwLCBsZW46IDEwMDAgfSxcclxuXHRcdFx0XHR7IHk6IDYyNSwgbGVuOiA2MDAgfSxcclxuXHRcdFx0XHR7IHk6IDYwMCwgbGVuOiA4MDAgfSxcclxuXHRcdFx0XHR7IHk6IDcwMCwgbGVuOiAyMDAwIH0sXHJcblx0XHRcdFx0eyB5OiA2NTAsIGxlbjogNzAwIH0sXHJcblx0XHRcdFx0eyB5OiA2MTAsIGxlbjogMTAwMCB9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRwbGF0Zm9ybVRleHR1cmU6ICdwbGF0Zm9ybScsXHJcblx0XHRcdGJhY2tncm91bmRJbWc6ICcnLFxyXG5cdFx0fSxcclxuXHRdLFxyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wbGF0Zm9ybXMudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGxheWVyLnRzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHlwZXMudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=