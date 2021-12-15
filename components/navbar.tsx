import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <nav>
               <h1>Profile</h1>
            </nav>
            <style jsx>
                {`
                    nav {
                        position: fixed;
                        height: 60px;
                        left: 0;
                        top: 0;
                        right: 0;
                        background: #add;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                    }

                    nav h1 {
                        color: #fff;
                        text-decoration: none
                    }
                `}
            </style>
        </div>
    )
}

export default Navbar;