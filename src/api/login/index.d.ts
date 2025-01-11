export interface LoginParams {
  username: string;
  password: string;
  phoneNumber: string;
  code: string;
}

export interface LoginResult {
  username: string;
  phoneNumber: string;
  avatarUrl: string;
  city: string;
  sign: string;
  token: string;
}
