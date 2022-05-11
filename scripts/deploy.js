
const hre = require("hardhat");

async function main() {
 
  console.log('Deploying...');
  // We get the contract to deploy
  const Cntrct = await hre.ethers.getContractFactory("TestUniswapLiquidity");
  const cntrct = await Cntrct.deploy();

  await cntrct.deployed();

  console.log("Contract deployed to:", cntrct.address);


  try { 
      await run('verify', { address: cntrct.address });
  } catch (e) {}
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
