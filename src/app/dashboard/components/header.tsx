import { SignOutButton } from "@clerk/nextjs"

export const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <SignOutButton />
        </div>
    )
}