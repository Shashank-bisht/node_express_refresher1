const Product = require('../models/products')


const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({})
    // here Product is model name for intracting with the database
    res.status(200).json({products})
}

const getAllProducts = async (req, res) => {
   // Destructuring to extract query parameters from the request
    const {featured, company, name, sort, fields, numericFilters} = req.query
    // Initialize an empty queryObject to build the MongoDB query
    const queryObject = {}
     // Check if the 'featured' query parameter is provided
   if(featured){
      // If 'featured' is provided, set it as a query condition
    // Convert the 'featured' value to a boolean
    queryObject.featured = featured === true ? true : false
   }
   // Check if the 'company' query parameter is provided
   if (company) {
    // If 'company' is provided, set it as a query condition
    queryObject.company = company;
  }
  
  if(name){
    queryObject.name = { $regex: name, $options: 'i' };
  }

 if(numericFilters){
  const operatorMap = {
    '>': '$gt',
    '>=': '$gte',
    '=': '$eq',
    '<': '$lt',
    '<=': '$lte',
  };
  const regEx = /\b(<|>|>=|=|<|<=)\b/g;
  let filters = numericFilters.replace(
    regEx,
    (match) => `-${operatorMap[match]}-`
  );
  filters = filters.split(',').forEach((item) => {
    const [field, operator, value] = item.split('-');
    if (options.includes(field)) {
      queryObject[field] = { [operator]: Number(value) };
    }
  });
 }


  // option i for case-insensitive(upper case or lower case) your wish
   let  result =  Product.find(queryObject)
   
   // sort
  if(sort){
   const sortList = sort.split(',').join(' ')
   result = result.sort(sortList)
  }
  // else{
  //   result = result.sort('createdAt')
  // }


  if(fields){
    // using join because .select(firstparameter secondparameter)
    const fieldsList = fields.split(',').join(' ')
    result = result.select(fieldsList)
  }

// pagination
  const page = Number(req.query.page) || 1
 const limit = Number(req.query.limit) || 10
  const skip = (page - 1) * limit;

  
result = result.skip(skip).limit(limit)


  const products = await result
    res.status(200).json({products, nbHits: products.length})
    }


module.exports = {getAllProducts, getAllProductsStatic}