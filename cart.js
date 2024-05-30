let cartitems = JSON.parse(localStorage.getItem("cartItems"))
console.log(cartitems);

let store = document.querySelector(".airpods-body")
function renders(){
    for(let  i = 0 ; i < cartitems.length; i++){
        if(cartitems != null){
            store.innerHTML += `   <div class="pod1 pod ">
          
            <div class="pdt-img">
        
            <a href="about.html"><img src="${cartitems[i].image}" alt="" class="pod-img"></a>  
              
            </div>
        
        
            <p class="pdt-name ">${cartitems[i].name}</p>
        
            <p class="pdt-dprice text-center"> <sup class="pdt-ddollar">$</sup> ${cartitems[i].sPrice}</p>
        
            <p class="pdt-price text-center"> <s> <sup class="pdt-dollar">$</sup> ${cartitems[i].price} </s></p>
    
            <p class="pdt-price text-center"> 
             <button class = "add" onclick = "addq(${i})">+</button> &nbsp;
             ${cartitems[i].quantity} 
             &nbsp;
             <button class = "sub" onclick = "subq(${i})">-</button>
    
             </p>
    
        
            <div class="bc-btn d-flex  justify-content-center gap-3 mt-3">
        
              <div class="buy-btn "> <button class="buy">Buy Now</button> </div>
            
              
              </div>
              <button class= "delete " onclick = "deletes(${i})">Delete item</button>
        
          
          </div>`  
        }
        else{
            store.innerHTML =`<h1>no item</h1>`
        }
        
    }
}

renders()


function addq(index){
    store.innerHTML = ""
    cartitems[index].quantity += 1
    renders()
}


function subq(index){
    store.innerHTML = ""

    if(cartitems[index].quantity == 1){
       cartitems.splice(index,1)

    }
    else{
    cartitems[index].quantity -= 1
    }
    renders()

    
}


function deletes(index){
    store.innerHTML = ""
cartitems.splice(index ,1)
renders()
// localStorage.removeItem(cartitems.splice(index ,1))
// localStorage.clear(cartitems[index])
localStorage.removeItem(cartitems[index])
}



window.onbeforeunload = function() {
    localStorage.setItem('cartItem' , JSON.stringify(cartitems));
};