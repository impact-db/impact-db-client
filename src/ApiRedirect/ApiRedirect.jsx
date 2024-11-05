import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ApiRedirect({ type }) {
  // get collectionName from url parameters
  const params = useParams();
  const species = params?.species;

  let url = "";

  if (type === "fermentation results") {
    url = `https://us-central1-impact-db.cloudfunctions.net/getDatabase/${species}`;
  } else if (type === "papers") {
    url = `https://us-central1-impact-db.cloudfunctions.net/getPapers/${species}`;
  }

  useEffect(() => {
    window.location.href = url;
  }, []);

  return null;
}

export default ApiRedirect;
