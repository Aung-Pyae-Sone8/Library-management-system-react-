import bookImg from "../assets/img1.png"
import useFetch from "../hooks/useFetch";

const BookList = () => {

    let { data : books, loading, error } = useFetch('http://localhost:3000/books')

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            {/* loading  */}
            {loading && <p>loading...</p>}

            {/* bool list */}
            {!!books && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-3">
                    {books.map((book) => (
                        <div className="p-4 border border-1" key={book.id}>
                            <img src={bookImg} alt="book" />
                            <div className="text-center space-y-2 mt-3">
                                <h1>{book.title}</h1>
                                <p>Description</p>
                                {/* genres  */}
                                <div className="flex flex-wrap">
                                    {
                                        book.categories.map((genre) => (
                                            <span key={genre} className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500">{genre}</span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default BookList;