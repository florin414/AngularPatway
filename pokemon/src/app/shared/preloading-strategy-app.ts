import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { flatMap, of, timer } from 'rxjs';

@Injectable()
export class PreloadingStrategyApp implements PreloadingStrategy {
  preload(route: Route, loadModule: Function){
    if (route.data && route.data['preload']) {
      var delay:number=route.data['delay']
      console.log('preload called on '+route.path+' delay is '+delay);
      return timer(delay).pipe(
        flatMap( _ => {
          console.log("Loading now "+ route.path);
          return loadModule() ;
        }));
    } else {
      console.log('no preload for the path '+ route.path);
      return of(null);
    }
  }
}
