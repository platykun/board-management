import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import {SampleBean} from '../bean/SampleBean';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpClientService {
  baseUrl = 'http://localhost:8080';
  sampleBean : SampleBean;

  constructor(private http:HttpClient) {
  }

  sendGetRequest() : SampleBean{
    this.http.get<SampleBean>(this.baseUrl)
      .subscribe(re => {
        this.sampleBean = re;
        console.log(this.sampleBean);
      });

    return this.sampleBean;
  }

  // サンプル実装A
//   private getValue() : Observable<any> {
//   return this.http.get(this.baseUrl)
//     .map(this.extractData)
// .do(data => console.log("get Countries from json: " + JSON.stringify(data)));
// }
//
//
//   private extractData(response: Response) {
//     let body = response.json();
//     return body || {};
//   }
  // サンプル実装A終わり

  // // send a POST request to the API to create a new data object
  // createFood(food) {
  //   let body = JSON.stringify(food);
  //   return this.http.post('/api/food/', body, httpOptions);
  // }
  //
  // // send a PUT request to the API to update a data object
  // updateFood(food) {
  //   let body = JSON.stringify(food);
  //   return this.http.put('/api/food/' + food.id, body, httpOptions);
  // }
  //
  // // send a DELETE request to the API to delete a data object
  // deleteFood(food) {
  //   return this.http.delete('/api/food/' + food.id);
  // }
}
