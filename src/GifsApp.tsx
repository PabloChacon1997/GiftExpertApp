import { GifsList } from "./gifs/components/GifsList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"


export const GifsApp = () => {
  return (
    <>
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto"/>
      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras"/>
      

      {/* Busquedas previas */}
      <PreviousSearches searches={['Goku', 'Dragon Ball Z']} />
      {/* Gifs */}
      <GifsList gifs={mockGifs} />
    </>
  )
}
