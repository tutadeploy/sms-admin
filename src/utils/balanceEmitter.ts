import mitt from 'mitt'

// 创建事件总线，用于处理余额相关的事件
export const balanceEmitter = mitt()

// 获取余额API的封装
export const refreshBalance = () => {
  balanceEmitter.emit('refresh-balance')
} 