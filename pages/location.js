import React, {useState} from 'react'

function Location() {
    const [location, setLocation] = useState({latitude: null, longitude:null});
    const [error,setError] = useState(null);
    
    const getLocation = () =>
        {
            if(navigator.geolocation)
                {
                    navigator.geolocation.getCurrentPosition((position)=>{
                        setLocation({
                            latitude: position.coords.latitude,
                            longitude:position.coords.longitude,
                        });
                    },
                    (err) => {
                        setError(err.message);
                    }
                );

                }else{
                    setError('Geolocation ís not supported by this brower.')
                }
        };
  return ( 
    <div>
        <button onClick={getLocation}>Get Location</button>
        {location.latitude && location.longitude ? (
            <div>
                <p >Latitude: {location.latitude}</p>
                <p >longitude: {location.longitude}</p>

            </div>
        ):(
            error && <p>Error: {error}</p>
        )}
    </div>
  )
}

export default Location