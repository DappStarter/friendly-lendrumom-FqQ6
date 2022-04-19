require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember million hover castle outer surge'; 
let testAccounts = [
"0xcbbfeb82e15246dc63707dd23c3757da189cc9ac2111566e3dcbaa8ee3091df1",
"0xc8dc8001d0585e4351ff53e85f0421037f6a636c44b0f0758b39d2ca4c7f41c5",
"0x9ea004e8e2bab9c1c54c8d5c3527a531d4975682d8e1f5638e5647c07b315690",
"0x477abca6ad89cf6de0db767f49c7751344c233377a5badc543be2b17f1600bea",
"0x7872cced79db8eadfd54d0d8a5504b9cf1cc511e56f23ba7b77f019191fa7cba",
"0xff377a808e30f904f82d8bfb9cc993ef369b9557e1ee7b40e9dd97fb230846ba",
"0x5d81c18209699166e42020c79e8675e3aef25fdc74325c4b2c1a1350ad8daed5",
"0x5ff9734cf4dbb3326f48d26291c0d8fdbbd904287ff84afb85ceb00f5b58bb48",
"0xc5acb05cd5544854570642896eb2b49eed151759bdd866f5aea66cfd709c8c49",
"0x389a7d74d9224dde5f54128e7990874273f98d1b52750739b216ec08d1400870"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

