<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
    <wv-button type="primary" :mini="true">按钮</wv-button>
    <wv-button type="default" :mini="true">按钮</wv-button>
    <wv-button type="warn" :mini="true">按钮</wv-button>
   
  </div>
</template>

<script>
export default {
  name: "aaa",
  data() {
    return {
      msg: "详情页"
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
