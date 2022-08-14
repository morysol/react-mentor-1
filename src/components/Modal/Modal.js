import PropTypes from "prop-types"; // ES6

export const Modal = ({ imageUrl, closeModal }) => {
  return (
    <div>
      <div>
        <img src={"https://image.tmdb.org/t/p/w500" + imageUrl} alt="poster" />
        <button type="button" onClick={closeModal}>
          qqq
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

// 'https://image.tmdb.org/t/p/w500'
