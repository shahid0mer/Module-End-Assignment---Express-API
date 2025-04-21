import express from'express'
import { createBook, deleteBook, updateBook, viewAllBooks, viewSingleBook } from './src/Controller/bookController.js'

const router = express.Router()

router.get('/viewall',viewAllBooks)

router.get('/:bookid',viewSingleBook)


router.post('/create', createBook)


router.put('/update/:bookid', updateBook)


router.delete('/delete/:bookid', deleteBook)



export default router