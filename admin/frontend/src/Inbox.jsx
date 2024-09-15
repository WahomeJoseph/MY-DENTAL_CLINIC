/* eslint-disable no-unused-vars */
import React from 'react';

const InboxCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700">
      <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-600">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://randomuser.me/api/portraits/men/45.jpg"
          alt="Profile Picture"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">John Doe</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">johndoe@example.com</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-md font-medium text-gray-900 dark:text-gray-200">New Message from John</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          Hey, I just wanted to let you know about the upcoming meeting on Friday. Please make sure to be prepared with the project updates. Let me know if you have any questions.
        </p>
      </div>
      <div className="flex justify-between items-center p-4 border-t border-gray-200 dark:border-gray-600">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500">
          Reply
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
          Archive
        </button>
      </div>
    </div>
  );
};

export default InboxCard;
