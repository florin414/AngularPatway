import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DirtyComponent } from 'src/app/shared/dirty-component';


@Injectable({
  providedIn: 'root'
})
export class DirtyCheckGuard implements CanDeactivate<DirtyComponent> {

  canDeactivate(
    component: DirtyComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.canDeactivate()) {
      return confirm('If you quit, you will lose your changes.');
    } else {
      return true;
    }
  }

}
