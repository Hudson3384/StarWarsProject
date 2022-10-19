import React from 'react';
import { getPeople } from '../API';
import DoughnutChartAge from '../Components/DoughnutChartAge';
import DoughnutChartSkin from '../Components/DoughnutChartSkin';
import Footer from '../Components/Footer';
import PeopleTable from '../Components/PeopleTable';

const people = await getPeople()

const Dashboard = () => {
    
    return (
   
                
                <div className='flex flex-col justify-center  bg-[#5a5a5a] min-w-full'>
                        <h1 className='text-[#fff] block text-center my-3 font-bold'>DASHBOARD</h1>
                        <section className='flex flex-row justify-around mx-1'>
                            <div className='flex place-items-center flex-col'>
                                <h3 className='text-[#fff]'>Skin Faces</h3>
                                <DoughnutChartSkin people={people}/>
                            </div>
                            <div className='flex place-items-center flex-col'>
                                <h3 className='text-[#fff]'>Age's People</h3>
                                <DoughnutChartAge people={people}/>
                            </div>
                        </section>
                        <PeopleTable people={people} />
                        <Footer/>
                </div>

        
    );
}

export default Dashboard;