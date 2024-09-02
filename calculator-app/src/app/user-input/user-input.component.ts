import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor (private investmentService: InvestmentService){}

enteredInitialInvestment = '0';
enteredAnnualInvestment = '0';
enteredExpectedReturn = '5';
enteredDuration = '10';

onSubmit(){
this.investmentService.calculateInvestmentResults({
  initialInvestment: + this.enteredInitialInvestment,
  duration: + this.enteredAnnualInvestment,
  expectedReturn: + this.enteredExpectedReturn,
  annualInvestment: + this.enteredDuration,
});

   this.enteredInitialInvestment = '0';
   this.enteredAnnualInvestment = '0';
   this.enteredExpectedReturn = '5';
   this.enteredDuration = '10';
}

}
