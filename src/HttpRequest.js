

export default async function HttpRequestGetFiles() {
    const response = await fetch('http://localhost:3000/files');
    const data = await response.json()
    //console.log("Get data ", data);
    return data
}

