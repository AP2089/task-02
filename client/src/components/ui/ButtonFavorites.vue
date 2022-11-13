<template>
  <button
    type="button"
    class="btn-favorites"
  >
    <Sprite
      name="favorites"
      class="btn-favorites__icon"
    />
  </button>
</template>

<script>
export default {
  name: 'ButtonFavorites'
}
</script>

<style lang="scss" scoped>
.btn-favorites {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: transparent;
  border: 1px solid $color-extra;
  border-radius: 50%;
  cursor: pointer;
  opacity: 1;
  transition: opacity .5s ease 0s;

  &:hover {
    opacity: .7;
  }

  &__icon {
    width: 10px;
    height: 13px;
    fill: $color-secondary;
  }
}
</style>