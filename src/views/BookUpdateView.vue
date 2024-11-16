<script setup>
import { ref, onMounted, reactive, computed } from 'vue'
import { useRouter, RouterLink, useRoute } from 'vue-router'

import { useBookStore } from '../stores/book'

const router = useRouter()
const route = useRoute()
const bookStore = useBookStore()

const bookData = reactive({
    name: '',
    author: '',
})

const mode = ref('create')
const bookIndex = ref(-1)

onMounted(() => {
    if (route.name === 'book-edit') {
        mode.value = 'update'
        bookIndex.value = parseInt(route.params.id)
        const cBookStore = bookStore.books[bookIndex.value]
        bookData.name = cBookStore.name
        bookData.author = cBookStore.author
    }
})

const addBook = () => {
    if (mode.value === 'update') {
        bookStore.editBook(bookData, bookIndex.value)
    } else {
        bookStore.addBook(bookData)
    }

    router.push({
        name: 'book-list'
    })
}

const displayButton = computed(() => {
    if (mode.value === 'update') {
        return 'Update Book'
    }
    return 'Add Book'

})

</script>

<template>
    <main>
        <div>
            Book Update View
            <div>
                Book Name
                <input type="text" v-model="bookData.name" placeholder="Type here"
                    class="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                Book Author
                <input type="text" v-model="bookData.author" placeholder="Type here"
                    class="input input-bordered w-full max-w-xs" />
            </div>
            <button @click="addBook()" class="btn btn-outline">{{ displayButton }}</button>
        </div>


        <RouterLink :to="{ name: 'book-list' }"><button class="btn btn-outline">Black</button></RouterLink>


    </main>
</template>


<style></style>