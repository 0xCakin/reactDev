
import './App.css';

function Header() {
  return (
    <header>
      <h1>Eve's kitchen</h1>
    </header>
  )
  
}
function Main() {
  return (
    <section>
      <p>We server the most delicious food</p>
    </section>
    

  )  
}

function Footer() {
  return (
    <footer>
      <p>This is a footer.</p>
    </footer>
  )
}
  
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
