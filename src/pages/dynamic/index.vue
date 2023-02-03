<!--
 * @Description: 动态
 * @Autor: lkx
 * @Date: 2023-02-01 10:54:34
 * @LastEditors: lkx
 * @LastEditTime: 2023-02-03 14:18:20
-->
<template>
	<div class="my-dynamic-box">
		<!-- 动态列表 -->
		<div class="dynamic-list">
			<div class="dynamic-list-item" v-for="(item, index) in dynamicList" :key="item.source">
				<div v-if="index" class="dynamic-list-item-division"></div>
				<div class="dynamic-item-box">
					<div class="dynamic-item-box-left" v-if="item.icon">
						<img class="dynamic-item-icon" :src="`@/assets/images/album/${item.icon}`" alt="" />
					</div>
					<div class="dynamic-item-box-right">
						<div class="dynamic-item-title">{{ item.title }}</div>
						<div class="dynamic-item-content">
							<div class="dynamic-item-content-text">{{ item.contentText }}</div>
							<div class="dynamic-item-content-list" v-if="item.iconList">
								<img v-for="subItem in item.iconList" :key="subItem.icon" class="dynamic-item-content-icon" :src="`@/assets/images/album/${subItem.icon}`" alt="" />
							</div>
						</div>
						<div class="dynamic-item-footer">
							{{ item.source }} {{ item.date }}
							<div class="dynamic-item-footer-icon">··</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 回到顶部 -->
		<van-icon v-show="isBackTop" class="dynamic-back-top" @click="backTop()" name="back-top" />
	</div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import throttle from 'lodash/throttle'

interface DynamicListChild {
	source: string
	title: string
	contentText: string
	date: string
	icon?: string
	iconList?: Array<{ icon: string }>
}

const dynamicList = ref<DynamicListChild[]>([
	{
		source: '微信',
		title: '去青蛙',
		date: '2022-01-22',
		icon: '123',
		contentText: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
		iconList: [{ icon: '11' }, { icon: '12' }, { icon: '13' }, { icon: '14' }],
	},
	{
		source: '微信',
		title: '去青蛙',
		date: '2022-01-22',
		icon: '123',
		contentText: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
	},
	{
		source: '微信',
		title: '去青蛙',
		date: '2022-01-22',
		icon: '123',
		contentText: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
	},
	{
		source: '微信',
		title: '去青蛙',
		date: '2022-01-22',
		contentText: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
	},
	{
		source: '微信',
		title: '去青蛙',
		date: '2022-01-22',
		contentText: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
	},
	{
		source: '微信',
		title: '去青蛙',
		date: '2022-01-22',
		icon: '123',
		contentText: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
	},
	{
		source: '微信',
		title: '去青蛙',
		date: '2022-01-22',
		contentText: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
	},
	{
		source: '微信',
		title: '去青蛙',
		date: '2022-01-22',
		contentText: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
	},
	{
		source: '微信',
		title: '去青蛙',
		date: '2022-01-22',
		icon: '123',
		contentText: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
	},
	{
		source: '微信',
		title: '去青蛙',
		date: '2022-01-22',
		contentText: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
	},
	{
		source: '微信',
		title: '去青蛙',
		date: '2022-01-22',
		icon: '123',
		contentText: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
	},
])
const isBackTop = ref(false)
const scrollTop = ref(0)

const fn = (e: any) => {
	scrollTop.value = e?.target?.scrollTop
	isBackTop.value = e?.target?.scrollTop > 400
	// console.log('11111', e)
}

const backTop = () => {
	const scrollDom = document.getElementsByClassName('my-dynamic-box')[0]
	let newScrollTop = Number(scrollTop.value.toFixed(0))
	const oneTop = Number((newScrollTop / 10).toFixed(0))
	const times = setInterval(() => {
		newScrollTop = newScrollTop - oneTop
		scrollDom.scroll(0, newScrollTop)
		if (newScrollTop < 0) clearInterval(times)
	}, 50)
}

onMounted(() => {
	document.getElementsByClassName('my-dynamic-box')[0].addEventListener(
		'scroll',
		throttle(fn, 200, {
			trailing: false,
		}),
		true
	)
})

onBeforeUnmount(() => {})
</script>

<style scoped lang="scss">
.my-dynamic-box {
	height: 100%;
	overflow-y: auto;
}
.dynamic-list-item {
	width: 100%;
	margin: 50px 0;
}
.dynamic-item-box {
	display: flex;
	.dynamic-item-box-left {
		margin-left: 20px;
		.dynamic-item-icon {
			width: 100px;
			height: 100px;
			border: 1px solid #000;
			border-radius: 10px;
		}
	}
	.dynamic-item-box-right {
		margin: 0 20px;
		.dynamic-item-title {
			margin: 10px 0 20px;
			color: #555;
			font-size: 32px;
			font-weight: bold;
		}
		.dynamic-item-content {
			font-size: 30px;
			.dynamic-item-content-text {
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
				overflow: hidden;
			}
		}
		.dynamic-item-content-list {
			margin-top: 20px;
			.dynamic-item-content-icon {
				width: 150px;
				height: 150px;
				margin-top: 20px;
				margin-right: 20px;
				border: 1px solid #000;
				border-radius: 10px;
			}
		}
		.dynamic-item-footer {
			margin-top: 10px;
			font-size: 26px;
			color: #555;
			.dynamic-item-footer-icon {
				float: right;
				height: 28px;
				padding: 5px 15px;
				line-height: 28px;
				font-size: 40px;
				font-weight: bold;
				border-radius: 12px;
				background-color: #eee;
			}
		}
	}
}
.dynamic-list-item-division {
	border-bottom: 1px solid #aaa;
	margin: 50px 0;
}
.dynamic-back-top {
	position: fixed;
	right: 10px;
	bottom: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80px;
	height: 80px;
	color: rgb(135, 189, 244);
	border: 1px solid rgb(135, 189, 244);
	border-radius: 10px;
	background: #fff;
	font-size: 60px;
	font-weight: bold;
}
</style>
