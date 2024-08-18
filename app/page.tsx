import styles from "./page.module.scss";
import { useEffect } from "react";
import CatPhotoAlbum from "./ui/CatPhotoAlbum";

export const Home = () => {
    //<main className={styles.main}>
  return (
    <main className={styles.main}>
     <CatPhotoAlbum/> 
    </main>
  );
}

export default Home;
