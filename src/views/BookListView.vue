<script setup>

import { useBookStore } from '../stores/book'
import { RouterLink } from 'vue-router'

const bookStore = useBookStore()
</script>

<template>
    <main>
        <div>Book Update View</div>
        <RouterLink :to="{ name: 'book-create' }" class="btn btn-outline">Book Create</RouterLink>
        <ul>
            <li v-for="(book, index) in bookStore.books" :key="index">
                {{ book.name }}
                {{ book.author }}
                {{ index }}
                <RouterLink :to="{
                    name: 'book-edit',
                    params: { id: index }
                }">
                    <button class="btn btn-outline">Edit</button>
                </RouterLink>
                <button @click="bookStore.removeBook(index)" class="btn btn-outline">Delete</button>

            </li>
        </ul>
    </main>

</template>


<style></style>