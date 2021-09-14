<template>
  	<div class="wrapper" id="app">
		<h2>starmine7940のサイトへようこそ！</h2>
		<img v-bind:src="imgPath" id="fencing">
		<p>私は情報学を専攻する学生で、田舎とアニメと睡眠が好きな駆け出しエンジニアです。よろしくお願いします。</p>
  	</div>
</template>

<script>
	export default {
    	data(){
      		return {
        		imgPath: require('@/assets/fencing.jpg')
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

#fencing {
	width: 50%;
}
</style>