import PostCard from '@/components/PostCard/PostCard'
import React from 'react'

const posts = [
  {
    id: 1,
    title: 'My First Post',
    url: 'https://picsum.photos/200/300',
    desc: 'Hello guys this is my first post'
  }
]

const Projects = () => {
  return (
    <div className=' pt-16 min-h-screen '>
      <h3 className='text-3xl  font-bold mb-5 align-self-middle'>Projects</h3>
    <div className="grid grid-cols-3 gap-4">
    {posts.map((post) => {
      return <PostCard key={post.id} {...post} />
    })}
    </div>
    </div>
  )
}

export default Projects