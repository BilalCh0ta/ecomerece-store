let openDisplay ;
let opens= document.getElementById("opens")
function opens1(){
    opens.style.display ='block'
}



// view all earbuds 




let Earproducts = [
// earbuds 
    {name : 'Apple AirPods Pro (2nd generation) Type C',
    sPrice : 61999,
    price : 71000,
    category : "Eabuds",
    image : " images/products/airpord/pod1.webp" 
    },


    {name : 'Apple AirPods 3rd Generation Magsafe',
    sPrice : 50999,
    price : 62900,
    category : "Eabuds",
    image : " images/products/airpord/pod2.webp" 

},

    { name : 'Apple AirPods (2nd generation)',
    sPrice : 31999,
    price : 42000,
    category : "Eabuds",
    image : " images/products/airpord/pod3.webp" 
},

    { name : 'Apple AirPods Max',
    sPrice : 168999,
    price : 18400,
    category : "Eabuds",
    image : " images/products/airpord/pod4.webp" 
}

]
let mobProducts =[
    // Mobiles



    { name : 'Tecno Camon 30',
    sPrice : 50999,
    price : 55000,
    category : "Mobile",
    image : " images/products/mobiles/mob 1.webp" 

},


    { name : 'Tecno Spark 10C',
    sPrice : 23000,
    price : 27000,
    category : "Mobile",
    image : " images/products/mobiles/mob 2.webp" 

},
   
    
    
    

    { name : 'Tecno Pop 7',
    sPrice : 19000,
    price : 21000,
    category : "Mobile",
    image : " images/products/mobiles/mob 3.webp" 

},
    


    { name : 'Tecno Pova Neo',
    sPrice : 31000,
    price : 36000,
    category : "Mobile",
    image : " images/products/mobiles/mob 4.webp" 


}]



    // Laptop 
let lapProducts =[
    { name : 'Lenovo V15 G3 15. 6 Inches 12th Gen Core i3 DOS (4GB - 256GB SSD)',
    sPrice : 132000,
    price : 140000,
    category : "Laptop",
    image : " images/products/laptops/laptop 1.webp" 

},



    { name : 'HP Laptop 15S FQ5276NIA i3 12th Gen (4GB-256GB)',
    sPrice : 109999,
    price : 115000,
    category : "Laptop",
    image : " images/products/laptops/laptop 2.webp" 


},


    { name : 'Dell Latitude 3540 15.6 Inches 13th Gen Core i5 DOS (8GB - 256GB)',
    sPrice : 189999,
    price : 200000,
    category : "Laptop",
    image : " images/products/laptops/laptop 3.webp" 

},


    { name : 'HP Laptop EQ2180AU 15.6 Inches AMD Ryzen 5 (8GB RAM - 512GBSSD)',
    sPrice : 194999,
    price : 250000,
    category : "Laptop",
    image : " images/products/laptops/laptop 4.webp" 


}


]




// EARBUDS RENDER 

let earbuds = document.querySelector(".airpods-body")





function render(){
    for(let  i = 0 ; i < Earproducts.length; i++){
        earbuds.innerHTML += `   <div class="pod1 pod ">
          
        <div class="pdt-img">
    
        <a href="about.html"><img src="${Earproducts[i].image}" alt="" class="pod-img"></a>  
          
        </div>
    
    
        <p class="pdt-name ">${Earproducts[i].name}</p>
    
        <p class="pdt-dprice text-center"> <sup class="pdt-ddollar">$</sup> ${Earproducts[i].sPrice}</p>
    
        <p class="pdt-price text-center"> <s> <sup class="pdt-dollar">$</sup> ${Earproducts[i].price} </s></p>
    
        <div class="bc-btn d-flex  justify-content-center gap-3 mt-3">
    
          <div class="buy-btn "> <button class="buy">Buy Now</button> </div>
          <div class="cart-btn "> <button class="cart" onclick = "cartEarbuds(${i})"> Cart</button> </div>
    
    
        </div>
    
      
      </div>` 
    }
}

render()



// CART FUNCTION H EARBUDS KA 

let earbirdsPush ;
let items = JSON.parse(localStorage.getItem('cartItems'))
if(items === null){
    earbirdsPush = []
}else{
    earbirdsPush =items
    console.log(earbirdsPush);
}


function cartEarbuds(index){
    if(earbirdsPush.includes(Earproducts[index])){
        Earproducts[index].quantity += 1
    }else{
       Earproducts[index].quantity = 1
        earbirdsPush.push(Earproducts[index])
    }

    console.log(earbirdsPush);
}



function goCart(){
    localStorage.setItem('cartItems' ,JSON.stringify(earbirdsPush))
    window.location = 'cart.html'   
}

// EARBUDS RENDER 








// MOBILE RENDER 


// let mobiles  = document.querySelector(".mobile-body")

// for(let j = 0 ; j < mobProducts.length; j++){
// mobiles.innerHTML += `     <div class="pod1 pod ">
        
// <div class="pdt-img">

// <a href="about.html"><img src="${mobProducts[j].image}" alt="" class="pod-img"></a>  
  
// </div>


// <p class="pdt-name ">${mobProducts[j].name}</p>

// <p class="pdt-dprice text-center"> <sup class="pdt-ddollar">$</sup> ${mobProducts[j].sPrice}</p>

// <p class="pdt-price text-center"> <s> <sup class="pdt-dollar">$</sup> ${mobProducts[j].price}</s></p>

// <div class="bc-btn d-flex  justify-content-center gap-3 mt-3">

//   <div class="buy-btn "> <button class="buy">Buy Now</button> </div>
//   <div class="cart-btn  ><button class="cart" onclick = "cartMobiles()"> Cart</button> </div>


// </div>


// </div>`
// }


// // MOBILE RENDER 







// // LAPTOP RENDER 

// let Laptop = document.querySelector(".laptop-body")


// for(let k = 0 ; k < lapProducts.length; k++){
// Laptop.innerHTML += `   <div class="pod1 pod ">
        
// <div class="pdt-img">

// <a href="about.html"><img src="${lapProducts[k].image}" alt="" class="pod-img"></a>  
  
// </div>


// <p class="pdt-name ">${lapProducts[k].name}</p>

// <p class="pdt-dprice text-center"> <sup class="pdt-ddollar">$</sup> ${lapProducts[k].sPrice}</p>

// <p class="pdt-price text-center"> <s> <sup class="pdt-dollar">$</sup> ${lapProducts[k].price}</s></p>

// <div class="bc-btn d-flex  justify-content-center gap-3 mt-3">

//   <div class="buy-btn "> <button class="buy">Buy Now</button> </div>
//   <div class="cart-btn "> <button class="cart" onclick = "cartlaptops()"> Cart</button></div>


// </div>


// </div>`
// }
// LAPTOP RENDER 




