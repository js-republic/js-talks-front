<template>
  <talk-list />
</template>


<script>
export default {
  name: 'talks',
  components: {
    TalkList: () => import('@/components/TalkList')
  }
}
</script>
