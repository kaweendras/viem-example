const solc = require("solc");
import fs from "fs";
import path from "path";

// Get the contract file name and contract name from the command-line arguments
const contractFileName = process.argv[2];
const contractName = process.argv[3];
//check for empty arguements
if (!contractFileName || !contractName) {
  console.error("Please provide the contract file name and contract name");
  process.exit(1);
}

// Read the Solidity source code
try {
  const source = fs.readFileSync(
    path.join("src/contracts", contractFileName),
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

  console.log(`Compiling the contract ${contractName} ✅ `);
} catch (err) {
  console.error(`The file ${contractFileName} does not exist`);
  process.exit(1);
}
