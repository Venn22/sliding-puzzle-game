const ABI = [
  {
    inputs: [
      { internalType: "string", name: "_tokenName", type: "string" },
      { internalType: "string", name: "_tokenSymbol", type: "string" },
      { internalType: "address", name: "_randomizerContract", type: "address" },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "_to", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "addMintWhitelisted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "string", name: "_projectName", type: "string" },
      { internalType: "address", name: "_artistAddress", type: "address" },
      { internalType: "uint256", name: "_pricePerTokenInWei", type: "uint256" },
      { internalType: "bool", name: "_dynamic", type: "bool" },
    ],
    name: "addProject",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "string", name: "_script", type: "string" },
    ],
    name: "addProjectScript",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "addWhitelisted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "admin",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "artblocksAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "artblocksPercentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "clearTokenIpfsImageUri",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "getRoyaltyData",
    outputs: [
      { internalType: "address", name: "artistAddress", type: "address" },
      { internalType: "address", name: "additionalPayee", type: "address" },
      {
        internalType: "uint256",
        name: "additionalPayeePercentage",
        type: "uint256",
      },
      { internalType: "uint256", name: "royaltyFeeByID", type: "uint256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "hashToTokenId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "isMintWhitelisted",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "isWhitelisted",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_to", type: "address" },
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "address", name: "_by", type: "address" },
    ],
    name: "mint",
    outputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "nextProjectId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_tokenId", type: "uint256" },
      { internalType: "string", name: "_ipfsHash", type: "string" },
    ],
    name: "overrideTokenDynamicImageWithIpfsLink",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "_projectId", type: "uint256" }],
    name: "projectDetails",
    outputs: [
      { internalType: "string", name: "projectName", type: "string" },
      { internalType: "string", name: "artist", type: "string" },
      { internalType: "string", name: "description", type: "string" },
      { internalType: "string", name: "website", type: "string" },
      { internalType: "string", name: "license", type: "string" },
      { internalType: "bool", name: "dynamic", type: "bool" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "projectIdToAdditionalPayee",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "projectIdToAdditionalPayeePercentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "projectIdToArtistAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "projectIdToCurrencyAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "projectIdToCurrencySymbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "projectIdToPricePerTokenInWei",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "projectIdToSecondaryMarketRoyaltyPercentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "uint256", name: "_index", type: "uint256" },
    ],
    name: "projectScriptByIndex",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "_projectId", type: "uint256" }],
    name: "projectScriptInfo",
    outputs: [
      { internalType: "string", name: "scriptJSON", type: "string" },
      { internalType: "uint256", name: "scriptCount", type: "uint256" },
      { internalType: "bool", name: "useHashString", type: "bool" },
      { internalType: "string", name: "ipfsHash", type: "string" },
      { internalType: "bool", name: "locked", type: "bool" },
      { internalType: "bool", name: "paused", type: "bool" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "_projectId", type: "uint256" }],
    name: "projectShowAllTokens",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "_projectId", type: "uint256" }],
    name: "projectTokenInfo",
    outputs: [
      { internalType: "address", name: "artistAddress", type: "address" },
      { internalType: "uint256", name: "pricePerTokenInWei", type: "uint256" },
      { internalType: "uint256", name: "invocations", type: "uint256" },
      { internalType: "uint256", name: "maxInvocations", type: "uint256" },
      { internalType: "bool", name: "active", type: "bool" },
      { internalType: "address", name: "additionalPayee", type: "address" },
      {
        internalType: "uint256",
        name: "additionalPayeePercentage",
        type: "uint256",
      },
      { internalType: "string", name: "currency", type: "string" },
      { internalType: "address", name: "currencyAddress", type: "address" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "_projectId", type: "uint256" }],
    name: "projectURIInfo",
    outputs: [
      { internalType: "string", name: "projectBaseURI", type: "string" },
      { internalType: "string", name: "projectBaseIpfsURI", type: "string" },
      { internalType: "bool", name: "useIpfs", type: "bool" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "randomizerContract",
    outputs: [
      { internalType: "contract Randomizer", name: "", type: "address" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "removeMintWhitelisted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "_projectId", type: "uint256" }],
    name: "removeProjectLastScript",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "removeWhitelisted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "staticIpfsImageLink",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "_projectId", type: "uint256" }],
    name: "toggleProjectIsActive",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "_projectId", type: "uint256" }],
    name: "toggleProjectIsDynamic",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "_projectId", type: "uint256" }],
    name: "toggleProjectIsLocked",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "_projectId", type: "uint256" }],
    name: "toggleProjectIsPaused",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "_projectId", type: "uint256" }],
    name: "toggleProjectUseHashString",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "_projectId", type: "uint256" }],
    name: "toggleProjectUseIpfsForStatic",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
    name: "tokenByIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "tokenIdToHash",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "tokenIdToProjectId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "tokensOfOwner",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_artblocksAddress", type: "address" },
    ],
    name: "updateArtblocksAddress",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_artblocksPercentage",
        type: "uint256",
      },
    ],
    name: "updateArtblocksPercentage",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "address", name: "_additionalPayee", type: "address" },
      {
        internalType: "uint256",
        name: "_additionalPayeePercentage",
        type: "uint256",
      },
    ],
    name: "updateProjectAdditionalPayeeInfo",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "address", name: "_artistAddress", type: "address" },
    ],
    name: "updateProjectArtistAddress",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "string", name: "_projectArtistName", type: "string" },
    ],
    name: "updateProjectArtistName",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "string", name: "_projectBaseIpfsURI", type: "string" },
    ],
    name: "updateProjectBaseIpfsURI",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "string", name: "_newBaseURI", type: "string" },
    ],
    name: "updateProjectBaseURI",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "string", name: "_currencySymbol", type: "string" },
      { internalType: "address", name: "_currencyAddress", type: "address" },
    ],
    name: "updateProjectCurrencyInfo",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "string", name: "_projectDescription", type: "string" },
    ],
    name: "updateProjectDescription",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "string", name: "_ipfsHash", type: "string" },
    ],
    name: "updateProjectIpfsHash",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "string", name: "_projectLicense", type: "string" },
    ],
    name: "updateProjectLicense",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "uint256", name: "_maxInvocations", type: "uint256" },
    ],
    name: "updateProjectMaxInvocations",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "string", name: "_projectName", type: "string" },
    ],
    name: "updateProjectName",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "uint256", name: "_pricePerTokenInWei", type: "uint256" },
    ],
    name: "updateProjectPricePerTokenInWei",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "uint256", name: "_scriptId", type: "uint256" },
      { internalType: "string", name: "_script", type: "string" },
    ],
    name: "updateProjectScript",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "string", name: "_projectScriptJSON", type: "string" },
    ],
    name: "updateProjectScriptJSON",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      {
        internalType: "uint256",
        name: "_secondMarketRoyalty",
        type: "uint256",
      },
    ],
    name: "updateProjectSecondaryMarketRoyaltyPercentage",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_projectId", type: "uint256" },
      { internalType: "string", name: "_projectWebsite", type: "string" },
    ],
    name: "updateProjectWebsite",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_randomizerAddress", type: "address" },
    ],
    name: "updateRandomizerAddress",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
const address = "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270";

async function showNFTs() {
  let metaData;
  try {
    if (window.ethereum) {
      //Connect wallet
      await window.ethereum.send("eth_requestAccounts");
      window.web3 = new Web3(window.ethereum);
      
      const connectedAddress = window.ethereum.selectedAddress;

      const inputAddress = document.getElementById("inputAddress").value;

      // Create a contract instance
      const contract = new web3.eth.Contract(ABI, address);

      // Get the balance of NFTs owned by the account
      const balance = Number(
        await contract.methods.balanceOf(inputAddress).call()
      );
      // Fetch token data for each NFT owned by the account
      const tokens = [];

      const nftContainer = document.getElementById("nftContainer");
      nftContainer.innerHTML = "";

      for (let i = 0; i < balance; i++) {
        const tokenId = await contract.methods
          .tokenOfOwnerByIndex(inputAddress, i)
          .call();

        const tokenURI = await contract.methods.tokenURI(tokenId).call();

        if (tokenURI.startsWith("ipfs://")) {
          tokenURI = `https://ipfs.io/ipfs/${tokenURI.split("ipfs://")[1]}`;
        }
        tokens.push({ tokenId, tokenURI });

        metaData = await fetch(tokenURI).then((response) => response.json());

        const nftDetails = document.createElement("div");
        const h1Element = document.createElement("h1");
        const h3Element = document.createElement("h3");
        const imgElement = document.createElement("img");
        h1Element.textContent = metaData.name || "NFT Name";
        h3Element.textContent = metaData.description || "NFT Description";
        imgElement.src = metaData.image || "";

        // Append the NFT details and image to the nftContainer div
        nftDetails.appendChild(h1Element);
        nftDetails.appendChild(h3Element);
        nftDetails.appendChild(imgElement);
        nftContainer.appendChild(nftDetails);
        
        console.log(metaData['image']);
      }

      const nftsDiv = document.getElementById("nfts");
      if (balance === 0) {
        nftsDiv.textContent = "User doesn't have any NFTs.";
      } else {
        nftsDiv.textContent = `User has ${balance} NFTs.`;
      }
    } else {
      alert("Metamask not detected");
    }
  } catch (error) {
    console.error("Error fetching NFTs:", error);
  }
}
