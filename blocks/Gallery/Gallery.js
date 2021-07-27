import * as React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import classes from './Gallery.module.css'

function Gallery(props) {
  const { galleries } = props
  return (
    <div className={classes.root}>
      <div className={classes.gallery}>
        {galleries.map((gallery, id) => (
          <div className={classes.galleryCard} key={id}>
            <div className={classes.galleryImg}>
            <Image 
              src={gallery.image.url}
              rel="preload"
              layout='fill'      
              alt="logo of project"
            />
            </div>
            <p className={classes.galleryText}>{gallery.imageText}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

Gallery.propTypes = {
  galleries: PropTypes.array,
}

Gallery.uiName = 'Gallery'

export default Gallery
