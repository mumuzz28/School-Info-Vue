export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResult {
  token: string;
  username: string;
  phoneNumber: string;
  avatarUrl: string;
  city: string;
  sign: string;
}
