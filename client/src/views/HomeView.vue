<template>
  <MainLayout>
    <div class="center">
      <Search
        :data="searchData"
        :method="searchMethod"
        @choose="searchChoose"
      />

      <Documents
        group="nested"
        subGroup="list"
        :items="doсNestedItems"
        :tabs="doсNestedTabs"
        :selected="doсNestedSelected"
        :isLoading="doсNestedIsLoading"
        :error="doсNestedError"
        :remove="doсNestedRemoveItem"
        :toggle="doсNestedToggleTabs"
      />

      <Documents
        group="list"
        :items="docListItems"
        :selected="docListSelected"
        :isLoading="docListIsLoading"
        :error="docListError"
        :remove="docListRemoveItem"
      />
    </div>
  </MainLayout>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import MainLayout from '@/layouts/MainLayout';
import Search from '@/components/Search';
import Documents from '@/components/Documents';
import autocompleteDocuments from '@/helpers/autocompleteDocuments';

export default {
  name: 'HomeView',
  components: {
    MainLayout,
    Search,
    Documents
  },
  methods: {
    ...mapActions('documentsNested', {
      docNestedFetchItems: 'fetchItems',
      doсNestedRemoveItem: 'removeItem',
      doсNestedToggleTabs: 'toggleTabs',
      doсNestedUpdateSelected: 'updateSelected',
    }),
    ...mapActions('documentsList', {
      docListFetchItems: 'fetchItems',
      docListRemoveItem: 'removeItem',
      doсListUpdateSelected: 'updateSelected',
    }),
    searchMethod: autocompleteDocuments,
    searchChoose(data) {
      this.doсNestedUpdateSelected(data);
      this.doсListUpdateSelected(data);
    }
  },
  computed: {
    ...mapGetters('documentsNested', {
      doсNestedItems: 'items',
      doсNestedTabs: 'tabs',
      doсNestedSelected: 'selected',
      doсNestedIsLoading: 'isLoading',
      doсNestedError: 'error'
    }),
    ...mapGetters('documentsList', {
      docListItems: 'items',
      docListSelected: 'selected',
      docListIsLoading: 'isLoading',
      docListError: 'error'
    }),
    searchData() {
      return [...this.doсNestedItems, ...this.docListItems];
    }
  },
  mounted() {
    this.docNestedFetchItems();
    this.docListFetchItems();
  }
}
</script>
