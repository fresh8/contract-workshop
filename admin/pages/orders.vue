<template>
  <div>
    <ul>
      <li
        v-for="order in orders"
        :key="order.id">
        <h3>Order {{ order.id }}</h3>
        <h4>Products</h4>
        <ul>
          <li
            v-for="product in order.products"
            :key="product">
            <span>{{ product }}</span>
          </li>
        </ul>
        <span>
          <strong>Total</strong> &pound;{{ order.total }}
        </span>
      </li>
    </ul>

    <div class="links">
      <nuxt-link
        to="/"
        class="button--green">Back</nuxt-link>
    </div>
  </div>
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
