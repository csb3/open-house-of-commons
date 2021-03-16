import {
  render,
  screen,
  debug,
  getByTestId,
} from '@testing-library/react';

import VoteListItem from '../VoteListItem';

const vote = {
  id: 3,
  voteNum: 70,
  parlNum: 43,
  sessNum: 2,
  billNum: 'C-7',
  date: '2021-03-11 15:45:00',
  result: 'Agreed To',
  summary: 'Motion for closure',
};

describe('VoteListItem', () => {
  const { debug, container } = render(<VoteListItem {...vote} />);
  const votelistitem = getByTestId(container, 'vote-list-item');

  test('renders vote without crashing', () => {
  });

  test('should have vote number', () => {
    expect(votelistitem).toHaveTextContent('Vote No. 70');
  });

  test('should have motion summary', () => {
    expect(votelistitem).toHaveTextContent('Motion for closure');
  });
});
