cards = [
    {img: "dog.jpg",
     title: "Take the dog for a walk",
     place: "Dog park",
     priority: 0,
     description: "Taking a walk with my best friend and enjoy it, and im pretty sure he does as well ",
    },
    {img: "shopping.webp",
        title: "Shopping",
        place: "Mall",
        priority: 0,
        description: "Not one of my favorites activites in specially on busy days, but it has to be done",

    },
    {img: "meeting.webp",
        title: "Attend Meeting",
        place: "Corporate SA",
        priority: 0,
        description: "Coming up with new projects, ideas of improvement  every week",

    },
    {img: "cinema.jpg",
        title: "Buy Cinema tickets",
        place: "Haydn Cinema",
        priority: 0,
        description: "Going to see the new movie that i heard it's 10 out of 10, i hope i dont gett disapointed",

    },
    {img: "friends.webp",
        title: "Meet friends",
        place: "Bar",
        priority: 0,
        description: "Sometimes a nice cold beer with people of quality it's more than any therapy",
    },
    {img: "fan.webp",
        title: "Go to the footbal game",
        place: "Ernst-Happel-Stadion",
        priority: 0,
        description: "One of my passion is supporting the best sport and team in the world",
    },
    {img: "dance.jpg",
        title: "Take dances classes",
        place: "Musical Dance",
        description: "Learning new skills always helps in life, dancing hopefully is one of them",
        priority: 0,
    },
    {img: "date.jpg",
        title: "Go to the Date",
        place: "Restaurant",
        description: "Dating the most special person in my life is like honey for my heart",
        priority: 0,
    },
    {img: "football.jpg",
        title: "Go to play football",
        place: "Soccer Arena",
        priority: 0,
        description: "Its not enough just to support it but as well to join in to it and always do your best",
    },
    {img: "fridge.webp",
        title: "Buy a new fridge",
        place: "Media Markt",
        description: "My old fridge let me down most of the times, now it's time for an upgrade",
        priority: 0,
    },
    {img: "cleaning.jpg",
        title: "Clean the house",
        place: "Home",
        description: "Weekly cleaning, as well not my favorite thing to do but i have to do it",
        priority: 0,
    },
    {img: "project.jpg",
        title: "Finishing the project",
        place: "Home",
        priority: 0,
        description: "After the meeting now i have to continue on finishing the project",
    },
];
 let output = document.getElementById("output-cards");

const showCards = () =>{
for(let task of cards){
    let loopCard = 
     output.innerHTML +=`
 <div>
<div class="card">
    <div class="upCard"><p>Task</p><div><i class="fa-regular fa-bookmark"></i><i class="fa-solid fa-ellipsis-vertical"></i></div></div>
  <img src="./images/${task.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${task.title}</h5>
    <p>${task.description}.</p><hr>
    <p class="midParagraph"><i class="fa-solid fa-triangle-exclamation"></i> Priority level: <span class="result bg-success p-1">${task.priority}</span></p>
    <p class="midParagraph"><i class="fa-solid fa-location-dot"></i> Location: <span class="text-info">${task.place}</span></p><hr>
    <div class="twoBtn"><button class="deleteBtn bg-danger"><i class="fa-regular fa-trash-can"></i>Less important</button>
    <button class=" doneBtn bg-success"><i class="fa-regular fa-circle-check"></i>Importance</button></div>
  </div>
</div>
 </div>
 `
};
};
showCards();


let result =  document.querySelectorAll(".result")


const addPriority =()=>{
let btns = document.querySelectorAll(".doneBtn")
btns.forEach((btn, i) => {
    btn.addEventListener("click", ()=>{
    if(cards[i].priority < 5) {
        cards[i].priority++
        result[i].innerHTML =  cards[i].priority   
    };
      colorChange(i);
      
 });
});
};

addPriority();

const colorChange = (i)=>{
    if (cards[i].priority <= 1) { 
        result[i].classList.replace("bg-warning", "bg-success")
        result[i].classList.replace("bg-danger", "bg-success")
    } else if (cards[i].priority <= 3 ) { 
        result[i].classList.replace("bg-success", "bg-warning")
        result[i].classList.replace("bg-danger", "bg-warning")
    }else {  
        result[i].classList.replace("bg-warning", "bg-danger")
        result[i].classList.replace("bg-success", "bg-danger")
    };
     
};
let deleteBtns = document.querySelectorAll(".deleteBtn");
const removePriority = () =>{
deleteBtns.forEach((deleteBtn, i) => {
    deleteBtn.addEventListener("click", ()=>{
           if(cards[i].priority > 0){
            cards[i].priority--
            result[i].innerHTML =  cards[i].priority
            };colorChange(i)
    })  
});
}

removePriority();

function sortCards() {
  let sortBtn =  document.querySelector(".sort-btn");

    sortBtn.addEventListener("click", () =>{
        const comparePriority = (a, b) => a.priority - b.priority;
        const sortByPriority = cards.sort(comparePriority); 
        console.log(sortByPriority);
        
       let sortedCardsHTML = sortByPriority.map(cards =>{
       // here i tried to call the showCards function but didnt worked because of the for of loop 
        return  `
 <div>
<div class="card">
    <div class="upCard"><p>Task</p><div><i class="fa-regular fa-bookmark"></i><i class="fa-solid fa-ellipsis-vertical"></i></div></div>
  <img src="./images/${cards.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${cards.title}</h5>
    <p>${cards.description}.</p><hr>
    <p class="midParagraph"><i class="fa-solid fa-triangle-exclamation"></i> Priority level: <span class="result bg-success p-1">${cards.priority }</span></p>
    <p class="midParagraph"><i class="fa-solid fa-location-dot"></i> Location: <span class="text-info">${cards.place}</span></p><hr>
    <div class="twoBtn"><button class="deleteBtn bg-danger"><i class="fa-regular fa-trash-can"></i>Less important</button>
    <button class=" doneBtn bg-success"><i class="fa-regular fa-circle-check"></i>Importance</button></div>
  </div>
</div>
 </div>
 `}).join("") ;
 
//  and here to call colorChange() to update the .result color and didnt worked 
  output.innerHTML = sortedCardsHTML;
});
}

sortCards();

let resetPage = () =>{
let resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", ()=>{
location.reload(true);
});
};

resetPage()
