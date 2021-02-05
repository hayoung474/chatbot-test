import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import VueFbCustomerChat from "vue-fb-customer-chat";

Vue.use(VueFbCustomerChat, {
  page_id: 356413202061705, //  change 'null' to your Facebook Page ID,
  theme_color: "#333333", // theme color in HEX
  locale: "en_US", // default 'en_US'
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
