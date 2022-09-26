import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>
        <Route path="/books/:id">
          <BookDetail />
        </Route>

        <Route path="/books">
          <BookList />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
