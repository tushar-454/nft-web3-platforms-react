import PropTypes from 'prop-types';
import Anchor from '../UI/Anchor';
const NavItem = ({ toggle }) => {
  return (
    <div
      className={`${
        toggle ? 'block' : 'hidden'
      } md:block absolute md:static top-16 right-0`}
    >
      <div
        className={`w-60 md:w-fit flex flex-col md:flex-row gap-4 md:gap-12 p-3 rounded-lg bg-backGroundGray md:bg-transparent`}
      >
        <Anchor href='#' name='Home' />
        <Anchor href='#' name='Explore' color='text-textGray' />
        <Anchor href='#' name='Community' color='text-textGray' />
        <Anchor href='#' name='Pages' color='text-textGray' icon={true} />
        <Anchor href='#' name='Support' color='text-textGray' />
      </div>
    </div>
  );
};
NavItem.propTypes = {
  toggle: PropTypes.bool,
};
export default NavItem;
