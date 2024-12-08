import React, { useState, useEffect } from 'react';

const Fireworks = () => {
  const [canvas, setCanvas] = useState(null);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    // Run createCanvas when component is mounted
    if (!canvas) {
      const createdCanvas = createCanvas();
      setCanvas(createdCanvas);
      setCtx(createdCanvas.getContext('2d'));
    }

    // Cleanup function to remove the canvas when the component is unmounted
    return () => {
      // Remove the canvas only if it exists
      if (canvas) {
        document.body.removeChild(canvas);
      }
    };
  }, [canvas]); // Include canvas as a dependency

  const createCanvas = () => {
    const newCanvas = document.createElement('canvas');
    newCanvas.width = 1500;
    newCanvas.height = 600;
    newCanvas.style.backgroundColor = 'blue'; // Set background color to blue
    document.body.appendChild(newCanvas);
    return newCanvas;
  };

  const launchFirework = () => {
    // Add your firework logic here using ctx
    console.log('Firework launched!');
  };

  return (
    <div>
      {canvas && (
        <div>
          <button onClick={launchFirework}>Launch Firework</button>
          {canvas}
        </div>
      )}
    </div>
  );
};

export default Fireworks;








// function GameCanvas() {
//   let top = this;

//   this.functions = [];
//   this.fps = -1;
//   this.deltaTime = 1;

//   this.createCanvas = function () {
//     let canvas = document.createElement("canvas");
//     document.body.appendChild(canvas);
//     return canvas;
//   }

//   this.setSize = function (width, height) {
//     if (top.canvas) {
//       top.canvas.width = top.width = width;
//       top.canvas.height = top.height = height;
//       window.width = this.width;
//       window.height = this.height;
//     }
//     else {
//       console.error("There is no canvas!");
//     }
//   }

//   this.fillPageWithCanvas = function () {
//     top.canvas.style.position = "fixed";
//     top.canvas.style.top = "0px";
//     top.canvas.style.left = "0px";
//     top.setSize(window.innerWidth, window.innerHeight);
//     top.disableScrollOnMobile = true;
//     top.contextMenuDisabled = true;
//     this.updateSizeOnResize = true;
//   }

//   this.background = function (color) {
//     top.ctx.fillStyle = color;
//     top.ctx.fillRect(0, 0, top.width, top.height);
//   }

//   this.circle = function (x, y, radius, color, strokeColor, lineWidth) {
//     top.ctx.beginPath();
//     top.ctx.arc(x, y, radius, 0, Math.PI * 2);
//     top.ctx.fillStyle = color;
//     if (strokeColor) top.ctx.strokeStyle = strokeColor;
//     if (lineWidth) top.ctx.lineWidth = lineWidth;
//     top.ctx.fill();
//     if (strokeColor) top.ctx.stroke();
//   }

//   this.functions = [
//     { func: this.createCanvas, name: "createCanvas" },
//     { func: this.fillPageWithCanvas, name: "fillPageWithCanvas" },
//     { func: this.background, name: "background" },
//     { func: this.circle, name: "circle" }
//   ];

//   this.variables = [
//     { variable: this.RadToDeg, name: "RadToDeg" },
//     { variable: this.DegToRad, name: "DegToRad" },
//     { variable: this.PI, name: "PI" },
//     { variable: this.TWO_PI, name: "TWO_PI" },
//     { variable: this.TAU, name: "TAU" }
//   ];

//   this.makeFunctionsGlobal = function () {
//     this.globalFunctions = true;
//     this.functions.forEach(item => {
//       window[item.name] = item.func;
//     });
//     this.variables.forEach(item => {
//       window[item.name] = item.variable;
//     });

//     window.fps = this.fps;
//     window.deltaTime = this.deltaTime;
//   }

//   //Create a canvas and make it fullscreen
//   this.canvas = this.createCanvas();
//   this.fillPageWithCanvas();

//   this.makeFunctionsGlobal();
//   this.ctx = this.canvas.getContext("2d");
// }



// var gc = new GameCanvas();

// var fireworks = [];
// var particles = [];
// var gravity = 0.1;
// var textSize = 30;

// var canvas = document.createElement("canvas");
// canvas.width = 1024;
// canvas.height = textSize * 1.3;


// fireworks.push(new Firework(Math.random() * width, height, Math.random() - 0.5, -(Math.random() * 7 + 5)));

// background("black");
// loop();
// function loop() {
//   background("rgba(0, 0, 0, 0.1)");

//   for (var i = 0; i < fireworks.length; i++) {
//     var firework = fireworks[i];
//     firework.update();
//     firework.render();
//   }

//   for (var i = 0; i < particles.length; i++) {
//     var particle = particles[i];
//     particle.update();
//     particle.render();
//   }

//   // 动画效果
//   requestAnimationFrame(loop);
// }


// // 烟花升起来的时候的白色小圆点
// function Firework(x, y, vx, vy, radius = 5, color = "white") {
//   this.x = x;
//   this.y = y;
//   this.vx = vx;
//   this.vy = vy;
//   this.radius = radius;
//   this.color = color;

//   this.update = function () {
//     this.x += this.vx;
//     this.y += this.vy;
//     this.vy += gravity;

//     if (this.vy >= 0) {
//       fireworks.splice(fireworks.indexOf(this), 1);

//       var color = [Math.random() * 256 >> 0, Math.random() * 256 >> 0, Math.random() * 256 >> 0];
//       for (var i = 0; i < Math.PI * 2; i += 0.1) {
//         var power = (Math.random() + 0.5) * 4;
//         var vx = Math.cos(i) * power;
//         var vy = Math.sin(i) * power;
//         particles.push(new Particle(this.x, this.y, vx, vy, Math.random() + 3, color));
//       }
//     }
//   }

//   this.render = function () {
//     circle(this.x, this.y, this.radius, this.color);
//   }
// }


// // 烟花盛开的时候，会有很多小颗粒，这些小颗粒会随着时间的推移，逐渐消失
// function Particle(x, y, vx, vy, radius, color) {
//   this.x = x;
//   this.y = y;
//   this.vx = vx;
//   this.vy = vy;
//   this.life = 100;
//   this.color = color;
//   this.radius = radius;

//   this.update = function () {
//     this.x += this.vx;
//     this.y += this.vy;
//     this.vy += gravity;

//     this.vx *= 0.95;
//     this.vy *= 0.95;

//     this.life--;
//     if (this.life <= 0) {
//       particles.splice(particles.indexOf(this), 1);
//     }
//   }

//   this.render = function () {
//     circle(this.x, this.y, 3 * (this.life / 100), "rgba(" + this.color[0] + ", " + this.color[1] + ", " + this.color[2] + ", " + (this.life / 100) + ")");
//   }
// }
