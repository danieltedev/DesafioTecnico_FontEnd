import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestForIp } from '../shared/model/request-for-ip';
import { RequestForHour } from '../shared/model/request-for-hour';
import { RequestForUserAgent } from '../shared/model/request-for-user-agent';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  requestForIpList: Array<RequestForIp>;
  requestForHourList: Array<RequestForHour>;
  requestForUserAgentList: Array<RequestForUserAgent>;

  constructor(
    private active: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.active.snapshot.data.dashboard);
    this.requestForIpList = this.active.snapshot.data.dashboard.requestForIp;
    this.requestForHourList = this.active.snapshot.data.dashboard.requestForHour;
    this.requestForUserAgentList = this.active.snapshot.data.dashboard.requestForUserAgent;
  }

}
