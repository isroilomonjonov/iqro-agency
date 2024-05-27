import { Input } from "@/components/ui/input"
import SearchIcon from '@/assets/search'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Notifications from '@/assets/notifications'
import MessageIcon from '@/assets/message'
import { Button } from '../ui/button'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-4 pt-7 flex-wrap-reverse gap-2 lg:flex-nowrap mb-8'>
            <div className='relative sm:min-w-[350px]'>
                <SearchIcon className="absolute top-1/2 left-4 -translate-y-1/2" />
                <Input className=' text-[#5A5881] text-[14px] leading-4  px-[15px] py-[17px] rounded-[10px] pl-11' placeholder="Search Anything" />
            </div>
            <div className='flex gap-3'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={"link"}><MessageIcon /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Messages</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                No messages
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className='relative' variant={"link"}><Notifications /> <span className="text-white font-bold absolute -top-1 right-3 bg-[#563BFF] rounded-full w-5 h-5">5</span></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                You have 5 unread notifications
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage src="/avatar.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Profile
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Navbar