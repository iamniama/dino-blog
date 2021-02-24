import './App.css';
import Article from './Article'

function App() {
  const articleText = "Dinosaurs are cool...they once ruled the earth, you know, until some mysterious meteorological event killed them off, or so they would have you believe... \n Those who know things suspect that they evolved and moved underground..."
  const comments = ["First!!", "Very informative", "Someone with deep pockets should hire this author now!"]
  return (
    <div className="App">
      <header className="App-header">
        <Article title="Dinosaur stuff" author="Tricey" body={articleText} comments={comments}/>
      </header>
    </div>
  );
}

export default App;
