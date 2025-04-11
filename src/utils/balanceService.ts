import * as SmsApi from '@/api/system/sms/smsTemplate/index'
import { balanceEmitter } from './balanceEmitter'

// 获取当前余额
export const getBalance = async (): Promise<number> => {
  try {
    const res = await SmsApi.getBukaBalance()
    if (res?.balance) {
      const balance = Number(res.balance)-10;
      balanceEmitter.emit('balance-updated', balance)
      return balance
    }
    return 0
  } catch (error) {
    console.error('获取余额失败：', error)
    return 0
  }
}

// 检查余额是否足够
export const checkBalanceSufficient = async (minBalance: number = 0.04): Promise<boolean> => {
  const currentBalance = await getBalance()
  return currentBalance >= minBalance
}

// 刷新余额
export const refreshBalance = async (): Promise<number> => {
  const balance = await getBalance()
  balanceEmitter.emit('refresh-balance')
  return balance
} 