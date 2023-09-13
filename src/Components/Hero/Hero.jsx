import heroImg from '../../assets/images/hero/hero-image.svg';
import Button from '../UI/Button';
const Hero = () => {
  return (
    <div className='flex flex-col gap-8 lg:flex-row justify-between items-center py-10'>
      {/* hero text and title  */}
      <div className='heroText text-white w-full lg:w-[520px] space-y-6'>
        <h1 className='text-white font-bold text-5xl leading-[63px]'>
          Tailwind Template for NFT Marketplace and Web3 Platforms
        </h1>
        <p className='text-textGray text-lg font-medium leading-7'>
          Template for NFT, Token, and Web3 marketplace projects, based on
          Tailwind CSS. Comes with all the essential UI components and pages you
          need to build an NFT marketplace or all sorts of Web3 platforms.
        </p>
        <div className='heroBtns flex flex-col sm:flex-row gap-6'>
          <Button
            href='#'
            name='Explore More'
            bg='bg-blue'
            border='border-blue'
          />
          <Button href='#' name='Upload your art' />
        </div>
      </div>
      {/* hero image  */}
      <div className='heroImg'>
        <img src={heroImg} />
      </div>
    </div>
  );
};

export default Hero;
