<script setup>
import {Link, Head, usePage, router} from "@inertiajs/vue3";
import { ref } from "vue";
const isLoggedIn = ref(false);
import Posts from "@/Pages/Frontend/Posts.vue";
const userName = ref('');
const {props} = usePage();
defineProps({posts: Object, lastPost: Object, userRole: Number, isLoggedIn: Boolean}, )

if (props.auth.user) {
    isLoggedIn.value = true;
    userName.value = props.auth.user.name;
}


</script>

<template>
    <Head title="Ana Sayfa"/>
    <div class="overflow-x-hidden bg-gray-100">
        <nav class="px-6 py-4 bg-white shadow">
            <div class="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
                <div class="flex items-center justify-between">
                    <div>
                        <a href="#" class="text-xl font-bold text-gray-800 md:text-2xl">Task</a>
                    </div>
                    <div>
                        <button type="button" class="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex-col hidden md:flex md:flex-row md:-mx-4">
                    <Link :href="route('home')" class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Ana Sayfa</Link>
                    <Link  v-if="!isLoggedIn" :href="route('login.index')" class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Giris yap</Link>
                    <Link :href="route('log.out')" v-else>{{ userName }}>Cikis Yap</Link>
                    <Link  v-if="userRole === 1" :href="route('editor.panel')" class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Editor Paneli</Link>
                    <Link  v-else-if="userRole === 2" :href="route('subs.dash')" class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Abone Paneli</Link>
                    <Link :href="route('register.index')" v-if="!isLoggedIn && userRole !== 1" class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Abone Ol</Link>
                </div>
            </div>
        </nav>

        <div class="px-6 py-8">
            <div class="container flex justify-between mx-auto">
                <div class="w-full lg:w-8/12">
                    <div class="flex items-center justify-between">
                        <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Task Ana Sayfa</h1>

                    </div>
                   <Posts :posts="posts"/>

                    <div class="mt-6">
<a
    v-for="link in posts.links"
    :key="link.url"
    :is="link.url ? 'Link' : 'span'"
    :href="link.url"
    v-html="link.label"
    class="px-1"
    :class="link.url ? '' : 'text-gray-400'"
/>


                    </div>
                </div>
                <div class="hidden w-4/12 -mx-8 lg:block">
                    <div class="px-8">
                        <h1 class="mb-4 text-xl font-bold text-gray-700">Yazarlar</h1>
                        <div class="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                            <ul class="-mx-4">
                                <li class="flex items-center"><img
                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                    alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full">
                                    <p><a href="#" class="mx-1 font-bold text-gray-700 hover:underline">Alex John</a><span
                                        class="text-sm font-light text-gray-700">Created 23 Posts</span></p>
                                </li>
                                <li class="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                                    alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full">
                                    <p><a href="#" class="mx-1 font-bold text-gray-700 hover:underline">Jane Doe</a><span
                                        class="text-sm font-light text-gray-700">Created 52 Posts</span></p>
                                </li>
                                <li class="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                                    alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full">
                                    <p><a href="#" class="mx-1 font-bold text-gray-700 hover:underline">Lisa Way</a><span
                                        class="text-sm font-light text-gray-700">Created 73 Posts</span></p>
                                </li>
                                <li class="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                                    alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full">
                                    <p><a href="#" class="mx-1 font-bold text-gray-700 hover:underline">Steve Matt</a><span
                                        class="text-sm font-light text-gray-700">Created 245 Posts</span></p>
                                </li>
                                <li class="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
                                    alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full">
                                    <p><a href="#" class="mx-1 font-bold text-gray-700 hover:underline">Khatab
                                        Wedaa</a><span class="text-sm font-light text-gray-700">Created 332 Posts</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
<!--
                    <div class="px-8 mt-10">
                        <h1 class="mb-4 text-xl font-bold text-gray-700">Categories</h1>
                        <div class="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                            <ul>
                                <li><a href="#" class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    AWS</a></li>
                                <li class="mt-2"><a href="#"
                                                    class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Laravel</a></li>
&lt;!&ndash;                          D      <li class="mt-2"><a href="#"
                                                    class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- Vue</a>
                                </li>&ndash;&gt;
                                <li class="mt-2"><a href="#"
                                                    class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Design</a></li>
                                <li class="flex items-center mt-2"><a href="#"
                                                                      class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Django</a></li>
                                <li class="flex items-center mt-2"><a href="#"
                                                                      class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- PHP</a>
                                </li>
                            </ul>
                        </div>
                    </div>
-->
                    <div class="px-8 mt-10">
                        <h1 class="mb-4 text-xl font-bold text-gray-700">En Son Gonderi</h1>
                        <div class="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
<!--                            <div class="flex items-center justify-center"><a href="#"
                                                                             class="px-2 py-1 text-sm text-green-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a>
                            </div>-->
                            <div class="mt-4"><a href="#" class="text-lg font-medium text-gray-700 hover:underline">
                                {{lastPost.title}}</a></div>
                            <div class="flex items-center justify-between mt-4">
                                <div class="flex items-center"><img
                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                    alt="avatar" class="object-cover w-8 h-8 rounded-full"><a href="#"
                                                                                              class="mx-3 text-sm text-gray-700 hover:underline">{{lastPost.users.name}}</a></div><span
                                class="text-sm font-light text-gray-600">Jun 1, 2020</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="px-6 py-2 text-gray-100 bg-gray-800">
            <div class="container flex flex-col items-center justify-between mx-auto md:flex-row"><a href="#"
                                                                                                     class="text-2xl font-bold">Task</a>
                <p class="mt-2 md:mt-0">All rights reserved 2020.</p>
                <div class="flex mt-4 mb-2 -mx-2 md:mt-0 md:mb-0"><a href="#"
                                                                     class="mx-2 text-gray-100 hover:text-gray-400"><svg viewBox="0 0 512 512"
                                                                                                                         class="w-4 h-4 fill-current">
                    <path
                        d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z">
                    </path>
                </svg></a><a href="#" class="mx-2 text-gray-100 hover:text-gray-400"><svg viewBox="0 0 512 512"
                                                                                          class="w-4 h-4 fill-current">
                    <path
                        d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z">
                    </path>
                </svg></a><a href="#" class="mx-2 text-gray-100 hover:text-gray-400"><svg viewBox="0 0 512 512"
                                                                                          class="w-4 h-4 fill-current">
                    <path
                        d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z">
                    </path>
                </svg></a>
                </div>
            </div>
        </footer>
    </div>
</template>

<style>

</style>
