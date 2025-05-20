import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

constructor(public myservice : RestaurantService){

this.getInfo()

this.loadTheIds()

}

objectData:any

getInfo(){

this.myservice.getApi().subscribe(data => {

this.objectData = data

})

}

addToCart(id:any, price:any, productId:any, name1:any){


let object = {
  "quantity": 1,
  "price": price,
  "productId": productId
}

this.myservice.getBasket().subscribe((data:any) => { //if already added it doesnt add more of the same


let checkIfItsAlreadyInTheBasket = data.some((item:any) => item.product.name == name1)

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

this.myservice.addToBasket(object).subscribe()

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

categoryData:any

loadTheIds(){

this.myservice.getCategoryAllIds().subscribe(data => {

this.categoryData = data

})

}


returnCategoryId(id:any){

this.myservice.getTheIdToSaveHere(id)

this.getTheIdsAgain()

}

CategoryObject:any


getTheIdsAgain(){

this.myservice.getCategoryOneId().subscribe((data:any) => {

this.objectData = data.products
  
})

}

AllButton(){ // category change

let loadedCards = document.getElementById("section2")
let CardsThatIWantToLoad = document.getElementById("section3")

this.getInfo()

}

spiciness:any = "-1"

nuts:string = "false"

veg:string = "false"

filtering(){

  if(this.spiciness == -1){
    
    this.myservice.getFiltered(this.veg, this.nuts).subscribe(data => {

      this.objectData = data

    })

  }
  else{

    this.myservice.getFilteredSpice(this.veg, this.nuts, this.spiciness).subscribe(data => {

      this.objectData = data

    })

  }



}

resetFilter(){

this.spiciness = "-1"

this.nuts = "false"

this.veg = "false"

this.AllButton()

}

}
