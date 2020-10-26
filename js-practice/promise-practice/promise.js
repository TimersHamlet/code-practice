// function runAsync(){
//     var p = new Promise(function(resolve, reject){
//         //做一些异步操作
//         setTimeout(function(){
//             console.log('执行完成');
//             resolve('随便什么数据');
//         }, 2000);
//     });
//     return p;
// }
// runAsync().then (function (data){
//     console.log (data)
// })

// let p = new Promise((resolve, reject) => {
//   //做一些异步操作
//   setTimeout(function () {
//     var num = Math.ceil(Math.random() * 10); //生成1-10的随机数
//     if (num <= 5) {
//       resolve(num);
//     } else {
//       reject('数字太大了');
//     }
//   }, 2000);
// });
// p.then(
//   data => {
//     console.log('resolved', data);
//   },
//   err => {
//     console.log('rejected', err);
//   }
// );

let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');