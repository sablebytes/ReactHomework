"use client"
import { useState } from "react";
import styles from "./CatPhoto.module.scss";

interface CatPhotoProps {
    url: string;
}

export const CatPhoto = (props: CatPhotoProps) => {
    const [removed, setRemoved] = useState(false);
    if (removed) {
        return null;
    } else {
        return (
        <div className={styles.catBox}>
            <img className={styles.catImage} src={props.url} />
            <button onClick={() => setRemoved(true)}>Remove</button>
        </div>
        )
    }
}

export default CatPhoto;