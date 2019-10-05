import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'has-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  formPizzaria: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formPizzaria = this.formBuilder.group({
      chopp : this.formBuilder.control(''),
      pizzas : this.formBuilder.control(''),
      recheios : this.formBuilder.control(''),
      pessoas : this.formBuilder.control(''),
      servico : this.formBuilder.control(false)
    });
  }

}
