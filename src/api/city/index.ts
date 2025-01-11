import request from '@/config/axios'
import type { CityResult } from './index.d'

// 获取所有城市
export const getAllCity = (): Promise<CityResult> => {
  return request.get({
    url: '/login/getAllCity',
  })
}
