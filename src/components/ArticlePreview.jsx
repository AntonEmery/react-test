import React from 'react';

function ArticlePreview({ title, excerpt }) {
  return (
    <div className="article-preview">
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{__html: excerpt}}></p>
    </div>
  )
}

export default ArticlePreview;