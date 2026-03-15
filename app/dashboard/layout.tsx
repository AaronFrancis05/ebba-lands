import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { HelpCircle, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogoutButton } from "@/components/auth/logout-button";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/sign-in");
  }

  return (
    <SidebarProvider>
      <AppSidebar
        user={{
          name: session.user.name,
          email: session.user.email,
          image: session.user.image,
        }}
      />
      <SidebarInset className="bg-muted/30 flex flex-col min-h-screen">
        <header className="flex h-16 shrink-0 items-center justify-between border-b bg-background px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="-ml-2" />
            <Separator orientation="vertical" className="h-6" />
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-5 w-5 text-muted-foreground" />
            </Button>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5 text-muted-foreground" />
            </Button>
            <div className="flex -space-x-2 mr-2">
              <Avatar className="h-8 w-8 border-2 border-background">
                <AvatarFallback className="bg-orange-100 text-orange-600 text-xs">
                  JD
                </AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8 border-2 border-background">
                <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                  AB
                </AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8 border-2 border-background">
                <AvatarFallback className="bg-green-100 text-green-600 text-xs">
                  CD
                </AvatarFallback>
              </Avatar>
            </div>
            <LogoutButton variant="outline" size="sm" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-6 pt-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
