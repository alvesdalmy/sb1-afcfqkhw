'use client';

import { Card } from '@/components/ui/card';
import { useBalance } from 'wagmi';
import { formatEther } from 'viem';

export function WalletSection({ address }: { address: `0x${string}` }) {
  const { data: nativeBalance } = useBalance({
    address,
  });

  const { data: tokenBalance } = useBalance({
    address,
    token: '0xd1C522aF7bC539F96BE6a03195472cD2b2476114',
  });

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">
          Native Balance
        </h3>
        <p className="mt-2 text-2xl font-bold">
          {nativeBalance ? formatEther(nativeBalance.value) : '0.00'} ETH
        </p>
      </Card>
      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">
          Token Balance
        </h3>
        <p className="mt-2 text-2xl font-bold">
          {tokenBalance ? formatEther(tokenBalance.value) : '0.00'} WETH
        </p>
      </Card>
      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">
          Staked Amount
        </h3>
        <p className="mt-2 text-2xl font-bold">0.00 WETH</p>
      </Card>
      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">
          Available Cashback
        </h3>
        <p className="mt-2 text-2xl font-bold">0.00 ETH</p>
      </Card>
    </div>
  );
}