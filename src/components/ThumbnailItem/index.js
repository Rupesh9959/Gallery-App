import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, onChangeGalleryImgId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imgDetails

  const onThumbnailChange = () => {
    onChangeGalleryImgId(id)
  }

  const activeThumbnailClass = isActive
    ? ''
    : 'active-gallery-app-list-item-img'

  return (
    <li className="gallery-app-list-item">
      <button
        type="button"
        onClick={onThumbnailChange}
        className="gallery-app-list-button"
      >
        <img
          className={`gallery-app-list-item-img ${activeThumbnailClass}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
