// import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// interface Frequency {
//   name: string;
// }

@Component({
  selector: 'app-add-new-report',
  templateUrl: './add-new-report.component.html',
  styleUrls: ['./add-new-report.component.scss'],
})
export class AddNewReportComponent implements OnInit {
  // reactiveForm: FormGroup;
  // frequencies: Frequency[];
  // selectedFrequency: Frequency;
  mainEl: any;
  step = 1;
  currentStep: any;
  el: any;
  selectedValues: string[] = [];
  multiStep = new FormGroup({
    patientDetails: new FormGroup({
      patient_initials: new FormControl(''),
      patient_dob: new FormControl(''),
      menstrual_date: new FormControl(''),
      estimated_dob: new FormControl(''),
    }),
    // patientDetails: new FormGroup({
    //   patient_initials: new FormControl(null),
    //   patient_dob: new FormControl(null),
    //   menstrual_date: new FormControl(null),
    //   estimated_dob: new FormControl(null),
    // }),
  });

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    // this.frequencies = [
    //   { name: 'Regular' },
    //   { name: 'Weekly' },
    //   { name: 'Monthly' },
    // ];
  }

  ngOnInit(): void {
    // this.step = 5;
    this.el = this.elRef.nativeElement.querySelector('.form');
    this.mainEl = this.elRef.nativeElement.querySelector('.main');
    // this.reactiveForm = new FormGroup({});
    console.log(this.multiStep);
  }
  onClickNext() {
    if (this.step === 5) {
      return;
    } else {
      this.step = this.step + 1;
      if (this.step > 4) {
        this.renderer.addClass(this.el, 'align__center');
        this.renderer.addClass(this.mainEl, 'max-height');
      }
    }
  }
  onClickPrev() {
    if (this.step === 1) {
      console.log('you are on the first section');
      return;
    } else {
      this.step = this.step - 1;
      if (this.step <= 4) {
        this.renderer.removeClass(this.el, 'align__center');
        this.renderer.removeClass(this.mainEl, 'max-height');
      }
    }
  }
  onSubmit() {
    console.log('hello');
  }
  // alignCenter(currentStep: any) {}
}
