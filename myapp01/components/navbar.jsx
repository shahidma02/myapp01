import Link from 'next/link'
import styles from '../styles/Home.module.css'

const routes = [
	{ name: "Server", path: "/server" },
	{ name: "Client", path: "/client" },
	{ name: "Staticprop", path: "/staticprops" }
]

export default function Navbar() {
	return (
		<>{routes.map(r =>
			<Link className={ styles.navlinks } key={r.index} href={r.path}>{r.name}</Link>
			)}
		</>
	)
}