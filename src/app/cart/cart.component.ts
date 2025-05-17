import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

constructor(public service : RestaurantService){
  this.getService()
}

info:any

money:any

getService(){

setTimeout(() => {
  
  this.service.getBasket().subscribe((data:any) =>{

    this.info = data
    
    let counter = 0

    for(let i = 0; i < this.info.length; i++){

      counter = counter + data[i].product.price * data[i].quantity
      
        }

        this.money = counter
    
    })



}, 45);

}

basketUpdaterPLUS(quantity:any,id:any){

let object = {
    "quantity": quantity + 1,
    "price": 9.5,
    "productId": id
}


this.service.updateBasket(object).subscribe(data => {

this.getService()

})


}

basketUpdaterMINUS(quantity:any,id:any){

  let object = {
      "quantity": quantity - 1,
      "price": 9.5,
      "productId": id
  }
  
  
  this.service.updateBasket(object).subscribe(data => {

    this.getService()

  })
  


  }


  deleteProduct(id:any){

 this.service.deleteFromBasket(id).subscribe(data => {

  this.getService()

 })


    
  }

}
