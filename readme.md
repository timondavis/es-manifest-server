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
