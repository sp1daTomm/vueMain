import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.29/vue.esm-browser.prod.min.js';

const site = "https://vue3-course-api.hexschool.io/v2/"

const app = createApp({
    data() {
        return {
            user: {
                username: '',
                password: '',
            },
        }
    },
    methods: {
        login() {
            const api = `${site}admin/signin`;
            axios.post(api, this.user)
                .then(res => {
                    console.log(res);
                    const { token, expired } = res.data;
                    document.cookie =
                        `hexschoolToken=${token}; expires=${new Date(expired)}`;
                    window.location = 'product.html';
                })
                .catch (err => {
                    alert('登入失敗');
                })
        }
    },
    mounted() {
        console.log(this.text);
    },
});
app.mount('#app')