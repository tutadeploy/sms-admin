<template>
  <div class="balance-container flex items-center mr-15px">
    <div class="balance-item">
      <span class="label mr-5px">余额：</span>
      <span class="value text-[var(--el-color-primary)]">{{ balance }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as SmsApi from '@/api/system/sms/smsTemplate/index'

const balance = ref('0')

const getBalance = async () => {
  try {
    const res = await SmsApi.getBukaBalance()
    if (res?.balance) {
      balance.value = Number(res.balance).toFixed(2)
    }
  } catch (error) {
    console.error('获取余额失败：', error)
  }
}

onMounted(() => {
  getBalance()
  // 每5分钟刷新一次余额
  setInterval(getBalance, 5 * 60 * 1000)
})
</script>

<style lang="scss" scoped>
.balance-container {
  font-size: 14px;
  
  .balance-item {
    .label {
      color: var(--top-header-text-color);
    }
    
    .value {
      font-weight: bold;
    }
  }
}
</style> 