import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  email:string = ''
  constructor() { }

  ngOnInit(): void {
  }

  getForm(){
    console.log('Has enviado el email a la direccion: ' + this.email)
  }

}
