<template>
  <ContentWrap>
    <!-- 批次列表页面 -->
    <div v-if="!showBatchDetail">
      <!-- 顶部操作栏 -->
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span class="font-medium">短信发送批次记录</span>
            <el-button type="primary" plain @click="openSendDialog" class="float-right">
              <Icon icon="ep:message" class="mr-5px" />发送短信
            </el-button>
          </div>
        </template>

        <!-- 搜索表单 -->
        <el-form :model="queryParams" ref="queryFormRef" :inline="true" class="search-form">
          <el-form-item label="批次号" prop="batchId">
            <el-input
              v-model="queryParams.batchId"
              placeholder="请输入批次号"
              clearable
              style="width: 200px"
              @keyup.enter="handleQuery"
            />
          </el-form-item>
          <el-form-item label="发送状态" prop="status">
            <el-select
              v-model="queryParams.status"
              placeholder="请选择发送状态"
              clearable
              style="width: auto; min-width: 200px;"
            >
              <el-option
                v-for="dict in statusOptions"
                :key="dict.value"
                :label="dict.label"
                :value="dict.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="发送时间">
            <el-date-picker
              v-model="dateRange"
              type="daterange"
              value-format="YYYY-MM-DD HH:mm:ss"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width: 340px"
              :disabled-date="disabledDate"
              :default-time="[new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 1, 1, 23, 59, 59)]"
            />
          </el-form-item>
          <el-form-item class="search-buttons">
            <el-button type="primary" @click="handleQuery">
              <Icon icon="ep:search" class="mr-5px" />搜索
            </el-button>
            <el-button @click="resetQuery">
              <Icon icon="ep:refresh" class="mr-5px" />重置
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>

      <!-- 批次列表 -->
      <el-card class="mt-10px">
        <el-table v-loading="loading" :data="batchList" border>
          <el-table-column type="index" width="50" align="center" />
          <el-table-column label="批次号" prop="id" min-width="120" show-overflow-tooltip />
          <el-table-column label="短信模板" prop="name" min-width="120" show-overflow-tooltip />
          <el-table-column label="总数" prop="totalRecipients" width="80" align="center" />
          <el-table-column label="提交成功" prop="successCount" width="80" align="center" />
          <el-table-column label="提交失败" prop="failureCount" width="80" align="center" />
          <el-table-column label="发送状态" prop="status" width="100" align="center">
            <template #default="scope">
              <el-tag
                :type="
                  scope.row.status === 'completed'
                    ? 'success'
                    : scope.row.status === 'failed'
                      ? 'danger'
                      : 'warning'
                "
              >
                {{
                  scope.row.status === 'completed'
                    ? '发送成功'
                    : scope.row.status === 'failed'
                      ? '发送失败'
                      : '发送中'
                }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="发送时间" prop="createTime" min-width="160" align="center">
            <template #default="scope">
              {{ formatDateTime(scope.row.createTime) }}
            </template>
          </el-table-column>
          <el-table-column label="状态更新时间" prop="updateTime" min-width="160" align="center">
            <template #default="scope">
              {{ formatDateTime(scope.row.updateTime) }}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="180" align="center" fixed="right">
            <template #default="scope">
              <el-button link type="primary" @click="viewBatchDetail(scope.row)">详情</el-button>
              <el-button link type="primary" @click="refreshBatchStatus(scope.row)">刷新</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 分页组件 -->
        <Pagination
          v-model:limit="queryParams.limit"
          v-model:page="queryParams.pageNo"
          :total="total"
          @pagination="getBatchList"
        />
      </el-card>
    </div>

    <!-- 批次详情页面 -->
    <div v-else>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <el-button link type="primary" @click="backToBatchList">
              <Icon icon="ep:arrow-left" class="mr-5px" />返回批次列表
            </el-button>
            <el-button type="primary" size="small" @click="refreshBatchStatus(currentBatch)" class="float-right">
              <Icon icon="ep:refresh" class="mr-5px" />刷新状态
            </el-button>
          </div>
        </template>

        <!-- 批次信息 -->
        <el-descriptions class="mb-4" :column="3" border>
          <el-descriptions-item label="批次号" :span="1">
            <el-tag type="info">{{ currentBatch.id }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="发送时间" :span="1">
            {{ formatDateTime(currentBatch.createTime) }}
          </el-descriptions-item>
          <el-descriptions-item label="状态更新时间" :span="1">
            {{ formatDateTime(currentBatch.updateTime) }}
          </el-descriptions-item>
          <el-descriptions-item label="发送状态" :span="1">
            <el-tag :type="getStatusType(currentBatch.status)">
              {{ getStatusText(currentBatch.status) }}
            </el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="模板名称" :span="2">
            {{ currentBatch.name || '-' }}
          </el-descriptions-item>
          <el-descriptions-item label="发送总数" :span="1">
            <el-tag type="info">{{ currentBatch.totalRecipients || 0 }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="发送成功" :span="1">
            <el-tag type="success">{{ currentBatch.successCount || 0 }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="发送失败" :span="1">
            <el-tag type="danger">{{ currentBatch.failureCount || 0 }}</el-tag>
          </el-descriptions-item>
        </el-descriptions>

        <!-- 消息列表搜索表单 -->
        <el-form :model="messageQueryParams" ref="messageQueryFormRef" :inline="true" class="search-form">
          <el-form-item label="手机号码" prop="recipientNumber">
            <el-input
              v-model="messageQueryParams.recipientNumber"
              placeholder="请输入手机号码"
              clearable
              style="width: 200px"
              @keyup.enter="getMessageList"
            />
          </el-form-item>
          <el-form-item label="发送状态" prop="status">
            <el-select
              v-model="messageQueryParams.status"
              placeholder="请选择发送状态"
              clearable
              style="width: auto; min-width: 200px;"
            >
              <el-option
                v-for="dict in messageStatusOptions"
                :key="dict.value"
                :label="dict.label"
                :value="dict.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item class="search-buttons">
            <el-button type="primary" @click="getMessageList">
              <Icon icon="ep:search" class="mr-5px" />搜索
            </el-button>
            <el-button @click="resetMessageQuery">
              <Icon icon="ep:refresh" class="mr-5px" />重置
            </el-button>
          </el-form-item>
        </el-form>

        <!-- 消息列表 -->
        <el-table v-loading="messageLoading" :data="messageList" border>
          <el-table-column type="index" label="序号" width="50" align="center" />
          <el-table-column label="接收手机号" prop="recipientNumber" min-width="120" />
          <el-table-column label="短信模板" min-width="120" show-overflow-tooltip>
            <template #default="scope">
              {{ scope.row.templateName || '-' }}
            </template>
          </el-table-column>
          <el-table-column label="状态" width="100" align="center">
            <template #default="scope">
              <el-tag :type="getStatusType(scope.row.status)">
                {{ getStatusText(scope.row.status) }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="供应商消息ID" prop="providerMessageId" min-width="150" show-overflow-tooltip />
          <el-table-column label="发送时间" min-width="160" align="center">
            <template #default="scope">
              {{ formatDateTime(scope.row.sendTime) }}
            </template>
          </el-table-column>
          <el-table-column label="状态更新时间" min-width="160" align="center">
            <template #default="scope">
              {{ formatDateTime(scope.row.statusUpdateTime) }}
            </template>
          </el-table-column>
        </el-table>

        <!-- 分页组件 -->
        <Pagination
          v-model:limit="messageQueryParams.pageSize"
          v-model:page="messageQueryParams.pageNo"
          :total="messageTotal"
          @pagination="getMessageList"
        />
      </el-card>
    </div>

    <!-- 发送短信对话框 -->
    <el-dialog
      v-model="dialogVisible"
      title="发送短信"
      width="600px"
      destroy-on-close
      :close-on-click-modal="false"
    >
      <el-form :model="formData" ref="formRef" :rules="formRules" label-width="100px">
        <el-form-item label="渠道类型" prop="channelId">
          <el-select
            v-model="formData.channelId"
            placeholder="请选择渠道类型"
            class="!w-full"
            @change="handleChannelChange"
          >
            <el-option
              v-for="channel in channelOptions"
              :key="channel.value"
              :label="channel.label"
              :value="channel.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="国家" prop="countryCode">
          <el-select
            v-model="formData.countryCode"
            placeholder="请选择国家"
            class="!w-full"
            :disabled="!formData.channelId"
            @change="handleCountryChange"
            :loading="countryLoading"
          >
            <el-option
              v-for="country in countryOptions"
              :key="country.code"
              :label="country.name"
              :value="country.code"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="手机号码" prop="phoneNumbers">
          <el-input
            v-model="phoneNumbersInput"
            type="textarea"
            :rows="3"
            placeholder="请输入手机号码，多个号码用英文逗号分隔"
            class="!w-full"
            @blur="formatPhoneNumbers"
          />
        </el-form-item>
        <el-form-item label="短信模板" prop="templateId">
          <el-select
            v-model="formData.templateId"
            placeholder="请选择短信模板"
            clearable
            :disabled="isTemplateSelectDisabled"
            @change="handleTemplateChange"
            class="!w-full"
          >
            <el-option
              v-for="item in templateList"
              :key="item.id || 0"
              :label="item.name"
              :value="item.id || 0"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="模板内容" prop="content">
          <div v-loading="templateLoading" element-loading-text="模板加载中..." >
            <el-input
              v-model="templateContent"
              type="textarea"
              :rows="3"
              readonly
              placeholder="选择模板后显示模板内容"
              style="width: 100%"
            />
          </div>
        </el-form-item>
        <el-form-item v-for="param in templateParams" :key="param" :label="param">
          <el-input 
            v-model="formData.variables[param]" 
            placeholder="请输入参数值" 
            @blur="validateParamValue(param)"
            @input="onParamInput"
          />
          <div v-if="paramErrors[param]" class="param-error">{{ paramErrors[param] }}</div>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false" :disabled="submitLoading">取消</el-button>
          <el-button 
            type="primary" 
            @click="submitForm" 
            :loading="submitLoading" 
            :disabled="submitLoading || hasChineseParamValues || !isFormValid"
          >
            发送
          </el-button>
        </div>
      </template>
    </el-dialog>
  </ContentWrap>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from 'vue'
import {  SendSmsReqVO } from '@/api/system/sms/smsTemplate/index'
import * as SmsTemplateApi from '@/api/system/sms/smsTemplate/index'
import { checkBalanceSufficient, refreshBalance, getBalance } from '@/utils/balanceService'
import { useMessage } from '@/hooks/web/useMessage' 
import dayjs from 'dayjs'

defineOptions({ name: 'SystemSmsSend' })

interface CountryOption {
  code: string
  name: string
}


const message = useMessage()
const loading = ref(false)
const messageLoading = ref(false)
const submitLoading = ref(false)
const dialogVisible = ref(false)
const showBatchDetail = ref(false)

// 计算默认日期范围：最近 3 天
const defaultEndDate = dayjs().endOf('day').format('YYYY-MM-DD HH:mm:ss')
const defaultStartDate = dayjs().subtract(2, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss')

// 批次列表数据
const batchList = ref<any[]>([])
const total = ref(0)
const dateRange = ref<[string, string]>([defaultStartDate, defaultEndDate]) // 默认最近 3 天

// 消息列表数据
const messageList = ref<any[]>([])
const messageTotal = ref(0)
const currentBatch = ref<any>({})

// 查询参数 (批次)
const queryParams = ref({
  pageNo: 1,
  limit: 10,
  batchId: '',
  status: '',
  sendTimeStart: defaultStartDate, // 初始化时使用默认值
  sendTimeEnd: defaultEndDate      // 初始化时使用默认值
})

// 消息列表查询参数
const messageQueryParams = ref({
  pageNo: 1,
  pageSize: 10,
  batchId: '',
  recipientNumber: '',
  status: '', // 默认空字符串，表示 '全部'
  sendTimeStart: '',
  sendTimeEnd: ''
})

// 状态选项 (批次状态)
const statusOptions = [
  { label: '全部', value: '' }, // 使用空字符串表示不筛选，将在 API 调用前处理
  { label: '发送中', value: 'processing' }, // 'pending' 和 'processing' 都归为发送中
  { label: '发送成功', value: 'completed' },
  { label: '发送失败', value: 'failed' },
  { label: '已取消', value: 'cancelled' }
]

// 新增：消息状态选项
const messageStatusOptions = [
  { label: '全部', value: '' }, // 使用空字符串表示不筛选，将在 API 调用前处理
  { label: '发送中', value: 'pending' },
  { label: '已发送', value: 'sent' },
  { label: '已送达', value: 'delivered' },
  { label: '发送失败', value: 'failed' }
]

// 渠道选项
const channelOptions = [{ label: '线路一', value: 'onbuka' }]

// 表单数据
const formData = ref<{
  templateId: number | ''
  providerId: number
  recipients: string[]
  variables: Record<string, any>
  channelId: string
  countryCode: string
}>({
  templateId: '',
  providerId: 0,
  recipients: [],
  variables: {},
  channelId: '',
  countryCode: ''
})

// 表单校验规则
const formRules = reactive({
  phoneNumbers: [
    { 
      required: true, 
      trigger: 'blur',
      validator: (rule: any, value: string, callback: Function) => {
        if (!phoneNumbersInput.value || !phoneNumbersInput.value.trim()) {
          callback(new Error('手机号码不能为空'))
          return
        }
        const numbers = phoneNumbersInput.value.split(',').map(num => num.trim()).filter(Boolean)
        
        if (numbers.length === 0) {
          callback(new Error('手机号码不能为空'))
          return
        }

        const invalidNumbers = numbers.filter(num => !/^\d{5,}$/.test(num))
        if (invalidNumbers.length > 0) {
          callback(new Error('号码必须为纯数字且至少5位：' + invalidNumbers.join(', ')))
          return
        }

        formData.value.recipients = numbers
        callback()
      }
    }
  ],
  templateId: [
    { 
      required: true, 
      message: '请选择短信模板', 
      trigger: 'change',
      validator: (rule: any, value: any, callback: Function) => {
        if (!formData.value.recipients || formData.value.recipients.length === 0) {
          callback(new Error('请先输入正确的手机号码'))
          return
        }
        if (!value) {
          callback(new Error('请选择短信模板'))
          return
        }
        callback()
      }
    }
  ],
  channelId: [{ required: true, message: '请选择渠道类型', trigger: 'change' }],
  countryCode: [{ required: true, message: '请选择国家', trigger: 'change' }]
})

// 添加模板选择的禁用状态控制
const isTemplateSelectDisabled = computed(() => {
  return !formData.value.recipients || formData.value.recipients.length === 0
})

const phoneNumbersInput = ref('')
const countryOptions = ref<CountryOption[]>([])
const countryLoading = ref(false)
const formRef = ref()
const queryFormRef = ref()
const messageQueryFormRef = ref()
const templateList = ref<SmsTemplateApi.SmsTemplateVO[]>([])
const templateContent = ref('')
const templateParams = ref<string[]>([])
const templateLoading = ref(false)
const hasChineseParamValues = ref(false) // 是否有参数值包含中文字符
const isFormValid = ref(false) // 表单验证状态
const paramErrors = ref<Record<string, string>>({}) // 参数错误信息

/** 禁用今天之后的日期 */
const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}

/** 格式化手机号码 */
const formatPhoneNumbers = () => {
  if (phoneNumbersInput.value) {
    const numbers = phoneNumbersInput.value.split(',').map(item => item.trim()).filter(Boolean)
    formData.value.recipients = numbers
  } else {
    formData.value.recipients = []
  }
}

/** 检查短信内容长度是否超过140字节 */
const checkSmsContentLength = (content: string): boolean => {
  // 使用Blob计算字节长度
  const blob = new Blob([content]);
  return blob.size <= 140;
}

/** 获取短信模板列表 */
const getTemplateList = async () => {
  try {
    const res = await SmsTemplateApi.getSmsTemplatePage({
      pageNo: 1,
      pageSize: 100
    })
    templateList.value = res.list || []
  } catch (error: any) {
    message.error('获取模板列表失败：' + (error.msg || '未知错误'))
  }
}

/** 获取短信模板详情 */
const getTemplateDetail = async (templateId: number) => {
  templateLoading.value = true
  try {
    const res = await SmsTemplateApi.getSmsTemplate(templateId)
    if (res) {
      templateContent.value = res.content || ''
      templateParams.value = res.variables || []
      formData.value.variables = {}
      templateParams.value.forEach((param) => {
        formData.value.variables[param] = ''
      })
    }
  } catch (error: any) {
    message.error('获取模板详情失败：' + (error.msg || '未知错误'))
  } finally {
    templateLoading.value = false
  }
}

/** 模板选择改变 */
const handleTemplateChange = (value: number | '') => {
  if (typeof value === 'number') {
    getTemplateDetail(value)
  } else {
    templateContent.value = ''
    templateParams.value = []
    formData.value.variables = {}
    hasChineseParamValues.value = false // 重置中文检查状态
  }
}

/** 获取批次列表 */
const getBatchList = async () => {
  try {
    loading.value = true
    // 准备参数，处理 status 为空字符串的情况
    const params: any = {
      pageNum: queryParams.value.pageNo,
      pageSize: queryParams.value.limit,
      batchId: queryParams.value.batchId,
      // 如果 status 是空字符串，则不传递该参数给后端
      status: queryParams.value.status === '' ? undefined : queryParams.value.status,
      createStartTime: queryParams.value.sendTimeStart,
      createEndTime: queryParams.value.sendTimeEnd
    }
    // 移除值为 undefined 的属性，避免发送给后端
    Object.keys(params).forEach(key => params[key] === undefined && delete params[key])

    const res = await SmsTemplateApi.getSmsBatches(params)
    batchList.value = res.list
    total.value = res.total
  } catch (error) {
    console.error('Failed to get batch list:', error)
  } finally {
    loading.value = false
  }
}

/** 获取短信消息列表 */
const getMessageList = async () => {
  messageLoading.value = true
  try {
    // 准备参数，处理 status 为空字符串的情况
    const params: any = {
      pageNo: messageQueryParams.value.pageNo,
      limit: messageQueryParams.value.pageSize,
      batchId: messageQueryParams.value.batchId,
      // 如果 status 是空字符串，则不传递该参数给后端
      status: messageQueryParams.value.status === '' ? undefined : messageQueryParams.value.status,
      recipientNumber: messageQueryParams.value.recipientNumber || undefined,
      sendTimeStart: messageQueryParams.value.sendTimeStart || undefined,
      sendTimeEnd: messageQueryParams.value.sendTimeEnd || undefined
    }
    // 移除值为 undefined 或空字符串的属性，避免发送给后端 (除了必要的分页参数)
    Object.keys(params).forEach(key => {
      if (key !== 'pageNo' && key !== 'limit' && (params[key] === undefined || params[key] === '')) {
        delete params[key]
      }
    })

    const res = await SmsTemplateApi.getSmsMessages(params)
    messageList.value = res.items || []
    messageTotal.value = res.meta?.total || 0
  } catch (error: any) {
    message.error('获取短信列表失败：' + (error.msg || '未知错误'))
  } finally {
    messageLoading.value = false
  }
}

/** 查询批次列表 */
const handleQuery = () => {
  queryParams.value.pageNo = 1
  if (dateRange.value?.length === 2) {
    queryParams.value.sendTimeStart = dayjs(dateRange.value[0]).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    queryParams.value.sendTimeEnd = dayjs(dateRange.value[1]).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
  } else {
    queryParams.value.sendTimeStart = ''
    queryParams.value.sendTimeEnd = ''
  }
  // status 为 undefined 时，getBatchList 函数内部会自动处理，不传递该参数
  getBatchList()
}

/** 重置查询条件 (批次) */
const resetQuery = () => {
  queryFormRef.value?.resetFields()
  // 重置日期为默认的最近 3 天
  dateRange.value = [defaultStartDate, defaultEndDate]
  queryParams.value = {
    pageNo: 1,
    limit: 10,
    batchId: '',
    status: '', // 重置为空字符串，匹配 '全部' 选项
    sendTimeStart: defaultStartDate,
    sendTimeEnd: defaultEndDate
  }
  handleQuery() // handleQuery 内部会从 dateRange 更新 queryParams 的时间
}

/** 查询消息列表 */
const handleMessageQuery = () => {
  messageQueryParams.value.pageNo = 1
  if (dateRange.value?.length === 2) {
    messageQueryParams.value.sendTimeStart = dayjs(dateRange.value[0]).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    messageQueryParams.value.sendTimeEnd = dayjs(dateRange.value[1]).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
  } else {
    messageQueryParams.value.sendTimeStart = ''
    messageQueryParams.value.sendTimeEnd = ''
  }
  getMessageList()
}

/** 重置消息查询条件 */
const resetMessageQuery = () => {
  messageQueryFormRef.value?.resetFields()
  // 不需要重置 dateRange，消息列表的时间筛选应该独立或不使用
  messageQueryParams.value = {
    pageNo: 1,
    pageSize: 10,
    batchId: currentBatch.value.id || '', // 使用当前批次ID
    recipientNumber: '',
    status: '', // 重置为空字符串，匹配 '全部'
    sendTimeStart: '', // 清空时间范围
    sendTimeEnd: ''   // 清空时间范围
  }
  getMessageList()
}

/** 查看批次详情 */
const viewBatchDetail = (row: any) => {
  currentBatch.value = row
  messageQueryParams.value = {
    pageNo: 1,
    pageSize: 10,
    batchId: row.id,
    recipientNumber: '',
    status: '',
    sendTimeStart: '',
    sendTimeEnd: ''
  }
  showBatchDetail.value = true
  getMessageList()
}

/** 获取批次详情 */
const getBatchDetail = async (batchId: string | number) => {
  try {
    const res = await SmsTemplateApi.getSmsStatus(String(batchId))
    if (res) {
      currentBatch.value = {
        ...currentBatch.value,
        total: res.totalCount || 0,
        successCount: res.successCount || 0,
        failedCount: res.failedCount || 0,
        status: res.status === 'completed' ? 'SUCCESS' 
               : res.status === 'failed' ? 'FAILED'
               : res.status === 'partially_completed' ? 'PARTIAL'
               : 'SENDING',
        createdAt: res.createdAt,
        updatedAt: res.updatedAt,
        statusUpdateTime: res.updateTime || res.updatedAt
      }
    }
  } catch (error: any) {
    message.error('获取批次详情失败：' + (error.msg || '未知错误'))
  }
}

/** 返回批次列表 */
const backToBatchList = () => {
  showBatchDetail.value = false
}

/** 打开发送对话框 */
const openSendDialog = () => {
  dialogVisible.value = true
  resetForm()
}

/** 提交表单 */
const submitForm = async () => {
  if (!formRef.value) return
  
  // 先设置加载状态
  submitLoading.value = true

  try {
    // 表单验证
    await formRef.value.validate()
    
    // 1. 验证号码数量不超过1000条
    if (formData.value.recipients.length > 1000) {
      message.error(`系统只允许一次性发送最多1000条短信，当前为${formData.value.recipients.length}条`)
      submitLoading.value = false
      return
    }
    
    // 2. 检查余额是否充足（根据号码数量计算所需费用）
    const requiredBalance = formData.value.recipients.length * 0.04
    const currentBalance = await getBalance()
    if (currentBalance < requiredBalance) {
      message.error(`您当前有${formData.value.recipients.length}条号码，余额${currentBalance.toFixed(2)}元只支持发送${Math.floor(currentBalance / 0.04)}条，请进行删减或者充值`)
      submitLoading.value = false
      return
    }

    if (!formData.value.templateId) {
      throw new Error('请选择短信模板')
    }

    if (!formData.value.countryCode) {
      throw new Error('请选择国家')
    }
    
    // 3. 检查短信内容长度不超过140字节
    if (templateContent.value && !checkSmsContentLength(templateContent.value)) {
      message.error('短信内容超过140字节限制，请缩减内容长度')
      submitLoading.value = false
      return
    }

    // 4. 检查所有参数值不包含中文
    const hasChineseParam = Object.entries(formData.value.variables).some(([key, value]) => {
      if (value && /[\u4e00-\u9fa5]/.test(String(value))) {
        message.error(`参数 ${key} 不能包含中文字符`)
        return true
      }
      return false
    })
    
    if (hasChineseParam) {
      submitLoading.value = false
      return
    }

    const params: SendSmsReqVO = {
      templateId: Number(formData.value.templateId),
      providerId: formData.value.providerId,
      recipients: formData.value.recipients,
      variables: formData.value.variables,
      countryCode: formData.value.countryCode
    }

    // 发送短信
    await SmsTemplateApi.sendSms(params)
    message.success('发送成功')
    
    // 发送成功后刷新余额
    await refreshBalance()
    
    // 关闭弹窗，刷新列表
    dialogVisible.value = false
    getBatchList()
  } catch (error: any) {
    // 显示错误消息
    message.error(error.msg || '发送失败')
  } finally {
    // 无论成功或失败，最后都关闭加载状态
    submitLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formRef.value?.resetFields()
  phoneNumbersInput.value = ''
  formData.value = {
    templateId: '',
    providerId: 0,
    recipients: [],
    variables: {},
    channelId: '',
    countryCode: ''
  }
  templateContent.value = ''
  templateParams.value = []
  hasChineseParamValues.value = false // 重置中文检查状态
}

/** 格式化日期时间 */
const formatDateTime = (dateTimeStr: string) => {
  if (!dateTimeStr) return '-'
  try {
    const date = new Date(dateTimeStr)
    if (isNaN(date.getTime())) return '-'

    return date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).replace(/\//g, '-')
  } catch {
    return '-'
  }
}

/** 渠道选择改变 */
const handleChannelChange = async (channelId: string) => {
  if (!channelId) {
    countryOptions.value = []
    formData.value.countryCode = ''
    formData.value.providerId = 0
    return
  }
  try {
    // 根据渠道ID设置providerId，数据库ID从1开始，所以这里+1
    const channelIndex = channelOptions.findIndex(channel => channel.value === channelId)
    formData.value.providerId = channelIndex !== -1 ? channelIndex + 1 : 1
    
    countryLoading.value = true
    const res = await SmsTemplateApi.getSupportCountries(channelId)
    countryOptions.value = res
  } catch (error: any) {
    message.error('获取支持的国家列表失败：' + (error.msg || '未知错误'))
  } finally {
    countryLoading.value = false
  }
}

/** 国家选择改变 */
const handleCountryChange = (countryCode: string) => {
  if (!countryCode) {
    phoneNumbersInput.value = ''
    formData.value.recipients = []
  }
}

/** 获取状态类型 */
const getStatusType = (status: string) => {
  switch (status?.toLowerCase()) {
    case 'delivered':
    case 'sent':
    case 'success':
      return 'success'
    case 'failed':
    case 'rejected':
      return 'danger'
    case 'pending':
    case 'queued':
    case 'submitted':
      return 'warning'
    default:
      return 'info'
  }
}

/** 获取状态文本 */
const getStatusText = (status: string) => {
  switch (status?.toLowerCase()) {
    case 'delivered':
    case 'sent':
    case 'success':
      return '发送成功'
    case 'failed':
      return '发送失败'
    case 'rejected':
      return '已拒绝'
    case 'pending':
      return '发送中'
    case 'queued':
      return '排队中'
    case 'submitted':
      return '已提交'
    default:
      return '未知'
  }
}

/** 刷新批次状态 */
const refreshBatchStatus = async (row: any) => {
  try {
    const res = await SmsTemplateApi.refreshBatchStatus(row.batchId)
    if (res) {
      message.success('刷新成功')
      
      // 更新批次信息
      const updatedBatch = {
        ...row,
        status: res.status === 'completed' ? 'SUCCESS' 
               : res.status === 'failed' ? 'FAILED'
               : res.status === 'partially_completed' ? 'PARTIAL'
               : 'SENDING',
        total: res.totalRecipients || 0,
        successCount: res.successCount || 0,
        failCount: res.failureCount || 0,
        statusUpdateTime: res.updateTime,
        sendTime: res.createTime,
        templateName: res.name
      }
      
      // 更新列表中的批次数据
      const index = batchList.value.findIndex(item => item.batchId === row.batchId)
      if (index !== -1) {
        batchList.value[index] = updatedBatch
      }
      
      // 如果是当前展示的批次详情，也更新详情信息
      if (showBatchDetail.value && currentBatch.value.batchId === row.batchId) {
        currentBatch.value = updatedBatch
        
        // 更新消息列表
        if (res.messages && res.messages.length > 0) {
          messageList.value = res.messages.map((msg: any) => ({
            ...msg,
            batchId: msg.batchId,
            recipientNumber: msg.recipientNumber,
            status: msg.status,
            providerMessageId: msg.providerMessageId,
            sendTime: msg.sendTime,
            statusUpdateTime: msg.statusUpdateTime,
            contentType: res.contentType,
            templateName: res.name,
            templateParams: res.templateParams
          }))
          messageTotal.value = res.messages.length
        }
      }
    }
  } catch (error: any) {
    message.error('刷新批次状态失败：' + (error.msg || '未知错误'))
  }
}

/** 验证参数值并检查总长度 */
const validateParamValue = (param: string) => {
  const value = formData.value.variables[param]
  paramErrors.value[param] = '' // 清除之前的错误

  if (value && /[\u4e00-\u9fa5]/.test(value)) {
    paramErrors.value[param] = '参数不能包含中文字符'
    // 清空包含中文的参数值
    formData.value.variables[param] = ''
    return
  }

  // 检查替换参数后的总长度
  let finalContent = templateContent.value
  Object.entries(formData.value.variables).forEach(([key, val]) => {
    finalContent = finalContent.replace(`{{${key}}}`, val || '')
  })

  if (!checkSmsContentLength(finalContent)) {
    paramErrors.value[param] = '替换参数后的内容超过140字节限制'
    formData.value.variables[param] = ''
    return
  }

  // 验证表单
  validateForm()
}

/** 参数输入时检查 */
const onParamInput = () => {
  // 检查所有参数值不包含中文
  hasChineseParamValues.value = Object.values(formData.value.variables).some(value => 
    value && /[\u4e00-\u9fa5]/.test(String(value))
  )

  // 验证表单
  validateForm()
}

/** 验证表单 */
const validateForm = async () => {
  if (!formRef.value) return false
  try {
    await formRef.value.validate()
    isFormValid.value = true
    return true
  } catch (error) {
    isFormValid.value = false
    return false
  }
}

onMounted(() => {
  // 初始化时 queryParams 已包含默认日期范围，直接查询
  getBatchList()
  getTemplateList()
})
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-form {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  :deep(.el-form-item) {
    margin-right: 0;
    margin-bottom: 16px;
  }

  .search-buttons {
    margin-left: auto;
  }
}

/* 确保表单控件有正确的宽度 */
:deep(.el-select),
:deep(.el-input),
:deep(.el-textarea) {
  width: 100% !important;
}

/* 覆盖嵌套控件的宽度 */
:deep(.el-form-item__content) {
  width: 100%;
  
  .el-select,
  .el-input,
  .el-textarea {
    width: 100% !important;
  }
  
  /* 确保内部容器也是100%宽度 */
  > div {
    width: 100%;
  }
}

/* 确保弹窗中的表单项内容区域占满 */
:deep(.el-dialog) {
  .el-form-item__content {
    flex: 1;
    width: 100%;
  }
  
  /* 优化按钮加载样式 */
  .el-button.is-loading {
    position: relative;
    pointer-events: none;
    
    .el-icon-loading {
      vertical-align: middle;
    }
    
    span {
      opacity: 0.8;
    }
  }
  
  /* 加大底部按钮间距 */
  .dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
}

.param-error {
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.2;
  color: var(--el-color-danger);
}
</style>
