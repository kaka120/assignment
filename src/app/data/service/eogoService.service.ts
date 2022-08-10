import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { posts } from '../schema/posts';
import { Observable,throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class eogoService{


  apiUrl: string = 'enter-your-api-url';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  private _url: string = 'http://localhost:3000/api/request';
   
  constructor(private http: HttpClient){ 
  }

  getData():Observable<any[]>{
    return this.http.get<any[]>(this._url)
  }


  async  getConditionalDataUsingPromise() {
     this.http.get<posts>(this._url).toPromise().then(data => {     
    });
  }

  // The basic data read for EOGO table  by using get method
  getData_promice() {
    let promise = new Promise((resolve, reject) => {
      this.http.get<posts>(this._url)
        .toPromise()
        .then(
          res => {  // Success   
             resolve(res);
             console.log(res)
          },
          msg => {  // Error
             return reject(msg);
          }
        );
    });
    return promise;
  }

    // Handle Errors 
    error(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = error.error.message;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      }
  
}