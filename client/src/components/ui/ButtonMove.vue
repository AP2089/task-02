<template>
  <button
    type="button"
    class="btn-move"
  >
    <Sprite
      name="move"
      class="btn-move__icon"
    />
  </button>
</template>

<script>
export default {
  name: 'ButtonMove'
}
</script>

<style lang="scss" scoped>
.btn-move {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  border: none;
  cursor: move;
  background: transparent;
  opacity: 1;
  transition: opacity .5s ease 0s;

  &:hover {
    opacity: .7;
  }

  &__icon {
    width: 8px;
    height: 15px;
    fill: $color-secondary;
  }
}
</style>