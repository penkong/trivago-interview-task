# Trivigo , ETL , GraphqL , Typescript 
## Create By Mazdak Nazemi

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

## Usage :

step 1 :
```
// check env file .
cd server 
```

step 2 :
```
cd server 
make redis
```
step 3 :
```
npm install
```
step 4 :
```
// build , test and other scripts ... also can added.
npm run dev
```

#
