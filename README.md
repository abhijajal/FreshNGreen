# [Online Grocery Store]()

Fresh & Green is the name of the Online Grocery Store project. It allows the user to search and filter on all the available items, see a detail description of every item along with the images, add items to the cart, option to see the past purchase history and also print the receipt after checkout. Additionally, the admin user can Insert new items, Update Items, Remove Items (Soft Delete) and look at the Archive Inventory of all the Items, along with the normal user functionalities.
Assumptions made:
• Email address is the Username of the user
• All items, are sold in terms of no of quantity instead of oz. or lb. (Since, all the vegetables, fruits and fluids are wrapped/filled into bags and containers)
• User must enter a delivery address while checking out.
• Admin username is admin@admin.com.

Note:- The Requirements for this projects are in requirements.pdf file.

## Download and Installation

Before using this website, install [NodeJs,MongoDB,Nodemon,Express](https://blog.udemy.com/node-js-tutorial/#0) and [Mongoose](https://stackoverflow.com/questions/4950144/how-to-install-mongoose-driver-on-nodejs).

## Usage

To run the website, follow the below steps:

1.First create the Mongo Database using the below DB Design or you can use FreshNGreen Mongodump in the path "/Dummy Data/Database files/" with mongo restore command along with dummy items collections containing items.
2.Store Pictures(i.e item images and banners) in the folder "Source/FreshNGreen/public/items". If Mongodump is used, store pictures from "/Dummy Data/Pictures/" into views folder "Source/FreshNGreen/public/items".Also 3 banners are used by default for carousel i.e banners can be named banner1.jpg,banner2.jpg etc.You can add more images in carousel.
3.Next,Move the current directory to the FreshNGreen folder under Source folder and run node server i.e nodemon.
4.URL localhost:4000 can be used in any browser to use the Online Grocery Store.

Note:- 
I.Register with username "admin@admin.com" to use the admin account.
II.Grocery images should be saved with item name i.e item-name.jpg.
III.Remove button in the archive inventory page of admin account is used to permanently remove the item from database. 
IV.There should be only two tags to the product and it should be in the format <category>,<brand-name>.

Explore the features with Good User-Interface & mobile friendly design:)

## Database Design

Database Type: NoSQL(MongoDB)
Database Name: FreshNGreen
Collection List: items,sessions,transactions,users(Screenshots of Collection images in dbstructure.pdf)


### items

Each document in items looks like the image in dbstructure PDF file.Each document in Items represents a an item in the grocery store. "tags" are used to filter the item, "name" and "description" are used for searching and "available" is used for soft delete.

### sessions

Each document in sessions looks like the image in dbstructure PDF file.This Documents are basically used to store session variables and maintaining the cart data. (Note: This documents are automatically created when a user is logged in by “express-session” package)

### transactions

Each document in transactions looks like the image in dbstructure PDF file.After the user logs out,website stores all the details related to that particular transaction along with that username. This documents are later used to display purchase history of that particular user.

### users

Each document in sessions looks like the image in dbstructure PDF file.The Website stores the username and encrypted password of that particular user. User with username admin@admin.com is considered as an admin user.

## Web Technologies used

NodeJs,Express,MongoDB,Javascript,JQuery,HTML,CSS,Bootstrap.

## Screenshots

Screenshots of the website is in the file screenshots.pdf

## Contributors

The contributors for this project are [Sreekar Balabommala](https://github.com/sreekar16) and [Abhishek Jajal](https://github.com/abhijajal).
