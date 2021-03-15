import {
  render,
  screen,
  debug,
  getAllByTestId,
} from '@testing-library/react';

import VoteList from '../VoteList';

const votes = [
  {
    id: 1,
    voteNum: 72,
    parlNum: 43,
    sessNum: 2,
    billNum: 'C-7',
    date: '2021-03-11 20:40:40',
    result: 'Agreed To',
    summary: 'Motion respecting Senate amendments to Bill C-7, An Act to amend the Criminal Code (medical assistance in dying)',
  },
  {
    id: 2,
    voteNum: 71,
    parlNum: 43,
    sessNum: 2,
    billNum: 'C-7',
    date: '2021-03-11 20:30:40',
    result: 'Negatived',
    summary: 'Motion respecting Senate amendments to Bill C-7, An Act to amend the Criminal Code (medical assistance in dying) (amendment)',
  },
  {
    id: 3,
    voteNum: 70,
    parlNum: 43,
    sessNum: 2,
    billNum: 'C-7',
    date: '2021-03-11 15:45:00',
    result: 'Agreed To',
    summary: 'Motion for closure',
  },
  {
    id: 4,
    voteNum: 69,
    parlNum: 43,
    sessNum: 2,
    billNum: 'C-18',
    date: '2021-03-10 15:50:00',
    result: 'Agreed To',
    summary: '3rd reading and adoption of Bill C-18, An Act to implement the Agreement on Trade Continuity between Canada and the United Kingdom of Great Britain and Northern Ireland',
  },
  {
    id: 5,
    voteNum: 68,
    parlNum: 43,
    sessNum: 2,
    billNum: 'C-216',
    date: '2021-03-10 15:40:00',
    result: 'Agreed To',
    summary: '2nd reading of Bill C-216, An Act to amend the Department of Foreign Affairs, Trade and Development Act (supply management)',
  }
];

describe('VoteListItem', () => {
  const { debug, container } = render(<VoteList votes={votes} />);
  const votelistitem = getAllByTestId(container, 'vote-list-item');

  test('should have 5 items when passed an array with 5 objects', () => {

    expect(votelistitem).toHaveLength(5);
  });

  test('second item should have an object with vote number 71', () => {
    const second = votelistitem[1];

    expect(second).toHaveTextContent('Vote No. 71');
  });

  test('fifth item should have an object with the result Agreed To', () => {
    const fifth = votelistitem[4];

    expect(fifth).toHaveTextContent('Agreed To');
  });
});
