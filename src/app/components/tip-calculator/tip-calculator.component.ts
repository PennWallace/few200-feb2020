import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css']
})
export class TipCalculatorComponent implements OnInit {


  billAmount = 20;
  tipPercentage = .2;

  constructor() { }

  ngOnInit() {
  }
  changeTipPercentageTo(amount: number) {
    this.tipPercentage = amount;
  }

  billAmountUpdated(amount: number) {
    this.billAmount = amount;
  }
}
