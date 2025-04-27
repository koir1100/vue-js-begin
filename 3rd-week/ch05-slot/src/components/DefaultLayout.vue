<template>
    <slot name="header"></slot>
    <slot name="main"></slot>
    <!-- 내부적으로 <slot name="default">로 처리됨 -->
    <slot></slot>
    <slot name="footer"></slot>
</template>