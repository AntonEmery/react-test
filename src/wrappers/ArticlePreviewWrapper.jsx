import React, { Component } from 'react';
import ArticlePreview from '../components/ArticlePreview';

class ArticlePreviewWrapper extends Component {

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
    const previewContent = this.state.articleData.map((article, index) => {
      return <ArticlePreview
          key={index}
          title={article.title.rendered}
          excerpt={article.excerpt.rendered}
       />
    })
    return (
      <div>
        {previewContent}
      </div>
    )
  }
}

export default ArticlePreviewWrapper;