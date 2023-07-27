import { LoginForm } from "../components/LoginForm";

export default function LoginPage(){
    return(
        <main>
            
            {/* {Place Logo/Title component here} */}

            <article>
                <p>
                    A Social running club in Waverly,
                    Come join us and enjoy running
                    at all skill levels!
                </p>

                <LoginForm />

                <p>Don't have an account? <a href="./signup"><strong>Sign Up Here</strong></a> </p>
            </article>
        </main>
    );
    
}