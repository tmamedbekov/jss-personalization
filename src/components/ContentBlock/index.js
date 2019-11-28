import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const ContentBlock = ({ fields }) => (
  <React.Fragment>
    Content Block
    <Text tag="h2" className="display-4" field={fields.heading} />
    <RichText className="contentDescription" field={fields.content} />
  </React.Fragment>

// - componentName: ContentBlock
// fields:
//   heading: Personalization POC
//   # to author content in YAML, use _multi-line values_ (prefixed with | + endline)
//   # as long as the same indent is preserved at the beginning of each line, no escaping
//   # is required at all in the value, making it easy to read
//   content: |
//       <p>Thanks for using JSS. Here are some resources to get you started:</p>


);

export default ContentBlock;