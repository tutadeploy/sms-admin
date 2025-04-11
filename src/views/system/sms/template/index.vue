<template>
  <!-- <doc-alert title="短信配置" url="https://doc.iocoder.cn/sms/" /> -->

  <div class="flex-container">
    <ContentWrap>
      <!-- 搜索工作栏 -->
      <el-form
        class="-mb-15px"
        :model="queryParams"
        ref="queryFormRef"
        :inline="true"
        label-width="68px"
        @submit.prevent
      >
        <el-row justify="space-between" class="w-full" :gutter="20">
          <el-col :span="16">
            <el-form-item label="名称" prop="name">
              <el-input
                v-model="queryParams.name"
                placeholder="请输入模板名称"
                clearable
                style="width: 200px"
                @keyup.enter="handleQuery"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8" style="display: flex; justify-content: flex-end">
            <el-form-item style="margin-right: 0">
              <div style="display: flex; justify-content: flex-end; gap: 8px">
                <el-button @click="handleQuery">
                  <Icon icon="ep:search" class="mr-5px" /> 搜索
                </el-button>
                <el-button @click="resetQuery">
                  <Icon icon="ep:refresh" class="mr-5px" /> 重置
                </el-button>
                <el-button
                  type="primary"
                  plain
                  @click="openForm('create')"
                  v-hasPermi="['system:sms-template:create']"
                >
                  <Icon icon="ep:plus" class="mr-5px" /> 新增
                </el-button>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </ContentWrap>

    <!-- 列表 -->
    <ContentWrap class="flex-content">
      <el-table v-loading="loading" :data="list" :show-header="true" border>
        <el-table-column
          label="模板名称"
          align="center"
          prop="name"
          min-width="120"
          :show-overflow-tooltip="true"
        />
        <el-table-column
          label="模板内容"
          align="center"
          prop="content"
          min-width="300"
          :show-overflow-tooltip="true"
        />
        <el-table-column
          label="创建时间"
          align="center"
          prop="createTime"
          width="180"
        >
          <template #default="scope">
            {{ formatDateTime(scope.row.createTime) }}
          </template>
        </el-table-column>
        <el-table-column
          label="更新时间"
          align="center"
          prop="updateTime"
          width="180"
        >
          <template #default="scope">
            {{ formatDateTime(scope.row.updateTime) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="200" fixed="right">
          <template #default="scope">
            <el-button
              type="primary"
              link
              @click="openForm('update', scope.row.id)"
              v-hasPermi="['system:sms-template:update']"
            >
              修改
            </el-button>
            <el-button
              type="danger"
              link
              @click="handleDelete(scope.row.id)"
              v-hasPermi="['system:sms-template:delete']"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
        <template #empty>
          <el-empty description="暂无数据" />
        </template>
      </el-table>
    </ContentWrap>

    <!-- 表单弹窗：添加/修改 -->
    <SmsTemplateForm ref="formRef" @success="getList" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import {     ElMessageBox } from 'element-plus'
import * as SmsTemplateApi from '@/api/system/sms/smsTemplate/index'
import SmsTemplateForm from './SmsTemplateForm.vue'
import { useMessage } from '@/hooks/web/useMessage'

defineOptions({ name: 'SystemSmsTemplate' })

const message = useMessage()
const loading = ref(false)
const list = ref<SmsTemplateApi.SmsTemplateVO[]>([])
const queryFormRef = ref()
const formRef = ref()
const queryParams = ref({
  pageNo: 1,
  pageSize: 100,
  name: '',
  status: undefined as undefined | string
})
const total = ref(0)

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const res = await SmsTemplateApi.getSmsTemplatePage({
      pageNo: queryParams.value.pageNo,
      pageSize: queryParams.value.pageSize,
      name: queryParams.value.name
    })
    list.value = res.list || []
    total.value = res.total || 0
  } catch (error: any) {
    message.error('获取短信模板列表失败：' + (error.msg || '未知错误'))
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
  queryFormRef.value?.resetFields()
  queryParams.value = {
    pageNo: 1,
    pageSize: 100,
    name: '',
    status: undefined
  }
  handleQuery()
}

/** 打开表单 */
const openForm = (type: string, id?: number) => {
  formRef.value?.open(type, id)
}

/** 删除按钮操作 */
const handleDelete = async (id: number) => {
  try {
    await ElMessageBox.confirm('是否确认删除该短信模板?', '警告', {
      type: 'warning'
    })
    await SmsTemplateApi.deleteSmsTemplate(id)
    message.success('删除成功')
    await getList()
  } catch (error: any) {
    if (error !== 'cancel') {
      message.error('删除失败：' + (error.msg || '未知错误'))
    }
  }
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

onMounted(() => {
  getList()
})
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 150px); /* 减去头部和底部版权区域的高度 */
  background-color: var(--el-bg-color-page);
}

.flex-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  
  :deep(.el-table) {
    flex: 1;
    background-color: var(--el-bg-color);
    
    .el-table__inner-wrapper {
      height: 100%;
      
      .el-table__body-wrapper {
        overflow-y: auto;
        
        .el-table__row:last-child {
          td {
            border-bottom: none;
          }
        }
      }
    }
  }
}

:deep(.el-form) {
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  background-color: var(--el-bg-color);
  border-radius: 4px;
  
  .el-row {
    width: 100%;
    margin: 0 !important;
  }

  .el-form-item {
    margin-bottom: 0;
  }

  .el-col {
    padding: 0;
  }
}

:deep(.content-wrap) {
  display: flex;
  height: 100%;
  margin-bottom: 16px;
  flex-direction: column;

  &:last-child {
    margin-bottom: 0;
    flex: 1;
  }
}

:deep(.el-button--link) {
  height: 28px;
  padding: 0 8px;
}
</style>
