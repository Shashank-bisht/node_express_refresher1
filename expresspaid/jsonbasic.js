const express = require('express');
const app = express();

// the line is importing the products property from the './data' module and assigning it to a variable also named products in the current script. This allows you to access and use the products data from the './data' module in your code.

const {products} = require('./data')

// res.json() is a method used to send a JSON response to the client when handling an HTTP request. It takes an object as an argument and converts it to JSON format before sending it as the response to the client.

app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
  })

  //const newProducts = products.map((product) => {: This line creates a new constant variable called newProducts. It uses the map method to iterate over each element in the products array. The map method takes a callback function as its argument, which will be executed for each element in the products array.

//(product) => {: This part defines an anonymous arrow function that takes one argument, product. This function will be called for each element in the products array during the mapping process.

   // const { id, name, image } = product: Inside the callback function, this line uses destructuring to extract the id, name, and image properties from the product object. It creates three variables (id, name, and image) and assigns them the corresponding values from the product object.
    
   // return { id, name, image }: After extracting the desired properties, this line constructs a new object literal containing only the id, name, and image properties. It returns this new object as the result for the current element during the mapping process.


app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
      const { id, name, image } = product
      return { id, name, image }
    })
  // res.json converts the array of objects which is newProducts into a JSON object
    res.json(newProducts)
  })



  // to get product using a product id and  :productId is a placeholder where we can provide the product id
  app.get('/api/products/:productId', (req, res) => {
    // getting product id from url parameter 
    const {productId} = req.params;
 
    const singleproduct = products.find((product)=>product.id === Number(productId));  
    // converting productId to number because params give id in string

    if(!singleproduct) {
        return res.status(404).send("Product does not exist")
    }
      res.json(singleproduct)
  })


// : before productId indicates that productId can be a string, number or anything
  // to get price of the product with specific product id 
  app.get('/api/products/:productId/price', (req, res)=>{ //parseInt is used to convert string
    const {productId} = req.params;// Get the productId from the URL
  const product = products.find(item => item.id === Number(productId));
  // storing the id in the product which matches the productId provided by the users

  if (product) {
    res.json({ price: product.price });
  } else {
    res.status(404).send('Product not found');
  }
  })


  // to filter product with starting letter of the name 
  app.get('/api/v1/query',(req,res)=>{
    // console.log(req.query)
    // this line is for extracting search and limit from url
    const {search, limit} = req.query
    let sortedproduct = [...products] // destructring and storing the products in sortedproduct variable

    if(search){
      sortedproduct = sortedproduct.filter((product)=>{
        return product.name.startsWith(search) 
      })
    }
    if(limit){
      sortedproduct = sortedproduct.slice(0,Number(limit))
    }
    if(sortedproduct.length<1){
      // res.status(200).send("no product found")
      return res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(sortedproduct)
    res.send("hello")
  })
app.listen(8080,()=>{
    console.log('server is listening on port 8080')
})


//map is a higher-order function that is available on arrays. It is used to iterate over each element in an array, apply a given function to each element, and then return a new array containing the results of applying that function to each element. The original array is not modified; instead, a new array is created.