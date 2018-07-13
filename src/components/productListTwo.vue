<template>
  <div id="product-list-two">
    <h2>This is Product List</h2>
    <ul>
      <li v-for="p in products">
        {{p.name}} - ${{p.price}}
      </li>
    </ul>

    <button v-on:click="reducePrice">Reduce Price -</button>

  </div>
</template>

<script>
  export default {
    computed: {
      products(){
        return this.$store.state.products;
      },
      saleProducts(){
        return this.$store.getters.saleProducts;
      },

    },
    methods: {
      reducePrice: function () {
        this.$store.dispatch('reducePrice');
      }
    }
  }
</script>
