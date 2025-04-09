# API 接口规范文档

## 一、基础规范

### 1. 请求格式

#### 1.1 GET请求
```typescript
{
  // 分页参数
  pageNo: number      // 页码
  pageSize: number    // 每页条数
  
  // 查询条件
  [key: string]: any  // 其他查询条件
}
```

#### 1.2 POST/PUT请求
```typescript
{
  // 业务数据结构
  [key: string]: any
}
```

### 2. 响应格式

#### 2.1 统一响应结构
```typescript
{
  code: number        // 状态码：0-成功，其他-失败
  data: T            // 业务数据
  msg: string        // 提示信息
}
```

#### 2.2 分页响应结构
```typescript
{
  code: number
  data: {
    list: T[]       // 数据列表
    total: number   // 总条数
  }
  msg: string
}
```

#### 2.3 错误响应结构
```typescript
{
  statusCode: number   // HTTP状态码
  message: string     // 错误信息
  timestamp: string   // 时间戳
  path: string       // 请求路径
  method: string     // 请求方法
}
```

## 二、认证授权

### 1. Token机制

#### 1.1 刷新Token接口
```typescript
POST /system/auth/refresh-token
Request:
{
  refreshToken: string;   // 刷新令牌
  sessionId?: string;     // 可选的会话ID
}

Response:
{
  data: {
    accessToken: string;    // 新的访问令牌
    refreshToken: string;   // 新的刷新令牌
    expiresTime: number;    // 过期时间戳
    sessionId?: string;     // 会话ID
  }
}
```

#### 1.2 认证请求头
```typescript
headers: {
  'Authorization': `Bearer ${token}`,
  'tenant-id': tenantId  // 如果有租户系统
}
```

#### 1.3 错误状态说明
- Token格式无效：直接要求重新登录
- Token已过期：尝试刷新Token
- Token已被撤销：直接要求重新登录
- 用户不存在：直接要求重新登录
- 用户已被禁用：显示禁用提示
- 刷新令牌验证失败：直接要求重新登录

## 三、接口路径规范

### 1. 路径命名规则
- 使用kebab-case(短横线)命名
- 格式：模块名/子模块名/操作
- 示例：/system/dict-type/create

### 2. HTTP方法规范
- GET: 查询操作
  - /xxx/page - 分页查询
  - /xxx/list - 列表查询
  - /xxx/get - 详情查询
  - /xxx/list-all-simple - 简单下拉列表
- POST: 创建操作
  - /xxx/create
- PUT: 更新操作
  - /xxx/update
- DELETE: 删除操作
  - /xxx/delete

### 3. 特殊接口格式

#### 3.1 文件上传
```typescript
// 请求格式：FormData
// 响应格式
{
  code: number
  data: {
    url: string    // 文件访问地址
    name: string   // 文件名
  }
  msg: string
}
```

#### 3.2 文件下载
```typescript
// 响应格式：Blob类型
```

#### 3.3 批量操作
```typescript
// 批量删除
DELETE /api/xxx/batch?ids=1,2,3

// 批量更新
PUT /api/xxx/batch
{
  ids: number[]
  [key: string]: any
}
```

## 四、规范统一建议

### 1. 命名统一
- 分页参数：统一使用 pageNo + pageSize
- 分页返回：统一使用 list + total
- 时间字段：统一使用 xxxTime 格式（createTime, updateTime, sendTime等）
- ID参数：统一使用Query参数方式 ?id=1

### 2. 版本控制
- 建议添加API版本号：/v1/system/user
- 重大变更使用新版本号

### 3. 错误码规范
```typescript
{
  statusCode: number
  message: string  // 具体错误信息，如："Token 已过期"/"Token 格式无效"
  timestamp: string
  path: string
  method: string
}
```

### 4. 安全规范
- 所有接口使用HTTPS
- 敏感数据传输需要加密
- Token存储使用sessionStorage
- 定期刷新机制
- 异常请求限制

## 五、主要业务模块

### 1. 系统管理(/system/*)
- 用户管理(/user/*)
- 角色管理(/role/*)
- 菜单管理(/menu/*)
- 部门管理(/dept/*)
- 岗位管理(/post/*)
- 字典管理(/dict/*)
- 操作日志(/operate-log/*)
- 登录日志(/login-log/*)

### 2. 支付模块(/pay/*)
- 支付订单(/order/*)
- 退款订单(/refund/*)
- 支付渠道(/channel/*)
- 钱包交易(/wallet/*)

### 3. 会员模块(/member/*)
- 会员管理(/user/*)
- 会员等级(/level/*)
- 会员分组(/group/*)
- 积分记录(/point/*)

### 4. 商城模块(/mall/*)
- 商品管理(/product/*)
- 订单管理(/trade/order/*)
- 售后服务(/trade/after-sale/*)
- 物流配送(/trade/delivery/*)
- 营销管理(/promotion/*)
