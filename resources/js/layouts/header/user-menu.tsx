import { Form, Link } from "@inertiajs/react"
import { LogOutIcon, SettingsIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { User } from "@/types"
import { store } from "@/routes/auth/logout"
import { AvatarProps } from "@radix-ui/react-avatar"

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

interface UserMenuProps {
  user: User
}

export function UserMenu({ user }: UserMenuProps) {
  const displayName = user.profile.name;
  const initials = getInitials(displayName);

  const UserAvatar = (props: AvatarProps) => (
    <Avatar {...props}>
      <AvatarImage src={user.profile.profile_picture_url ?? undefined} alt={displayName} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative flex items-center gap-2 p-0 focus-visible:ring-0"
        >
          <UserAvatar className="size-8" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="">
        <DropdownMenuLabel>
          <DropdownMenuItem className="flex items-center gap-2">
            <UserAvatar className="size-12" />
            <span className="font-medium">{displayName}</span>
          </DropdownMenuItem>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="#">
            <SettingsIcon className="size-4" />
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <Form
          action={store.post()}
          className="contents"
        >
          {() => (
            <DropdownMenuItem asChild>
              <button type="submit" className="w-full cursor-pointer">
                <LogOutIcon className="size-4" />
                Log out
              </button>
            </DropdownMenuItem>
          )}
        </Form>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
