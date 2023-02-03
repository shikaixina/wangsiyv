<!--
 * @Description: 
 * @Autor: lkx
 * @Date: 2023-01-31 17:50:18
 * @LastEditors: lkx
 * @LastEditTime: 2023-01-31 18:15:52
-->

<template>
	<div class="bg" v-if="isBg">
		<div class="right-box">
			<div class="right-time">剩余 {{ num }} 秒</div>
			<div class="right-btn" @click="closeBg()">跳过</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
let times: any
const num = ref<number>(5)
const isBg = ref<boolean>(true)
const closeBg = (): void => {
	isBg.value = false
}
onMounted(() => {
	times = setInterval(() => {
		num.value--
		if (num.value === 0) {
			closeBg()
			clearInterval(times)
		}
	}, 1000)
})

onBeforeUnmount(() => {
	clearInterval(times)
})
</script>

<style scoped lang="scss">
.bg {
	width: 100vw;
	height: 100vh;
	background-image: url('@/assets/images/bg.webp');
	background-repeat: no-repeat;
	background-size: 100%;
	color: #fff;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10000;
	.right-box {
		position: absolute;
		right: 10px;
		top: 10px;
		display: flex;
		.right-btn {
			color: rgb(53, 53, 53);
			margin-left: 10px;
			padding-bottom: 3px;
			border-bottom: 1px solid #fff;
			// border: 1px solid #fff;
			// border-radius: 10px;
			// padding: 5px;
			// box-sizing: border-box;
		}
	}
}
</style>
