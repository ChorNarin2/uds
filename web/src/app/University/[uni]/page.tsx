import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import uni from '../libs/uni.json';

export const metadata: Metadata = {
  title: 'Next.js Calendar | TailAdmin - Next.js Dashboard Template',
  description:
    'This is the Next.js Calendar page for TailAdmin, a Tailwind CSS Admin Dashboard Template',
};

type User = {
  id: number;
  image: string;
  name: string;
};

const University = () => {
  return (
    <DefaultLayout>
      <div className='grid grid-cols-3 gap-5 p-4'>
        {uni.map((user: User) => (
          <Link
            key={user.id}
            className='flex items-center justify-center bg-white shadow-lg text-black cursor-pointer hover:shadow-lg transition duration-300 ease-in-out bg-gray-100 hover:bg-gray-200'
            href={`/University/${user.id}`}
          >
            <div className='flex flex-col'>
              <div className='flex justify-center items-center'>
                <Image
                  src={user.image}
                  alt={user.name}
                  width={200}
                  height={200}
                  className=''
                  unoptimized
                />
              </div>
              <h2 className='text-lg font-semibold'>{user.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </DefaultLayout>
  );
};

export default University;
