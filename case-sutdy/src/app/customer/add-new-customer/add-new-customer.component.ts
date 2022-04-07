import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.css']
})
export class AddNewCustomerComponent implements OnInit {
  customerType = [
    {
      type: 'Gold'
    },
    {
      type: 'Silver'
    },
    {
      type: 'Bronze'
    },
    {
      type: 'Member'
    }
  ];
  customerGender = [
    {
      gender: 'Nam'
    },
    {
    gender: 'Nữ'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  addNewCustomer() {
  }
}
