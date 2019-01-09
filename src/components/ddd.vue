<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
    <wv-button type="primary" :mini="true">详情页</wv-button>
    <wv-button type="default" :mini="true">商品</wv-button>
    <wv-button type="warn" :mini="true">哈哈哈哈</wv-button>
   
  </div>
</template>

<script>
export default {
  name: "ddd",
  data() {
    return {
      msg: "dddddddddd"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
</style>
