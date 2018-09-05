import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {

  employees : Employee[]=[

    {
      id: 1,
      name: 'Naruto',
      gender: 'Male',
      email: 'naruto@gmail.com',
      phoneNumber: 8512478965,
      contactPreference: 'email',
      dateOfBirth: new Date('03/14/1996'),
      department: 'CSE',
      isActive: true,
      photoPath: 'assets/images/img1.png'
    },

    {
      id: 2,
      name: 'Kakashi',
      gender: 'Male',
      email: 'kakashi@gmail.com',
      phoneNumber: 9642478965,
      contactPreference: 'email',
      dateOfBirth: new Date('11/26/1996'),
      department: 'CSE',
      isActive: true,
      photoPath: 'assets/images/img2.jpg'
    },

    {
      id: 3,
      name: 'Itachi',
      gender: 'Male',
      email: 'itachi@gmail.com',
      phoneNumber: 7542478965,
      contactPreference: 'email',
      dateOfBirth: new Date('06/04/1996'),
      department: 'CSE',
      isActive: false,
      photoPath: 'assets/images/img3.jpg'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
