'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export function GovernanceSection() {
  const [proposal, setProposal] = useState('');
  const [votingPeriod, setVotingPeriod] = useState('');

  return (
    <Card className="p-6">
      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-semibold">Create Proposal</h2>
        <Textarea
          placeholder="Enter your proposal description"
          value={proposal}
          onChange={(e) => setProposal(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Voting period (in days)"
          value={votingPeriod}
          onChange={(e) => setVotingPeriod(e.target.value)}
        />
        <Button className="w-full">Submit Proposal</Button>
      </div>
    </Card>
  );
}