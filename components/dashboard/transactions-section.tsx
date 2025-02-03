'use client';

import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function TransactionsSection() {
  return (
    <Card className="p-6">
      <h2 className="mb-4 text-lg font-semibold">Recent Transactions</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Wrap</TableCell>
            <TableCell>1.0 ETH</TableCell>
            <TableCell>Completed</TableCell>
            <TableCell>{new Date().toLocaleDateString()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}