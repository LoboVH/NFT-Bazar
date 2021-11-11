const hre = require("hardhat");

async function main() {
  
  const NFTBazar = await hre.ethers.getContractFactory("NFTBazar");
  const nftbazar = await NFTBazar.deploy();
  await nftbazar.deployed();
  console.log("NFTBazar deployed to:", nftbazar.address);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftbazar.address);
  await nft.deployed();
  console.log("nft deployed to:", nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
