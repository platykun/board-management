/**
 * room情報移送用Beanクラス
 */
import {JoinRoomBean} from './join-room.bean';
import {ResultBean} from './result.bean';

export class RoomBean {
  constructor(
    public id: number,
    public boardTitle: string,
    public player: number,
    public remark: string,
    public placeName: string,
    public joinRoomList: JoinRoomBean[],
    public resultList: ResultBean[]
  ){}
}
