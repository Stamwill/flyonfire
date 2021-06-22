import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './Gallery.module.css'
import { Carousel } from 'react-responsive-carousel';
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const Gallery = React.forwardRef(function Gallery(props, ref) {
  const { galleries, className, ...other } = props
  console.log('ind', galleries[0].image.url)
  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      {/* <Carousel className={classes.gallery} 
      showThumbs={false}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      centerMode={center}

      > */}
      <div className={classes.gallery}>

        {galleries.map((gallery, id) => (
          <div className={classes.galleryCard} key={id}>
            <img className={classes.galleryImg} src={gallery.image.url} alt="test"/>
            <p className={classes.galleryText}>{gallery.imageText}</p>
          </div>
        ))}
      {/* </Carousel> */}
        </div>
    </div>
  )
})

Gallery.propTypes = {
  galleries: PropTypes.array,
  className: PropTypes.string,
}

Gallery.uiName = 'Gallery'

export default Gallery
