export interface CatPhotoData {
    id: string;
    url: string;
    width: number;
    height: number;
}

export const fetchData = () => {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10"
    const response = fetch(url)
    .then(res => res.json())
    .then(res => { return res as Array<CatPhotoData> })
    return response;
};