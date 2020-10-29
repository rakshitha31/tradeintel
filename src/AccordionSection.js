import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div
        style={{
          background: isOpen ? '#ade9d4' : '#ade9d4',
          border: '5px solid #6dd5ed',
          padding: '8px 15px'
        }}
      >
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
          {label}
          <div style={{ float: 'right' }}>
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: '#ade9d4',
              marginTop: 5,
              padding: '10px 20px',
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;