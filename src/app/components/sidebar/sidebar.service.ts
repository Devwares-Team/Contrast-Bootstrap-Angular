import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  sidebarState = new Subject();
  textColor = new Subject<string>();
  backgroundColor = new Subject<string>();

  constructor() {}
}
