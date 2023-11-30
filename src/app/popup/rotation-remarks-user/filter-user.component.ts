import { Component, OnInit } from '@angular/core';
import {FormBuilder, UntypedFormGroup} from '@angular/forms';
import * as moment from 'moment';
@Component({
  selector: 'app-filter-user',
  templateUrl: './filter-user.component.html',
  styleUrls: ['./filter-user.component.scss']
})
export class FilterUserComponent implements OnInit {

   private readonly DATE_PATTERN = 'DD/MMM/YYYY';
   minDate : any;
   maxDate : any;
  errorMessages = {
    invalidDateFormatMsg: 'Format is DD/MM/YYYY'
  };
  filterForm = this._formBuilder.group({
    'startDateCtrl': [null],
    'endDateCtrl': [null],
  });

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {

  }
  /** set maximum value for datepicker StartDate and empty Season value as they can't coexist */
  initMessageToMinDate() {
    this.minDate = this.filterForm.get('startDateCtrl')?.value;
  }
  initMessageFromMaxDate() {
    this.maxDate = this.filterForm.get('endDateCtrl')?.value;
  }
  resetStartDate() {
    this.filterForm.patchValue({
      startDateCtrl: null
    });
    this.initMessageToMinDate();
  }

  /** empty calendar value for EndDate */
  resetEndDate() {
    this.filterForm.patchValue({
      endDateCtrl: null
    });
    this.initMessageFromMaxDate();
  }
  get startDate() {
    const startDateCtrl = this.filterForm.get('startDateCtrl');
    if (startDateCtrl && startDateCtrl.value) {
      return moment(startDateCtrl.value).format(this.DATE_PATTERN);
    } else {
      return null;
    }
  }

  get endDate() {
    const endDateCtrl = this.filterForm.get('endDateCtrl');
    if (endDateCtrl && endDateCtrl.value) {
      return moment(endDateCtrl.value).format(this.DATE_PATTERN);
    } else {
      return null;
    }
  }
  onSubmit() {
    // Handle the form submission
    console.log(this.filterForm.value);
    // You can send the form values to a service to fetch filtered data
  }
}
