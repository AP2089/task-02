<template>
  <div class="documents">
    <DocumentsList
      :items="items"
      :tabs="tabs"
      :selected="selected"
      :group="group"
      :subGroup="subGroup"
      :isLoading="isLoading"
      :error="error"
      :remove="remove"
      :toggle="toggle"
    />
  </div>
</template>

<script>
import Draggable from 'vuedraggable';
import DocumentsList from '@/components/DocumentsList';

export default {
  name: 'Documents',
  components: {
    Draggable,
    DocumentsList
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    tabs: {
      type: Array,
      default: []
    },
    selected: {
      type: [Array, Number]
    },
    group: {
      type: String
    },
    subGroup: {
      type: String
    },
    isLoading: {
      type: Boolean
    },
    error: {
      type: String
    },
    remove: {
      type: Function
    },
    toggle: {
      type: Function
    }
  }
}
</script>

<style lang="scss" scoped>
.documents {
  margin-bottom: 20px;
}
</style>