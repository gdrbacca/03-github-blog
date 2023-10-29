import { ContentHeader } from './ContentHeader'
import { ContentText } from './ContentText'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

export function Content() {
  const params = useParams()
  const [infoHeader, setInfoHeader] = useState({})
  const [usuario, setUsuario] = useState({})
  const [state, setState] = useState('')
  const [error, setError] = useState(false)
  const [data, setData] = useState('')

  const response = async () => {
    setState('loading')
    await api
      .get('repos/gdrbacca/03-github-blog/issues/' + params.number)
      .then((res) => {
        setState('success')
        console.log(res.data.created_at)
        setInfoHeader(res.data)
        setData(
          formatDistanceToNow(new Date(res.data.created_at), {
            locale: ptBr,
            addSuffix: true,
          }),
        )
      })
      .catch((err) => {
        console.error('Error: ', err)
        setState('error')
        setError(err)
      })

    /* if (infoIssue) {
      setState('success')
      console.log(infoIssue.data.created_at)
      setInfoHeader(infoIssue.data)
      setData(
        formatDistanceToNow(new Date(infoIssue.data.created_at), {
          locale: ptBr,
          addSuffix: true,
        }),
      )
    } */

    const infoUser = await api
      .get('users/gdrbacca')
      .then((res) => {
        setState('success')
        setUsuario(res.data)
      })
      .catch((err) => {
        console.error('Error: ', err)
        setState('error')
        setError(err)
      })

    /* if (infoUser) {
      setState('success')
      setUsuario(infoUser.data)
    } */
  }
  useEffect(() => {
    response()
  }, [])

  // console.log('state: ' + state)
  if (state === 'error') return <h1>{error.toString()}</h1>

  return (
    <>
      {state === 'loading' ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ContentHeader
            titulo={infoHeader.title}
            nome={usuario.login}
            data={data}
            comments={infoHeader.comments}
            url={infoHeader.html_url}
          />
          <ContentText text={infoHeader.body} />
        </div>
      )}
    </>
  )
}
