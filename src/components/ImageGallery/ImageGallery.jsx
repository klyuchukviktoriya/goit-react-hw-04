import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, openModal }) {
    return (
        <ul>
            {images.map(image => (<li key={image.id}>
                <ImageCard urls={image.urls} description={image.description} openModal={openModal} />
            </li>))}
        </ul>
    )
}