import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/**
 * Pulls the most recent blog post from the blog.rustfest.eu and shows it.
 *
 * @return {ReactElement}
 *   The rendered article.
 */
export default function RecentBlogPost() {
  // Get some metadata for the site.
  const { feedRustFestBlog: post } = useStaticQuery(graphql`
    query latestRustBlogPost {
      feedRustFestBlog {
        title
        pubDate
        link
        contentSnippet
      }
    }
  `);

  // Remove the time and timestamp from the pubDate.
  const date = post.pubDate
    .split(' ')
    .slice(0, 4)
    .join(' ');

  return (
    <article>
      <time>{date}</time>
      <h3>
        <a href={post.link} title={'Read the full post'}>
          {post.title}
        </a>
      </h3>
      <p>{post.contentSnippet}</p>
    </article>
  );
}
