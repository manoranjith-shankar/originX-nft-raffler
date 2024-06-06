import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@rainbow-me/rainbowkit/styles.css';
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, mainnet, sepolia, WagmiConfig } from 'wagmi';
import { baseGoerli, lineaTestnet, polygon, polygonZkEvmTestnet } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export const polygonAmoy = {
  id: 80002,
  name: 'Polygon Amoy',
  network: 'Amoy',
  nativeCurrency: {
  decimals: 18,
  symbol: 'MATIC',
  },
    iconUrl: 'https://assets-global.website-files.com/637e2b6d602973ea0941d482/63e26c8a3f6e812d91a7aa3d_Polygon-New-Logo.png',
  rpcUrls: {
  default: { http: [`https://polygon-amoy.g.alchemy.com/v2/${process.env.ALCHEMY_ID}`] },
  },
  blockExplorers: {
  default: { name: 'explorer', url: 'https://www.oklink.com/amoy/' },
  },
  }

const { chains, provider } = configureChains(
  [ polygonAmoy, polygon, mainnet],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'originX',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        theme={darkTheme({
        accentColor: '#4f14af',
        accentColorForeground: 'white',
        overlayBlur: 'small',
          })} chains={chains}>
            <App />
      </RainbowKitProvider>
    </WagmiConfig>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals