import Todo from '@/Components/Todo'
import Head from 'next/head'
import React from 'react'

const todoPage = () => {
  return (
    <div>
          <Head>
              <title>Todo Page</title>
          </Head>
          <h1 className='text-4xl text-center'>Todo Page</h1>
          <Todo />   
    </div>
  )
}

export default todoPage
