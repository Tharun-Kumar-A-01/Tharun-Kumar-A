import PostCard from '@/components/PostCard/PostCard'
import React from 'react'

const posts = [
  {
    title: 'My First Post',
    url: 'https://picsum.photos/200/300',
    desc: 'Hello guys this is my first post'
  },
  {
    title: 'My Second Post',
    url: 'https://picsum.photos/200/300',
    desc: 'Hello guys this is my second post'
  },
  {
    title: 'My Third Post',
    url: 'https://picsum.photos/200/300',
    desc: 'Hello guys this is my third post'
  },
  {
    title: 'My Fourth Post',
    url: 'https://picsum.photos/200/300',
    desc: 'Hello guys this is my third post'
  },
  {
    title: 'My Fifth Post',
    url: 'https://picsum.photos/200/300',
    desc: 'Hello guys this is my third post'
  },
  {
    title: 'My Sixth Post',
    url: 'https://picsum.photos/200/300',
    desc: 'Hello guys this is my third post'
  },
  {
    title: 'My Sixth Post',
    url: 'https://picsum.photos/200/300',
    desc: 'Hello guys this is my third post'
  },
  {
    title: 'My Sixth Post',
    url: 'https://picsum.photos/200/300',
    desc: 'Hello guys this is my third post'
  },
  {
    title: 'My Sixth Post',
    url: 'https://picsum.photos/200/300',
    desc: 'Hello guys this is my third post'
  },
  {
    title: 'My Sixth Post',
    url: 'https://picsum.photos/200/300',
    desc: 'Hello guys this is my third post'
  },
]

const Projects = () => {
  return (
    <div className=' h-full flex-column justify-center items-center '>
      <h3 className='text-3xl font-bold mb-5 align-self-middle'>Projects</h3>
    <div className="grid grid-cols-3 gap-4">
    {posts.map((post) => {
      return <PostCard {...post} />
    })}
    </div>
    </div>
  )
}

export default Projects