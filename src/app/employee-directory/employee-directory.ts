import { Component } from '@angular/core';
import { NgFor } from '@angular/common';  

@Component({
  selector: 'app-employee-directory',
  imports: [NgFor],
  templateUrl: './employee-directory.html',
  styleUrls: ['./employee-directory.css']
})

export class EmployeeDirectory {
  selectedDepartment: string = 'All';

  allEmployees = [
    { 
      empNum: 1001, name: 'Paul Klein', department: 'Operations', role: 'Head Agriculturist', 
      email: 'paul@earthhaven.ph', gender: 'Male', status: 'Active', salary: 45000, 
      featured: true, tenure: 5, 
      image: 'assets/images/per1.png',
      skills: ['Organic Cert.', 'Crop Rotation'], 
      funFact: 'Can identify 50 types of soil by smell alone.' 
    },
    { 
      empNum: 1002, name: 'Les Preist', department: 'Logistics', role: 'Fleet Manager', 
      email: 'les@earthhaven.ph', gender: 'Male', status: 'On Leave', salary: 38000, 
      featured: false, tenure: 3, 
      image: 'assets/images/per2.png',
      skills: ['Supply Chain', 'Cold Storage'], 
      funFact: 'Once drove a delivery truck through a typhoon to deliver milk.' 
    },
    { 
      empNum: 1003, name: 'Jake Goss', department: 'Quality', role: 'Safety Analyst', 
      email: 'jake@earthhaven.ph', gender: 'Male', status: 'Resigned', salary: 42000, 
      featured: false, tenure: 2, 
      image: 'assets/images/per3.png',
      skills: ['ISO Standards', 'Food Safety'], 
      funFact: 'Has never eaten a vegetable he did not inspect personally.' 
    },
    { 
      empNum: 1004, name: 'Krystal Emily', department: 'Operations', role: 'Field Supervisor', 
      email: 'krystal@earthhaven.ph', gender: 'Female', status: 'Active', salary: 55000, 
      featured: false, tenure: 4, 
      image: 'assets/images/per4.png',
      skills: ['Team Mgmt', 'Irrigation'], 
      funFact: 'Grows giant pumpkins competitively on weekends.' 
    },
    { 
      empNum: 1005, name: 'Ashton Simmonds', department: 'Corporate', role: 'Sustainability Officer', 
      email: 'ashton@earthhaven.ph', gender: 'Male', status: 'Active', salary: 60000, 
      featured: true, tenure: 6, 
      image: 'assets/images/per5.png',
      skills: ['Public Relations', 'Carbon Footprint'], 
      funFact: 'Founded the local tree-planting initiative.' 
    }
  ];

  get filteredEmployees() {
    if (this.selectedDepartment === 'All') {
      return this.allEmployees;
    }
    return this.allEmployees.filter(emp => emp.department === this.selectedDepartment);
  }

  setFilter(dept: string) {
    this.selectedDepartment = dept;
  }
}