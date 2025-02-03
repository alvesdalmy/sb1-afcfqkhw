'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowDownUp } from 'lucide-react';
import { useState } from 'react';

export function SwapSection() {
  const [amount, setAmount] = useState('');
  const [isWrapping, setIsWrapping] = useState(true);

  return (
    <Card className="p-6">
      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-semibold">
          {isWrapping ? 'Wrap ETH' : 'Unwrap WETH'}
        </h2>
        <Input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsWrapping(!isWrapping)}
        >
          <ArrowDownUp className="mr-2 h-4 w-4" />
          Switch
        </Button>
        <Button className="w-full">
          {isWrapping ? 'Wrap' : 'Unwrap'}
        </Button>
      </div>
    </Card>
  );
}