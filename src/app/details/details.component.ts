import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

constructor(public info : ActivatedRoute, public service : RestaurantService){

  this.getParamsData()

}

id1:any

getParamsData(){

this.info.params.subscribe(data => {

this.id1 = data

this.returnToGetId()

})

}


img:any
name:any
price:any
spiciness:any
veg:any
nuts:any


returnToGetId(){

this.service.getApi().subscribe((data:any) => {
console.log(data)
for(let i = 0; i < data.length; i++){

if(data[i].id == this.id1.info){

this.img = data[i].image
this.name = data[i].name
this.price = data[i].price
this.spiciness = data[i].spiciness
this.veg = data[i].vegeterian
this.nuts = data[i].nuts

}

}

})

}

addToCart(){


  let object = {
    "quantity": 1,
    "price": this.price,
    "productId": this.id1.info
  } 


  this.service.getBasket().subscribe((data:any) => { //if already added it doesnt add more of the same
  
  
  let checkIfItsAlreadyInTheBasket = data.some((item:any) => item.product.name == this.name)
  
  if(checkIfItsAlreadyInTheBasket){
  
  console.log("already added")
  
  let ptag = document.querySelector('.ptag1');
  if (ptag) {
    ptag.classList.remove("animate");
  
    setTimeout(() => {
      ptag.classList.add("animate");
    }, 10);
  } else {
    console.error("Element with ID 'ptag' not found");
  }
  
  }
  
  else{
  
  this.service.addToBasket(object).subscribe()
  
  let ptag = document.querySelector('.ptag2');
  if (ptag) {
    ptag.classList.remove("animate");
  
    setTimeout(() => {
      ptag.classList.add("animate");
    }, 10);
  } else {
    console.error("Element with ID 'ptag' not found");
  }
  
  }
  
  })
  
  
  }

}
