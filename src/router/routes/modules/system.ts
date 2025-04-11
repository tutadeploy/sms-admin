const sms = {
  path: '/sms',
  name: 'Sms',
  redirect: '/sms/template',
  meta: {
    title: '短信管理',
    icon: 'ep:message',
    alwaysShow: true
  },
  children: [
    {
      path: 'template',
      component: () => import('@/views/system/sms/template/index.vue'),
      name: 'SmsTemplate',
      meta: {
        title: '短信模板'
      }
    },
    {
      path: 'send-log',
      component: () => import('@/views/system/sms/record/send.vue'),
      name: 'SmsSendRecord',
      meta: {
        title: '发送记录'
      }
    },
    {
      path: 'receive-log',
      component: () => import('@/views/system/sms/record/receive.vue'),
      name: 'SmsReceiveRecord',
      meta: {
        title: '接收记录'
      }
    }
  ]
}

const pkg = {
  path: '/pkg',
  component: 'Layout',
  name: 'Pkg',
  meta: {
    title: '卡单管理',
    icon: 'ep:document',
    id: 6,
    parentId: 0,
    visible: true,
    keepAlive: true,
    alwaysShow: true,
    redirect: '/pkg/form'
  },
  children: [
    {
      path: 'form',
      component: () => import('@/views/system/pkg/form/index.vue'),
      name: 'PkgFormView',
      meta: {
        title: '卡单信息',
        icon: 'ep:document',
        id: 7,
        parentId: 6,
        visible: true,
        keepAlive: true
      }
    }
  ]
}

export default { sms, pkg }
