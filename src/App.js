import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';

class App extends React.Component{
  render(){
    return(
      <div className='app'>
        <BookContextProvider>
          <Navbar />
          <BookList />
          <BookForm />
        </BookContextProvider>
      </div>
    )
  }
}

export default App;
