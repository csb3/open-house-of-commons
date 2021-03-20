import './PageList.scss';
import PageListItem from './PageListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

export default function Page(props) {
  const {
    page,
    pages,
    setPage,
  } = props;

  const jumpPage = function(direction) {
    switch(direction) {
      case 'leftest': {
        setPage(1);
        return;
      }

      case 'left': {
        const step = page - 5 <= 1 ? 1 : page - 5;
        setPage(step);
        return;
      }

      case 'right': {
        const step = page + 5 >= pages ? pages : page + 5;
        setPage(step);
        return;
      }

      case 'rightest': {
        setPage(pages);
        return;
      }

      default :
    }
  };

  const pageOrder = function(page, pages) {
    const pageArray = [
      page - 2,
      page - 1,
      page,
      page + 1,
      page + 2
    ];

    return pageArray.map(p => {
      if (p > 0 && p <= pages && p !== page) {
        return (
          <PageListItem key={p} onClick={() => setPage(p)}>{p}</PageListItem>
        );
      } else if (p === page) {
        return <PageListItem selected key={p}>{p}</PageListItem>
      } else {
        return <PageListItem key={p}> </PageListItem>
      } 
    });
  }

  return (
    <div className="pages-main">
      <FontAwesomeIcon onClick={() => jumpPage('leftest')} icon={faAngleDoubleLeft} size="3x" />
      <FontAwesomeIcon onClick={() => jumpPage('left')} icon={faAngleLeft} size="3x" />
      {pageOrder(page, pages)}
      <FontAwesomeIcon onClick={() => jumpPage('right')} icon={faAngleRight} size="3x" />
      <FontAwesomeIcon onClick={() => jumpPage('rightest')} icon={faAngleDoubleRight} size="3x" />
    </div>
  );
}