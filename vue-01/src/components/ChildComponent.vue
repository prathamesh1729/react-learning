<script setup>
const props = defineProps({
    msg: String
})

console.log('Child component props received:', props)
const emit = defineEmits(['response'])
emit('response', 'Hello from the child component!')
</script>

<template>
    <p>{{ msg ? `Child Component: ${msg}` : 'Child Component: No props passed yet!' }}</p>
    <slot>
        <div class="child--slot">
            Child Component: Fallback content
        </div>
    </slot>
</template>

<style scoped>
p {
    color: greenyellow;
}

.child--slot {
    color: cyan;
}
</style>