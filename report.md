## Task 0
Choose the patterns you are going to use for this project, and argument which are the benefits but also the cons.

    - we have many providers so that the order object differ from provider to another, in this case we use factory design pattern to create the order object based on provider


## Task 1
Choose a DB that according to you fits best and define an order data model which can be used to store any kind of order (both for physical, and virtual goods).

    - I choose mongo db as it's fixable and i can insert nested objects with multiple object structure

    {
        orderId:"",
        orderName:"",
        orderNumber:"",
        customer:{},
        products:[{}],
        payment:{},
        paymentStatus:"",
        fulfillments:[{}],
        fulfillmentStatus:"",
        shippingAddress:{},
        shippingDetails:{},
        paymentAddress:{},
        createdAt:"",
        updatedAt:"",
        cancelledAt:"",
        processedAt:"",
        totalPrice:"",
        source:"Shopify".
        .....other needed fields
    }

## Task 2
Define a pipeline to handle incoming webhook in order to create/update/delete orders. 
Keep in mind that the volume of incoming webhooks might be very high or very low, according to the time of the day (or special events like black friday).
How are you going to handle failures? 

    - as we'll get many requests we can't handle it immediately, we'll push them to queue and process them later
        or we can use message broker and send the service that handle orders
    - for handling failure :  i think we'll need to push failed requests to a queue and handle them after certain time without blocking the queue,


## Task 3
Create a pseudo repository(ies), we would love to see how you would create the folders hierarchy, file names, and a little bit of pseudo code inside them. 
