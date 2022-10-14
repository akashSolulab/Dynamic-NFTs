
  

## Dynamic NFTs (dNFTs)

**A dynamic NFT is a non-fungible token that can change based on certain circumstances.** Due to their ability to adapt and change in response to external events and data, dNFTs are expanding the design space that NFTs can handle.

  

***

  

### Clone repository

```bash

git clone https://github.com/akashSolulab/Dynamic-NFTs.git

```

***

### Installation

```bash

cd Dynamic-NFTs

npm install

```

***

### Real World Usage

-   Tokenizing real-world assets
-   Making video games that progress
-   Building fantasy sports leagues on the blockchain  

### Working structure
1.  First, an NFT request is sent to a smart contract
2.  The smart contract looks for information on the blockchain
3.  The contract asks an oracle for information that is not on the blockchain
4.  The smart contract then sends back one or two pieces of media

### Development Paradigm
1. Prepare your NFT smart contract
2. Make your contract inherit from  `KeeperCompatibleInterface`
3. Implement  `checkUpkeep`  and  `performUpkeep`  functions in the NFT smart contract so that we satisfy the interface.
4. [Register the “upkeep” contract](https://docs.chain.link/docs/chainlink-keepers/register-upkeep/)  with the Chainlink Keeper Network.

### Smart contract Interaction

#### Compile smart contracts

```bash
npx hardhat compile
```

#### Smart contract Deployment
  
```bash
npx hardhat run --network goerli scripts/deploy-BullAndBear.js
```

#### Smart contract Verfication

```bash
npx hardhat verify --network goerli DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
```