import SearchBar from "../SearchBar/SearchBar"
import "./App.module.css"
import getImage from "../../api";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [showedModal, setShowedModal] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const data = await getImage(query, page);
        const { results, total_pages } = data;
        console.log(data);

        setImages(prevImages => [...prevImages, ...results]);
        setIsVisible(page < total_pages);

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [page, query]);

  const onHandleSubmit = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setIsVisible(false);
    setError(null);
  }

  const loadMore = () => {
    setPage(prevPage => prevPage + 1)
  }

  const openModal = (url, alt) => {
    console.log(url, alt);
    setShowedModal(true)
    setModalUrl(url)
    setModalAlt(alt)
  }

  const closeModal = () => {
    setShowedModal(false)
    setModalUrl("")
    setModalAlt("")
  }

  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && <ImageGallery images={images} openModal={openModal} />}
      {isVisible && !loading && (
        <LoadMoreBtn onClick={loadMore} disabled={loading}>
          {loading ? "Loading..." : "Load more"}</LoadMoreBtn>)}
      {loading && <Loader />}
      <ImageModal modalIsOpen={showedModal} closeModal={closeModal} src={modalUrl} alt={modalAlt} />
    </>
  );
}
