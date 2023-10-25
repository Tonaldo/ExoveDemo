import {useContext} from 'react'
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import comicBookCover from './assets/ComicCover.png'
import comicStrip1 from './assets/ComicStrip1.png'
import comicStrip2 from './assets/ComicStrip2.png'
import { Navigation, Pagination } from 'swiper/modules';
import {DarkModeContext} from './context/darkModeContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import DarkModeSwitch from './darkModeSwitch';

 // Using context api here is overkill, but using that here, its easily usable while extending application.
 // And its anyway de facto way in theming/dark mode

function ComicBrowser() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? 'darkMode comicContainer' : 'comicContainer'}>
     
      <div className="titleContainer">
      <h1 className={darkMode ? 'darkMode title' : 'title'} >Epic comic book browser</h1>
      
      <div className="darkModeContainer">  <DarkModeSwitch/></div>
      </div>

      <div className="card">
      <Swiper
          modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination
    >
      <SwiperSlide><img src={comicBookCover}/></SwiperSlide>
      <SwiperSlide><img src={comicStrip1}/></SwiperSlide>
      <SwiperSlide><img src={comicStrip2}/></SwiperSlide>
    </Swiper>
      </div>
  
  
    </div>
  )
}

export default ComicBrowser
