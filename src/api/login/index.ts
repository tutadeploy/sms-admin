import request from '@/config/axios'
import { getRefreshToken, getTenantId } from '@/utils/auth'
import type { RegisterVO, UserLoginVO, TokenType } from './types'
import { AxiosPromise } from 'axios'

export interface SmsCodeVO {
  mobile: string
  scene: number
}

export interface SmsLoginVO {
  mobile: string
  code: string
}

// 登录 (Apply tenant-id header logic here)
export const login = (data: UserLoginVO) => {
  const { tenantId, ...loginData } = data as any // Use 'as any' or add tenantId to UserLoginVO
  const headers = {}
  if (tenantId) {
    headers['tenant-id'] = tenantId
  }
  return request.post<TokenType>({
    url: '/system/auth/login', // Keep URL without /v1
    data: loginData,
    headers
  })
}

// 注册
export const register = (data: RegisterVO) => {
  return request.post({ url: '/system/auth/register', data })
}

// 使用租户名，获得租户编号
export const getTenantIdByName = (name: string) => {
  return request.get({ url: '/system/tenant/get-id-by-name?name=' + name })
}

// 使用租户域名，获得租户信息
export const getTenantByWebsite = (website: string) => {
  return request.get({ url: '/system/tenant/get-by-website?website=' + website })
}

// 登出
export const loginOut = () => {
  return request.post({ url: '/system/auth/logout' })
}

// 获取用户权限信息 (Add tenant-id header and logging)
export const getInfo = () => {
  const headers = {}
  const tenantId = getTenantId() // Get tenantId from cache
  console.log('[getInfo] Retrieved tenantId from cache:', tenantId) // <-- Add Log
  if (tenantId) {
    headers['tenant-id'] = tenantId
    console.log('[getInfo] Adding tenant-id header:', tenantId) // <-- Add Log
  } else {
    console.log('[getInfo] No tenantId found in cache, sending request without tenant-id header.') // <-- Add Log
  }
  console.log('[getInfo] Request headers being sent:', headers) // <-- Add Log
  return request.get({
    url: '/system/auth/get-permission-info',
    headers // Add headers to the request
  })
}

//获取登录验证码
export const sendSmsCode = (data: SmsCodeVO) => {
  return request.post({ url: '/system/auth/send-sms-code', data })
}

// 短信验证码登录
export const smsLogin = (data: SmsLoginVO) => {
  return request.post({ url: '/system/auth/sms-login', data })
}

// 社交快捷登录，使用 code 授权码
export function socialLogin(type: string, code: string, state: string) {
  return request.post({
    url: '/system/auth/social-login',
    data: {
      type,
      code,
      state
    }
  })
}

// 社交授权的跳转
export const socialAuthRedirect = (type: number, redirectUri: string) => {
  return request.get({
    url: '/system/auth/social-auth-redirect?type=' + type + '&redirectUri=' + redirectUri
  })
}

// 获取登录验证码 (Fix method, URL, and add data param)
export const getCode = (data: { captchaType: string }) => {
  return request.post({ url: '/system/captcha/get', data })
}

// 滑动或者点选验证
export const reqCheck = (data: any) => {
  // Ensure URL is correct based on openapi.json (without /v1 prefix)
  return request.post({ url: '/system/captcha/check', data })
}

// 登录接口 (This one is likely unused by LoginForm.vue)
export const loginApi = (data: UserLoginVO) => {
  const { tenantId, ...loginData } = data as any
  const headers = {}
  if (tenantId) {
    headers['tenant-id'] = tenantId
  }
  return request.post<TokenType>({
    url: '/system/auth/login',
    data: loginData,
    headers,
    isReturnNativeResponse: true
  })
}

// 登出接口
export const loginOutApi = () => {
  return request.post({ url: '/system/auth/logout' })
}

// 通过短信重置密码
export const smsResetPassword = (data: any) => {
  return request.post({ url: '/system/auth/reset-password', data })
}
