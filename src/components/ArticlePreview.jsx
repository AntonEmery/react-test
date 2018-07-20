import React from 'react';
import PropTypes from 'prop-types';

function ArticlePreview({ title, excerpt }) {
  return (
    <div className="article-preview">
      <h3>
        {title}
      </h3>
      <p dangerouslySetInnerHTML={{__html: excerpt}} />
    </div>
  );
}

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default ArticlePreview;
