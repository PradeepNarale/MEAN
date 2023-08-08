import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetProductService } from '../services/get-product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: string = '';
  product: any = {
    title: '',
    subtitle: '',
    description: ''
  };
  constructor(
    private route: ActivatedRoute,
    private productService: GetProductService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getsingleProduct();
  }
  getsingleProduct() {
    this.productService.getSingle(this.id).subscribe(
      (data: any) => {
        this.product = data;
        console.log(this.product)
      },
      (error: any) => {
        console.error('Error fetching product details:', error);
      }
    );
  }
  updateProduct(): void {
    this.productService.updateProduct(this.id, this.product).subscribe(
      () => {
        console.log('Product updated successfully');
        this.router.navigate(['']);
      },
      (error: any) => {
        console.error('Error updating product:', error);
      }
    );
  }
}
