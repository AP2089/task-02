import {createStore} from 'vuex';
import documentsNested from '@/store/documents/documentsNested';
import documentsList from '@/store/documents/documentsList';

export default createStore({
  modules: {
    documentsNested,
    documentsList
  }
});
