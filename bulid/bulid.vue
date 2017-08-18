<template>
  <div id="Controller">

    <Heading></Heading>
    
    </br>
    <Middle></Middle>

    </br>
    <Footer class="fool"></Footer>
  </div>
</template>
<script>

import Heading from "./Complate/Headling.vue";

import Footer from "./Complate/footer.vue";

import Middle from "./Complate/middle.vue";

import router from '../router'

// import "../../css/exclusive.scss";
export default {
      el: "#Controller",
        components : {  Heading,Middle,Footer },
        router
      }

</script>

<style lang="scss">
@import '~animate.css';
.animated {
  animation-duration: .377s;
}

@import '~bulma';

@import '~wysiwyg.css/wysiwyg.sass';

$fa-font-path: '~font-awesome/fonts/';
/*@import '~font-awesome/scss/font-awesome';*/

html {
  background-color: whitesmoke;
}

.fool{
  background-color: orange;

}
.nprogress-container {
  position: fixed !important;
  width: 100%;
  height: 50px;
  z-index: 2048;
  pointer-events: none;

  #nprogress {
    $color: #48e79a;

    .bar {
      background: $color;
    }
    .peg {
      box-shadow: 0 0 10px $color, 0 0 5px $color;
    }

    .spinner-icon {
      border-top-color: $color;
      border-left-color: $color;
    }
  }
}

/****************************router部分动画以及加载线条动画等******************************/
.fade-enter-active, .fade-leave-active {
  /*transition: opacity .5s ease;*/
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}

.fade-enter, .fade-leave-active {
  /*opacity: 0*/
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}

.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
.meddle{
  width: 80%;
  margin: 0 10%;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
@media screen and (max-width: 500px) {
    .meddle {
      width: 100%;
      margin: 0 ;
    }
}
</style>
