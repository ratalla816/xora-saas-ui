// import React from 'react'

// export default 
// const App = () => {
//   return (
//     <div>
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//     </div>
//   )
// }

// export default App




// import Header from "./sections/Header.jsx";
// import Hero from "./sections/Hero.jsx";
// import Features from "./sections/Features.jsx";
// import Pricing from "./sections/Pricing.jsx";
// import Faq from "./sections/Faq.jsx";
// import Testimonials from "./sections/Testimonials.jsx";
// import Download from "./sections/Download.jsx";
// import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    // Hide unnecessary scrollable elements
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};

export default App;