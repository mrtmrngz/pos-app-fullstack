const priceFormat = (price) => {
    return (price).toLocaleString('en-US', {
        style: 'currency',
        currency: "USD"
    })
}

export default priceFormat