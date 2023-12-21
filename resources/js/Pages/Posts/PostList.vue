<script setup>
import {ref, defineProps} from "vue";
import DangerButton from "@/Components/DangerButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
const {userPosts} = defineProps(['userPosts']);
const message = ref('');
const deletePost = async (postId) => {

    try {
       const response = await axios.delete(`/post/${postId}`);
        if (response.data && Array.isArray(response.data)) {
            message.value = response.data[1];

            setTimeout(() => {
                message.value = '';
                location.reload();
            }, 3000);


        }else {
            message.value = 'anlamadim lan hatayi';
        }
        }catch (error) {
        console.error('error deleting post kanka: ', error)
    }
}

const showPost = (postId) => {
    window.location.href = '/posts/' + postId;

}
const updatePost = (postId) => {
    window.location.href = '/post-edit/' + postId

}
</script>

<template>
    <div v-if="message" class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        <span class="font-medium">Islem basarili</span> {{message}}
    </div>
    <table class="w-full min-w-[640px] table-auto">
        <thead>
        <tr>
            <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Başlık</p>
            </th>
            <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Goruntule</p>
            </th>
            <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Sil</p>
            </th>
            <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Guncelle</p>
            </th>
        </tr>
        </thead>
        <tbody v-if="userPosts.length > 0">
        <tr v-for="post in $page.props.userPosts" :key="post.id">
            <td class="py-3 px-5 border-b border-blue-gray-50">
                <div class="flex items-center gap-4">
                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{{post.title}}</p>
                </div>
            </td>

            <td class="py-3 px-5 border-b border-blue-gray-50">

                <button @click="() => showPost(post.id)" class="bg-blue-500 text-white px-4 py-2 rounded-md">Görüntüle</button>
            </td>
            <td class="py-3 px-5 border-b border-blue-gray-50">
                <div class="w-10/12">
                    <danger-button @click="deletePost(post.id)" class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">Post Sil</danger-button>

                </div>
            </td>
            <td class="py-3 px-5 border-b border-blue-gray-50">
                <div class="w-10/12">
                    <secondary-button @click="updatePost(post.id)" class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">Guncelle</secondary-button>

                </div>
            </td>
        </tr>


        </tbody>
        <tbody v-else>
        <tr>
            <td class="py-3 px-5 border-b border-blue-gray-50" colspan="3">
                <p class="antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Paylaşılan post bulunamadı.</p>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<style scoped>

</style>
