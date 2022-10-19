import React from 'react'
import { Link } from 'react-router-dom'

export default function PeopleTable({people}) {


  return (
    <table className='w-100 my-5 mx-6 text-[#fff]'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Height</th>
                <th>Gender</th>
                <th></th>
            </tr>
        </thead>
        
        <tbody>
        {
            people.map((e,i)=> (
                <tr key={i} personId={i+1} className="leading-3">
                    <td>{e.name}</td>
                    <td  className='text-center pl-4'>{e.mass}</td>
                    <td  className='text-center'>{e.height}</td>
                    <td  className='text-center'>{e.gender}</td>
                    <td><Link to={`PersonCard/${i+1}`}>
                        <h5 
                            className= 'my-3 bg-yellow inline-block p-2 rounded-full hover:bg-[#d48c0f]'>
                            View More
                        </h5>
                    </Link></td>    
                </tr>
            ))
        }
        </tbody>
    </table>
  )
}
