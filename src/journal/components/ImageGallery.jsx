import { ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = ({images}) => {
  return (
    <ImageList
      sx={{ width: '100%', height: 500 }}
      variant="quilted"
      cols={6}
      rowHeight={200}
    >
      {images.map((image) => (
        <ImageListItem
          key={image}
          cols={image.cols || 1}
          rows={image.rows || 1}
        >
          <img
            {...srcset(image.img, 121, image.rows, image.cols)}
            alt='imagen de la nota'
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

