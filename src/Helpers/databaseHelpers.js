import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";

async function getPaperArray(collectionName) {
  console.log("getting paper array with", collectionName);
  let paperArray = [];

  // get paper lists from firebasae
  let querySnapshot = await getDocs(collection(db, collectionName));
  // loop over paper lists from firebase add papers to paper array
  querySnapshot.docs.forEach((item) => {
    paperArray = [...paperArray, ...item.data().paperList];
  });

  return paperArray;
}

async function getPaperObject(collectionName) {
  let paperObject = {};

  // get paper lists from firebasae
  let querySnapshot = await getDocs(collection(db, collectionName));

  // loop over paper lists from firebase add papers to papers object
  querySnapshot.docs.forEach((item) => {
    paperObject[item.id] = item.data();
  });

  return paperObject;
}

async function getInventory() {
  let inventory = {};

  // get the molecular inventory from firebase
  let querySnapshot = await getDocs(collection(db, "molecular-inventory"));

  // get this list of molecule data
  querySnapshot.docs.forEach((item) => {
    inventory.moleculeList = item.data().moleculeList;
    inventory.comments = item.data().comments;
  });

  return inventory;
}

// add a comment to the molecular inventory
async function addInventoryComment(moleculeList, oldComments, comment) {
  try {
    // make an updated list of comments array with the new comment
    const updatedComments = [...oldComments, comment];

    // save the comments to the database
    await setDoc(doc(db, "molecular-inventory", "inventory"), {
      moleculeList: moleculeList,
      comments: updatedComments,
    });
  } catch (e) {
    console.log("error occured:", e);
  }
}

// delete inventory comment
async function deleteInventoryComment(moleculeList, oldComments, comment) {
  try {
    // make an updated list of comments array with the new comment
    const updatedComments = oldComments.filter(
      (_comment) => !haveSameData(comment, _comment)
    );

    // save the comments to the database
    await setDoc(doc(db, "molecular-inventory", "inventory"), {
      moleculeList: moleculeList,
      comments: updatedComments,
    });
  } catch (e) {
    console.log("error occured:", e);
  }
}

// get a list of fermentation results from all species for a single product
async function getProductResults(product) {
  try {
    const productResultsUrl = `https://us-central1-impact-db.cloudfunctions.net/getProductResults/${product}`;
    const response = await fetch(productResultsUrl);
    const data = await response.json();

    return data;
  } catch (e) {
    console.log("error occured:", e);
    return [];
  }
}

async function addPaper(collectionName, paper) {
  // get the object of paper lists as it is currently stored in the database
  let paperObject = await getPaperObject(collectionName);

  // get the largest index in the paper object. This is used to determine where in the database to add the paper
  const largestIndex = Math.max(
    ...Object.keys(paperObject).map((index) => parseInt(index))
  );

  // get the number of papers in the paper list at that index
  const numPapers = paperObject[largestIndex].paperList.length;

  // determine if the paper needs to be added to a new list or an existing list
  let useNewList = false;
  let indexToStorePaper = largestIndex;
  if (numPapers >= 10) {
    useNewList = true;
    indexToStorePaper = largestIndex + 1;
  }

  // the method of adding the paper to the database depends on if the paper is being added to a new list
  try {
    // if using a new list, then add the paper to a list as the only object
    if (useNewList) {
      await setDoc(doc(db, collectionName, indexToStorePaper.toString()), {
        paperList: [paper],
      });
    } else {
      // if not using a new list, then add the paper to then end of the last existing list
      await setDoc(doc(db, collectionName, indexToStorePaper.toString()), {
        paperList: [...paperObject[indexToStorePaper].paperList, paper],
      });
    }
  } catch (e) {
    console.log("error occured:", e);
  }
}

async function updatePaper(collectionName, oldSlug, paper) {
  // try {
  // get the object of paper lists as it is stored in the database
  let paperObject = await getPaperObject(collectionName);

  // loop over paper list indexes in the paper object
  for (const key in paperObject) {
    // get the paper list for that index
    const paperList = paperObject[key].paperList;

    // make an array of slugs by mapping each paper to its slug
    const slugs = paperList.map((_paper) => _paper.slug);

    // check if current list has the paper
    if (slugs.includes(oldSlug)) {
      // get the index of paper to update
      const indexToUpdate = slugs.indexOf(oldSlug);

      // create a new list and update the paper
      let newPaperList = paperList;
      newPaperList[indexToUpdate] = paper;

      // save the new list to the database
      await setDoc(doc(db, collectionName, key.toString()), {
        paperList: newPaperList,
      });
    }
  }
  // } catch (e) {
  //   console.log("error occured:", e);
  // }
}

async function deletePaper(collectionName, paper) {
  // get the object of paper lists as it is currently stored in the database
  let paperObject = await getPaperObject(collectionName);

  // loop over paper list indexes in the paper object
  for (const key in paperObject) {
    // get the paper list for that index
    const paperList = paperObject[key].paperList;

    // make an array of slugs by mapping each paper to its slug
    const slugs = paperList.map((_paper) => _paper.slug);

    // check if the current paper list has the paper to delete
    if (slugs.includes(paper.slug)) {
      // make sure to not delete the only document in a collection, since this deletes the collection
      if (paperList.length === 1 && key === "0") {
        // only reseting the paper list
        await setDoc(doc(db, collectionName, key), {
          paperList: [],
        });
      }
      // if not and the paper to delete is the only one in its list, then delete the list
      else if (paperList.length === 1 && key !== 0) {
        await deleteDoc(doc(db, collectionName, key));
      } else {
        // if there is more than one paper in the list, then get the index of the paper to delete
        const indexToDelete = slugs.indexOf(paper.slug);

        // remove the paper from the paper list
        paperList.splice(indexToDelete, 1);

        // save the updated paper list to the database
        await setDoc(doc(db, collectionName, key), {
          paperList: paperList,
        });
      }
    }
  }
}

// A function to check if a strain is already in a paper
function strainIsUnique(paper, strain) {
  let isUnique = true;
  // check for duplicates
  paper.experimentalData.forEach((existingStrain) => {
    if (haveSameData(strain, existingStrain)) {
      isUnique = false;
    }
  });

  return isUnique;
}

async function addStrain(collectionName, paper, strain) {
  // make copy of paper and update the experimental data with the new strain
  const updatedPaper = structuredClone(paper);
  updatedPaper.experimentalData = [...updatedPaper.experimentalData, strain];

  // save the updated paper
  await updatePaper(collectionName, paper.slug, updatedPaper);
}

async function deleteStrain(collectionName, paper, strain) {
  // let experimentalData = paper.experimentalData;
  let updatedPaper = paper;

  updatedPaper.experimentalData = paper.experimentalData.filter(
    (_strain) => !haveSameData(strain, _strain)
  );

  // save the updated paper
  await updatePaper(collectionName, paper.slug, updatedPaper);
}

async function updateStrain(collectionName, paper, newStrain, oldStrain) {
  await addStrain(collectionName, paper, newStrain);
  await deleteStrain(collectionName, paper, oldStrain);
}

async function addComment(collectionName, paper, comment) {
  try {
    // make copy of paper and update the comments array with the new comment
    const updatedPaper = structuredClone(paper);
    updatedPaper.comments = [...updatedPaper.comments, comment];

    // save the updated paper
    await updatePaper(collectionName, paper.slug, updatedPaper);
  } catch (e) {
    console.log("error occured:", e);
  }
}

async function deleteComment(collectionName, paper, strain) {
  let updatedPaper = paper;

  updatedPaper.comments = paper.comments.filter(
    (_strain) => !haveSameData(strain, _strain)
  );

  // save the updated paper
  await updatePaper(collectionName, paper.slug, updatedPaper);
}

async function getProductArray() {
  let productArray = [];

  // get paper lists from firebasae
  let querySnapshot = await getDocs(collection(db, "products"));
  // loop over paper lists from firebase add papers to paper array
  querySnapshot.docs.forEach((item) => {
    productArray = item.data().productList;
  });

  return productArray;
}

async function getDailyStatsArray() {
  // get paper lists from firebasae
  let querySnapshot = await getDocs(collection(db, "daily-stats"));
  // loop over paper lists from firebase add papers to paper array

  let dailyStatsArray = [];
  querySnapshot.docs.forEach((item) => {
    dailyStatsArray = [...dailyStatsArray, ...item.data().dates];
  });

  return dailyStatsArray;
}

// a helper function to check if two objects have the same data
function haveSameData(obj1, obj2) {
  const obj1Length = Object.keys(obj1).length;
  const obj2Length = Object.keys(obj2).length;

  if (obj1Length === obj2Length) {
    return Object.keys(obj1).every(
      (key) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
    );
  }
  return false;
}

function getSpeciesInfo() {
  return [
    {
      name: "Yarrowia",
      collectionName: "yarrowia-papers",
      type: "yeast",
      display: true,
    },
    {
      name: "Rhodosporidium",
      collectionName: "rhodosporidium-papers",
      type: "yeast",
      display: true,
    },
    {
      name: "Saccharomyces",
      collectionName: "saccharomyces-papers",
      type: "yeast",
      display: true,
    },
    {
      name: "Lipomyces",
      collectionName: "lipomyces-papers",
      type: "yeast",
      display: true,
    },

    {
      name: "Pichia",
      collectionName: "pichia-papers",
      type: "yeast",
      display: true,
    },
    {
      name: "Rhodococcus",
      collectionName: "rhodococcus-papers",
      type: "bacteria",
      display: true,
    },
    {
      name: "Clostridium",
      collectionName: "clostridium-papers",
      type: "bacteria",
      display: true,
    },
    {
      name: "Escherichia",
      collectionName: "escherichia-papers",
      type: "bacteria",
      display: true,
    },
    {
      name: "Synechococcus",
      collectionName: "synechococcus-papers",
      type: "bacteria",
      display: true,
    },
    {
      name: "Testing",
      collectionName: "testing-papers",
      type: "bacteria",
      display: false,
    },
  ];
}

function getSpeciesList() {
  const speciesInfo = getSpeciesInfo();

  return speciesInfo.map((species) => species.name.toLowerCase());
}

// get the collection name in firebase from the species name in the url
function speciesToCollectionName(species) {
  const speciesInfo = getSpeciesInfo();
  const speciesData = speciesInfo.find(
    (s) => s.name.toLowerCase() === species.toLowerCase()
  );

  return speciesData ? speciesData.collectionName : null;
}

// map for inventory file
const columnMap = {
  Product: "Product",
  num_yarrowia_results: "Number of results in Yarrowia Database",
  molecularWeight: "Estimated M.W. of products",
  deltaGFormation:
    "Product Delta G of formation (obtained from equilibrator calculator: https://equilibrator.weizmann.ac.il/) pH=7, pMg=3.0, IS= 0.25M",
  precursors: "Central carbon precursor",
  precursorDeltaGFormation: "Central carbon precursor Delta G of formation",
  numberEnzymaticSteps: "Pathway enzymatic steps",
  numberPrecursorsRequired: "# precursors required",
  ATPCost: "ATP cost",
  CofactorCost: "Cofactor cost",
  NumCarbons: "# carbons in product",
  numHydrogens: "# hydrogens in product",
  numOxygens: "# oxygens in product",
  numNitrogens: "# nitrogens in product",
  TheoreticalYieldPerMolGlucose: "Theoretical Yield(mol Product/mol Glucose)",
  solubilityGPerL: "solubility g/L(25C)",
};

// function for converting the data to csv
function convertToCSV(data) {
  if (!data || !data.length) {
    return "";
  }

  const csvRows = [];

  const headers = Object.keys(columnMap);
  csvRows.push(headers.map((header) => columnMap[header]).join(","));

  for (const row of data) {
    const values = headers.map((header) => {
      const escaped = ("" + row[header]).replace(/"/g, '\\"');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(","));
  }

  return csvRows.join("\n");
}

// function for downloading the fetched data to user's computer in csv file
function downloadInventoryCSV(data) {
  const csvData = convertToCSV(data);
  if (!csvData) {
    return;
  }
  const blob = new Blob([csvData], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("hidden", "");
  a.setAttribute("href", url);
  a.setAttribute("download", "molecular-inventory.csv");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export {
  getPaperArray,
  getPaperObject,
  getInventory,
  addInventoryComment,
  deleteInventoryComment,
  getProductResults,
  addPaper,
  updatePaper,
  deletePaper,
  strainIsUnique,
  addStrain,
  deleteStrain,
  updateStrain,
  addComment,
  deleteComment,
  getProductArray,
  getDailyStatsArray,
  haveSameData,
  getSpeciesInfo,
  getSpeciesList,
  speciesToCollectionName,
  downloadInventoryCSV,
  convertToCSV,
};
