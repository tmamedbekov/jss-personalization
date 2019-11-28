import React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';

const ThreeCards = (props) => (
  
<div className="album py-5 bg-light">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <Image
            field={props.fields.thumbnail}
            editable={true}
            className="img-object-fit"
            height="225px"
            width="100%"
            data-sample="other-attributes-pass-through"
          />
          {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
          <div className="card-body">
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-info">View</button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
        <Image
            field={props.fields.thumbnail}
            editable={true}
            className="img-object-fit"
            height="225px"
            width="100%"
            data-sample="other-attributes-pass-through"
          />
          {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
          <div className="card-body">
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-info">View</button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
        <Image
            field={props.fields.thumbnail}
            editable={true}
            className="img-object-fit"
            height="225px"
            width="100%"
            data-sample="other-attributes-pass-through"
          />
          {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
          <div className="card-body">
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-info">View</button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>
);

export default ThreeCards;
