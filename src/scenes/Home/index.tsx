import React from 'react'
import { Link } from 'react-router-dom'
import { Counter } from 'scenes/Home/components/Counter'

export const Home: React.FC = () => {
  return (
    <>
      <Counter sumBy={1} />
      <Link to="/news">See News</Link>
    </>
  )
}
