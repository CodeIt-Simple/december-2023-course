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

// const getTodos = (async function () {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(function (response) {console.log(response); return response.json();})
//     .then(function (data) {console.log(data);});
// })

// (async () => {
//   await getTodos();
// })();

// const getTodos2 = (async function () {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await response.json();
//   console.log(data);

// })

// (async () => {
//   await getTodos2();
// })();

// const getUserDetails = () => {
//   fetch("https://randomuser.me/api/").then(function(response){
//     console.log(response)
//     return response.json();
//   }).then(function(data){
//     console.log(data.results[0])

//     Object.entries(data.results[0]).forEach(function(entry){
//       if(typeof entry[1] === 'object'){
//         console.log('this was an object')
//       } else{
//         const p = document.createElement("p");
//         p.innerText = `${entry[0]}: ${entry[1]}`
//         document.body.appendChild(p)
//       }
//     })

//   })
// }

// getUserDetails()

// 1.  השתמשו   בקריאת fetch   לכתובת   https://jsonplaceholder.typicode.com/todos   כדי   לבנות רשימה של li
// עם   כל שמות ה todos.   עבור   todo   שהושלם   הציגו את שמו עם קו חוצה (בעזרת תגית <s>).
// async function getTodos() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await response.json();
//   const ul = document.createElement("ul");
//   data.forEach(function(todo){
//     console.log(todo)
//     const li = document.createElement("li");
//     if(todo.completed){
//       li.innerHTML = `<s>userId: ${todo.userId}, id: ${todo.id},  title: ${todo.title}</s>`
//     } else{
//       li.innerHTML = `<span>userId: ${todo.userId}, id: ${todo.id},  title: ${todo.title}</span>`
//     }
//     document.body.appendChild(li)
//   })
//   document.body.appendChild(ul)

// }

// getTodos()

async function getAllBreedsOfCats() {
  const select = document.createElement("select");
  const response = await fetch(`https://api.thecatapi.com/v1/breeds`);
  const data = await response.json();

  // const catsNames = data.map(function(cat){
  //   return {name: cat.name, id:cat.id}
  // })
  const catsNames = data.map((cat) => {return { name: cat.name, id: cat.id };});

  console.log(catsNames);

  catsNames.forEach(function (option) {
    const opt = document.createElement("option");
    opt.innerText = option.name;
    opt.value = option.id;

    select.appendChild(opt);
  });

  const div = document.createElement("div");

  select.addEventListener("change", async function (event) {
    div.innerHTML = "";
    // const { target: { value } } = event;

    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${event.target.value}`
    );
    const data = await response.json();
    const cat = data[0];

    const img = document.createElement("img");
    img.width = cat.width / 3;
    img.height = cat.height / 3;
    img.src = cat.url;

    div.appendChild(img);
    document.body.appendChild(div);
  });
  document.body.appendChild(select);
}

getAllBreedsOfCats();
