import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-insert-project',
  templateUrl: './insert-project.component.html',
  styleUrls: ['./insert-project.component.css']
})
export class InsertProjectComponent {
  title: string = '';
  subtitle: string = '';
  description: string = '';

  constructor(private http: HttpClient ,  private router: Router) { }

  onSubmit() {
    const product =
    {
      title: this.title,
      subtitle: this.subtitle,
      description: this.description
    };
    this.http.post('http://localhost:3005/addproduct', product)
      .subscribe(
        (response) => {
          console.log(response);
          this.title = '';
          this.subtitle = '';
          this.description = '';
          this.router.navigate(['']);
        },
        (error) => {
          console.error(error);
          window.alert("ALL FIELDS ARE MEDETORY")
        }
      );
  }
  validateInput(event: any): void {
    const inputValue = event.target.value;
    const pattern = /^[a-zA-Z\s]*$/; 
    if (!pattern.test(inputValue)) {
      event.target.value = inputValue.replace(/[^a-zA-Z\s]/g, '');
    }
  }

}


