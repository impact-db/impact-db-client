import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import productData from "../placeholderData/squaleneData.json"; // path to your JSON file

const ProductPage = () => {
  let params = useParams();
  let id = params?.id;

  console.log(productData);

  // load placeholder data from placeholderData/squaleneData.json

  return (
    <>
      <NavBar />
      <h1>Product page {id}</h1>
    </>
  );
};

export default ProductPage;
