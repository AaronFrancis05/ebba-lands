"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Utensils,
  History,
  MessageSquare,
  Settings,
  ChevronLeft,
  LayoutDashboard,
  ShoppingCart,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const mainMenuItems = [
  {
    title: "Master Menu",
    url: "/dashboard",
    icon: Utensils,
  },
  {
    title: "My Orders",
    url: "/dashboard/orders",
    icon: History,
  },
  {
    title: "Contact Us",
    url: "/dashboard/contact",
    icon: MessageSquare,
  },
];

const preferencesItems = [
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

interface AppSidebarProps {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export function AppSidebar({ user }: AppSidebarProps) {
  const pathname = usePathname();
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === "collapsed";

  const initials = user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase() || "U";

  return (
    <Sidebar collapsible="icon" className="border-r bg-background">
      <SidebarHeader className="border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-white font-bold">
              <Utensils className="h-5 w-5" />
            </div>
            {!isCollapsed && (
              <span className="font-serif font-bold text-lg text-orange-600">Ebba Lands</span>
            )}
          </Link>
          {!isCollapsed && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={toggleSidebar}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Restaurant
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    tooltip={item.title}
                    className={cn(
                      "transition-colors",
                      pathname === item.url &&
                        "bg-orange-600 text-white hover:bg-orange-700 hover:text-white"
                    )}
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {preferencesItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    tooltip={item.title}
                    className={cn(
                      "transition-colors",
                      pathname === item.url &&
                        "bg-orange-600 text-white hover:bg-orange-700 hover:text-white"
                    )}
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        {!isCollapsed && (
          <div className="mb-4 rounded-lg bg-orange-50 p-3 border border-orange-100">
            <p className="text-xs text-orange-800 font-bold mb-1">VIP Member</p>
            <p className="text-[11px] text-orange-700 mb-2">
              You've placed 12 orders this month! Enjoy free delivery on your next order.
            </p>
            <Button size="sm" variant="outline" className="w-full text-xs border-orange-200 text-orange-700 hover:bg-orange-100">
              View Rewards
            </Button>
          </div>
        )}
        <Link
          href="/profile"
          className="flex items-center gap-3 rounded-lg p-2 hover:bg-muted transition-colors"
        >
          <Avatar className="h-9 w-9">
            <AvatarImage src={user?.image || ""} alt={user?.name || "User"} />
            <AvatarFallback className="bg-primary/10 text-primary text-sm">
              {initials}
            </AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate">
                {user?.name || "User"}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {user?.email || "user@example.com"}
              </p>
            </div>
          )}
        </Link>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
