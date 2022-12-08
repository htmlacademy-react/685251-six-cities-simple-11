import { useState } from 'react';
import { SortTypes } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortType } from '../../store/app-process/app-process';
import { getSortType } from '../../store/app-process/selector';

function SortForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [isOpened, setOpenedState] = useState(false);
  const sortType = useAppSelector(getSortType);

  const onSortListClickHandler = () => setOpenedState(!isOpened);

  const onSortTypeChangeHandler = (type: SortTypes) => {
    dispatch(changeSortType(type));
    setOpenedState(false);
  };

  return (
    <form className="places__sorting" action="#" method="get" >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={onSortListClickHandler}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {Object.values(SortTypes).map((type) => (
          <li
            key={type}
            className={`places__option ${type === sortType ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => onSortTypeChangeHandler(type)}
          >
            {type}
          </li>))}
      </ul>
    </form>
  );
}

export default SortForm;
