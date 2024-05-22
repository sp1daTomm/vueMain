import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.29/vue.esm-browser.prod.min.js';

const site = "https://vue3-course-api.hexschool.io/v2/";
const api_path = "food2";

const app = createApp({
    data() {
        return {
            tempProduct: {},
            products: {},
        }
    },
    methods: {
        getData() {
            const api = `${site}api/${api_path}/admin/products/all`;
            axios.get(api)
                .then((res) => {
                    this.products = res.data.products;
                })
                .catch((err) => {
                alert(err.response.data.message);
            })
            console.log(api);
    }
},
    mounted() {
    const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexschoolToken\s*\=\s*([^;]*).*$)|^.*$/,
        "$1",
        );
        console.log(token);
    axios.defaults.headers.common['Authorization'] = token;
    this.getData()
}
})
app.mount('#app')