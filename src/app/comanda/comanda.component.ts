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

  OnProcessar() {
    let chopp = this.formPizzaria.value.chopp;

    let pizzas = this.formPizzaria.value.pizzas;

    let recheios = this.formPizzaria.value.recheios;

    let pessoas = this.formPizzaria.value.pessoas;

    let servico = this.formPizzaria.value.servico;

    let consumo = (chopp * 7.30) + (pizzas * 31.50) + (recheios * 5.90);
    let taxa = consumo * 0.10;
    let total = consumo;
    

    if (servico)
    {
       total = consumo + taxa;
    }
    
    let consumo_pessoa = total / pessoas;

    alert(`Consumo: R$ ${consumo.toFixed(2)} \n Serviços: R$ ${taxa.toFixed(2)} \n Total: R$ ${total.toFixed(2)} \n Por pessoa: R$ ${consumo_pessoa.toFixed(2)}`);

  }

}
