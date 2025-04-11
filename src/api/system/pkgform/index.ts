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
