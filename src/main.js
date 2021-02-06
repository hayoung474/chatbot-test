import Vue from "vue";
import App from "./App.vue";
import VueFbCustomerChat from "vue-fb-customer-chat";

Vue.config.productionTip = false;

Vue.use(VueFbCustomerChat, {
  page_id: 356413202061705, //  change 'null' to your Facebook Page ID,
  theme_color: "#41b883", // theme color in HEX
  locale: "ko_KR", // default 'en_US'
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
