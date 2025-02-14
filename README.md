# Reown AppKit Example using wagmi (Vite + React) + Shyft Wallet

This is a [Vite](https://vitejs.dev) project together with React.

## Usage

1. Go to [Reown Cloud](https://cloud.reown.com) and create a new project.
2. Copy your `Project ID`
3. Rename `.env.example` to `.env` and paste your `Project ID` as the value for `VITE_PROJECT_ID`
4. Update the `VITE_SHYFT_WALLET_URL` to the Shyft Wallet URL 
5. Run `pnpm install` to install dependencies
6. Run `pnpm run dev` to start the development server

## Adding Shyft Wallet Configuration

1. Update your config file to include Shyft wallet connector:
   ```typescript
   import { Chain, http, createConfig } from 'wagmi'
   import { injected } from 'wagmi/connectors'

   const shyftConnector = injected({
     target: 'shyft',
     shimDisconnect: true,
   })

   export const wagmiAdapter = new WagmiAdapter({
     projectId,
     networks,
     connectors: [shyftConnector]
   })
   ```

2. Configure Shyft wallet in your App:
   ```typescript
   const shyftWallet: CustomWallet = {
     id: 'shyft',
     name: 'Shyft Wallet',
     homepage: 'https://shyft.tech',
     image_url: 'https://s3.us-east-1.amazonaws.com/asset.shyft.tech/shyft-logo-back-128.png',
     webapp_link: 'https://dev.shyft-wallet-web.pages.dev/',
   }

   createAppKit({
     adapters: [wagmiAdapter],
     customWallets: [shyftWallet],
     showWallets: false,
     allWallets: 'HIDE',
     includeWalletIds: ['shyft'],
     enableInjected: false,
     enableCoinbase: false,
     ...generalConfig,
     features: {
       analytics: true
     }
   })
   ```

## Resources

- [Reown — Docs](https://docs.reown.com)
- [Vite — GitHub](https://github.com/vitejs/vite)
- [Vite — Docs](https://vitejs.dev/guide/)


