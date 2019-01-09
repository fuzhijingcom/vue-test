<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <wv-button @click="aaa()" type="primary" :mini="true">跳转aaa</wv-button>

    <wv-button @click="ddd()" type="primary" :mini="true">跳转ddd</wv-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "首页"
    };
  },
  methods: {
    aaa() {
      console.log("44444");
      this.$router.push({
        path: "/aaa"
      });
      var obj = {
        pageSize: 20
      };

      // this.$http.get({url: '/api/ershou/my/delete_post' , params: obj })
      // .then((res) => {
      //   // 请求成功回调
      //     console.log(res)
      // }, () => {
      //   // 请求失败回调
      // });

      console.log("44444");
    },
    ddd() {
      console.log("ddddddddd");
      // this.$router.push({
      //   path:'/ddd'
      // })
      var obj = {
        pageSize: 20
      };

      

      console.log("请求");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
