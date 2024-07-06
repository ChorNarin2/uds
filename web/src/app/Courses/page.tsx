import React from 'react'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import Link from 'next/link'
import Image from 'next/image'
import data from '../libs/data.json'

type User = {
  id: number;
  name: string;
  image: string;
  username: string;
  email: string;
  phone: string;
}

const Page = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-3 gap-4 p-4">
        {data.map((user: User) => (
          <Link
            key={user.id}
            className="flex items-center justify-center  bg-white shadow rounded-lg text-black cursor-pointer hover:shadow-lg transition duration-300 ease-in-out bg-gray-100 hover:bg-gray-200"
            href={`/users/${user.id}`}
          >
            <div className="flex flex-col ">
              <div className="flex justify-center items-center">
                <Image src={user.image} alt={user.name} width={200} height={220} className="" />
              </div>
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-sm">{user.username}</p>
              <div className="text-md">{user.email}</div>
              <div className="text-md">{user.phone}</div>
            </div>
          </Link>
        ))}
      </div>
    </DefaultLayout>
  )
}

export default Page
