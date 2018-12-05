# cs441_project
Developing a new application for my Software Engineering class

We are choosing option 2.

Our main functions are:

CreateUser
SearchProduct
AddToCart
TrackPackage
ProductReviews

CreateUser: User inputs username, password, payment options, and email. Stores info in database (encrypted in some form), creates profile page, allows user to edit their profile.

SearchProduct: Takes user input, searches databse based on tags, shows as a a list, user can click on products to see a more in-depth description, shows availability, shows reviews.

AddToCart: Adds to a stack (or queue), user can view cart, change shipping location, change shipping, and change payment options. User can check out.

ManageOrder: Check origin location, check destination location, cancel package, check stops, check to see if delivered request refund.

PostRecieving: Leave rating, leave review, click helpful/unhelpful, view reviews leave comment on reviews.

## Work that needs to be done
Figure out how a user can log out, deleting products as a vendor, how a user can delete their account,
popping products from the shopping cart, pushing products into the shopping cart, login bonuses.  

## Things that are done
creating a user account, logging into a user account, generating a product grid,
making a product as a vendor, connecting to a database, created routes, created models,
making a review page. 

## How to run and compile for demonstration

1. ```git clone```

2. ```npm install```

3. ```webpack-dev-server```

