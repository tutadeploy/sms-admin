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
              style="width: 200px"
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
          <el-table-column label="批次号" prop="batchId" min-width="120" show-overflow-tooltip />
          <el-table-column label="总数" prop="total" width="80" align="center" />
          <el-table-column label="成功数" prop="successCount" width="80" align="center" />
          <el-table-column label="失败数" prop="failCount" width="80" align="center" />
          <el-table-column label="发送状态" prop="status" width="100" align="center">
            <template #default="scope">
              <el-tag
                :type="
                  scope.row.status === 'SUCCESS'
                    ? 'success'
                    : scope.row.status === 'FAILED'
                      ? 'danger'
                      : 'warning'
                "
              >
                {{
                  scope.row.status === 'SUCCESS'
                    ? '发送成功'
                    : scope.row.status === 'FAILED'
                      ? '发送失败'
                      : '发送中'
                }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column
            label="短信模板"
            prop="templateName"
            min-width="120"
            show-overflow-tooltip
          />
          <el-table-column label="发送时间" prop="sendTime" min-width="160" align="center">
            <template #default="scope">
              {{ formatDateTime(scope.row.sendTime || scope.row.createdAt) }}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="150" align="center" fixed="right">
            <template #default="scope">
              <el-button link type="primary" @click="viewBatchDetail(scope.row)"> 详情 </el-button>
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
          </div>
        </template>

        <!-- 批次信息 -->
        <el-descriptions class="mb-4" :column="3" border>
          <el-descriptions-item label="批次号" :span="1">
            <el-tag type="info">{{ currentBatch.batchId }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="发送时间" :span="1">
            {{ formatDateTime(currentBatch.sendTime || currentBatch.createdAt) }}
          </el-descriptions-item>
          <el-descriptions-item label="发送状态" :span="1">
            <el-tag :type="getStatusType(currentBatch.status)">
              {{ getStatusText(currentBatch.status) }}
            </el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="模板名称" :span="2">
            {{ currentBatch.templateName || '-' }}
          </el-descriptions-item>
          <el-descriptions-item label="发送统计" :span="1">
            <el-space>
              <span>总数: <el-tag type="info">{{ currentBatch.total || 0 }}</el-tag></span>
              <span>成功: <el-tag type="success">{{ currentBatch.successCount || 0 }}</el-tag></span>
              <span>失败: <el-tag type="danger">{{ currentBatch.failCount || 0 }}</el-tag></span>
            </el-space>
          </el-descriptions-item>
        </el-descriptions>

        <!-- 消息列表搜索表单 -->
        <el-form :model="messageQueryParams" ref="messageQueryFormRef" :inline="true" class="search-form">
          <el-form-item label="手机号码" prop="mobile">
            <el-input
              v-model="messageQueryParams.mobile"
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
              style="width: 200px"
            >
              <el-option
                v-for="dict in statusOptions"
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
          <el-table-column label="状态" width="100" align="center">
            <template #default="scope">
              <el-tag :type="getStatusType(scope.row.status)">
                {{ getStatusText(scope.row.status) }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="供应商消息ID" prop="providerMessageId" min-width="150" show-overflow-tooltip />
          <el-table-column label="短信内容" min-width="200" show-overflow-tooltip>
            <template #default="scope">
              <template v-if="scope.row.contentType === 'template'">
                <div>模板：{{ scope.row.templateName }}</div>
                <div v-if="scope.row.templateParams">参数：{{ JSON.stringify(scope.row.templateParams) }}</div>
              </template>
              <template v-else>
                {{ scope.row.directContent }}
              </template>
            </template>
          </el-table-column>
          <el-table-column label="发送时间" min-width="160" align="center">
            <template #default="scope">
              {{ formatDateTime(scope.row.sendTime) }}
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
            style="width: 100%"
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
          <el-input
            v-model="templateContent"
            type="textarea"
            :rows="3"
            readonly
            placeholder="选择模板后显示模板内容"
            class="!w-full"
          />
        </el-form-item>
        <el-form-item v-for="param in templateParams" :key="param" :label="param">
          <el-input v-model="formData.variables[param]" placeholder="请输入参数值" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitForm" :loading="submitLoading">发送</el-button>
        </div>
      </template>
    </el-dialog>
  </ContentWrap>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from 'vue'
import {  SendSmsReqVO } from '@/api/system/sms/smsTemplate/index'
import * as SmsTemplateApi from '@/api/system/sms/smsTemplate/index'

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

// 批次列表数据
const batchList = ref<any[]>([])
const total = ref(0)
const dateRange = ref<[string, string] | []>([])

// 消息列表数据
const messageList = ref<any[]>([])
const messageTotal = ref(0)
const currentBatch = ref<any>({})

// 查询参数
const queryParams = ref({
  pageNo: 1,
  limit: 10,
  batchId: '',
  status: undefined,
  beginTime: '',
  endTime: ''
})

// 消息列表查询参数
const messageQueryParams = ref({
  pageNo: 1,
  pageSize: 10,
  batchId: '',
  mobile: '',
  status: undefined
})

// 状态选项
const statusOptions = [
  { label: '发送成功', value: 'delivered' },
  { label: '发送失败', value: 'failed' },
  { label: '发送中', value: 'pending' },
  { label: '已提交', value: 'submitted' },
  { label: '已拒绝', value: 'rejected' },
  { label: '未知', value: 'unknown' }
]

// 渠道选项
const channelOptions = [{ label: '线路一', value: 'buka' }]

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
const formRef = ref()
const queryFormRef = ref()
const messageQueryFormRef = ref()
const templateList = ref<SmsTemplateApi.SmsTemplateVO[]>([])
const templateContent = ref('')
const templateParams = ref<string[]>([])

/** 格式化手机号码 */
const formatPhoneNumbers = () => {
  if (phoneNumbersInput.value) {
    const numbers = phoneNumbersInput.value.split(',').map(item => item.trim()).filter(Boolean)
    formData.value.recipients = numbers
  } else {
    formData.value.recipients = []
  }
}

/** 获取短信模板列表 */
const getTemplateList = async () => {
  try {
    const res = await SmsTemplateApi.getSmsTemplatePage({
      pageNo: 1,
      pageSize: 100,
      name: '',
      content: ''
    })
    templateList.value = res.list || []
  } catch (error: any) {
    message.error('获取模板列表失败：' + (error.msg || '未知错误'))
  }
}

/** 获取短信模板详情 */
const getTemplateDetail = async (templateId: number) => {
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
  }
}

/** 获取批次列表 */
const getBatchList = async () => {
  loading.value = true
  try {
    if (dateRange.value?.length === 2) {
      queryParams.value.beginTime = dateRange.value[0]
      queryParams.value.endTime = dateRange.value[1]
    } else {
      queryParams.value.beginTime = ''
      queryParams.value.endTime = ''
    }

    const res = await SmsTemplateApi.getSmsMessages({
      pageNo: queryParams.value.pageNo,
      limit: queryParams.value.limit,
      status: queryParams.value.status,
      batchId: queryParams.value.batchId,
      recipientNumber: '',
      tenantId: undefined
    })

    const batchMap = new Map()
    if (res.items?.length > 0) {
      res.items.forEach((item) => {
        if (!batchMap.has(item.batchId)) {
          batchMap.set(item.batchId, {
            batchId: item.batchId,
            templateName: item.templateName || '',
            sendTime: item.sendTime,
            status: item.status,
            total: 0,
            successCount: 0,
            failCount: 0
          })
        }

        const batch = batchMap.get(item.batchId)
        batch.total++
        if (item.status === 'delivered' || item.status === 'sent') {
          batch.successCount++
          batch.status = 'SUCCESS'
        } else if (item.status === 'failed' || item.status === 'rejected') {
          batch.failCount++
          batch.status = batch.successCount === 0 ? 'FAILED' : 'PARTIAL'
        } else {
          batch.status = 'SENDING'
        }
      })
    }

    batchList.value = Array.from(batchMap.values())
    total.value = res.meta?.total || batchList.value.length
  } catch (error: any) {
    message.error('获取批次列表失败：' + (error.msg || '未知错误'))
  } finally {
    loading.value = false
  }
}

/** 获取短信消息列表 */
const getMessageList = async () => {
  messageLoading.value = true
  try {
    const res = await SmsTemplateApi.getSmsMessages({
      pageNo: messageQueryParams.value.pageNo,
      limit: messageQueryParams.value.pageSize,
      batchId: messageQueryParams.value.batchId,
      status: messageQueryParams.value.status,
      recipientNumber: messageQueryParams.value.mobile || ''
    })

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
  getBatchList()
}

/** 重置查询条件 */
const resetQuery = () => {
  queryFormRef.value?.resetFields()
  dateRange.value = []
  handleQuery()
}

/** 重置消息查询条件 */
const resetMessageQuery = () => {
  messageQueryFormRef.value?.resetFields()
  getMessageList()
}

/** 查看批次详情 */
const viewBatchDetail = (row: any) => {
  currentBatch.value = row
  messageQueryParams.value = {
    pageNo: 1,
    pageSize: 10,
    batchId: row.batchId,
    mobile: '',
    status: undefined
  }
  showBatchDetail.value = true
  getBatchDetail(row.batchId)
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
        updatedAt: res.updatedAt
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

  try {
    await formRef.value.validate()
    submitLoading.value = true

    if (!formData.value.templateId) {
      throw new Error('请选择短信模板')
    }

    if (!formData.value.countryCode) {
      throw new Error('请选择国家')
    }

    const params: SendSmsReqVO = {
      templateId: Number(formData.value.templateId),
      providerId: formData.value.providerId,
      recipients: formData.value.recipients,
      variables: formData.value.variables,
      countryCode: formData.value.countryCode
    }

    await SmsTemplateApi.sendSms(params)
    message.success('发送成功')
    dialogVisible.value = false
    getBatchList()
  } catch (error: any) {
    message.error(error.msg || '发送失败')
  } finally {
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
    
    const res = await SmsTemplateApi.getSupportCountries(channelId)
    countryOptions.value = res
  } catch (error: any) {
    message.error('获取支持的国家列表失败：' + (error.msg || '未知错误'))
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

onMounted(() => {
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
  justify-content: flex-end;
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
</style>
