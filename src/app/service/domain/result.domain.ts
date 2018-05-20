/**
 * 結果ドメインクラス
 */
export class ResultDomain {
  private userId: number;
  private rank: number;
  private score: string;
  private comment: string;


  constructor(
    userId: number, rank: number, score: string, comment: string
  ) {
    this.userId = userId;
    this.rank = rank;
    this.score = score;
    this.comment = comment;
  }

  /**
   * ユーザIDを取得する.
   * @returns {number} ユーザID
   */
  getUserId(): number {
    return this.userId;
  }

  /**
   * ランクを取得する.
   * @returns {number} ランク
   */
  getRank(): number {
    return this.rank;
  }

  /**
   * スコアを取得する.
   * @returns {string} スコア
   */
  getScore(): string {
    return this.score;
  }

  /**
   * コメントを取得する.
   * @returns {string} コメント
   */
  getComment(): string {
    return this.comment;
  }
}
