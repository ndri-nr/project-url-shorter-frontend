import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, icon, className, onClick }) => {
  if (icon.length > 0) className += " svg-icon";

  return (
    <div 
      className={`btn ${className}`}
      onClick={onClick}
    >
      {icon.length > 0 && (
        <em className="mr-2" data-feather={icon}></em>
      )}
      {text}
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.any,
  icon: PropTypes.string,
  className: PropTypes.string,
  onclick: PropTypes.func,
};

Button.defaultProps = {
  text: 'Loading',
  icon: '',
  className: 'btn-success',
  onClick: {},
};

export default Button;
  