const { expect } = require("chai");

describe("NFTBazar", function () {
  it("Should create and execute bazar sales", async function () {
    const Bazar = await ethers.getContractFactory("NFTBazar");
    const bazar = await Bazar.deploy();
    await bazar.deployed();
    const bazarAddress = bazar.address;

    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy(bazarAddress);
    await nft.deployed();
    const nftContractAddress =  nft.address;

    let listingPrice = await bazar.getListingPrice();
    listingPrice =listingPrice.toString();

    const auctionPrice = ethers.utils.parseUnits('100', 'ether');

    await nft.createToken("https://www.mytokenlocation.com");
    await nft.createToken("https://www.mytokenlocation2.com");

    await bazar.createBazarItem(nftContractAddress, 1, auctionPrice, { value: listingPrice});
    await bazar.createBazarItem(nftContractAddress, 2, auctionPrice, { value: listingPrice});

    const [_, buyerAddress] = await ethers.getSigners();

    await bazar.connect(buyerAddress).createBazarSale(nftContractAddress,1, { value: auctionPrice});

    let items = await bazar.fetchBazarItem();

    items = await Promise.all(items.map(async i => {
      const tokenUri = await nft.tokenURI(i.tokenId);
      let item = {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        seller: i.seller,
        owner: i.owner,
        tokenUri
      }
      return item;
    }));

    console.log('items:', items);
  });
});
