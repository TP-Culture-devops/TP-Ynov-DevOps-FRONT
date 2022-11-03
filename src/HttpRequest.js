

export default async function HttpRequestGetFiles() {
    const response = await fetch('http://localhost:3000/files');
    const data = await response.json()
    return data
}

export async function HttpRequestGetContentOf(id){
    const response = await fetch('http://localhost:3000/ContentOf?id='+id);
    const data = await response.json()
    return data
}