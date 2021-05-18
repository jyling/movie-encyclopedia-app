
interface TermObject {
    [name :string] : string
}
//searchTerm = characters:tony_stark test
export const inputParser = (searchTerm: any) => {
    let searchTermArray = searchTerm.split(" ")
    // [ characters:tony_stark, test]
    searchTermArray = searchTermArray.map((word: string) => {
        if (word.indexOf(":") != -1) {
            let obj : TermObject = {}
            obj[word.split(":")[0].toLowerCase()] = word.split(":")[1].split("_").join(" ")
            return obj
        }
        return word
    })
    // [ { characters: "tony_stark" }, "test"]
    let searchTermName = searchTermArray.filter((term : any) => {
        return typeof term == "string"
    }).join(" ")
    // [ "test"]

    searchTermArray = searchTermArray.filter((term : any) => {
        return typeof term != "string"
    });
    // [ { characters: "tony_stark" }]

    if (searchTermName) searchTermArray.push({ name: searchTermName })
    // [ { characters: "tony_stark" }, {name: "test"}]

    searchTermArray = searchTermArray.filter((term : any) => {
        return ["id","name","releasedDate","description","characters","genres","directors","writers"].indexOf(Object.keys(term)[0]) != -1
    })
    var returnObj = {}
    searchTermArray.forEach((term : any) => {
        returnObj = {...returnObj, ...term}
    });
    return returnObj;
}