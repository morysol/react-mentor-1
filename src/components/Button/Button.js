import PropTypes from "prop-types"; // ES6

export const Button = ({ handler, type, textContent }) => {
  return (
    <button onClick={handler} type={type}>
      {textContent}
    </button>
  );
};

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
};
