const hre = require("hardhat");
async function main() {
  const BullAndBear = await hre.ethers.getContractFactory("BullBear");
  const bullAndBear = await BullAndBear.deploy(
    10,
    "0xA39434A63A52E749F02807ae27335515BA4b07F7"
  );
  bullAndBear.deployed();

  console.log("BullAndBearNFT contract address:", bullAndBear.address);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
