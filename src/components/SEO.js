import React from 'react'
import { Helmet } from 'react-helmet'

const Seo = () => {
    return (
        <Helmet>
          <meta charSet="utf-8" />
          <title>JK</title>
          <link rel="canonical" href="http://dodosaurus.github.io/" />
        </Helmet>
    )
}

export default Seo
