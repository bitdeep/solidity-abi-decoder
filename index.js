const decoder = require('canoe-solidity');

function main() {
    const abi = [
        {
            "stateMutability": "nonpayable",
            "type": "constructor",
            "inputs": [
                {
                    "name": "_want",
                    "internalType": "address",
                    "type": "address"
                },
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": "_poolId"
                },
                {
                    "name": "_chef",
                    "internalType": "address",
                    "type": "address"
                },
                {
                    "type": "address",
                    "internalType": "address",
                    "name": "_vault"
                },
                {
                    "type": "address",
                    "internalType": "address",
                    "name": "_unirouter"
                },
                {
                    "type": "address",
                    "name": "_keeper",
                    "internalType": "address"
                },
                {
                    "type": "address",
                    "internalType": "address",
                    "name": "_strategist"
                },
                {
                    "name": "_beefyFeeRecipient",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "type": "address[]",
                    "internalType": "address[]",
                    "name": "_outputToNativeRoute"
                },
                {
                    "type": "address[]",
                    "name": "_outputToLp0Route",
                    "internalType": "address[]"
                },
                {
                    "type": "address[]",
                    "name": "_outputToLp1Route",
                    "internalType": "address[]"
                }
            ]
        }
    ];
    const data = '0000000000000000000000009293dfdd719ee2163f2e158e66ef75722ed712b4000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000067da5f2ffaddff067ab9d5f025f8810634d84287000000000000000000000000026cd63bf3fc511449f0229bd4a6323dd2f27b5a0000000000000000000000001b02da8cb0d097eb8d57a175b88c7d8b4799750600000000000000000000000010aee6b5594942433e7fc2783598c979b030ef3d000000000000000000000000010da5ff62b6e45f89fa7b2d8ced5a8b5754ec1b000000000000000000000000adb9ddfa24e326dc9d337561f6c7ba2a6ecec697000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000002600000000000000000000000000000000000000000000000000000000000000002000000000000000000000000bec775cb42abfa4288de81f387a9b1a3c4bc552a000000000000000000000000cf664087a5bb0237a0bad6742852ec6c8d69a27a0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000bec775cb42abfa4288de81f387a9b1a3c4bc552a000000000000000000000000cf664087a5bb0237a0bad6742852ec6c8d69a27a0000000000000000000000006983d1e6def3690c4d616b13597a09e6193ea013000000000000000000000000224e64ec1bdce3870a6a6c777edd450454068fec0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000bec775cb42abfa4288de81f387a9b1a3c4bc552a000000000000000000000000cf664087a5bb0237a0bad6742852ec6c8d69a27a0000000000000000000000006983d1e6def3690c4d616b13597a09e6193ea013';
    const res = decoder.decodeConstructorArgs(abi, data);
    console.log(res)
}


main();
