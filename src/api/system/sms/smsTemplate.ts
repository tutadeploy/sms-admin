import request from '@/config/axios'

export interface UserVO {
  id: number
  username: string
  nickname: string
}

export interface TenantVO {
  id: number
  name: string
}

export interface SmsTemplateVO {
  id: number
  name: string
  code: string
  content: string
  variables: string[]
  userId: number
  tenantId: number
  providerTemplateId: string
  user?: UserVO
  tenant?: TenantVO
}

export interface SmsBatchVO {
  id: number
  providerId: number
  recipients: string[]
  countryCode: string
  templateId: number
  variables: Record<string, string>
  status: string
  successCount: number
  failCount: number
  totalCount: number
  createTime: string
  updateTime: string
}

export interface SmsTemplatePageVO {
  list: SmsTemplateVO[]
  total: number
}

export interface SmsBatchPageVO {
  list: SmsBatchVO[]
  total: number
}

export interface PaginationMeta {
  pageNo: number
  limit: number
  total: number
  pages: number
  hasNext: boolean
  hasPrev: boolean
}

export interface PaginatedResponseDto {
  meta: PaginationMeta
  items: SmsMessageItemDto[]
}

export interface SmsMessageItemDto {
  id: number
  batchId: number
  recipientNumber: string
  directContent?: string
  contentType?: 'template' | 'direct'
  templateId?: number
  templateParams?: Record<string, any>
  status:
    | 'pending'
    | 'queued'
    | 'submitted'
    | 'sent'
    | 'delivered'
    | 'failed'
    | 'rejected'
    | 'unknown'
    | 'sending'
  providerMessageId?: string
  errorMessage?: string
  sendTime?: string
  statusUpdateTime?: string
}

/** 查询短信模板分页 */
export const getSmsTemplatePage = (params: { pageNo: number; pageSize: number; name?: string }) => {
  return request.get<SmsTemplatePageVO>({ url: '/template/sms/page', params })
}

/** 查询短信模板详情 */
export const getSmsTemplate = (id: number) => {
  return request.get<SmsTemplateVO>({ url: '/template/sms/get', params: { id } })
}

/** 获取所有短信模板 */
export const findAllSmsTemplates = () => {
  return request.get<SmsTemplateVO[]>({ url: '/template/sms/all' })
}

/** 新增短信模板 */
export const createSmsTemplate = (data: {
  name: string
  providerTemplateId: string
  content: string
  variables: string[]
}) => {
  return request.post<SmsTemplateVO>({ url: '/template/sms/create', data })
}

/** 修改短信模板 */
export const updateSmsTemplate = (
  id: number,
  data: {
    name: string
    providerTemplateId: string
    content: string
    variables: string[]
  }
) => {
  return request.put<SmsTemplateVO>({ url: '/template/sms/update', params: { id }, data })
}

/** 删除短信模板 */
export const deleteSmsTemplate = (id: number) => {
  return request.delete<void>({ url: '/template/sms/delete', params: { id } })
}

/** 发送短信 */
export const sendSms = (data: {
  providerId: number
  recipients: string[]
  countryCode: string
  content?: string
  templateId?: number
  variables?: Record<string, string>
  scheduledAt?: string
}) => {
  return request.post({ url: '/notification/sms', data })
}

/** 获取短信批次列表 */
export const getSmsBatches = (params: {
  status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled'
  pageNo?: number
  pageSize?: number
  createStartTime?: string
  createEndTime?: string
}) => {
  return request.get({ url: '/notification/sms/batches', params })
}

/** 获取短信批次详情 */
export const getSmsBatchDetail = (id: number) => {
  return request.get({ url: `/notification/sms/batches/${id}` })
}

/** 刷新短信批次状态 */
export const refreshBatchStatus = (id: number) => {
  return request.post({ url: `/notification/sms/batches/${id}/refresh` })
}

/** 获取短信发送记录 */
export const getSmsMessages = (params: {
  pageNo: number
  limit: number
  recipientNumber?: string
  status?: 'pending' | 'sent' | 'delivered' | 'failed'
  batchId?: number
  tenantId?: number
}) => {
  return request.get<PaginatedResponseDto>({
    url: '/status/sms/messages',
    params
  })
}

/** 获取短信接收记录 */
export const getSmsReceivedMessages = (params: {
  pageNo: number
  limit: number
  senderNumber?: string
  recipientNumber?: string
  content?: string
  tenantId?: number
}) => {
  return request.get<PaginatedResponseDto>({
    url: '/status/sms/received',
    params
  })
}

/** 获取支持的国家列表 */
export const getSupportCountries = (channel: string) => {
  return request.get({ url: '/api/channels/supported-countries/list', params: { channel } })
}
