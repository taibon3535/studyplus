import {Background} from "../components/Background"
import { Navbar } from "../components/navbar";
import {Timer} from "../components/timer";

export const Pomodoro = () => {
    return(
        <div>
            <Navbar/>
            <Timer learntime={25} lbrake={10} sbrake={5}/>
            <Background/>
        </div>
        );
}
export default Pomodoro;