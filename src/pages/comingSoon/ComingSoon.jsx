import React from 'react'
import { useNavigate } from 'react-router-dom'

const ComingSoon = () => {
    const navigate = useNavigate();
  return (
    <div class="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
    <h1 class="text-5xl text-white font-bold mb-8 animate-pulse">
        Coming Soon
    </h1>
    <p class="text-white text-center text-lg mb-8">
        We're working hard to bring you something amazing. Stay tuned!
    </p>

    <div className='flex justify-center'>
        <button className='btn-primary' onClick={() => navigate(-1)}>Go back</button>
    </div>
</div>
  )
}

export default ComingSoon