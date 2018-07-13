<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
  import productListOne from './components/productListOne';
  import productListTwo from './components/productListTwo';

export default {
  name: 'app',
  components: {
    productListOne: productListOne,
    productListTwo: productListTwo
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

$transition: all .2s ease;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  background: none;
  box-shadow: 0 4px 8px rgba(0,0,0,.2);
  padding: 10px 15px;
  border: 1px solid #2c3e50;
  transition: $transition;
  &:hover {
    cursor: pointer;
    background: #2c3e50;
    color: #fff;
  }
}
</style>
