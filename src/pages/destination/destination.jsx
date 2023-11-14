import Navigation from "../../components/nav/Navigation"

function Destination () {
  return (
    <>
      <div>
        <Navigation />
        <div>
          <h1> 01 Pick your destination</h1>
          {/* <img src={} alt="planet moon" /> */}
        </div>
        <div>

          <div>
            
              Moon
              Mars
              Europa
              Titan           
            
            <h1>Moon</h1>
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
              regain perspective and come back refreshed. While you’re there, take in some history 
              by visiting the Luna 2 and Apollo 11 landing sites.
            </p>
            <h3>
              Avg. distance
              384,400 km
            </h3>
            <h3>
              Est. travel time
              3 days
            </h3>

          </div>

        </div>
      </div>
    </>
  )

}

export default Destination