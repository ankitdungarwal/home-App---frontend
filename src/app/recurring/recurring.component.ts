import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recurring',
  templateUrl: './recurring.component.html',
  styleUrls: ['./recurring.component.css'],
})
export class RecurringComponent implements OnInit {
  recurring: Recurring[] = [];

  constructor() {}

  ngOnInit(): void {}
}

export class Recurring {
  constructor(
    public id: number,
    public topic: string,
    public natureOfCost: string,
    public personTargeted: string,
    public personCreatedTheNote: string,
    public notes: string,
    public remarks: string,
    public targetDate: Date,
    public creationDate: Date,
    public frequencyOfRepetition: string,
    public col: string,
    public col2: string,
    public col3: string,
    public col4: string,
    public col5: string,
    public col6: string,
    public col7: string,
    public col8: string,
    public col9: string
  ) {}
}
