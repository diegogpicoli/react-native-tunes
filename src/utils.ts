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

export const searchAlbumsAPI = async (artist: string): Promise<Album[]> => {
  const artistNameURL = encodeURI(artist).replaceAll("%20", "+");
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

interface Item {
  Object: {
    artistId: string;
    artistName: string;
    artistViewUrl: string;
    collectionId: number;
    collectionName: string;
  };
}

export const getMusics = async (id: string) => {
  const request = await fetch(
    `https://itunes.apple.com/lookup?id=${id}&entity=song`
  );
  const requestJson = await request.json();
  return requestJson.results;
};
