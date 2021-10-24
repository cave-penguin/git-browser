import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ userName, repositoryName }) => {
  return (
    <div className="flex flex-col justify-between bg-purple-400">
      <div>
        {userName} {repositoryName}
      </div>
      <div className="flex flex-row justify-between">
        <Link to="/">Back</Link>
        <Link to={`/${userName}`}>Repository list</Link>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default React.memo(Header)
