# Digital Market Place

NFT Digital Market Place based on Polygon network (Mumbai). This is the work from [Nader Dabit](https://dev.to/dabit3/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb).

I modified hardhat.config.js from default mumbai-test network (https://rpc-mumbai.matic.today) to Alchemy service in order to access Polygon network. I also update JSON-RPC provider as follows:

```
const url = `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY.ALCHEMY_ID}`;
const provider =  new ethers.providers.JsonRpcProvider(url);
```

Note: if you want to use the Infura service, you must enable Polygon L2 which required to put your creditcard for activating process.

## Step: 
### Install 
    
```
git clone https://github.com/wwarodom/digital-market-place.git.git
cd digital-market-place
npm i
```

##### Wallet setup
* Request MATIC token from Polygon Faucet: https://faucet.matic.network/.
* Edit .secret: put your private key on deploy account
* Edit alchemy.jon: put your secret id fro https://dashboard.alchemyapi.io/


### Deploy and run
``` 
npx hardhat run scripts/deploy.js --network mumbai
npm run dev
```

Then open http://localhost:3000/ and have fun with NFT digital market place.


### References
* https://www.youtube.com/watch?v=GKJBEEXUha0
* https://dev.to/dabit3/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb