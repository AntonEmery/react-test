import React from 'react';
import { Link } from 'react-router-dom';

function ArticlePreview({ title, excerpt, id }) {
  return (
    <div className="article-preview">
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{__html: excerpt}}></div>
      <Link to={`/fullarticle/${id}`}> Full Article</Link>
    </div>
  )
}

export default ArticlePreview;