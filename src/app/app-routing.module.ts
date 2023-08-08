import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component'
import { InsertProjectComponent } from './insert-project/insert-project.component';
import { UpdateProductComponent } from './update-product/update-product.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'addproduct',
    component: InsertProjectComponent
  },
  {
    path: 'updateProduct/:id',
    component: UpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
