<template>
  <div id="product-list-one">
    <h2>This is Sale Product List</h2>
    <ul>
      <li v-for="product in saleProducts">{{product.name}} - ${{product.price}}</li>
    </ul>
    <button v-on:click="addPrice(5)">Add Price +</button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      products(){
        return this.$store.state.products;
      },
      ...mapGetters([
        'saleProducts'
      ])
    },
    methods: {
      ...mapActions([
        'addPrice'
      ])

      // addPrice: function(amount){
      //   this.$store.dispatch('addPrice', amount);
      // }
    }
  }
</script>
