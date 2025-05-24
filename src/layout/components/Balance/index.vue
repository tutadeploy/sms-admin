<template>
  <div class="balance-container flex items-center mr-15px">
    <div class="balance-item mr-15px">
      <span class="label mr-5px">Buka余额：</span>
      <span class="value text-[var(--el-color-primary)]">{{ bukaBalance }}</span>
    </div>
    <div class="balance-item">
      <span class="label mr-5px">SMPP余额：</span>
      <span class="value text-[var(--el-color-primary)]">{{ smppBalance }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { balanceEmitter } from '@/utils/balanceEmitter'
import { getAllBalances, type ChannelBalance } from '@/utils/balanceService'

const bukaBalance = ref('0')
const smppBalance = ref('0')

const updateBalances = async () => {
  try {
    const balances = await getAllBalances()
    bukaBalance.value = balances.buka.toFixed(2)
    smppBalance.value = balances.smpp.toFixed(2)
  } catch (error) {
    console.error('更新余额失败：', error)
  }
}

onMounted(() => {
  updateBalances()
  // 每5分钟刷新一次余额
  setInterval(updateBalances, 5 * 60 * 1000)
  
  // 监听刷新余额事件
  balanceEmitter.on('balance-updated', (balances: ChannelBalance) => {
    bukaBalance.value = balances.buka.toFixed(2)
    smppBalance.value = balances.smpp.toFixed(2)
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