import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const IndexPage = () => (
  <Layout isFront={true}>
    <SEO title={'Home'} />
    <div className="placeholder">
      <h1>RustFest Netherlands - Q4 2020</h1>
      <p>
        We've decided to{' '}
        <a href="https://blog.rustfest.eu/postponing-rustfest-nl">postpone the{' '}
        Dutch RustFest</a> due to the COVID-19 situation.
      </p>
      <p>
        The RustFest Netherlands team are working hard behind the scenes on
        getting everything ready. We hope to tell you more soon so keep an eye
        on the{' '}
        <a href="https://blog.rustfest.eu/" title="The RustFest blog">
          RustFest blog
        </a>{' '}
        and follow us on{' '}
        <a href="https://twitter.com/rustfest" title="RustFest on Twitter">
          Twitter
        </a>
        !
      </p>
    </div>
  </Layout>
);

export default IndexPage;
