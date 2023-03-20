// a function to convert the 3 lists of gene objects into a comma separated gene string
function getGeneIdsString(
  knockedOutGenes,
  overexpressedGenes,
  heterologousGenes
) {
  // make arrays of gene ids
  let knockedOutIds = knockedOutGenes.map((gene) => gene.geneId);
  let overexpressedIds = overexpressedGenes.map((gene) => gene.geneId);
  let heterologousIds = heterologousGenes.map((gene) => gene.geneId);

  // combine the arrays into a single array
  let geneIds = [...knockedOutIds, ...overexpressedIds, ...heterologousIds];

  // convert the single array into a comma separated string
  return geneIds.join(";");
}

// a function to convert the 3 lists of gene objects into a comma separated gene string
function getGeneNamesString(
  knockedOutGenes,
  overexpressedGenes,
  heterologousGenes
) {
  // make arrays of gene names
  let knockedOutNames = knockedOutGenes.map((gene) => gene.geneName);
  let overexpressedNames = overexpressedGenes.map((gene) => gene.geneName);
  let heterologousNames = heterologousGenes.map((gene) => gene.geneName);

  // combine the arrays into a single array
  let geneNames = [
    ...knockedOutNames,
    ...overexpressedNames,
    ...heterologousNames,
  ];

  // convert the single array into a comma separated string
  return geneNames.join(";");
}

// make comma separated strings of 1s and 0s depending on gene type
function getBinaryGeneString(
  geneType,
  knockedOutGenes,
  overexpressedGenes,
  heterologousGenes
) {
  // make arrays of 1s or 0s dependending on the gene type
  let knockedOutValues = knockedOutGenes.map((_) =>
    geneType === "knockedOut" ? "1" : "0"
  );
  let overexpressedValues = overexpressedGenes.map((_) =>
    geneType === "overexpressed" ? "1" : "0"
  );
  let heterologousValues = heterologousGenes.map((gene) => {
    if (geneType === "heterologous") {
      return "1";
    } else if (geneType === "overexpressed" && gene.overexpressed) {
      return "1";
    } else {
      return "0";
    }
  });

  // combine the arrays into a single array
  let binaryValues = [
    ...knockedOutValues,
    ...overexpressedValues,
    ...heterologousValues,
  ];

  // convert the single array into a comma separated string
  return binaryValues.join(";");
}

// make comma separated strings of species of origin
function getOriginSpeciesString(
  knockedOutGenes,
  overexpressedGenes,
  heterologousGenes
) {
  // make arrays of NAs or species dependending on the gene type
  let knockedOutSpecies = knockedOutGenes.map((_) => "NA");
  let overexpressedSpecies = overexpressedGenes.map((_) => "NA");
  let heterologousSpecies = heterologousGenes.map((gene) => gene.originSpecies);

  // combine the arrays into a single array
  let species = [
    ...knockedOutSpecies,
    ...overexpressedSpecies,
    ...heterologousSpecies,
  ];

  // convert the single array into a comma separated string
  return species.join(";");
}

// make comma separated strings of promoters
function getPromotersString(
  knockedOutGenes,
  overexpressedGenes,
  heterologousGenes
) {
  // make arrays of 1s or 0s dependending on the gene type
  let knockedOutPromoters = knockedOutGenes.map((_) => "NA");

  let overexpressedPromoters = overexpressedGenes.map((gene) => gene.promoter);
  let heterologousPromoters = heterologousGenes.map((gene) => gene.promoter);

  // combine the arrays into a single array
  let promoters = [
    ...knockedOutPromoters,
    ...overexpressedPromoters,
    ...heterologousPromoters,
  ];

  // convert the single array into a comma separated string
  return promoters.join(";");
}

// make comma separated string of integration sites
function getIntegrationSitesString(
  knockedOutGenes,
  overexpressedGenes,
  heterologousGenes
) {
  // make arrays of 1s or 0s dependending on the gene type
  let knockedOutIntegrationSites = knockedOutGenes.map((_) => "NA");

  let overexpressedIntegrationSites = overexpressedGenes.map(
    (gene) => gene.integrationSite
  );
  let heterologousIntegrationSites = heterologousGenes.map(
    (gene) => gene.integrationSite
  );

  // combine the arrays into a single array
  let integrationSites = [
    ...knockedOutIntegrationSites,
    ...overexpressedIntegrationSites,
    ...heterologousIntegrationSites,
  ];

  // convert the single array into a comma separated string
  return integrationSites.join(";");
}

// make comma separated string of optimized codons
function getOptimizedCodonsString(
  knockedOutGenes,
  overexpressedGenes,
  heterologousGenes
) {
  // make arrays of 1s or 0s dependending on the gene type
  let knockedOutOptimizedCodons = knockedOutGenes.map((_) => "NA");

  let overexpressedOptimizedCodons = overexpressedGenes.map((gene) =>
    gene.optimizedCodons ? "1" : "0"
  );
  let heterologousOptimizedCodons = heterologousGenes.map((gene) =>
    gene.optimizedCodons ? "1" : "0"
  );

  // combine the arrays into a single array
  let optimizedCodons = [
    ...knockedOutOptimizedCodons,
    ...overexpressedOptimizedCodons,
    ...heterologousOptimizedCodons,
  ];

  // convert the single array into a comma separated string
  return optimizedCodons.join(";");
}

// a function to integrate all the gene string functions
function getGeneStrings(
  knockedOutGenes,
  overexpressedGenes,
  heterologousGenes
) {
  const geneIdsString = getGeneIdsString(
    knockedOutGenes,
    overexpressedGenes,
    heterologousGenes
  );

  const geneNamesString = getGeneNamesString(
    knockedOutGenes,
    overexpressedGenes,
    heterologousGenes
  );

  const knockedOutGenesString = getBinaryGeneString(
    "knockedOut",
    knockedOutGenes,
    overexpressedGenes,
    heterologousGenes
  );

  const overexpressedGenesString = getBinaryGeneString(
    "overexpressed",
    knockedOutGenes,
    overexpressedGenes,
    heterologousGenes
  );

  const heterologousGenesString = getBinaryGeneString(
    "heterologous",
    knockedOutGenes,
    overexpressedGenes,
    heterologousGenes
  );

  const originSpeciesString = getOriginSpeciesString(
    knockedOutGenes,
    overexpressedGenes,
    heterologousGenes
  );

  const promotersString = getPromotersString(
    knockedOutGenes,
    overexpressedGenes,
    heterologousGenes
  );

  const integrationSitesString = getIntegrationSitesString(
    knockedOutGenes,
    overexpressedGenes,
    heterologousGenes
  );

  const optimizedCodonsString = getOptimizedCodonsString(
    knockedOutGenes,
    overexpressedGenes,
    heterologousGenes
  );

  return {
    geneIds: geneIdsString,
    geneNames: geneNamesString,
    knockedOutGenes: knockedOutGenesString,
    overexpressedGenes: overexpressedGenesString,
    originSpecies: originSpeciesString,
    heterologousGenes: heterologousGenesString,
    promoters: promotersString,
    integrationSites: integrationSitesString,
    optimizedCodons: optimizedCodonsString,
  };
}

// a function to go from gene strings to lists of gene objects
function getGeneLists(
  geneIdsString,
  geneNamesString,
  knockedOutGenesString,
  overexpressedGenesString,
  heterologousGenesString,
  originSpeciesString,
  promotersString,
  integrationSitesString,
  optimizedCodonsString
) {
  let knockedOutGenes = [];
  let overexpressedGenes = [];
  let heterologousGenes = [];

  let geneIdsArray = geneIdsString.split(";");
  let geneNamesArray = geneNamesString.split(";");
  let knockedOutGenesArray = knockedOutGenesString.split(";");
  let overexpressedGenesArray = overexpressedGenesString.split(";");
  let heterologousGenesArray = heterologousGenesString.split(";");
  let originSpeciesArray = originSpeciesString.split(";");
  let promotersArray = promotersString.split(";");
  let integrationSitesArray = integrationSitesString.split(";");
  let optimizedCodonsArray = optimizedCodonsString.split(";");

  geneIdsArray.forEach((geneId, index) => {
    // if the modified gene is a knock out add it to the knocked out gene list
    if (knockedOutGenesArray[index] === "1") {
      knockedOutGenes = [
        ...knockedOutGenes,
        { geneId: geneId, geneName: geneNamesArray[index] },
      ];
    }
    // if the modified gene is an overexpressed native gene add it to the overexpressed gene list
    else if (overexpressedGenesArray[index] === "1") {
      overexpressedGenes = [
        ...overexpressedGenes,
        {
          geneId: geneId,
          geneName: geneNamesArray[index],
          promoter: promotersArray[index],
          integrationSite: integrationSitesArray[index],
          optimizedCodons: optimizedCodonsArray[index] === "1" ? true : false,
        },
      ];
    }
    // if the modified gene is a heterologous gene add it to the heterologous gene list
    else if (heterologousGenesArray[index] === "1") {
      heterologousGenes = [
        ...heterologousGenes,
        {
          geneId: geneId,
          geneName: geneNamesArray[index],
          originSpecies: originSpeciesArray[index],
          promoter: promotersArray[index],
          integrationSite: integrationSitesArray[index],
          optimizedCodons: optimizedCodonsArray[index] === "1" ? true : false,
          overexpressed: overexpressedGenesArray[index] === "1" ? true : false,
        },
      ];
    }
  });

  return {
    knockedOutGenes: knockedOutGenes,
    overexpressedGenes: overexpressedGenes,
    heterologousGenes: heterologousGenes,
  };
}

export { getGeneStrings, getGeneLists };
