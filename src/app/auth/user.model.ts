export class User {

  constructor(
    public id: string,
    public email: string,
    private _token: string,
    private _tokenExpDate: Date
  ) {}

  public get token() {
    if (!this._tokenExpDate || new Date() > this._tokenExpDate) return null;

    return this._token;
  }
}
