import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dairy, MilkType } from '../dairy/dairy.component';
import { DairyHttpService } from '../service/dairy/dairy-http.service';

@Component({
  selector: 'app-dairy-new',
  templateUrl: './dairy-new.component.html',
  styleUrls: ['./dairy-new.component.css'],
})
export class DairyNewComponent implements OnInit {
  dairyNew!: Dairy;
  id: number = 0;

  constructor(
    private service: DairyHttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.voidInit();
    this.id = this.route.snapshot.params['id'];
    if (this.id != -1) {
      this.service.getById(this.id).subscribe((data) => (this.dairyNew = data));
    }
    console.log(this.dairyNew);
  }

  voidInit() {
    this.dairyNew = new Dairy(
      0,
      0,
      new Date(12 / 2 / 21),
      new Date(12 / 2 / 21),
      '',
      MilkType.Cow,
      //new MilkMan(47, '', '', '', '', '', ''),
      0
    );
  }

  submit(dairyNew: Dairy) {
    console.log(dairyNew);
    if (this.dairyNew.id === -1 || this.dairyNew.id === 0) {
      console.log('new id is ' + this.dairyNew.id);
      this.dairyNew.updateDate = new Date();
      this.service.createNew(dairyNew).subscribe((response) => {
        console.log('test success');
        console.log(response);
        this.router.navigate(['dairy']);
      });
    } else {
      console.log('new id is ' + this.dairyNew.id);
      this.service
        .updateDairy(this.dairyNew, this.dairyNew.id)
        .subscribe((data) => {
          //console.log('inside service update method'),
          this.router.navigate(['dairy']);
        });
    }
  }
}
