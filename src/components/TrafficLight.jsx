import { useEffect, useState } from "react";
import ".././app.css"

const TrafficLight=()=>{

    const Lights = {
        green:  'green',
        red:      'red',
        yellow:  'yellow'
    }
    const[active,setIsActive] = useState(Lights.green);

    useEffect(()=>{

        switch(active){

            case Lights.red:
            setTimeout(()=>{
                setIsActive(Lights.yellow)
            },4000)
            break;

            case Lights.yellow:
            setTimeout(()=>{
                setIsActive(Lights.green)
            },800)
            break;

            case Lights.green:
            setTimeout(()=>{
                setIsActive(Lights.red)
            },5000)
            break;
        }
            

        // if(Lights.green){
        //     console.log("yellow jalega")
        //     setTimeout(()=>{
        //         setIsActive(Lights.yellow)
        //     },5000);
        // }
        // else if(Lights.yellow){
        //     console.log("red jalega")
        //     setTimeout(()=>{
        //         setIsActive(Lights.red)
        //     },500)
        // }
        // else if(Lights.red){
        //     console.log("green jalega")
        //     setTimeout(()=>{
        //         setIsActive(Lights.green)
        //     },4000)
        // }

    },[active])

    return(
        <>
            <h6>Traffic Light </h6>
            <div className="outer-box">
                <div className="green light-style"
                    style={active!== Lights.green ? {opacity:0.2}:null}
                >
                </div>
                <div className="yellow light-style"
                    style={active!== Lights.yellow ? {opacity:0.2}:null}
                >
                </div>
                <div className="red light-style"
                    style={active!== Lights.red ? {opacity:0.2}:null}
                ></div>
            </div>
        </>
    );


}

export default TrafficLight