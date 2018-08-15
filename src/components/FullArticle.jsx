import React, { Component } from 'react'

class FullArticle extends Component {

  state = {
    articleContent: {}
  }

  async componentDidMount() {
    try {
      const data = await fetch('https://thewirecutter.com/wp-json/wp/v2/posts');
      const result = await data.json();
      const filteredResult = result.filter(obj => {
        return obj.id === parseInt(this.props.match.params.id, 10);
      })
      this.setState({ articleContent: filteredResult[0] })

    } catch(error) {
      console.log(error)
    }
  }

  render() {
    return (
      this.state.articleContent.id
      ? <p dangerouslySetInnerHTML={{__html: this.state.articleContent.content.rendered}}></p>
      : <p>Loading</p>
    )
  }
}

export default FullArticle;

