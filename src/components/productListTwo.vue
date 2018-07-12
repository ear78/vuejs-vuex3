<template>
  <div id="product-list-two">
    <h2>This is product list 2</h2>
    <ul>
      <li v-for="p in saleProducts">
        {{p.name}} - ${{p.price}}
      </li>
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
