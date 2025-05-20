import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private api :RestaurantService){}

password !: string
phoneNumber !: string
email !: string

object = {

  "phoneNumber": "string",
  "password": "string",
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "role": "string"
  
}
  
reg(){

  this.object.password = this.password
  this.object.phoneNumber = this.phoneNumber
  this.object.email = this.email
  this.api.registerUser(this.object).subscribe()

}

lPassword !: string
lEmail !: string

lObject = {

  "password": "string",
  "email": "string",
  
}

log(){
  
  this.lObject.password = this.lPassword
  this.lObject.email = this.lEmail
  this.api.loginUser(this.lObject).subscribe(data => {
    console.log(data)
  })

}

}