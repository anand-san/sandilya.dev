import Image from 'next/image';
import './kind-words.css';
export default function KindWordsContainer() {
  return (
    <div className='kind-words mt-10 space-y-1'>
      <h6 className='mb-10 text-2xl font-bold tracking-wider'>Kind Words 💝</h6>

      <div className='testimonials mb-12 w-full'>
        <div className='testimonial-1 justify-center bg-gray-100 p-10 text-neutral-700 dark:bg-gray-800 dark:text-neutral-300'>
          <Image
            src={'/images/blog/transforming-cryptosurge/1.png'}
            alt={'test'}
            width={80}
            height={80}
            className='rounded-full'
          />
          <span className='my-4 text-xl font-bold'>Rizwan Ali</span>
          <p>
            Anand has done an excellent job in managing and improving our
            systems consistently
          </p>
        </div>
        <div className='testimonial-2 justify-start bg-gray-100 p-10 text-neutral-700 dark:bg-gray-800 dark:text-neutral-300'>
          <Image
            src={'/images/blog/transforming-cryptosurge/1.png'}
            alt={'test'}
            width={100}
            height={100}
            className='rounded-full'
          />
          <span className='my-4 text-2xl font-bold'>S. Mishra</span>
          <p>
            Anand&lsquo; skills and knowledge are unparalleled. A highly
            reliable and capable professional.
          </p>
        </div>
        <div className='testimonial-3 justify-center bg-gray-100 p-6 text-neutral-700 dark:bg-gray-800 dark:text-neutral-300'>
          <Image
            src={'/images/blog/transforming-cryptosurge/1.png'}
            alt={'test'}
            width={50}
            height={50}
            className='rounded-full'
          />
          <span className='my-2 text-lg font-bold'>Harshit</span>
          <p className='text-sm'>
            Anand is an exceptional software engineer, very easy going and
            enjoyable to be around.
          </p>
        </div>
        <div className='testimonial-4 justify-center bg-gray-100 text-neutral-700 dark:bg-gray-800 dark:text-neutral-300'>
          <Image
            src={'/images/blog/transforming-cryptosurge/1.png'}
            alt={'test'}
            width={50}
            height={50}
            className='rounded-full'
          />
          <span className='text-md my-2 font-bold'>Biswajit Das</span>
          <p className='text-sm'>The work Anand did was truly amazing</p>
        </div>
      </div>
    </div>
  );
}
