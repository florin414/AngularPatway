import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit{
  @Input() title : string;
  @Input() color : string;
  public colorStyle: { [klass: string]: any; };

  ngOnInit(): void {
    this.colorStyle = {
      'background-color': this.color
    };
  }
}
