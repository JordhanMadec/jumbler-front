export default class CredentialsModel {
  token?: string;
  refreshToken?: string;
  expiryDate?: Date;

  constructor(credentials: any | CredentialsModel) {
    this.token = credentials.token;
    this.refreshToken = credentials.refreshToken;
    this.expiryDate = new Date(credentials.expiryDate);
  }
}
