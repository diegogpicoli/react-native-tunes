export interface Album {
    artistId: string;
    artistName: string;
    collectionId: number;
    collectionName: string;
    collectionPrice: number;
    artworkUrl100: string;
    releaseDate: string;
    trackCount: number;
  }
  
  const searchAlbumsAPI = async (artist: string): Promise<Album[]> => {
    const artistNameURL = encodeURI(artist).replaceAll('%20', '+');
    const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;
    const APIResponse = await fetch(getAlbumsAPI);
    const { results } = await APIResponse.json();
    const response: Album[] = results
    .slice(0, 10) 
    .map(
      ({
        artistId,
        artistName,
        collectionId,
        collectionName,
        collectionPrice,
        artworkUrl100,
        releaseDate,
        trackCount,
      }: Album) => ({
        artistId,
        artistName,
        collectionId,
        collectionName,
        collectionPrice,
        artworkUrl100,
        releaseDate,
        trackCount,
      })
    );
    return response;
  };
  
  export default searchAlbumsAPI;