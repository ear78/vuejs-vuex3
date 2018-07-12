<template>
  <div id="product-list-one">
    <h2>This is product list 1</h2>
    <ul>
      <li v-for="product in saleProducts">{{product.name}} - ${{product.price}}</li>
    </ul>
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
    }
  }
</script>
