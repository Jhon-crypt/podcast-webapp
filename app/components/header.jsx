import { FaPodcast } from "react-icons/fa";

export default function Header() {

    return (

        <>

            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <FaPodcast className="me-3" style={{ fontSize: '25px' }} width="36" />
                        Podcaster
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav mx-auto">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Features</a>
                            <a class="nav-link" href="#">Pricing</a>
                            <a class="nav-link disabled">Disabled</a>
                        </div>
                    </div>
                    <div class="d-flex align-items-center ms-auto">
                        <button type="button" class="btn me-3 text-light" style={{ background: "linear-gradient(to right, #717173, #000000)", borderRadius: '10px'}}>
                            Sign up now
                        </button>
                        <img src="./avatar.png" class="rounded-circle" width="50px" height="50px" />
                    </div>
                </div>
            </nav>

            {/*}
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <button class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarButtonsExample"
                        aria-expanded="false" >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        <FaPodcast style={{fontSize:'25px'}} width="36" />
                    </a>
                    <div class="collapse navbar-collapse" id="navbarButtonsExample">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Podcaster</a>
                            </li>
                        </ul>
                        <div class="d-flex align-items-center ms-auto">
                            <button type="button" class="btn btn-default px-3 me-2">
                                Login
                            </button>
                            <button type="button" class="btn btn-primary me-3">
                                Sign up now
                            </button>
                            <a
                                class="btn btn-subtle px-3"
                                href="https://github.com/mdbootstrap/mdb-ui-kit"
                                role="button"
                            ><i class="fab fa-github"></i
                            ></a>
                        </div>
                    </div>
                </div>
            </nav>
            {*/}

        </>

    )

}