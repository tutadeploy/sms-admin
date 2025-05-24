import request from '@/config/axios'

export interface SmsChannelVO {
  id: number
  name: string
  code: string
  status: number
  providerId: number
  description: string
  createTime: string
  updateTime: string
}

// 修改为直接匹配后端返回的格式
export interface SmsChannelListRespVO {
  list: SmsChannelVO[]
  total: number
}

// 获取渠道列表
export const getSmsChannelList = async () => {
  try {
    // 使用正确的API路径
    const response = await request.get<SmsChannelListRespVO>({ 
      url: '/v1/api/channels/list',
      // 添加baseURL选项覆盖默认配置
      baseURL: import.meta.env.VITE_API_SMS_URL || 'http://localhost:13520',
      // 设置较长的超时时间
      timeout: 10000,
      // 禁用错误弹窗，由调用方处理
      hideNotify: true,
      // 确保正确发送token
      withToken: true
    })
    
    return response
  } catch (error) {
    console.error('渠道列表API请求异常:', error)
    // 返回一个模拟的空响应，避免组件中出现undefined错误
    return {
      list: [],
      total: 0
    }
  }
} 