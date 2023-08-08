import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InsertProjectComponent } from './insert-project/insert-project.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsertProjectComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
