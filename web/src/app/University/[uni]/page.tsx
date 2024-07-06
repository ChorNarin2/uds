import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <DefaultLayout>
      <div>
        <ul className="max-w-1/3 divide-y divide-gray-200 dark:divide-gray-700 gap-5">
          <li className="pb-3 sm:pb-4 bg-black mb-5">
            <Link href="/profile/neil-sims">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <Image
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="Neil Sims"
                    width={200}
                    height={100}
                    className=""
                    unoptimized
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $320
                </div>
              </div>
            </Link>
          </li>
          <li className="py-3 sm:py-4 bg-black">
            <Link href="/profile/bonnie-green">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <Image
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="Bonnie Green"
                    width={200}
                    height={100}
                    className=""
                    unoptimized
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $3467
                </div>
              </div>
            </Link>
          </li>
          <li className="py-3 sm:py-4">
            <Link href="/profile/michael-gough">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <Image
                    src="/docs/images/people/profile-picture-2.jpg"
                    alt="Michael Gough"
                    width={200}
                    height={100}
                    className=""
                    unoptimized
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Michael Gough
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $67
                </div>
              </div>
            </Link>
          </li>
          <li className="py-3 sm:py-4">
            <Link href="/profile/thomas-lean">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <Image
                    src="/docs/images/people/profile-picture-5.jpg"
                    alt="Thomas Lean"
                    width={200}
                    height={100}
                    className=""
                    unoptimized
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Thomas Lean
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $2367
                </div>
              </div>
            </Link>
          </li>
          <li className="pt-3 pb-0 sm:pt-4">
            <Link href="/profile/lana-byrd">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <Image
                    src="/docs/images/people/profile-picture-4.jpg"
                    alt="Lana Byrd"
                    width={200}
                    height={100}
                    className=""
                    unoptimized
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Lana Byrd
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $367
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </DefaultLayout>
  );
};

export default Page;
