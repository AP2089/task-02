<template>
  <router-view/>
</template>

<script>
import useSpriteSvg from '@/hooks/useSpriteSvg';

export default {
  name: 'App',
  setup() {
    useSpriteSvg('img/sprite.svg');
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';
</style>
