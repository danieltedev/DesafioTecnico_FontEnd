import { Component, OnInit } from '@angular/core';
import { Materialize } from './shared/materialize-css/materialize';
import { Title } from '@angular/platform-browser';
import { LoadInterceptorService } from './shared/service/load-interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  option: any = {
    opacity: 0.5,
    inDuration: 250,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true,
    dismissible: true,
    startingTop: '4%',
    endingTop: '10%'
  };

  constructor(private title: Title) {}

  ngOnInit(): void {
    console.log('iniciando a aplicação');
    this.title.setTitle('Import File Access');
    Materialize.AutoInit();
    LoadInterceptorService.status.subscribe((s: boolean) => {

      this.option = {
        open: s
      };
    });
  }
}
