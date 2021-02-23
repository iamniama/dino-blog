import logo from './logo.svg';
import './App.css';
import Article from './Article'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Article title="Dinosaur stuff" author="Tricey" body="Dinosaurs are cool, like really cool!" comments={["First!!", "Very informative", "Hire this author now!"]}/>
      </header>
    </div>
  );
}

export default App;
