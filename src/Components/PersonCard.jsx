import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function PersonCard({}) {
    const { personId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
  
    useEffect(() => {
      fetch(`https://swapi.dev/api/people/${personId}`, {})
        .then((res) => res.json())
        .then((response) => {
          setData(response);
          setIsLoading(false);
          console.log(`https://swapi.dev/api/people/${personId}`);
        })
        .catch((error) => console.log(error));
    }, [personId]);
  
    return (
      <>
        {!isLoading && (
          <>
            <main className='text-[#fff] p-4'>
                <h1 className='block text-center font-extrabold text-xl mb-6'>My name is {data.name}</h1>
                <hr></hr>
                
              <div className='my-6'>
                <h2>Height: {data.height}</h2>
                <h2>Mass: {data.mass}</h2>
                <h2>Hair Color: {data.hair_color}</h2>
                <h2>Skin Color: {data.skin_color}</h2>
                <h2>Eye Color: {data.eye_color}</h2>
                <h2>Birth Year: {data.birth_year}</h2>
                <h2>Gender: {data.gender}</h2>
                <Link to="/home"><h2 className='my-3 bg-yellow inline-block p-2 rounded-full hover:bg-[#d48c0f]'>Back to homepage</h2></Link>
              </div>
            </main>
            
            
          </>
        )}
      </>
    );
  };
