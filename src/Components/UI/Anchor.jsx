import PropTypes from 'prop-types';
import { FaAngleDown } from 'react-icons/fa';
const Anchor = ({ name, href, color, icon }) => {
  return (
    <div className='flex gap-2 items-center'>
      <a
        href={href}
        className={`${
          color ? color : 'text-white'
        } font-semibold leading-6 hover:text-white transition`}
      >
        {name}
      </a>
      {icon && (
        <span className={`${color ? color : 'text-white'}`}>
          <FaAngleDown />
        </span>
      )}
    </div>
  );
};
Anchor.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  color: PropTypes.string,
  icon: PropTypes.bool,
};
export default Anchor;
