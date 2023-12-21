<script setup>

import {useForm, Head, Link, usePage} from "@inertiajs/vue3";
import TextInput from "@/Components/TextInput.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {onMounted} from "vue";

const form = useForm({
    title: '',
    content: ''
})
const submit = () => {
    form.post(route('post.push'), {
        onFinish: () => form.reset('content')
    })


}
</script>

<template>
    <head title="Post Paylas"/>

    <div class="bg-gray-100 h-screen flex items-center justify-center">
        <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <form @submit.prevent="submit">
                <div class="mb-6">
                    <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Post Baslik:</label>
                    <TextInput  v-model="form.title" id="title" name="postContent" rows="4" class="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
          sm:leading-5 resize-none focus:outline-none focus:border-blue-500" placeholder="Post baslik giriniz..."></TextInput>
                </div>
                <!-- Post Content Section -->
                <div class="mb-6">
                    <label for="content" class="block text-gray-700 text-sm font-bold mb-2">Post Icerik:</label>
                    <textarea id="content" v-model="form.content" name="postContent" rows="4" class="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
          sm:leading-5 resize-none focus:outline-none focus:border-blue-500" placeholder="Post Icerik"></textarea>
                </div>
                <!-- File Attachment Section -->

                <!-- Submit Button and Character Limit Section -->
                <div class="flex items-center justify-between">
                    <button type="submit" class="flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"> Post <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" id="send" fill="#fff">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
                    </svg>
                    </button>
                    <span class="text-gray-500 text-sm">        <Link :href="route('editor.panel')"><PrimaryButton>Ana Sayfa</PrimaryButton></Link>
</span>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>
