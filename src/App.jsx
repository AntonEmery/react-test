import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticlePreview from './components/ArticlePreview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleData: [],
    };
  }


  async componentDidMount() {
    try {
      const data = await fetch('https://thewirecutter.com/wp-json/wp/v2/posts');
      const result = await data.json();
      this.setState({ articleData: result });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { articleData } = this.state;
    const previewContent = articleData.map((article, index) => {
      return (
        <ArticlePreview
          key={index}
          title={article.title.rendered}
          excerpt={article.excerpt.rendered}
        />
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Anton Emery - React Test
          </h1>
        </header>
        {previewContent}
      </div>
    );
  }
}

export default App;
