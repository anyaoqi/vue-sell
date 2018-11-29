<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64" height="64" :src="seller.avatar" alt="头像">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div class="support" v-if="seller.supports">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div class="support-count" @click="showDetail">
                <span v-if="seller.supports" class="count">{{seller.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bulletin-wrapper" @click="showDetail">
            <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="background">
            <img :src="seller.avatar" alt="background-image">
        </div>
        <div class="detail" v-show="detailShow">
            <div class="detail-wrapper clearfix">
                <div class="detai-main">
                    
                </div>
            </div>
            <div class="detail-close"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name:'Header',
        props:{
            seller:{
                type:Object
            }
        },
        data(){
            return {
                classMap:['decrease','discount','guarantee','invoice','special'],
                detailShow:false
            }
        },
        created(){
            console.log('子组件接收到数据:'+this.seller)
        },
        methods:{
            showDetail(){
                this.detailShow = true
            }
        }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus"  scoped>
@import '../../common/stylus/mixin.styl'
    .header
        position relative
        color #fff
        background rgba(7,17,27,0.5)
        overflow hidden
        .content-wrapper 
            position relative
            padding 24px 12px 18px 24px
            font-size 0
            .avatar
                display inline-block
                vertical-align top
            .content
                display inline-block
                margin-left 16px
                .title 
                    margin 2px 0 8px 0
                    .brand
                        display inline-block
                        vertical-align top
                        width 30px
                        height 18px
                        bg-image('imgs/brand')
                        background-size 30px 18px
                        background-repeat no-replace
                    .name
                        margin-left 6px
                        font-size 16px
                        line-height 18px
                        font-weight bold
                .description
                    margin-bottom 10px
                    line-height 12px
                    font-size 12px
                .support
                    .icon
                        display inline-block
                        vertical-align top
                        width 12px
                        height 12px
                        margin-right 4px
                        background-size 12px 12px
                        background-repeat no-repeat
                        &.decrease
                            bg-image('imgs/decrease_1')
                        &.discount
                            bg-image('imgs/discount_1')
                        &.guarantee
                            bg-image('imgs/guarantee_1')
                        &.invoice
                            bg-image('imgs/invoice_1')
                        &.special
                            bg-image('imgs/special_1')
                    .text
                        line-height 12px
                        font-size 10px
            .support-count
                position absolute
                right 12px
                bottom 18px
                padding 0 8px
                height 24px
                line-height 24px
                border-radius 14px
                background rgba(0,0,0,0.2)
                text-align center
                .count
                    vertical-align top
                    font-size 10px
                .icon-keyboard_arrow_right
                    margin-left 2px
                    line-height 24px
                    font-size 10px
        .bulletin-wrapper 
            position relative
            height 28px
            line-height 28px
            padding  0 22px 0 12px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            background rgba(7,17,27,0.2)
            .bulletin-title
                display inline-block
                vertical-align top
                margin-top 8px
                width 22px
                height 12px
                bg-image('imgs/bulletin')
                background-size 22px 12px
                background-repeat no-repeat
            .bulletin-text
                vertical-align top 
                margin 0 4px
                font-size 10px 
            .icon-keyboard_arrow_right
                position absolute
                font-size 10px
                right 12px
                top 8px
        .background
            position absolute
            left 0
            top 0 
            width 100%
            height 100%
            z-index -1
            overflow hidden
            filter blur(8px)
            & > img 
                width 100%
        .detail
            position fixed
            z-index 100
            left 0px
            top 0px
            width 100%
            height 100%
            overflow hidden
            background rgba(7,17,27,0.8)
                        


</style>
