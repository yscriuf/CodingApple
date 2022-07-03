import logo from './logo.svg';
import './App.css';

function App() {
  let blogName = "지렁이의 성장 블로그";
  
  return (
    <div className="App">
      <div className="blog-title">
        {blogName}
      </div>
    </div>
  );
}

export default App;
