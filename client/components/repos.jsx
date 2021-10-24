import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Head from './head'
import Header from './header'

const Repos = () => {
  const { userName } = useParams()
  const [repos, setRepos] = useState([])
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((it) => {
        return setRepos(it.data)
      })
      .catch((err) => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-col">
      <Head title="Repositories" />
      <Header {...{ userName }} />
      {repos.map((reposName) => {
        return (
          <Link to={`/${userName}/${reposName.name}`} key={reposName.id}>
            {reposName.name}
          </Link>
        )
      })}
    </div>
  )
}

Repos.propTypes = {}

export default React.memo(Repos)
