<!--
 * @Description: 
 * @Autor: lkx
 * @Date: 2023-01-31 10:24:43
 * @LastEditors: lkx
 * @LastEditTime: 2023-01-31 16:25:47
-->

<script setup lang="ts">
import { useMainStore } from '@/store/index.ts'
import { ref } from 'vue'
const checked = ref()
const store = useMainStore()
const setAge = () => {
	store.setAge()
}
</script>

<template>
	<div class="index-box">
		<div class="box-header">{{ store.name }}({{ store.ages }})</div>
		<div>
			<div @click="setAge" class="box-btn">setAge</div>
		</div>
		<van-checkbox v-model="checked">复选框</van-checkbox>
	</div>
</template>

<style scoped lang="scss">
.index-box {
	position: relative;
	width: 100%;
	height: 100%;
	padding-top: 75px;
	.box-header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 75px;
		background-color: #000;
		color: #fff;
		font-size: 25px;
		text-align: center;
		line-height: 75px;
	}
	.box-btn {
		width: 100px;
		margin: 10px 0;
		padding: 5px 10px;
		border: 1px solid #000;
		font-size: 20px;
		text-align: center;
		border-radius: 5px;
	}
}
</style>
