import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "cart", component: CartComponent },
  { path: "details/:info", component: DetailsComponent },
  { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }