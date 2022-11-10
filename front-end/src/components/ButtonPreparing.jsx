import PropTypes from 'prop-types';

export default function ButtonPreparing({ title, ...rest }) {
  return (
    <button
      type="button"
      data-testid="seller_order_details__button-preparing-check"
      { ...rest }
    >
      {title}
    </button>
  );
}

ButtonPreparing.propTypes = {
  title: PropTypes.string.isRequired,
};
