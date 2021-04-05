# Trivigo , ETL , GraphqL , Typescript 
## Create By Mazdak Nazemi
this is implementaion for an interview task base on trivigo request.

#

## consideration :

- for simplicity we only used base packages and no generator or other good things in Graph world.

- author can do this task with many different stacks and packages .

- you always can add more layer and abstraction to any source code but we consider here to show things in simple way .

- test and all other good things can add in future .

- because api currently do simple thing we use only Master branch for git and ...

#

## Structure and Folders :

docs : simple place to put upcoming stuff and diagrams ... for future.

server : base implementaion live there which contains 
  - env : environment variables
  - Makefile : commands for bootstrap
  - Csvfile : raw file
  - setting and routine files ( node_ ... , package.json and ... )
  - src : impelementaion
      
      - graphql : contain business files for grapql
      - services : contain logic for load csv and bootstrap data
      - types : for typescript consumption
      - utils : utility and helpers
      - config.ts : load up env vars
      - env.d.ts : shim for env
      - index.ts : server runner!
#    


## What We Have ?
our api leverage apollo server on server init it call dataBootStraper
function which is abstraction layer over Redis and all data loader

it also check of pre-exist data base on file size change and base
on that it make decision to reload data loaders or not and 

at final step it clean data in context of node.



dataloader services leverage compostion design pattern and SOLID for reusablity
and simplicity .



for graph side things we used schema first design and make typeDefs
base on request 

we only show ability of author to produce , develop and conduct project 

for more good things need more base descriptions ( more queries and Mutations ) .

the way info save in redis can update base on our upcoming queries

current query respond in 1ms or 2ms .

#

### Conclusion :

here we tried to demonstrate development ability to leverage best practices vs fully implemetaion and warmly please consider author context ( live in country with 500% inflation rate ) and he need to 
respond to many tasks in life .

any question or ambiguity  I AM HERE :)

Best Regards . 
Mazdak Nazemi .
