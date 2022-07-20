import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dairy, DairyComponent } from 'src/app/dairy/dairy.component';

@Injectable({
  providedIn: 'root',
})
export class DairyHttpService {
  dairy: Dairy | undefined;
  constructor(private http: HttpClient) {}

  populateAllData() {
    return this.http.get<Dairy[]>('http://localhost:8086/dairy/all');
  }

  removeDairy(id: number) {
    return this.http.delete(`http://localhost:8086/dairy/${id}`);
  }

  createNew(dairy: Dairy) {
    console.log(dairy.purchaseDate + ' ' + dairy.rate);
    return this.http.post('http://localhost:8086/dairy/create', dairy);
  }

  updateDairy(dairy: Dairy, id: number) {
    console.log('inside udpateMethod for Dairy');
    return this.http.put(`http://localhost:8086/dairy/${id}`, dairy);
  }

  getById(id: number) {
    return this.http.get<Dairy>(`http://localhost:8086/dairy/${id}`);
  }
}
