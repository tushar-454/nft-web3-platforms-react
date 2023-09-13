import PropTypes from 'prop-types';

const ButtonIcon = ({ path, href, bg, width, border }) => {
  return (
    <a
      href={href}
      className={`border-2 ${border ? border : 'border-white'} rounded-lg ${
        bg ? bg : 'bg-transparent'
      } text-white block w-fit font-semibold leading-6 p-4 transition hover:border-blue ${
        bg === 'bg-transparent' ? 'hover:bg-blue' : 'hover:bg-hoverBlue'
      }`}
    >
      <img src={path} className={`${width}`} />
    </a>
  );
};
ButtonIcon.propTypes = {
  path: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  bg: PropTypes.string,
  width: PropTypes.string,
  border: PropTypes.string,
};
export default ButtonIcon;
