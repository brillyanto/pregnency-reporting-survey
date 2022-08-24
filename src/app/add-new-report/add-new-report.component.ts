// import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';

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

  drugsArray: Array<any> = [
    { name: 'Cimzia', value: 'Cimzia' },
    { name: 'Levetiracetam', value: 'Levetiracetam' },
    { name: 'Briviact', value: 'Briviact' },
    { name: 'Vimpat', value: 'Vimpat' },
    { name: 'Keppra', value: 'Keppra' },
    { name: 'Xyrem', value: 'Xyrem' },
    { name: 'Others', value: 'Others' },
  ];

  multiStep = new FormGroup({
    patientDetails: new FormGroup({
      patient_initials: new FormControl(''),
      patient_dob: new FormControl(''),
      menstrual_date: new FormControl(''),
      estimated_dob: new FormControl(''),
    }),
    drugs: new FormArray([]),
    medicationArray: new FormArray([
      // initially it will be empty
      //  new FormGroup({
      //     drugName: new FormControl(''),
      //     dosage : new FormControl(''),
      //     dosageUnit : new FormControl(''),
      //     frequency : new FormControl(''),
      //     startMedicationDate : new FormControl(''),
      //     stopMedicationDate : new FormControl(''),
      //     indication : new FormControl('')
      // })
    ]),
  });

  onDrugsChange(e: any) {
    const drugsArrayTemp: FormArray = this.multiStep.get('drugs') as FormArray;
    const medArray: FormArray = this.multiStep.get(
      'medicationArray'
    ) as FormArray;

    if (e.target.checked) {
      drugsArrayTemp.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      drugsArrayTemp.controls.forEach((item) => {
        if (item.value == e.target.value) {
          drugsArrayTemp.removeAt(i);
          medArray.removeAt(i); // removing the med details at index i
          return;
        }
        i++;
      });
    }
    // console.log(drugsArrayTemp.value);
    if (e.target.checked) {
      const medication = new FormGroup({
        drugName: new FormControl(e.target.value),
        dosage: new FormControl(''),
        dosageUnit: new FormControl(''),
        frequency: new FormControl(''),
        startMedicationDate: new FormControl(''),
        stopMedicationDate: new FormControl(''),
        indication: new FormControl(''),
      });
      //this.medication.get('drugName')
      medArray.push(medication);
    } else {
    }
  }

  get drugs() {
    return this.multiStep.get('drugs') as FormArray;
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    // this.frequencies = [
    //   { name: 'Regular' },
    //   { name: 'Weekly' },
    //   { name: 'Monthly' },
    // ];
  }

  ngOnInit(): void {
    // this.step = 2;
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
    console.log(this.multiStep.value);
  }
  // alignCenter(currentStep: any) {}
}
