import logo from "../../images/Untitled.png";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<>
			<nav>
				<nav className="navbar navbar-expand-sm navbar-dark bg-black">
					<div class="container">
                        <div className="fit-content" >
                            <img src={logo} alt="" className="w-25 m-0" />
                            </div>
						<Link className="navbar-brand" to="/">
							THE SLIVER SCREEN
						</Link>
						<button
							className="navbar-toggler d-lg-none"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapsibleNavId"
							aria-controls="collapsibleNavId"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="collapsibleNavId">
							<ul className="navbar-nav me-auto mt-2 mt-lg-0">
								<li class="nav-item">
									<Link className="nav-link " to="/" aria-current="page">
										HOME
										
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/movies">
										MOVIES
									</Link>
								</li>

                                <li className="nav-item">
									<Link className="nav-link" to="/tvshow">
										TV SHOW
									</Link>
								</li>

                                <li className="nav-item">
									<Link className="nav-link" to="/persons">
										PERSONS
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</nav>

            		</>
	);
}
