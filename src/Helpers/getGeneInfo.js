function getGeneInfo() {
  const geneInfo = [
    {
      gene_id: "YALI0B15598g",
      gene_name: "6-phosphogluconate dehydrogenase",
      gene_abbr: "GND1",
    },
    {
      gene_id: "YALI0C06369g",
      gene_name: "glyceraldehyde 3-phosphate dehydrogenase (phosphorylating)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E02684g",
      gene_name: "citrate synthase",
      gene_abbr: "CIT2",
    },
    {
      gene_id: "YALI0F05390g",
      gene_name: "glucan 1,3-beta-glucosidase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D13596g",
      gene_name: "aspartate-semialdehyde dehydrogenase",
      gene_abbr: "HOM2",
    },
    {
      gene_id: "YALI0D11704g",
      gene_name: "aspartate kinase",
      gene_abbr: "HOM3",
    },
    {
      gene_id: "YALI0E21021g",
      gene_name: "1,3-beta-glucan synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C01411g",
      gene_name: "1,3-beta-glucan synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B17688g",
      gene_name: "3-dehydrosphinganine reductase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B02852g",
      gene_name: "3-hydroxyanthranilate 3,4-dioxygenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F18502g",
      gene_name: "glycogen synthase",
      gene_abbr: "ylGSY1",
    },
    {
      gene_id: "YALI0E12463g",
      gene_name: "D-xylulose reductase",
      gene_abbr: "ADH",
    },
    {
      gene_id: "YALI0F23221g",
      gene_name: "threonine synthase",
      gene_abbr: "THR4",
    },
    {
      gene_id: "YALI0A19558g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E06457g",
      gene_name: "L-2-aminoadipate reductase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D14476g",
      gene_name: "trehalose 6-phosphate synthase/phosphatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E31086g",
      gene_name: "trehalose 6-phosphate synthase complex regulatory subunit",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E18238g",
      gene_name:
        "4-aminobutyrate aminotransferase / (S)-3-amino-2-methylpropionate transaminase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C03025g",
      gene_name: "aldehyde dehydrogenase (NAD+)",
      gene_abbr: "ALD2",
    },
    {
      gene_id: "YALI0D15422g",
      gene_name: "yeast amino acid transporter",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E14685g",
      gene_name: "trehalose 6-phosphate synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B08536g",
      gene_name: "acetyl-CoA C-acetyltransferase",
      gene_abbr: "ACOAAT1",
    },
    {
      gene_id: "YALI0E11099g",
      gene_name: "acetyl-CoA C-acetyltransferase",
      gene_abbr: "ACOAAT2",
    },
    {
      gene_id: "YALI0E18568g",
      gene_name: "acetyl-CoA acyltransferase 1",
      gene_abbr: "POT1",
    },
    {
      gene_id: "YALI0C24101g",
      gene_name: "pyruvate carboxylase",
      gene_abbr: "PYC1",
    },
    {
      gene_id: "YALI0D20152g",
      gene_name: "glucosamine-phosphate N-acetyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E29579g",
      gene_name: "phosphoacetylglucosamine mutase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B17666g",
      gene_name:
        "N-acetyl-gamma-glutamyl-phosphate reductase / acetylglutamate kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B16390g",
      gene_name: "amino-acid N-acetyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D22847g",
      gene_name: "acetylornithine aminotransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E30965g",
      gene_name: "unknown name",
      gene_abbr: "ACH1",
    },
    {
      gene_id: "YALI0C23859g",
      gene_name: "acyl-CoA oxidase",
      gene_abbr: "POX5",
    },
    {
      gene_id: "YALI0D24750g",
      gene_name: "acyl-CoA oxidase",
      gene_abbr: "POX3",
    },
    {
      gene_id: "YALI0F10857g",
      gene_name: "acyl-CoA oxidase",
      gene_abbr: "POX2",
    },
    {
      gene_id: "YALI0E27654g",
      gene_name: "acyl-CoA oxidase",
      gene_abbr: "POX4",
    },
    {
      gene_id: "YALI0E06567g",
      gene_name: "acyl-CoA oxidase",
      gene_abbr: "POX6",
    },
    {
      gene_id: "YALI0E32835g",
      gene_name: "acyl-CoA oxidase",
      gene_abbr: "POX1",
    },
    {
      gene_id: "YALI0B15059g",
      gene_name: "fatty acid synthase subunit beta, fungi type",
      gene_abbr: "FAS1",
    },
    {
      gene_id: "YALI0D09361g",
      gene_name: "aconitate hydratase",
      gene_abbr: "ACO1",
    },
    {
      gene_id: "YALI0E14949g",
      gene_name: "homoaconitase",
      gene_abbr: "ACO2",
    },
    {
      gene_id: "YALI0D26367g",
      gene_name: "argininosuccinate lyase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F23067g",
      gene_name: "acid phosphatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F25773g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A12573g",
      gene_name: "acid phosphatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E27093g",
      gene_name: "2-phosphoxylose phosphatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E35222g",
      gene_name: "acid phosphatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E32681g",
      gene_name: "low molecular weight phosphotyrosine protein phosphatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E04312g",
      gene_name: "beige protein homolog 1",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A05379g",
      gene_name: "para-aminobenzoate synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F30569g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D07392g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C00209g",
      gene_name:
        "glycerol-3-phosphate O-acyltransferase / dihydroxyacetone phosphate acyltransferase",
      gene_abbr: "SCT1",
    },
    {
      gene_id: "YALI0B00704g",
      gene_name: "adenylate kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F26521g",
      gene_name: "nucleoside-triphosphate--adenylate kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D07535g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B18759g",
      gene_name: "adenylate cyclase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F23463g",
      gene_name: "adenosine kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F03597g",
      gene_name: "uridine nucleosidase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D05797g",
      gene_name: "adenine phosphoribosyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E09493g",
      gene_name:
        "carbamoyl-phosphate synthase / aspartate carbamoyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C23969g",
      gene_name: "carbamoyl-phosphate synthase large subunit",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D07370g",
      gene_name: "carbamoyl-phosphate synthase small subunit",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B17402g",
      gene_name: "adenylosuccinate lyase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E28963g",
      gene_name: "adenylosuccinate synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E30481g",
      gene_name: "glutamate-5-semialdehyde dehydrogenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E16643g",
      gene_name:
        "alanine-glyoxylate transaminase / serine-glyoxylate transaminase / serine-pyruvate transaminase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F11759g",
      gene_name: "adenosylhomocysteinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D25168g",
      gene_name: "O-acetylhomoserine/O-acetylserine sulfhydrylase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A19206g",
      gene_name: "glutamate 5-kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D24409g",
      gene_name:
        "phosphoribosylaminoimidazolecarboxamide formyltransferase / IMP cyclohydrolase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B23188g",
      gene_name: "phosphoribosylaminoimidazole carboxylase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E33517g",
      gene_name: "2-oxoglutarate dehydrogenase E1 component",
      gene_abbr: "KGD1",
    },
    {
      gene_id: "YALI0E16929g",
      gene_name:
        "2-oxoglutarate dehydrogenase E2 component (dihydrolipoamide succinyltransferase)",
      gene_abbr: "KGD2",
    },
    {
      gene_id: "YALI0D20768g",
      gene_name: "dihydrolipoamide dehydrogenase",
      gene_abbr: "LPD1",
    },
    {
      gene_id: "YALI0F16709g",
      gene_name: "alkaline phosphatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C06083g",
      gene_name: "5-aminolevulinate synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D06325g",
      gene_name: "alanine transaminase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B04180g",
      gene_name: "alanyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B16522g",
      gene_name: "yeast amino acid transporter",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C00451g",
      gene_name: "yeast amino acid transporter",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A15906g",
      gene_name: "glycerol 2-dehydrogenase (NADP+)",
      gene_abbr: "ER17",
    },
    {
      gene_id: "YALI0C13508g",
      gene_name: "glycerol 2-dehydrogenase (NADP+)",
      gene_abbr: "ER25",
    },
    {
      gene_id: "YALI0F06974g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E18348g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F18590g",
      gene_name: "L-arabinose reductase",
      gene_abbr: "ER27",
    },
    {
      gene_id: "YALI0D04092g",
      gene_name: "glycerol 2-dehydrogenase (NADP+)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C00319g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B21780g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E17787g",
      gene_name: "alcohol dehydrogenase, propanol-preferring",
      gene_abbr: "YALI0E17787g",
    },
    {
      gene_id: "YALI0D07942g",
      gene_name: "aldehyde dehydrogenase (NAD+)",
      gene_abbr: "ALD5",
    },
    {
      gene_id: "YALI0F04444g",
      gene_name: "aldehyde dehydrogenase (NAD+)",
      gene_abbr: "ALD6",
    },
    {
      gene_id: "YALI0B01298g",
      gene_name: "aldehyde dehydrogenase (NAD+)",
      gene_abbr: "ALD1",
    },
    {
      gene_id: "YALI0F23793g",
      gene_name: "aldehyde dehydrogenase (NAD+)",
      gene_abbr: "ALD4",
    },
    {
      gene_id: "YALI0E00264g",
      gene_name: "aldehyde dehydrogenase (NAD+)",
      gene_abbr: "ALD3",
    },
    {
      gene_id: "YALI0D18337g",
      gene_name: "allantoicase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F23243g",
      gene_name: "allantoinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D05621g",
      gene_name: "nucleobase:cation symporter-1, NCS1 family",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D13970g",
      gene_name: "MFS transporter, ACS family, allantoate permease",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E07271g",
      gene_name: "urea carboxylase / allophanate hydrolase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E21549g",
      gene_name:
        "bifunctional dethiobiotin synthetase / adenosylmethionine---8-amino-7-oxononanoate aminotransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E34771g",
      gene_name: "amidase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F16401g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E11847g",
      gene_name: "amidase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E11495g",
      gene_name: "AMP deaminase",
      gene_abbr: "AMPD",
    },
    {
      gene_id: "YALI0D14894g",
      gene_name: "ornithine carbamoyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E13057g",
      gene_name:
        "glutamate N-acetyltransferase / amino-acid N-acetyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E32736g",
      gene_name: "bis(5'-adenosyl)-triphosphatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D06501g",
      gene_name:
        "2,5-diamino-6-(ribosylamino)-4(3H)-pyrimidinone 5'-phosphate reductase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F30811g",
      gene_name: "D-arabinose 1-dehydrogenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D07634g",
      gene_name: "D-xylose reductase",
      gene_abbr: "ER10",
    },
    {
      gene_id: "YALI0E07535g",
      gene_name: "arginase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B14399g",
      gene_name: "pyrroline-5-carboxylate reductase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E17985g",
      gene_name: "arginyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B19338g",
      gene_name: "yeast amino acid transporter",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E18282g",
      gene_name: "type I protein arginine methyltransferase",
      gene_abbr: "",
    },

    {
      gene_id: "YALI0E00638g",
      gene_name: "citrate synthase",
      gene_abbr: "CIT1",
    },
    {
      gene_id: "YALI0A13387g",
      gene_name: "asparagine synthase (glutamine-hydrolysing)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F28149g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E05005g",
      gene_name: "asparaginyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E04939g",
      gene_name: "asparaginyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D06303g",
      gene_name: "isocitrate dehydrogenase (NAD+)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E05137g",
      gene_name: "isocitrate dehydrogenase (NAD+)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F04095g",
      gene_name: "isocitrate dehydrogenase",
      gene_abbr: "IDP1",
    },
    {
      gene_id: "YALI0F29337g",
      gene_name: "aspartate aminotransferase, cytoplasmic",
      gene_abbr: "AAT1-2",
    },
    {
      gene_id: "YALI0B02178g",
      gene_name: "aspartate aminotransferase, mitochondrial",
      gene_abbr: "AAT1",
    },
    {
      gene_id: "YALI0D22264g",
      gene_name: "aspartyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F26433g",
      gene_name: "aspartyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E34793g",
      gene_name: "ATP citrate (pro-S)-lyase",
      gene_abbr: "ACL1",
    },
    {
      gene_id: "YALI0D24431g",
      gene_name: "ATP citrate (pro-S)-lyase",
      gene_abbr: "ACL2",
    },
    {
      gene_id: "YALI0E03058g",
      gene_name: "unknown name",
      gene_abbr: "ANT1",
    },
    {
      gene_id: "YALI0F30349g",
      gene_name: "sulfate adenylyltransferase (ADP) / ATP adenylyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C05170g",
      gene_name: "ATP phosphoribosyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E00418g",
      gene_name: "adenylylsulfate kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A11143g",
      gene_name: "V-type H+-transporting ATPase subunit C",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B21527g",
      gene_name: "F-type H+-transporting ATPase subunit g",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A09900g",
      gene_name: "V-type H+-transporting ATPase subunit A",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B06831g",
      gene_name: "F-type H+-transporting ATPase subunit d",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D00583g",
      gene_name: "V-type H+-transporting ATPase subunit D",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B11913g",
      gene_name: "F-type H+-transporting ATPase subunit k",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B03982g",
      gene_name: "F-type H+-transporting ATPase subunit beta",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F27665g",
      gene_name: "3'(2'), 5'-bisphosphate nucleotidase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E08536g",
      gene_name: "cysteine synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B08140g",
      gene_name: "phosphoadenosine phosphosulfate reductase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F13607g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A18183g",
      gene_name: "choline transport protein",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D15400g",
      gene_name: "biotin synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A18062g",
      gene_name: "sterol 22-desaturase",
      gene_abbr: "ERG5",
    },
    {
      gene_id: "YALI0E16368g",
      gene_name: "sulfite reductase (NADPH) flavoprotein alpha-component",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D11176g",
      gene_name: "sulfite reductase (NADPH) hemoprotein beta-component",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C11407g",
      gene_name: "acetyl-CoA carboxylase / biotin carboxylase 1",
      gene_abbr: "ACC1",
    },
    {
      gene_id: "YALI0C05951g",
      gene_name: "stearoyl-CoA desaturase (Delta-9 desaturase)",
      gene_abbr: "OLE1",
    },
    {
      gene_id: "YALI0D20878g",
      gene_name: "Delta7-sterol 5-desaturase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E32065g",
      gene_name: "C-8 sterol isomerase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E34749g",
      gene_name: "catalase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F30987g",
      gene_name: "catalase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E34265g",
      gene_name: "catalase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B19382g",
      gene_name: "fatty acid synthase subunit alpha, fungi type",
      gene_abbr: "FAS2",
    },
    {
      gene_id: "YALI0E23185g",
      gene_name:
        "diazepam-binding inhibitor (GABA receptor modulator, acyl-CoA-binding protein)",
      gene_abbr: "ACBP",
    },
    {
      gene_id: "YALI0E14102g",
      gene_name:
        "CDP-diacylglycerol---glycerol-3-phosphate 3-phosphatidyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E17347g",
      gene_name: "sphinganine C4-monooxygenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F12749g",
      gene_name: "4-hydroxysphinganine ceramide fatty acyl 2-hydroxylase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D18271g",
      gene_name: "choline-phosphate cytidylyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E16907g",
      gene_name: "choline kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D11110g",
      gene_name: "anthranilate synthase / indole-3-glycerol phosphate synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E14751g",
      gene_name: "anthranilate synthase component I",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F30833g",
      gene_name: "chitin deacetylase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B16324g",
      gene_name: "chitin synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D03179g",
      gene_name: "chitin synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E22198g",
      gene_name: "chitin synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C24354g",
      gene_name: "chitin synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D25938g",
      gene_name: "chitin synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F26323g",
      gene_name:
        "solute carrier family 25 (mitochondrial citrate transporter), member 1",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F23837g",
      gene_name: "cardiolipin synthase (CMP-forming)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C12771g",
      gene_name: "dihydrofolate reductase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F30745g",
      gene_name:
        "methylenetetrahydrofolate dehydrogenase (NADP+) / methenyltetrahydrofolate cyclohydrolase / formyltetrahydrofolate synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E01056g",
      gene_name:
        "methylenetetrahydrofolate dehydrogenase (NADP+) / methenyltetrahydrofolate cyclohydrolase / formyltetrahydrofolate synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E29975g",
      gene_name: "coproporphyrinogen III oxidase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C02431g",
      gene_name:
        "solute carrier family 25 (mitochondrial carnitine/acylcarnitine transporter), member 20/29",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C07678g",
      gene_name: "yeast amino acid transporter",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F21197g",
      gene_name: "carnitine O-acetyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B10340g",
      gene_name: "carnitine O-acetyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F22517g",
      gene_name: "cytosine/creatinine deaminase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B05368g",
      gene_name: "CTP synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E15125g",
      gene_name: "mannose-1-phosphate guanylyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C06490g",
      gene_name: "mannose-1-phosphate guanylyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F05874g",
      gene_name: "cystathionine gamma-lyase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D00605g",
      gene_name: "cysteine-S-conjugate beta-lyase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D15268g",
      gene_name: "cysteinyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D17072g",
      gene_name: "cytidine deaminase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E31009g",
      gene_name: "uridine kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C10989g",
      gene_name: "diacylglycerol cholinephosphotransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B18348g",
      gene_name: "mannose-6-phosphate isomerase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D13112g",
      gene_name: "phosphomannomutase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E14443g",
      gene_name: "phosphatidate cytidylyltransferase",
      gene_abbr: "CDS1",
    },
    {
      gene_id: "YALI0C23210g",
      gene_name: "dCMP deaminase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F17820g",
      gene_name: "glutamate dehydrogenase (NADP+)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B20020g",
      gene_name: "3-deoxy-7-phosphoheptulonate synthase",
      gene_abbr: "DHS1",
    },
    {
      gene_id: "YALI0D13024g",
      gene_name: "glutamine synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F00506g",
      gene_name: "glutamine synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B02948g",
      gene_name: "glycerol-3-phosphate dehydrogenase (NAD+)",
      gene_abbr: "GPD1",
    },
    {
      gene_id: "YALI0C16434g",
      gene_name: "guanylate kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E32769g",
      gene_name: "unknown name",
      gene_abbr: "DGA1",
    },
    {
      gene_id: "YALI0E16797g",
      gene_name: "phospholipid:diacylglycerol acyltransferase",
      gene_abbr: "LRO1",
    },
    {
      gene_id: "YALI0A09856g",
      gene_name: "glycine dehydrogenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E20691g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F09273g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F01606g",
      gene_name: "unknown name",
      gene_abbr: "EYK1",
    },
    {
      gene_id: "YALI0F02849g",
      gene_name: "aminomethyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D01089g",
      gene_name: "homoserine dehydrogenase",
      gene_abbr: "HOM6",
    },
    {
      gene_id: "YALI0F22781g",
      gene_name: "dihydroorotase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F09966g",
      gene_name:
        "D-3-phosphoglycerate dehydrogenase / 2-oxoglutarate reductase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F06468g",
      gene_name: "phosphoserine aminotransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A02541g",
      gene_name:
        "dihydroneopterin aldolase / 2-amino-4-hydroxy-6-hydroxymethyldihydropteridine diphosphokinase / dihydropteroate synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B20438g",
      gene_name: "phosphoserine phosphatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F16819g",
      gene_name: "enolase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B03344g",
      gene_name:
        "solute carrier family 25 (mitochondrial dicarboxylate transporter), member 10",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F17138g",
      gene_name: "diphthine methyl ester synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E05753g",
      gene_name: "farnesyl diphosphate synthase",
      gene_abbr: "ERG20",
    },
    {
      gene_id: "YALI0D17050g",
      gene_name: "geranylgeranyl diphosphate synthase, type III",
      gene_abbr: "GGS1",
    },
    {
      gene_id: "YALI0B15884g",
      gene_name:
        "polyprenyldihydroxybenzoate methyltransferase / 3-demethylubiquinol 3-O-methyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E33495g",
      gene_name: "arsenite/tail-anchored protein-transporting ATPase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E18942g",
      gene_name: "dolichol kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E26004g",
      gene_name: "fructose-bisphosphate aldolase, class II",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F07711g",
      gene_name: "glucose-6-phosphate isomerase",
      gene_abbr: "",
    },

    {
      gene_id: "YALI0B02728g",
      gene_name: "2,3-bisphosphoglycerate-dependent phosphoglycerate mutase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D09229g",
      gene_name: "sedoheptulose-bisphosphatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E15488g",
      gene_name: "hexokinase",
      gene_abbr: "ylGLK1",
    },
    {
      gene_id: "YALI0F20900g",
      gene_name: "2-dehydropantoate 2-reductase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D03135g",
      gene_name: "ketol-acid reductoisomerase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B14927g",
      gene_name: "ribokinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C13354g",
      gene_name: "dTMP kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F30129g",
      gene_name: "purine-nucleoside phosphorylase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F19448g",
      gene_name: "dUTP pyrophosphatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E03212g",
      gene_name: "D-lactate dehydrogenase (cytochrome)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B10406g",
      gene_name: "enoyl-CoA hydratase",
      gene_abbr: "CRT",
    },
    {
      gene_id: "YALI0B22308g",
      gene_name: "hexokinase",
      gene_abbr: "ylHXK1",
    },
    {
      gene_id: "YALI0F17996g",
      gene_name: "ATP-binding cassette, subfamily G (WHITE), member 2, SNQ2",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F20702g",
      gene_name: "pyruvate dehydrogenase E1 component alpha subunit",
      gene_abbr: "PDA1",
    },
    {
      gene_id: "YALI0E27005g",
      gene_name: "pyruvate dehydrogenase E1 component beta subunit",
      gene_abbr: "PDB1",
    },
    {
      gene_id: "YALI0D16357g",
      gene_name: "6-phosphofructokinase 1",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B09515g",
      gene_name: "ethanolamine kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B00396g",
      gene_name:
        "MFS transporter, SP family, general alpha glucoside:H+ symporter",
      gene_abbr: "TRP22",
    },
    {
      gene_id: "YALI0E23287g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D00132g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D01111g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B01342g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D18876g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A08998g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A01958g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C04092g",
      gene_name: "peroxin-11B",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A06655g",
      gene_name:
        "ATP-binding cassette, subfamily D (ALD), peroxisomal long-chain fatty acid import protein",
      gene_abbr: "PXA1",
    },
    {
      gene_id: "YALI0D04246g",
      gene_name:
        "ATP-binding cassette, subfamily D (ALD), peroxisomal long-chain fatty acid import protein",
      gene_abbr: "PXA2",
    },
    {
      gene_id: "YALI0E16016g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D17864g",
      gene_name: "long-chain acyl-CoA synthetase",
      gene_abbr: "FAA1",
    },
    {
      gene_id: "YALI0A16863g",
      gene_name:
        "solute carrier family 25 (mitochondrial folate transporter), member 32",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F09603g",
      gene_name:
        "S-(hydroxymethyl)glutathione dehydrogenase / alcohol dehydrogenase",
      gene_abbr: "YALI0F09603g",
    },
    {
      gene_id: "YALI0D14850g",
      gene_name:
        "NADH dehydrogenase (ubiquinone) 1 alpha/beta subcomplex 1, acyl-carrier protein",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F30679g",
      gene_name: "3-oxoacyl-[acyl-carrier-protein] synthase II",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D24629g",
      gene_name:
        "NADH dehydrogenase (ubiquinone) 1 alpha/beta subcomplex 1, acyl-carrier protein",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C19965g",
      gene_name: "3-oxoacyl-[acyl-carrier protein] reductase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D12400g",
      gene_name: "phosphoglycerate kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D16445g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F09185g",
      gene_name: "pyruvate kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F01584g",
      gene_name: "unknown name",
      gene_abbr: "EYI1",
    },
    {
      gene_id: "YALI0F05214g",
      gene_name: "triosephosphate isomerase (TIM)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B20196g",
      gene_name: "fatty acid elongase 2",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E05929g",
      gene_name: "dolichyl-phosphate-mannose-protein mannosyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E15081g",
      gene_name: "dolichyl-phosphate-mannose-protein mannosyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C23364g",
      gene_name: "dolichyl-phosphate-mannose-protein mannosyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D06281g",
      gene_name: "dolichol-phosphate mannosyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A15972g",
      gene_name: "fructose-1,6-bisphosphatase I",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E17633g",
      gene_name: "6-phosphofructo-2-kinase / fructose-2,6-biphosphatase 2",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F19470g",
      gene_name: "protoporphyrin/coproporphyrin ferrochelatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F13937g",
      gene_name: "formate dehydrogenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F15983g",
      gene_name: "formate dehydrogenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C14344g",
      gene_name: "formate dehydrogenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C08074g",
      gene_name: "formate dehydrogenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A12353g",
      gene_name: "formate dehydrogenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E14256g",
      gene_name: "formate dehydrogenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B22506g",
      gene_name: "formate dehydrogenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F06820g",
      gene_name: "methionyl-tRNA formyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D25564g",
      gene_name: "FAD synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D01309g",
      gene_name: "5-formyltetrahydrofolate cyclo-ligase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E00836g",
      gene_name: "homoserine O-acetyltransferase/O-succinyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C24233g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C06776g",
      gene_name: "fumarate hydratase, class II",
      gene_abbr: "FUM1",
    },
    {
      gene_id: "YALI0D08558g",
      gene_name: "alpha-1,2-mannosyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E31797g",
      gene_name: "alpha-1,3/alpha-1,6-mannosyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B13970g",
      gene_name: "glycerol-3-phosphate dehydrogenase",
      gene_abbr: "GUT2",
    },
    {
      gene_id: "YALI0D03333g",
      gene_name: "ribonucleoside-diphosphate reductase subunit M1",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F31735g",
      gene_name: "ribonucleoside-diphosphate reductase subunit M1",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B03630g",
      gene_name: "ribonucleoside-diphosphate reductase subunit M2",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C01419g",
      gene_name: "glucosamine-6-phosphate deaminase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E22649g",
      gene_name: "glucose-6-phosphate 1-dehydrogenase",
      gene_abbr: "ZWF",
    },
    {
      gene_id: "YALI0F09339g",
      gene_name: "UMP-CMP kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E12628g",
      gene_name: "cytochrome c oxidase subunit 7",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F04103g",
      gene_name: "cytochrome c oxidase subunit 7c",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F03567g",
      gene_name: "cytochrome c oxidase subunit 4",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E10144g",
      gene_name: "cytochrome c oxidase subunit 5a",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E16709g",
      gene_name: "cytochrome c oxidase subunit 6b",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E19723g",
      gene_name: "cytochrome c oxidase subunit 5b",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F03201g",
      gene_name: "cytochrome c oxidase subunit 6a",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C13090g",
      gene_name: "galactokinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A02310g",
      gene_name: "UTP--glucose-1-phosphate uridylyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A02915g",
      gene_name: "ubiquinol-cytochrome c reductase iron-sulfur subunit",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F08613g",
      gene_name: "ubiquinol-cytochrome c reductase core subunit 2",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B01540g",
      gene_name: "ubiquinol-cytochrome c reductase subunit 9",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C12210g",
      gene_name: "ubiquinol-cytochrome c reductase subunit 10",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A17468g",
      gene_name: "ubiquinol-cytochrome c reductase cytochrome c1 subunit",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E34037g",
      gene_name: "ubiquinol-cytochrome c reductase subunit 7",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F01771g",
      gene_name: "ubiquinol-cytochrome c reductase subunit 8",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D03069g",
      gene_name: "phosphoribosylglycinamide formyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C06798g",
      gene_name: "1,4-alpha-glucan branching enzyme",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E14190g",
      gene_name: "malate dehydrogenase",
      gene_abbr: "MAE",
    },
    {
      gene_id: "YALI0D16753g",
      gene_name: "malate dehydrogenase",
      gene_abbr: "MDH",
    },
    {
      gene_id: "YALI0B21428g",
      gene_name: "glutamine---fructose-6-phosphate transaminase (isomerizing)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D22484g",
      gene_name: "glycine hydroxymethyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E16346g",
      gene_name: "glycine hydroxymethyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F04169g",
      gene_name: "glycogen phosphorylase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F02123g",
      gene_name: "NADH dehydrogenase (ubiquinone) Fe-S protein 3",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F00924g",
      gene_name: "NADH dehydrogenase (ubiquinone) Fe-S protein 8",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D00737g",
      gene_name: "NADH dehydrogenase (ubiquinone) flavoprotein 2",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D05467g",
      gene_name: "NADH dehydrogenase (ubiquinone) Fe-S protein 1",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E05599g",
      gene_name: "NADH:quinone reductase (non-electrogenic)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B20372g",
      gene_name: "NADH dehydrogenase (ubiquinone) flavoprotein 1",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B00792g",
      gene_name:
        "NADH dehydrogenase (ubiquinone) 1 alpha subcomplex subunit 12",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C11803g",
      gene_name: "inorganic pyrophosphatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F13541g",
      gene_name: "inorganic pyrophosphatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C03674g",
      gene_name: "glutaminyl-tRNA synthetase",
      gene_abbr: "",
    },

    {
      gene_id: "YALI0E30129g",
      gene_name: "glutamate--cysteine ligase catalytic subunit",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F08415g",
      gene_name: "glutamate decarboxylase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C16753g",
      gene_name: "glutamate decarboxylase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E09603g",
      gene_name: "glutamate dehydrogenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E11671g",
      gene_name: "6-phosphogluconolactonase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C19085g",
      gene_name: "6-phosphogluconolactonase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E02244g",
      gene_name: "phosphoglucomutase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E02090g",
      gene_name: "phosphoglucomutase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B15304g",
      gene_name: "amidophosphoribosyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B19998g",
      gene_name: "glutamate synthase (NADH)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E17919g",
      gene_name: "glutamyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E28468g",
      gene_name: "glutamyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E20713g",
      gene_name: "yeast amino acid transporter",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C21626g",
      gene_name: "unconventional SNARE in the endoplasmic reticulum protein 1",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F00462g",
      gene_name: "aquaglyceroporin related protein, other eukaryote",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F00484g",
      gene_name: "glycerol kinase",
      gene_abbr: "GUT1",
    },
    {
      gene_id: "YALI0D06974g",
      gene_name: "hydroxyacylglutathione hydrolase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E14597g",
      gene_name: "glycyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B16104g",
      gene_name: "GMP synthase (glutamine-hydrolysing)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C11880g",
      gene_name: "ribulose-phosphate 3-epimerase",
      gene_abbr: "RPE",
    },
    {
      gene_id: "YALI0E18029g",
      gene_name: "glutathione reductase (NADPH)",
      gene_abbr: "GSR",
    },
    {
      gene_id: "YALI0E02310g",
      gene_name: "peroxiredoxin",
      gene_abbr: "GPO",
    },
    {
      gene_id: "YALI0C17831g",
      gene_name: "glutathione synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C11363g",
      gene_name: "gamma-glutamyltranspeptidase / glutathione hydrolase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C20669g",
      gene_name: "gamma-glutamyltranspeptidase / glutathione hydrolase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E02288g",
      gene_name: "GTP cyclohydrolase II",
      gene_abbr: "RIB1",
    },
    {
      gene_id: "YALI0E16753g",
      gene_name: "uncharacterized protein",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B06941g",
      gene_name: "ribose 5-phosphate isomerase A",
      gene_abbr: "RKI",
    },
    {
      gene_id: "YALI0F01628g",
      gene_name: "ribose 5-phosphate isomerase B",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E06479g",
      gene_name: "transketolase",
      gene_abbr: "TKL",
    },
    {
      gene_id: "YALI0E18964g",
      gene_name: "lysophosphatidate acyltransferase",
      gene_abbr: "SLC1",
    },
    {
      gene_id: "YALI0B16126g",
      gene_name:
        "protein farnesyltransferase/geranylgeranyltransferase type-1 subunit alpha",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D14762g",
      gene_name: "protein farnesyltransferase subunit beta",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E13662g",
      gene_name: "geranylgeranyl transferase type-2 subunit alpha",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E28248g",
      gene_name: "geranylgeranyl transferase type-2 subunit beta",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E09276g",
      gene_name: "geranylgeranyl transferase type-1 subunit beta",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D17556g",
      gene_name: "ditrans,polycis-polyprenyl diphosphate synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F05610g",
      gene_name: "4-hydroxybenzoate polyprenyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C18755g",
      gene_name: "hexaprenyl-diphosphate synthase",
      gene_abbr: "Hexaprenyl-diphosphatesynthase",
    },
    {
      gene_id: "YALI0F23727g",
      gene_name: "heme o synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B14531g",
      gene_name:
        "diacylglycerol diphosphate phosphatase / phosphatidate phosphatase",
      gene_abbr: "LPP1",
    },
    {
      gene_id: "YALI0D27016g",
      gene_name: "phosphatidate phosphatase LPIN",
      gene_abbr: "PAH1",
    },
    {
      gene_id: "YALI0F25641g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C15554g",
      gene_name:
        "thiamine-phosphate diphosphorylase / hydroxyethylthiazole kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E20207g",
      gene_name: "hexokinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A15950g",
      gene_name:
        "phosphoribosyl-ATP pyrophosphohydrolase / phosphoribosyl-AMP cyclohydrolase / histidinol dehydrogenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E05049g",
      gene_name: "histidinol-phosphatase (PHP family)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E13123g",
      gene_name: "histidyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B22902g",
      gene_name: "kynureninase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F26609g",
      gene_name: "hydroxymethylbilane synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E04807g",
      gene_name: "hydroxymethylglutaryl-CoA reductase (NADPH)",
      gene_abbr: "HMG1",
    },
    {
      gene_id: "YALI0F30481g",
      gene_name: "hydroxymethylglutaryl-CoA synthase",
      gene_abbr: "ERG13",
    },
    {
      gene_id: "YALI0E04224g",
      gene_name:
        "hydroxymethylpyrimidine/phosphomethylpyrimidine kinase / thiaminase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B09647g",
      gene_name: "1-pyrroline-5-carboxylate dehydrogenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E12441g",
      gene_name:
        "phosphatidylethanolamine/phosphatidyl-N-methylethanolamine N-methyltransferase",
      gene_abbr: "OPI3",
    },
    {
      gene_id: "YALI0E06061g",
      gene_name: "phosphatidylethanolamine N-methyltransferase",
      gene_abbr: "CHO2",
    },
    {
      gene_id: "YALI0F13453g",
      gene_name: "homoserine kinase",
      gene_abbr: "THR1",
    },
    {
      gene_id: "YALI0E01254g",
      gene_name: "histidinol-phosphate aminotransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F20328g",
      gene_name: "CDP-diacylglycerol--inositol 3-phosphatidyltransferase",
      gene_abbr: "PIS1",
    },
    {
      gene_id: "YALI0F31999g",
      gene_name: "isocitrate lyase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C16885g",
      gene_name: "isocitrate lyase",
      gene_abbr: "ICL1",
    },
    {
      gene_id: "YALI0C07128g",
      gene_name: "imidazole glycerol-phosphate synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E33957g",
      gene_name: "imidazoleglycerol-phosphate dehydratase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D03480g",
      gene_name: "phosphatidylserine decarboxylase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D21604g",
      gene_name: "phosphatidylserine decarboxylase",
      gene_abbr: "PSD1",
    },
    {
      gene_id: "YALI0D08514g",
      gene_name: "CDP-diacylglycerol---serine O-phosphatidyltransferase",
      gene_abbr: "CHO1",
    },
    {
      gene_id: "YALI0D01265g",
      gene_name: "branched-chain amino acid aminotransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C10780g",
      gene_name: "isoleucyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A00264g",
      gene_name: "isoleucyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D21530g",
      gene_name: "IMP dehydrogenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D06930g",
      gene_name: "pyruvate decarboxylase",
      gene_abbr: "ARO10",
    },
    {
      gene_id: "YALI0E16434g",
      gene_name: "inositol phosphorylceramide synthase catalytic subunit",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F04015g",
      gene_name: "isopentenyl-diphosphate Delta-isomerase",
      gene_abbr: "IDI",
    },
    {
      gene_id: "YALI0B07447g",
      gene_name: "2-isopropylmalate synthase",
      gene_abbr: "LEU4",
    },
    {
      gene_id: "YALI0F21527g",
      gene_name: "orotate phosphoribosyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E24013g",
      gene_name: "succinyl-CoA synthetase alpha subunit",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D04741g",
      gene_name: "succinyl-CoA synthetase beta subunit",
      gene_abbr: "SCS2",
    },
    {
      gene_id: "YALI0C10901g",
      gene_name: "thymidylate synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F05962g",
      gene_name: "acetyl-CoA synthetase",
      gene_abbr: "ACS",
    },
    {
      gene_id: "YALI0D09867g",
      gene_name: "kynurenine 3-monooxygenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F31075g",
      gene_name: "homocitrate synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E24607g",
      gene_name: "leucyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F02299g",
      gene_name: "leucyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E24057g",
      gene_name: "lactoylglutathione lyase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B23298g",
      gene_name: "Delta14-sterol reductase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D19206g",
      gene_name: "Delta24(24(1))-sterol reductase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F16291g",
      gene_name: "lysyl-tRNA synthetase, class II",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D23639g",
      gene_name: "lysyl-tRNA synthetase, class II",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E21307g",
      gene_name: "L-lactate dehydrogenase (cytochrome)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D24607g",
      gene_name: "MFS transporter, SHS family, lactate transporter",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E15708g",
      gene_name: "malate synthase",
      gene_abbr: "MLS2",
    },
    {
      gene_id: "YALI0D19140g",
      gene_name: "malate synthase",
      gene_abbr: "MLS1",
    },
    {
      gene_id: "YALI0A14212g",
      gene_name:
        "MFS transporter, SP family, general alpha glucoside:H+ symporter",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C22165g",
      gene_name: "sterol-4alpha-carboxylate 3-dehydrogenase (decarboxylating)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B17644g",
      gene_name: "3-keto steroid reductase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F11297g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E18634g",
      gene_name: "malate dehydrogenase (oxaloacetate-decarboxylating)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B14509g",
      gene_name: "S-adenosylmethionine synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D17402g",
      gene_name: "cystathionine gamma-synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D03619g",
      gene_name: "methionyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F29843g",
      gene_name: "methionyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F25795g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B16038g",
      gene_name: "mevalonate kinase",
      gene_abbr: "ERG12",
    },
    {
      gene_id: "YALI0F05632g",
      gene_name: "diphosphomevalonate decarboxylase",
      gene_abbr: "ERG19",
    },
    {
      gene_id: "YALI0B05126G",
      gene_name: "sterol 14alpha-demethylase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E12683g",
      gene_name:
        "5-methyltetrahydropteroyltriglutamate--homocysteine methyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D04378g",
      gene_name: "myo-inositol-1(or 4)-monophosphatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B04312g",
      gene_name: "myo-inositol-1-phosphate synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B18898g",
      gene_name: "3-methyl-2-oxobutanoate hydroxymethyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E06193g",
      gene_name: "phosphomevalonate kinase",
      gene_abbr: "ERG8",
    },
    {
      gene_id: "YALI0F08283g",
      gene_name: "NAD+ diphosphatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E15730g",
      gene_name: "squalene monooxygenase",
      gene_abbr: "ERG1",
    },
    {
      gene_id: "YALI0D04422g",
      gene_name: "NADPH-ferrihemoprotein reductase",
      gene_abbr: "CPR1",
    },
    {
      gene_id: "YALI0E27874g",
      gene_name: "NAD+ kinase",
      gene_abbr: "UTR1",
    },
    {
      gene_id: "YALI0E17963g",
      gene_name: "NADH kinase",
      gene_abbr: "POS5",
    },
    {
      gene_id: "YALI0A20108g",
      gene_name: "NAD+ synthase (glutamine-hydrolysing)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B00220g",
      gene_name: "nicotinate phosphoribosyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C00759g",
      gene_name: "sodium/hydrogen antiporter",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C17941g",
      gene_name: "guanosine-diphosphatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F09229g",
      gene_name: "nucleoside-diphosphate kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A10076g",
      gene_name: "farnesyl-diphosphate farnesyltransferase",
      gene_abbr: "ERG9",
    },
    {
      gene_id: "YALI0E25652g",
      gene_name: "nicotinamide mononucleotide adenylyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A21153g",
      gene_name: "nicotinamidase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E07073g",
      gene_name: "nicotinate-nucleotide pyrophosphorylase (carboxylating)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A08217g",
      gene_name: "5'/3'-nucleotidase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C19866g",
      gene_name: "5'/3'-nucleotidase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C19712g",
      gene_name: "golgi apyrase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B07359g",
      gene_name: "omega-amidase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F29139g",
      gene_name: "deaminated glutathione amidase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E02728g",
      gene_name: "homoaconitate hydratase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D10593g",
      gene_name: "homoisocitrate dehydrogenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E04048g",
      gene_name: "solute carrier family 25, member 34/35",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F02497g",
      gene_name: "2-methylcitrate dehydratase",
      gene_abbr: "PHD1",
    },
    {
      gene_id: "YALI0E00770g",
      gene_name: "18S rRNA (adenine1779-N6/adenine1780-N6)-dimethyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C18205g",
      gene_name: "2-methoxy-6-polyprenyl-1,4-benzoquinol methylase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A09042g",
      gene_name: "ubiquinone biosynthesis monooxygenase Coq6",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D22891g",
      gene_name: "saccharopine dehydrogenase (NADP+, L-glutamate forming)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E06413g",
      gene_name: "phosphopantothenoylcysteine decarboxylase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B11330g",
      gene_name: "ornithine decarboxylase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C04433g",
      gene_name: "ornithine--oxo-acid transaminase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B15444g",
      gene_name: "saccharopine dehydrogenase (NAD+, L-lysine forming)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D02497g",
      gene_name: "threonine dehydratase",
      gene_abbr: "ILV1",
    },
    {
      gene_id: "YALI0D02629g",
      gene_name:
        "solute carrier family 25 (mitochondrial 2-oxodicarboxylate transporter), member 21",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B06006g",
      gene_name: "pantoate--beta-alanine ligase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A08041g",
      gene_name: "3',5'-cyclic-nucleotide phosphodiesterase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E32527g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D14322g",
      gene_name: "pyridoxamine 5'-phosphate oxidase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C06303g",
      gene_name: "ethanolamine-phosphate cytidylyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D21010g",
      gene_name: "6-phosphofructo-2-kinase / fructose-2,6-biphosphatase 4",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F27885g",
      gene_name: "6-phosphofructo-2-kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B22066g",
      gene_name: "H+-transporting ATPase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F23903g",
      gene_name:
        "MFS transporter, SP family, solute carrier family 2 (myo-inositol transporter), member 13",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E27203g",
      gene_name: "ammonium transporter, Amt family",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C23617g",
      gene_name: "uncharacterized protein",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F16896g",
      gene_name: "ammonium transporter, Amt family",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A02244g",
      gene_name: "ammonium transporter, Amt family",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B13794g",
      gene_name: "ammonium transporter, Amt family",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F12925g",
      gene_name: "ammonium transporter, Amt family",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A19228g",
      gene_name: "ammonium transporter, Amt family",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C23298g",
      gene_name: "uncharacterized protein",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D16643g",
      gene_name: "phenylalanyl-tRNA synthetase alpha chain",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E22979g",
      gene_name: "phenylalanyl-tRNA synthetase beta chain",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C18535g",
      gene_name: "phenylalanyl-tRNA synthetase alpha chain",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C04180g",
      gene_name: "phosphatidylinositol phospholipase C, delta",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F23573g",
      gene_name: "1-phosphatidylinositol-4-phosphate 5-kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F09559g",
      gene_name: "phosphatidylinositol 3-kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B02376g",
      gene_name: "phosphatidylinositol 4-kinase B",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E28153g",
      gene_name: "phosphatidylinositol 4-kinase A",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D08382g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E23859g",
      gene_name:
        "solute carrier family 20 (sodium-dependent phosphate transporter)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A15125g",
      gene_name: "MFS transporter, PHS family, inorganic phosphate transporter",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E31064g",
      gene_name: "phosphate transporter",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C05753g",
      gene_name:
        "solute carrier family 25 (mitochondrial phosphate transporter), member 3",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B17930g",
      gene_name:
        "solute carrier family 26 (sodium-independent sulfate anion transporter), member 11",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F23023g",
      gene_name: "sulfate permease, SulP family",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D25476g",
      gene_name: "type II pantothenate kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F06842g",
      gene_name: "MFS transporter, ACS family, pantothenate transporter",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A10659g",
      gene_name:
        "solute carrier family 25 (mitochondrial adenine nucleotide translocator), member 4/5/6/31",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F19712g",
      gene_name:
        "solute carrier family 25 (mitochondrial adenine nucleotide translocator), member 4/5/6/31",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F20790g",
      gene_name: "porphobilinogen synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C16995g",
      gene_name: "phosphoenolpyruvate carboxykinase (ATP)",
      gene_abbr: "PCK1",
    },
    {
      gene_id: "YALI0C06996g",
      gene_name: "phosphopantothenate---cysteine ligase (ATP)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D23331g",
      gene_name: "protoporphyrinogen/coproporphyrinogen III oxidase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F21010g",
      gene_name:
        "phosphoribosylamine--glycine ligase / phosphoribosylformylglycinamidine cyclo-ligase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E33033g",
      gene_name: "phosphoribosylaminoimidazole-succinocarboxamide synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F30019g",
      gene_name: "phosphoribosylformylglycinamidine synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F05192g",
      gene_name:
        "phosphoribosylformimino-5-aminoimidazole carboxamide ribotide isomerase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B09625g",
      gene_name: "proline dehydrogenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E05027g",
      gene_name: "prolyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D15620g",
      gene_name: "prolyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E32351g",
      gene_name: "ribose-phosphate pyrophosphokinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B00836g",
      gene_name: "ribose-phosphate pyrophosphokinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B13552g",
      gene_name: "ribose-phosphate pyrophosphokinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F25047g",
      gene_name: "ribose-phosphate pyrophosphokinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D06798g",
      gene_name: "mitochondrial ornithine carrier protein",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E28237g",
      gene_name: "sphinganine-1-phosphate aldolase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D19426g",
      gene_name: "pantetheine-phosphate adenylyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B13420g",
      gene_name: "5'-methylthioadenosine phosphorylase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A08668g",
      gene_name: "pyridoxine kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D10131g",
      gene_name: "pyruvate decarboxylase",
      gene_abbr: "PDC",
    },
    {
      gene_id: "YALI0B01826g",
      gene_name: "riboflavin kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A12045g",
      gene_name: "6,7-dimethyl-8-ribityllumazine synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C01111g",
      gene_name: "riboflavin synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D27170g",
      gene_name: "anthranilate phosphoribosyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E17479g",
      gene_name: "chorismate mutase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D17930g",
      gene_name: "chorismate synthase",
      gene_abbr: "aroC",
    },
    {
      gene_id: "YALI0C06952g",
      gene_name: "3-deoxy-7-phosphoheptulonate synthase",
      gene_abbr: "DHS3",
    },
    {
      gene_id: "YALI0B08184g",
      gene_name: "sulfate adenylyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F08701g",
      gene_name: "sterol 24-C-methyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E21197g",
      gene_name: "dihydrosphingosine 1-phosphate phosphatase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F12639g",
      gene_name: "pentafunctional AROM polypeptide",
      gene_abbr: "ARO1",
    },
    {
      gene_id: "YALI0F25003g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A15147g",
      gene_name: "alcohol dehydrogenase, propanol-preferring",
      gene_abbr: "YALI0A15147g",
    },
    {
      gene_id: "YALI0F08129g",
      gene_name: "unknown name",
      gene_abbr: "YALI0F08129g",
    },
    {
      gene_id: "YALI0E19921g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D01738g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B08404g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C06171g",
      gene_name: "unknown name",
      gene_abbr: "ER22",
    },
    {
      gene_id: "YALI0E10307g",
      gene_name: "L-serine/L-threonine ammonia-lyase",
      gene_abbr: "CHA1",
    },
    {
      gene_id: "YALI0F15345g",
      gene_name: "serine palmitoyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C03179g",
      gene_name: "serine palmitoyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F02629g",
      gene_name: "seryl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B05918g",
      gene_name: "seryl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C20405g",
      gene_name: "S-formylglutathione hydrolase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C05258g",
      gene_name: "aromatic amino acid aminotransferase II",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F17644g",
      gene_name: "prephenate dehydrogenase (NADP+)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C22088g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B11154g",
      gene_name: "sphingosine kinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B17336g",
      gene_name: "prephenate dehydratase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B07667g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E33143g",
      gene_name: "spermidine synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E04763g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D17974g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D20834g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B17776g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C04477g",
      gene_name: "MFS transporter, DHA1 family, multidrug resistance protein",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F03751g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E10483g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A07447g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F07062g",
      gene_name: "MFS transporter, DHA1 family, multidrug resistance protein",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F24893g",
      gene_name: "tryptophan synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F26191g",
      gene_name:
        "succinate-semialdehyde dehydrogenase / glutarate-semialdehyde dehydrogenase",
      gene_abbr: "UGA2",
    },
    {
      gene_id: "YALI0A14784g",
      gene_name: "succinate dehydrogenase (ubiquinone) membrane anchor subunit",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D11374g",
      gene_name: "succinate dehydrogenase (ubiquinone) flavoprotein subunit",
      gene_abbr: "SDH1",
    },
    {
      gene_id: "YALI0E29667g",
      gene_name: "succinate dehydrogenase (ubiquinone) cytochrome b560 subunit",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D23397g",
      gene_name: "succinate dehydrogenase (ubiquinone) iron-sulfur subunit",
      gene_abbr: "SDH2",
    },
    {
      gene_id: "YALI0E34672g",
      gene_name:
        "solute carrier family 25 (mitochondrial citrate transporter), member 1",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C00253g",
      gene_name: "acetolactate synthase I/II/III large subunit",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C09636g",
      gene_name: "acetolactate synthase I/III small subunit",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F15587g",
      gene_name: "transaldolase",
      gene_abbr: "TAL",
    },
    {
      gene_id: "YALI0A10032g",
      gene_name: "dihydrofolate synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E24497g",
      gene_name: "folylpolyglutamate synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A21417g",
      gene_name: "threonine aldolase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B19360g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F11231g",
      gene_name: "threonyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A09427g",
      gene_name: "threonyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C23408g",
      gene_name: "dihydroxy-acid dehydratase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A09768g",
      gene_name: "cysteine-dependent adenosine diphosphate thiazole synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E21351g",
      gene_name: "thiamine pyrophosphokinase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D27126g",
      gene_name: "thioredoxin reductase (NADPH)",
      gene_abbr: "TRX",
    },
    {
      gene_id: "YALI0B01364g",
      gene_name: "3-isopropylmalate dehydratase",
      gene_abbr: "LEU1",
    },
    {
      gene_id: "YALI0D15598g",
      gene_name: "alpha,alpha-trehalase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F26455g",
      gene_name: "indoleamine 2,3-dioxygenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C18425g",
      gene_name: "tryptophanyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B08943g",
      gene_name: "tryptophanyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E20977g",
      gene_name:
        "aromatic amino acid aminotransferase I / 2-aminoadipate transaminase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C15224g",
      gene_name: "tyrosyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E29139g",
      gene_name: "tyrosyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E03146g",
      gene_name:
        "UDP-N-acetylglucosamine/UDP-N-acetylgalactosamine diphosphorylase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E26829g",
      gene_name: "UDP-glucose 4-epimerase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F06710g",
      gene_name: "ureidoglycolate lyase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A01133g",
      gene_name: "uroporphyrin-III C-methyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F09449g",
      gene_name: "uroporphyrinogen-III synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C01716g",
      gene_name: "uroporphyrinogen decarboxylase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E20625g",
      gene_name: "uracil phosphoribosyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F31273g",
      gene_name: "uracil phosphoribosyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B04202g",
      gene_name: "urea-proton symporter",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F20218g",
      gene_name: "valyl-tRNA synthetase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F10923g",
      gene_name: "xylulokinase",
      gene_abbr: "ylXK",
    },
    {
      gene_id: "YALI0D25234g",
      gene_name: "tRNA pseudouridine55 synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F18216g",
      gene_name: "tRNA pseudouridine38/39 synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C12749g",
      gene_name: "tRNA pseudouridine38-40 synthase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D17534g",
      gene_name: "TAG lipase / lysophosphatidylethanolamine acyltransferase",
      gene_abbr: "TGL3",
    },
    {
      gene_id: "YALI0F10010g",
      gene_name:
        "TAG lipase / steryl ester hydrolase / phospholipase A2 / LPA acyltransferase",
      gene_abbr: "TGL4",
    },
    {
      gene_id: "YALI0E15400g",
      gene_name: "unknown name",
      gene_abbr: "FALDH2",
    },
    {
      gene_id: "YALI0A17875g",
      gene_name: "aldehyde dehydrogenase (NAD+)",
      gene_abbr: "FALDH1",
    },
    {
      gene_id: "YALI0E25982g",
      gene_name: "unknown name",
      gene_abbr: "ALK1",
    },
    {
      gene_id: "YALI0B14014g",
      gene_name: "unknown name",
      gene_abbr: "FAO1",
    },
    {
      gene_id: "YALI0F01320g",
      gene_name: "unknown name",
      gene_abbr: "ALK2",
    },
    {
      gene_id: "YALI0E16775g",
      gene_name: "ATP-binding cassette, subfamily A (ABC1), member 3",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0C20265g",
      gene_name: "ATP-binding cassette, subfamily G (WHITE), member 2, PDR",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0A20350g",
      gene_name: "unknown name",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B00572g",
      gene_name: "methylenetetrahydrofolate reductase (NADPH)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B14465g",
      gene_name: "methylenetetrahydrofolate reductase (NADPH)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B07117g",
      gene_name: "glycerol 2-dehydrogenase (NADP+)",
      gene_abbr: "ER16",
    },
    {
      gene_id: "YALI0A10310g",
      gene_name: "GTP cyclohydrolase IA",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B12078g",
      gene_name: "methylenetetrahydrofolate dehydrogenase (NAD+)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F23947g",
      gene_name: "UDPglucose--hexose-1-phosphate uridylyltransferase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D08690g",
      gene_name: "2-oxoisovalerate dehydrogenase E1 component alpha subunit",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0D23815g",
      gene_name:
        "2-oxoisovalerate dehydrogenase E2 component (dihydrolipoyl transacylase)",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0F05038g",
      gene_name: "2-oxoisovalerate dehydrogenase E1 component beta subunit",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0E12573g",
      gene_name: "isovaleryl-CoA dehydrogenase",
      gene_abbr: "",
    },
    {
      gene_id: "YALI0B14619g",
      gene_name: "3-methylcrotonyl-CoA carboxylase alpha subunit",
      gene_abbr: "",
    },
  ];

  return geneInfo;
}

export { getGeneInfo };
