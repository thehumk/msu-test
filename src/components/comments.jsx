import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Repeat} from '../utils';
import {ActionCreator} from '../store/actions/actions';
import {currentUserID} from '../mocks';

const Comments = ({comments, currentFilm, addComment, deleteComment, closeComments}) => {
  const [inputComment, setComment] = useState(``);
  const [scrollStatus, setScroll] = useState(``);
  const commentsList = React.createRef();

  useEffect(() => {
    commentsList.current.scrollTop = commentsList.current.scrollHeight;
    // eslint-disable-next-line
  }, [scrollStatus]);

  async function onAddComment(evt) {
    evt.preventDefault();

    const randomId = Math.floor(Math.random() * 1000);
    await addComment(currentFilm, {
      id: randomId,
      author: `Author`,
      userId: currentUserID,
      date: `03.06.2021`,
      text: inputComment,
    });

    setScroll(randomId);
  }

  return (
    <section className="comments">
      <button className="comments__close-btn" onClick={closeComments}>Close comments</button>
      <ul className="comments__list" id="comments-list" ref={commentsList}>
        <Repeat numTimes={comments.length}>
          {(i) => (
            <li className="comments__item" key={i}>
              <h4 className="comments__author">{comments[i].author}</h4>
              <p className="comments__text">{comments[i].text}</p>
              <div className="comments__container">
                <p className="comments__date">{comments[i].date}</p>
                {comments[i].userId === currentUserID && (
                  <button className="comments__delete-btn" onClick={() => {
                    deleteComment(currentFilm, comments[i]);
                  }}>Delete</button>
                )}
              </div>
            </li>
          )}
        </Repeat>
      </ul>
      <form className="comments__add-block" onSubmit={onAddComment}>
        <input type="text" className="comments__input" name="comment" onChange={(evt) => setComment(evt.target.value)}/>
        <button type="submit" className="comments__submit-btn">Send comment</button>
      </form>
    </section>
  );
}

const mapStateToProps = ({comments, currentFilm}) => ({
  comments: comments[currentFilm],
  currentFilm,
});

const mapDispatchToProps = (dispatch) => ({
  addComment(id, comment) {
    dispatch(ActionCreator.addComment(id, comment));
  },

  deleteComment(id, comment) {
    dispatch(ActionCreator.deleteComment(id, comment));
  },

  closeComments() {
    dispatch(ActionCreator.closeComment());
  },
});

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  currentFilm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  closeComments: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
