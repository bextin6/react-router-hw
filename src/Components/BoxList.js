import Box from "./Box";

function BoxList(){

    const list = [
        {
            name: "Name: Brady, Age: 25, Color: Orange, ID: 1 "
        },
        {
            name: "Name: Bob, Age: 77, Color: Purple, ID: 2"
        },
        {
            name: "Name: Jill, Age: 32, Color: Red, ID: 3"
        }
    ];

    let boxEles = list.map((obj, idx)=>
        <Box key={idx} name={obj.name}/>
    )


    return(
        <div>
            {boxEles}
        </div>
    )
}

export default BoxList;