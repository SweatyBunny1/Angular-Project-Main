import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor( private http : HttpClient) {}

  getApi(){

return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetAll`)

  }

  registerUser(info:any){

    console.log(info)
return this.http.post('https://rentcar.stepprojects.ge/api/Users/register', info)

  }

   loginUser(info:any){
console.log(info)
return this.http.post('https://rentcar.stepprojects.ge/api/Users/login', info)

  }

  getBasket(){

return this.http.get(`https://restaurant.stepprojects.ge/api/Baskets/GetAll`)
    
  }

  updateBasket(info:any){

return this.http.put(`https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket`, info)

  }

  addToBasket(info:any){

return this.http.post(`https://restaurant.stepprojects.ge/api/Baskets/AddToBasket`, info)

  }

  deleteFromBasket(id:any){

return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)

  }

  getCategoryAllIds(){

return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetAll`)

  }

  id2:any

  getCategoryOneId(){

return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${this.id2}`)
    
  }

  getTheIdToSaveHere(id:any){

    this.id2 = id

  }

  getFilteredSpice(veg:any, nuts:any, spice:any){

return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${veg}&nuts=${nuts}&spiciness=${spice}`)

  }

  getFiltered(veg:any, nuts:any){

return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${veg}&nuts=${nuts}`)

  }


}
