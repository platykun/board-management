//JSON送受信実装テスト用のbeanクラス。
// TODO: あとで消す

export class SampleBean {
  constructor (name : string, password : string){
    this.name = name;
    this.password = password;
  }
  name: string;
  password: string;
}
