import { useFormContext } from 'react-hook-form'
import { SearchFormContainer } from './styles'

interface PropsSearchForm {
  publis: number
}

export function SearchForm(props: PropsSearchForm) {
  const { register } = useFormContext()

  return (
    <SearchFormContainer>
      <div>
        <h2>Publicações</h2>
        <span>{props.publis} publicações</span>
      </div>
      <input
        id="search"
        type="text"
        placeholder="Buscar conteúdo"
        {...register('search')}
      />
    </SearchFormContainer>
  )
}
