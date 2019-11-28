import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Hero = (props) => (
<main role="main">

<section className="jumbotron text-center">
  <div className="container">
    <Text tag="h1" className="jumbotron-heading" field={props.fields.jumbotronHeading} />
    <Text tag="p" className="lead text-muted" field={props.fields.leadText} />
    <p>
      <a href="#main" className="btn btn-success my-2">Learn More</a>
    </p>
  </div>
</section>

</main>

);

export default Hero;
