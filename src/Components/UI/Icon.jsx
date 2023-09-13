import PropTypes from 'prop-types';

const Icon = ({ path, width, handler }) => {
  return (
    <div className='block md:hidden'>
      <img src={path} className={`cursor-pointer ${width}`} onClick={handler} />
    </div>
  );
};
Icon.propTypes = {
  path: PropTypes.string.isRequired,
  width: PropTypes.string,
  handler: PropTypes.func,
};
export default Icon;
