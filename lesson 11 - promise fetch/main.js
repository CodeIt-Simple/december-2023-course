// let isMomHappy = true;
// const willIGetNewPhone = new Promise(function (resolve, reject) {
//   if (isMomHappy) {
//     const phone = {
//       brand: "Samsung",
//       color: "black",
//     };
//     resolve(phone);
//   } else {
//     const reason = new Error("mom is not happy");
//     reject(reason);
//   }
// });

// const showOff = function (phone) {
//   return new Promise(function (resolve, reject) {
//     let message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone`;
//     resolve(message);
//   });
// };

// const askMom = (async function () {
//   try {
//     console.log("before asking Mom");
//     const phone = await willIGetNewPhone;
//     const message = await showOff(phone);
//     console.log(message);
//   } catch (error) {
//     console.log(error.message);
//   }
//   console.log("after getting a response");
// })

// (async () => {
//   await askMom();
// })();

const getTodos = (async function () {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (response) {console.log(response); return response.json();})
    .then(function (data) {console.log(data);});
})

(async () => {
  await getTodos();
})();

const getTodos2 = (async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
  
})

(async () => {
  await getTodos2();
})();

