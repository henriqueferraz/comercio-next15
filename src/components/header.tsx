import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { CartSidebar } from "@/components/cart/sidebar"
import { Login } from "./login"

export const Header = () => {
    return (
        <header className="flex justify-between items-center my-5 mx-3">
            <div className="flex items-center gap-3">
                <ThemeToggle />
                <Login />
                <Logo />
            </div>
            <div className="flex items-center gap-3">
                <CartSidebar />
            </div>
        </header>
    )
}