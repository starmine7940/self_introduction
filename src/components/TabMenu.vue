<template>
    <div id="header">
        <ol>
            <li v-for="(item, index) in items" :key=index>
                <router-link v-bind:to=item.path>
                    {{ item.title }}
                </router-link>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'TabMenu',
    data () {
        return {
            items: [
                { title: 'Top', path: '/' },
                { title: 'Profile', path: '/profile' },
                { title: 'Skills', path: '/skills' },
                { title: 'Outputs', path: '/outputs' }
            ]
        }
    }
}
</script>

<style scoped>
#header {
    background-color: #2c3e50;
    width: 100%;
    padding: 10px;
}

ol {
    margin-left: auto;
    width: 480px;
    display:flex;
    justify-content: center;
    padding: 0;
    list-style: none;
}

li {
    width: 100px;
    height: 50px;
    margin-left:10px;
    margin-right:10px;
    font-size: 14px;
    background-color: skyblue;
    border-radius: 8px;
    position: relative;
}

li:hover {
    opacity: 0.4;
}

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: white;
    text-decoration: none;
    line-height: 50px;
}
</style>