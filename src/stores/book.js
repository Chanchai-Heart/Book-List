
import { defineStore } from 'pinia'

export const useBookStore = defineStore('book',{
  state: () => ({
    books: [{
      name: 'book name',
      author: 'heart',
    },
    ],
}),
  actions: {
    //เพิ่ม
    addBook(bookData){
      this.books.push(bookData)
    },
    //ลบ
    removeBook(bookIndex){
      this.books.splice(bookIndex, 1)
    },
    //แก้
    editBook(bookData, bookIndex){
      this.books.splice(bookIndex, 1, bookData)
    }
  }
}
)

