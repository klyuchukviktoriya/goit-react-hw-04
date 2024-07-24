import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css"
export default function ImageGallery({ images, openModal }) {
    return (
        <ul className={s.list}>
            {images.map(image => (<li key={image.id}>
                <ImageCard urls={image.urls} description={image.description} openModal={openModal} />
            </li>))}
        </ul>
    )
}