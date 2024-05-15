const { createApp } = Vue;
createApp({
    data() {
        return {
            showModal: false,
        };
    },
    methods: {
        closeModal() {
            this.showModal = false;
        },
    }
}).mount('#app');