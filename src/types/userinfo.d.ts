export interface UserinfoParams {
  id: number
  username: string
  password: string
  phoneNumber: string
  avatarUrl: string
  gender: string
  birthdate: string
  city: string
  sign: string
}

export interface UserinfoRes {
  code: number
  msg: string
  data: <T>
}
