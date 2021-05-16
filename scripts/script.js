const cenikBtns = document.querySelectorAll(".karta-button")
const cenikNavs = document.querySelectorAll(".cenik-nav")
const cenikCallBtns = document.querySelectorAll(".cenik-call-btn > a")    
const ceniky = document.querySelectorAll(".cenik")
const navs = document.querySelectorAll("nav a")

for(let cenikBtn of cenikBtns){
    cenikBtn.addEventListener("click", function(){
        let cenik = cenikBtn.parentElement.firstElementChild
        cenik.classList.toggle("cenik-show")
        console.log("Bang")
        
        
    })
}

for(let cenik of ceniky){
        cenik.addEventListener("click", function(e){
            cenik.classList.remove("cenik-show") 
        })
}
for(let nav of navs){
    nav.addEventListener("click", function(e){
        for(let cenik of ceniky){
                cenik.classList.remove("cenik-show") 

            }   
    })
} 

for (let cenikNav of cenikNavs){
    cenikNav.addEventListener("click", function(){
        for(let cenikBtn of cenikBtns){
            for(let cenik of ceniky){
                cenik.classList.add("cenik-show")
            }
        }
    })}

for(let cenikCallBtn of cenikCallBtns){
    cenikCallBtn.addEventListener("click", function(e) {
        e.stopPropagation();
    })
}