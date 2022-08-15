export const greetingABI = [
    {
        inputs: [
            {
                internalType: 'string',
                name: '_greeting',
                type: 'string',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        inputs: [],
        name: 'greet',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_greeting',
                type: 'string',
            },
        ],
        name: 'setGreeting',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
