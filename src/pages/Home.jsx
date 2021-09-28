import Rose from "../assets/Rose.png"
import List from "../assets/List.png"
import Group from "../assets/Group.png"
import Vote from "../assets/Vote.png"
import Medal from "../assets/Medal.png"

const Home = (props) => {
    return(
        <>
        {props.user == null ? 
        (
            <section className="Home">
                <h1>Welcome to Rose Battle <img src={Rose} alt="" className="rose-logo" /></h1>
                <h2>A fantasy league for ABC's The Bachelor and The Bachelorette series.</h2>
                <div className="home-grid">
                    <div className="home-card">
                        <img src={Group} alt="" className="home-panel-img" />
                        <p>Create or join a league with your friends and family.</p>
                    </div>
                    <div className="home-card">
                        <img src={List} alt="" />
                        <p>Draft contestants to earn you points over the season.</p>
                    </div>
                    <div className="home-card">
                        <img src={Vote} alt="" />
                        <p>Make and compete in weekly challenges to earn extra points.</p>
                    </div>
                    <div className="home-card">
                        <img src={Medal} alt="" />
                        <p>Tally up all the points and declare the league winner.</p>
                    </div>
                </div>
            </section>
        ) 
        : 
        (
            <section className="Home">
                <h1>Dashboard <img src={Rose} alt="" className="rose-logo" /></h1>
            </section>
        )
        }
        </>
    )
}

export default Home;