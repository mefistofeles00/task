<script setup>
import {ref} from "vue";

const {post} = defineProps(['post']);
const isOpen = ref({});


</script>

<template>
    <div v-if="isOpen" class="modal-overlay">
        <div class="modal">
            <button @click="closeModal" class="modal-close-btn">×</button>
            <div class="modal-content">
                <h2>{{ post.title }}</h2>
                <p>{{ post.content }}</p> <!-- İçerik burada gösteriliyor -->
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Stiller */
</style>
