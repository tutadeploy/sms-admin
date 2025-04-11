<template>
  <!-- <doc-alert title="短信配置" url="https://doc.iocoder.cn/sms/" /> -->

  <div class="flex-container">
    <ContentWrap>
      <!-- 操作栏 -->
      <el-row :gutter="10" class="mb-8px">
        <el-col :span="1.5">
          <el-button
            type="primary"
            plain
            @click="openForm('create')"
            v-hasPermi="['system:sms-template:create']"
          >
            <Icon icon="ep:plus" class="mr-5px" /> 新增
          </el-button>
        </el-col>
      </el-row>

      <!-- 列表 -->
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
            {{ formatDate(scope.row.createTime) }}
          </template>
        </el-table-column>
        <el-table-column
          label="更新时间"
          align="center"
          prop="updateTime"
          width="180"
        >
          <template #default="scope">
            {{ formatDate(scope.row.updateTime) }}
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

    <!-- 由于数据量少，暂时移除分页 -->
    <!-- <Pagination
      v-model:total="total"
      v-model:page="queryParams.pageNo"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    /> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { ElMessageBox } from 'element-plus'
import * as SmsTemplateApi from '@/api/system/sms/smsTemplate'
import SmsTemplateForm from './SmsTemplateForm.vue'
import { useMessage } from '@/hooks/web/useMessage'
import { formatDate } from '@/utils/formatTime' // 使用 formatDate 替代 formatDateTime

defineOptions({ name: 'SystemSmsTemplate' })

const message = useMessage()
const loading = ref(false)
const list = ref<SmsTemplateApi.SmsTemplateVO[]>([])
const formRef = ref()
// const total = ref(0) // 暂时不需要总数，因为移除了分页

// 移除查询相关 ref
// const queryFormRef = ref()
// const dateRange = ref<[string, string] | []>([])
// const statusOptions = [...] // 移除
// const queryParams = ref({...}) // 移除

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    // 由于数据量少，直接获取所有数据，不再分页
    // 作为一个临时的替代方案，可以请求一个很大的 pageSize 来获取所有数据
    const res = await SmsTemplateApi.getSmsTemplatePage({ pageNo: 1, pageSize: 1000 }) // 获取前1000条
    
    list.value = res.list || []
    // total.value = res.total || 0 // 暂时不需要
  } catch (error: any) {
    message.error('获取短信模板列表失败：' + (error.msg || '未知错误'))
  } finally {
    loading.value = false
  }
}

// 移除 handleQuery 和 resetQuery
// const handleQuery = () => {...}
// const resetQuery = () => {...}

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
    await getList() // 重新获取列表
  } catch (error: any) {
     message.error('删除失败：' + (error.msg || '未知错误'))
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
