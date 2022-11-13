<template>
  <button
    type="button"
    class="btn-delete"
  >
    <Sprite
      name="delete"
      class="btn-delete__icon"
    />
  </button>
</template>

<script>
export default {
  name: 'ButtonDelete'
}
</script>

<style lang="scss" scoped>
.btn-delete {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  opacity: 1;
  transition: opacity .5s ease 0s;

  &:hover {
    opacity: .7;
  }

  &__icon {
    width: 11px;
    height: 13px;
    fill: $color-danger;
  }
}
</style>