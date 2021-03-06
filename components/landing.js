import Image from 'next/image';

export default function Landing() {
  return (
    <div className='w-full h-screen'>
      <div>
        <div className='flex flex-col items-center justify-center px-8 sm:flex-row sm:px-5 w-full h-screen bg-gradient-to-br from-indigo-600 to-violet-300'>
          <Image
            src='/logo-white.svg'
            alt='PicTag Logo'
            width={150}
            height={150}
          ></Image>
          <h1 className='text-9xl text-white font-bold pl-10 font-inter pt-14 sm:pt-0'>
            PicTag
          </h1> 
        </div>
      </div>
    </div>
  );
}
