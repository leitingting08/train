<template>
	<div>
		<swiper loop auto height="2.3rem" :list="demo_list" index="demo_index" @on-index-change="demo_onIndexChange"></swiper>
	</div>
</template>

<script>
import {Swiper} from 'vux'

const baseList = [
{
	url:'javascript:',
	img:'https://gw.alicdn.com/tfs/TB1DDF.f5qAXuNjy1XdXXaYcVXa-490-300.jpg',
	title:'机票'
},
{
	url:'javascript:',
	img:'https://gw.alicdn.com/tfs/TB111OdgP3z9KJjy0FmXXXiwXXa-490-300.jpg',
	title:'酒店'
},
{
	url:'javascript:',
	img:'https://gw.alicdn.com/imgextra/i4/0/TB2Wv7MicjI8KJjSsppXXXbyVXa_!!0-travel.jpg',
	title:'火车票'
}]

const urlList = baseList.map((item, index) =>({
	url:'javascript:',
	img:item.img,
	fallbackImg: item.fallbackImg,
	title: `(show)${item.title}`
}))

export default{
	name:'vSwiper',
	components:{Swiper},
	methods: {
    demo_onIndexChange (index) {
      this.demo_index = index
    }
   },
	data (){
		return{
			demo_list:urlList,
			demo_index:0
		}
	}
}
</script>