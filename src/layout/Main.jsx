import React, { useCallback } from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Main = () => {

    
    const  {loading}=useContext(AuthContext);
    // if (loading) {
    //     return ;
    // }

    return (
        <div>
          {
            loading ? <progress className="progress w-56"></progress>
            : <div>
                 <Header></Header> 
            <Outlet></Outlet>
               <Footer></Footer>
            </div>
          

          }
        </div>
    );
};

export default Main;
