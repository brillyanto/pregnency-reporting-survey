import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ae-in-pregnancy',
  templateUrl: './ae-in-pregnancy.component.html',
  styleUrls: ['./ae-in-pregnancy.component.scss'],
})
export class AeInPregnancyComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onClickNavigateTo() {
    this.router.navigate(['/reporter-info']);
  }
}
