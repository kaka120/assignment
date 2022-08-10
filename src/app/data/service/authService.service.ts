import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class authService {
  
  constructor(private _http: HttpClient) { }

  // Create Restaurant data using POST Method.
  postMethod(api_end: string, data: any) {
    return this._http.post<any>( api_end , data).pipe(map((res: any) => {
      return res;
    }));
  }
  // Get Restaurant Data using POST method.
  // Create Restaurant data using GET Method.
  getMethod(api_end: string) {
    console.log("api_end")
    return this._http.get<any>( api_end ).pipe(map((res: any) => {
      return res;
    }));
  }
  // Get Restaurant Data using GET method.
}
