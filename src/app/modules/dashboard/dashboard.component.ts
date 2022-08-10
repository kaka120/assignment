import { Component, OnInit } from '@angular/core';
import { authService } from '../../data/service/authService.service'
import { Router } from '@angular/router'
import { ModalService } from '../_modal';

@Component({
  selector: 'dashboard-signup',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class dashboardComponent implements OnInit{

    
  public employeeList: any[];
  size: number = 0;
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  constructor(private authService:authService,private router:Router,private modalService: ModalService){
       console.log(authService)
  }
  
  ngOnInit(){  
    this.authService.getMethod(`https://retoolapi.dev/GFHqAV/getemployees`)
    .subscribe(
      res=> {
         console.log(res)
         this.employeeList = res;
         this.size= res.length
      },
      err=> console.log(err)
    )
  }
  openModal(id: string,emp_id:String) {
    console.log(emp_id)
    localStorage. setItem('employee_id', emp_id. toString()); 
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}
  }
 
 




