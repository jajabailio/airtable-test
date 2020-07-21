
module.exports = async function (data, result) {
    console.log('waiting 2 seconds');
    await timeout();
    console.log('data: ', data)
    return result;
};

function timeout() {
    return new Promise(resolve => setTimeout(resolve, 2000));
}