// $(document).ready(function(){
//   let  game = {
//   start: function (){
//     ctx = undefined;
//     sprites: {
//       background = undefined
//     };
//     let canvas = document.getElementById("mycanvas");
//     this.ctx = canvas.getContext("2d");
//     // переменная this внутри метода содержит ссылку на тот объект, который в момент вызова метода, стоял слева от точки, после которой было написано имя метода 
//     //  таким образом this здесь ссылается на game
//     this.sprites.background = new Image();
//     this.sprites.background.src = "background.jpg";
//     this.run();
//     },
//     render: function(){
//       this.ctx.drawImage(this.sprites.background, 0, 0);
//     }, 
//     run: function(){
//       this.render();
//       window.requestAnimationFrame(function(){
//         game.run();
//       });
//     },
//   }
//   game.start();
// });
  
  // $(document).ready(function(){
  //   let example = document.getElementById("example");
  //   let ctx = example.getContext("2d");
  //   let background = "background.jpg";
  //   ctx.fillRect(0, 0, example.width, example.height);
  // })
  $(document).ready(function(){
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 10, 10);
    }
    img.src = "background.jpg";

  });
