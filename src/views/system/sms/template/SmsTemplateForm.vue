<template>
  <el-dialog
    :title="dialogTitle"
    v-model="dialogVisible"
    width="45%"
    append-to-body
    destroy-on-close
  >
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="120px"
      v-loading="formLoading"
    >
      <el-form-item label="模板名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入模板名称" @input="validateForm" />
      </el-form-item>
      <el-form-item label="模板内容" prop="content">
        <el-input
          v-model="formData.content"
          type="textarea"
          placeholder="请输入模板内容"
          :rows="4"
          @input="onContentInput"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="submitForm" :disabled="formLoading || hasChineseChars || !isFormValid"> 确 定 </el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import * as SmsTemplateApi from '@/api/system/sms/smsTemplate'

defineOptions({ name: 'SmsTemplateForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const hasChineseChars = ref(false) // 是否包含中文字符
const formData = ref({
  id: undefined as number | undefined,
  name: '',
  content: '',
  variables: [] as string[],
  providerTemplateId: ''
})
const formRules = reactive({
  name: [{ required: true, message: '模板名称不能为空', trigger: 'blur' }],
  content: [
    { required: true, message: '模板内容不能为空', trigger: 'blur' },
    { 
      validator: (rule: any, value: string, callback: Function) => {
        if (!value) {
          hasChineseChars.value = false
          callback()
          return
        }
        
        // 检查是否包含中文字符
        hasChineseChars.value = /[\u4e00-\u9fa5]/.test(value)
        if (hasChineseChars.value) {
          callback(new Error('短信模板内容不允许包含中文字符'))
          return
        }

        // 检查字节长度
        const blob = new Blob([value])
        if (blob.size > 140) {
          callback(new Error('短信模板内容不能超过140字节'))
          return
        }

        callback()
      }, 
      trigger: ['blur', 'input'] 
    }
  ]
})
const formRef = ref() // 表单 Ref
const isFormValid = ref(false) // 表单验证状态

/** 打开弹窗 */
const open = async (type: string, id?: number) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      const template = await SmsTemplateApi.getSmsTemplate(id)
      formData.value = {
        id: template.id,
        name: template.name,
        content: template.content,
        variables: template.variables || [],
        providerTemplateId: template.providerTemplateId || ''
      }
    } finally {
      formLoading.value = false
    }
  }
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 生成唯一的模板ID */
const generateTemplateId = (): string => {
  return `SMS_${Date.now()}_${Math.floor(Math.random() * 10000)}`
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

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  if (!await validateForm()) return
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value

    if (formType.value === 'create') {
      // 获取当前租户的模板数量 - 请求第1页，每页1条，检查总数
      const res = await SmsTemplateApi.getSmsTemplatePage({
        pageNo: 1,
        pageSize: 1 // 只需获取总数，无需获取所有数据
      })
      if (res.total >= 10) {
        message.error('当前租户模板数量已达上限(10个)')
        return // 阻止创建
      }

      // 新增时自动生成code
      const generatedCode = generateTemplateId()

      // 创建模板
      await SmsTemplateApi.createSmsTemplate({
        name: data.name,
        providerTemplateId: generatedCode,
        content: data.content,
        variables: data.variables
      })
      message.success(t('common.createSuccess'))
    } else {
      if (!data.id) {
        message.error('模板ID不能为空')
        return
      }

      // 修改时使用已有的providerTemplateId，并将id作为路由参数
      await SmsTemplateApi.updateSmsTemplate(data.id, {
        name: data.name,
        providerTemplateId: data.providerTemplateId,
        content: data.content,
        variables: data.variables
      })
      message.success(t('common.updateSuccess'))
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    id: undefined,
    name: '',
    content: '',
    variables: [],
    providerTemplateId: ''
  }
  formRef.value?.resetFields()
}

/** 从模板内容中提取变量 */
const extractVariables = (content: string) => {
  const matches = content.match(/\{\{([^}]+)\}\}/g) || []
  formData.value.variables = matches.map((match) => match.slice(2, -2))
}

/** 内容输入时检查中文字符 */
const onContentInput = async (value: string) => {
  // 检查内容中是否包含中文字符
  hasChineseChars.value = /[\u4e00-\u9fa5]/.test(value)
  
  // 提取变量
  extractVariables(value)
  
  // 验证表单
  await validateForm()
}
</script>
