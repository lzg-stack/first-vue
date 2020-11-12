const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.vuemastery.com/',

            inventory: 100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],

            variants: [
                { id: 1234, color: 'green' },
                { id: 3456, color: 'yellow' }
            ],

            sizes: ['S', 'M', 'L', 'XL']
        }
    }
})
