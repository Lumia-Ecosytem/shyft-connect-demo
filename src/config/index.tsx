import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import {  defineChain } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = import.meta.env.VITE_PROJECT_ID || "b56e18d47c72ab683b10814fe9495694" // this is a public projectId only to use on localhost

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const metadata = {
    name: 'AppKit',
    description: 'AppKit Example',
    url: 'https://reown.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/179229932']
  }
  // chainId: 994873017,
  // name: 'Lumia Prism',
  // logo: '/chain-logos/eip155-137.png',
  // rgb: '130, 71, 229',
  // rpc: 'https://mainnet-rpc.lumia.org',
  // namespace: 'eip155',
  const lumiaNetwork = defineChain({
    id: 994873017,
    caipNetworkId: 'eip155:994873017',
    chainNamespace: 'eip155',
    name: 'Lumia Prism',
    nativeCurrency: {
      decimals: 18,
      name: 'LUMIA',
      symbol: 'LUMIA',
    },
    rpcUrls: {
      default: {
        http: ['https://mainnet-rpc.lumia.org'],
        webSocket: ['wss://mainnet-rpc.lumia.org'],
      },
    },
    blockExplorers: {
      default: { name: 'Explorer', url: 'https://explorer.lumia.org' },
    },
    contracts: {
      // Add the contracts here
    }
  })

// for custom networks visit -> https://docs.reown.com/appkit/react/core/custom-networks
export const networks = [lumiaNetwork] as [AppKitNetwork, ...AppKitNetwork[]]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks

})

export const config = wagmiAdapter.wagmiConfig