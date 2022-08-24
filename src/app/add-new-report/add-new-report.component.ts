// import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthInterceptor } from '../interceptors/auth.interceptor';

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
  // <<<<<<< HEAD
  activeIndex = 1;
  // =======

  public surveyJson = {
    patient: {
      patientInitials: 'VM',
      patientDateOfBirth: '22-08-2022 09:06:55',
      estimatedBirthDate: '22-08-2022 09:06:55',
      firstDayLMP: '22-08-2022 09:06:55',
    },
    product: [
      {
        medicationTakenByPatient: ['CIMZIA'],

        regimen: {
          drugName: 'Prothiaden',
          indication: 'AHUS',
          dose: '1',
          units: 'mg',
          frequency: 'regular',
          startDate: '22-08-2022 09:06:55',
          endDate: '22-08-2022 09:06:55',
        },
      },
    ],
    medicalHistory: {
      patientMedicalHistory: 'value',
    },
    complications: {
      previousPregnancyComplications: ['Unknown'],
      pregnancyOutcomeDate: '22-08-2022 09:06:55',
      pregnancyOutcome: ['Miscarriage'],
      height: 123,
      heightUnits: 'CM',
      weight: 80,
      weightUnits: 'Kilogram',
      newBornGender: 'Male',
      apgarScore: '100',
      newBornSufferedCongInfo: 'yes',
      riskFactorsForReportedMalformations: 'Miscarriage',
      congMalfRelatedToMedications: 'yes',
    },
  };

  // >>>>>>> 4784c0793ea257eed09d681e47d88d70b5dd0bb8
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
    medicalHistory: new FormGroup({
      patientMedicalHistory: new FormControl(''),
    }),
    complications: new FormGroup({
      previousPregnancyComplications: new FormControl(''),
      pregnancyOutcomeDate: new FormControl(''),
      pregnancyOutcome: new FormControl(''),
      newBornGender: new FormControl(''),
      height: new FormControl(''),
      heightUnits: new FormControl(''),
      weight: new FormControl(''),
      weightUnits: new FormControl(''),
      apgarScore:new FormControl(''),
      newBornSufferedCongInfo :new FormControl(''),
      riskFactorsForReportedMalformations :new FormControl(''),
      congMalfRelatedToMedications :new FormControl(''),
    })

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

  constructor(
    private http: HttpClient,
    private router: Router,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
    // this.frequencies = [
    //   { name: 'Regular' },
    //   { name: 'Weekly' },
    //   { name: 'Monthly' },
    // ];
    //console.log(JSON.stringify(this.surveyJson));
  }

  ngOnInit(): void {
    // this.step = 2;
    this.el = this.elRef.nativeElement.querySelector('.form');
    this.mainEl = this.elRef.nativeElement.querySelector('.main');
    // this.reactiveForm = new FormGroup({});
    // console.log(this.multiStep);
    // this.activeIndex = this.step;
  }
  onClickNext() {
    this.activeIndex++;
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
    if (this.activeIndex > 1) {
      this.activeIndex--;
    }

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

    this.surveyJson.patient.estimatedBirthDate = this.multiStep.value.patientDetails?.estimated_dob || '';
    this.surveyJson.patient.firstDayLMP = this.multiStep.value.patientDetails?.menstrual_date || '';
    this.surveyJson.patient.patientDateOfBirth = this.multiStep.value.patientDetails?.patient_dob || '';
    this.surveyJson.patient.patientInitials = this.multiStep.value.patientDetails?.patient_initials || '';

    this.surveyJson.product[0].medicationTakenByPatient = this.multiStep.value.drugs || [];

    this.multiStep.value.medicationArray?.forEach((regimenItem: any, i) => {
      // console.log('regimen +',i);
      // console.log(regimenItem);
      // const NewRegimen = {
      //   drugName:regimenItem.drugName,
      //   dose: regimenItem.dosage,
      //   units:regimenItem.dosageUnit,
      //   frequency: regimenItem.frequency,
      //   startDate: regimenItem.startMedicationDate,
      //   endDate: regimenItem.stopMedicationDate,
      //   indication: regimenItem.indication
      // };
      // console.log(NewRegimen);
      this.surveyJson.product[0].regimen.drugName = regimenItem.drugName;
      this.surveyJson.product[0].regimen.dose = regimenItem.dosage;
      this.surveyJson.product[0].regimen.units = regimenItem.dosageUnit;
      this.surveyJson.product[0].regimen.frequency = regimenItem.frequency;
      this.surveyJson.product[0].regimen.startDate = regimenItem.startMedicationDate;
      this.surveyJson.product[0].regimen.endDate = regimenItem.stopMedicationDate;
      this.surveyJson.product[0].regimen.indication = regimenItem.indication;     
    });

    this.surveyJson.medicalHistory.patientMedicalHistory = this.multiStep.value.medicalHistory?.patientMedicalHistory || '';

    this.surveyJson.complications.previousPregnancyComplications[0] = this.multiStep.value.complications?.previousPregnancyComplications || '';
    this.surveyJson.complications.pregnancyOutcomeDate = this.multiStep.value.complications?.pregnancyOutcomeDate || '';
    this.surveyJson.complications.pregnancyOutcome[0] = this.multiStep.value.complications?.pregnancyOutcome || '';
    this.surveyJson.complications.newBornGender = this.multiStep.value.complications?.newBornGender || '';
    this.surveyJson.complications.height = parseInt(this.multiStep.value.complications?.height || '');
    this.surveyJson.complications.heightUnits = this.multiStep.value.complications?.heightUnits|| '';
    this.surveyJson.complications.weight = parseInt(this.multiStep.value.complications?.weight || '');
    this.surveyJson.complications.weightUnits = this.multiStep.value.complications?.weightUnits || '';
    this.surveyJson.complications.apgarScore = this.multiStep.value.complications?.apgarScore || '';
    this.surveyJson.complications.newBornSufferedCongInfo = this.multiStep.value.complications?.newBornSufferedCongInfo || '';
    this.surveyJson.complications.riskFactorsForReportedMalformations = this.multiStep.value.complications?.riskFactorsForReportedMalformations || '';
    this.surveyJson.complications.congMalfRelatedToMedications = this.multiStep.value.complications?.congMalfRelatedToMedications || '';

    console.log(this.surveyJson);

    this.onClickNext();
    // send the data to the server
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJicmlsbHkiLCJpYXQiOjE2NjEzNDIzMDh9.2u35XpKBLbLI5p-EtspiRoqmHGwZIOfjxqf1NtXOsWlBdu7eotgTy8RUzoemxaNtXOfdetQJdEDDgyn05VshEA';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`
    });
    AuthInterceptor.accessToken = token;
    this.http.post('http://172.168.1.82:8080/hilitloginservice/auth/capeicaseintake/capeicaseintakeservice/caseIntakeService/ucbFormSubmit',  this.surveyJson, {headers})
    .subscribe((res:any)=>{
      console.log('response',res);
    });
  }
  // alignCenter(currentStep: any) {}
}
