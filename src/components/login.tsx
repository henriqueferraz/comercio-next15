import { LogInIcon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


export const Login = () => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                        <LogInIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Acesso ao sistema</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}