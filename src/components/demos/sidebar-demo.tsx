import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  User2,
  ChevronDown,
} from "lucide-react"

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

function SidebarLogo() {
  const { isCollapsed } = useSidebar()

  return (
    <div className="flex items-center gap-2 font-semibold text-white">
      <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary text-primary-foreground">
        <User2 className="h-4 w-4" />
      </div>
      {!isCollapsed && <span>Bat UI</span>}
    </div>
  )
}

export function SidebarDemo() {
  return (
    <div className="h-[400px] w-full rounded-md border border-zinc-800 overflow-hidden">
      <SidebarProvider className="h-full">
        <Sidebar>
          <SidebarHeader>
            <SidebarLogo />
          </SidebarHeader>
          <SidebarContent className="no-scrollbar">
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              {items.map((item) => (
                <SidebarItem key={item.title} icon={item.icon}>
                  {item.title}
                </SidebarItem>
              ))}
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarItem icon={User2} className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-2">

                <span>User Profile</span>
                <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
              </div>
            </SidebarItem>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 flex flex-col min-w-0 bg-black">
          <header className="flex h-14 items-center gap-4 border-b border-zinc-800 px-6">
            <SidebarTrigger />
            <div className="font-semibold text-zinc-200">Dashboard</div>
          </header>
          <main className="flex-1 p-6 text-zinc-400">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="aspect-video rounded-xl bg-zinc-900/50 border border-zinc-800" />
              <div className="aspect-video rounded-xl bg-zinc-900/50 border border-zinc-800" />
              <div className="aspect-video rounded-xl bg-zinc-900/50 border border-zinc-800" />
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}
