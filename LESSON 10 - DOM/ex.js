// // const buttons = [
// //   { tag: "button", color: "red" },
// //   { tag: "button", color: "blue" },
// //   { tag: "button", color: "green" },
// //   { tag: "button", color: "pink" },
// //   { tag: "button", color: "black" },
// // ];
// // const container = document.createElement("div")
// // const paragraph = document.createElement("p");
// // paragraph.innerText = "hello my name is Almog and i am 33 years old";
// // container.classList.add("flexCol")

// // buttons.forEach(function(element){
// //     const btn = document.createElement(element.tag)
// //     btn.innerText = element.color;

// //     btn.addEventListener('click', function(){
// //         paragraph.style.color = element.color;
// //     })
// //     container.appendChild(btn)
// // })

// // document.body.append(paragraph,container);

// const RELATIONSHIP_STATUSES = [
//     '',
//   "single",
//   "married",
//   "divorced",
//   "in relationship",
//   "widow",
//   "its complicated",
// ];
// const GENDER = ['', "male", "female", "together"];

// const ELEMENTS = [
//   { elementType: "input", placeholder: "username", name: "username", type: "text", validation:'min5 max8' },
//   { elementType: "input", placeholder: "password", name: "password", type: "password" },
//   { elementType: "input", placeholder: "email", name: "email", type: "email" },
//   { elementType: "input", placeholder: "phone", name: "phone", type: "text" },
//   { elementType: "input", placeholder: "bio", name: "bio", type: "text" },
//   { elementType: "input", placeholder: "address", name: "address", type: "text" },
//   { elementType: "input", placeholder: "occupation", name: "occupation", type: "text" },
//   { elementType: "input", placeholder: "dateOfBirth", name: "dateOfBirth", type: "date" },
//   { elementType: "input", placeholder: "profilePicture", name: "profilePicture", type: "text" },
//   { elementType: "select", placeholder: "relationshipStatus", name: "relationshipStatus", listOfValues: RELATIONSHIP_STATUSES},
//   { elementType: "select", placeholder: "gender", name: "gender", listOfValues: GENDER},
// ];
// const form = {}
// const submitBtn = document.createElement("button")
// submitBtn.innerText = "Submit";

// ELEMENTS.forEach(function(element) {
//     const el = document.createElement(element.elementType)
//     if(element.elementType === "input"){
//         el.placeholder = element.placeholder
//         el.type = element.type
//         el.name = element.name
//     } else if (element.elementType === 'select'){
//         element.listOfValues.forEach(function(opt){
//             const option = document.createElement('option');
//             option.value = opt
//             option.innerText = opt            
//             el.appendChild(option)
//         })
//     }
//     el.addEventListener('change', function(event){
//         form[element.name] = event.target.value
//         console.log(form)
//     })
        
   
    
//     document.body.appendChild(el)
// })

// submitBtn.addEventListener('click', function(){
//     let isFormValid = true
//     ELEMENTS.forEach(function(element){
//         if(!isFormValid){
//             return
//         }
//         if(!form[element.name]){
//             console.log(element.name + ' does not exist')
//             isFormValid = false
//             return
//         }
//         const validations = element.validation.split(' ')
//         // isFormValid = checkMinMax(validations[0], validations[1])
//         if(!isFormValid) {
//             return
//         }
     
//     })
//     if(isFormValid){
//         console.log(form)
//     } else{
//         console.log('error')
//     }
// })

// document.body.appendChild(submitBtn);