<!--
 * @Description: 
 * @Autor: lkx
 * @Date: 2023-01-31 18:31:16
 * @LastEditors: lkx
 * @LastEditTime: 2023-02-01 11:28:11
-->
<template>
	<div class="my-tab-bar">
		<van-tabbar v-model="active">
			<van-tabbar-item v-for="item in tabBarList" :key="item.path" :icon="item.icon" :to="item.path">{{ item.title }}</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const router = useRoute()

const tabBarList = [
	{
		title: '首页',
		icon: 'wap-home',
		path: '/home',
	},
	{
		title: '相册',
		icon: 'photo',
		path: '/album',
	},
	{
		title: '动态',
		icon: 'wechat-moments',
		path: '/dynamic',
	},
	{
		title: '我的',
		icon: 'manager',
		path: '/personalInformation',
	},
]

const active = ref(0)

// 路由归属判断
watch(
	() => router.path,
	(newPath) => {
		const newIndex = tabBarList.findIndex((item) => newPath.includes(item.path))
		// 设置选中
		active.value = newIndex
		// 设置页面标题
		document.title = tabBarList[newIndex].title
	},
	{ immediate: true }
)

onMounted(() => {})

onBeforeUnmount(() => {})
</script>

<style scoped lang="scss">
.my-tab-bar .van-tabbar {
	border-top: 1px solid rgb(212, 212, 212);
	padding-top: 5px;
}
</style>
