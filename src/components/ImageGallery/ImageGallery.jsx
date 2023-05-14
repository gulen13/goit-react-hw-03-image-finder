import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStd } from './ImageGallery.styled';

const ImageGallery = ({ gallery }) => {
  return (
    <>
      <ImageGalleryStd>
        {gallery.map(({ id, tags, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              alt={tags}
              photo={webformatURL}
              largePhoto={largeImageURL}
            />
          );
        })}
      </ImageGalleryStd>
    </>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
