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
      <el-form-item label="发送号码" prop="senderNumber">
        <el-input
          v-model="queryParams.senderNumber"
          placeholder="请输入发送方手机号"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="接收号码" prop="recipientNumber">
        <el-input
          v-model="queryParams.recipientNumber"
          placeholder="请输入接收方手机号"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input
          v-model="queryParams.content"
          placeholder="请输入消息内容"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item>
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
        prop="senderNumber"
        label="发送方号码"
        min-width="120"
        show-overflow-tooltip
      />
      <el-table-column
        prop="recipientNumber"
        label="接收方号码"
        min-width="120"
        show-overflow-tooltip
      />
      <el-table-column prop="content" label="消息内容" min-width="300" show-overflow-tooltip />
      <el-table-column prop="createTime" label="接收时间" width="180" :formatter="dateFormatter" />
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
import { getSmsReceivedMessages } from '@/api/system/sms/smsTemplate'
import type { SmsMessageItemDto, PaginatedResponseDto } from '@/api/system/sms/smsTemplate'
import { dateFormatter } from '@/utils/formatTime'
import { ElMessage } from 'element-plus'

const loading = ref(true)
const total = ref(0)
const list = ref<SmsMessageItemDto[]>([])

const queryParams = ref({
  pageNo: 1,
  limit: 10,
  senderNumber: '',
  recipientNumber: '',
  content: ''
})

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const response = await getSmsReceivedMessages(queryParams.value)
    list.value = response.items || []
    total.value = response.meta?.total || 0
  } catch (error) {
    console.error('获取短信接收记录失败:', error)
    ElMessage.error('获取短信接收记录失败')
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
    senderNumber: '',
    recipientNumber: '',
    content: ''
  }
  handleQuery()
}

onMounted(() => {
  getList()
})
</script>

<style lang="scss" scoped>
.search-form {
  padding: 20px;
  margin-bottom: 20px;
  background-color: var(--el-bg-color);
  border-radius: 4px;
}
</style>
