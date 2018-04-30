import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

/**
 * ルーム作成用のFormモデル
 * 今回は利用しないのであとで消す。
 */
export class CreateRoomFormModel {
  constructor(
    public title: string,
    public participants: number,
    public remarks?: string
  ) {}
}


// export class AboutPage {
//   myForm: FormGroup;
//   // commentは双方向データバインディングするため、string型
//   comment: string;
//
//   constructor(public fb: FormBuilder, public alertCtrl: AlertController) {
//     this.createForm();
//   }
//
//   // フォームビルダーを使ってフォーム作成
//   createForm() {
//     this.myForm = this.fb.group({
//       'title': ['', Validators.compose([Validators.required, customValidator])],
//       'description': ['', Validators.required],
//       'comment': ['', Validators.required],
//     });
//
//     // commentをwatch
//     this.myForm.controls['comment'].valueChanges.subscribe(
//       (value: string) => {
//         console.log('comment changed to:', value);
//       }
//     );
//     // フォーム全体の変更をwatch
//     this.myForm.valueChanges.subscribe(
//       (form: any) => {
//         console.log('form changed to:', form);
//       }
//     );
//   }
//
//   // キャンセルを押したら値をクリアするためフォームを再作成
//   cancelItem(_event) {
//     this.createForm();
//     // submitItemが呼ばれるのを防止
//     _event.preventDefault();
//   }
//
//   // 送信ボタンを押し、アラートビューを表示
//   submitItem(_data) {
//     let alert = this.alertCtrl.create({
//       title: _data.title,
//       subTitle: '本文：' + _data.description + '<br>コメント：' + _data.comment,
//       buttons: [{
//         text: 'OK',
//         handler: data => {
//           this.createForm();
//           console.log('OK clicked');
//         }
//       }]
//     });
//     alert.present();
//   }
// }