<!--
 * @Description: 
 * @Autor: lkx
 * @Date: 2023-02-01 10:54:37
 * @LastEditors: lkx
 * @LastEditTime: 2023-02-01 18:37:52
-->
<template>
	<div class="my-album-box">
		<!-- 主相册 -->
		<div v-for="(item, index) in albumList" :key="item.title" @click="openChildAlbum(item)" :class="(index % 2 ? 'album-item-left' : 'album-item-right') + ' album-item'">
			<img class="album-item-icon" :src="`@/assets/images/album/${item.icon}`" alt="" />
			<div class="album-item-content">
				<div class="album-item-title">{{ item.title }}</div>
				<div class="album-item-date">{{ item.date }}</div>
			</div>
		</div>
		<!-- 子相册 -->
		<div v-if="currentAlbum" class="current-album-box">
			<van-nav-bar :title="currentAlbum ? currentAlbum.title : ''" left-text="返回" left-arrow @click-left="closeChildAlbum()" />
			<div class="current-album-box-list">
				<img
					v-for="(item, index) in currentAlbum.children"
					:key="item.url"
					:class="(index % 2 ? 'current-album-list-left' : 'current-album-list-right') + ' current-album-list-icon'"
					:src="`@/assets/images/album/${item.url}`"
					alt=""
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

interface AlbumListChild {
	title: string
	date: string
	icon: string
	children: Array<{ url: string }>
}
const albumList: Array<AlbumListChild> = [
	{
		title: '我的',
		icon: '',
		date: '2011-22-11',
		children: [{ url: '' }, { url: '' }, { url: '' }, { url: '' }, { url: '' }],
	},
	{
		title: '我的',
		icon: '',
		date: '2011-22-11',
		children: [{ url: '' }],
	},
	{
		title: '我的',
		icon: '',
		date: '2011-22-11',
		children: [{ url: '' }],
	},
	{
		title: '我的',
		icon: '',
		date: '2011-22-11',
		children: [{ url: '' }],
	},
	{
		title: '我的',
		icon: '',
		date: '2011-22-11',
		children: [{ url: '' }],
	},
	{
		title: '我的',
		icon: '',
		date: '2011-22-11',
		children: [{ url: '' }],
	},
	{
		title: '我的',
		icon: '',
		date: '2011-22-11',
		children: [{ url: '' }],
	},
]
const currentAlbum = ref<AlbumListChild | null>(null)

const openChildAlbum = (value: AlbumListChild) => {
	currentAlbum.value = value
}
const closeChildAlbum = () => {
	currentAlbum.value = null
}
onMounted(() => {})

onBeforeUnmount(() => {})
</script>

<style scoped lang="scss">
.my-album-box {
	display: flex;
	flex-wrap: wrap;
	// justify-content: space-evenly;
	width: 100%;
	height: 100%;
	position: relative;
}
.album-item-left {
	margin: 0 50px 0 25px;
}
.album-item-right {
	margin: 0 25px 0 50px;
}
.album-item {
	width: 300px;
	height: 400px;
	margin-top: 30px;
	border: 1px solid #aaa;
	border-radius: 10px;
	box-sizing: border-box;
	position: relative;
	.album-item-icon {
		width: 100%;
		height: 100%;
		background-color: #000;
		opacity: 0.8;
	}
	.album-item-content {
		position: absolute;
		bottom: 0;
		left: 20px;
		height: 100px;
		font-size: 28px;
		line-height: 45px;
		color: #fff;
	}
}
.current-album-box {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: #fff;
	z-index: 10000;
}
.current-album-box-list {
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 100vh;
	padding-top: 95px;
	border-bottom: constant(safe-area-inset-bottom) solid #fff;
	border-bottom: env(safe-area-inset-bottom) solid #fff;
	box-sizing: border-box;
	overflow-y: auto;
}
.current-album-list-left {
	margin: 20px 20px 0 10px;
}
.current-album-list-right {
	margin: 20px 10px 0 20px;
}
.current-album-list-icon {
	width: 345px;
	height: 450px;
	border: 1px solid #000;
	border-radius: 10px;
	box-sizing: border-box;
}
</style>
