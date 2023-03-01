import '../style/mypage.css';

const Navbar = () => {
    return (
        <div className="container">
            <div className="navbar" >
                <h1>Huddle</h1>
                <button>try it free</button>
            </div>
            <div className="row-1">
                <div className="col-1">
                    <h2>Build the community your fans will love</h2>
                    <p>Huddle re-image the way we build communities. You have a voice, but so does your audience.Create connection with your users as you engage in discussion.</p>
                    <button>Get started for free</button>
                </div>
                <div className="col-2">
                    <div className="img-1">
                        <span></span>
                    </div>
                    <div className="img-2">
                        <span className="img-2"></span>
                    </div>
                </div>
            </div>

            <div className="row-2">
            <div className="col-2">
            <h2 className="header-2">Grow Together</h2>
                <p className="para-2">Generate meaningful discussion with your audience and build a strong loyal community. Think of insightful conversation you miss out on with a feedback form</p>
            
            </div>
                </div>
        </div>
    );
}

export default Navbar;