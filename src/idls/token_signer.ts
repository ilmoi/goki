import { generateErrorMap } from "@saberhq/anchor-contrib";

export type TokenSignerIDL = {
  version: "0.0.0";
  name: "token_signer";
  instructions: [
    {
      name: "invokeSignedInstruction";
      accounts: [
        {
          name: "ownerAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "nftAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "nftPda";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "data";
          type: "bytes";
        }
      ];
    }
  ];
  errors: [
    {
      code: 300;
      name: "Unauthorized";
      msg: "Unauthorized.";
    }
  ];
};
export const TokenSignerJSON: TokenSignerIDL = {
  version: "0.0.0",
  name: "token_signer",
  instructions: [
    {
      name: "invokeSignedInstruction",
      accounts: [
        {
          name: "ownerAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "nftAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "nftPda",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "data",
          type: "bytes",
        },
      ],
    },
  ],
  errors: [
    {
      code: 300,
      name: "Unauthorized",
      msg: "Unauthorized.",
    },
  ],
};
export const TokenSignerErrors = generateErrorMap(TokenSignerJSON);
