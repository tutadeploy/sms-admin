import request from '@/config/axios'

export interface SmsTemplateVO {
  id?: number
  userId: number
  tenantId: number
  name: string
  content: string
  providerTemplateId?: string
  variables?: string[]
  createTime?: string
  updateTime?: string
  user?: {
    id: number
    username: string
    email: string | null
    role: string
    isActive: boolean
    tenantId: number
    tenant: any
    createTime: string
    updateTime: string
  }
}

export interface SendSmsReqVO {
  templateId: number
  providerId: number
  recipients: string[]
  variables: Record<string, any>
  scheduledAt?: string
  countryCode: string
}

export interface SmsTemplatePageReqVO extends PageParam {
  type?: number
  status?: string
  code?: string
  content?: string
  apiTemplateId?: string
  channelId?: number
  name?: string
  page?: number
  pageNo?: number
  createStartTime?: string
  createEndTime?: string
}

export interface SmsTemplatePageVO {
  list: SmsTemplateVO[]
  total: number
}

export interface SmsBatchPageReqVO extends PageParam {
  status?: string
  createStartTime?: string
  createEndTime?: string
}

export interface SmsBatchVO {
  batchId: string
  templateName: string
  sendTime: string
  statusUpdateTime: string
  status: string
  total: number
  successCount: number
  failCount: number
}

export interface SmsBatchPageVO {
  list: SmsBatchVO[]
  total: number
}

// 查询短信模板列表
export const getSmsTemplatePage = (params: SmsTemplatePageReqVO) => {
  return request.get<SmsTemplatePageVO>({ url: '/template/sms/page', params })
}

// 查询短信模板详情
export const getSmsTemplate = (id: number) => {
  return request.get({ url: '/template/sms/get?id=' + id })
}

// 新增短信模板
export const createSmsTemplate = (data: SmsTemplateVO) => {
  return request.post({ url: '/template/sms', data })
}

// 修改短信模板
export const updateSmsTemplate = (data: SmsTemplateVO) => {
  return request.put({ url: '/template/sms', data })
}

/** 删除短信模板 */
export const deleteSmsTemplate = (id: number) => {
  return request.delete<any>({ url: `/template/sms/delete?id=${id}` }).then((res) => {
    console.log('删除响应:', res)
    return res
  })
}

// 发送短信
export const sendSms = (data: SendSmsReqVO) => {
  return request.post({ url: '/notification/sms', data })
}

// 查询短信发送状态
export const getSmsStatus = (batchId: string) => {
  return request.get({ url: '/status/sms/batch/' + batchId })
}

// 查询短信发送记录
export const getSmsMessages = (params: any) => {
  return request.get({ url: '/status/sms/messages', params })
}

// 查询短信接收记录
export const getSmsReceived = (params: any) => {
  return request.get({ url: '/status/sms/received', params })
}

/** 重新发送整个批次的短信 */
export const retrySendBatch = (batchId: number) => {
  return request.post({ url: '/notification/sms/retry-batch/' + batchId })
}

/** 重新发送单条短信消息 */
export const retrySendMessage = (messageId: number) => {
  return request.post({ url: '/notification/sms/retry-message/' + messageId })
}

/** 重试发送短信 */
export const retrySms = (phoneNumber: string) => {
  return request.post({ url: `/notification/sms/retry/${phoneNumber}` })
}

/** 获取短信队列列表 */
export const getSmsQueue = (params: {
  pageNo: number
  limit: number
  phoneNumber?: string
  status?: 'waiting' | 'sending' | 'failed'
}) => {
  return request.get<{
    meta: {
      total: number
      pages: number
      pageNo: number
      limit: number
      hasNext: boolean
      hasPrev: boolean
    }
    items: {
      phoneNumber: string
      content: string
      status: 'waiting' | 'sending' | 'failed'
      planTime: string
      failReason?: string
    }[]
  }>({ url: '/template/sms/queue', params })
}

/** 取消发送短信 */
export const cancelSms = (phoneNumber: string) => {
  return request.delete({ url: `/template/sms/queue/${phoneNumber}` })
}

/** 获取支持的国家列表 */
export const getSupportCountries = (channelId: string) => {
  return request.get<CountryOption[]>({
    url: '/api/channels/supported-countries/list',
    params: { channel: channelId }
  })
}

export interface CountryOption {
  code: string
  name: string
}

/** Buka 余额响应 */
export interface BukaBalanceVO {
  balance: number
}

/** 获取 Buka 余额 */
export const getBukaBalance = () => {
  return request.get<BukaBalanceVO>({ url: '/api/channels/buka/balance' })
}

/** 刷新批次状态 */
export const refreshBatchStatus = (batchId: string) => {
  return request.post<any>({ url: `/notification/sms/batches/${batchId}/refresh` })
}

// 查询短信发送批次列表
export const getSmsBatches = (params: SmsBatchPageReqVO) => {
  return request.get<SmsBatchPageVO>({ url: '/notification/sms/batches', params })
}
