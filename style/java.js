
    let Foods = {
                  
                  Food:["Pizza","Burger","Swarma"],
                  Time:[10,20,30],
                  Price:[100,200,300]
                  
                     };

    let shopOpen = true;

  function time(ms){


  return new Promise((resolve,reject)=>{
       
       
    if(shopOpen){

       setTimeout(resolve,ms)

    }

    else{
       reject(document.write("Shop is Closed"))

    }

  })
}


   async function result(){

    try{

     await time(1000);
     document.write(`${Foods.Food[2]} was Selected`)
     document.write("<br>")

     await time(1000);
     document.write("Production Started")
     document.write("<br>")


     await time(1000);
     
     document.write("Your Order Has been Chopped")
     document.write("<br>")

     await time(2000);
     document.write(`Your Food is ${Foods.Food[3]} and Price is ${Foods.Price[1]}`)
     document.write("<br>")

     await time(4000);
     document.write("Your Order Will be Delivered Successfully")
     document.write("<br>")

    }

    catch(error){
     document.write("Customer Left")  

    }

   }

  result();