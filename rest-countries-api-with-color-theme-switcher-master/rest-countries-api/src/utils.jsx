export async function fetchData(){
    let dataVal = ""
    const res = await fetch("../data.json")
        .then(res => res.json())
        .then(data => dataVal = data)
    
        return dataVal;
}

export const searchData = () => {

}