import search from '../../assets/images/others/search.svg';
import Button from '../UI/Button';
import Logo from '../UI/Logo';

const SearchButton = () => {
  return (
    <div className='hidden lg:block'>
      <div className='flex gap-8 items-center'>
        <Logo path={search} />
        <Button href='#' name='Wallet Connect' />
      </div>
    </div>
  );
};

export default SearchButton;
