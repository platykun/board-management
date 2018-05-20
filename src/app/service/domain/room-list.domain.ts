/**
 * ルームリストドメインクラス
 */
import {RoomDomain} from './room.domain';
import {HttpClientService} from '../component/http-client.service';
import {RoomBean} from '../bean/room.bean';

export class RoomListDomain {
  private page: number;

  constructor(
    page: number
  ) {
    this.page = page;
  }

  /**
   * ルーム一覧を取得する.
   */
  findRoomList(httpClientService: HttpClientService): RoomDomain[] {

    var url = "/room/find_all/" + this.page;
    // var roomBeanList: RoomBean[];
    var roomDomainList: RoomDomain[] = [];

    httpClientService.sendGetRequest(url).subscribe(results => {
      results.forEach(
        r => {
          var roomDomain: RoomDomain = new RoomDomain(r.id, r.boardTitle, r.player, r.remark, r.placeName);
          console.log(roomDomain);
          roomDomainList.push(roomDomain);
        }
      );
    });
    //
    // roomBeanList.forEach(r => roomDomainList.push(new RoomDomain(r.id, r.boardTitle, r.player, r.remark, r.placeName)));

    return roomDomainList;
  }
}
