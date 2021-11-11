# Full stack NFT-Bazar on Hardhat with Solidity,IPFS,Next.js,Polygon-MATIC

This repo contains boilerplate code for Full-stack NFT project.
## Pre-Requisites

 - [Node.js](https://nodejs.org/en/download/)
 - [Metamask wallet Browser Extension](https://metamask.io/download)
# Getting started
## Clone the repository
Use `git clone https://github.com/LoboVH/nft-bazar.git` to get the files in this  repository onto your local machine.
## Environment set-up
Make a duplicate of `.env.example` as `.env` and fillout the environment varaibles.
Create a project in infura(or any other private RPC) and update the `PROJECT_ID` with Endpoint and also update `privatekey` with your Metamask private key.

Run `npm install` to get all the dependencies.

## To Run locally
 1.  start the local Hardhat Node
  ```hardhat
      npx hardhat node
  ```
  2.  With that running, deploy contract on a seperate terminal window
   ```hardhat
      npx hardhat run scripts/deploy.js --network localhost
   ```
  3.  Update `config.js` file with deployed address.
    
  4.  start the app
   ```hardhat
      npm run dev
   ```
  
  ## To Run on Polygon Network
  1.  Make sure `PROJECT_ID` and `privatekey` are updated.
  2.  Now deploy contract on any one of the network available i.e. Polygon Mainnet or Mumbai network.
   ```hardhat
      npx hardhat run scripts/deploy.js --network <specify the network>
   ```
  3.  Again update `config.js` file with the deployed address.
  4.  start the app
   ```hardhat
      npm run dev
   ```
   
   





