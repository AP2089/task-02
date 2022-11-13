<template>
  <Draggable
    v-if="!isLoading && !error"
    class="documents__list"
    :list="items"
    :group="group"
    item-key="id"
    v-bind="options"
  >        
    <template #item="{element}">
      <div
        :class="[
          'documents__item',
          {'documents-toggle': element.children},
          {'documents-selected': element.id === selectedId}
        ]"
      >
        <DocumentsItem
          :item="element"
          :selected="selected"
          :remove="remove"
          :toggle="toggle"
        />

        <Transition name="slide">
          <DocumentsList
            v-if="element.children && tabs.includes(element.id)"
            :list="element.children"
            :group="subGroup"
            :selected="selected"
            :remove="remove"
            :toggle="toggle"
          />
        </Transition>
      </div>
    </template>
  </Draggable>

  <DocumentsService
    v-else
    :isLoading="isLoading"
    :error="error"
  />
</template>

<script>
import Draggable from 'vuedraggable';
import DocumentsItem from '@/components/DocumentsItem';
import DocumentsService from '@/components/DocumentsService';

export default {
  name: 'DocumentsList',
  components: {
    Draggable,
    DocumentsItem,
    DocumentsService
  },
  props: [
    'items',
    'tabs',
    'selected',
    'group',
    'subGroup',
    'isLoading',
    'error',
    'remove',
    'toggle'
  ],
  data() {
    return {
      options: {
        animation: 150,
        handle: '.drag-handle',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',
        forceFallback: true,
        fallbackOnBody: true,
		    swapThreshold: 0.65
      }
    }
  },
  computed: {
    selectedId() {
      return Array.isArray(this.selected) ? this.selected[1] : this.selected;
    }
  }
}
</script>

<style lang="scss" scoped>
.documents {
  $rs: &;

  &__list:empty:before {
    display: block;
    content: '';
    height: 5px;
    background-color: $color-info;
  }

  &__item {
    background-color: #ffffff;
  }
  
  &-toggle {
    #{$rs}__list {
      padding-left: 15px;
    }
  }

  &-selected {
    > #{$rs}__wrap {
      background-color: $color-service;
    }
  }
}

.sortable-chosen {
  opacity: .2;
}

.sortable-drag {
  opacity: 1 !important;
  box-shadow: 0px 3px 16px rgba(0, 102, 255, 0.7);
}
</style>