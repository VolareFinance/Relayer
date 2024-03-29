export const optionMarketABI = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'boardId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'baseIv',
                type: 'uint256',
            },
        ],
        name: 'BoardBaseIvSet',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'boardId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'expiry',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'baseIv',
                type: 'uint256',
            },
        ],
        name: 'BoardCreated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'boardId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'frozen',
                type: 'bool',
            },
        ],
        name: 'BoardFrozen',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'boardId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalUserLongProfitQuote',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalBoardLongCallCollateral',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalBoardLongPutCollateral',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalAMMShortCallProfitBase',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalAMMShortPutProfitQuote',
                type: 'uint256',
            },
        ],
        name: 'BoardLiquidated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'boardId',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'listingId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'strike',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'skew',
                type: 'uint256',
            },
        ],
        name: 'ListingAdded',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'listingId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'skew',
                type: 'uint256',
            },
        ],
        name: 'ListingSkewSet',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'trader',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'listingId',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'enum IOptionMarket.TradeType',
                name: 'tradeType',
                type: 'uint8',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalCost',
                type: 'uint256',
            },
        ],
        name: 'PositionClosed',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'trader',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'listingId',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'enum IOptionMarket.TradeType',
                name: 'tradeType',
                type: 'uint8',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalCost',
                type: 'uint256',
            },
        ],
        name: 'PositionOpened',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'boardId',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'strike',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'skew',
                type: 'uint256',
            },
        ],
        name: 'addListingToBoard',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'boardToPriceAtExpiry',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_listingId',
                type: 'uint256',
            },
            {
                internalType: 'enum IOptionMarket.TradeType',
                name: 'tradeType',
                type: 'uint8',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'closePosition',
        outputs: [
            {
                internalType: 'uint256',
                name: 'totalCost',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'expiry',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'baseIV',
                type: 'uint256',
            },
            {
                internalType: 'uint256[]',
                name: 'strikes',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256[]',
                name: 'skews',
                type: 'uint256[]',
            },
        ],
        name: 'createOptionBoard',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'boardId',
                type: 'uint256',
            },
        ],
        name: 'getBoardListings',
        outputs: [
            {
                internalType: 'uint256[]',
                name: '',
                type: 'uint256[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getLiveBoards',
        outputs: [
            {
                internalType: 'uint256[]',
                name: '_liveBoards',
                type: 'uint256[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'contract ILyraGlobals',
                name: '_globals',
                type: 'address',
            },
            {
                internalType: 'contract ILiquidityPool',
                name: '_liquidityPool',
                type: 'address',
            },
            {
                internalType: 'contract IOptionMarketPricer',
                name: '_optionPricer',
                type: 'address',
            },
            {
                internalType: 'contract IOptionGreekCache',
                name: '_greekCache',
                type: 'address',
            },
            {
                internalType: 'contract IShortCollateral',
                name: '_shortCollateral',
                type: 'address',
            },
            {
                internalType: 'contract IOptionToken',
                name: '_optionToken',
                type: 'address',
            },
            {
                internalType: 'contract IERC20',
                name: '_quoteAsset',
                type: 'address',
            },
            {
                internalType: 'contract IERC20',
                name: '_baseAsset',
                type: 'address',
            },
            {
                internalType: 'string[]',
                name: '_errorMessages',
                type: 'string[]',
            },
        ],
        name: 'init',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'boardId',
                type: 'uint256',
            },
        ],
        name: 'liquidateExpiredBoard',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'listingToBaseReturnedRatio',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'maxExpiryTimestamp',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_listingId',
                type: 'uint256',
            },
            {
                internalType: 'enum IOptionMarket.TradeType',
                name: 'tradeType',
                type: 'uint8',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'openPosition',
        outputs: [
            {
                internalType: 'uint256',
                name: 'totalCost',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'optionBoards',
        outputs: [
            {
                internalType: 'uint256',
                name: 'id',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'expiry',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'iv',
                type: 'uint256',
            },
            {
                internalType: 'bool',
                name: 'frozen',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'optionListings',
        outputs: [
            {
                internalType: 'uint256',
                name: 'id',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'strike',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'skew',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'longCall',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'shortCall',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'longPut',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'shortPut',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'boardId',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'boardId',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'baseIv',
                type: 'uint256',
            },
        ],
        name: 'setBoardBaseIv',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'boardId',
                type: 'uint256',
            },
            {
                internalType: 'bool',
                name: 'frozen',
                type: 'bool',
            },
        ],
        name: 'setBoardFrozen',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'listingId',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'skew',
                type: 'uint256',
            },
        ],
        name: 'setListingSkew',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'listingId',
                type: 'uint256',
            },
            {
                internalType: 'enum IOptionMarket.TradeType',
                name: 'tradeType',
                type: 'uint8',
            },
        ],
        name: 'settleOptions',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
