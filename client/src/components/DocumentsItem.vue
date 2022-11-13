<template>
  <div class="documents__wrap">
    <ButtonToggle
      v-if="item.children"
      :class="[
        'documents__btn-toggle',
        {'active': isActive}
      ]"
      @click="onToggle"
    />

    <div
      v-if="item.title"
      class="documents__title"
    >
      {{item.title}}
    </div>

    <div
      v-if="item.colors"
      class="documents__colors"
    >
      <div
        class="documents__color"
        v-for="color in item.colors"
        :style="{backgroundColor: color}"
      ></div>
    </div>

    <div
      v-if="item.required"
      class="documents__required"
    >
      {{$t('required')}}
    </div>

    <div
      v-if="item.description"
      class="documents__description"
    >
      {{item.description}}
    </div>

    <div class="documents__control">
      <ButtonEdit
        class="documents__control-btn"
      />
      <ButtonDelete
        class="documents__control-btn"
        @click="onRemove"
      />
      <ButtonMove
        class="documents__control-btn drag-handle"
      />
    </div>
  </div>
</template>

<script>
import ButtonToggle from '@/components/ui/ButtonToggle';
import ButtonEdit from '@/components/ui/ButtonEdit';
import ButtonDelete from '@/components/ui/ButtonDelete';
import ButtonMove from '@/components/ui/ButtonMove';

export default {
  name: 'DocumentsItem',
  components: {
    ButtonToggle,
    ButtonEdit,
    ButtonDelete,
    ButtonMove
  },
  props: [
    'item',
    'selected',
    'remove',
    'toggle'
  ],
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    onToggle(payload) {
      this.isActive = typeof payload === 'boolean' ? payload : !this.isActive;

      this.toggle({
        id: this.item.id,
        isActive: this.isActive
      });
    },
    onRemove() {
      this.isActive = false;
      this.remove(this.item.id);
    }
  },
  watch: {
    selected(value) {
      if (Array.isArray(value)) {
        if (this.item.id === value[0]) {
          this.onToggle(true);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.documents {
  $rs: &;

  &__wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #ffffff;
    border: 1px solid $color-service;
    padding: 4px 5px 4px 15px;
    margin-bottom: -1px;
    transition: background-color .5s ease 0s;
  }

  &__btn-toggle {
    flex: 0 0 22px;
    margin-right: 15px;
  }

  &__title {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.2;
    margin-right: 15px;
    white-space: nowrap;
  }

  &__colors {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 15px;
  }

  &__color {
    width: 8px;
    height: 8px;
    margin-right: 6px;
    border-radius: 50%;

    &:last-child {
      margin-right: 0;
    }
  }

  &__required {
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 1.2;
    color: $color-danger;
    margin-right: 15px;
    white-space: nowrap;
  }

  &__description {
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 1.2;
    color: $color-secondary;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 2px 0;
  }

  &__control {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: auto;
  }

  &__control-btn {
    margin-right: 3px;

    &:last-child {
      margin-right: 0;
    }
  }

  &-toggle {
    > #{$rs}__wrap {
      padding-top: 11px;
      padding-bottom: 11px;

      #{$rs}__title {
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
      }
    }
  }
}
</style>