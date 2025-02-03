'use client';

import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { WalletSection } from './wallet-section';
import { SwapSection } from './swap-section';
import { StakingSection } from './staking-section';
import { GovernanceSection } from './governance-section';
import { TransactionsSection } from './transactions-section';
import { WalletIcon } from 'lucide-react';

export function DashboardPage() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  if (!isConnected) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
        <Card className="w-full max-w-md p-6 text-center">
          <WalletIcon className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-2xl font-bold">Welcome to DeFi Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Connect your wallet to access the dashboard
          </p>
          <Button
            className="mt-4 w-full"
            onClick={() => connect()}
          >
            Connect Wallet
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">DeFi Dashboard</h1>
          <Button variant="outline" onClick={() => disconnect()}>
            Disconnect
          </Button>
        </div>

        <WalletSection address={address} />

        <Tabs defaultValue="swap" className="mt-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="swap">Swap</TabsTrigger>
            <TabsTrigger value="staking">Staking</TabsTrigger>
            <TabsTrigger value="governance">Governance</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>
          <TabsContent value="swap">
            <SwapSection />
          </TabsContent>
          <TabsContent value="staking">
            <StakingSection />
          </TabsContent>
          <TabsContent value="governance">
            <GovernanceSection />
          </TabsContent>
          <TabsContent value="transactions">
            <TransactionsSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}