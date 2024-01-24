function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

function MainContent() {
    return (
        <main>
            <p>This is where most of my content will go...</p>
            <h1>Hello, everyone!</h1>
            <p>This is my first react test</p>

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </main>
    )
}

const element = <h1 className="header">This is JSX!</h1>
console.log(element);

const page = (
    <div>
        <h1 className="header">This is my page header</h1>
        <p>This is my page content</p>
    </div>
)

const navbar = (
    <nav>
        <h1>Bob's Bistro!</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

// Declarative way example
ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
        {element},
        {page},
        {navbar}
    </div>, document.getElementById('root')
);


// Imperative way example
const h1 = document.createElement('h1');
h1.textContent = 'This is an imperative way to program';
h1.className = 'header';
console.log(h1);
document.getElementById('root').append(h1);
