import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RequestForHourService } from '../service/request-for-hour.service';
import { RequestForIpService } from '../service/request-for-ip.service';
import { RequestForUserAgentService } from '../service/request-for-user-agent.service';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DasboardResolveService implements Resolve<any> {

  private services: Array<Observable<any>> = [];

  constructor(
    private hourService: RequestForHourService,
    private ipService: RequestForIpService,
    private userAgentService: RequestForUserAgentService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.services.push(this.hourService.countRequestForHour());
    this.services.push(this.ipService.countRequestForIp());
    this.services.push(this.userAgentService.countRequestForUserAgent());

    return forkJoin(this.services).pipe(map((response) => {
      return {
        requestForIp: response[1],
        requestForHour: response[0],
        requestForUserAgent: response[2]
      };
    }));
  }
}
