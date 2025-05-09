const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const RPS = await hre.ethers.getContractFactory("RPSScoreboard");

  // Deploy the contract
  const rps = await RPS.deploy();

  // Wait until it's deployed
  await rps.deployed();

  console.log(`RPSScoreboard deployed to: ${rps.address}`);
}

// Execute the script with error handling
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
