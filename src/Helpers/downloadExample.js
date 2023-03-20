import { exportTsv } from "./fileHelpers";
import exampleFile from "../Assets/impact_db_example.json";

// handle the example file download. Need to update this from tsv to excel.
function downloadExample() {
  // paperNumber, title, paperSlug, issues and verified are intentional excluded
  const arrayHeader = [
    "species",
    "strain",
    "product",
    "titer",
    "rate",
    "yield",
    "substrate1",
    "substrateConc1",
    "substrate2",
    "substrateConc2",
    "vessel",
    "volume",
    "media",
    "time",
    "oxygenLevel",
    "nitrogenLevel",
    "nitrogenSource",
    "pH",
    "Temperature",
    "geneIds",
    "knockedOutGenes",
    "overexpressedEncoding",
    "promoters",
    "integrationSites",
    "optimizedCodons",
    "directedEvolution",
  ];
  let arrayData = exampleFile;
  const delimiter = "\t";
  const fileName = "impact_db_example";
  exportTsv(arrayHeader, arrayData, delimiter, fileName);
}

export { downloadExample };
