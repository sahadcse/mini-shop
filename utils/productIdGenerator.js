let lastId = 0;

function generateProductId() {
    lastId += 1;
    return lastId;
}

module.exports = generateProductId;