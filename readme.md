#Market Data REST API

The Market Data rest API makes it possible to search and sort through information about market data points.

##Queries

The key name of sort and order are reserved keywords.  At this time, all other keys will be used as filters.

For example

`?sort=planet&order=asc&planet=a` 

would return a list of planets with the letter 'a' in their name, sorted by planet name in ascending order.


### Sorting

Use the `sort` and `order` keywords for sorting and ordering, respectively.

### Returns
The return on a successful query call will be a simple JSON body comprised purely of a data array.

`[{"_id":"57f98bd6b09ddae010ec8dad","date":"4/1/3104","planet":"Harmony","region":"Republic","__v":0,"commodities":[{"_id":"57f98bd6b09ddae010ec8da3","name":"food","cost":144},{"_id":"57f98bd6b09ddae010ec8da4","name":"clothing","cost":182},{"_id":"57f98bd6b09ddae010ec8da5","name":"metal","cost":391},{"_id":"57f98bd6b09ddae010ec8da6","name":"equipment","cost":523},{"_id":"57f98bd6b09ddae010ec8da7","name":"plastic","cost":294},{"_id":"57f98bd6b09ddae010ec8da8","name":"medical","cost":660},{"_id":"57f98bd6b09ddae010ec8da9","name":"industrial","cost":719},{"_id":"57f98bd6b09ddae010ec8daa","name":"electronics","cost":767},{"_id":"57f98bd6b09ddae010ec8dab","name":"heavyMetals","cost":972},{"_id":"57f98bd6b09ddae010ec8dac","name":"luxuryGoods","cost":1251}]},{"_id":"57f98c17b09ddae010ec8db8","date":"4/3/3014","planet":"New India","region":"Republic","__v":0,"commodities":[{"_id":"57f98c17b09ddae010ec8dae","name":"food","cost":135},{"_id":"57f98c17b09ddae010ec8daf","name":"clothing","cost":236},{"_id":"57f98c17b09ddae010ec8db0","name":"metal","cost":226},{"_id":"57f98c17b09ddae010ec8db1","name":"equipment","cost":527},{"_id":"57f98c17b09ddae010ec8db2","name":"plastic","cost":349},{"_id":"57f98c17b09ddae010ec8db3","name":"medical","cost":762},{"_id":"57f98c17b09ddae010ec8db4","name":"industrial","cost":842},{"_id":"57f98c17b09ddae010ec8db5","name":"electronics","cost":801},{"_id":"57f98c17b09ddae010ec8db6","name":"heavyMetals","cost":955},{"_id":"57f98c17b09ddae010ec8db7","name":"luxuryGoods","cost":1274}]},{"_id":"57fcc265bd27e16231d40996","date":"3/24/3014","planet":"Glaze","region":"Republic","__v":0,"commodities":[{"_id":"57fcc265bd27e16231d4098c","name":"food","cost":123},{"_id":"57fcc265bd27e16231d4098d","name":"clothing","cost":290},{"_id":"57fcc265bd27e16231d4098e","name":"metal","cost":558},{"_id":"57fcc265bd27e16231d4098f","name":"equipment","cost":408},{"_id":"57fcc265bd27e16231d40990","name":"plastic","cost":351},{"_id":"57fcc265bd27e16231d40991","name":"medical","cost":810},{"_id":"57fcc265bd27e16231d40992","name":"industrial","cost":596},{"_id":"57fcc265bd27e16231d40993","name":"electronics","cost":744},{"_id":"57fcc265bd27e16231d40994","name":"heavyMetals","cost":1108},{"_id":"57fcc265bd27e16231d40995","name":"luxuryGoods","cost":1024}]}]`
