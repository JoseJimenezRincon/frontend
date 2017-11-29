import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directives',
  templateUrl: './cmp-directives.component.html',
  styleUrls: ['./cmp-directives.component.css']
})
export class CmpDirectivesComponent implements OnInit {
  
  numeros = [1,2,3,4];
  mostrar = true;

  constructor() { }

  ngOnInit() {
  }

}
