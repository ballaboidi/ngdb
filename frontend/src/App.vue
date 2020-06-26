<template>
  <div class="container">
    <Header />
    <random-text />
    <router-view
      name="nav"
    />
    <router-view 
      :key="$route.fullPath"
      name="content"
    />
  </div>
</template>

<script>
import Header from "./components/page/Header"
import RandomText from "./components/page/RandomText"

export default {
  name: 'App',
  components: {
    Header,
    RandomText,
  },
}
</script>

<style lang="scss">
//Custom
@import "~@/scss/bootstrap/custom";
@import "~@/scss/bootstrap/variables";
@import "~@/scss/bootstrap/type";
@import "~@/scss/bootstrap/global";
@import "~@/scss/bootstrap/form";
@import "~@/scss/templates/event-card";


// @import "~bootstrap/scss/root";
// @import "~bootstrap/scss/reboot";
// @import "~bootstrap/scss/images";
// @import "~bootstrap/scss/code";
@import "~bootstrap/scss/grid";
// @import "~bootstrap/scss/tables";
@import "~bootstrap/scss/forms";
@import "~bootstrap/scss/buttons";
// @import "~bootstrap/scss/transitions";
// @import "~bootstrap/scss/dropdown";
// @import "~bootstrap/scss/button-group";
// @import "~bootstrap/scss/input-group";
@import "~bootstrap/scss/custom-forms";
// @import "~bootstrap/scss/nav";
// @import "~bootstrap/scss/navbar";
@import "~bootstrap/scss/card";
// @import "~bootstrap/scss/breadcrumb";
// @import "~bootstrap/scss/pagination";
// @import "~bootstrap/scss/badge";
// @import "~bootstrap/scss/jumbotron";
// @import "~bootstrap/scss/alert";
// @import "~bootstrap/scss/progress";
// @import "~bootstrap/scss/media";
@import "~bootstrap/scss/list-group";
// @import "~bootstrap/scss/close";
// @import "~bootstrap/scss/toasts";
// @import "~bootstrap/scss/modal";
// @import "~bootstrap/scss/tooltip";
// @import "~bootstrap/scss/popover";
// @import "~bootstrap/scss/carousel";
// @import "~bootstrap/scss/spinners";
@import "~bootstrap/scss/utilities";
@import "~bootstrap/scss/print";
</style>
