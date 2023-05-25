import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon'

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const { page = 0, pokemons = [], isLoading = false } = useSelector( state => state.pokemon )

  useEffect(() => {
    dispatch( getPokemons() )
  }, [dispatch])
  

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <span>Loading: { isLoading ? 'true' : 'false' }</span>
      <ul>
        {
          pokemons.map( ({ name }) => (
            <li key={ name }> { name } </li>
          ))
        }
      </ul>
      <button
        disabled={ isLoading }
        onClick={ () => { dispatch( getPokemons(page) ) } }
      >
        Page Next
      </button>
    </>
  )
}
