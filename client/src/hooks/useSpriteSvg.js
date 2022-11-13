import {onMounted} from 'vue';
import axios from '@/axios';
import {clientUrl} from '@/config';

export default function(url) {
  onMounted(async () => {
    try {
      const response = await axios({
        method: 'GET',
        baseURL: clientUrl,
        url
      });
  
      const {data} = response;
      const app = document.getElementById('app');
      const wrapSvg = document.createElement('div');
  
      wrapSvg.className = 'sprite-svg';
      wrapSvg.innerHTML = data;
  
      app.before(wrapSvg);
    } catch ({message}) {
      console.log(message);
    }
  });
}