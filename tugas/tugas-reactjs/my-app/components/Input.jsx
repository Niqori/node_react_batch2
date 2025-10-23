export const Input = (props) => {
    return (
        <>
        <div className="container-input">
            <input type="checkbox" />
            <span>{props.todo}</span>
        </div>
        </>
    )
}