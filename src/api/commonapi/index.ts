import request from '@/config/axios'

export const uploadImage = (data: FormData): Promise<any> => {
  return request.post({
    url: '/common/uploadImg',
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
