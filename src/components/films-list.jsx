import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Repeat} from '../utils';
import Comments from './comments';
import {ActionCreator} from '../store/actions/actions';
import {mockComments} from '../mocks';
import Pagination from './pagination';

const FilmsList = ({films, comments, currentFilm, getComments}) => {
  if (films.length === 0) {
    return (
      <div className="films-list__load">⧖</div>
    );
  }
  return (
    <section className="films-list container">
      <h1 className="films-list__title">Films list</h1>
      <ul className="films-list__container">
        <Repeat numTimes={15}>
          {(i) => (
            <li className="films-list__item" key={i}>
              <div className="films-list__item-container">
                <img src={films[i].medium_cover_image} alt="poster" className="films-list__photo" />
                <div className="films-list__info">
                  <h3 className="films-list__item-title">{films[i].title}</h3>
                  <p className="films-list__release">Release year: {films[i].year}</p>
                  <ul className="films-list__genres">
                    Жанры:
                    {films[i].genres !== undefined && (
                      <Repeat numTimes={films[i].genres.length}>
                        {(j) => (
                          <li key={j} className="films-list__genres-item">{films[i].genres[j]}</li>
                        )}
                      </Repeat>
                    )}
                  </ul>
                </div>
                <p className="films-list__rating">Rating: {films[i].rating}</p>
                <p className="films-list__duration">Duration: {films[i].runtime}</p>
                <p className="films-list__description">{films[i].description_full.length > 200 ? films[i].description_full.slice(0, 200) + `...` : films[i].description_full}</p>
                <button className="films-list__comments" onClick={() => {
                  const filmComments = comments[films[i].id] === undefined ? mockComments : comments[films[i].id];
                  getComments(films[i].id, filmComments)
                }}>Comments</button>
              </div>
              {currentFilm === films[i].id && (
                <Comments/>
              )}
            </li>
          )}
        </Repeat>
      </ul>
      <Pagination/>
    </section>
  );
}

const mapStateToProps = ({films, comments, currentFilm}) => ({
  films,
  comments,
  currentFilm,
});

const mapDispatchToProps = (dispatch) => ({
  getComments(id, comments) {
    dispatch(ActionCreator.getComments(id, comments));
  }
});

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
  comments: PropTypes.object.isRequired,
  currentFilm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  getComments: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsList);
