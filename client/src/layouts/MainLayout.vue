<template>
  <div class="wrap">
    <Header />
    <div class="middle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'MainLayout',
  components: {
    Header
  }
}
</script>