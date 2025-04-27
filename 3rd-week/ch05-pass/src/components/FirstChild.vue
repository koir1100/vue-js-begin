<script>
import { message, reversedMessage } from '@/keys.js';
export default {
    // inject: ['message', 'reversedMessage'],
    inject: {
        customMessage: {
            from: message,
            default: 'default value',
        },
        customReversedMessage: {
            from: reversedMessage,
            default: 'default value2',
        },
    },
}
</script>
<template>
    <!-- <h1>{{ message }}</h1>
    <h2>{{ reversedMessage }}</h2> -->
    <h1>{{ customMessage }}</h1>
    <h2>{{ customReversedMessage }}</h2>
</template>