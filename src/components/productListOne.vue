<template>
  <div id="product-list-one">
    <h2>This is product list 1</h2>
    <ul>
      <li v-for="product in saleProducts">{{product.name}} - ${{product.price}}</li>
    </ul>
    <button v-on:click="addPrice">Add Price</button>
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
      }
    },
    methods: {
      addPrice: function(){
        this.$store.dispatch('addPrice');
      }
    }
  }
</script>
