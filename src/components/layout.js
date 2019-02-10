import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const ListLink = props => (
	<li style={{ display: `inline-block`, marginRight: `1rem` }}>
		<Link to={props.to}>{props.children}</Link>
	</li>
)

export default ({ children }) => (
	<div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
	     <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
		<header style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem`}}>
			<Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
				<h3>MySweetSite</h3>
			</Link>
			<ul style={{ listStyle: `none`, float:`right` }}>
				<ListLink to="/">Home</ListLink>
				<ListLink to= "/about/">About</ListLink>
				<ListLink to="/contact/">Contact</ListLink>
			</ul>
		</header>
		{children}
	</div>
)