<template>
  <div ref="contentRef" class="markdown-view" v-html="renderedMarkdown"></div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import MarkdownIt from 'markdown-it'
import 'highlight.js/styles/vs2015.min.css'
import hljs from 'highlight.js'

// 定义组件属性
const props = defineProps({
  content: {
    type: String,
    required: true
  }
})

const message = useMessage() // 消息弹窗
const { copy } = useClipboard() // 初始化 copy 到粘贴板
const contentRef = ref()

const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        const copyHtml = `<div id="copy" data-copy='${str}' style="position: absolute; right: 10px; top: 5px; color: #fff;cursor: pointer;">复制</div>`
        return `<pre style="position: relative;">${copyHtml}<code class="hljs">${hljs.highlight(lang, str, true).value}</code></pre>`
      } catch (__) {}
    }
    return ``
  }
})

/** 渲染 markdown */
const renderedMarkdown = computed(() => {
  return md.render(props.content)
})

/** 初始化 **/
onMounted(async () => {
  // 添加 copy 监听
  contentRef.value.addEventListener('click', (e: any) => {
    if (e.target.id === 'copy') {
      copy(e.target?.dataset?.copy)
      message.success('复制成功!')
    }
  })
})
</script>

<style lang="scss">
.markdown-view {
  max-width: 100%;
  font-family: "PingFang SC";
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.6rem;
  letter-spacing: 0;
  color: #3b3e55;
  text-align: left;

  pre {
    position: relative;
  }

  pre code.hljs {
    width: auto;
  }

  code.hljs {
    width: auto;
    padding-top: 20px;
    border-radius: 6px;

    @media screen and (width >= 1536px) {
      width: 960px;
    }

    @media screen and (width <= 1536px) and (width >= 1024px) {
      width: calc(100vw - 400px - 64px - 32px * 2);
    }

    @media screen and (width <= 1024px) and (width >= 768px) {
      width: calc(100vw - 32px * 2);
    }

    @media screen and (width <= 768px) {
      width: calc(100vw - 16px * 2);
    }
  }

  p,
  code.hljs {
    margin-bottom: 16px;
  }

  p {
    //margin-bottom: 1rem !important;
    margin: 0;
    margin-bottom: 3px;
  }

  /* 标题通用格式 */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 24px 0 8px;
    font-weight: 600;
    color: var(--color-G900);
  }

  h1 {
    font-size: 22px;
    line-height: 32px;
  }

  h2 {
    font-size: 20px;
    line-height: 30px;
  }

  h3 {
    font-size: 18px;
    line-height: 28px;
  }

  h4 {
    font-size: 16px;
    line-height: 26px;
  }

  h5 {
    font-size: 16px;
    line-height: 24px;
  }

  h6 {
    font-size: 16px;
    line-height: 24px;
  }

  /* 列表（有序，无序） */
  ul,
  ol {
    padding: 0;
    margin: 0 0 8px;
    font-size: 16px;
    line-height: 24px;
    color: #3b3e55; // var(--color-CG600);
  }

  li {
    margin: 4px 0 0 20px;
    margin-bottom: 1rem;
  }

  ol > li {
    margin-bottom: 1rem;
    list-style-type: decimal;
    // 表达式,修复有序列表序号展示不全的问题
    // &:nth-child(n + 10) {
    //     margin-left: 30px;
    // }

    // &:nth-child(n + 100) {
    //     margin-left: 30px;
    // }
  }

  ul > li {
    margin-right: 11px;
    margin-bottom: 1rem;
    font-size: 16px;
    line-height: 24px;
    color: #3b3e55; // var(--color-G900);
    list-style-type: disc;
  }

  ol ul,
  ol ul > li,
  ul ul,
  ul ul li {
    margin-bottom: 1rem;
    margin-left: 6px;
    // list-style: circle;
    font-size: 16px;
    list-style: none;
  }

  ul ul ul,
  ul ul ul li,
  ol ol,
  ol ol > li,
  ol ul ul,
  ol ul ul > li,
  ul ol,
  ul ol > li {
    list-style: square;
  }
}
</style>
