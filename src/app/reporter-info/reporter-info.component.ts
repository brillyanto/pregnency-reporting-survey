import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporter-info',
  templateUrl: './reporter-info.component.html',
  styleUrls: ['./reporter-info.component.scss'],
})
export class ReporterInfoComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      reporterFullname: new FormControl(null),
      email: new FormControl(null),
      mobile: new FormControl(null),
      consent__checkbox: new FormControl(null),
    });
  }
  onSubmit() {
    console.log(this.reactiveForm);
    this.router.navigate(['/add-new-report']);
  }
}
