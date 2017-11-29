import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cmp-formulario',
  templateUrl: './cmp-formulario.component.html',
  styleUrls: ['./cmp-formulario.component.css']
})
export class CmpFormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private form: FormBuilder) { }

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nombre: new FormControl('Jose', Validators.required),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   contrasena: new FormControl,
    // });

    this.formulario = this.form.group({
      nombre: ['Jose', [Validators.required, this.esStark]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
    });
  }

  enviarFormulario() {
    console.log(this.formulario);
  }

  esStark(control:FormControl){
    const starks = ['rickon', 'bran', 'arya', 'robb', 'sansa'];
    if (starks.indexOf(control.value.toLowerCase()) != -1){
      return null;
    }
    return {invalido: true};
  }

}
