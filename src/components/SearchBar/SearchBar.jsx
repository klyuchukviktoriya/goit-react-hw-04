import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import s from "./SearchBar.module.css"

export default function SearchBar({ onSubmit }) {

    const [query, setQuery] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        if (!query.trim()) {
            return toast.error("Try to find something")
        }
        onSubmit(query)
        setQuery("")
    }

    const handleChange = e => {
        setQuery(e.target.value);
    }

    return (
        <header className={s.header}>
            <div><Toaster /></div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query} onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}