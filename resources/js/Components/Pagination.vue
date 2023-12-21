<template>
    <div>
        <ul class="pagination">
            <li v-for="page in totalPages" :key="page" @click="changePage(page)" :class="{ active: currentPage === page }">
                {{ page }}
            </li>
        </ul>
    </div>
</template>

<script setup>
const { totalPages,  posts} = defineProps(['totalPages', 'posts']);


/*const changePage = (page) => {
    const newUrl = `/?page=${page}`;
    window.history.pushState({}, '', newUrl);

};*/




</script>

<style scoped>
.pagination {
    list-style: none;
    display: flex;
    padding: 0;
}

.pagination li {
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ddd;
}

.pagination li.active {
    background-color: #007bff;
    color: #fff;
}
</style>
