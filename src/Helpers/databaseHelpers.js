import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";

async function getPaperArray(collectionName) {
  console.log("running get paper array");
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

function getSpeciesToCollectionMapping() {
  return {
    yarrowia: "yarrowia-papers",
    rhodosporidium: "rhodosporidium-papers",
    saccharomyces: "saccharomyces-papers",
    lipomyces: "lipomyces-papers",
    pichia: "pichia-papers",
    rhodococcus: "rhodococcus-papers",
    clostridium: "clostridium-papers",
    testing: "testing-papers",
  };
}

// get the collection name in firebase from the species name in the url
function speciesToCollectionName(species) {
  // if no species is provided, return an empty string to prevent an error
  if (!species) return "";

  const speciesToCollectionMapping = getSpeciesToCollectionMapping();
  return speciesToCollectionMapping[species.toLowerCase()];
}

export {
  getPaperArray,
  getPaperObject,
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
  getSpeciesToCollectionMapping,
  speciesToCollectionName,
};
