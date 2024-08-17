import { fetchData } from "../lib/fetchData";
import { CatPhoto } from "./CatPhoto";
import styles from "./CatPhotoAlbum.module.scss";
const CatPhotoAlbum = async () => {
    const catData = await fetchData();
    const imageCollection: Array<JSX.Element> = [];
    for (const data of catData) {
        imageCollection.push(<CatPhoto url={data.url} />)
    }
    return (
        <div className={styles.container}>
            {imageCollection}
        </div>
    )
}

export default CatPhotoAlbum;
