<template>
    <div class="star" :class="starType">
        <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
    </div>
</template>

<script type='text/ecmascript-6'>
const LENGTH = 5;
const CLS_ON = 'on'; //全星
const CLS_HALF = 'half';  //半星
const CLS_OFF = 'off';  // 无星

export default {
  name:'',
  props:{
      size:{    // 大小
          type:Number
      },
      score:{   // 分数
          type:Number
      }
  },
  data(){
   return {

   }
  },
  computed:{
      starType(){
          return 'star-' + this.size;
      },
      itemClasses(){
          let result = [];
          let score = Math.floor(this.score *2)/2;
          let hasDecimal = score%1 !==0;
          let integer = Math.floor(score);
          // 填加全星
          for(let i=0; i<integer; i++){
              result.push(CLS_ON)
          };
          // 填加半星
          if(hasDecimal) result.push(CLS_HALF);
          // 添加无星
          while(result.length<LENGTH){
              result.push(CLS_OFF)
          }
          return result;
      }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    @import '../../common/stylus/mixin'
    .star
        font-size 0
        .star-item
            display inline-block
            background-repeat no-repeat

    .star-48
        .star-item
            width 20px
            height 20px
            margin-right 22px
            background-size 20px 20px
            &:last-child
                margin-right 0        
            &.on
                bg-image('imgs/star48_on')
            &.half
                bg-image('imgs/star48_half')
            &.off
                bg-image('imgs/star48_off')
    .star-24
        .star-item
            width 10px
            height 10px
            margin-right 3px
            background-size 10px 10px
            &:last-child
                margin-right 0        
            &.on
                bg-image('imgs/star24_on')
            &.half
                bg-image('imgs/star24_half')
            &.off
                bg-image('imgs/star24_off')
    .star-36   
        .star-item
            width 15px
            height 15px
            margin-right 6px
            background-size 15px 15px
            &:last-child
                margin-right 0        
            &.on
                bg-image('imgs/star36_on')
            &.half
                bg-image('imgs/star36_half')
            &.off
                bg-image('imgs/star36_off')

            

</style>
