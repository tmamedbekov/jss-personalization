import React from 'react';
import { Placeholder, VisitorIdentification } from '@sitecore-jss/sitecore-jss-react';
import Helmet from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/app.css';
import './assets/album.css';

import "../node_modules/jquery/dist/jquery.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const Layout = ({ route }) => (
  <React.Fragment>
    <Helmet>
      <title>
        {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
      </title>
    </Helmet>
       
    <VisitorIdentification />

      <Placeholder name="jss-header" rendering={route} />
      <Placeholder name="jss-content" rendering={route} />
      <Placeholder name="jss-footer" rendering={route} />

  </React.Fragment>
);

export default Layout;
