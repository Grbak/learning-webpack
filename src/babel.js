
async function start() {
    return await Promise.resolve('babel is working');
}

start().then(console.log);