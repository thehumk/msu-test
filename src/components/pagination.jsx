import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadFilms} from '../store/actions/api-actions';

const Pagination = ({page, changePage}) => {
  return (
    <div className="pagination films-list__pagination">
      {page > 1 && (
        <a href="#top" className="pagination__link" onClick={() => {
          changePage(1);
        }}>{`<<`}</a>
      )}
      {page > 1 && (
        <a href="#top" className="pagination__link" onClick={() => {
          changePage(page - 1);
        }}>{`<`}</a>
      )}

      <a href="#top" className="pagination__link">{page}</a>

      <a href="#top" className="pagination__link" onClick={() => {
        changePage(page + 1);
      }}>{`>`}</a>
      {/* В данном случае, по логике должна быть копка, ведущая на последнюю страницу, однако API не предполагает получения общего числа фильмов, по этому она не была реализована */}
    </div>
  );
}

const mapStateToProps = ({page}) => ({
  page,
});

const mapDispatchToProps = (dispatch) => ({
  changePage(page) {
    dispatch(loadFilms(page));
  },
});

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
