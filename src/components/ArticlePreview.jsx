import React from 'react';

function ArticlePreview({ title, excerpt }) {
  return (
    <div className="article-preview">
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{__html: excerpt}}></div>
    </div>
  )
}

export default ArticlePreview;