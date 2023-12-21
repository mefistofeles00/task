<script setup>
import {router} from "@inertiajs/vue3";

defineProps({posts: Object})

const showPost = (postId) => {
    router.visit('/posts/' + postId)
}
</script>

<template>

    <table class="w-full min-w-[40px] table-auto">
        <thead>
        <tr>


            <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Baslik</p>
            </th>
            <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Goruntule</p>
            </th>
        </tr>
        </thead>
        <tbody v-if="Object.keys(posts).length > 0">
        <tr v-for="post in posts.data" :key="post.id">
            <td class="py-3 px-5 border-b border-blue-gray-50">
                <div class="flex items-center gap-4">
                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{{post.title}}</p>
                </div>
            </td>

            <td class="py-3 px-5 border-b border-blue-gray-50">

                <button @click="showPost(post.id)" class="bg-blue-500 text-white px-4 py-2 rounded-md">Goruntule</button>
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
