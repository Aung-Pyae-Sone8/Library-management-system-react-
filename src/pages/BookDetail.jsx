import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

const BookDetail = () => {

    let {id} = useParams();
    let { data: book, loading, error } = useFetch(`http://localhost:3000/books/${id}`)

    return (
        <>
            {error && <p>{error}</p>}
            {loading && <p>loading...</p>}
            {book && (
                <h1>{book.title}</h1>
            )}
        </>
    )
}

export default BookDetail;