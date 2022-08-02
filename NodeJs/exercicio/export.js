module.exports = getFlag = (string) => {

    const index = process.argv.indexOf(string) + 1

    return process.argv[index]

}
