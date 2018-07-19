import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArticlePreview from'./components/ArticlePreview';

class App extends React.Component {

  state = {
    articleData: []
  }

  async componentDidMount() {
    try {
      const data = await fetch('https://thewirecutter.com/wp-json/wp/v2/posts');
      const result = await data.json();
      this.setState({ articleData: result })
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    const previewContent = this.state.articleData.map(item => {
      console.log(item);
      return item;
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Anton Emery - React Test</h1>
        </header>
        <ArticlePreview />
      </div>
    );
  }
}

export default App;
