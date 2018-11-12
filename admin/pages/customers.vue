<template>
  <div>
    <ul>
      <li
        v-for="customer in customers"
        :key="customer.id">
        <h3>{{ customer.name.first }} {{ customer.name.last }}</h3>
        <dl>
          <dt>Favourite Colour</dt>
          <dd>{{ customer.favourite_colour }}</dd>
          <dt>Favourite Shape</dt>
          <dd>{{ customer.favourite_shape }}</dd>
        </dl>
        <h4>Orders</h4>
        <ul>
          <li
            v-for="order in customer.orders"
            :key="order.id">
          Products Ordered: {{ order.products.length }} (&pound;{{ order.total }})
          </li>
        </ul>
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
    store.dispatch('getCustomers')
  },
  computed: {
    customers() {
      return this.$store.state.customers.list
    }
  }
}
</script>
