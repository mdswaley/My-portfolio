import React, { useEffect, useState } from 'react';
import '../Achivement/achiv.css'; // Import your stylesheet if needed
import imgLA from '../Achivement/aws.png'; // Import your images with correct paths
import imgNY from '../Achivement/javaintro.png';
import imgChicago from '../Achivement/python.png';

function Achiv() {
  useEffect(() => {
    const slides = document.getElementsByClassName('mySlides');
    let myIndex = 0;

    const carousel = setInterval(() => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }

      myIndex++;
      if (myIndex > slides.length) {
        myIndex = 1;
      }

      slides[myIndex - 1].style.display = 'block';
    }, 3000);

    // Cleanup function to stop the carousel when the component unmounts
    return () => clearInterval(carousel);
  }, []);

  return (
    <div id="achivem">
      <h2 className="w3-center">Achivements</h2>
      <div className="w3-content w3-section slideshow-container">
        <img className="mySlides" src={imgLA} alt="Los Angeles" />
        <img className="mySlides" src={imgNY} alt="New York" />
        <img className="mySlides" src={imgChicago} alt="Chicago" />
      </div>
    </div>
  );
}

export default Achiv;
