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
var levelOne = {
    platforms: [
        {
            y: 610,
            len: 2000,
            gapFromLast: 0,
            decor: [{ imgInfo: decor_startSign, xLocsOnPlatByPerc: [0.1] }],
        },
        { y: 650, len: 600, gapFromLast: 50 },
        { y: 600, len: 800, gapFromLast: 0 },
        { y: 700, len: 2000, gapFromLast: 0 },
        { y: 700, len: 700, gapFromLast: 0 },
        { y: 650, len: 1000, gapFromLast: 0 },
        { y: 650, len: 1000, gapFromLast: 0 },
        { y: 625, len: 600, gapFromLast: 0 },
        { y: 600, len: 800, gapFromLast: 0 },
        { y: 700, len: 2000, gapFromLast: 0 },
        { y: 650, len: 700, gapFromLast: 0 },
        { y: 610, len: 1000, gapFromLast: 0 },
    ],
    platformTexture: 'platform',
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
        this.h = 16;
        // Images ------------------------------------------------
        this.platTexture = new Image();
        this.platTexture.src = '../public/platform.png';
        this.startSign = new Image();
        this.startSign.src = '../public/start_sign.png';
        // -------------------------------------------------------
        this.gameObject = gameObject;
        this.currentLevel = 0;
        this.images = {
            platTexture: this.platTexture,
            startSign: this.startSign,
        };
        this.platsVisible = [
            {
                index: 0,
                x: 0,
            },
        ];
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
            var platRef = this.gameObject.levels[this.currentLevel].platforms[this.platsVisible[i].index];
            var platY = platRef.y;
            var len = platRef.len;
            if (this.player.x + this.player.w >= platX && // Check player right collision
                this.player.x <= platX + len && // Check player left collision
                this.player.y <= platY + this.h // Check player top collision
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
            x: lastVisiblePlat.x + lastPlatRef.len + lastPlatRef.gapFromLast,
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
    };
    Platforms.prototype.drawDecorForPlat = function (decor, platYTop, platX, platLen) {
        for (var i = 0; i < (decor === null || decor === void 0 ? void 0 : decor.length); i++) {
            var imgSrc = this.images[decor[i].imgInfo.fileName];
            var decorXVals = decor[i].xLocsOnPlatByPerc;
            // console.log(platX + platLen);
            for (var i_1 = 0; i_1 < (decorXVals === null || decorXVals === void 0 ? void 0 : decorXVals.length); i_1++) {
                this.ctx.drawImage(imgSrc, platX + platLen * decorXVals[i_1], platYTop - decor[i_1].imgInfo.h + 10, decor[i_1].imgInfo.w, decor[i_1].imgInfo.h);
            }
        }
    };
    Platforms.prototype.draw = function () {
        var _a;
        for (var _i = 0, _b = this.platsVisible; _i < _b.length; _i++) {
            var plat = _b[_i];
            var level = this.gameObject.levels[this.currentLevel];
            var imgW = this.platTexture.width * (level.platforms[plat.index].len / level.maxPlatLen);
            var decor = ((_a = this.gameObject.levels[this.currentLevel].platforms[plat.index]) === null || _a === void 0 ? void 0 : _a.decor) || [];
            if (decor) {
                this.drawDecorForPlat(decor, level.platforms[plat.index].y, plat.x, level.platforms[plat.index].len);
            }
            this.ctx.drawImage(this.platTexture, 0, 0, imgW, this.platTexture.height, plat.x, level.platforms[plat.index].y, level.platforms[plat.index].len, this.h);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxlQUFlLEdBQWE7SUFDakMsUUFBUSxFQUFFLFdBQVc7SUFDckIsQ0FBQyxFQUFFLEVBQUU7SUFDTCxDQUFDLEVBQUUsRUFBRTtDQUNMLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBVztJQUN4QixTQUFTLEVBQUU7UUFDVjtZQUNDLENBQUMsRUFBRSxHQUFHO1lBQ04sR0FBRyxFQUFFLElBQUk7WUFDVCxXQUFXLEVBQUUsQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7U0FDL0Q7UUFDRCxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFO1FBQ3JDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUU7UUFDcEMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRTtRQUNyQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFO1FBQ3BDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUU7UUFDckMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRTtRQUNyQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFO1FBQ3BDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUU7UUFDcEMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRTtRQUNyQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFO1FBQ3BDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUU7S0FDckM7SUFDRCxlQUFlLEVBQUUsVUFBVTtJQUMzQixhQUFhLEVBQUUsRUFBRTtJQUNqQixVQUFVLEVBQUUsSUFBSTtDQUNoQixDQUFDO0FBRUYsSUFBTSxVQUFVLEdBQWdCO0lBQy9CLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztDQUNsQixDQUFDO0FBRUYsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNyQ29CO0FBQ1Y7QUFDTjtBQUU5QixJQUFNLEtBQUssR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsRSxJQUFNLEdBQUcsR0FBNkIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3RCxnQkFBZ0I7QUFDaEIsSUFBSSxTQUF3QixFQUFFLEdBQVcsRUFBRSxJQUFZLEVBQUUsT0FBZSxFQUFFLFdBQW1CLENBQUM7QUFFOUYsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ25CLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUNsQixJQUFJLGFBQTZDLENBQUM7QUFFbEQsVUFBVTtBQUNWLElBQUksU0FBb0IsRUFBRSxNQUFjLENBQUM7QUFFekMsSUFBTSxRQUFRLEdBQUc7SUFDaEIsU0FBUyxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTVDLFdBQVcsR0FBRyxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQy9CLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDakIsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU1QixJQUFJLE9BQU8sR0FBRyxXQUFXLEVBQUU7UUFDMUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztRQUVyQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU07WUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLElBQUksU0FBUyxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDbEMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNqQixhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDN0I7S0FDRDtBQUNGLENBQUMsQ0FBQztBQUVGLElBQU0saUJBQWlCLEdBQUc7SUFDekIsYUFBYSxHQUFHLFdBQVcsQ0FBQztRQUMzQixTQUFTLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQUc7SUFDakIsTUFBTSxDQUFDLE1BQU0sQ0FBQywwREFBVSxDQUFDLENBQUM7SUFDMUIsTUFBTSxHQUFHLElBQUksK0NBQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEMsU0FBUyxHQUFHLElBQUksa0RBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSwwREFBVSxDQUFDLENBQUM7SUFDMUQsUUFBUSxFQUFFLENBQUM7QUFDWixDQUFDLENBQUM7QUFFRixTQUFTLEVBQUUsQ0FBQztBQUVaLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsV0FBQztJQUNyQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUU7UUFDZixLQUFLLE9BQU87WUFDWCxJQUFJLFNBQVMsRUFBRTtnQkFDZCxJQUFJLE1BQU0sRUFBRTtvQkFDWCxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNmLGlCQUFpQixFQUFFLENBQUM7aUJBQ3BCOztvQkFBTSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7aUJBQU07Z0JBQ04sTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDZixpQkFBaUIsRUFBRSxDQUFDO2dCQUNwQixTQUFTLEVBQUUsQ0FBQzthQUNaO1lBQ0QsTUFBTTtLQUNQO0FBQ0YsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFdBQUM7SUFDbkMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFO1FBQ2YsS0FBSyxRQUFRO1lBQ1osSUFBSSxNQUFNLEVBQUU7Z0JBQ1gsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDZixpQkFBaUIsRUFBRSxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNOLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2QsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsTUFBTTtLQUNQO0FBQ0YsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hGSDtJQWFDLG1CQUFZLEdBQVksRUFBRSxLQUF3QixFQUFFLE1BQWMsRUFBRSxVQUFlO1FBQ2xGLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWiwwREFBMEQ7UUFDMUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLHdCQUF3QixDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRywwQkFBMEIsQ0FBQztRQUNoRCwwREFBMEQ7UUFDMUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNiLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDekIsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDbkI7Z0JBQ0MsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsQ0FBQyxFQUFFLENBQUM7YUFDSjtTQUNELENBQUM7SUFDSCxDQUFDO0lBRU0saUNBQWEsR0FBcEI7UUFDQyxxQkFBcUI7UUFDckIsbUNBQW1DO0lBQ3BDLENBQUM7SUFFTSxxQ0FBaUIsR0FBeEI7UUFDQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNuQyxPQUFPLElBQUksQ0FBQztTQUNaO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFFeEIsSUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksK0JBQStCO2dCQUN6RSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsR0FBRyxJQUFJLDhCQUE4QjtnQkFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsNkJBQTZCO2NBQzVEO2dCQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDeEYsNENBQTRDO29CQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEIsT0FBTyxLQUFLLENBQUM7aUJBQ2I7cUJBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUU7b0JBQ2pELGdDQUFnQztvQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO29CQUNyQyxPQUFPLElBQUksQ0FBQztpQkFDWjthQUNEO1NBQ0Q7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFTyxnQ0FBWSxHQUFwQjtRQUNDLElBQU0sZUFBZSxHQUFpQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQU0sUUFBUSxHQUFnQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xGLElBQU0sV0FBVyxHQUFjLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0QsSUFBTSxRQUFRLEdBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWhGLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDakMsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDdEIsS0FBSyxFQUFFLGVBQWUsQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUNoQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxXQUFXO1NBQ2hFLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RHLENBQUM7SUFFTSx3QkFBSSxHQUFYO1FBQ0MsSUFBTSxVQUFVLEdBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQ3JELENBQUMsR0FBRyxDQUFDO1FBRVAsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEUsSUFBSSxTQUFTLEdBQUcsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6RixDQUFDO0lBRU8sb0NBQWdCLEdBQXhCLFVBQXlCLEtBQW9CLEVBQUUsUUFBZ0IsRUFBRSxLQUFhLEVBQUUsT0FBZTtRQUM5RixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUcsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLE1BQU0sR0FBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEQsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1lBQzlDLGdDQUFnQztZQUVoQyxLQUFLLElBQUksR0FBQyxHQUFHLENBQUMsRUFBRSxHQUFDLElBQUcsVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLE1BQU0sR0FBRSxHQUFDLEVBQUUsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQ2pCLE1BQU0sRUFDTixLQUFLLEdBQUcsT0FBTyxHQUFHLFVBQVUsQ0FBQyxHQUFDLENBQUMsRUFDL0IsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFDbEMsS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQ2xCLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUNsQixDQUFDO2FBQ0Y7U0FDRDtJQUNGLENBQUM7SUFFTSx3QkFBSSxHQUFYOztRQUNDLEtBQW1CLFVBQWlCLEVBQWpCLFNBQUksQ0FBQyxZQUFZLEVBQWpCLGNBQWlCLEVBQWpCLElBQWlCLEVBQUU7WUFBakMsSUFBTSxJQUFJO1lBQ2QsSUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2hFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUUzRixJQUFNLEtBQUssR0FDVixXQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsMENBQUUsS0FBSyxLQUFJLEVBQUUsQ0FBQztZQUU5RSxJQUFJLEtBQUssRUFBRTtnQkFDVixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3JHO1lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLENBQUMsRUFDRCxDQUFDLEVBQ0QsSUFBSSxFQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUN2QixJQUFJLENBQUMsQ0FBQyxFQUNOLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDN0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUMvQixJQUFJLENBQUMsQ0FBQyxDQUNOLENBQUM7WUFDRiw2Q0FBNkM7WUFDN0Msd0JBQXdCO1lBQ3hCLHdGQUF3RjtZQUN4RixtQkFBbUI7U0FDbkI7SUFDRixDQUFDO0lBQ0YsZ0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0pEO0lBWUMsZ0JBQVksR0FBWSxFQUFFLEtBQXdCO1FBQ2pELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDYixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNiLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFTSxxQkFBSSxHQUFYLFVBQVksQ0FBUztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFTSxxQkFBSSxHQUFYO1FBQ0MsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQztZQUFFLE9BQU87UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3BDLENBQUM7SUFFTSxxQkFBSSxHQUFYO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLHFCQUFJLEdBQVg7UUFDQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTVCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRixhQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9wdWJsaWMvZ2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lLy4vc3JjL3BsYXRmb3Jtcy50cyIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvLi9zcmMvcGxheWVyLnRzIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaWtlX2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Jpa2VfZ2FtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmlrZV9nYW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJR2FtZU9iamVjdCwgSUltZ0luZm8sIElMZXZlbCwgSVBsYXRPYmplY3QgfSBmcm9tICcuLi9zcmMvdHlwZXMnO1xyXG5cclxuY29uc3QgZGVjb3Jfc3RhcnRTaWduOiBJSW1nSW5mbyA9IHtcclxuXHRmaWxlTmFtZTogJ3N0YXJ0U2lnbicsXHJcblx0dzogNTAsXHJcblx0aDogNTAsXHJcbn07XHJcblxyXG5jb25zdCBsZXZlbE9uZTogSUxldmVsID0ge1xyXG5cdHBsYXRmb3JtczogW1xyXG5cdFx0e1xyXG5cdFx0XHR5OiA2MTAsXHJcblx0XHRcdGxlbjogMjAwMCxcclxuXHRcdFx0Z2FwRnJvbUxhc3Q6IDAsXHJcblx0XHRcdGRlY29yOiBbeyBpbWdJbmZvOiBkZWNvcl9zdGFydFNpZ24sIHhMb2NzT25QbGF0QnlQZXJjOiBbMC4xXSB9XSxcclxuXHRcdH0sXHJcblx0XHR7IHk6IDY1MCwgbGVuOiA2MDAsIGdhcEZyb21MYXN0OiA1MCB9LFxyXG5cdFx0eyB5OiA2MDAsIGxlbjogODAwLCBnYXBGcm9tTGFzdDogMCB9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMjAwMCwgZ2FwRnJvbUxhc3Q6IDAgfSxcclxuXHRcdHsgeTogNzAwLCBsZW46IDcwMCwgZ2FwRnJvbUxhc3Q6IDAgfSxcclxuXHRcdHsgeTogNjUwLCBsZW46IDEwMDAsIGdhcEZyb21MYXN0OiAwIH0sXHJcblx0XHR7IHk6IDY1MCwgbGVuOiAxMDAwLCBnYXBGcm9tTGFzdDogMCB9LFxyXG5cdFx0eyB5OiA2MjUsIGxlbjogNjAwLCBnYXBGcm9tTGFzdDogMCB9LFxyXG5cdFx0eyB5OiA2MDAsIGxlbjogODAwLCBnYXBGcm9tTGFzdDogMCB9LFxyXG5cdFx0eyB5OiA3MDAsIGxlbjogMjAwMCwgZ2FwRnJvbUxhc3Q6IDAgfSxcclxuXHRcdHsgeTogNjUwLCBsZW46IDcwMCwgZ2FwRnJvbUxhc3Q6IDAgfSxcclxuXHRcdHsgeTogNjEwLCBsZW46IDEwMDAsIGdhcEZyb21MYXN0OiAwIH0sXHJcblx0XSxcclxuXHRwbGF0Zm9ybVRleHR1cmU6ICdwbGF0Zm9ybScsXHJcblx0YmFja2dyb3VuZEltZzogJycsXHJcblx0bWF4UGxhdExlbjogNDAwMCxcclxufTtcclxuXHJcbmNvbnN0IGdhbWVPYmplY3Q6IElHYW1lT2JqZWN0ID0ge1xyXG5cdGxldmVsczogW2xldmVsT25lXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVPYmplY3Q7XHJcbiIsImltcG9ydCBnYW1lT2JqZWN0IGZyb20gJy4uL3B1YmxpYy9nYW1lT2JqZWN0JztcclxuaW1wb3J0IFBsYXRmb3JtcyBmcm9tICcuL3BsYXRmb3Jtcyc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5cclxuY29uc3Qgd29ybGQgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmxkJyk7XHJcbmNvbnN0IGN0eCA9IDxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ+d29ybGQuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbi8vIEZvciBnYW1lIGxvb3BcclxubGV0IHJlcXVlc3RJZDogbnVtYmVyIHwgbnVsbCwgbm93OiBudW1iZXIsIHRoZW46IG51bWJlciwgZWxhcHNlZDogbnVtYmVyLCBmcHNJbnRlcnZhbDogbnVtYmVyO1xyXG5cclxubGV0IGZyYW1lUmF0ZSA9IDYwO1xyXG5sZXQgcGF1c2VkID0gdHJ1ZTtcclxubGV0IHNwZEludGVydmFsSWQ6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPjtcclxuXHJcbi8vIENsYXNzZXNcclxubGV0IHBsYXRmb3JtczogUGxhdGZvcm1zLCBwbGF5ZXI6IFBsYXllcjtcclxuXHJcbmNvbnN0IGdhbWVMb29wID0gKCkgPT4ge1xyXG5cdHJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcblxyXG5cdGZwc0ludGVydmFsID0gMTAwMCAvIGZyYW1lUmF0ZTtcclxuXHRub3cgPSBEYXRlLm5vdygpO1xyXG5cdGVsYXBzZWQgPSBub3cgLSAodGhlbiB8fCAwKTtcclxuXHJcblx0aWYgKGVsYXBzZWQgPiBmcHNJbnRlcnZhbCkge1xyXG5cdFx0dGhlbiA9IG5vdyAtIChlbGFwc2VkICUgZnBzSW50ZXJ2YWwpO1xyXG5cclxuXHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgd29ybGQud2lkdGgsIHdvcmxkLmhlaWdodCk7XHJcblx0XHRpZiAoIXBhdXNlZCkgcGxhdGZvcm1zLm1vdmUoKTtcclxuXHRcdHBsYXRmb3Jtcy5kcmF3KCk7XHJcblx0XHRwbGF5ZXIuZHJhdygpO1xyXG5cdFx0aWYgKHBsYXRmb3Jtcy5jaGVja0ZvckNvbGxpc2lvbigpKSB7XHJcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJZCk7XHJcblx0XHRcdHJlcXVlc3RJZCA9IG51bGw7XHJcblx0XHRcdGNsZWFySW50ZXJ2YWwoc3BkSW50ZXJ2YWxJZCk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3Qgc2V0U3BkSW5jSW50ZXJ2YWwgPSAoKSA9PiB7XHJcblx0c3BkSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdHBsYXRmb3Jtcy5pbmNyZWFzZVNwZWVkKCk7XHJcblx0fSwgNTAwMCk7XHJcbn07XHJcblxyXG5jb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XHJcblx0T2JqZWN0LmZyZWV6ZShnYW1lT2JqZWN0KTtcclxuXHRwbGF5ZXIgPSBuZXcgUGxheWVyKGN0eCwgd29ybGQpO1xyXG5cdHBsYXRmb3JtcyA9IG5ldyBQbGF0Zm9ybXMoY3R4LCB3b3JsZCwgcGxheWVyLCBnYW1lT2JqZWN0KTtcclxuXHRnYW1lTG9vcCgpO1xyXG59O1xyXG5cclxuc3RhcnRHYW1lKCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XHJcblx0c3dpdGNoIChlLmNvZGUpIHtcclxuXHRcdGNhc2UgJ1NwYWNlJzpcclxuXHRcdFx0aWYgKHJlcXVlc3RJZCkge1xyXG5cdFx0XHRcdGlmIChwYXVzZWQpIHtcclxuXHRcdFx0XHRcdHBhdXNlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0c2V0U3BkSW5jSW50ZXJ2YWwoKTtcclxuXHRcdFx0XHR9IGVsc2UgcGxheWVyLmp1bXAoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwYXVzZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRzZXRTcGRJbmNJbnRlcnZhbCgpO1xyXG5cdFx0XHRcdHN0YXJ0R2FtZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xyXG5cdHN3aXRjaCAoZS5jb2RlKSB7XHJcblx0XHRjYXNlICdFc2NhcGUnOlxyXG5cdFx0XHRpZiAocGF1c2VkKSB7XHJcblx0XHRcdFx0cGF1c2VkID0gZmFsc2U7XHJcblx0XHRcdFx0c2V0U3BkSW5jSW50ZXJ2YWwoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwYXVzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoc3BkSW50ZXJ2YWxJZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59KTtcclxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IENvbnRleHQsIElHYW1lT2JqZWN0LCBJTGV2ZWwsIElQbGF0LCBJUGxhdE9iamVjdCwgSVBsYXRmb3JtLCBJVmlzaWJsZVBsYXQgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtcyB7XHJcblx0cHJpdmF0ZSBjdHg6IENvbnRleHQ7XHJcblx0cHJpdmF0ZSB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblx0cHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcclxuXHRwcml2YXRlIHNwZWVkOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBoOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBwbGF0VGV4dHVyZTogSFRNTEltYWdlRWxlbWVudDtcclxuXHRwcml2YXRlIHN0YXJ0U2lnbjogSFRNTEltYWdlRWxlbWVudDtcclxuXHRwcml2YXRlIGdhbWVPYmplY3Q6IElHYW1lT2JqZWN0O1xyXG5cdHByaXZhdGUgY3VycmVudExldmVsOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBpbWFnZXM6IGFueTtcclxuXHRwcml2YXRlIHBsYXRzVmlzaWJsZTogSVZpc2libGVQbGF0W107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGN0eDogQ29udGV4dCwgd29ybGQ6IEhUTUxDYW52YXNFbGVtZW50LCBwbGF5ZXI6IFBsYXllciwgZ2FtZU9iamVjdDogYW55KSB7XHJcblx0XHR0aGlzLmN0eCA9IGN0eDtcclxuXHRcdHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cdFx0dGhpcy5zcGVlZCA9IDIwO1xyXG5cdFx0dGhpcy5oID0gMTY7XHJcblx0XHQvLyBJbWFnZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHR0aGlzLnBsYXRUZXh0dXJlID0gbmV3IEltYWdlKCk7XHJcblx0XHR0aGlzLnBsYXRUZXh0dXJlLnNyYyA9ICcuLi9wdWJsaWMvcGxhdGZvcm0ucG5nJztcclxuXHRcdHRoaXMuc3RhcnRTaWduID0gbmV3IEltYWdlKCk7XHJcblx0XHR0aGlzLnN0YXJ0U2lnbi5zcmMgPSAnLi4vcHVibGljL3N0YXJ0X3NpZ24ucG5nJztcclxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdHRoaXMuZ2FtZU9iamVjdCA9IGdhbWVPYmplY3Q7XHJcblx0XHR0aGlzLmN1cnJlbnRMZXZlbCA9IDA7XHJcblx0XHR0aGlzLmltYWdlcyA9IHtcclxuXHRcdFx0cGxhdFRleHR1cmU6IHRoaXMucGxhdFRleHR1cmUsXHJcblx0XHRcdHN0YXJ0U2lnbjogdGhpcy5zdGFydFNpZ24sXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5wbGF0c1Zpc2libGUgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbmRleDogMCxcclxuXHRcdFx0XHR4OiAwLFxyXG5cdFx0XHR9LFxyXG5cdFx0XTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbmNyZWFzZVNwZWVkKCkge1xyXG5cdFx0Ly8gdGhpcy5zcGVlZCArPSAwLjU7XHJcblx0XHQvLyB0aGlzLnBsYXRYR2FwID0gdGhpcy5zcGVlZCAqIDEwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoZWNrRm9yQ29sbGlzaW9uKCkge1xyXG5cdFx0aWYgKHRoaXMucGxheWVyLnkgPiB0aGlzLndvcmxkLmhlaWdodCAtIHRoaXMucGxheWVyLmgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0dyb3VuZCBDb2xsaXNpb24hISEnKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxhdHNWaXNpYmxlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHBsYXRYID0gdGhpcy5wbGF0c1Zpc2libGVbaV0ueDtcclxuXHRcdFx0Y29uc3QgcGxhdFJlZiA9IHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdLnBsYXRmb3Jtc1t0aGlzLnBsYXRzVmlzaWJsZVtpXS5pbmRleF07XHJcblx0XHRcdGNvbnN0IHBsYXRZID0gcGxhdFJlZi55O1xyXG5cdFx0XHRjb25zdCBsZW4gPSBwbGF0UmVmLmxlbjtcclxuXHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHR0aGlzLnBsYXllci54ICsgdGhpcy5wbGF5ZXIudyA+PSBwbGF0WCAmJiAvLyBDaGVjayBwbGF5ZXIgcmlnaHQgY29sbGlzaW9uXHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIueCA8PSBwbGF0WCArIGxlbiAmJiAvLyBDaGVjayBwbGF5ZXIgbGVmdCBjb2xsaXNpb25cclxuXHRcdFx0XHR0aGlzLnBsYXllci55IDw9IHBsYXRZICsgdGhpcy5oIC8vIENoZWNrIHBsYXllciB0b3AgY29sbGlzaW9uXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnBsYXllci55VmVsb2NpdHkgPCAwICYmIE1hdGguYWJzKHBsYXRZIC0gKHRoaXMucGxheWVyLnkgKyB0aGlzLnBsYXllci5oKSkgPCAyMCkge1xyXG5cdFx0XHRcdFx0Ly8gTGFuZCBpZiBuZWdhdGl2ZSB2ZWxvY2l0eSBhbmQgd2l0aGluIDIwcHhcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLmxhbmQocGxhdFkpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5wbGF5ZXIueSArIHRoaXMucGxheWVyLmggPiBwbGF0WSkge1xyXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgcGxheWVyIGJvdHRvbSBjb2xsaXNpb25cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdQbGF0Zm9ybSBDb2xsaXNpb24hISEnKTtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBuZXh0UGxhdGZvcm0oKSB7XHJcblx0XHRjb25zdCBsYXN0VmlzaWJsZVBsYXQ6IElWaXNpYmxlUGxhdCA9IHRoaXMucGxhdHNWaXNpYmxlW3RoaXMucGxhdHNWaXNpYmxlLmxlbmd0aCAtIDFdO1xyXG5cdFx0Y29uc3QgcGxhdHNSZWY6IElQbGF0Zm9ybVtdID0gdGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0ucGxhdGZvcm1zO1xyXG5cdFx0Y29uc3QgbGFzdFBsYXRSZWY6IElQbGF0Zm9ybSA9IHBsYXRzUmVmW2xhc3RWaXNpYmxlUGxhdC5pbmRleF07XHJcblx0XHRjb25zdCBuZXh0UGxhdDogSVBsYXRmb3JtID1cclxuXHRcdFx0dGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0ucGxhdGZvcm1zW2xhc3RWaXNpYmxlUGxhdC5pbmRleCArIDFdO1xyXG5cclxuXHRcdGlmICghbmV4dFBsYXQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ05vIE1vcmUgUGxhdGZvcm1zJyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnBsYXRzVmlzaWJsZS5wdXNoKHtcclxuXHRcdFx0aW5kZXg6IGxhc3RWaXNpYmxlUGxhdC5pbmRleCArIDEsXHJcblx0XHRcdHg6IGxhc3RWaXNpYmxlUGxhdC54ICsgbGFzdFBsYXRSZWYubGVuICsgbGFzdFBsYXRSZWYuZ2FwRnJvbUxhc3QsXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAodGhpcy5wbGF0c1Zpc2libGVbMF0ueCArIHBsYXRzUmVmW3RoaXMucGxhdHNWaXNpYmxlWzBdLmluZGV4XS5sZW4gPCAwKSB0aGlzLnBsYXRzVmlzaWJsZS5zaGlmdCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG1vdmUoKSB7XHJcblx0XHRjb25zdCBwbGF0UmVmTGVuID1cclxuXHRcdFx0dGhpcy5nYW1lT2JqZWN0LmxldmVsc1t0aGlzLmN1cnJlbnRMZXZlbF0ucGxhdGZvcm1zW1xyXG5cdFx0XHRcdHRoaXMucGxhdHNWaXNpYmxlW3RoaXMucGxhdHNWaXNpYmxlLmxlbmd0aCAtIDFdLmluZGV4XHJcblx0XHRcdF0ubGVuO1xyXG5cclxuXHRcdGNvbnN0IGxhc3RQbGF0WCA9IHRoaXMucGxhdHNWaXNpYmxlW3RoaXMucGxhdHNWaXNpYmxlLmxlbmd0aCAtIDFdLng7XHJcblxyXG5cdFx0aWYgKGxhc3RQbGF0WCArIHBsYXRSZWZMZW4gPD0gdGhpcy53b3JsZC53aWR0aCkgdGhpcy5uZXh0UGxhdGZvcm0oKTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxhdHNWaXNpYmxlLmxlbmd0aDsgaSsrKSB0aGlzLnBsYXRzVmlzaWJsZVtpXS54IC09IHRoaXMuc3BlZWQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRyYXdEZWNvckZvclBsYXQoZGVjb3I6IElQbGF0T2JqZWN0W10sIHBsYXRZVG9wOiBudW1iZXIsIHBsYXRYOiBudW1iZXIsIHBsYXRMZW46IG51bWJlcikge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkZWNvcj8ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgaW1nU3JjID0gdGhpcy5pbWFnZXNbZGVjb3JbaV0uaW1nSW5mby5maWxlTmFtZV07XHJcblx0XHRcdGNvbnN0IGRlY29yWFZhbHMgPSBkZWNvcltpXS54TG9jc09uUGxhdEJ5UGVyYztcclxuXHRcdFx0Ly8gY29uc29sZS5sb2cocGxhdFggKyBwbGF0TGVuKTtcclxuXHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGVjb3JYVmFscz8ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0XHRpbWdTcmMsXHJcblx0XHRcdFx0XHRwbGF0WCArIHBsYXRMZW4gKiBkZWNvclhWYWxzW2ldLFxyXG5cdFx0XHRcdFx0cGxhdFlUb3AgLSBkZWNvcltpXS5pbWdJbmZvLmggKyAxMCxcclxuXHRcdFx0XHRcdGRlY29yW2ldLmltZ0luZm8udyxcclxuXHRcdFx0XHRcdGRlY29yW2ldLmltZ0luZm8uaFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkcmF3KCkge1xyXG5cdFx0Zm9yIChjb25zdCBwbGF0IG9mIHRoaXMucGxhdHNWaXNpYmxlKSB7XHJcblx0XHRcdGNvbnN0IGxldmVsOiBJTGV2ZWwgPSB0aGlzLmdhbWVPYmplY3QubGV2ZWxzW3RoaXMuY3VycmVudExldmVsXTtcclxuXHRcdFx0Y29uc3QgaW1nVyA9IHRoaXMucGxhdFRleHR1cmUud2lkdGggKiAobGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLmxlbiAvIGxldmVsLm1heFBsYXRMZW4pO1xyXG5cclxuXHRcdFx0Y29uc3QgZGVjb3I6IElQbGF0T2JqZWN0W10gPVxyXG5cdFx0XHRcdHRoaXMuZ2FtZU9iamVjdC5sZXZlbHNbdGhpcy5jdXJyZW50TGV2ZWxdLnBsYXRmb3Jtc1twbGF0LmluZGV4XT8uZGVjb3IgfHwgW107XHJcblxyXG5cdFx0XHRpZiAoZGVjb3IpIHtcclxuXHRcdFx0XHR0aGlzLmRyYXdEZWNvckZvclBsYXQoZGVjb3IsIGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS55LCBwbGF0LngsIGxldmVsLnBsYXRmb3Jtc1twbGF0LmluZGV4XS5sZW4pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0dGhpcy5wbGF0VGV4dHVyZSxcclxuXHRcdFx0XHQwLFxyXG5cdFx0XHRcdDAsXHJcblx0XHRcdFx0aW1nVyxcclxuXHRcdFx0XHR0aGlzLnBsYXRUZXh0dXJlLmhlaWdodCxcclxuXHRcdFx0XHRwbGF0LngsXHJcblx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLnksXHJcblx0XHRcdFx0bGV2ZWwucGxhdGZvcm1zW3BsYXQuaW5kZXhdLmxlbixcclxuXHRcdFx0XHR0aGlzLmhcclxuXHRcdFx0KTtcclxuXHRcdFx0Ly8gdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC4zKSc7XHJcblx0XHRcdC8vIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHQvLyB0aGlzLmN0eC5yZWN0KHRoaXMucGxhdGZvcm1zW2ldLngsIHRoaXMucGxhdGZvcm1zW2ldLnksIHRoaXMucGxhdGZvcm1zW2ldLncsIHRoaXMuaCk7XHJcblx0XHRcdC8vIHRoaXMuY3R4LmZpbGwoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuXHRwcml2YXRlIGN0eDogQ29udGV4dDtcclxuXHRwcml2YXRlIHdvcmxkOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHRwdWJsaWMgeDogbnVtYmVyO1xyXG5cdHB1YmxpYyB5OiBudW1iZXI7XHJcblx0cHVibGljIHc6IG51bWJlcjtcclxuXHRwdWJsaWMgaDogbnVtYmVyO1xyXG5cdHB1YmxpYyBpc0luQWlyOiBib29sZWFuO1xyXG5cdHB1YmxpYyBqdW1wVmVsU3RhcnQ6IG51bWJlcjtcclxuXHRwdWJsaWMgeVZlbG9jaXR5OiBudW1iZXI7XHJcblx0cHVibGljIHlBY2M6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCB3b3JsZDogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuXHRcdHRoaXMuY3R4ID0gY3R4O1xyXG5cdFx0dGhpcy53b3JsZCA9IHdvcmxkO1xyXG5cdFx0dGhpcy54ID0gMTAwO1xyXG5cdFx0dGhpcy55ID0gMzAwO1xyXG5cdFx0dGhpcy53ID0gNTA7XHJcblx0XHR0aGlzLmggPSA1MDtcclxuXHRcdHRoaXMuaXNJbkFpciA9IGZhbHNlO1xyXG5cdFx0dGhpcy5qdW1wVmVsU3RhcnQgPSAyMjtcclxuXHRcdHRoaXMueVZlbG9jaXR5ID0gMDtcclxuXHRcdHRoaXMueUFjYyA9IDI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbGFuZCh5OiBudW1iZXIpIHtcclxuXHRcdHRoaXMuaXNJbkFpciA9IGZhbHNlO1xyXG5cdFx0dGhpcy55VmVsb2NpdHkgPSAwO1xyXG5cdFx0dGhpcy55ID0geSAtIHRoaXMuaDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBqdW1wKCkge1xyXG5cdFx0aWYgKHRoaXMuaXNJbkFpciB8fCB0aGlzLnlWZWxvY2l0eSA8IDApIHJldHVybjtcclxuXHRcdHRoaXMuaXNJbkFpciA9IHRydWU7XHJcblx0XHR0aGlzLnlWZWxvY2l0eSA9IHRoaXMuanVtcFZlbFN0YXJ0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGRyb3AoKSB7XHJcblx0XHR0aGlzLmlzSW5BaXIgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGRyYXcoKSB7XHJcblx0XHR0aGlzLnkgLT0gdGhpcy55VmVsb2NpdHk7XHJcblx0XHR0aGlzLnlWZWxvY2l0eSAtPSB0aGlzLnlBY2M7XHJcblxyXG5cdFx0dGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsdWUnO1xyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHR0aGlzLmN0eC5yZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLncsIHRoaXMuaCk7XHJcblx0XHR0aGlzLmN0eC5maWxsKCk7XHJcblx0fVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BsYXRmb3Jtcy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wbGF5ZXIudHNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90eXBlcy50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==