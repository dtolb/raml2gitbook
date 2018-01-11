{% method %}
## /callbacks/notificationCallbackApi

The POST to the callback API contains a summary of the order that is independent of the type of the order that caused the event that in turn caused the notification callback.  This requires that the customer's end system place an API call to the Bandwidth Dashboard to gather additional details on the change to the order if that is important.  <br><br>
This approach was taken for two reasons:
<ul>
<li>some (or many) of the notifications might not require action.</li>
<li>since orders contain different information, providing order-specific information would cause an undesirable tight linkage between notifications and every type of order, mandating API changes whenever the data associated with an order changed. </li>
</ul><br><br>
The payload of the POST contains:
<ul>
<li> the Subscription ID that the notification is in response to.</li>
<li> the type of order that the notification applies to.</li>
<li> the order ID of the order that has changed </li>
<li> the new state of the order </li>
<li> a message if one was attached as part of the state change.  This will often be present in error cases.</li>
<li> the body of any note that was attached to the order, if applicable</li>
<li> list of the completed telephone numbers for Port-in/Port-out/New Number/Disconnect orders in terminal state</li>
</ul><br><br>
The Payload follows








## Example Request
```xml
<?xml version="1.0"?>
<Notification>
    <SubscriptionId>
        ...
    </SubscriptionId>
    <OrderType>
        portins | portouts | orders | disconnects | dldas | lsrorders | e911s | tnoptions
    </OrderType>
    <OrderId>
        ...
    </OrderId>
    <!-- for order update events -->
    <Status>
        COMPLETE | FAILED | PARTIAL | EXCEPTION ... 
    </Status>
    <!-- for order update events -->
    <Message>
        ...
    </Message>
    <!-- for note events -->
    <Note>
        ...
    </Note>
    <!-- for portins/portouts/orders/disconnects OrderTypes -->
    <CompletedTelephoneNumbers>
        <TelephoneNumber>
             ... 
        </TelephoneNumber>
        <!-- ... -->
    </CompletedTelephoneNumbers>
</Notification>
```


{% common %}



{% endmethod %}