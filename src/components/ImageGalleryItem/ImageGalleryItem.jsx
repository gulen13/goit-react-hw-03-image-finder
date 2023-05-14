import PropTypes from 'prop-types';
import { ImageGalleryItemStd, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ alt, photo, openModal, largePhoto }) => {
  return (
    <>
      <ImageGalleryItemStd
        onClick={() => {
          openModal(largePhoto);
        }}
      >
        <Image src={photo} alt={alt} />
      </ImageGalleryItemStd>
    </>
  );
};

ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  largePhoto: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
