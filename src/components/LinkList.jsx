import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description   
      }
    }
  }
`;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data && (
        <>
          {data.feed.links.map((link, index) => (
            <Link key={link.id} link={link} index={index} />
          ))}
        </>
      )}
    </div>
  );
};
export default LinkList;
