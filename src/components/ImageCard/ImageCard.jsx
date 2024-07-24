export default function ImageCard({ urls, description, openModal }) {
    return (
        <div>
            <img src={urls.small} alt={description} onClick={() => openModal(urls.regular, description)} />
        </div>
    )
}