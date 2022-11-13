<template>
  <button
    type="button"
    class="btn-edit"
  >
    <Sprite
      name="edit"
      class="btn-edit__icon"
    />
  </button>
</template>

<script>
export default {
  name: 'ButtonEdit'
}
</script>

<style lang="scss" scoped>
.btn-edit {
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
    width: 12px;
    height: 12px;
    fill: $color-secondary;
  }
}
</style>