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
                c: require('@/assets/c.png'),
                html: require('@/assets/html.png'),
                css: require('@/assets/css.png'),
                javascript: require('@/assets/javascript.png'),
                python: require('@/assets/python.png'),
                firebase: require('@/assets/firebase.png'),
                git: require('@/assets/git.png'),
                github: require('@/assets/github.png'),
                java: require('@/assets/java.png'),
                ruby: require('@/assets/ruby.png'),
                nodejs: require('@/assets/nodejs.png'),
                react: require('@/assets/react.png'),
                vuejs: require('@/assets/vuejs.png'),
                mysql: require('@/assets/mysql.png'),
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
    width: 10%;
}
</style>