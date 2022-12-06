import { PreloadingStrategy, Route } from '@angular/router';
import { of } from 'rxjs';

export class PreloadingStrategyApp implements PreloadingStrategy {
  preload(route: Route, loadModule: Function) {
    return route.data && route.data['applyPreload'] ? loadModule() : of(null);
  }
}
