const ProductInfo = ({ num, name }) => {
  if (num == 1) {
    return (
      <p className="w-full max-w-[500px] mt-4">
        {name} is one of the best selling product at Lasom. It’s unique stone
        crafting makes it exceptionally beautiful which has won the heart of
        many of our customers.{' '}
      </p>
    )
  } else {
    return (
      <p className="w-full max-w-[500px] mt-4">Comes with a 2yr Warranty.</p>
    )
  }
}

export default ProductInfo
