function getCarbonSourceInfo() {
  const carbonSourceInfo = {
    Glucose: { heat_of_combustion: 2626.0, molecular_weight: 180.16 },
    // Glucose: { heat_of_combustion: 2805.0, molecular_weight: 180.16 },
    Glycerol: { heat_of_combustion: 1660.0, molecular_weight: 92.094 },
    Citrate: { heat_of_combustion: 1988.0, molecular_weight: 192.124 },
    Acetate: { heat_of_combustion: 874.0, molecular_weight: 59.04 },
    Pyruvate: { heat_of_combustion: 1165.0, molecular_weight: 88.06 },
    Ethanol: { heat_of_combustion: 1370.0, molecular_weight: 46.07 },
    Xylose: { heat_of_combustion: 2342.0, molecular_weight: 150.13 },
    Fructose: { heat_of_combustion: 2810.0, molecular_weight: 180.156 },
    Sucrose: { heat_of_combustion: 5643.0, molecular_weight: 342.3 },
    Arbinose: { heat_of_combustion: 10.0, molecular_weight: 150.13 },
    Maltose: { heat_of_combustion: 5649.0, molecular_weight: 342.297 },
    Mannose: { heat_of_combustion: 2813.0, molecular_weight: 180.156 },
    Galactose: { heat_of_combustion: 2792.0, molecular_weight: 180.156 },
    Malate: { heat_of_combustion: 10.0, molecular_weight: 134.0874 },
    Mevalonate: { heat_of_combustion: 10.0, molecular_weight: 148.16 },
    "Itaconic acid": { heat_of_combustion: 10.0, molecular_weight: 130.099 },
    Inulin: { heat_of_combustion: 105803.0, molecular_weight: 6179.0 },
    Ribose: { heat_of_combustion: 2349.0, molecular_weight: 150.13 },
    "Oleic acid": { heat_of_combustion: 11194.0, molecular_weight: 282.468 },
    "Ricinoleic acid": { heat_of_combustion: 10.0, molecular_weight: 298.461 },
    Glutamate: { heat_of_combustion: 10.0, molecular_weight: 147.13 },
    "Proponic acid": { heat_of_combustion: 1528.0, molecular_weight: 74.079 },
    "Butryic acid": { heat_of_combustion: 2184.0, molecular_weight: 88.106 },
    "Acetic:proionic:butyric acid (5:2:3)": {
      heat_of_combustion: 1328.0,
      molecular_weight: 70.7676,
    },
    Sorbitol: { heat_of_combustion: 10.0, molecular_weight: 182.17 },
    Arabinose: { heat_of_combustion: 10.0, molecular_weight: 150.13 },
    Lactose: { heat_of_combustion: 10.0, molecular_weight: 342.3 },
  };

  return carbonSourceInfo;
}

export { getCarbonSourceInfo };
