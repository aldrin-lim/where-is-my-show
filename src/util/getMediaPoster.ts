
const getMediaPoster = (thumbnailUrl: string) => {
  const placeHolderUrl = 'https://dummyimage.com/200x300/aaa/444444.jpg&text=N/A';
  const url = `https://image.tmdb.org/t/p/original${thumbnailUrl}`
  return url || placeHolderUrl
}

export default getMediaPoster;