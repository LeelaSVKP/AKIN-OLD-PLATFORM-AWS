import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private updateAdminAnalyticsSubject = new Subject<void>();
  public changeHomeMenuSubject = new Subject<string>();
  updateAnalyticsData$ = this.updateAdminAnalyticsSubject.asObservable();
  changeHomeMenu$ = this.changeHomeMenuSubject.asObservable();

  constructor() { }

  updateAnalyticsData() {
    this.updateAdminAnalyticsSubject.next();
  }

}
