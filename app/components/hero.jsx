import { FaPodcast } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Hero() {

    return (

        <>


            <section class="vh-100 p-5 mb-1">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6 text-black">

                            <div class="">

                                <form >

                                    <div className="me-5 ms-5 ps-5 pe-5 mt-5 py-2">


                                        <h3 class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-3 pb-3">
                                            <span>
                                                Sign Up
                                            </span>
                                            <span>
                                                <FaPodcast style={{ fontSize: '25px' }} width="36" /> Podcaster
                                            </span>
                                        </h3>


                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Your name</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Email address</label>
                                        </div>
                                        <div class="form-floating">
                                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Password</label>
                                        </div>

                                        <div class="mt-4">
                                            <div class="d-grid gap-2">
                                                <Link href="/dashboard" class="btn btn-primary py-2 text-decoration-none" type="button">Sign up</Link>
                                            </div>
                                        </div>

                                        <p class="mt-3 mb-3 text-center">Or</p>


                                        <div class="d-grid gap-2">
                                            <button type="button" class="btn btn-outline-dark ">
                                                <b>
                                                    <span>Continue with Google</span> <span><FcGoogle class="ms-1" /></span>
                                                </b>
                                            </button>
                                        </div>

                                        <p className="mt-4 text-center">Already have an account? <a href="#!">Sign in</a></p>


                                    </div>

                                </form>

                            </div>

                        </div>
                        <div class="col-sm-6 px-0 d-none d-sm-block">
                            <img src="./hero.png"
                                alt="Login image" class="rounded w-100 vh-100" style={{ "objectFit": "cover", "objectPosition": "left" }} />
                        </div>
                    </div>
                </div>
            </section>

        </>

    )

}