import { ChangeEvent, Fragment } from 'react';
import { ratingTitles } from '../../const';

type StarsRatingInputProps = {
  onChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function StarsRatingInput({onChangeHandler}: StarsRatingInputProps): JSX.Element {

  return (
    <div className="reviews__rating-form form__rating">
      {ratingTitles.map((title, index) => (
        <Fragment key={title}>
          <input
            onChange={onChangeHandler}
            className="form__rating-input visually-hidden"
            name="rating"
            value={5 - index}
            id={`${5 - index}-stars`}
            type="radio"
          />
          <label htmlFor={`${5 - index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </Fragment>
      ))}
    </div>);
}

export default StarsRatingInput;
