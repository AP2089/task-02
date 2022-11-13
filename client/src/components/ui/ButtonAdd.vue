<template>
  <button
    type="button"
    class="btn-add"
  >
    <Sprite
      name="plus"
      class="btn-add__icon"
    />
    {{title}}
  </button>
</template>

<script>
export default {
  name: 'ButtonAdd',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-add {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 30px;
  padding: 0 20px 0 10px;
  background: transparent;
  border: 1px solid $color-extra;
  border-radius: 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  color: $color-global;
  white-space: nowrap;
  cursor: pointer;
  opacity: 1;
  transition: opacity .5s ease 0s;

  &:hover {
    opacity: .7;
  }

  &__icon {
    width: 14px;
    height: 14px;
    fill: $color-info;
    margin-right: 10px;
  }
}
</style>