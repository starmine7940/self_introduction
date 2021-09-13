<template>
  	<div class="wrapper">
    	<div class="component">
            <h2>マインスイーパ</h2>
            <p>初めて一人で作成したwebアプリケーションです。最初に押したマスが地雷にならないように、最初にマスを押した瞬間にマップを生成するように工夫しました。</p>
            <p>使った技術: HTML, CSS, Javascript</p>
            <a href="https://github.com/starmine7940/minesweeper" target="_blank">github</a><br><br>
            <img v-bind:src="minesweeper" class="image">
        </div>
        <div class="component">
            <h2>オンライン対戦ゲーム「crackpanel」</h2>
            <p>コロナ禍でオンライン会をする際に、ブラウザで手軽に遊べるゲームがあったら盛り上がると思い、作成しました。ゲームは人生ゲームに登場する「みつばちヤ〜ネ」をベースにしました。データベースはFirestoreを使うことで、リアルタイムの通信を可能にしました。</p>
            <p>使った技術: HTML, CSS, Javascript, Firebase</p>
            <a href="https://github.com/starmine7940/crackpanel" target="_blank">github</a><br><br>
            <img v-bind:src="crackpanel" class="image"> 
        </div>
        <div class="component">
            <h2>研究室のゼミで使用する投票システム</h2>
            <p>私が所属している研究室では、週に一回、ビブリオバトル形式の論文紹介ゼミがあります。最後にランキング付けをする際に使用する投票システムがあったのですが、投票ミスが多い、投票候補をSlackで送らなければならない、などの様々な問題がありました。その問題を解決すべく、研究室同期とシステムの改修を行いました。</p>
            <p>使った技術: HTML, CSS, Javascript, Firebase</p>
            <img v-bind:src="vote_system" class="image">
        </div>
  	</div>
</template>

<script>
    export default {
    	data(){
      		return {
        		minesweeper: require('@/assets/minesweeper.png'),
                crackpanel: require('@/assets/crackpanel.png'),
                vote_system: require('@/assets/vote_system.png'),
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

.image {
    width: 50%;

}
</style>