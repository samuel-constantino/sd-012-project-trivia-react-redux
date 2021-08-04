import React from 'react';
import PropTypes from 'prop-types';

class NextButton extends React.Component {
  render() {
    const { onClick, hidden } = this.props;
    return (
      <button
        type="button"
        data-testid="btn-next"
        onClick={ onClick }
        style={ { display: hidden ? 'none' : '' } }
      >
        Próximo
      </button>
    );
  }
}

NextButton.propTypes = {
  onClick: PropTypes.func,
  hidden: PropTypes.bool,
}.isRequired;

export default NextButton;
