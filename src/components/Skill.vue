<template>
  	<div class="wrapper" id="app">
    	<div class="component">
            <h2>得意です！</h2>
            <img v-bind:src="c">
            <img v-bind:src="html">
            <img v-bind:src="css">
            <img v-bind:src="javascript">
            <img v-bind:src="python">
            <img v-bind:src="firebase">
            <img v-bind:src="git">
            <img v-bind:src="github">
        </div>
        <div class="component">
            <h2>そこそこできます！</h2>
            <img v-bind:src="java">
            <img v-bind:src="ruby">
            <img v-bind:src="nodejs">
            <img v-bind:src="react">
            <img v-bind:src="vuejs">
            <img v-bind:src="mysql">
        </div>
  	</div>
</template>

<script>
    export default {
    	data(){
      		return {
                c: require('@/assets/c.svg'),
                html: require('@/assets/html.svg'),
                css: require('@/assets/css.svg'),
                javascript: require('@/assets/javascript.svg'),
                python: require('@/assets/python.svg'),
                firebase: require('@/assets/firebase.svg'),
                git: require('@/assets/git.svg'),
                github: require('@/assets/github.svg'),
                java: require('@/assets/java.svg'),
                ruby: require('@/assets/ruby.svg'),
                nodejs: require('@/assets/nodejs.svg'),
                react: require('@/assets/react.svg'),
                vuejs: require('@/assets/vuejs.svg'),
                mysql: require('@/assets/mysql.svg'),
      		}
    	}
  	}
</script>

<style scoped>
.wrapper {
	text-align: center;
	animation: fadein 3s forwards;
}

@keyframes fadein {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
  }
}

.component {
    background-color: whitesmoke;
    width: 100%;
    border-radius: 10px;
}

img {
    width: 7%;
    margin: 10px;
}
</style>