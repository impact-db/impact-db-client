import { useParams } from "react-router-dom";
import NavBar from "../navBar/NavBar";

const ProductPage = () => {
  let params = useParams();
  let id = params?.id;
  return (
    <>
      <NavBar />
      <h1>Product page {id}</h1>
    </>
  );
};

export default ProductPage;
