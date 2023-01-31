<!--
 * @Description: 
 * @Autor: lkx
 * @Date: 2023-01-31 10:24:43
 * @LastEditors: lkx
 * @LastEditTime: 2023-01-31 14:56:21
-->
<script setup lang="ts">
const observer = new MutationObserver(() => {
	document.body.style.fontSize = document.documentElement.style.fontSize
})
document.body.style.fontSize = document.documentElement.style.fontSize
observer.observe(document.documentElement, { attributeFilter: ['style'] })
</script>

<template>
	<router-view />
</template>

<style scoped></style>
