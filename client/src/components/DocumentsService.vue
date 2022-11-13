<template>
  <div
    :class="[
      'documents__service',
      {'is-loading': isLoading},
      {'is-error': error}
    ]"
  >
    {{isLoading ? $t('loading') : error}}
  </div>
</template>

<script>
export default {
  name: 'DocumentsService',
  props: [
    'isLoading',
    'error'
  ]
}
</script>

<style lang="scss" scoped>
.documents {
  &__service {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border-width: 1px;
    border-style: solid;
    min-height: 34px;
    padding: 5px;
    margin-bottom: 20px;
    font-size: 12px;
    line-height: 1.2;

    &.is-loading {
      border-color: $color-service;
      color: $color-global;
    }

    &.is-error {
      border-color: $color-danger;
      color: $color-danger;
    }
  }
}
</style>