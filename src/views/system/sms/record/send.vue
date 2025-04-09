<template>
  <div class="app-container">
    <!-- 搜索表单 -->
    <el-form
      ref="queryFormRef"
      :model="queryParams"
      :inline="true"
      label-width="68px"
      class="search-form"
    >
      <el-form-item label="手机号" prop="recipientNumber">
        <el-input
          v-model="queryParams.recipientNumber"
          placeholder="请输入接收人手机号"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="queryParams.status" placeholder="请选择状态" clearable style="width: 200px">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="批次号" prop="batchId">
        <el-input
          v-model="queryParams.batchId"
          placeholder="请输入批次号"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item class="search-buttons">
        <el-button type="primary" @click="handleQuery">
          <Icon icon="ep:search" />
          搜索
        </el-button>
        <el-button @click="resetQuery">
          <Icon icon="ep:refresh" />
          重置
        </el-button>
      </el-form-item>
    </el-form>

    <!-- 数据表格 -->
    <el-table v-loading="loading" :data="list" border style="width: 100%">
      <el-table-column type="index" label="序号" width="50" />
      <el-table-column
        prop="recipientNumber"
        label="接收手机号"
        min-width="120"
        show-overflow-tooltip
      />
      <el-table-column prop="status" label="状态" min-width="100">
        <template #default="{ row }">
          <el-tag :type="getStatusType(row.status)">
            {{ getStatusLabel(row.status) }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="providerMessageId"
        label="供应商消息ID"
        min-width="150"
        show-overflow-tooltip
      />
      <el-table-column prop="sendTime" label="发送时间" min-width="180" :formatter="dateFormatter" />
    </el-table>

    <!-- 分页组件 -->
    <pagination
      v-if="total > 0"
      v-model:total="total"
      v-model:page="queryParams.pageNo"
      v-model:limit="queryParams.limit"
      @pagination="getList"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getSmsMessages } from '@/api/system/sms/smsTemplate'
import type { SmsMessageItemDto, PaginatedResponseDto } from '@/api/system/sms/smsTemplate'
import { dateFormatter } from '@/utils/formatTime'
import { ElMessage } from 'element-plus'

const loading = ref(true)
const total = ref(0)
const list = ref<SmsMessageItemDto[]>([])

const statusOptions = [
  { label: '待发送', value: 'pending' },
  { label: '已发送', value: 'sent' },
  { label: '已送达', value: 'delivered' },
  { label: '发送失败', value: 'failed' }
]

const queryParams = ref({
  pageNo: 1,
  limit: 10,
  recipientNumber: '',
  status: undefined as 'pending' | 'sent' | 'delivered' | 'failed' | undefined,
  batchId: undefined as number | undefined
})

const getStatusType = (status: string) => {
  switch (status) {
    case 'pending':
      return 'info'
    case 'sent':
      return 'primary'
    case 'delivered':
      return 'success'
    case 'failed':
      return 'danger'
    default:
      return 'warning'
  }
}

const getStatusLabel = (status: string) => {
  const option = statusOptions.find((opt) => opt.value === status)
  return option ? option.label : status
}

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const response = await getSmsMessages(queryParams.value)
    list.value = response.items || []
    total.value = response.meta?.total || 0
  } catch (error) {
    console.error('获取短信发送记录失败:', error)
    ElMessage.error('获取短信发送记录失败')
    list.value = []
    total.value = 0
  } finally {
    loading.value = false
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.value.pageNo = 1
  getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryParams.value = {
    pageNo: 1,
    limit: 10,
    recipientNumber: '',
    status: undefined,
    batchId: undefined
  }
  handleQuery()
}

onMounted(() => {
  getList()
})
</script>

<style lang="scss" scoped>
.search-form {
  display: flex;
  padding: 20px;
  margin-bottom: 20px;
  background-color: var(--el-bg-color);
  border-radius: 4px;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;

  :deep(.el-form-item) {
    margin: 0;
  }

  .search-buttons {
    margin-left: auto;
  }
}
</style>
