import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  empleados = [
    {
      nombreCompleto: "Luis",
      salario: 2300,
      antiguedad: 32
    },
    {
      nombreCompleto: "Juan",
      salario: "1400",
      antiguedad: 30
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
