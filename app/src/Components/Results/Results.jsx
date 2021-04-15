import Album from "../Album/Album";

const dummydata = [
  {
    id: 119606,
    title: "Curtain Call: The Hits",
    cover: "https://api.deezer.com/album/119606/image",
    cover_small:
      "https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg",
    cover_medium:
      "https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg",
    cover_big:
      "https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg",
    cover_xl:
      "https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg",
    md5_image: "e2b36a9fda865cb2e9ed1476b6291a7d",
    tracklist: "https://api.deezer.com/album/119606/tracks",
    type: "album",
  },
  {
    id: 119607,
    title: "Curtain Call: The Hits",
    cover: "https://api.deezer.com/album/119606/image",
    cover_small:
      "https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg",
    cover_medium:
      "https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg",
    cover_big:
      "https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg",
    cover_xl:
      "https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg",
    md5_image: "e2b36a9fda865cb2e9ed1476b6291a7d",
    tracklist: "https://api.deezer.com/album/119606/tracks",
    type: "album",
  }
];

function Results() {
  return (
    <div>
      {
          dummydata.map((album) => <Album key={album.id} {...album} />)
      }
    </div>
  );
}

export default Results;
