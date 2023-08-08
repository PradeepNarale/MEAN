import { Component, OnInit } from '@angular/core';
import { GetProductService } from '../services/get-product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: any[] = [];

  constructor(private getproduct: GetProductService, private router: Router) { }

  ngOnInit(): void {
    this.getCardData();
  }

  getCardData(): void {
    this.getproduct.getCardData().subscribe(
      (data) => {
        this.cards = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  onDelete(id: string) {
    this.getproduct.deleteProduct(id).subscribe(
      (response) => {
        console.log(response);
        this.cards = this.cards.filter(card => card._id !== id);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  goToUpdate(productId: string) {
    this.router.navigate(['/updateProduct', productId]);
  }
}

