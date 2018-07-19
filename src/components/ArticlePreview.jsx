import React from 'react';

function ArticlePreview(props) {
  return (
    <div className="article-preview">
      <h3 dangerouslySetInnerHTML={{__html: props.title}}></h3>
      <p>{props.excerpt}</p>
    </div>
  )
}

export default ArticlePreview;