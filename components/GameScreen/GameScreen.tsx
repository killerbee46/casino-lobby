import { BetControl } from "./BetControl";
import { Controls } from "./Controls";
import { StartButton } from "./StartButton";
import './GameScreen.css'
import { Container } from "../Container/Container";
import { Toast } from "@ant-design/react-native";

export function GameScreen (){
    return (
            <div>
            <div
            style={{
                background:`url('https://imgs.search.brave.com/HH-z2nij_q4PtfWZVEtCiXjs7-1bYHcNxWRPkeOiT3o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2luYWRheWNhc2lu/by5ldS9lbi9maWxl/L2ltYWdlL3JvdWxl/dHRlNUNhc2lub0dh/bWUuanBn')`,
                height:200,
                width:'100%',
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat'
            }}
            ></div>
        <Container>
            <div className="flex justify-between" style={{width:'100%'}}>
                <Controls />
                <div onClick={()=> Toast.success("Successful")}>
                <StartButton />
                </div>
                <BetControl />
            </div>
        </Container>
        </div>
    )
}