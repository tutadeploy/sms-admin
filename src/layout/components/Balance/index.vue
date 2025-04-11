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
import { balanceEmitter } from '@/utils/balanceEmitter'
import { getBalance } from '@/utils/balanceService'

const balance = ref('0')

const updateBalance = async () => {
  try {
    const balanceValue = await getBalance()
    balance.value = balanceValue.toFixed(2)
  } catch (error) {
    console.error('更新余额失败：', error)
  }
}

onMounted(() => {
  updateBalance()
  // 每5分钟刷新一次余额
  setInterval(updateBalance, 5 * 60 * 1000)
  
  // 监听刷新余额事件
  balanceEmitter.on('balance-updated', (balanceValue: number) => {
    balance.value = balanceValue.toFixed(2)
  })
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