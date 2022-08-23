require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture street cruise pumpkin modify grid argue oppose giggle'; 
let testAccounts = [
"0x5665e444c66a60e021ec13af91636c1c4c473fc3e8910b0cbf375df305a9f3d1",
"0x17dfed4360ade4618e08cb4d60cb642022a89a9357e353606d43f0091c111b4e",
"0x216cdcee856f5b8b604d68250f880fc3ce8b30bb2f3aeaad077b363d169db16d",
"0xd7bf30a9a1110d927eb47ef4609292fc4e1a24866178fe84b351792423913c53",
"0x6cf55507fdbbb8875feae697c104b63b3fa63aa77fb5ae8920f8c7d8b5aba333",
"0xdb6b5f7d33212781baa7dee77715b5d4d8ec27f1f674460a658b0cd9b40c72f4",
"0x2c885eaf1bae98b42d0fbd208473258a5a2e51a076391ca584a9c8047c5bf0d7",
"0x8100b8a03b7463d21d6c043fdc6ab72fb3dab050c52a38c2ef28c5e649ad2461",
"0x6ae6b3d2ca91724df38e193c6b25f4d4a42b838e2aedaa3c99506fc76c787d3d",
"0x1c4a0d303afb59e60a8e1c444ca81cc1699bce355193b898ccd41e9fe1fba2eb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


