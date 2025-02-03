'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export function StakingSection() {
  const [stakeAmount, setStakeAmount] = useState('');

  return (
    <Card className="p-6">
      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-semibold">Staking</h2>
        <Input
          type="number"
          placeholder="Amount to stake"
          value={stakeAmount}
          onChange={(e) => setStakeAmount(e.target.value)}
        />
        <Button className="w-full">Stake Tokens</Button>
        <Button variant="outline" className="w-full">
          Withdraw Stake
        </Button>
      </div>
    </Card>
  );
}