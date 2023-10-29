import { FormProvider, useForm } from 'react-hook-form'
import { Card } from './Card'
import { Profile } from './Profile'
import { SearchForm } from './SearchForm'
import { ListCards } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

const SearchValidationSchema = zod.object({
  search: zod.string().min(4, { message: 'Informar ao menos 4 caracteres' }),
})
type SearchFormData = zod.infer<typeof SearchValidationSchema>

export function Home() {
  const newSearch = useForm<SearchFormData>({
    resolver: zodResolver(SearchValidationSchema),
    defaultValues: {},
  })
  const { handleSubmit } = newSearch

  const [issues, setIssues] = useState([])

  const responseAll = async () => {
    const issuesApi = await api.get('search/issues', {
      params: {
        q: 'repo:gdrbacca/03-github-blog',
      },
    })

    // console.log(issuesApi.data.items[0])
    setIssues(issuesApi.data.items)
  }

  useEffect(() => {
    responseAll()
  }, [])

  const responseSearch = async (data: SearchFormData) => {
    const issuesApi = await api.get('search/issues', {
      params: {
        q: data.search + ' repo:gdrbacca/03-github-blog',
      },
    })
    // console.log(issuesApi.data)
    setIssues(issuesApi.data.items)
  }

  function submit(data: SearchFormData) {
    // event.preventDefault()
    console.log('passou' + data.search)
    responseSearch(data)
  }
  return (
    <div>
      <Profile />
      <form onSubmit={handleSubmit(submit)} action="">
        <FormProvider {...newSearch}>
          <SearchForm publis={issues.length} />
        </FormProvider>
      </form>

      <ListCards>
        <ul>
          {issues.map((iss) => {
            return (
              <li key={iss.number}>
                <Card
                  key={iss.number}
                  titulo={iss.title}
                  texto={iss.body}
                  data={iss.created_at}
                  numero={iss.number}
                />
              </li>
            )
          })}
        </ul>
      </ListCards>
    </div>
  )
}
