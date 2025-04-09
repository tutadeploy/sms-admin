# 后端修改建议

## 1. 修改菜单组件路径

需要修改两条菜单记录的组件路径：

1. 发送记录菜单（ID: 4）：
   - 将 component 字段值从 `sms/send-log/index.vue` 改为 `system/sms/record/send.vue`

2. 接收记录菜单（ID: 5）：
   - 将 component 字段值从 `sms/receive-log/index.vue` 改为 `system/sms/record/receive.vue`

## 2. 确保短信管理菜单配置正确

短信管理菜单（ID: 1）的配置应该如下：

```json
{
    "id": 1,
    "name": "短信管理",
    "path": "/sms",
    "component": "Layout",
    "componentName": "Sms",
    "icon": "ep:message",
    "visible": true,
    "keepAlive": true,
    "alwaysShow": true,
    "redirect": "/sms/template",  // 确保有这个属性，用于指定默认显示的子菜单
    "parentId": 0,
    "children": [...]
}
```

## 修改说明

1. 组件路径修改：
   - 原因：前端实际的组件文件路径与后端配置的路径不匹配
   - 影响：导致路由无法正确加载组件，出现 "missing a component(s)" 错误

2. 菜单展开配置：
   - `alwaysShow: true` 已经配置正确，这确保了菜单始终显示为展开模式
   - `redirect` 属性用于指定默认显示的子菜单，建议设置为 "/sms/template"

## 预期效果

完成以上修改后：
1. 发送记录和接收记录页面将可以正常显示
2. 短信管理菜单将在初始化时自动展开
3. 默认会显示模板管理页面

## SQL 参考

```sql
-- 修改发送记录菜单的组件路径
UPDATE system_menu 
SET component = 'system/sms/record/send.vue'
WHERE id = 4;

-- 修改接收记录菜单的组件路径
UPDATE system_menu 
SET component = 'system/sms/record/receive.vue'
WHERE id = 5;

-- 如果需要添加 redirect（如果还没有的话）
UPDATE system_menu 
SET redirect = '/sms/template'
WHERE id = 1;
```
