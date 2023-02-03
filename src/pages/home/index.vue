<!--
 * @Description: 首页
 * @Autor: lkx
 * @Date: 2023-01-31 18:21:04
 * @LastEditors: lkx
 * @LastEditTime: 2023-02-03 13:39:55
-->

<template>
	<div class="my-home-box">
		<!-- 公告 -->
		<van-notice-bar left-icon="volume-o" text="公告：仅为个人使用，请勿传播，任何传播造成的问题，将会依法追究相应法律责任。" />
		<!-- 轮播 -->
		<van-swipe class="home-swipe" :autoplay="3000" indicator-color="blue">
			<van-swipe-item v-for="item in bannerList" :key="item.icon">
				<img class="home-swipe-item-icon home-card" :src="`@/assets/images/album/${item.icon}`" alt="" />
			</van-swipe-item>
		</van-swipe>
		<!-- 最新照片 -->
		<div class="home-new-album home-card">
			<div class="card-title-box">
				<div class="card-left">近期照片</div>
				<div class="card-right" @click="goPath('/album')">查看全部<van-icon name="arrow" /></div>
			</div>
			<div class="home-album-tabs">
				<div v-for="(item, index) in albumTabs" :key="item.source" @click="hitAlbum(index)" class="home-album-tabs-item">
					<van-badge :content="item.num" :color="'rgb(126, 145, 243)'">
						<img :class="(index === hitAlbumIndex ? 'home-album-tabs-icon-hit' : '') + ' home-album-tabs-icon'" :src="`@/assets/images/album/${item.icon}`" alt="" />
					</van-badge>
				</div>
			</div>
			<div class="home-album-list">
				<div v-if="albumTabs[hitAlbumIndex].children.length">
					<img class="home-album-list-icon" v-for="item in albumTabs[hitAlbumIndex].children" :key="item.url" :src="`@/assets/images/album/${item.url}`" alt="" />
				</div>
				<div v-else><van-divider>暂无照片</van-divider></div>
			</div>
		</div>
		<!-- 最新动态 -->
		<div class="home-new-dynamic home-card">
			<div class="card-title-box">
				<div class="card-left">近期动态</div>
				<div class="card-right" @click="goPath('/dynamic')">查看全部<van-icon name="arrow" /></div>
			</div>
			<div class="home-dynamic-list">
				<div :class="(index ? 'list-item-division' : '') + ' home-dynamic-list-item'" v-for="(item, index) in dynamicList" :key="item.title">
					<div class="list-item-left">
						<span class="list-item-tag" v-if="item.icon">图文:</span>
						<span class="list-item-title">{{ item.title }}</span>
					</div>
					<div class="list-item-date">{{ item.date }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const bannerList = [{ icon: '1' }, { icon: '2' }, { icon: '3' }, { icon: '4' }]
const albumTabs = [
	{
		source: '微博',
		icon: '111',
		num: 3,
		children: [{ url: '1' }, { url: '2' }, { url: '3' }],
	},
	{
		source: '微信',
		icon: '000',
		num: 1,
		children: [{ url: '1' }],
	},
	{
		source: 'qq',
		icon: '333',
		num: 2,
		children: [{ url: '1' }, { url: '2' }],
	},
	{
		source: '抖音',
		icon: '222',
		num: 3,
		children: [{ url: '1' }, { url: '2' }, { url: '3' }],
	},
	{
		source: '其他',
		icon: '111',
		num: 0,
		children: [],
	},
]
const dynamicList = [
	{ title: '1111', date: '2022-11-22', icon: '11111' },
	{ title: 'aaaaaaaaaaa', date: '2022-11-22', icon: '11111' },
	{ title: 'eeeeee', date: '2022-11-22' },
	{ title: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', date: '2022-11-22', icon: '11111' },
]
const hitAlbumIndex = ref(0)

const hitAlbum = (index: number) => {
	hitAlbumIndex.value = index
}
const goPath = (path: string) => router.push(path)

onMounted(() => {})

onBeforeUnmount(() => {})
</script>

<style scoped lang="scss">
.my-home-box {
	height: 100%;
	background-color: #eee;
	padding-top: 10px;
	overflow-y: auto;
	box-sizing: border-box;
}
.home-card {
	background: #fff;
}
.home-swipe {
	margin: 10px 0 0;

	.home-swipe-item-icon {
		width: 100%;
		height: 400px;
	}
}
.home-new-album {
	padding: 20px;
}
.home-new-dynamic {
	margin: 10px 0;
	padding: 20px;
}
.card-title-box {
	display: flex;
	justify-content: space-between;
	padding-bottom: 20px;
	box-sizing: border-box;
	.card-left {
		color: #555;
		font-size: 28px;
		font-weight: bold;
	}
	.card-right {
		color: #555;
		font-size: 28px;
	}
}
.home-album-tabs {
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: 20px 0;
	padding: 0 20px;
	box-sizing: border-box;

	.home-album-tabs-item {
		width: 15%;
		display: flex;
		justify-content: center;
		align-items: center;

		.home-album-tabs-icon {
			width: 100px;
			height: 100px;
			border: 1px solid #ccc;
			border-radius: 100%;
			overflow: hidden;
		}
	}
}
.home-album-list-icon {
	width: 100%;
	height: 300px;
	border: 1px solid #555;
	border-radius: 20px;
	overflow: hidden;
}
.home-album-tabs-icon-hit {
	box-shadow: 0 0 5px 0px blue;
}
.home-dynamic-list-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-right: 5px;
	padding: 15px 0;
	font-size: 30px;
	line-height: 30px;
	.list-item-left {
		display: inline-flex;
	}
	.list-item-tag {
		color: rgb(147, 139, 222);
		margin-right: 10px;
	}
	.list-item-title {
		width: 350px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		color: #555;
	}
	.list-item-date {
		color: #aaa;
	}
}
.list-item-division {
	border-top: 1px solid #aaa;
}
</style>
