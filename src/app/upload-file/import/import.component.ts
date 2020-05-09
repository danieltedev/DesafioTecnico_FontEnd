import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessService } from '../../shared/service/access.service';
import { Materialize } from '../../shared/materialize-css/materialize';
import { Toast } from '../../shared/materialize-css/interfaces/toast';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  form: FormGroup;

  private msgSave: Toast = {
    html: 'Importado com sucesso!',
    classes: 'green'
  };

  private msgFail: Toast = {
    html: 'Falha ao efetuar esta solicitação!',
    classes: 'red'
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private active: ActivatedRoute,
    private accessService: AccessService
  ) { }

  private createForm() {
    this.form = this.fb.group({
      fileSource: [''],
      fileName: ['', Validators.required]
    });
  }

  onFileChange(event: Event): void {
    const file: File = (event.target as any).files.item(0);
    this.form.patchValue({ fileSource: file, fileName: file.name });
  }

  save(): void {
    const file: File = this.form.get('fileSource').value;
    this.form.markAsDirty();
    if (this.form.valid) {
      this.accessService.uploadFile(file).subscribe(data => {
        Materialize.toast(this.msgSave);
        this.form.reset({ fileSource: '' });
        Materialize.updateTextFields();
      }, error => {
        Materialize.toast(this.msgFail);
        console.log(error);
      });
    }
  }

  cancel(): void {
    this.router.navigateByUrl('/upload-file/filter');
  }

  ngOnInit(): void {
    this.createForm();
  }

}
