import React from "react"

const Home = () => {
  return (
    <div>
      <h1 className="text-6xl">Welcome</h1>
      {import.meta.env.VITE_APP_GITHUB_TOKEN}
    </div>
  )
}

export default Home
