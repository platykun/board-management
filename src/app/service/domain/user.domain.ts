/**
 * ユーザドメインクラス
 */
import {RoomDomain} from './room.domain';

/**
 * ユーザドメインクラス.
 */
export class UserDomain {
  private id: number;
  private userName: string;
  private authority: string;

  constructor(username: string);
  constructor(id: number, username: string);
  constructor(id: number, username: string, authority: string);
  constructor(a: any, b?: string, c?: string){
    if(a == null) {
      return;
    }
    // 第一引数がstringのときはuserNameのみセット
    if(typeof a === "string") {
      this.userName = a;
      return;
    }
    // 第三引数が存在しないときはidとusernameのみセット
    if(!c) {
      this.id = a;
      this.userName = b;
      return;
    }
    // それ以外はすべてをセット
    this.id = a;
    this.userName = b;
    this.authority = c;
  }

  // IDを新たに設定する.
  setId(id: number): UserDomain {
    return new UserDomain(id, this.userName, this.authority);
  }

  /**
   * IDを取得する.
   * @returns {number} ID
   */
  getId(): number {
    return this.id;
  }

  /**
   * ユーザ名を取得する.
   * @returns {string} ユーザ名
   */
  getUserName(): string {
    return this.userName;
  }

  /**
   * 権限情報を取得する.
   * @returns {string} 権限情報.
   */
  getAuthority(): string {
    return this.authority;
  }

  /**
   * ユーザが参加しているルームを取得する.
   */
  getJoiningRoom(): RoomDomain {
    // userIdをkeyにしてAPI送信
    return new RoomDomain(this.id, "タイトル" , 1, "remark", "placeName");
  }

  /**
   * プレイ中のボードゲームを取得する.
   */
  // getPlayingBoardGame()
}
