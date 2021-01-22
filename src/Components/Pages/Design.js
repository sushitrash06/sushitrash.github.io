import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./source/image";
import '../Profil.css'

function Design() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className='gallery'>
        <div> 
            <h1 align='center'
                style={{
                    alignItems:'center',
                    textShadow: '-4px 3px 0 #fc3535, -7px 6px 0 #29ffea',
                    letterSpacing:'1px',
                    color:'#ffff',
                    fontSize:'70px'
                    }}
            >Art</h1>
        </div>
        <div className='container'>
            <p align='center'
                style={{
                    color:'#ffff',
                    fontSize:'25px',
                    fontFamily:'Montserrat, sans-serif, Anton, sans-serif'
                }}
            >Besides liking things about technology, I also like to draw, here are the pictures I made using MedibangPaint and MyPhone</p>
        </div>
        <br/>
        <br/>
      <Gallery photos={photos} onClick={openLightbox} className='container' />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default Design