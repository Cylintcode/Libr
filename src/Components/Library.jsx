import {useState, useEffect} from 'react';


export default function Library() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch('http://localhost:4005/api/books');
            const data = await response.json();
            console.log(data);
            setBooks(data);
        }
        fetchBooks()
    }, []);


  return (
    <div>
      <h1>Library</h1>
      <ul>
        {books.map((book, index) => (
                  <li key={index}>
            <div>{book.name}</div>  
            <div>{book.author}</div> 
            <div>({book.year_published})</div> 
            <br />
          </li>
        ))}
        </ul>
    </div>
  );
}   // End of Library component