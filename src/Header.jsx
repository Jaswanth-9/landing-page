import "./Header.css"

export default function Header(){
    return(
        <main className = "Header">
            <img src="/images/puma logo.png" alt="brand logo"/>
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>  
            <button>Login</button>
        </main>
    )
}