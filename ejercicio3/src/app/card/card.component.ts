import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  contador:number = 0;
  aumentar(){
      this.contador++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
