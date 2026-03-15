"use client";

import { useState } from "react";
import { 
  Search, 
  MoreHorizontal, 
  Eye, 
  Filter,
  Package,
  Clock,
  CheckCircle2,
  Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const initialOrders = [
  {
    id: "#EB-84920",
    customer: "Jenny Wilson",
    items: "3 items",
    total: "UGX 56,000",
    date: "15 Mar 2026, 10:24 AM",
    type: "Delivery",
    status: "Preparing",
  },
  {
    id: "#EB-84921",
    customer: "Leslie Alexander",
    items: "1 item",
    total: "UGX 32,000",
    date: "15 Mar 2026, 10:15 AM",
    type: "Pickup",
    status: "Received",
  },
  {
    id: "#EB-84922",
    customer: "Cody Fisher",
    items: "5 items",
    total: "UGX 124,000",
    date: "15 Mar 2026, 09:45 AM",
    type: "Delivery",
    status: "Out for Delivery",
  },
  {
    id: "#EB-84923",
    customer: "Esther Howard",
    items: "2 items",
    total: "UGX 45,000",
    date: "15 Mar 2026, 08:30 AM",
    type: "Delivery",
    status: "Delivered",
  },
];

export default function OrdersManagementPage() {
  const [orders, setOrders] = useState(initialOrders);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Received": return "bg-blue-100 text-blue-700";
      case "Preparing": return "bg-yellow-100 text-yellow-700";
      case "Out for Delivery": return "bg-purple-100 text-purple-700";
      case "Delivered": return "bg-green-100 text-green-700";
      default: return "bg-stone-100 text-stone-700";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Orders Management</h1>
        <p className="text-muted-foreground">Monitor and update the status of incoming customer orders.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-blue-50/50 border-blue-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <Package className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">Received</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-yellow-50/50 border-yellow-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-yellow-600 font-bold uppercase tracking-wider">Preparing</p>
              <p className="text-2xl font-bold">8</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-purple-50/50 border-purple-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-purple-600 font-bold uppercase tracking-wider">On the Way</p>
              <p className="text-2xl font-bold">5</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-green-50/50 border-green-100">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-green-600 font-bold uppercase tracking-wider">Delivered</p>
              <p className="text-2xl font-bold">131</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Incoming Orders</CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search orders..."
                className="pl-8 h-9 w-[250px]"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell className="text-stone-500 text-xs">{order.date}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{order.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Select defaultValue={order.status}>
                      <SelectTrigger className={`h-8 w-[140px] text-xs font-medium ${getStatusColor(order.status)} border-none`}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Received">Received</SelectItem>
                        <SelectItem value="Preparing">Preparing</SelectItem>
                        <SelectItem value="Out for Delivery">Out for Delivery</SelectItem>
                        <SelectItem value="Delivered">Delivered</SelectItem>
                        <SelectItem value="Cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
