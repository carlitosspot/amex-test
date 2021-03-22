
const CUSTOMERS = {
    12345: {
        name: "Paul Kleimeyer",
        companyName: "Amex",
        customerNumber: 12345
    }
}


const getUser = async (customerNumber) => {
    // db call mock
    await new Promise( res => setTimeout(res, 1000))

    return CUSTOMERS[customerNumber];
}

export default getUser;
