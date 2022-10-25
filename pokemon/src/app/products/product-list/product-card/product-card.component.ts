import { Product } from './../../../models/product/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() productCard!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
