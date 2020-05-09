import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownDirective } from './materialize-css/directive/dropdown.directive';
import { FloatingActionButtonDirective } from './materialize-css/directive/floating-action-button.directive';
import { ValidateDirective } from './materialize-css/directive/validate.directive';
import { PaginationDirective } from './materialize-css/directive/pagination.directive';
import { FormSelectDirective } from './materialize-css/directive/form-select.directive';
import { TabsDirective } from './materialize-css/directive/tabs.directive';
import { DatepickerDirective } from './materialize-css/directive/datepicker.directive';
import { ModalDirective } from './materialize-css/directive/modal.directive';
import { MaskDateDirective } from './directive/mask-date.directive';
import { MaskMoneyDirective } from './directive/mask-money.directive';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { TimepikerDirective } from './materialize-css/directive/timepiker.directive';
import { DateTimepikerDirective } from './materialize-css/directive/date-timepiker.directive';



@NgModule({
  declarations: [
    DropdownDirective,
    FloatingActionButtonDirective,
    ValidateDirective,
    PaginationDirective,
    FormSelectDirective,
    TabsDirective,
    DatepickerDirective,
    ModalDirective,
    MaskDateDirective,
    MaskMoneyDirective,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    TimepikerDirective,
    DateTimepikerDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DropdownDirective,
    FloatingActionButtonDirective,
    ValidateDirective,
    PaginationDirective,
    FormSelectDirective,
    TabsDirective,
    DatepickerDirective,
    ModalDirective,
    MaskDateDirective,
    MaskMoneyDirective,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    TimepikerDirective,
    DateTimepikerDirective
  ]
})
export class SharedModule { }
