<template>
  	<div class="wrapper">
        <div class="component">
            <h2>基本情報</h2>
            <p>名前: starmine7940</p>
            <p>年齢: 22歳</p>
            <p>出身: 田舎</p>
            <p>学校: 国立大学の大学院</p>
            <p>専門: 情報学</p>
        </div>
        <div class="component">
            <h2>趣味</h2>
            <p>好きなこと: 寝ること・温泉に入ること</p>
            <p>最近ハマっていること: 筋トレ</p>
            <p>好きなスポーツ: フェンシング</p>
            <p>好きなアニメ: ヴァイオレット・エヴァーガーデン</p>
            <p></p>    
        </div>
        <div class="component">
            <h2>将来</h2>
            <p>行きたい業界: web系企業・自社開発系企業</p>
            <p>なりたい職種: webフロントエンドエンジニア</p>
            <p>なりたいエンジニア像: サービスの提案から設計・開発までできるエンジニア</p>
            <p>やりたいこと: 技術で人々の暮らしを豊かにしたい</p>
            <p>憧れの社会: デジタルとアナログのバランスの取れた、心が豊かな社会</p>
            <p>憧れの生活: 故郷でマイホーム・マイカーを持ってのんびり暮らしたい</p>
        </div>
  	</div>
</template>

<script>
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
</style>