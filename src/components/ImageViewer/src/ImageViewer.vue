<script lang="ts" setup>
import { PropType } from 'vue'
import { propTypes } from '@/utils/propTypes'

defineOptions({ name: 'ImageViewer' })

const props = defineProps<{
  url: string
  width?: string
  height?: string
}>()

const getBindValue = computed(() => {
  const propsData: Recordable = { ...props }
  delete propsData.show
  return propsData
})

const show = ref(props.show)

const close = () => {
  show.value = false
}
</script>

<template>
  <el-image
    :src="props.url"
    :preview-src-list="[props.url]"
    fit="contain"
    :style="{ width: props.width, height: props.height }"
  />
</template>
