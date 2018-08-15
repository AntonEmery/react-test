import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticlePreviewWrapper from '../wrappers/ArticlePreviewWrapper';
import FullArticle from './FullArticle';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ArticlePreviewWrapper} />
        <Route exact path='/fullarticle/:id' component={FullArticle} />
      </Switch>
    )
  }
}

export default Main;

