<template>
  <doc-alert title="短信配置" url="https://doc.iocoder.cn/sms/" />

  <ContentWrap>
    <!-- 搜索工作栏 -->
    <el-form
      class="-mb-15px"
      :model="queryParams"
      ref="queryFormRef"
      :inline="true"
      label-width="80px"
    >
      <el-form-item label="手机号" prop="recipientNumber" class="mb-15px">
        <el-input
          v-model="queryParams.recipientNumber"
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
          <el-option label="发送成功" :value="'success'" />
          <el-option label="发送失败" :value="'failure'" />
          <el-option label="发送中" :value="'pending'" />
        </el-select>
      </el-form-item>
      <el-form-item label="时间范围" prop="timeRange" class="mb-15px">
        <el-date-picker
          v-model="queryParams.timeRange"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          value-format="YYYY-MM-DD HH:mm:ss"
          class="!w-400px"
        />
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
    <el-tabs v-model="activeTab" @tab-click="handleTabChange">
      <el-tab-pane label="发送记录" name="sent">
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
          <el-table-column label="发送时间" align="center" prop="sendTime" width="180">
            <template #default="scope">
              {{ formatDate(scope.row.sendTime) }}
            </template>
          </el-table-column>
          <el-table-column label="接收时间" align="center" prop="receiveTime" width="180">
            <template #default="scope">
              {{ formatDate(scope.row.receiveTime) }}
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center" width="100" fixed="right">
            <template #default="scope">
              <el-button link type="primary" @click="handleViewDetail(scope.row)"> 详情 </el-button>
            </template>
          </el-table-column>
          <template #empty>
            <el-empty description="暂无发送记录">
              <el-button type="primary" @click="$router.push('/system/sms/template')">
                <Icon icon="ep:message" class="mr-5px" />发送短信
              </el-button>
            </el-empty>
          </template>
        </el-table>
        <!-- 分页 -->
        <Pagination
          :total="total"
          v-model:page="queryParams.pageNo"
          v-model:limit="queryParams.limit"
          @pagination="getList"
        />
      </el-tab-pane>
      <el-tab-pane label="接收记录" name="received">
        <el-table v-loading="loading" :data="list">
          <el-table-column label="手机号" align="center" prop="phoneNumber" min-width="120" />
          <el-table-column
            label="短信内容"
            align="center"
            prop="content"
            min-width="300"
            show-overflow-tooltip
          />
          <el-table-column label="接收时间" align="center" prop="receiveTime" width="180">
            <template #default="scope">
              {{ formatDate(scope.row.receiveTime) }}
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center" width="100" fixed="right">
            <template #default="scope">
              <el-button link type="primary" @click="handleViewDetail(scope.row)"> 详情 </el-button>
            </template>
          </el-table-column>
          <template #empty>
            <el-empty description="暂无接收记录" />
          </template>
        </el-table>
        <!-- 分页 -->
        <Pagination
          :total="total"
          v-model:page="queryParams.pageNo"
          v-model:limit="queryParams.limit"
          @pagination="getList"
        />
      </el-tab-pane>
    </el-tabs>
  </ContentWrap>

  <!-- 详情弹窗 -->
  <el-dialog v-model="detailVisible" title="短信详情" width="600px" append-to-body destroy-on-close>
    <el-descriptions :column="1" border>
      <el-descriptions-item label="手机号">{{ detail.phoneNumber }}</el-descriptions-item>
      <el-descriptions-item label="短信内容">{{ detail.content }}</el-descriptions-item>
      <el-descriptions-item label="发送状态" v-if="activeTab === 'sent'">
        <el-tag :type="getStatusType(detail.status)">
          {{ getStatusText(detail.status) }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="发送时间" v-if="activeTab === 'sent'">
        {{ formatDate(detail.sendTime) }}
      </el-descriptions-item>
      <el-descriptions-item label="接收时间">
        {{ formatDate(detail.receiveTime) }}
      </el-descriptions-item>
    </el-descriptions>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="detailVisible = false">关 闭</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { dateFormatter } from '@/utils/formatTime'
import * as SmsTemplateApi from '@/api/system/sms/smsTemplate'
import dayjs from 'dayjs'

defineOptions({ name: 'SystemSmsLog' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

interface SmsMessageItemDto {
  id: string
  batchId: string
  recipientNumber: string
  contentType: string
  templateId: string
  templateParams: Record<string, any>
  status: 'pending' | 'sent' | 'delivered' | 'failed'
  providerMessageId: string
  sendTime: string
}

interface SmsLogVO {
  phoneNumber: string
  content: string
  status: 'success' | 'failure' | 'pending'
  sendTime?: string
  receiveTime?: string
}

const loading = ref(false) // 列表的加载中
const total = ref(0) // 列表的总页数
const list = ref<SmsLogVO[]>([]) // 列表的数据
const queryFormRef = ref() // 搜索的表单
const activeTab = ref('sent') // 当前激活的标签页
const detailVisible = ref(false) // 详情弹窗的显示状态
const detail = ref<SmsLogVO>({
  phoneNumber: '',
  content: '',
  status: 'pending'
}) // 当前查看的详情数据

const queryParams = reactive({
  pageNo: 1,
  limit: 10,
  recipientNumber: '',
  status: undefined as undefined | 'pending' | 'sent' | 'delivered' | 'failed',
  timeRange: [] as string[]
})

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const params = {
      ...queryParams,
      startTime: queryParams.timeRange?.[0],
      endTime: queryParams.timeRange?.[1]
    }
    const { timeRange, ...searchParams } = params

    if (activeTab.value === 'sent') {
      const res = await SmsTemplateApi.getSmsMessages(searchParams)
      list.value = (res.items || []).map(item => ({
        phoneNumber: item.recipientNumber,
        content: item.templateParams ? JSON.stringify(item.templateParams) : '',
        status: item.status === 'sent' || item.status === 'delivered' ? 'success' : 
               item.status === 'failed' ? 'failure' : 'pending',
        sendTime: item.sendTime
      }))
      total.value = res.meta?.total || 0
    } else {
      const res = await SmsTemplateApi.getSmsMessages({
        ...searchParams,
        status: 'delivered'
      })
      list.value = (res.items || []).map(item => ({
        phoneNumber: item.recipientNumber,
        content: item.templateParams ? JSON.stringify(item.templateParams) : '',
        status: 'success',
        sendTime: item.sendTime
      }))
      total.value = res.meta?.total || 0
    }
  } finally {
    loading.value = false
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.pageNo = 1
  getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value?.resetFields()
  handleQuery()
}

/** 标签页切换 */
const handleTabChange = () => {
  queryParams.pageNo = 1
  getList()
}

/** 查看详情 */
const handleViewDetail = (row: any) => {
  detail.value = row
  detailVisible.value = true
}

/** 格式化日期 */
const formatDate = (date: string | undefined) => {
  if (!date) return ''
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}

/** 获取状态类型 */
const getStatusType = (status: string) => {
  switch (status) {
    case 'success':
      return 'success'
    case 'failure':
      return 'danger'
    case 'pending':
      return 'warning'
    default:
      return 'info'
  }
}

/** 获取状态文本 */
const getStatusText = (status: string) => {
  switch (status) {
    case 'success':
      return '发送成功'
    case 'failure':
      return '发送失败'
    case 'pending':
      return '发送中'
    default:
      return '未知'
  }
}

/** 初始化 */
onMounted(() => {
  getList()
})
</script>
