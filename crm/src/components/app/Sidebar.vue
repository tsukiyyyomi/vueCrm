<template>
    <ul class="sidenav app-sidenav open">
            <router-link 
                v-for="link in links"
                :key="link.url"
                active-class="active"                
                :to="link.url"     
                tag="li"           
                :exact="link.exact"
                class="li-sidebar"
            >
                <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
            </router-link>

        </ul>
</template>

<script>
    export default{
        data: () => ({
            links: [
                {title: 'Счет', url: '/', exact:true},
                {title: 'История', url: '/history'},
                {title: 'Планирование', url: '/planning'},
                {title: 'Новая запись', url: '/record'},
                {title: 'Категории', url: '/categories'}
            ]
        })
    }
</script>

<style lang="scss">
    .li-sidebar{
        display: flex;
        color:#000;
        margin: 1vw;
        padding: 0.5vw 0.2vw;
        a{
            color:#000;
        }
    }
    .active{
        background: rgba(196, 196, 196, 0.425);
    }
</style>