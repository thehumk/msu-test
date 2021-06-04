import Header from './header';
import FilmsList from './films-list';
import Footer from './footer';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <main className="app__main">
        <FilmsList/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
