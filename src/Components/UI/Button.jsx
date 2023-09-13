import PropTypes from 'prop-types';

const Button = ({ name, href, bg, border }) => {
  return (
    <a
      href={href}
      className={`border-2 ${border ? border : 'border-white'} rounded-lg ${
        bg ? bg : 'bg-transparent'
      } text-white w-fit font-semibold leading-6 py-3 px-6 transition hover:border-blue ${
        bg === 'bg-transparent' ? 'hover:bg-blue' : 'hover:bg-hoverBlue'
      }`}
    >
      {name}
    </a>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  bg: PropTypes.string,
  border: PropTypes.string,
};
export default Button;
