import * as React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import classnames from 'clsx'
import classes from './Gallery.module.css'

const Gallery = React.forwardRef(function Gallery(props, ref) {
  const { galleries, className, ...other } = props
  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <div className={classes.gallery}>
        {galleries.map((gallery, id) => (
          <div className={classes.galleryCard} key={id}>
            <div className={classes.galleryImg}>
            <Image 
              src={gallery.image.url}
              layout='fill'      
              alt="logo of project"
            />
            </div>
            {/* <img className={classes.galleryImg} src={gallery.image.url} alt="Logo Project" /> */}
            <p className={classes.galleryText}>{gallery.imageText}</p>
          </div>
        ))}
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
