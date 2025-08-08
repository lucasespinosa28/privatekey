import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { english, generateMnemonic, mnemonicToAccount } from "viem/accounts";
import { toHex } from "viem";
import { Copy } from "../components/Copy.tsx";

export default function WalletGenerator() {
  const [mnemonic, setMnemonic] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [address, setAddress] = useState("");

  const generateWallet = () => {
    const newMnemonic = generateMnemonic(english, 256);
    const account = mnemonicToAccount(newMnemonic);
    const hdKey = account.getHdKey();
    const newPrivateKey = hdKey.privateKey ? toHex(hdKey.privateKey) : "";

    setMnemonic(newMnemonic);
    setPrivateKey(newPrivateKey || "");
    setAddress(account.address);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const saveToFile = () => {
    const walletData = `Mnemonic: ${mnemonic}\nPrivate Key: ${privateKey}\nAddress: ${address}`;
    const blob = new Blob([walletData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wallet-info.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div class="w-full max-w-md mx-auto">
      <Button
        onClick={generateWallet}
        color="primary"
      >
        Create Wallet
      </Button>
      {mnemonic && (
        <div class="mt-8 text-left bg-gray-700 p-6 rounded-lg shadow-inner">
          <div class="mb-4">
            <label class="block text-gray-400 text-sm font-bold mb-2">Mnemonic:</label>
            <div class="flex items-center bg-gray-900 p-2 rounded">
              <span class="flex-grow text-gray-300 break-all">{mnemonic}</span>
              <Copy onClick={() => copyToClipboard(mnemonic)} />
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-400 text-sm font-bold mb-2">Private Key:</label>
            <div class="flex items-center bg-gray-900 p-2 rounded">
              <span class="flex-grow text-gray-300 break-all">{privateKey}</span>
              <Copy onClick={() => copyToClipboard(privateKey)} />
            </div>
          </div>
          <div>
            <label class="block text-gray-400 text-sm font-bold mb-2">Address:</label>
            <div class="flex items-center bg-gray-900 p-2 rounded">
              <span class="flex-grow text-gray-300 break-all">{address}</span>
              <Copy onClick={() => copyToClipboard(address)} />
            </div>
          </div>
          <Button 
            onClick={saveToFile} 
             color="secondary"
          >
            Save to File
          </Button>
        </div>
      )}
    </div>
  );
}
