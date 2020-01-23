import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface DialogData {
  description: any;
  data: any;
  speciality_code: number;
  speciality_name: string;
}

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent implements OnInit {
  public specialityForm = new FormGroup({
    speciality_code: new FormControl(this.data ? this.data.speciality_code : '',
      Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(1)])),
    speciality_name: new FormControl(this.data ? this.data.speciality_name : '', [Validators.required])
  });
  constructor(private apiService: ApiService, public dialogRef: MatDialogRef<DialogFormComponent>, @Inject(MAT_DIALOG_DATA) public data?: DialogData) { }

  ngOnInit() {
  }

  addSpeciality() {
    if (this.specialityForm.valid) {
      this.dialogRef.close(this.specialityForm.value);
    }
  }
  closeSpecialityFormDialog() {
    this.dialogRef.close();
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.specialityForm.controls[controlName].hasError(errorName);
  }
}
