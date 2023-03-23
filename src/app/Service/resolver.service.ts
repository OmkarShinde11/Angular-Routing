import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Route, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { serverList } from '../servers/serverList';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any>{

  constructor(private serverService:ServerService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>| Promise<any> |any {
    return this.serverService.getServer(Number(route.params['id']))
  }
 
}
