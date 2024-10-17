import React from 'react';
import Footer from './footer';
import Header from './Header';

function Layout({children}) {
  return (
    <div>
   <Header/>
   <main style={ {minHeight:'70vh'}}>
    {children}
   </main>
   <Footer/>
    </div>
  );
};

export default Layout