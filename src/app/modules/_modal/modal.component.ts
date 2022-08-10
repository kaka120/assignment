import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from './modal.service';
import { authService } from '../../data/service/authService.service'

@Component({ 
    selector: 'jw-modal', 
    templateUrl: 'modal.component.html', 
    styleUrls: ['modal.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: any;
    private sub: any;
    public employeeDetail: any[];

    constructor(private modalService: ModalService, private el: ElementRef,private authService:authService) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        document.body.appendChild(this.element);
        this.element.addEventListener('click', el => {
            if (el.target.className === 'jw-modal') {
                this.close();
            }
        });
        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    open(): void {
     this.sub = this.authService.getMethod(`https://retoolapi.dev/H2F0Ui/getemployedetail?id=${Number(localStorage.getItem('employee_id'))}`)
    .subscribe(
      res=> {
         console.log(res[0])
         this.employeeDetail = res[0];
      },
      err=> console.log(err)
    )
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }
    close(): void {
        this.sub.unsubscribe();
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
}