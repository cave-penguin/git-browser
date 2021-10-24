import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'

import Head from './head'
import Header from './header'

const Readme = () => {
  const { userName, repositoryName } = useParams()
  const [text, setText] = useState('')
  const url = `https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`
  useEffect(() => {
    axios(url)
      .then((it) => it.data)
      .then((str) => {
        setText(str)
      })
      .catch((err) => console.log(err))
  }, [url])

  return (
    <div>
      <Head title="readme" />
      <Header {...{ userName, repositoryName }} />
      <div id="description">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  )
}

Readme.propTypes = {}

export default React.memo(Readme)
