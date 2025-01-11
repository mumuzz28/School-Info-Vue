// index.ts
import request from '@/config/axios'
import type { UserinfoParams, UserinfoRes } from './index.d'

// 修改头像
export const updateAvatar = (data: UserinfoParams): Promise<UserinfoRes> => {
  return request.post<UserinfoRes>({
    url: '/api/updateAvatar',
    data,
  })
}

// 修改用户名
export const updateUsername = (data: UserinfoParams): Promise<UserinfoRes> => {
  return request.post({
    url: `/api/updateUsername`,
    data,
  })
}

// 修改生日
export const updateBirthdate = (data: UserinfoParams): Promise<UserinfoRes> => {
  return request.post({
    url: `/api/updateBirthday`,
    data,
  })
}

// 修改性别
export const updateGender = (data: UserinfoParams): Promise<UserinfoRes> => {
  return request.post({
    url: `/api/updateSex`,
    data,
  })
}

// 修改城市
export const updateCity = (data: UserinfoParams): Promise<UserinfoRes> => {
  return request.post<UserinfoRes>({
    url: '/api/updateCity',
    data,
  })
}

// 修改签名
export const updateSign = (data: UserinfoParams): Promise<UserinfoRes> => {
  return request.post<UserinfoRes>({
    url: '/api/updateSignature',
    data,
  })
}

// 修改密码
export const updatePassword = (data: UserinfoParams): Promise<UserinfoRes> => {
  return request.post<UserinfoRes>({
    url: '/api/updatePassword',
    data,
  })
}

// 修改手机号
export const updatePhoneNumber = (
  data: UserinfoParams
): Promise<UserinfoRes> => {
  return request.post<UserinfoRes>({
    url: '/api/updatePhoneNumber',
    data,
  })
}
