import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DairyHttpService } from '../service/dairy/dairy-http.service';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html',
  styleUrls: ['./dairy.component.css'],
})
export class DairyComponent implements OnInit {
  dairy: Dairy[] | undefined;
  milktype: MilkType | undefined;

  constructor(private router: Router, private service: DairyHttpService) {}

  ngOnInit(): void {
    this.blinkButtonOnDays();
    this.fetchAll();
  }

  fetchAll() {
    this.service.populateAllData().subscribe((response) => {
      this.dairy = response;
      console.log(response);
    });
  }

  deleteDairy(id: number) {
    console.log('delete method hit');
    this.service.removeDairy(id).subscribe((response) => {
      console.log('delete called for id ' + id);
      this.fetchAll();
    });
  }

  createNew() {
    this.router.navigate(['dairy-new', -1]);
  }

  updateTodo(id: number) {
    console.log('udpate method called');
    this.router.navigate(['dairy-new', id]);
  }

  blinkButtonOnDays() {
    let date = new Date();
    console.log('date is ' + date.getDay);
    let day = date.getDay.toString;
    console.log('day is ' + day);
  }
}

export class Dairy {
  constructor(
    public id: number,
    public rate: number,
    public purchaseDate: Date,
    public updateDate: Date,
    public updatedBy: string,
    public milkType: MilkType,
    public amount: number
  ) {}
}

export enum MilkType {
  Buffalo = 'Buffalo',
  Cow = 'Cow',
  Goat = 'Goat',
  PacketBuffalo = 'PacketBuffalo',
  PacketCow = 'PacketCow',
}
