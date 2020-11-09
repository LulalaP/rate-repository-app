import React from 'react';
import { render } from '@testing-library/react-native';
import RepositoryListContainer from '../../components/RepositoryListContainer';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      const { debug, getByTestId, getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

      // debug();
      for(let i = 0; i < 2; i++){
        const fullName = getAllByTestId('fullName');
        expect(fullName[i]).toHaveTextContent(i===0 ? 'jaredpalmer/formik' : 'async-library/react-async');

        const stars = getAllByTestId('stars');
        expect(stars[i]).toHaveTextContent('stars');
        expect(stars[i]).toHaveTextContent(i===0 ? '21.9k' : '1.8k');

        const forks = getAllByTestId('forks');
        expect(forks[i]).toHaveTextContent('forks');
        expect(forks[i]).toHaveTextContent(i===0 ? '1.6k' : '69');

        const rating = getAllByTestId('rating');
        expect(rating[i]).toHaveTextContent('rating');
        expect(rating[i]).toHaveTextContent(i===0 ? '88' : '72');


        const review = getAllByTestId('review');
        expect(review[i]).toHaveTextContent('review');
        expect(review[i]).toHaveTextContent(i=== 0 ? '3' : '3');
      }

      
    });
  });
});

