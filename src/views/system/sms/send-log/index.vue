<!-- 搜索表单 -->
<el-form :model="queryParams" ref="queryFormRef" :inline="true" class="search-form">
  <el-form-item label="手机号码" prop="mobile">
    <el-input
      v-model="queryParams.mobile"
      placeholder="请输入手机号码"
      clearable
      style="width: 200px"
      @keyup.enter="getList"
    />
  </el-form-item>
  <el-form-item label="发送状态" prop="status">
    <el-select
      v-model="queryParams.status"
      placeholder="请选择发送状态"
      clearable
      style="width: 240px"
    >
      <el-option
        v-for="dict in statusOptions"
        :key="dict.value"
        :label="dict.label"
        :value="dict.value"
      />
    </el-select>
  </el-form-item>
  <el-form-item label="发送时间" prop="sendTime">
    <el-date-picker
      v-model="queryParams.sendTime"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      value-format="YYYY-MM-DD"
      style="width: 240px"
    />
  </el-form-item>
  <el-form-item class="search-buttons">
    <el-button type="primary" @click="getList">
      <Icon icon="ep:search" class="mr-5px" />搜索
    </el-button>
    <el-button @click="resetQuery">
      <Icon icon="ep:refresh" class="mr-5px" />重置
    </el-button>
  </el-form-item>
</el-form>

<!-- 数据表格 -->
<el-table v-loading="loading" :data="list" border>
  <el-table-column type="index" width="50" align="center" />
  <el-table-column label="手机号码" prop="mobile" min-width="120" />
  <el-table-column label="短信内容" prop="content" min-width="200" show-overflow-tooltip />
  <el-table-column label="发送状态" width="100" align="center">
    <template #default="scope">
      <el-tag :type="getStatusType(scope.row.status)">
        {{ getStatusText(scope.row.status) }}
      </el-tag>
    </template>
  </el-table-column>
  <el-table-column label="发送时间" min-width="160" align="center">
    <template #default="scope">
      {{ formatDateTime(scope.row.sendTime) }}
    </template>
  </el-table-column>
  <el-table-column label="状态更新" min-width="160" align="center">
    <template #default="scope">
      {{ formatDateTime(scope.row.updateTime) }}
    </template>
  </el-table-column>
  <el-table-column label="详情" min-width="200" show-overflow-tooltip>
    <template #default="scope">
      <template v-if="scope.row.status === 'sent'">
        发送成功，消息ID：{{ scope.row.providerMessageId }}
      </template>
      <template v-else-if="scope.row.status === 'failed'">
        发送失败：{{ scope.row.errorMessage || '未知错误' }}
      </template>
      <template v-else>
        {{ getStatusText(scope.row.status) }}
      </template>
    </template>
  </el-table-column>
</el-table>

<style lang="scss" scoped>
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