'use client' // because adding posts will be client heavy
import React from 'react'
import { useState } from 'react'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)

  return (
    <form className='bg-black my-8 p-8 rounded-md'>
      <div className='flex flex-col my-4'>
        <textarea
          className='p-4 text-lg rounded-md my-2'
          onChange={(e) => setTitle(e.target.value)}
          color='red'
          name='title'
          placeholder='Start Posting!'
          content='the content'
        ></textarea>
      </div>

      <div>
        {/* todo: display the length of the post */}
        {/* Create post button */}
        <button
          disabled={isDisabled}
          className='bg-teal-600 text-white p-2 px-6 rounded-xl disabled:opacity-25'
          type='submit'
        >
          Create Post
        </button>
      </div>
    </form>
  )
}

export default CreatePost
