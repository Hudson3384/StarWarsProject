
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';


const DoughnutChartAge = ({people}) => {
        let birthPeople = people.map((e)=>(e.birth_year))
        let birthLabels = [...new Set(birthPeople)]
        let birthData = []


        for(let i of birthLabels) {
            birthData.push(birthPeople.filter(x => x === i).length);
        }
       
            let age = []
            let arr = birthPeople.filter((e)=>e !== "unknown")
            for (let i of arr){
                if ( i.toLowerCase().includes('aby')) {
                    age.push(35-i.slice(i.index,1,i.split('aby')))
                } else {
                    age.push(35 + Number(i.replace('BBY','')))
                }
            }
            console.log(age)
        

            let ageLabels = [...new Set(age)]
            let ageData = []
           
            for(let i of ageLabels) {
                ageData.push(age.filter(x => x === i).length);
            }
        
        const [chartData] = useState({
            labels: ageLabels,
            datasets: [
                {
                    data: ageData,
                    backgroundColor: [
                        "#dea5a4",
                        "#ffd700",
                        "#4eb1c7",
                        "#ffffff",
                        "#f54d4d",
                        "#c3a55b",
                        "#15fd09",
                        "#6ca233",
                        "#ffe599",
                        "#9f9f9f",
                        "#000000",
                        "#352a0f",
                        "#43220b",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#ff3c00",
                        "#000b80",
                        "#a70000",
                        "#ff0000",
                        "#005eff",
                        "#6378c2",
                        "#abaf92",
                        "#ffea00",
                        "#d2b48c",
                        "#d9ff00",
                        "#9b0000",
                        "#97aa9a",
                        "#8169d6",
                        "#6d634b",
                    ],
                    hoverBackgroundColor: [
                        "#dea5a4",
                        "#ffd700",
                        "#4eb1c7",
                        "#ffffff",
                        "#f54d4d",
                        "#c3a55b",
                        "#15fd09",
                        "#6ca233",
                        "#ffe599",
                        "#9f9f9f",
                        "#000000",
                        "#352a0f",
                        "#43220b",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#ff3c00",
                        "#000b80",
                        "#a70000",
                        "#ff0000",
                        "#005eff",
                        "#6378c2",
                        "#abaf92",
                        "#ffea00",
                        "#d2b48c",
                        "#d9ff00",
                        "#9b0000",
                        "#97aa9a",
                        "#8169d6",
                        "#6d634b",
                    ]
                }]
        });
    
        const [lightOptions] = useState({
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            }
        });
    
        return (
            <div className='flex flex-col h-7'>
                <div className="card flex justify-content-center ">
                    <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40' }} />
                </div>
            </div>
        )
    }

export default DoughnutChartAge