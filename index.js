// Remember to import the data and Dog class!
import dogsData from './data.js'
import Animal from './Dog.js'

const dogContainer = document.getElementById("dog-container")

const skipBtn = document.getElementById("btn-cross")
const heartBtn = document.getElementById("btn-heart")

let dog

let amountSwiped = 0
let amountLikes = 0
let amountReject = 0

// Names of the Dogs
let arrayDogs = dogsData.map(dog=> dog.name)


function render(){
    if(arrayDogs.length > 0){
        skipBtn.disabled = false;
        heartBtn.disabled = false;    
        
        // Save the name of the first dog
        const dogArrayName = arrayDogs.shift()
        
        // Search the name of the Dog in Data and save the info of that dog
        const nextDogData = dogsData.filter(dog=> dog.name===dogArrayName)
        
        // Create an instance class Animal (because it is the only element in the array so I use the [0])
        dog = new Animal(nextDogData[0])
        dogContainer.innerHTML = dog.getDogInfoHtml()
    }else{
         dogContainer.innerHTML = `
        <div class="end-text">
        <h2>End of Profiles</h2>
        <p>You have viewed all the ${amountSwiped} available profiles.</p>
        <h3>Total Likes: ${amountLikes} <img class="final-img" src="images/icon-heart.png"></h3>
        <h3>Total Dislikes: ${amountReject} <img class="final-img" src="images/icon-cross.png"></h3>
        <p>Come back soon for more dogs!🐶</p>
        </div>
        `
        skipBtn.style.display = "none";
        heartBtn.style.display = "none";
    }
}


skipBtn.addEventListener("click", function(){
    const imgContainer = document.querySelector(".container-img")
    imgContainer.innerHTML +=dog.getNopeHtml()
    imgContainer.style.animation = "moverIzq 1.5s ease-in 0.5s"
    
    amountReject +=1
    
    disableBtnRender()
    
    
})

heartBtn.addEventListener("click", function(){
    const imgContainer = document.querySelector(".container-img")
    imgContainer.innerHTML +=dog.getLikeHtml()  
    imgContainer.style.animation = "moverDer 1.5s ease-in 0.5s"
    
    amountLikes +=1
    
    disableBtnRender()
    
})

function disableBtnRender(){
    skipBtn.disabled = true;
    heartBtn.disabled = true;
    
    amountSwiped +=1
    
    setTimeout(()=>{
        render()
    },1500)
}

render()