(()=>{"use strict";var t={961:(t,e,i)=>{i.d(e,{Z:()=>s});const s=function(){function t(t,e,i,s,n){this.ctx=t,this.world=e,this.hud=i,this.collisions=s,this.player=n,this.imagePaths=["../public/healthBoost.png","../public/invincibility.png"],this.images={},this.collectedPowerUps=[],this.currentPowerUp={name:"",durationInSecs:0}}return t.prototype.setUp=function(){return t=this,e=void 0,s=function(){var t,e,i=this;return function(t,e){var i,s,n,r,h={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(a){return function(o){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;r&&(r=0,a[0]&&(h=0)),h;)try{if(i=1,s&&(n=2&a[0]?s.return:a[0]?s.throw||((n=s.return)&&n.call(s),0):s.next)&&!(n=n.call(s,a[1])).done)return n;switch(s=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return h.label++,{value:a[1],done:!1};case 5:h.label++,s=a[1],a=[0];continue;case 7:a=h.ops.pop(),h.trys.pop();continue;default:if(!((n=(n=h.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){h=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){h.label=a[1];break}if(6===a[0]&&h.label<n[1]){h.label=n[1],n=a;break}if(n&&h.label<n[2]){h.label=n[2],h.ops.push(a);break}n[2]&&h.ops.pop(),h.trys.pop();continue}a=e.call(t,h)}catch(t){a=[6,t],s=0}finally{i=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}}(this,(function(s){switch(s.label){case 0:return t=function(){var t=i.imagePaths.map((function(t){return new Promise((function(e,i){var s,n=null===(s=t.split("/").pop())||void 0===s?void 0:s.split(".")[0],r=new Image;r.src=t,r.onload=function(){e([n,r])},r.onerror=function(){return i("Image failed to load: ".concat(t))}}))}));return Promise.all(t)},[4,t()];case 1:return e=s.sent(),this.images=Object.fromEntries(e),[2]}}))},new((i=void 0)||(i=Promise))((function(n,r){function h(t){try{o(s.next(t))}catch(t){r(t)}}function a(t){try{o(s.throw(t))}catch(t){r(t)}}function o(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(h,a)}o((s=s.apply(t,e||[])).next())}));var t,e,i,s},t.prototype.finishPowerUp=function(){"invincibility"===this.currentPowerUp.name&&(this.collisions.ignoreObjectCollision=!1,this.player.shieldActivated=!1),this.currentPowerUp={name:"",durationInSecs:0},this.hud.currentPowerUp=this.currentPowerUp,this.hud.powerUpPercentUsed=0,this.hud.usingPowerUp=!1},t.prototype.usePowerUp=function(){"invincibility"===this.currentPowerUp.name&&(this.collisions.ignoreObjectCollision=!0,this.hud.usingPowerUp=!0,this.player.shieldActivated=!0)},t.prototype.grabPowerUp=function(t){switch(t){case"healthBoost":this.hud.increaseHealth(15);break;case"invincibility":if(this.currentPowerUp.name)return;this.currentPowerUp={name:t,durationInSecs:5},this.hud.currentPowerUp=this.currentPowerUp}},t.prototype.draw=function(t,e,i,s,n){for(var r=0;r<(null==t?void 0:t.length);r++){var h=this.images[t[r].name];if(h){var a=i+s*t[r].xPercAlongPlat,o=e-h.height+10-t[r].distAbovePlat,l="".concat(t[r].name,"_").concat(n,"_").concat(t[r].xPercAlongPlat);this.collectedPowerUps.includes(l)?a+h.width<0&&this.collectedPowerUps.shift():(this.ctx.drawImage(h,a,o,h.width,h.height),this.collisions.powerUpCollision({x1:this.player.x,y1:this.player.y,x2:a,y2:o,w1:this.player.w,h1:this.player.h,w2:this.images[t[r].name].width,h2:this.images[t[r].name].height||this.world.height-(e-this.images[t[r].name].height+10),margin:0,object:l})&&(this.collectedPowerUps.push(l),this.grabPowerUp(t[r].name)))}}},t}()},32:(t,e,i)=>{i.d(e,{Z:()=>s});const s=function(){function t(t,e,i,s){this.ctx=t,this.world=e,this.player=i,this.hud=s,this.ignoreObjectCollision=!1}return t.prototype.checkForPlatCollision=function(t){var e=t.x1,i=t.y1,s=t.x2,n=t.y2,r=t.w1,h=t.h1,a=t.w2,o=t.h2,l=t.margin,c=void 0===l?0:l,u=(t.object,e+r>=s+c),p=e<=s+a,g=i<=n+o,d=i+this.player.h>n+(this.player.isInAir?c:0);if(u&&p&&g){if(this.player.yVelocity<=0&&Math.abs(n-(i+h))<16)return this.player.land(n),!0;if(d)return console.log("Platform Collision!"),this.hud.health=0,!0}return this.player.y+this.player.h>this.world.height&&(this.hud.health=0,console.log("Out Of Bounds Collision!"),!0)},t.prototype.checkForCollision=function(t){var e=t.x1,i=t.y1,s=t.x2,n=t.y2,r=t.w1,h=t.h1,a=t.w2,o=t.h2,l=t.marginLeft,c=void 0===l?0:l,u=t.marginRight,p=void 0===u?0:u,g=t.marginBot,d=void 0===g?0:g,m=t.object;e+r>=s+c&&e<=s+a-p&&i<=n+o-d&&i+h>n&&(this.player.onObjectHit(m),this.ignoreObjectCollision||this.hud.reduceHealth(m,40))},t.prototype.powerUpCollision=function(t){var e=t.x1,i=t.y1,s=t.x2,n=t.y2,r=t.w1,h=t.h1,a=t.w2,o=t.h2,l=t.margin,c=void 0===l?0:l;return t.object,e+r>=s+c&&e<=s+a&&i<=n+o&&i+h>n},t}()},853:(t,e,i)=>{i.d(e,{Z:()=>s});const s=function(){function t(t,e,i){this.ctx=t,this.world=e,this.health=100,this.lastObjectHit="",this.drawingLevelText=!1,this.levelTextOpacity=0,this.levelTextOpacityInc=.02,this.currentLevel=0,this.fps=0,this.framerate=i,this.fpsEnabled=!1,this.imagePaths=["../public/invincibility.png"],this.images={},this.currentPowerUp={name:"",durationInSecs:0},this.powerUpPercentUsed=0,this.usingPowerUp=!1}return t.prototype.setUp=function(){return t=this,e=void 0,s=function(){var t,e,i=this;return function(t,e){var i,s,n,r,h={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(a){return function(o){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;r&&(r=0,a[0]&&(h=0)),h;)try{if(i=1,s&&(n=2&a[0]?s.return:a[0]?s.throw||((n=s.return)&&n.call(s),0):s.next)&&!(n=n.call(s,a[1])).done)return n;switch(s=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return h.label++,{value:a[1],done:!1};case 5:h.label++,s=a[1],a=[0];continue;case 7:a=h.ops.pop(),h.trys.pop();continue;default:if(!((n=(n=h.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){h=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){h.label=a[1];break}if(6===a[0]&&h.label<n[1]){h.label=n[1],n=a;break}if(n&&h.label<n[2]){h.label=n[2],h.ops.push(a);break}n[2]&&h.ops.pop(),h.trys.pop();continue}a=e.call(t,h)}catch(t){a=[6,t],s=0}finally{i=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}}(this,(function(s){switch(s.label){case 0:return t=function(){var t=i.imagePaths.map((function(t){return new Promise((function(e,i){var s,n=null===(s=t.split("/").pop())||void 0===s?void 0:s.split(".")[0],r=new Image;r.src=t,r.onload=function(){e([n,r])},r.onerror=function(){return i("Image failed to load: ".concat(t))}}))}));return Promise.all(t)},[4,t()];case 1:return e=s.sent(),this.images=Object.fromEntries(e),[2]}}))},new((i=void 0)||(i=Promise))((function(n,r){function h(t){try{o(s.next(t))}catch(t){r(t)}}function a(t){try{o(s.throw(t))}catch(t){r(t)}}function o(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(h,a)}o((s=s.apply(t,e||[])).next())}));var t,e,i,s},t.prototype.drawPowerUp=function(){if(this.currentPowerUp.name){var t=this.images[this.currentPowerUp.name].width,e=this.images[this.currentPowerUp.name].height,i=Math.max(t,e)/2+10,s=i+6,n=-20;this.ctx.fillStyle="rgba(0, 0, 0, 0.5)",this.ctx.beginPath(),this.ctx.ellipse(this.world.width-i+n,i+20,i,i,2*Math.PI,0,2*Math.PI),this.ctx.fill(),this.ctx.strokeStyle="rgba(40, 40, 40, 1)",this.ctx.lineWidth=8,this.ctx.beginPath(),this.ctx.ellipse(this.world.width-s+n+6,s+20-6,s-3+1,s-3+1,2*Math.PI,-Math.PI/2,3*Math.PI/2),this.ctx.stroke(),this.ctx.strokeStyle="rgba(7, 191, 4, 1)",this.ctx.lineWidth=6,this.ctx.beginPath(),this.ctx.ellipse(this.world.width-s+n+6,s+20-6,s-3,s-3,2*Math.PI,-Math.PI/2+2*Math.PI*this.powerUpPercentUsed,3*Math.PI/2),this.ctx.stroke(),this.ctx.drawImage(this.images[this.currentPowerUp.name],this.world.width-i-t/2+n,20+i-e/2,t,e),this.usingPowerUp&&(this.powerUpPercentUsed+=1/(this.framerate*this.currentPowerUp.durationInSecs))}},t.prototype.drawFps=function(){this.fpsEnabled&&(this.ctx.font="20px Arial",this.ctx.fillStyle="rgba(0, 255, 0, 1)",this.ctx.textAlign="right",this.ctx.fillText("".concat(this.fps," FPS"),this.world.width-20,30))},t.prototype.drawJumpCharge=function(t,e,i){this.ctx.strokeStyle="rgb(40, 40, 40)",this.ctx.lineWidth=2,this.ctx.fillStyle="rgb(7, 191, 4)",this.ctx.beginPath(),this.ctx.roundRect(e+0-1,i+-20-1,10,62,8),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.roundRect(e+0,i+-20+60,8,-60*t,8),this.ctx.fill()},t.prototype.reduceHealth=function(t,e){this.lastObjectHit!==t&&(this.health-e<=0?this.health=0:this.health-=e,this.lastObjectHit=t)},t.prototype.increaseHealth=function(t){this.health+t>=100?this.health=100:this.health+=t},t.prototype.drawHealth=function(){this.ctx.fillStyle="rgba(0, 0, 0, 0.7)",this.ctx.beginPath(),this.ctx.roundRect(28,9,164,16,10),this.ctx.fill(),this.ctx.fillStyle=this.health>=90?"rgba(7, 191, 4, 1)":this.health>=50&&this.health<90?"rgba(200, 200, 0, 1)":"rgba(230, 0, 0, 1)",this.ctx.beginPath(),this.ctx.roundRect(30,11,this.health/100*160,12,10),this.ctx.fill()},t.prototype.drawNextLevelText=function(){this.ctx.fillStyle="rgba(0, 0, 0, ".concat(this.levelTextOpacity>=.7?.7:this.levelTextOpacity,")"),this.ctx.beginPath(),this.ctx.roundRect(this.world.width/2-125,this.world.height/2-35-200,250,70,10),this.ctx.fill(),this.ctx.font="40px Arial",this.ctx.fillStyle="rgba(255, 255, 255, ".concat(this.levelTextOpacity,")"),this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText("Level ".concat(this.currentLevel+1),this.world.width/2,this.world.height/2-200),this.levelTextOpacity+=this.levelTextOpacityInc},t.prototype.beginLevelTextAnimation=function(){var t=this;this.drawingLevelText=!0,setTimeout((function(){t.levelTextOpacityInc*=-1,setTimeout((function(){t.drawingLevelText=!1,t.levelTextOpacityInc*=-1}),1500)}),1500)},t.prototype.draw=function(){this.drawHealth(),this.drawFps(),this.drawPowerUp(),this.drawingLevelText&&this.drawNextLevelText()},t}()},94:(t,e,i)=>{const s={levels:[{platforms:[{y:600,len:3e3,gapToNext:0,decor:[{name:"startSign",xLocsOnPlatByPerc:[.6]}]},{y:600,len:2e3,gapToNext:0},{y:700,len:1e3,gapToNext:0},{y:600,len:800,gapToNext:0},{y:500,len:2e3,gapToNext:0,decor:[{name:"treeBack",xLocsOnPlatByPerc:[.7]}],obsticles:[{name:"rock2",xLocsOnPlatByPerc:[.4]},{name:"treeFront",xLocsOnPlatByPerc:[.7]}]},{y:700,len:1200,gapToNext:0},{y:450,len:1e3,gapToNext:0,obsticles:[{name:"rock3",xLocsOnPlatByPerc:[.8]}]},{y:650,len:1e3,gapToNext:0},{y:625,len:600,gapToNext:0},{y:600,len:800,gapToNext:0,powerUps:[{name:"invincibility",xPercAlongPlat:.8,distAbovePlat:300}]},{y:550,len:1e3,gapToNext:0,obsticles:[{name:"rock3",xLocsOnPlatByPerc:[.1]}]},{y:410,len:1e3,gapToNext:0},{y:700,len:1e3,gapToNext:0,obsticles:[{name:"rock1",xLocsOnPlatByPerc:[.6]}]},{y:600,len:800,gapToNext:0},{y:700,len:1200,gapToNext:0},{y:450,len:1e3,gapToNext:0,obsticles:[{name:"rock1",xLocsOnPlatByPerc:[.8]}]},{y:600,len:2e3,gapToNext:0,powerUps:[{name:"healthBoost",xPercAlongPlat:.1,distAbovePlat:300}]}],platformTexture:"dirtPlat",platformH:null,backgroundImg:"bgLevel1",bgImgYOffset:0,maxPlatLen:4e3,speed:14},{platforms:[{y:600,len:3e3,gapToNext:0},{y:600,len:2e3,gapToNext:200},{y:700,len:1e3,gapToNext:0,obsticles:[{name:"rock1",xLocsOnPlatByPerc:[.1]}]},{y:600,len:800,gapToNext:0,powerUps:[{name:"invincibility",xPercAlongPlat:.3,distAbovePlat:200}]},{y:500,len:2e3,gapToNext:0,obsticles:[{name:"rock2",xLocsOnPlatByPerc:[.4]}]},{y:700,len:1200,gapToNext:0},{y:450,len:1e3,gapToNext:0,obsticles:[{name:"rock3",xLocsOnPlatByPerc:[.8]}]},{y:650,len:1e3,gapToNext:0},{y:625,len:600,gapToNext:0},{y:600,len:800,gapToNext:50,powerUps:[{name:"healthBoost",xPercAlongPlat:.2,distAbovePlat:300}]},{y:700,len:2e3,gapToNext:0},{y:550,len:700,gapToNext:0,obsticles:[{name:"rock3",xLocsOnPlatByPerc:[.1]}]},{y:410,len:1e3,gapToNext:300},{y:700,len:1e3,gapToNext:0,obsticles:[{name:"rock1",xLocsOnPlatByPerc:[.6]}]},{y:600,len:800,gapToNext:0},{y:550,len:1500,gapToNext:0,obsticles:[{name:"rock3",xLocsOnPlatByPerc:[.4]}]},{y:700,len:1200,gapToNext:100},{y:450,len:1e3,gapToNext:0,obsticles:[{name:"rock1",xLocsOnPlatByPerc:[.8]}]},{y:650,len:1e3,gapToNext:0},{y:625,len:600,gapToNext:0}],platformTexture:"woodPlat",platformH:16,backgroundImg:"bgLevel2",bgImgYOffset:0,maxPlatLen:4e3,speed:16}]};var n,r,h,a,o,l,c,u,p,g,d=i(961),m=i(32),f=i(853),w=i(627),x=i(251),y=document.getElementById("world"),b=y.getContext("2d",{alpha:!1}),v=document.querySelector(".startBtn"),P=0,k=!1,I=function(){n=requestAnimationFrame(I),o=1e3/60,r=Date.now(),(a=r-(h||0))>o&&(0===P&&setTimeout((function(){u.fps=P,P=0}),1e3),P+=1,h=r-a%o,b.clearRect(0,0,y.width,y.height),k?c.speed=0:(l.move(),c.speed=s.levels[l.currentLevel].speed),l.draw(),u.draw(),u.currentPowerUp.name&&u.powerUpPercentUsed>=1&&g.finishPowerUp(),(0===u.health||l.gameCompleted)&&(n&&cancelAnimationFrame(n),n=null,T(),v.style.display="block",v.innerHTML="Play Again"))},T=function(){return t=void 0,e=void 0,n=function(){return function(t,e){var i,s,n,r,h={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(a){return function(o){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;r&&(r=0,a[0]&&(h=0)),h;)try{if(i=1,s&&(n=2&a[0]?s.return:a[0]?s.throw||((n=s.return)&&n.call(s),0):s.next)&&!(n=n.call(s,a[1])).done)return n;switch(s=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return h.label++,{value:a[1],done:!1};case 5:h.label++,s=a[1],a=[0];continue;case 7:a=h.ops.pop(),h.trys.pop();continue;default:if(!((n=(n=h.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){h=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){h.label=a[1];break}if(6===a[0]&&h.label<n[1]){h.label=n[1],n=a;break}if(n&&h.label<n[2]){h.label=n[2],h.ops.push(a);break}n[2]&&h.ops.pop(),h.trys.pop();continue}a=e.call(t,h)}catch(t){a=[6,t],s=0}finally{i=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}}(this,(function(t){switch(t.label){case 0:return Object.freeze(s),u=new f.Z(b,y,60),c=new x.Z(b,y,u),p=new m.Z(b,y,c,u),g=new d.Z(b,y,u,p,c),[4,(l=new w.Z(b,y,c,u,p,g,s)).setUp()];case 1:return t.sent(),[4,c.setUp()];case 2:return t.sent(),[4,g.setUp()];case 3:return t.sent(),[4,u.setUp()];case 4:return t.sent(),v.style.display="block",[2]}}))},new((i=void 0)||(i=Promise))((function(s,r){function h(t){try{o(n.next(t))}catch(t){r(t)}}function a(t){try{o(n.throw(t))}catch(t){r(t)}}function o(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(h,a)}o((n=n.apply(t,e||[])).next())}));var t,e,i,n};T(),document.addEventListener("keydown",(function(t){switch(t.code){case"ArrowUp":n&&(k?k=!1:c.loadingJump||(c.loadingJump=!0));break;case"ArrowDown":c.duck()}})),document.addEventListener("keyup",(function(t){switch(t.code){case"Escape":k=!k;case"ArrowUp":c.jump();break;case"ArrowDown":c.stand();break;case"ArrowRight":g.usePowerUp()}})),v.onclick=function(){I(),v.style.display="none"}},627:(t,e,i)=>{i.d(e,{Z:()=>s});const s=function(){function t(t,e,i,s,n,r,h){this.ctx=t,this.world=e,this.player=i,this.hud=s,this.collisions=n,this.abilities=r,this.gameObject=h,this.currentLevel=0,this.platsVisible=[{index:0,x:0,level:0}],this.backgroundX=0,this.backgroundX2=this.world.width,this.bgImgYOffset=0,this.bgImgYOffset2=0,this.gameOver=!1,this.collisionMargin=26,this.imagePaths=["../public/bgLevel1.png","../public/bgLevel2.png","../public/woodPlat.png","../public/dirtPlat.png","../public/startSign.png","../public/treeBack.png","../public/rock1.png","../public/rock2.png","../public/rock3.png","../public/treeFront.png"],this.images={},this.bgImg1="",this.bgImg2="",this.gameCompleted=!1}return t.prototype.setUp=function(){return t=this,e=void 0,s=function(){var t,e,i=this;return function(t,e){var i,s,n,r,h={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(a){return function(o){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;r&&(r=0,a[0]&&(h=0)),h;)try{if(i=1,s&&(n=2&a[0]?s.return:a[0]?s.throw||((n=s.return)&&n.call(s),0):s.next)&&!(n=n.call(s,a[1])).done)return n;switch(s=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return h.label++,{value:a[1],done:!1};case 5:h.label++,s=a[1],a=[0];continue;case 7:a=h.ops.pop(),h.trys.pop();continue;default:if(!((n=(n=h.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){h=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){h.label=a[1];break}if(6===a[0]&&h.label<n[1]){h.label=n[1],n=a;break}if(n&&h.label<n[2]){h.label=n[2],h.ops.push(a);break}n[2]&&h.ops.pop(),h.trys.pop();continue}a=e.call(t,h)}catch(t){a=[6,t],s=0}finally{i=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}}(this,(function(s){switch(s.label){case 0:return t=function(){var t=i.imagePaths.map((function(t){return new Promise((function(e,i){var s,n=null===(s=t.split("/").pop())||void 0===s?void 0:s.split(".")[0],r=new Image;r.src=t,r.onload=function(){e([n,r])},r.onerror=function(){return i("Image failed to load: ".concat(t))}}))}));return Promise.all(t)},[4,t()];case 1:return e=s.sent(),this.images=Object.fromEntries(e),[2]}}))},new((i=void 0)||(i=Promise))((function(n,r){function h(t){try{o(s.next(t))}catch(t){r(t)}}function a(t){try{o(s.throw(t))}catch(t){r(t)}}function o(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(h,a)}o((s=s.apply(t,e||[])).next())}));var t,e,i,s},t.prototype.nextPlatform=function(){var t=this.platsVisible[this.platsVisible.length-1],e=this.gameObject.levels[this.currentLevel].platforms,i=e[t.index];if(t.index===e.length-1)return this.gameObject.levels[this.currentLevel+1]?(this.currentLevel+=1,this.platsVisible.push({index:0,x:t.x+i.len+i.gapToNext,level:this.currentLevel}),void(this.platsVisible[0].x+e[this.platsVisible[0].index].len<0&&this.platsVisible.shift())):void(this.gameCompleted=!0);0===t.index&&(this.hud.currentLevel=this.currentLevel,this.hud.beginLevelTextAnimation()),this.platsVisible.push({index:t.index+1,x:t.x+i.len+i.gapToNext,level:this.currentLevel}),this.platsVisible[0].x+e[this.platsVisible[0].index].len<0&&this.platsVisible.shift()},t.prototype.move=function(){if(!this.gameCompleted){var t=this.gameObject.levels[this.currentLevel],e=t.platforms[this.platsVisible[this.platsVisible.length-1].index];this.platsVisible[this.platsVisible.length-1].x+e.len<=this.world.width&&this.nextPlatform();for(var i=0;i<this.platsVisible.length;i++)this.platsVisible[i].x-=t.speed;this.backgroundX-=t.speed/8,this.bgImg2&&(this.backgroundX2-=t.speed/8)}},t.prototype.drawDecorForPlat=function(t,e,i,s){for(var n=0;n<(null==t?void 0:t.length);n++)for(var r=this.images[t[n].name],h=t[n].xLocsOnPlatByPerc,a=0;a<(null==h?void 0:h.length);a++)this.ctx.drawImage(r,i+s*h[a],e+4,this.images[t[n].name].width,-this.images[t[n].name].height)},t.prototype.drawObsticleOnPlat=function(t,e,i,s,n){for(var r=0;r<(null==t?void 0:t.length);r++)for(var h=this.images[t[r].name],a=t[r].xLocsOnPlatByPerc,o=0;o<(null==a?void 0:a.length);o++)this.ctx.drawImage(h,i+s*a[o],e+4,this.images[t[r].name].width,-this.images[t[r].name].height),this.collisions.checkForCollision({x1:this.player.x,y1:this.player.y,x2:i+s*a[o],y2:e-this.images[t[r].name].height+10,w1:this.player.w,h1:this.player.h,w2:this.images[t[r].name].width,h2:this.images[t[r].name].height||this.world.height-(e-this.images[t[r].name].height+10),marginLeft:"treeFront"===t[r].name?this.collisionMargin+150:this.collisionMargin,marginRight:"treeFront"===t[r].name?180:0,marginBot:"treeFront"===t[r].name?130:0,object:"".concat(t[r].name,"_").concat(n,"_").concat(a[o])})},t.prototype.drawBgImage=function(){var t;this.bgImg1.length||(this.bgImgYOffset=this.gameObject.levels[this.currentLevel].bgImgYOffset,this.bgImg1=this.gameObject.levels[this.currentLevel].backgroundImg),this.bgImg2.length&&this.backgroundX2<=0&&(this.bgImg1=this.gameObject.levels[this.currentLevel].backgroundImg,this.bgImg2="",this.backgroundX=this.backgroundX2,this.backgroundX2=this.world.width,this.bgImgYOffset=this.bgImgYOffset2,this.bgImgYOffset2=0);var e=this.images[this.bgImg1];(this.backgroundX+e.width<this.world.width||this.platsVisible[0].level!==this.currentLevel)&&!this.bgImg2.length&&(this.backgroundX2=this.world.width,this.bgImgYOffset2=this.gameObject.levels[this.currentLevel].bgImgYOffset,this.bgImg2=this.gameObject.levels[this.currentLevel].backgroundImg);var i=null===(t=this.images)||void 0===t?void 0:t[this.bgImg2];this.ctx.drawImage(e,-this.backgroundX,e.height,e.width*(this.world.width/e.width),-e.height*(this.world.height/e.height),0,0,this.world.width,this.world.height),i&&this.ctx.drawImage(i,-this.backgroundX2,i.height,i.width*(this.world.width/i.width),-i.height*(this.world.height/i.height),0,0,this.world.width,this.world.height)},t.prototype.draw=function(){this.drawBgImage();for(var t=!0,e=!1,i=0;i<this.platsVisible.length;i++){var s=this.gameObject.levels[this.platsVisible[i].level],n=this.images[s.platformTexture].width*(s.platforms[this.platsVisible[i].index].len/s.maxPlatLen),r=this.gameObject.levels[this.platsVisible[i].level].platforms[this.platsVisible[i].index]||[];(null==r?void 0:r.decor)&&this.drawDecorForPlat(r.decor,r.y,this.platsVisible[i].x,r.len),(null==r?void 0:r.powerUps)&&this.abilities.draw(r.powerUps,r.y,this.platsVisible[i].x,r.len,this.platsVisible[i].index);var h=this.player.x>this.platsVisible[i].x&&this.player.x+this.player.w<=this.platsVisible[i].x+s.platforms[this.platsVisible[i].index].len;e||!h&&i!==this.platsVisible.length-1||(this.player.draw(),e=!0),s.platformH?this.ctx.drawImage(this.images[s.platformTexture],0,0,n,this.images[s.platformTexture].height,this.platsVisible[i].x,s.platforms[this.platsVisible[i].index].y,s.platforms[this.platsVisible[i].index].len,s.platformH):this.ctx.drawImage(this.images[s.platformTexture],0,this.images[s.platformTexture].height,n,-2.5*this.images[s.platformTexture].height*((this.world.height-s.platforms[this.platsVisible[i].index].y)/this.images[s.platformTexture].height),this.platsVisible[i].x,s.platforms[this.platsVisible[i].index].y,s.platforms[this.platsVisible[i].index].len,this.world.height-s.platforms[this.platsVisible[i].index].y),(null==r?void 0:r.obsticles)&&this.drawObsticleOnPlat(r.obsticles,r.y,this.platsVisible[i].x,r.len,this.platsVisible[i].index),this.collisions.checkForPlatCollision({x1:this.player.x,y1:this.player.y,x2:this.platsVisible[i].x,y2:s.platforms[this.platsVisible[i].index].y,w1:this.player.w,h1:this.player.h,w2:s.platforms[this.platsVisible[i].index].len,h2:s.platformH||this.world.height-s.platforms[this.platsVisible[i].index].y,margin:this.collisionMargin,object:"".concat(this.currentLevel,"_").concat(this.platsVisible[i].index)})&&(t=!1)}t&&(this.player.isInAir=!0)},t}()},251:(t,e,i)=>{i.d(e,{Z:()=>s});const s=function(){function t(t,e,i){this.ctx=t,this.world=e,this.aspectRatio=1.1,this.x=100,this.y=100,this.w=150,this.h=this.w/this.aspectRatio,this.isInAir=!0,this.maxJumpStart=20,this.jumpVelStartReset=10,this.jumpVelStart=this.jumpVelStartReset,this.yVelocity=0,this.yAcc=.8,this.rotation=0,this.rotationSpeed=0,this.isJumping=!1,this.loadingJump=!1,this.wheelRot=0,this.rotCoordsForJump={x:0,y:0},this.speed=0,this.hud=i,this.imagePaths=["../public/frame.png","../public/frameDucked.png","../public/frameDamaged.png","../public/frameDuckedDamaged.png","../public/wheel.png","../public/wheelDamaged.png"],this.images={},this.isBeingDamaged=!1,this.lastObjectHit="",this.isDucking=!1,this.shieldActivated=!1,this.hitWithShieldOn=!1}return t.prototype.setUp=function(){return t=this,e=void 0,s=function(){var t,e,i=this;return function(t,e){var i,s,n,r,h={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(a){return function(o){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;r&&(r=0,a[0]&&(h=0)),h;)try{if(i=1,s&&(n=2&a[0]?s.return:a[0]?s.throw||((n=s.return)&&n.call(s),0):s.next)&&!(n=n.call(s,a[1])).done)return n;switch(s=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return h.label++,{value:a[1],done:!1};case 5:h.label++,s=a[1],a=[0];continue;case 7:a=h.ops.pop(),h.trys.pop();continue;default:if(!((n=(n=h.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){h=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){h.label=a[1];break}if(6===a[0]&&h.label<n[1]){h.label=n[1],n=a;break}if(n&&h.label<n[2]){h.label=n[2],h.ops.push(a);break}n[2]&&h.ops.pop(),h.trys.pop();continue}a=e.call(t,h)}catch(t){a=[6,t],s=0}finally{i=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}}(this,(function(s){switch(s.label){case 0:return t=function(){var t=i.imagePaths.map((function(t){return new Promise((function(e,i){var s,n=null===(s=t.split("/").pop())||void 0===s?void 0:s.split(".")[0],r=new Image;r.src=t,r.onload=function(){e([n,r])},r.onerror=function(){return i("Image failed to load: ".concat(t))}}))}));return Promise.all(t)},[4,t()];case 1:return e=s.sent(),this.images=Object.fromEntries(e),this.w=this.images.frame.width,this.h=this.images.frame.height,[2]}}))},new((i=void 0)||(i=Promise))((function(n,r){function h(t){try{o(s.next(t))}catch(t){r(t)}}function a(t){try{o(s.throw(t))}catch(t){r(t)}}function o(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(h,a)}o((s=s.apply(t,e||[])).next())}));var t,e,i,s},t.prototype.onObjectHit=function(t){var e=this;t!==this.lastObjectHit&&(this.lastObjectHit=t,this.shieldActivated?(this.hitWithShieldOn=!0,setTimeout((function(){e.hitWithShieldOn=!1}),100)):(this.isBeingDamaged=!0,setTimeout((function(){e.isBeingDamaged=!1,setTimeout((function(){e.isBeingDamaged=!0,setTimeout((function(){e.isBeingDamaged=!1,setTimeout((function(){e.isBeingDamaged=!0,setTimeout((function(){e.isBeingDamaged=!1}),50)}),50)}),50)}),50)}),50)))},t.prototype.drawShield=function(){this.ctx.fillStyle=this.hitWithShieldOn?"rgba(240, 240, 255, 0.4)":"rgba(220, 220, 255, 0.4)",this.ctx.strokeStyle=this.hitWithShieldOn?"rgba(255, 255, 255, 1)":"rgba(220, 220, 255, 0.8)",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.ellipse(this.x+this.w/2,this.y+this.h/2,this.w/2+20,this.w/2+20,2*Math.PI,0,2*Math.PI),this.ctx.fill(),this.ctx.stroke()},t.prototype.duck=function(){this.isDucking||(this.isDucking=!0,this.w=this.images.frameDucked.width,this.h=this.images.frameDucked.height,this.y+=this.images.frame.height-this.images.frameDucked.height)},t.prototype.stand=function(){this.isDucking&&(this.isDucking=!1,this.w=this.images.frame.width,this.h=this.images.frame.height,this.y-=this.images.frame.height-this.images.frameDucked.height)},t.prototype.land=function(t){this.rotation<0||(this.isInAir=!1,this.isJumping=!1,this.rotationSpeed=0,this.rotation=0,this.yVelocity=0,this.y=t-this.h,this.loadingJump||(this.jumpVelStart=this.jumpVelStartReset))},t.prototype.jump=function(){this.loadingJump=!1,this.isJumping||this.isInAir||this.yVelocity<0||(this.rotationSpeed=this.jumpVelStart,this.isJumping=!0,this.isInAir=!0,this.yVelocity=this.jumpVelStart,this.jumpVelStart=this.jumpVelStartReset)},t.prototype.loadJump=function(){this.jumpVelStart<this.maxJumpStart?(this.jumpVelStart+=.5,this.hud.drawJumpCharge(1-(this.maxJumpStart-this.jumpVelStart)/(this.maxJumpStart-this.jumpVelStartReset),this.x,this.y)):this.hud.drawJumpCharge(1,this.x,this.y)},t.prototype.drawFrame=function(){var t;t=this.isDucking?this.isBeingDamaged?this.images.frameDuckedDamaged:this.images.frameDucked:this.isBeingDamaged?this.images.frameDamaged:this.images.frame,this.ctx.save(),this.ctx.translate(this.rotCoordsForJump.x,this.rotCoordsForJump.y),this.ctx.rotate(this.rotation*Math.PI/180),this.ctx.drawImage(t,-this.images.wheel.width/2,-this.h+this.images.wheel.height/2,this.w,this.h),this.ctx.restore()},t.prototype.drawWheels=function(){var t=this.hud.health>=90?0:this.hud.health<90&&this.hud.health>=50?1:2;this.ctx.save(),this.ctx.translate(this.rotCoordsForJump.x+t,this.rotCoordsForJump.y),this.ctx.rotate(this.rotation*Math.PI/180),this.ctx.rotate(this.wheelRot*Math.PI/180),this.ctx.drawImage(this.isBeingDamaged?this.images.wheelDamaged:this.images.wheel,-this.images.wheel.width/2-t,-this.images.wheel.height/2,this.images.wheel.width-.5,this.images.wheel.height-.5),this.ctx.restore(),this.ctx.save(),this.ctx.translate(this.rotCoordsForJump.x,this.rotCoordsForJump.y+t),this.ctx.rotate(this.rotation*Math.PI/180),this.ctx.translate(-this.rotCoordsForJump.x,-this.rotCoordsForJump.y),this.ctx.translate(this.x+this.w-this.images.wheel.width/2,this.rotCoordsForJump.y),this.ctx.rotate(this.wheelRot*Math.PI/180),this.ctx.translate(-(this.x+this.w-this.images.wheel.width/2),-this.rotCoordsForJump.y),this.ctx.translate(this.rotCoordsForJump.x,this.rotCoordsForJump.y),this.ctx.drawImage(this.isBeingDamaged?this.images.wheelDamaged:this.images.wheel,-(this.rotCoordsForJump.x-this.x)+this.w-this.images.wheel.width,-this.images.wheel.height/2-t,this.images.wheel.width-.5,this.images.wheel.height-.5),this.ctx.restore()},t.prototype.draw=function(){var t;(null===(t=this.images)||void 0===t?void 0:t.frame)&&(this.wheelRot+=this.speed,this.loadingJump&&this.loadJump(),this.y-=this.yVelocity,this.isInAir&&(this.yVelocity-=this.yAcc),this.isJumping&&(this.rotation-=this.rotationSpeed/4,this.rotationSpeed-=2*this.yAcc,this.rotation>=5&&(this.rotationSpeed=0)),this.shieldActivated&&this.drawShield(),this.rotCoordsForJump={x:this.x+this.images.wheel.width/2,y:this.y+this.h-this.images.wheel.height/2},this.drawWheels(),this.drawFrame())},t}()},699:()=>{}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,i),r.exports}i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i(961),i(32),i(853),i(94),i(627),i(251),i(699)})();
//# sourceMappingURL=bundle.js.map