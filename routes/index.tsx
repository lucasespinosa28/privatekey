import WalletGenerator from "../islands/WalletGenerator.tsx";

export default function Home() {
  return (
    <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div class="max-w-2xl w-full text-center">
        <h1 class="text-5xl font-extrabold mb-4">Private Key Generator</h1>
        <p class="mb-8 text-lg text-gray-400">
          Easily generate a secure and unique private key for your cryptocurrency wallet. This tool provides a simple and reliable way to create a new private key, ensuring your digital assets are protected. Click the button below to get started and enhance the security of your wallet.
        </p>
        <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
          <WalletGenerator />
        </div>
      </div>
    </div>
  );
}
