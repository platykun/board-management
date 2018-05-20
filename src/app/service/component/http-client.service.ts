import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

@Injectable()
export class HttpClientService {
  baseUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) {
  }

  sendGetRequest(url: string) : Observable<any>{
    return this.http.get(this.baseUrl + url);
  }

  /**
   * パラメータ付きでGET送信させる.
   * @param {string} url
   * @param {HttpParams} httpParams
   * @returns {Observable<Object>}
   */
  sendGetRequestWithParam(url: string, httpParams: HttpParams) {
    return this.http.get(this.baseUrl + url, { params: httpParams});
  }
}
