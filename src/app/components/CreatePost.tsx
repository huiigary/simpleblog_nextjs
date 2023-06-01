'use client' // because adding posts will be client heavy
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)

  const submitPost = async (e: React.FormEvent) => {
    console.log('----submitting post -----')
    e.preventDefault()
    setIsDisabled(true)
    let createPost = await axios.post('/api/posts', { title })
    console.log({ createPost })
    if (createPost.data.status === 200) {
      // On successful post
      toast.success('Successful Post')
      setTitle('')
      setIsDisabled(false)
    } else if (createPost.data.status != 200) {
      // on error post (status not 200)
      toast.error('Failed to post')
      setIsDisabled(false)
    }
  }

  return (
    <form onSubmit={submitPost} className='bg-black my-8 p-8 rounded-md'>
      <div className='flex flex-col my-4'>
        <textarea
          className='p-4 text-lg rounded-md my-2'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
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
