<!--
 * @Description: 
 * @Autor: lkx
 * @Date: 2023-01-31 18:14:58
 * @LastEditors: lkx
 * @LastEditTime: 2023-02-01 15:04:43
-->
<template>
	<div class="my-container-box">
		<!-- 路由出口 -->
		<div class="my-container-box-view">
			<router-view />
		</div>
		<!-- 加载动画 -->
		<LoadPage></LoadPage>
		<!-- 底部tab -->
		<TabBar></TabBar>
	</div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import LoadPage from './LoadPage.vue'
import TabBar from './TabBar.vue'

onMounted(() => {})

onBeforeUnmount(() => {})
</script>

<style scoped lang="scss">
.my-container-box-view {
	overflow-y: auto;
	height: 100vh;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
	border-bottom: 106px solid #000;
	box-sizing: border-box;
}
</style>
