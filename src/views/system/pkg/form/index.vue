<template>
  <div class="app-container">
    <el-card v-loading="loading" class="box-card">
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
          />
        </el-form-item>
        <el-form-item class="search-buttons">
          <el-button type="primary" @click="handleQuery">查询</el-button>
          <el-button @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>

      <el-empty
        v-if="!loading && (!formList || formList.length === 0)"
        description="暂无卡单信息"
      />

      <div v-else class="form-list">
        <el-card v-for="form in formList" :key="form.id" class="form-item">
          <template #header>
            <div class="form-header">
              <span>收件人：{{ form.name }}</span>
              <div class="form-actions">
                <span class="form-time">创建时间：{{ formatDate(form.createdAt) }}</span>
                <el-button type="danger" link @click="handleDelete(Number(form.id))">
                  <el-icon><Delete /></el-icon>
                  删除
                </el-button>
              </div>
            </div>
          </template>

          <el-descriptions :column="2" border>
            <el-descriptions-item label="地址1">{{ form.address1 }}</el-descriptions-item>
            <el-descriptions-item label="地址2">{{ form.address2 || '-' }}</el-descriptions-item>
            <el-descriptions-item label="城市">{{ form.city }}</el-descriptions-item>
            <el-descriptions-item label="州/省">{{ form.state }}</el-descriptions-item>
            <el-descriptions-item label="邮编">{{ form.postalCode }}</el-descriptions-item>
            <el-descriptions-item label="邮箱">{{ form.email }}</el-descriptions-item>
            <el-descriptions-item label="电话">{{ form.phone }}</el-descriptions-item>
            <el-descriptions-item label="持卡人">{{ form.cardholder }}</el-descriptions-item>
            <el-descriptions-item label="卡号">
              <div class="copy-wrapper">
                <span>{{ form.cardNumber }}</span>
                <el-button type="primary" link @click="copyText(form.cardNumber)">
                  <el-icon><DocumentCopy /></el-icon>
                </el-button>
              </div>
            </el-descriptions-item>
            <el-descriptions-item label="有效期">
              <div class="copy-wrapper">
                <span>{{ formatExpireDate(form.expireDate) }}</span>
                <el-button type="primary" link @click="copyText(formatExpireDate(form.expireDate))">
                  <el-icon><DocumentCopy /></el-icon>
                </el-button>
              </div>
            </el-descriptions-item>
            <el-descriptions-item label="CVV">
              <div class="copy-wrapper">
                <span>{{ form.cvv }}</span>
                <el-button type="primary" link @click="copyText(form.cvv)">
                  <el-icon><DocumentCopy /></el-icon>
                </el-button>
              </div>
            </el-descriptions-item>
            <el-descriptions-item label="更新时间">{{
              formatDate(form.updatedAt)
            }}</el-descriptions-item>
          </el-descriptions>
        </el-card>
      </div>

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
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getPkgFormList, deletePkgForm } from '@/api/system/pkgform'
import type { PkgFormVO, PkgFormQuery } from '@/api/system/pkgform/types'
import { ElMessage, ElMessageBox } from 'element-plus'
import { DocumentCopy, Delete } from '@element-plus/icons-vue'

defineOptions({
  name: 'PkgFormView'
})

const loading = ref(false)
const formList = ref<PkgFormVO[]>([])
const total = ref(0)
const dateRange = ref<string[]>([])

// 查询参数
const queryParams = ref<PkgFormQuery>({
  pageNo: 1,
  pageSize: 10,
  createTime: '',
  updateTime: ''
})

// 查询表单
const queryFormRef = ref()

// 格式化日期
const formatDate = (date: string) => {
  return new Date(date).toLocaleString()
}

// 格式化有效期
const formatExpireDate = (date: string) => {
  if (!date) return '-'
  const [month, year] = date.split('/')
  return `${month}/${year.slice(-2)}`
}

// 复制文本
const copyText = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      ElMessage.success('复制成功')
    })
    .catch(() => {
      ElMessage.error('复制失败')
    })
}

// 获取数据
const getData = async () => {
  loading.value = true
  try {
    const params = { ...queryParams.value }
    if (dateRange.value.length === 2) {
      params.createTime = dateRange.value[0]
      params.updateTime = dateRange.value[1]
    }
    const res = await getPkgFormList(params)
    console.log('API Response:', res)
    formList.value = res.list || []
    total.value = res.total || 0
    console.log('Updated formList:', formList.value)
    console.log('Updated total:', total.value)
  } catch (error) {
    console.error('获取卡单信息失败:', error)
    formList.value = []
    total.value = 0
  } finally {
    loading.value = false
  }
}

// 查询按钮操作
const handleQuery = () => {
  queryParams.value.pageNo = 1
  getData()
}

// 重置按钮操作
const resetQuery = () => {
  queryFormRef.value?.resetFields()
  dateRange.value = []
  handleQuery()
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

// 删除卡单信息
const handleDelete = (id: number) => {
  ElMessageBox.confirm('确定要删除该卡单信息吗？', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      try {
        await deletePkgForm(id)
        ElMessage.success('删除成功')
        getData() // 重新加载数据
      } catch (error: any) {
        console.error('删除失败:', error)
        ElMessage.error(error.msg || '删除失败')
      }
    })
    .catch(() => {
      // 用户取消删除
    })
}

onMounted(() => {
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

.form-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}

.form-item {
  margin-bottom: 16px;
  transition: all 0.3s ease;
}

.form-item:hover {
  box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-time {
  color: #909399;
}

.form-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

:deep(.el-descriptions__label) {
  width: 100px;
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
</style>
