import { useState } from 'react';
import barIcon from '../../assets/images/others/bar.svg';
import crossIcon from '../../assets/images/others/cross.svg';
import logo from '../../assets/logo.svg';
import Icon from '../UI/Icon';
import Logo from '../UI/Logo';
import NavItem from './NavItem';
import SearchButton from './SearchButton';
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header>
      <div className='flex justify-between items-center py-4'>
        <div className='w-full lg:w-fit flex gap-10 justify-between items-center lg:justify-normal xl:gap-40 relative'>
          <Logo path={logo} />
          <Icon
            path={toggle ? crossIcon : barIcon}
            width='w-12'
            handler={handleToggle}
          />
          <NavItem toggle={toggle} handleToggle={handleToggle} />
        </div>
        <SearchButton />
      </div>
    </header>
  );
};

export default Header;
