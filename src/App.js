import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <main className="container">
          <h1>Library Catalog</h1>
          <Link to="/books">Go to Books</Link>
        </main>
      </Route>

      <Route path="/books/:id">
        <BookDetail />
      </Route>

      <Route path="/books">
        <BookList />
      </Route>
    </Switch>
  );
}

export default App;
