Nova.booting((Vue, router, store) => {
  Vue.component('index-button', require('./components/IndexField'))
  Vue.component('detail-button', require('./components/DetailField'))
  Vue.component('form-button', require('./components/FormField'))
})
