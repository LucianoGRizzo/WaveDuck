const { Connection, clusterApiUrl, Keypair } = require("@solana/web3.js");
const { Metaplex, keypairIdentity } = require("@metaplex-foundation/js");

(async () => {
    // Set up connection and Metaplex instance
    const connection = new Connection(clusterApiUrl("devnet"));
    const wallet = Keypair.fromSecretKey(
        Uint8Array.from([243, 233, 84, 80, 103, 26, 169, 152, 235, 56, 99, 82, 0, 24, 185, 165, 150, 114, 168, 11, 148, 227, 29, 140, 47, 13, 31, 159, 24, 192, 139, 162, 140, 223, 225, 3, 95, 123, 103, 161, 89, 203, 182, 114, 103, 216, 233, 228, 229, 223, 220, 101, 8, 156, 29, 233, 56, 106, 243, 103, 194, 55, 167, 24]) // Replace with your wallet's private key array
    );
    const metaplex = Metaplex.make(connection).use(keypairIdentity(wallet));

    // Token details
    const mintAddress = "AXpo5Acqcg7MN7dyZFG1DesyeYTwt5BnEvuwAi3rNCRP"; // Replace with your token's mint address
    const metadata = {
        name: "WaveDuck Token",
        symbol: "WAVEDUCK",
        uri: "https://raw.githubusercontent.com/LucianoGRizzo/WaveDuck/refs/heads/main/metadata.json", // Replace with the hosted URI of your metadata JSON file
        sellerFeeBasisPoints: 0, // Optional: set royalties (0 for none)
    };

    try {
        // Add metadata to the token
        const metadataAccount = await metaplex.tokens().createMetadata({
            mintAddress,
            name: metadata.name,
            symbol: metadata.symbol,
            uri: metadata.uri,
            sellerFeeBasisPoints: metadata.sellerFeeBasisPoints,
        });

        console.log("Metadata added successfully!");
        console.log("Metadata Account Address:", metadataAcc
