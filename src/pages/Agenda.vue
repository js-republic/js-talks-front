<template>
  <talks-agenda></talks-agenda>
</template>


<script>
export default {
  name: 'agenda',
  components: {
    TalksAgenda: () => import('@/components/TalksAgenda')
  }
}
</script>
