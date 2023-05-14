import PropTypes from 'prop-types';
import { ImageGalleryItemStd, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ alt, photo, largePhoto }) => {
  return (
    <>
      <ImageGalleryItemStd>
        <Image src={photo} alt={alt} />
      </ImageGalleryItemStd>
    </>
  );
};

ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  largePhoto: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
