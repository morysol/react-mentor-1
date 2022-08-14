import PropTypes from "prop-types"; // ES6

export const GalleryListItem = ({
  id,
  poster,
  title,
  votes,
  watched,
  removeItem,
  updateStatus,
  openModal,
}) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>Votes: {votes}</p>
      <p>
        Watched:
        <span onClick={() => updateStatus(id)}>{watched.toString()}</span>
      </p>
      <button type="button" onClick={() => removeItem(id)}>
        Delete
      </button>
      <button type="button" onClick={() => openModal(poster)}>
        Show poster
      </button>
    </li>
  );
};

GalleryListItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  watched: PropTypes.bool.isRequired,
  removeItem: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
