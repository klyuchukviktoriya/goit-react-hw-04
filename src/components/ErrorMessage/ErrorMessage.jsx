export default function ErrorMessage({ message }) {
    return (
        <div>  {message || "Oh, shit!"}</div>
    )
}