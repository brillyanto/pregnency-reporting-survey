import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-follow-up',
  templateUrl: './add-follow-up.component.html',
  styleUrls: ['./add-follow-up.component.scss'],
})
export class AddFollowUpComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onClickNavigateTo() {
    this.router.navigate(['/ae-in-pregnancy']);
  }
  navigateToFollowUp() {
    this.router.navigate(['/follow-up']);
  }
}
