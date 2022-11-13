<template>
  <button
    type="button"
    class="btn-toggle"
  >
    <Sprite
      name="arrow-drop"
      class="btn-toggle__icon"
    />
  </button>
</template>

<script>
export default {
  name: 'ButtonToggle'
}
</script>

<style lang="scss" scoped>
.btn-toggle {
  $rs: &;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  margin: 0;
  border: 1px solid $color-extra;
  cursor: pointer;
  background: #ffffff;
  border-radius: 50%;
  opacity: 1;
  transition: opacity .5s ease 0s;

  &__icon {
    width: 8px;
    height: 5px;
    fill: $color-info;
    transform: rotate(0deg);
    transition: transform .5s ease 0s;
  }

  &:hover {
    opacity: .7;
  }

  &.active {
    #{$rs}__icon {
      transform: rotate(180deg);
    }
  }

  &.disabled {
    opacity: .5 !important;
    cursor: default !important;
  }
}
</style>