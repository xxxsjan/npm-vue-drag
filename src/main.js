// import Vue from "vue";
// import App from "./App.vue";
// Vue.config.productionTip = false;
// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");
export default {
  install(Vue) {
    Vue.directive("xxxdrag", {
      bind: function (el) {
        var oDiv = el;
        oDiv.onmousedown = function (ev) {
          var disX = ev.clientX - oDiv.offsetLeft;
          var disY = ev.clientY - oDiv.offsetTop;
          document.onmousemove = function (ev) {
            var l = ev.clientX - disX;
            var t = ev.clientY - disY;
            oDiv.style.left = l + "px";
            oDiv.style.top = t + "px";
          };
          document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };
      },
    });
  },
};
