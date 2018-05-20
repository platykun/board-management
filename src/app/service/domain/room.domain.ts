/**
 * ルームドメインクラス
 */
import {JoinRoomDomain} from './join-room.domain';
import {ResultDomain} from './result.domain';
import {UserDomain} from './user.domain';
import {RoomBean} from "../bean/room.bean";
import {JoinRoomBean} from '../bean/join-room.bean';

export class RoomDomain {
  private id: number;
  private boardTitle: string;
  private player: number;
  private remark: string;
  private placeName: string;
  private joinUser: JoinRoomDomain[];
  private results: ResultDomain[];
  private creator: UserDomain;

  constructor(
    id: number, boardTitle: string, player: number, remark: string, placeName: string
  ) {
    this.id = id;
    this.boardTitle = boardTitle;
    this.player = player;
    this.remark = remark;
    this.placeName = placeName;
  }

  /**
   * 参加ユーザを追加する.
   * @param {UserDomain} user 参加ユーザ
   * @param {RoomOwnerEnum} owner 権限
   */
  addJoinUser(user: UserDomain, owner: RoomOwnerEnum) {
    var room = new JoinRoomDomain(user.getId(), owner);
    this.joinUser.push(room);
  }

  /**
   * 結果を追加する.
   * @param {UserDomain} user 結果入力対象のユーザ
   * @param {number} rank 順位
   * @param {string} score スコア
   * @param {string} comment コメント
   */
  addResult(user: UserDomain, rank: number, score: string, comment: string) {
    var result = new ResultDomain(user.getId(), rank, score, comment);
    this.results.push(result);
  }

  /**
   * ルームを作成する.
   */
  createRoom(): RoomDomain {
    var roomBean = new RoomBean(this.id, this.boardTitle, this.player,this.remark, this.placeName, this.joinUser, this.results);
    var id = this.creator.getId;
    //TODO: send Api
    // 結果の値でDomainオブジェクトを更新する.
    this.id = 1;
    return this;
  }

  /**
   * ルームに参加する.
   * @param {UserDomain} user 参加ユーザ
   */
  joinRoom(user: UserDomain): RoomDomain {
    var owner;
    if(user.getId() == this.creator.getId()){
      owner = RoomOwnerEnum.OWNER;
    } else {
      owner = RoomOwnerEnum.ENTRANT;
    }
    var joinRoomBean = new JoinRoomBean(user.getId(), this.id, owner);
    var id = user.getId();
    //TODO: send Api
    this.joinUser.push(new JoinRoomDomain(1, owner));
    return this;
  }
}
