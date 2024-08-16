import { fetchData, CatPhoto } from "../lib/fetchData"
const CatPhotoAlbum = async () => {
    const catData = await fetchData();
    let imageCollection : Array<JSX.Element> = [];
    for (const catPhoto of catData){
        imageCollection.push(<img src={catPhoto.url}/>)
    }
    return (
        <p>
            {imageCollection}
        </p>
    )
}

export default CatPhotoAlbum;