import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ArticlePreview({ title, excerpt, id }) {
  return (
    <div className="article-preview">
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{__html: excerpt}}></div>
      <Link to={`/fullarticle/${id}`}> Full Article</Link>
    </div>
  );
}

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default ArticlePreview;
