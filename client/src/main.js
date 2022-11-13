import {createApp} from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import i18n from '@/translations';
import Sprite from '@/components/ui/Sprite';
import {requireAll} from '@/helpers/require';

requireAll(require.context('@/sprites/', true, /\.svg$/));

const app = createApp(App);

app.use(i18n);
app.use(store);
app.use(router);

app.component('Sprite', Sprite);

app.mount('#app');