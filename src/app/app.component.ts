import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texto = 'ciudad de Madrid';
  id: any = 13;
  fecha = new Date();
  importe = 12346.678;
  aciertos = .0967654;

  actor = {
    nombre: 'Robert',
    apellidos: 'De Niro'
  }

  ngOnInit() {
    this.id = '000' + this.id;
  }

}
