import React ,{useContext , useState} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const [book , setBook] = useState('');
    const [author, setAuthor] = useState('');
    const {addBook} = useContext(BookContext);

    const handleSubmit = e => {
        e.preventDefault();
        addBook(book , author)
        setBook('');
        setAuthor('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type='text' value = {book} placeholder = "Book Title.. " name='book' onChange = {(e) => setBook(e.target.value)} required/>
            <input type='text' value = {author} placeholder = "Author Name .. " name='author' onChange = {(e) => setAuthor(e.target.value)}  required/>
            <input type="submit" value="Add Book" />
        </form>

        
     );
}
 
export default BookForm;