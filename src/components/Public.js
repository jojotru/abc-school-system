import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome back to <span className="nowrap">ABC School System!</span></h1>
            </header>
            <main className="public__main">
                <h3>We hope you had a wonderful summer!</h3>
                <h5>Log in to create and review your tasks for the new school year.</h5>
                <address className="public__addr">
                    ABC School System<br />
                    123 Main Street<br />
                    Atlanta, GA 12345<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <h4>Principal: Jane Smith</h4>
                <div className='testLogin'>
                <h5>To view as a Teacher for testing purposes:</h5>
                <p>Username: Thomas</p>
                <p>Password: Test</p>
                </div>
            </main>
            <footer>
                <Link to="/login">Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public