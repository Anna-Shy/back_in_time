import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { ItemPage } from '../itemPage/ItemPage';

export const ItemPageWithBreadcrumbs = () => {
  const { itemId } = useParams();

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Catalog', link: '/catalog' },
    { label: `Item ${itemId}`, link: `/catalog/${itemId}` }
  ];

  return (
    <div>
      <ul>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            <Link to={breadcrumb.link}>{breadcrumb.label}</Link>
          </li>
        ))}
      </ul>

      <ItemPage itemId={itemId} />
    </div>
  );
};
