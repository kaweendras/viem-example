import dotenv from "dotenv";
import creaeContract from "./helpers/createContract";
const Fun = require("../artifacts/Fun.json");

dotenv.config();

const { abi, bytecode } = Fun;

const readContract = async () => {
  const contract = await creaeContract();

  if (contract) {
    const xValue = await contract.read.getX([]);
    console.log("x value -", xValue);
  }
};

readContract();

export default readContract;
