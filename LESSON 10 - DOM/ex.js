const buttons = [
  { tag: "button", color: "red" },
  { tag: "button", color: "blue" },
  { tag: "button", color: "green" },
  { tag: "button", color: "pink" },
  { tag: "button", color: "black" },
];
const container = document.createElement("div")
const paragraph = document.createElement("p");
paragraph.innerText = "hello my name is Almog and i am 33 years old";
container.classList.add("flexCol")

buttons.forEach(function(element){
    const btn = document.createElement(element.tag)
    btn.innerText = element.color;

    btn.addEventListener('click', function(){
        paragraph.style.color = element.color;
    })
    container.appendChild(btn)
})

document.body.append(paragraph,container);
