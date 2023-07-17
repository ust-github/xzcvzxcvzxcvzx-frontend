import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  getGreeting(): Observable<string> {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get<string>(environment.basePath,
      { headers, responseType: 'text'  as 'json'}
      );
  }
}
