// import React from 'react';

// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { HomePage } from './pages/Home';
// import { PageTwo } from './pages/Page2';

// import { Sidebar, Navbar } from './components';

// const App = () => (
//   < >
//     <BrowserRouter>
//       <main className='flex'>
//         <Sidebar > </Sidebar>
//     {/* <img src="./assets/images/bakend.png" alt=""/> */}
//         <div className='flex'>
//           <Navbar className='flex'></Navbar>
//           <Switch>
//             <Route path="/" exact component={HomePage} />
//             <Route path="/page2" exact component={PageTwo} />
//           </Switch>
//         </div>
//       </main>
//     </BrowserRouter>
//   </>
// );

// export default App;


import React from 'react';
import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function App() {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <img
        className='w-full h-[440px] object-cover'
        src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80'
        alt=''
      />
      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
            <img
              className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
    </>
  );
}

export default App;