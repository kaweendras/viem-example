const solc = require("solc");
import fs from "fs";
import path from "path";

// Get the path to the contracts folder
const contractsFolder = path.join(__dirname, "../contracts");

// Read all files in the contracts folder
const contractFiles = fs.readdirSync(contractsFolder);

// Compile each contract file
contractFiles.forEach((contractFileName) => {
  // Get the contract name from the file name
  const contractName = path.basename(contractFileName, ".sol");

  // Read the Solidity source code
  const source = fs.readFileSync(
    path.join(contractsFolder, contractFileName),
    "utf8"
  );

  // Compile the source code
  const input = {
    language: "Solidity",
    sources: {
      [contractFileName]: {
        content: source,
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      outputSelection: {
        "*": {
          "*": ["abi", "evm.bytecode"],
        },
      },
    },
  };

  console.log(`Compiling the contract ${contractName}...`);
  const output = JSON.parse(solc.compile(JSON.stringify(input)));

  // Extract the contract object
  const contract = output.contracts[contractFileName][contractName];

  // Prepare the output object
  const outputObj = {
    abi: contract.abi,
    bytecode: contract.evm.bytecode.object,
  };

  // Write the output to a file
  fs.writeFileSync(
    path.join(__dirname, "../artifacts", `${contractName}.json`),
    JSON.stringify(outputObj, null, 2)
  );

  console.log(`Compiled the contract ${contractName} ✅`);
});
