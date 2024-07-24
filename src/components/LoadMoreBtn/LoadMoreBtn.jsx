import s from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({ children, onClick, disabled }) {
    return (
        <button className={s.loadMore} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}
