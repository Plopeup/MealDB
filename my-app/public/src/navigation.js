import { NavLink } from "react-router-dom"

const Navigation = () => (
    <nav>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/SearchPage">
            Search Page
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/ListingPage">
            Listing Page
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/DetailsPage">
            Details Page
          </NavLink>
        </li>
      </ul>
    </nav>
  )

  export default Navigation