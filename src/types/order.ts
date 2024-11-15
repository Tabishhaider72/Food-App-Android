import { MenuItem } from './menu';

export type Order = {
  id: string;
  studentId: string;
  items: MenuItem[];
  status: 'Received' | 'Picked' | 'Prepared';
  createdAt: Date;
};