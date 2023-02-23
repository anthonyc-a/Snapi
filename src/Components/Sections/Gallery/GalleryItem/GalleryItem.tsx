import "./GalleryItem.css";

const GalleryItem = ({ image, buttonText, description }: any) => {
  return (
    <div className="gallery-item">
      <img src={image} alt="" />
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
};

export default GalleryItem;
