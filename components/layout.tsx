import Navbar from './navbar';

export default function Layout({children} : {children: any}) {
    return (
        <>
        <Navbar />
        <main>
            {children}
        </main>

        <style jsx>
            {`
            main {
                margin-top: 80px;
                height: 550px
                background-color:
            }
            `}
        </style>
        </>
    )
}