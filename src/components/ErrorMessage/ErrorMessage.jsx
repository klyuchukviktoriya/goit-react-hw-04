import s from "./ErrorMessage.module.css"

export default function ErrorMessage({ message }) {
    return (
        <p className={s.text}>{message}</p>
    )
}