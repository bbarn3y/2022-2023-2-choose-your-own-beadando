import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  routeToTask(index: number, way: 'A' | 'B') {
    this.router.navigateByUrl(
      `/tasks/${index}/${way}`
    );
  }
}
