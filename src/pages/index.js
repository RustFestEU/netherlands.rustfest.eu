import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Logo from "../components/atoms/Logo";

const IndexPage = () => (
  <Layout isFront={true}>
    <SEO title={'Home'} />
    <div className="placeholder">
      <Logo />
      <h1>RustFest Netherlands - Q2 2020</h1>
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
