import { Component, OnInit } from '@angular/core';
import { DairyHttpService } from 'src/app/service/dairy/dairy-http.service';
import { Dairy } from '../../dairy.component';

@Component({
  selector: 'app-dairy-monthly-tracker',
  templateUrl: './dairy-monthly-tracker.component.html',
  styleUrls: ['./dairy-monthly-tracker.component.css'],
})
export class DairyMonthlyTrackerComponent implements OnInit {
  year: number = 1970;
  month: number = 8;
  monthlyCalculation: MonthlyCalculation[] | undefined;
  cowRate: number = 0;
  cowConsumption: number = 0;
  buffalowRate: number = 0;
  buffaloConsumption: number = 0;
  goatRate: number = 0;
  goarConsumpion: number = 0;
  packetCowRate: number = 0;
  packetCowConsumption: number = 0;
  packetBuffaloRate: number = 0;
  packetBuffaloConsumption: number = 0;
  rateToDisplay: boolean = false;
  total: string = '';
  constructor(private service: DairyHttpService) {}

  ngOnInit(): void {}

  fetch() {
    console.log('year:' + this.year + 'month:' + this.month);
    this.service
      .fetchDetailsForMilkConsumed(this.year, this.month)
      .subscribe((response) => {
        console.log('got something');
        this.monthlyCalculation = response;
        console.log(this.monthlyCalculation);
        this.cowConsumption = this.monthlyCalculation[0].cowMilkConsumed;
        this.buffaloConsumption =
          this.monthlyCalculation[0].buffaloMilkConsumed;
        this.goarConsumpion = this.monthlyCalculation[0].goatMilkConsumed;
        this.packetCowConsumption =
          this.monthlyCalculation[0].packetCowMilkConsumed;
        this.packetBuffaloConsumption =
          this.monthlyCalculation[0].packetBuffaloMilkConsumed;
      });
  }

  udpateRate() {
    console.log('update rate method called');
    this.rateToDisplay = true;
    this.service
      .updateRate(
        this.cowRate,
        this.buffalowRate,
        this.goatRate,
        this.packetCowRate,
        this.packetBuffaloRate,
        this.year,
        this.month
      )
      .subscribe((response) => {
        console.log('seems to have udpated the rates :) happy coding');
      });
    this.total =
      'Consumption report COW: Units:' +
      this.cowConsumption +
      ' Rate:' +
      this.cowRate +
      'Totals: ' +
      this.cowConsumption * this.cowRate +
      '\n' +
      'BUFFALO: Units:' +
      this.buffaloConsumption +
      ' Rate:' +
      this.buffalowRate +
      'Totals: ' +
      this.buffaloConsumption * this.buffalowRate +
      '\n' +
      'GOAT: Units:' +
      this.goarConsumpion +
      ' Rate:' +
      this.goatRate +
      'Totals: ' +
      this.goarConsumpion * this.goatRate +
      '\n' +
      'Packet COW: Units:' +
      this.packetCowConsumption +
      ' Rate:' +
      this.packetCowRate +
      'Totals: ' +
      this.packetCowConsumption * this.packetCowRate +
      '\n' +
      'Packet BUFFALO: Units:' +
      this.packetBuffaloConsumption +
      ' Rate:' +
      this.packetBuffaloRate +
      'Totals: ' +
      this.packetBuffaloConsumption * this.packetBuffaloRate +
      '\n';
  }
}

export class MonthlyCalculation {
  constructor(
    public id: number,
    public isPaid: boolean,
    public month: number,
    public year: number,
    public paymentDate: Date,
    public paidTo: string,
    public paymentMode: PaymentMode,
    public cowMilkConsumed: number,
    public cowMilkRate: number,
    public buffaloMilkConsumed: number,
    public buffaloMilkRate: number,
    public goatMilkConsumed: number,
    public goatMilkRate: number,
    public packetCowMilkConsumed: number,
    public packetCowMilkRate: number,
    public packetBuffaloMilkConsumed: number,
    public packetBuffaloMilkRate: number,
    public col1: string,
    public col2: string,
    public col3: string,
    public col4: string,
    public col5: string,
    public col6: string,
    public col7: string,
    public col8: string,
    public col9: string,
    public col10: string
  ) {}
}

enum PaymentMode {
  Cash,
  Credit,
  Card,
  AdvancePayment,
}
