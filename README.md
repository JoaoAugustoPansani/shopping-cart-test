# Shopping Cart

We need to create a solution for an online shopping cart.

The rules and requirements are described in the sections below.

![Wireframe](https://cdn.discordapp.com/attachments/649961050287898655/653636464080453632/shopping-cart-challenge.jpg)

### Available Products

We should be able to list the products that are available. The quantity of each product should be updated as the user adds units to the shopping cart. Also, we expect that a product becomes unavailable if its out of stock or all of its units were added to the shopping cart.

Examples:

- Banana, price: $10 per kg, available: 10
- Apple, price: $20 per kg, available: 15
- Orange, price: $30 per kg, available: 8
- Mango, price: $15 per kg, available: 20

### Shipping rules

All shipping calculations are made over the subtotal WITHOUT the shipping costs and WITHOUT any discounts.

- For purchases above R$400.00 the shipping is free!
- For purchases below or equal 10kg the shipping price is: $30.
- Each 5kg above 10kg will add $7 to the shipping price.

### The system should support these kinds of vouchers

- Percentual voucher: vouchers that reduce an amount in percentage of the cost on subtotal.
- Fixed voucher: vouchers with fixed amounts that should reduce over the TOTAL.
- Free Shipping: make the shipping price become 0 when applied, and should have a minimum subtotal requirement

Examples:

- #30OFF: percentual voucher of 30%
- #100DOLLARS: fixed voucher of $100.00
- #SHIPIT: free shipping voucher with minimum value of $300.50

### Requirements

1. We should create an endpoint to list all available products including "id", "name", "price", "available_units"
2. We should create an endpoint to list all available vouchers including "id", "code", "type", "amount", "min_value"
3. We should create an endpoint to return a cart for the user session
4. We should create an endpoint to include itens into the cart
5. We should create an endpoint to remove items from the cart
6. We should create an endpoint to apply coupons
7. We should create an endpoint to remove coupons
8. We should create an endpoint to process the purchase

### Business rules

##### Related to the requirement of number #3

1. If there is no cart for the user session creates a new one
2. You're going to receive a token representing the "user_session_id"

##### Related to the requirement of number #5

1. We should remove the cart if the total of itens is equal to zero

##### Related to the requirement of number #8

1. In order to process the purchase we should update the number of available units
2. Remove the cart

### Must have

1. Database versioning
2. Tests
3. API Documentation (Swagger or Postman files)
