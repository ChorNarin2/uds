// components/YourFormComponent.js
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import DropdownUni from "./DropdownUni";
const Page = () => {
  return (
    <DefaultLayout>
      <script src="../path/to/flowbite/dist/flowbite.min.js" async />
      <div className="py-20 h-screen bg-gray-300 px-2 ">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
          <div className="md:flex">
            <div className="w-full px-4 py-6">

              
            <div className="mb-4">
                <DropdownUni/>
              </div>

              <div className="mb-4">
                <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course</label>
                <input type="text" id="course" name="course" className="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" id="title" name="title" className="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea id="description" name="description" className="h-24 py-1 px-3 w-full border-2 border-blue-400 rounded focus:outline-none focus:border-blue-600 resize-none"></textarea>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-400">You will be able to edit this information later</p>
              </div>
              <div className="mb-4">
                <label htmlFor="attachments" className="block text-sm font-medium text-gray-700">Attachments</label>
                <div className="relative h-32 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                  <div className="absolute">
                    <div className="flex flex-col items-center">
                      <i className="fa fa-folder-open fa-3x text-blue-700"></i>
                      <span className="block text-gray-400 font-normal">Attach your files here</span>
                    </div>
                  </div>
                  <input type="file" className="h-full w-full opacity-0" name="attachments" />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button type="button" className="ml-2 h-10 w-32 bg-blue-600 rounded text-white hover:bg-blue-700">Create</button>
                <a href="#" className="ml-2 h-10 w-24 text-center inline-flex items-center justify-center border border-transparent rounded-md text-sm text-blue-600 hover:bg-blue-50">Cancel</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Page;
