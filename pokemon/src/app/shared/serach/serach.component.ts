import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css'],
})
export class SerachComponent{
  public input: string;
  constructor( private router: Router) {}

  public search(): void {
    this.router.navigate(['/pokemon', this.input]);
  }
}
