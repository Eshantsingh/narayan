import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
//import { Carousel } from 'bootstrap';
import MenuCard from './MenuCard';

import ram from '../Images/long.png';
import lux from '../Images/koli.jpg';
import sita from '../Images/chap.jpg';
import rav from '../Images/bull.jpg';
import hanuman from '../Images/ola.jpg';
//import kumb from '../Images/ind.png';//



const Mobiles =()=>{
    return(
        
           <>
         <section className='contact-explain'>
   <h1 className='card-hadding'>Mobiles</h1>
   <div className ="container-cd mt-5">
   <div className="row">
   <MenuCard
    icon={<img src={ram} className="change" alt="logo"/>}
    tittle="Mobile App Development helll owhats app"
    matter="We create competitive mobile apps for various industrial domains.
    Our mobile app developers follow market trends to ideate,
     innovate, and create mobile apps."
   />
   <MenuCard 
   icon={<img src={lux} className="change" alt="logo"/>}
    tittle="AI & ML"
    matter="With our AI & Machine Learning Consulting,
     you can deliver personalized customer experiences, 
    automate your internal processes and implement solutions
     that will change the way customers interact with your
     product."
   />
    <MenuCard
   icon={<img src={sita} className="change" alt="logo"/>}
    tittle="Digital Marketing"
    matter="We are a leading digital marketing agency offering 360° 
    online marketing solutions to deliver measurable results."
   />
     <MenuCard
   icon={<img src={rav} className="change" alt="logo"/>}
    tittle="UI/UX"
    matter="Designing interactive UI/UX pages that 
    communicate effectively with our customers."
   />
      
   </div>
   </div>
   </section>




   <section className='home-feed'>
  <div className ="container-hm mt-5">
  <div className="row">
  <div className="col-sm-5">
  <div className='home2-feed'>
      <img src={hanuman} className="home-banner" alt="home"/>
    </div>
      </div>
    <div className='home3'>
    <h1 className='hadding-feed'>Ola .</h1>
    <p className='better'>Ola Cabs is a ridesharing company based in Bengaluru 
    that also offers vehicles for hire and food delivery. It expanded to Australia and
     New Zealand in 2018 and began its UK operations in March 2019. Ola spun off its electric vehicles 
    business into a separate unit called Ola Electric Mobility in February 2019. </p>
    
    </div>
    </div>
  </div>
   </section>

   <section className='contact-explain'>
   <div className ="container-cd mt-5">
   </div>
   </section>
  
  
        </>
    )
}

export default Mobiles