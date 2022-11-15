import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { DirtyCheckComponent } from 'src/app/shared/dirty-check-component';

@Injectable({
  providedIn: 'root',
})
export class DirtyCheckGuard implements CanDeactivate<DirtyCheckComponent> {
  canDeactivate(component: DirtyCheckComponent): boolean {
    return component.canDeactivate()
      ? confirm('If you quit, you will lose your changes.')
      : true;
  }
}
