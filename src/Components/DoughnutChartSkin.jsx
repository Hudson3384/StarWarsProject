
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';




const DoughnutChartSkin = ({people}) => {
        let skinsPeople = people.map((e)=>(e.skin_color))
        let skinsLabels = [...new Set(skinsPeople)]
        let skinsData =  []
        
        for(let i of skinsLabels) {
            skinsData.push(skinsPeople.filter(x => x === i).length);
        }

        const [chartData] = useState({
            labels: skinsLabels,
            datasets: [
                {
                    data: skinsData,
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
            <div className="card flex justify-content-center ">
                <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40' }} />
            </div>
        )
    }

export default DoughnutChartSkin