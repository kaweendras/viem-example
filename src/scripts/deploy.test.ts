import deployContract from "./deploy";
import createWalletclient from "../utils/createWalletClient";

jest.mock("../utils/createWalletClient");

describe("deployContract", () => {
  it("deploys a contract and logs the transaction hash and contract address", async () => {
    const mockClient = {
      deployContract: jest.fn().mockResolvedValue("mockHash"),
      getTransactionReceipt: jest
        .fn()
        .mockResolvedValue({ contractAddress: "mockAddress" }),
    };
    (createWalletclient as jest.Mock).mockResolvedValue(mockClient);

    const logSpy = jest.spyOn(console, "log");

    await deployContract();

    expect(mockClient.deployContract).toHaveBeenCalledWith({
      abi: expect.anything(),
      bytecode: expect.anything(),
      args: [100],
    });
    expect(mockClient.getTransactionReceipt).toHaveBeenCalledWith({
      hash: "mockHash",
    });
    expect(logSpy).toHaveBeenCalledWith(
      "https://sepolia.arbiscan.io/tx/mockHash"
    );
    expect(logSpy).toHaveBeenCalledWith("Contract Address -", "mockAddress");

    logSpy.mockRestore();
  });
});
