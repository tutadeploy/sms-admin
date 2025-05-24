import * as SmsApi from '@/api/system/sms/smsTemplate/index'
import { balanceEmitter } from './balanceEmitter'

// 渠道余额类型
export interface ChannelBalance {
  buka: number
  smpp: number
}

// 获取所有渠道的余额
export const getAllBalances = async (): Promise<ChannelBalance> => {
  try {
    const [bukaRes, smppRes] = await Promise.all([
      SmsApi.getBukaBalance(),
      SmsApi.getSmppBalance()
    ])
    
    const balances = {
      buka: bukaRes?.balance ? Number(bukaRes.balance) : 0,
      smpp: smppRes?.balance ? Number(smppRes.balance) : 0
    }
    
    balanceEmitter.emit('balance-updated', balances)
    return balances
  } catch (error) {
    console.error('获取余额失败：', error)
    return { buka: 0, smpp: 0 }
  }
}

// 获取指定渠道的余额
export const getBalance = async (channel: 'buka' | 'smpp' = 'buka'): Promise<number> => {
  try {
    const balances = await getAllBalances()
    return balances[channel]
  } catch (error) {
    console.error('获取余额失败：', error)
    return 0
  }
}

// 检查余额是否足够
export const checkBalanceSufficient = async (channel: 'buka' | 'smpp' = 'buka', minBalance: number = 0.04): Promise<boolean> => {
  const currentBalance = await getBalance(channel)
  return currentBalance >= minBalance
}

// 刷新余额
export const refreshBalance = async (): Promise<ChannelBalance> => {
  const balances = await getAllBalances()
  balanceEmitter.emit('refresh-balance')
  return balances
} 