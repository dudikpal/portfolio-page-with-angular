import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  observer = new Subject();
  public subscribers = this.observer.asObservable();

  emitData(data: string) {
    this.observer.next(data);
    console.log('service:' + data)
  }

  constructor() { }
}
