var BasicERC20Token = artifacts.require('BasicERC20Token');

const DECIMALS = 18;
const INITIAL_SUPPLY = 88888*(10**DECIMALS);

contract('BasicERC20Token', async function (accounts) {
    before(async () => {
        BasicERC20Token = await BasicERC20Token.deployed();
        console.log("token address: "+BasicERC20Token.address);
    });

    describe("ERC20 basic token test", async () => {
        it('should met initial decimals', async () => {
            let decimals = await BasicERC20Token.decimals();
            assert.equal(decimals, 18, "decimals doesn't match")
        });

        it('should met initial supply', async () => {
            let totalsupply = await BasicERC20Token.totalSupply.call();
            assert.equal(totalsupply, INITIAL_SUPPLY, "initial supply doesn't match")
        });

        it('should met initial sender balance', async () => {
            let senderBalance = await BasicERC20Token.balanceOf(accounts[0]);
            assert.equal(senderBalance, INITIAL_SUPPLY, "initial senderBalance doesn't match")
        });
    });
});

