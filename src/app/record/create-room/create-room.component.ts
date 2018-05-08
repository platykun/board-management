import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'
import {HttpClientService} from '../../service/component/http-client.service';
import {SampleBean} from '../../service/bean/sample.bean';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  myForm: FormGroup;

  sampleBean : SampleBean;

  constructor(public fb: FormBuilder,private router: Router, private client:HttpClientService) {
    client.sendGetRequest('/hoge').subscribe(re =>
        this.sampleBean = re
      );
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      'title': ['', Validators.required],
      'participants': ['', Validators.required],
      'remarks': ''
    });

    // 一項目分をwatch
    this.myForm.controls['title'].valueChanges.subscribe(
      (value: string) => {
        // console.log('comment changed to:', value);
      }
    );
    // フォーム全体の変更をwatch
    this.myForm.valueChanges.subscribe(
      (form: any) => {
        // console.log('form changed to:', form);
      }
    );

  }

  // 送信ボタンを押したときの動作を制御
  submitItem(_form: FormGroup) {
    if(_form.status == 'VALID') {
      // TODO: 登録処理を行うserviceクラスを呼ぶ。

      console.log(this.sampleBean);

      // 登録が完了したため、トップへ戻る
      this.router.navigate(['record']);
    }
  }

  ngOnInit() {
  }

}
