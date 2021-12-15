import Link from "next/link";

const Navbar = () => {
    return(
        <div>
    <li>
      <Link href={''}><a>Main</a></Link>
    </li>
    <li>
      <Link href={''}>GiHub</Link>
    </li>
    <li>
      <Link href={''}>About Me</Link>
    </li>
  </div>
    )
}

export default Navbar;