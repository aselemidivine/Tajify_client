import React from 'react'

const CardComments = () => {
  return (
    {showComments && (
        <div className="comment-section">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              {comment}

    <div className="flex w-full justify-between border rounded-md">
      <div className="p-3">
        <div className="flex gap-3 items-center">
          <img src="https://avatars.githubusercontent.com/u/22263436?v=4" className="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400" />
          <h3 className="font-bold">
            User 1
            <br />
            <span className="text-sm text-gray-400 font-normal">Level 1</span>
          </h3>
        </div>
        <p className="text-gray-600 mt-2">
          this is sample commnent
        </p>
        <button className="text-right text-blue-500">Reply</button>
      </div>
      <div className="flex flex-col items-end gap-3 pr-3 py-3">
        <div>
          <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </div>
        <div>
          <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </div>
    {/* Reply Container  */}
    <div className="text-gray-300 font-bold pl-14">|</div>
    <div className="flex justify-between border ml-5  rounded-md">
      <div className="p-3">
        <div className="flex gap-3 items-center">
          <img src="https://avatars.githubusercontent.com/u/22263436?v=4" className="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400" />
          <h3 className="font-bold">
            User 2
            <br />
            <span className="text-sm text-gray-400 font-normal">Level 1</span>
          </h3>
        </div>
        <p className="text-gray-600 mt-2">
          this is sample commnent
        </p>
      </div>
      <div className="flex flex-col gap-3 pr-3 py-3">
        <div>
          <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </div>
        <div>
          <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </div>
    {/* END Reply Container  */}
    {/* Reply Container  */}
    <div className="text-gray-300 font-bold pl-14">|</div>
    <div className="flex justify-between border ml-5  rounded-md">
      <div className="p-3">
        <div className="flex gap-3 items-center">
          <img src="https://avatars.githubusercontent.com/u/22263436?v=4" className="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400" />
          <h3 className="font-bold">
            User 3
            <br />
            <span className="text-sm text-gray-400 font-normal">Level 1</span>
          </h3>
        </div>
        <p className="text-gray-600 mt-2">
          this is sample commnent
        </p>
      </div>
      <div className="flex flex-col gap-3 pr-3 py-3">
        <div>
          <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </div>
        <div>
          <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
            </div>
    </div>
    {/* END Reply Container  */}
  </div>
          ))}


  )
}

export default CardComments
