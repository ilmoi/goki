import { generateErrorMap } from "@saberhq/anchor-contrib";

export type SmartWalletIDL = {
  version: "0.5.4";
  name: "smart_wallet";
  instructions: [
    {
      name: "createSmartWallet";
      accounts: [
        {
          name: "base";
          isMut: false;
          isSigner: true;
        },
        {
          name: "smartWallet";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "bump";
          type: "u8";
        },
        {
          name: "maxOwners";
          type: "u8";
        },
        {
          name: "owners";
          type: {
            vec: "publicKey";
          };
        },
        {
          name: "threshold";
          type: "u64";
        },
        {
          name: "minimumDelay";
          type: "i64";
        }
      ];
    },
    {
      name: "setOwners";
      accounts: [
        {
          name: "smartWallet";
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "owners";
          type: {
            vec: "publicKey";
          };
        }
      ];
    },
    {
      name: "changeThreshold";
      accounts: [
        {
          name: "smartWallet";
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "threshold";
          type: "u64";
        }
      ];
    },
    {
      name: "createTransaction";
      accounts: [
        {
          name: "smartWallet";
          isMut: true;
          isSigner: false;
        },
        {
          name: "transaction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposer";
          isMut: false;
          isSigner: true;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "bump";
          type: "u8";
        },
        {
          name: "instructions";
          type: {
            vec: {
              defined: "TXInstruction";
            };
          };
        }
      ];
    },
    {
      name: "createTransactionWithTimelock";
      accounts: [
        {
          name: "smartWallet";
          isMut: true;
          isSigner: false;
        },
        {
          name: "transaction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposer";
          isMut: false;
          isSigner: true;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "bump";
          type: "u8";
        },
        {
          name: "instructions";
          type: {
            vec: {
              defined: "TXInstruction";
            };
          };
        },
        {
          name: "eta";
          type: "i64";
        }
      ];
    },
    {
      name: "approve";
      accounts: [
        {
          name: "smartWallet";
          isMut: false;
          isSigner: false;
        },
        {
          name: "transaction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [];
    },
    {
      name: "unapprove";
      accounts: [
        {
          name: "smartWallet";
          isMut: false;
          isSigner: false;
        },
        {
          name: "transaction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [];
    },
    {
      name: "executeTransaction";
      accounts: [
        {
          name: "smartWallet";
          isMut: false;
          isSigner: false;
        },
        {
          name: "transaction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [];
    },
    {
      name: "executeTransactionDerived";
      accounts: [
        {
          name: "smartWallet";
          isMut: false;
          isSigner: false;
        },
        {
          name: "transaction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "index";
          type: "u64";
        },
        {
          name: "bump";
          type: "u8";
        }
      ];
    },
    {
      name: "ownerInvokeInstruction";
      accounts: [
        {
          name: "smartWallet";
          isMut: false;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "index";
          type: "u64";
        },
        {
          name: "bump";
          type: "u8";
        },
        {
          name: "ix";
          type: {
            defined: "TXInstruction";
          };
        }
      ];
    },
    {
      name: "createSubaccountInfo";
      accounts: [
        {
          name: "subaccountInfo";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "bump";
          type: "u8";
        },
        {
          name: "subaccount";
          type: "publicKey";
        },
        {
          name: "smartWallet";
          type: "publicKey";
        },
        {
          name: "index";
          type: "u64";
        },
        {
          name: "subaccountType";
          type: {
            defined: "SubaccountType";
          };
        }
      ];
    }
  ];
  accounts: [
    {
      name: "SmartWallet";
      type: {
        kind: "struct";
        fields: [
          {
            name: "base";
            type: "publicKey";
          },
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "threshold";
            type: "u64";
          },
          {
            name: "minimumDelay";
            type: "i64";
          },
          {
            name: "gracePeriod";
            type: "i64";
          },
          {
            name: "ownerSetSeqno";
            type: "u32";
          },
          {
            name: "numTransactions";
            type: "u64";
          },
          {
            name: "owners";
            type: {
              vec: "publicKey";
            };
          },
          {
            name: "reserved";
            type: {
              array: ["u64", 16];
            };
          }
        ];
      };
    },
    {
      name: "Transaction";
      type: {
        kind: "struct";
        fields: [
          {
            name: "smartWallet";
            type: "publicKey";
          },
          {
            name: "index";
            type: "u64";
          },
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "proposer";
            type: "publicKey";
          },
          {
            name: "instructions";
            type: {
              vec: {
                defined: "TXInstruction";
              };
            };
          },
          {
            name: "signers";
            type: {
              vec: "bool";
            };
          },
          {
            name: "ownerSetSeqno";
            type: "u32";
          },
          {
            name: "eta";
            type: "i64";
          },
          {
            name: "executor";
            type: "publicKey";
          },
          {
            name: "executedAt";
            type: "i64";
          }
        ];
      };
    },
    {
      name: "SubaccountInfo";
      type: {
        kind: "struct";
        fields: [
          {
            name: "smartWallet";
            type: "publicKey";
          },
          {
            name: "subaccountType";
            type: {
              defined: "SubaccountType";
            };
          },
          {
            name: "index";
            type: "u64";
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "TXInstruction";
      type: {
        kind: "struct";
        fields: [
          {
            name: "programId";
            type: "publicKey";
          },
          {
            name: "keys";
            type: {
              vec: {
                defined: "TXAccountMeta";
              };
            };
          },
          {
            name: "data";
            type: "bytes";
          }
        ];
      };
    },
    {
      name: "TXAccountMeta";
      type: {
        kind: "struct";
        fields: [
          {
            name: "pubkey";
            type: "publicKey";
          },
          {
            name: "isSigner";
            type: "bool";
          },
          {
            name: "isWritable";
            type: "bool";
          }
        ];
      };
    },
    {
      name: "SubaccountType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Derived";
          },
          {
            name: "OwnerInvoker";
          }
        ];
      };
    }
  ];
  events: [
    {
      name: "WalletCreateEvent";
      fields: [
        {
          name: "smartWallet";
          type: "publicKey";
          index: true;
        },
        {
          name: "owners";
          type: {
            vec: "publicKey";
          };
          index: false;
        },
        {
          name: "threshold";
          type: "u64";
          index: false;
        },
        {
          name: "minimumDelay";
          type: "i64";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "WalletSetOwnersEvent";
      fields: [
        {
          name: "smartWallet";
          type: "publicKey";
          index: true;
        },
        {
          name: "owners";
          type: {
            vec: "publicKey";
          };
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "WalletChangeThresholdEvent";
      fields: [
        {
          name: "smartWallet";
          type: "publicKey";
          index: true;
        },
        {
          name: "threshold";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "TransactionCreateEvent";
      fields: [
        {
          name: "smartWallet";
          type: "publicKey";
          index: true;
        },
        {
          name: "transaction";
          type: "publicKey";
          index: true;
        },
        {
          name: "proposer";
          type: "publicKey";
          index: false;
        },
        {
          name: "instructions";
          type: {
            vec: {
              defined: "TXInstruction";
            };
          };
          index: false;
        },
        {
          name: "eta";
          type: "i64";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "TransactionApproveEvent";
      fields: [
        {
          name: "smartWallet";
          type: "publicKey";
          index: true;
        },
        {
          name: "transaction";
          type: "publicKey";
          index: true;
        },
        {
          name: "owner";
          type: "publicKey";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "TransactionUnapproveEvent";
      fields: [
        {
          name: "smartWallet";
          type: "publicKey";
          index: true;
        },
        {
          name: "transaction";
          type: "publicKey";
          index: true;
        },
        {
          name: "owner";
          type: "publicKey";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "TransactionExecuteEvent";
      fields: [
        {
          name: "smartWallet";
          type: "publicKey";
          index: true;
        },
        {
          name: "transaction";
          type: "publicKey";
          index: true;
        },
        {
          name: "executor";
          type: "publicKey";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    }
  ];
  errors: [
    {
      code: 6000;
      name: "InvalidOwner";
      msg: "The given owner is not part of this smart wallet.";
    },
    {
      code: 6001;
      name: "InvalidETA";
      msg: "Estimated execution block must satisfy delay.";
    },
    {
      code: 6002;
      name: "DelayTooHigh";
      msg: "Delay greater than the maximum.";
    },
    {
      code: 6003;
      name: "NotEnoughSigners";
      msg: "Not enough owners signed this transaction.";
    },
    {
      code: 6004;
      name: "TransactionIsStale";
      msg: "Transaction is past the grace period.";
    },
    {
      code: 6005;
      name: "TransactionNotReady";
      msg: "Transaction hasn't surpassed time lock.";
    },
    {
      code: 6006;
      name: "AlreadyExecuted";
      msg: "The given transaction has already been executed.";
    },
    {
      code: 6007;
      name: "InvalidThreshold";
      msg: "Threshold must be less than or equal to the number of owners.";
    },
    {
      code: 6008;
      name: "OwnerSetChanged";
      msg: "Owner set has changed since the creation of the transaction.";
    },
    {
      code: 6009;
      name: "SubaccountOwnerMismatch";
      msg: "Subaccount does not belong to smart wallet.";
    },
    {
      code: 6010;
      name: "DestinationNotWhitelisted";
      msg: "destination not whitelisted";
    }
  ];
};
export const SmartWalletJSON: SmartWalletIDL = {
  version: "0.5.4",
  name: "smart_wallet",
  instructions: [
    {
      name: "createSmartWallet",
      accounts: [
        {
          name: "base",
          isMut: false,
          isSigner: true,
        },
        {
          name: "smartWallet",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "bump",
          type: "u8",
        },
        {
          name: "maxOwners",
          type: "u8",
        },
        {
          name: "owners",
          type: {
            vec: "publicKey",
          },
        },
        {
          name: "threshold",
          type: "u64",
        },
        {
          name: "minimumDelay",
          type: "i64",
        },
      ],
    },
    {
      name: "setOwners",
      accounts: [
        {
          name: "smartWallet",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "owners",
          type: {
            vec: "publicKey",
          },
        },
      ],
    },
    {
      name: "changeThreshold",
      accounts: [
        {
          name: "smartWallet",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "threshold",
          type: "u64",
        },
      ],
    },
    {
      name: "createTransaction",
      accounts: [
        {
          name: "smartWallet",
          isMut: true,
          isSigner: false,
        },
        {
          name: "transaction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposer",
          isMut: false,
          isSigner: true,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "bump",
          type: "u8",
        },
        {
          name: "instructions",
          type: {
            vec: {
              defined: "TXInstruction",
            },
          },
        },
      ],
    },
    {
      name: "createTransactionWithTimelock",
      accounts: [
        {
          name: "smartWallet",
          isMut: true,
          isSigner: false,
        },
        {
          name: "transaction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposer",
          isMut: false,
          isSigner: true,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "bump",
          type: "u8",
        },
        {
          name: "instructions",
          type: {
            vec: {
              defined: "TXInstruction",
            },
          },
        },
        {
          name: "eta",
          type: "i64",
        },
      ],
    },
    {
      name: "approve",
      accounts: [
        {
          name: "smartWallet",
          isMut: false,
          isSigner: false,
        },
        {
          name: "transaction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: "unapprove",
      accounts: [
        {
          name: "smartWallet",
          isMut: false,
          isSigner: false,
        },
        {
          name: "transaction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: "executeTransaction",
      accounts: [
        {
          name: "smartWallet",
          isMut: false,
          isSigner: false,
        },
        {
          name: "transaction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: "executeTransactionDerived",
      accounts: [
        {
          name: "smartWallet",
          isMut: false,
          isSigner: false,
        },
        {
          name: "transaction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "index",
          type: "u64",
        },
        {
          name: "bump",
          type: "u8",
        },
      ],
    },
    {
      name: "ownerInvokeInstruction",
      accounts: [
        {
          name: "smartWallet",
          isMut: false,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "index",
          type: "u64",
        },
        {
          name: "bump",
          type: "u8",
        },
        {
          name: "ix",
          type: {
            defined: "TXInstruction",
          },
        },
      ],
    },
    {
      name: "createSubaccountInfo",
      accounts: [
        {
          name: "subaccountInfo",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "bump",
          type: "u8",
        },
        {
          name: "subaccount",
          type: "publicKey",
        },
        {
          name: "smartWallet",
          type: "publicKey",
        },
        {
          name: "index",
          type: "u64",
        },
        {
          name: "subaccountType",
          type: {
            defined: "SubaccountType",
          },
        },
      ],
    },
  ],
  accounts: [
    {
      name: "SmartWallet",
      type: {
        kind: "struct",
        fields: [
          {
            name: "base",
            type: "publicKey",
          },
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "threshold",
            type: "u64",
          },
          {
            name: "minimumDelay",
            type: "i64",
          },
          {
            name: "gracePeriod",
            type: "i64",
          },
          {
            name: "ownerSetSeqno",
            type: "u32",
          },
          {
            name: "numTransactions",
            type: "u64",
          },
          {
            name: "owners",
            type: {
              vec: "publicKey",
            },
          },
          {
            name: "reserved",
            type: {
              array: ["u64", 16],
            },
          },
        ],
      },
    },
    {
      name: "Transaction",
      type: {
        kind: "struct",
        fields: [
          {
            name: "smartWallet",
            type: "publicKey",
          },
          {
            name: "index",
            type: "u64",
          },
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "proposer",
            type: "publicKey",
          },
          {
            name: "instructions",
            type: {
              vec: {
                defined: "TXInstruction",
              },
            },
          },
          {
            name: "signers",
            type: {
              vec: "bool",
            },
          },
          {
            name: "ownerSetSeqno",
            type: "u32",
          },
          {
            name: "eta",
            type: "i64",
          },
          {
            name: "executor",
            type: "publicKey",
          },
          {
            name: "executedAt",
            type: "i64",
          },
        ],
      },
    },
    {
      name: "SubaccountInfo",
      type: {
        kind: "struct",
        fields: [
          {
            name: "smartWallet",
            type: "publicKey",
          },
          {
            name: "subaccountType",
            type: {
              defined: "SubaccountType",
            },
          },
          {
            name: "index",
            type: "u64",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "TXInstruction",
      type: {
        kind: "struct",
        fields: [
          {
            name: "programId",
            type: "publicKey",
          },
          {
            name: "keys",
            type: {
              vec: {
                defined: "TXAccountMeta",
              },
            },
          },
          {
            name: "data",
            type: "bytes",
          },
        ],
      },
    },
    {
      name: "TXAccountMeta",
      type: {
        kind: "struct",
        fields: [
          {
            name: "pubkey",
            type: "publicKey",
          },
          {
            name: "isSigner",
            type: "bool",
          },
          {
            name: "isWritable",
            type: "bool",
          },
        ],
      },
    },
    {
      name: "SubaccountType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Derived",
          },
          {
            name: "OwnerInvoker",
          },
        ],
      },
    },
  ],
  events: [
    {
      name: "WalletCreateEvent",
      fields: [
        {
          name: "smartWallet",
          type: "publicKey",
          index: true,
        },
        {
          name: "owners",
          type: {
            vec: "publicKey",
          },
          index: false,
        },
        {
          name: "threshold",
          type: "u64",
          index: false,
        },
        {
          name: "minimumDelay",
          type: "i64",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "WalletSetOwnersEvent",
      fields: [
        {
          name: "smartWallet",
          type: "publicKey",
          index: true,
        },
        {
          name: "owners",
          type: {
            vec: "publicKey",
          },
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "WalletChangeThresholdEvent",
      fields: [
        {
          name: "smartWallet",
          type: "publicKey",
          index: true,
        },
        {
          name: "threshold",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "TransactionCreateEvent",
      fields: [
        {
          name: "smartWallet",
          type: "publicKey",
          index: true,
        },
        {
          name: "transaction",
          type: "publicKey",
          index: true,
        },
        {
          name: "proposer",
          type: "publicKey",
          index: false,
        },
        {
          name: "instructions",
          type: {
            vec: {
              defined: "TXInstruction",
            },
          },
          index: false,
        },
        {
          name: "eta",
          type: "i64",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "TransactionApproveEvent",
      fields: [
        {
          name: "smartWallet",
          type: "publicKey",
          index: true,
        },
        {
          name: "transaction",
          type: "publicKey",
          index: true,
        },
        {
          name: "owner",
          type: "publicKey",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "TransactionUnapproveEvent",
      fields: [
        {
          name: "smartWallet",
          type: "publicKey",
          index: true,
        },
        {
          name: "transaction",
          type: "publicKey",
          index: true,
        },
        {
          name: "owner",
          type: "publicKey",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "TransactionExecuteEvent",
      fields: [
        {
          name: "smartWallet",
          type: "publicKey",
          index: true,
        },
        {
          name: "transaction",
          type: "publicKey",
          index: true,
        },
        {
          name: "executor",
          type: "publicKey",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "InvalidOwner",
      msg: "The given owner is not part of this smart wallet.",
    },
    {
      code: 6001,
      name: "InvalidETA",
      msg: "Estimated execution block must satisfy delay.",
    },
    {
      code: 6002,
      name: "DelayTooHigh",
      msg: "Delay greater than the maximum.",
    },
    {
      code: 6003,
      name: "NotEnoughSigners",
      msg: "Not enough owners signed this transaction.",
    },
    {
      code: 6004,
      name: "TransactionIsStale",
      msg: "Transaction is past the grace period.",
    },
    {
      code: 6005,
      name: "TransactionNotReady",
      msg: "Transaction hasn't surpassed time lock.",
    },
    {
      code: 6006,
      name: "AlreadyExecuted",
      msg: "The given transaction has already been executed.",
    },
    {
      code: 6007,
      name: "InvalidThreshold",
      msg: "Threshold must be less than or equal to the number of owners.",
    },
    {
      code: 6008,
      name: "OwnerSetChanged",
      msg: "Owner set has changed since the creation of the transaction.",
    },
    {
      code: 6009,
      name: "SubaccountOwnerMismatch",
      msg: "Subaccount does not belong to smart wallet.",
    },
    {
      code: 6010,
      name: "DestinationNotWhitelisted",
      msg: "destination not whitelisted",
    },
  ],
};
export const SmartWalletErrors = generateErrorMap(SmartWalletJSON);
