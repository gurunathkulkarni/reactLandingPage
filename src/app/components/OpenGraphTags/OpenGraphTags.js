import React, { Component } from 'react';
import { Helmet } from "react-helmet-async";
import { MAIN_URL } from '../../utils/apiConstants';

export default class OpenGraphTags extends Component {
    constructor(props){
        super(props); {

        }
    }
  render() {
      const {ogtags}=this.props
      console.log("tag",ogtags)
    return (
      <>
       <Helmet>
        <title>{ogtags.title}</title>
          <meta name="description" content={ogtags.description} />
          <link rel="canonical" href={ogtags.canonicalurl} />
          <meta property="og:url" content={ogtags.canonicalurl} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={ogtags.title}/>
          <meta property="og:description" content={ogtags.description}/>
          <meta property="og:image:secure_url" itemprop="image" content={`${MAIN_URL}uploads/banner/speaker.jpg`}/>
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="anandmamani.in" />
          <meta property="twitter:url" content={ogtags.canonicalurl}/>
          <meta name="twitter:title" content={ogtags.title} />
          <meta name="twitter:description" content={ogtags.description}/>
          <meta name="twitter:image" itemprop="image" content={`${MAIN_URL}uploads/banner/speaker.jpg`} />
          </Helmet>
       </>
    );
  }
}
