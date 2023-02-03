<!--
 * @Description: 个人信息
 * @Autor: lkx
 * @Date: 2023-02-01 10:54:44
 * @LastEditors: lkx
 * @LastEditTime: 2023-02-02 10:44:46
-->

<template>
	<div class="my-personalInformation-box">
		<!-- 头像信息 -->
		<div class="avatar-information">
			<div class="avatar-information-icon"></div>
			<div class="avatar-information-center">
				<div class="avatar-information-name">XXXX</div>
				<div class="avatar-information-test">wwwwwwwwwwwww</div>
			</div>
		</div>
		<!-- 列表信息 -->
		<div class="list-information">
			<div v-for="item in listData" :key="item.source" class="list-information-box">
				<div class="list-information-box-card">
					<div class="list-information-box-item">
						<div class="item-text">{{ item.source }}</div>
						<div></div>
					</div>
					<div class="list-information-box-item item-interval">
						<div class="item-text">{{ item.text }}</div>
						<div class="item-text-value">{{ item.textValue }}</div>
					</div>
					<div v-if="item.accessLink" class="list-information-box-item item-interval" @click="openAccessLink()">
						<div class="item-text">访问地址</div>
						<div class="item-icon"><van-icon name="arrow" /></div>
					</div>
				</div>
			</div>
		</div>
		<!-- 弹出信息 -->
		<van-popup v-model:show="showBottom" position="bottom" :style="{ height: '300px' }">
			<div class="list-information-popup">
				<div class="list-information-popup-title">访问地址</div>
				<div class="list-information-popup-icon"></div>
				<a class="list-information-popup-link" href="">https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</a>
			</div>
		</van-popup>
	</div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
const showBottom = ref(false)
const listData = [
	{
		source: '微信',
		text: '账号',
		textValue: 'xxxxxxxxx',
		accessLink: 'ccccc',
	},
	{
		source: 'qq',
		text: '账号',
		textValue: 'xxxxxxxxx',
		accessLink: '',
	},
	{
		source: '微博',
		text: '账号',
		textValue: 'xxxxxxxxx',
		accessLink: 'ccccc',
	},
	{
		source: '抖音',
		text: '账号',
		textValue: 'xxxxxxxxx',
		accessLink: 'ccccc',
	},
]
const openAccessLink = () => {
	showBottom.value = true
}
</script>

<style scoped lang="scss">
.my-personalInformation-box {
	overflow-y: auto;
	height: 100%;
	padding-bottom: 10px;
	box-sizing: border-box;
	background: #eff2f5;
}

.avatar-information {
	display: flex;
	align-items: center;
	margin-top: 10px;
	padding: 30px;
	background: #fff;
}
.avatar-information-icon {
	width: 100px;
	height: 100px;
	border: 3px solid red;
	border-radius: 10px;
	background-color: #aaa;
}
.avatar-information-center {
	height: 100px;
	margin-left: 30px;
	padding: 16px 0;
	box-sizing: border-box;
	.avatar-information-name {
		color: #555;
		font-size: 40px;
		font-weight: bold;
	}
	.avatar-information-test {
		font-size: 28px;
		color: #aaa;
	}
}

.list-information-box {
	margin-top: 25px;
}

.list-information-box-card {
	padding: 15px 30px;
	background: #fff;
}
.list-information-box-item {
	display: flex;
	justify-content: space-between;
	padding: 30px 0;
	font-size: 28px;

	.item-text-value,
	.item-icon {
		color: #aaa;
	}
}
.item-interval {
	border-top: 1px dashed #aaa;
}

.list-information-popup {
	display: flex;
	flex-direction: column;
	padding: 120px 0 60px;

	.list-information-popup-title {
		position: absolute;
		top: 10px;
		left: 0;
		width: 100%;
		padding: 10px 0 20px 10px;
		// padding-left: 10px;
		// padding-bottom: 20px;
		font-weight: bold;
		border-bottom: 1px solid #aaa;
		box-sizing: border-box;
	}

	.list-information-popup-icon {
		width: 300px;
		height: 300px;
		margin: 0 auto 20px;
		border: 1px solid #aaa;
	}
	.list-information-popup-link {
		display: inline-block;
		width: 500px;
		margin: 0 auto;
		word-break: break-all;
		color: #2d8cf0;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
}
</style>
