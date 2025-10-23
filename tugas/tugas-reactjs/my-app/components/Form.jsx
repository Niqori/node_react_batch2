import { Input } from "./Input";

export const Form = (props) => {
    const {data} = props
    return(
        <form action="">
            {data.map((todo,index) => (
                <Input todo={todo} key={index} />
            ))}
            <button>SEND</button>
        </form>
    )
}