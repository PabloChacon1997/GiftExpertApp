import { useState } from "react"
import { GifsList } from "./gifs/components/GifsList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions"
import type { Gif } from "./gifs/interfaces/giph.interface"


export const GifsApp = () => {
  const [previosTerms, setPreviosTerms] = useState(['dragon ball z']);
  const [data, setData] = useState<Gif[]>([]);


  const handleTermClicked = (term: string) => {
    console.log({term})
  }

  const handleSearch = async (query: string) => {
    const term = query.trim().toLowerCase();
    if(!term) return;
    if (previosTerms.includes(term)) return;
    setPreviosTerms((prev) => {
      const updated = [term, ...prev];
      return updated.slice(0,8);
    });

    const gifs = await getGifsByQuery(query);
    setData(gifs);
  }

  return (
    <>
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto"/>
      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch}/>
      

      {/* Busquedas previas */}
      <PreviousSearches searches={previosTerms} onLabelClicked={handleTermClicked}/>
      {/* Gifs */}
      <GifsList gifs={data} />
    </>
  )
}
