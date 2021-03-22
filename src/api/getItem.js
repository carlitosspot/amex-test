

const getItem = async (itemNumber) => {
    // db call mock
    await new Promise( res => setTimeout(res, 1000))

    return {
        description: "Best Item",
        price: 99,
        number: 889977
    }

}

export default getItem;
