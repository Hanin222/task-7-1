import React from 'react';
import Hero from '../../component/Hero/Hero';
import Services from '../../component/Services/Services';
import Department from '../../component/Department/Department';
import Pricing from '../../component/Pricing/Pricing';
import Testimonial from '../../component/Testimonial/Testimonial'
import Blog from '../../component/Blog/Blog'
import Conected from '../../component/Conected/Conected'



function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Department/>
      <Pricing/>
      <Testimonial/>
      <Blog/>
      <Conected/>
     
    </div>
  );
}

export default Home;
