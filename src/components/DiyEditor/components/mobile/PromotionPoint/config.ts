import { ComponentStyle, DiyComponent } from '@/components/DiyEditor/util'

/** 积分商城属性 */
export interface PromotionPointProperty {
  // 布局类型：单列 | 三列
  layoutType: 'oneColBigImg' | 'oneColSmallImg' | 'twoCol'
  // 商品字段
  fields: {
    // 商品名称
    name: PromotionPointFieldProperty
    // 商品简介
    introduction: PromotionPointFieldProperty
    // 商品价格
    price: PromotionPointFieldProperty
    // 市场价
    marketPrice: PromotionPointFieldProperty
    // 商品销量
    salesCount: PromotionPointFieldProperty
    // 商品库存
    stock: PromotionPointFieldProperty
  }
  // 角标
  badge: {
    // 是否显示
    show: boolean
    // 角标图片
    imgUrl: string
  }
  // 按钮
  btnBuy: {
    // 类型：文字 | 图片
    type: 'text' | 'img'
    // 文字
    text: string
    // 文字按钮：背景渐变起始颜色
    bgBeginColor: string
    // 文字按钮：背景渐变结束颜色
    bgEndColor: string
    // 图片按钮：图片地址
    imgUrl: string
  }
  // 上圆角
  borderRadiusTop: number
  // 下圆角
  borderRadiusBottom: number
  // 间距
  space: number
  // 秒杀活动编号
  activityIds: number[]
  // 组件样式
  style: ComponentStyle
}

// 商品字段
export interface PromotionPointFieldProperty {
  // 是否显示
  show: boolean
  // 颜色
  color: string
}

// 定义组件
export const component = {
  id: 'PromotionPoint',
  name: '积分商城',
  icon: 'ep:present',
  property: {
    layoutType: 'oneColBigImg',
    fields: {
      name: { show: true, color: '#000' },
      introduction: { show: true, color: '#999' },
      price: { show: true, color: '#ff3000' },
      marketPrice: { show: true, color: '#c4c4c4' },
      salesCount: { show: true, color: '#c4c4c4' },
      stock: { show: false, color: '#c4c4c4' }
    },
    badge: { show: false, imgUrl: '' },
    btnBuy: {
      type: 'text',
      text: '立即兑换',
      bgBeginColor: '#FF6000',
      bgEndColor: '#FE832A',
      imgUrl: ''
    },
    borderRadiusTop: 8,
    borderRadiusBottom: 8,
    space: 8,
    style: {
      bgType: 'color',
      bgColor: '',
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 8
    } as ComponentStyle
  }
} as DiyComponent<PromotionPointProperty>
