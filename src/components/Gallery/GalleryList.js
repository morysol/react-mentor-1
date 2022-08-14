import PropTypes from "prop-types"; // ES6

import { GalleryListItem } from "./GalleryListItem";

export const GalleryList = ({
  movies,
  removeItem,
  updateStatus,
  openModal,
}) => {
  return (
    <ul>
      {movies.map(({ id, poster, title, votes, watched }) => (
        <GalleryListItem
          key={id}
          id={id}
          poster={poster}
          title={title}
          votes={votes}
          watched={watched}
          removeItem={removeItem}
          updateStatus={updateStatus}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

GalleryList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      poster: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
      watched: PropTypes.bool.isRequired,
    })
  ),
  removeItem: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
