# README #

SHOPCART_FRONTEND is part of is part of a three-tier system called ShopCart. It's a web application implementing a ShopCart with an **Optimistich Locking** strategy.   

The system provides user authentication via Json Web Token \([JWT](https://jwt.io/)\).  

[JBoss](https://www.redhat.com/it/technologies/jboss-middleware/web-server) has been used as Application Server while [PostgreSQL](https://www.postgresql.org/) has been used as **OR-DBMS**.   

You can find:
   
* **Backend**'s implementation [here](https://github.com/t0re199/SHOPCART_BACKEND)   
   
* **Frontend**'s implementation [here](https://github.com/t0re199/SHOPCART_FRONTEND)   

* **Relation**'s schema [here](https://github.com/t0re199/SHOPCART_SCHEMAS)   


## SHOPCART_FRONTEND ##

A **Single Page Application** has been implemented in **Angular**.  
Angular's routing mechanism has been used.      
A local cache implementation for handling products is being provided. This allows to reduce the load on server.  
    
Npm has been used as package manager.     
