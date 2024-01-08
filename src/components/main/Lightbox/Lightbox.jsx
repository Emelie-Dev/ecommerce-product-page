import React, { useContext } from 'react'
import styles from './Lightbox.module.css'
import LightboxImage from './LightboxImage'
import LightboxThumbnail from './LightboxThumbnail'
import { LightboxContext } from '../../Contexts'

const Lightbox = () => {

  const [ showLightbox, setShowLightbox ] = useContext(LightboxContext)

  return (

    <div className={styles['light-box']}>

      <section className={styles.section}>

      <span className={styles['icon-box']}>
      <svg className={styles['close-icon']} onClick={() => setShowLightbox({value: false, src:'', index: undefined})}><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"  fillRule="evenodd"/></svg>
      </span>

    <LightboxImage src={showLightbox.src} index={showLightbox.index} />

    <LightboxThumbnail />

    </section>
     
    </div>

  )
}

export default Lightbox
