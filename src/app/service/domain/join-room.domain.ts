/**
 * 参加ドメインクラス
 */
export class JoinRoomDomain {
  private userId: number;
  private owner: RoomOwnerEnum;

  constructor(
    userId: number, owner: number
  ) {
    this.userId = userId;
    this.owner = owner;
  }

  /**
   * ユーザIDを取得する.
   * @returns {number} ユーザID
   */
  getUserId(): number {
    return this.userId;
  }

  /**
   * 所有フラグを取得する.
   * @returns {number} 所有フラグ
   */
  getOwner(): number {
    return this.owner;
  }
}
