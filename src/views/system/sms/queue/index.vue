<template>
  <ContentWrap>
    <!-- 搜索工作栏 -->
    <el-form
      class="-mb-15px"
      :model="queryParams"
      ref="queryFormRef"
      :inline="true"
      label-width="80px"
    >
      <el-form-item label="手机号" prop="phoneNumber" class="mb-15px">
        <el-input
          v-model="queryParams.phoneNumber"
          placeholder="请输入手机号"
          clearable
          @keyup.enter="handleQuery"
          class="!w-200px"
        />
      </el-form-item>
      <el-form-item label="发送状态" prop="status" class="mb-15px">
        <el-select
          v-model="queryParams.status"
          placeholder="请选择发送状态"
          clearable
          class="!w-200px"
        >
          <el-option label="等待发送" :value="'waiting'" />
          <el-option label="发送中" :value="'sending'" />
          <el-option label="发送失败" :value="'failed'" />
        </el-select>
      </el-form-item>
      <el-form-item class="mb-15px">
        <el-button @click="handleQuery" class="mr-10px">
          <Icon icon="ep:search" class="mr-5px" /> 搜索
        </el-button>
        <el-button @click="resetQuery" class="mr-10px">
          <Icon icon="ep:refresh" class="mr-5px" /> 重置
        </el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table v-loading="loading" :data="list">
      <el-table-column label="手机号" align="center" prop="phoneNumber" min-width="120" />
      <el-table-column
        label="短信内容"
        align="center"
        prop="content"
        min-width="300"
        show-overflow-tooltip
      />
      <el-table-column label="发送状态" align="center" prop="status" width="100">
        <template #default="scope">
          <el-tag :type="getStatusType(scope.row.status)">
            {{ getStatusText(scope.row.status) }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="计划发送时间" align="center" prop="planTime" width="180">
        <template #default="scope">
          {{ formatDate(scope.row.planTime) }}
        </template>
      </el-table-column>
      <el-table-column
        label="失败原因"
        align="center"
        prop="failReason"
        min-width="200"
        show-overflow-tooltip
      />
      <el-table-column label="操作" align="center" width="150" fixed="right">
        <template #default="scope">
          <el-button
            v-if="scope.row.status === 'failed'"
            link
            type="primary"
            @click="handleRetry(scope.row)"
          >
            重新发送
          </el-button>
          <el-button
            link
            type="danger"
            @click="handleCancel(scope.row)"
            v-if="scope.row.status === 'waiting'"
          >
            取消发送
          </el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="暂无待发送的短信">
          <el-button type="primary" @click="$router.push('/system/sms/template')">
            <Icon icon="ep:message" class="mr-5px" />发送短信
          </el-button>
        </el-empty>
      </template>
    </el-table>
    <!-- 分页 -->
    <Pagination
      :total="total"
      v-model:page="queryParams.page"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />
  </ContentWrap>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { getSmsMessages, refreshBatchStatus, SmsMessageItemDto } from '@/api/system/sms/smsTemplate'

defineOptions({ name: 'SystemSmsQueue' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

interface SmsQueueVO {
  phoneNumber: string
  content: string
  status: 'waiting' | 'sending' | 'failed'
  planTime: string
  failReason?: string
}

const loading = ref(false) // 列表的加载中
const total = ref(0) // 列表的总页数
const list = ref<SmsQueueVO[]>([]) // 列表的数据
const queryFormRef = ref() // 搜索的表单

const queryParams = reactive({
  page: 1,
  pageSize: 10,
  phoneNumber: '',
  status: undefined as 'pending' | 'sent' | 'delivered' | 'failed' | undefined
})

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const res = await getSmsMessages({
      pageNo: queryParams.page,
      limit: queryParams.pageSize,
      recipientNumber: queryParams.phoneNumber,
      status: queryParams.status
    })
    // 转换API返回的数据格式为组件需要的格式
    list.value = res.items.map(item => ({
      phoneNumber: item.recipientNumber,
      content: item.directContent || '',
      status: mapStatus(item.status),
      planTime: item.sendTime || '',
      failReason: item.errorMessage
    }))
    total.value = res.meta.total
  } finally {
    loading.value = false
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.page = 1
  getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value?.resetFields()
  handleQuery()
}

/** 重新发送 */
const handleRetry = async (row) => {
  try {
    await refreshBatchStatus(row.id)
    message.success('重新发送成功')
    getList()
  } catch (error) {
    message.error('重新发送失败')
  }
}

/** 取消发送 */
const handleCancel = async (row) => {
  try {
    await refreshBatchStatus(row.id)
    message.success('取消发送成功')
    getList()
  } catch (error) {
    message.error('取消发送失败')
  }
}

/** 格式化日期 */
const formatDate = (date: string | undefined) => {
  if (!date) return ''
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}

/** 获取状态类型 */
const getStatusType = (status: string) => {
  switch (status) {
    case 'waiting':
      return 'info'
    case 'sending':
      return 'warning'
    case 'failed':
      return 'danger'
    default:
      return 'info'
  }
}

/** 获取状态文本 */
const getStatusText = (status: string) => {
  switch (status) {
    case 'waiting':
      return '等待发送'
    case 'sending':
      return '发送中'
    case 'failed':
      return '发送失败'
    default:
      return '未知'
  }
}

/** 映射API状态到组件状态 */
const mapStatus = (status: SmsMessageItemDto['status']): 'waiting' | 'sending' | 'failed' => {
  switch (status) {
    case 'pending':
    case 'queued':
      return 'waiting'
    case 'submitted':
    case 'sending':
      return 'sending'
    case 'failed':
    case 'rejected':
      return 'failed'
    default:
      return 'waiting'
  }
}

/** 初始化 */
onMounted(() => {
  getList()
})
</script>
