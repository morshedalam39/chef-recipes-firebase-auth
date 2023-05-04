import React, { useCallback } from "react";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { RotatingLines } from "react-loader-spinner";

const Main = () => {
  const { loading } = useContext(AuthContext);
  // if (loading) {
  //     return ;
  // }

  return (
    <div>
      {loading ? (
        <div className="flex justify-center">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <div>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default Main;
