import request from '@/config/axios'
import type { PkgFormQuery, PkgFormPageVO } from './types'

export const getPkgFormList = (params: PkgFormQuery) => {
  return request.get<PkgFormPageVO>({
    url: '/pkgform/get-form',
    params
  })
}

export const deletePkgForm = (id: number) => {
  return request.delete({
    url: `/pkgform/delete-form/${id}`
  })
}

// 批量删除包裹表单
export const deletePkgFormsBatch = (data: { ids: number[] } | { startDate: string; endDate: string }) => {
  return request.delete({
    url: '/pkgform/batch',
    data // Send data in the request body for DELETE
  })
}
