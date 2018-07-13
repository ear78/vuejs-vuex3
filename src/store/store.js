import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      {name: 'Banana Skin', price: 20},
      {name: 'Shinny Star', price: 40},
      {name: 'Green Shells', price: 60},
      {name: 'Red Shells', price: 80}
    ]
  },
  getters: {
    saleProducts: function (state) {
      var saleProducts = state.products.map(function (product) {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        }
      });

      return saleProducts;
    }
  },
  mutations: {
    reducePrice: function(state){
      state.products.forEach(function(product){
        product.price -= 1;
      })
    },
    addPrice: function(state, payload){
      state.products.forEach(function(product){
        product.price += payload;
      })
    }
  },
  actions: {
    reducePrice: function(context){
      setTimeout(function(){
        context.commit('reducePrice');
      }, 200);
    },
    addPrice: function(context, payload){
      setTimeout(function(){
        context.commit('addPrice', payload);
      }, 200);
    }
  }
})
