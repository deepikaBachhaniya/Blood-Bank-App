import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin 
          </h1>
       
          <hr />
          <p>
           This is a <b>Blood Bank App</b> .
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
