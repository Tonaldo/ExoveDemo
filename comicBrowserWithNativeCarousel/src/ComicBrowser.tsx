import {useContext, useState} from 'react'
import './App.css'
import comicBookCover from './assets/ComicCover.png'
import comicStrip1 from './assets/ComicStrip1.png'
import comicStrip2 from './assets/ComicStrip2.png'
import {DarkModeContext} from './context/darkModeContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import DarkModeSwitch from './darkModeSwitch';

 // Using context api here is overkill, but using that here, its easily usable while extending application.
 // And its anyway de facto way in theming/dark mode
const images: string[] = [comicBookCover, comicStrip1, comicStrip2]
function ComicBrowser() {
  const {darkMode} = useContext(DarkModeContext)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);


  const nextImage = () => {
    setCurrentImageIndex((prevIndex:number) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex:number) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={darkMode ? 'darkMode comicContainer' : 'comicContainer'}>
     
      <div className="titleContainer">
      <h1 className={darkMode ? 'darkMode title' : 'title'} >Epic comic book browser</h1>
      
      <div className="darkModeContainer">  <DarkModeSwitch/></div>
      </div>

      <div className="carousel">
      <button className="carouselControl" onClick={prevImage}>⬅️</button>
      <img src={images[currentImageIndex]} alt="Carousel Item" />
      <button className="carouselControl" onClick={nextImage}>➡️</button>
    </div>
  
  
    </div>
  )
}

export default ComicBrowser
