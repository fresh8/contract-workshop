<template>
  <ul>
    <li
      v-for="order in orders"
      :key="order.id">
      <span>{{ order.id }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  fetch({ store }) {
    store.dispatch('getOrders')
  },
  computed: {
    orders() {
      return this.$store.state.orders.list
    }
  }
}
</script>
