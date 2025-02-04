'use client';

import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain, useContractRead } from 'wagmi';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { WalletSection } from './wallet-section';
import { SwapSection } from './swap-section';
import { StakingSection } from './staking-section';
import { GovernanceSection } from './governance-section';
import { TransactionsSection } from './transactions-section';
import AdminSection from './admin-section';
import { ClientSection } from './client-section';
import { WalletIcon, ArrowRightLeft, PiggyBank, Vote, History, ShieldCheck, Users } from 'lucide-react';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { bscTestnet } from 'wagmi/chains';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/lib/contract';

export function DashboardPage() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Verifica se o usuário é administrador
  const { data: owner } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'owner',
    watch: true,
  });

  useEffect(() => {
    if (address && owner) {
      setIsAdmin(address.toLowerCase() === owner.toLowerCase());
    } else {
      setIsAdmin(false);
    }
  }, [address, owner]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isConnected && chainId !== bscTestnet.id) {
      toast({
        title: 'Rede Incorreta',
        description: 'Por favor, conecte-se à BSC Testnet',
        variant: 'destructive',
      });
    }
  }, [chainId, isConnected, toast]);

  const handleConnect = () => {
    connect({ connector: new InjectedConnector() });
  };

  const handleSwitchNetwork = async () => {
    try {
      await switchChain(bscTestnet.id);
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Falha ao mudar de rede. Por favor, tente manualmente.',
        variant: 'destructive',
      });
    }
  };

  if (!mounted) {
    return null;
  }

  if (!isConnected) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
        <Card className="w-full max-w-md p-6 text-center">
          <WalletIcon className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-2xl font-bold">Bem-vindo ao DeFi Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Conecte sua carteira para acessar o painel
          </p>
          <Button
            className="mt-4 w-full"
            onClick={handleConnect}
          >
            Conectar Carteira
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">DeFi Dashboard</h1>
          {chainId !== bscTestnet.id && (
            <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center">
              <p className="text-sm text-red-500">
                Rede incorreta. Por favor, conecte-se à BSC Testnet
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleSwitchNetwork}
                className="w-full sm:w-auto"
              >
                Mudar para BSC Testnet
              </Button>
            </div>
          )}
        </div>
        <Button 
          variant="outline" 
          onClick={() => disconnect()}
          className="w-full sm:w-auto"
        >
          Desconectar
        </Button>
      </div>

      {address && chainId === bscTestnet.id && (
        <div className="rounded-lg">
          <WalletSection address={address} />
        </div>
      )}

      <div className="rounded-lg border bg-card">
        <Tabs defaultValue="swap" className="w-full">
          <TabsList className="w-full border-b bg-muted/40 p-0">
            <div className="container flex h-10 items-center gap-4 overflow-x-auto">
              <TabsTrigger value="swap" className="flex items-center gap-2 data-[state=active]:bg-background">
                <ArrowRightLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Swap</span>
              </TabsTrigger>
              <TabsTrigger value="staking" className="flex items-center gap-2 data-[state=active]:bg-background">
                <PiggyBank className="h-4 w-4" />
                <span className="hidden sm:inline">Staking</span>
              </TabsTrigger>
              <TabsTrigger value="governance" className="flex items-center gap-2 data-[state=active]:bg-background">
                <Vote className="h-4 w-4" />
                <span className="hidden sm:inline">Governança</span>
              </TabsTrigger>
              <TabsTrigger value="transactions" className="flex items-center gap-2 data-[state=active]:bg-background">
                <History className="h-4 w-4" />
                <span className="hidden sm:inline">Transações</span>
              </TabsTrigger>
              {isAdmin && (
                <TabsTrigger value="admin" className="flex items-center gap-2 data-[state=active]:bg-background">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="hidden sm:inline">Admin</span>
                </TabsTrigger>
              )}
              <TabsTrigger value="client" className="flex items-center gap-2 data-[state=active]:bg
::contentReference[oaicite:0]{index=0}
 
