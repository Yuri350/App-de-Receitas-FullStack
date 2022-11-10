import PropTypes from 'prop-types';

export default function ButtonDispatch({ title, ...rest }) {
  return (
    <button
      type="button"
      data-testid="seller_order_details__button-dispatch-check"
      { ...rest }
    >
      {title}
    </button>
  );
}

ButtonDispatch.propTypes = {
  title: PropTypes.string.isRequired,
};
