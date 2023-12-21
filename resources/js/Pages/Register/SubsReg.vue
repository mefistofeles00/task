<script setup>
import TextInput from "@/Components/TextInput.vue";
import {useForm, Head} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";

const form = useForm({
   email: '',
   password: '',
    name: '',
    password_confirmation: ''
});
const submit = () => {
    form.post(route('register.store'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    })
}
</script>

<template>
    <Head title="Abone Ol"/>
    <div class="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
         style="background-image: url(https://images.unsplash.com/photo-1532423622396-10a3f979251a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80);">
        <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
            <div class="grid  gap-8 grid-cols-1">
                <div class="flex flex-col ">
                    <div class="flex flex-col sm:flex-row items-center">
                        <h2 class="font-semibold text-lg mr-auto">Bültenimize Abone Ol!</h2>
                        <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                    </div>
                    <div class="mt-5">
                        <form class="form" @submit.prevent="submit">

                            <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                                <div class="mb-3 space-y-2 w-full text-xs">
                                    <label class="font-semibold text-gray-600 py-2">İsminiz <abbr title="required">*</abbr></label>
                                    <TextInput placeholder="İsminiz" v-model="form.name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="name"/>
                                    <InputError class="mt-2" :message="form.errors.name" />

                                </div>

                            </div>
                            <div class="mb-3 space-y-2 w-full text-xs">
                                <label class=" font-semibold text-gray-600 py-2">Email</label>
                                <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                                    <div class="flex">

                                    </div>
                                    <TextInput v-model="form.email" type="text" id="email" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" placeholder="Email"/>
                                    <InputError class="mt-2" :message="form.errors.email" />

                                </div>
                            </div>
                            <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
                                <div class="w-full flex flex-col mb-3">
                                    <label class="font-semibold text-gray-600 py-2">Şifre</label>
                                    <TextInput placeholder="Sifre" v-model="form.password" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="password" id="password"/>
                                    <InputError class="mt-2" :message="form.errors.password" />

                                </div>
                                <div class="w-full flex flex-col mb-3">
                                    <label class="font-semibold text-gray-600 py-2">Şifre Tekrar</label>
                                    <TextInput placeholder="" v-model="form.password_confirmation" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="password" id="password_confirmation"/>
                                    <InputError class="mt-2" :message="form.errors.password_confirmation" />

                                </div>
                            </div>

                            <div class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                                <PrimaryButton class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">Kayıt Ol</PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
