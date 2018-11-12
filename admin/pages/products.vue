<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      <span>{{ product.name }} - &pound;{{ product.price }}</span>
      <ul
        v-for="category in product.category"
        :key="category">
        <li>{{ category }}</li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  fetch({ store }) {
    store.dispatch('getProducts')
  },
  computed: {
    products() {
      return this.$store.state.products.list
    }
  }
}
</script>
