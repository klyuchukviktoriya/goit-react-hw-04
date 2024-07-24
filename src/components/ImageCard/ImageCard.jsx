import s from "./ImageCard.module.css"

export default function ImageCard({ urls, description, openModal }) {
    return (
        <div>
            <img className={s.img} src={urls.small} alt={description} onClick={() => openModal(urls.regular, description)} />
        </div>
    )
}