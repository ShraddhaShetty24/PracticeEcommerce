import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'product-crud',component:ProductCrudComponent
  },
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'footer',component:FooterComponent
  },
  {
    path:'navigation',component:NavigationComponent
  },
  {
    path:'login',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
