import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Util } from '../util/util';
import { AccessService } from '../service/access.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccessFilterResolveService implements Resolve<any> {

  constructor(
    private accessService: AccessService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const page = Util.isEmpty(route.paramMap.get('page')) ? 0 : (route.paramMap.get('page') as any as number) - 1;
    return this.accessService.pagination(page, 10);
  }
}
