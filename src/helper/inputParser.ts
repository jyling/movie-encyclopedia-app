
interface TermObject {
    [name :string] : string
}

export const inputParser = (searchTerm: any) => {
    let searchTermArray = searchTerm.split(" ")
    searchTermArray = searchTermArray.map((word: string) => {
        if (word.indexOf(":") != -1) {
            let obj : TermObject = {}
            obj[word.split(":")[0].toLowerCase()] = word.split(":")[1].split("_").join(" ")
            return obj
        }
        return word
    })
    let searchTermName = searchTermArray.filter((term : any) => {
        return typeof term == "string"
    }).join(" ")

    searchTermArray = searchTermArray.filter((term : any) => {
        return typeof term != "string"
    });

    if (searchTermName) searchTermArray.push({ name: searchTermName })
    searchTermArray = searchTermArray.filter((term : any) => {
        return ["id","name","releasedDate","description","characters","genres","directors","writers"].indexOf(Object.keys(term)[0]) != -1
    })
    var returnObj = {}
    searchTermArray.forEach((term : any) => {
        returnObj = {...returnObj, ...term}
    });
    return returnObj;
}