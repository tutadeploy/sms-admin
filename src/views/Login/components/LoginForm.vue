<template>
  <el-form
    v-show="getShow"
    ref="formLogin"
    :model="loginData.loginForm"
    :rules="LoginRules"
    class="login-form"
    label-position="top"
    label-width="120px"
    size="large"
  >
    <el-row style="margin-right: -10px; margin-left: -10px">
      <el-col :span="24" style="padding-right: 10px; padding-left: 10px">
        <el-form-item>
          <LoginFormTitle style="width: 100%" />
        </el-form-item>
      </el-col>
      <el-col :span="24" style="padding-right: 10px; padding-left: 10px">
        <el-form-item v-if="loginData.tenantEnable === 'true'" prop="tenantName">
          <el-input
            v-model="loginData.loginForm.tenantName"
            :placeholder="t('login.tenantNamePlaceholder')"
            :prefix-icon="iconHouse"
            link
            type="primary"
          />
        </el-form-item>
      </el-col>
      <el-col :span="24" style="padding-right: 10px; padding-left: 10px">
        <el-form-item prop="username">
          <el-input
            v-model="loginData.loginForm.username"
            :placeholder="t('login.usernamePlaceholder')"
            :prefix-icon="iconAvatar"
          />
        </el-form-item>
      </el-col>
      <el-col :span="24" style="padding-right: 10px; padding-left: 10px">
        <el-form-item prop="password">
          <el-input
            v-model="loginData.loginForm.password"
            :placeholder="t('login.passwordPlaceholder')"
            :prefix-icon="iconLock"
            show-password
            type="password"
            @keyup.enter="getCode()"
          />
        </el-form-item>
      </el-col>
      <el-col
        :span="24"
        style="padding-right: 10px; padding-left: 10px; margin-top: -20px; margin-bottom: -20px"
      >
        <el-form-item>
          <el-row justify="space-between" style="width: 100%">
            <el-col :span="6">
              <el-checkbox v-model="loginData.loginForm.rememberMe">
                {{ t('login.remember') }}
              </el-checkbox>
            </el-col>
            <el-col :offset="6" :span="12">
              <!-- <el-link
                style="float: right"
                type="primary"
                @click="setLoginState(LoginStateEnum.RESET_PASSWORD)"
              >
                {{ t('login.forgetPassword') }}
              </el-link> -->
            </el-col>
          </el-row>
        </el-form-item>
      </el-col>
      <el-col :span="24" style="padding-right: 10px; padding-left: 10px">
        <el-form-item>
          <XButton
            :loading="loginLoading"
            :title="t('login.login')"
            class="w-[100%]"
            type="primary"
            @click="getCode()"
          />
        </el-form-item>
      </el-col>
      <Verify
        v-if="loginData.captchaEnable === 'true'"
        ref="verify"
        :captchaType="captchaType"
        :imgSize="{ width: '400px', height: '200px' }"
        mode="pop"
        @success="handleLogin"
      />
      <!-- <el-col :span="24" style="padding-right: 10px; padding-left: 10px">
        <el-form-item>
          <el-row :gutter="5" justify="space-between" style="width: 100%">
            <el-col :span="8">
              <XButton
                :title="t('login.btnMobile')"
                class="w-[100%]"
                @click="setLoginState(LoginStateEnum.MOBILE)"
              />
            </el-col>
            <el-col :span="8">
              <XButton
                :title="t('login.btnQRCode')"
                class="w-[100%]"
                @click="setLoginState(LoginStateEnum.QR_CODE)"
              />
            </el-col>
            <el-col :span="8">
              <XButton
                :title="t('login.btnRegister')"
                class="w-[100%]"
                @click="setLoginState(LoginStateEnum.REGISTER)"
              />
            </el-col>
          </el-row>
        </el-form-item>
      </el-col>
      <el-divider content-position="center">{{ t('login.otherLogin') }}</el-divider>
      <el-col :span="24" style="padding-right: 10px; padding-left: 10px">
        <el-form-item>
          <div class="w-[100%] flex justify-between">
            <Icon
              v-for="(item, key) in socialList"
              :key="key"
              :icon="item.icon"
              :size="30"
              class="anticon cursor-pointer"
              color="#999"
              @click="doSocialLogin(item.type)"
            />
          </div>
        </el-form-item>
      </el-col>
      <el-divider content-position="center">萌新必读</el-divider>
      <el-col :span="24" style="padding-right: 10px; padding-left: 10px">
        <el-form-item>
          <div class="w-[100%] flex justify-between">
            <el-link href="https://doc.iocoder.cn/" target="_blank">📚开发指南</el-link>
            <el-link href="https://doc.iocoder.cn/video/" target="_blank">🔥视频教程</el-link>
            <el-link href="https://www.iocoder.cn/Interview/good-collection/" target="_blank">
              ⚡面试手册
            </el-link>
            <el-link href="http://static.yudao.iocoder.cn/mp/Aix9975.jpeg" target="_blank">
              🤝外包咨询
            </el-link>
          </div>
        </el-form-item>
      </el-col> -->
    </el-row>
  </el-form>
</template>
<script lang="ts" setup>
import { ElLoading } from 'element-plus'
import LoginFormTitle from './LoginFormTitle.vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

import { useIcon } from '@/hooks/web/useIcon'

import * as authUtil from '@/utils/auth'
import { usePermissionStore } from '@/store/modules/permission'
import * as LoginApi from '@/api/login'
import { LoginStateEnum, useFormValid, useLoginState } from './useLogin'

defineOptions({ name: 'LoginForm' })

const { t } = useI18n()
const message = useMessage()
const iconHouse = useIcon({ icon: 'ep:house' })
const iconAvatar = useIcon({ icon: 'ep:avatar' })
const iconLock = useIcon({ icon: 'ep:lock' })
const formLogin = ref()
const { validForm } = useFormValid(formLogin)
const { setLoginState, getLoginState } = useLoginState()
const { currentRoute, push } = useRouter()
const permissionStore = usePermissionStore()
const redirect = ref<string>('')
const loginLoading = ref(false)
const verify = ref()
const captchaType = ref('blockPuzzle') // blockPuzzle 滑块 clickWord 点击文字

const getShow = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN)

const LoginRules = {
  tenantName: [required],
  username: [required],
  password: [required]
}
const loginData = reactive({
  isShowPassword: false,
  captchaEnable: import.meta.env.VITE_APP_CAPTCHA_ENABLE,
  tenantEnable: import.meta.env.VITE_APP_TENANT_ENABLE,
  loginForm: {
    tenantName: import.meta.env.VITE_APP_DEFAULT_LOGIN_TENANT || 'PNS',
    username: import.meta.env.VITE_APP_DEFAULT_LOGIN_USERNAME || '',
    password: import.meta.env.VITE_APP_DEFAULT_LOGIN_PASSWORD || '',
    captchaVerification: '',
    rememberMe: true // 默认记录我。如果不需要，可手动修改
  }
})

const socialList = [
  { icon: 'ant-design:wechat-filled', type: 30 },
  { icon: 'ant-design:dingtalk-circle-filled', type: 20 },
  { icon: 'ant-design:github-filled', type: 0 },
  { icon: 'ant-design:alipay-circle-filled', type: 0 }
]

// 获取验证码
const getCode = async () => {
  // 情况一，未开启：则直接登录
  if (loginData.captchaEnable === 'false') {
    await handleLogin({})
  } else {
    // 情况二，已开启：则展示验证码；只有完成验证码的情况，才进行登录
    // 弹出验证码
    verify.value.show()
  }
}
// 获取租户 ID
const getTenantId = async () => {
  if (loginData.tenantEnable === 'true') {
    const res = await LoginApi.getTenantIdByName(loginData.loginForm.tenantName)
    authUtil.setTenantId(res)
  }
}
// 记住我
const getLoginFormCache = () => {
  const loginForm = authUtil.getLoginForm()
  if (loginForm) {
    loginData.loginForm = {
      ...loginData.loginForm,
      username: loginForm.username ? loginForm.username : loginData.loginForm.username,
      password: loginForm.password ? loginForm.password : loginData.loginForm.password,
      rememberMe: loginForm.rememberMe,
      tenantName: loginForm.tenantName ? loginForm.tenantName : loginData.loginForm.tenantName
    }
  }
}
// 根据域名，获得租户信息
const getTenantByWebsite = async () => {
  const website = location.host
  const res = await LoginApi.getTenantByWebsite(website)
  if (res) {
    loginData.loginForm.tenantName = res.name
    authUtil.setTenantId(res.id)
  }
}
const loading = ref() // ElLoading.service 返回的实例
// 登录
const handleLogin = async (params: any) => {
  loginLoading.value = true
  try {
    // 确保先获取 tenantId (如果启用了租户)
    let tenantId: number | undefined = undefined
    if (loginData.tenantEnable === 'true') {
      const tenantName = loginData.loginForm.tenantName
      if (!tenantName) {
        message.error('请输入租户名称')
        loginLoading.value = false
        return
      }
      try {
        // 调用 API 获取 tenantId
        tenantId = await LoginApi.getTenantIdByName(tenantName)
        // 将 tenantId 转换为字符串再缓存
        if (tenantId !== undefined) {
          authUtil.setTenantId(String(tenantId))
        }
        console.log(`获取到租户ID: ${tenantId} for 租户名: ${tenantName}`)
      } catch (error) {
        console.error('获取租户ID失败:', error)
        message.error('获取租户ID失败，请检查租户名称是否正确')
        loginLoading.value = false
        return
      }
    }

    // 验证表单
    const data = await validForm()
    if (!data) {
      loginLoading.value = false
      return
    }

    // 准备传递给 login API 的数据
    const loginApiData = {
      username: loginData.loginForm.username,
      password: loginData.loginForm.password,
      rememberMe: loginData.loginForm.rememberMe,
      captchaVerification: params.captchaVerification,
      // 如果获取到了 tenantId，就传递它
      ...(tenantId !== undefined && { tenantId: tenantId })
    }
    console.log('传递给 login API 的数据:', loginApiData)

    // 调用 login API
    const res = await LoginApi.login(loginApiData)
    if (!res) {
      loginLoading.value = false
      return
    }

    // 显示加载动画
    loading.value = ElLoading.service({
      lock: true,
      text: '正在加载系统中...',
      background: 'rgba(0, 0, 0, 0.7)'
    })

    // 处理记住我
    if (loginData.loginForm.rememberMe) {
      // 注意：authUtil.setLoginForm 可能需要调整，它期望的结构可能包含 tenantName
      // 这里我们只缓存包含 tenantId 的实际登录数据，如果需要缓存 tenantName，需要额外处理
      authUtil.setLoginForm({
        tenantName: loginData.loginForm.tenantName, // 显式传递 tenantName 以便缓存
        username: loginApiData.username,
        password: loginApiData.password, // 注意：密码此时是明文，需要确保 setLoginForm 内部会加密
        rememberMe: loginApiData.rememberMe
      })
    } else {
      authUtil.removeLoginForm()
    }

    // 设置 Token
    authUtil.setToken(res)

    // 跳转
    if (redirect.value?.indexOf('sso') !== -1) {
      window.location.href = window.location.href.replace('/login?redirect=', '')
    } else {
      await push({ path: '/sms/send' })
    }
  } catch (error) {
    // 添加错误日志
    console.error('登录处理过程中发生错误:', error)
    // 可以根据需要添加更具体的错误提示
    // message.error('登录失败，请稍后重试');
  } finally {
    loginLoading.value = false
    // 确保 loading.value 被正确初始化后再调用 close
    if (loading.value) {
      loading.value.close()
    }
  }
}

// 社交登录
const doSocialLogin = async (type: number) => {
  if (type === 0) {
    message.error('此方式未配置')
  } else {
    loginLoading.value = true
    if (loginData.tenantEnable === 'true') {
      // 尝试先通过 tenantName 获取租户
      await getTenantId()
      // 如果获取不到，则需要弹出提示，进行处理
      if (!authUtil.getTenantId()) {
        try {
          const data = await message.prompt('请输入租户名称', t('common.reminder'))
          if (data?.action !== 'confirm') throw 'cancel'
          const res = await LoginApi.getTenantIdByName(data.value)
          authUtil.setTenantId(res)
        } catch (error) {
          if (error === 'cancel') return
        } finally {
          loginLoading.value = false
        }
      }
    }
    // 计算 redirectUri
    // tricky: type、redirect需要先encode一次，否则钉钉回调会丢失。
    // 配合 Login/SocialLogin.vue#getUrlValue() 使用
    const redirectUri =
      location.origin +
      '/social-login?' +
      encodeURIComponent(`type=${type}&redirect=${redirect.value || '/'}`)

    // 进行跳转
    window.location.href = await LoginApi.socialAuthRedirect(type, encodeURIComponent(redirectUri))
  }
}
watch(
  () => currentRoute.value,
  (route: RouteLocationNormalizedLoaded) => {
    redirect.value = route?.query?.redirect as string
  },
  {
    immediate: true
  }
)
onMounted(() => {
  getLoginFormCache()
  // getTenantByWebsite()
})
</script>

<style lang="scss" scoped>
:deep(.anticon) {
  &:hover {
    color: var(--el-color-primary) !important;
  }
}

.login-code {
  float: right;
  width: 100%;
  height: 38px;

  img {
    width: 100%;
    height: auto;
    max-width: 100px;
    vertical-align: middle;
    cursor: pointer;
  }
}
</style>
