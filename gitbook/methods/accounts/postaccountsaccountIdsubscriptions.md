{% method %}
## /accounts/{accountId}/subscriptions

A POST on the /subscriptions resource is used to request a new subscription for an account.<br>
The POST creates a new e-mail or callback subscription. A well-formed POST will create a subscription resource, and return a
subscription ID as part of the location header. The ID is used to uniquely identify the subscription.
The user should submit the desired e-mail address for notifications and the frequency with which he wants to get the updates:
DAILY (for daily digests) or NONE (immediately after events). OrderId is optional. If OrderId is specified only notifications will
be sent for events related to that order. If OrderId is omitted, notifications will be sent related to events of all orders of the specified type.<br>
For email subscriptions use a body like this:<br>
```
<Subscription>
    <OrderType> [ portins | portouts | orders | disconnects | dldas | lsrorders | e911s | tnoptions | externalTns] </OrderType> <!-- required -->
    <OrderId> [ UUID ] </OrderId> <!-- optional, if provided notifications will only be sent for events regarding this specific order, if omitted notifications regarding events for all orders of the specified type will be sent -->
    <EmailSubscription>
        <Email> [ email address] </Email>
        <DigestRequested> [ NONE | DAILY ] </DigestRequested> <!-- required -->
    </EmailSubscription>
</Subscription>
```
For callback subscriptions use a body like this:<br>
```
<Subscription>
    <OrderType> [portins | portouts | orders | disconnects | dldas | lsrorders | e911s | tnoptions | externalTns] </OrderType> <!-- same rules and values as above -->
    <OrderId> [UUID]</OrderId> <!-- same rules and value as above -->
    <CallbackSubscription>
        <URL> [valid publically addressable URL] </URL> <!-- the URL that notifications should get POSTed to, HTTPS is highly recommended -->
        <Expiry> [time in seconds] </Expiry> <!-- the number of seconds after which to expire this subscription -->
        <CallbackCredentials> <!-- optional, but recommended; these credentials will be used to when authenticating with the notification receiving server -->
            <BasicAuthentication> <!-- optional, the endpoint may be secured with BASIC auth -->
                <Username> [username] </Username> <!-- max 100 characters -->
                <Password> [password] </Password> <!-- the password will be stored encrypted and never returned via the API -->
            </BasicAuthentication>
            <!-- optional, a BASE64 encoded public key matching the notification receiving server -->
            <PublicKey>LS0tLS1CRUdJTiBDRVJUSUZJ [...] kQgQ0VSVElGSUNBVEUtLS0tLQ0K</PublicKey>
        </CallbackCredentials>
    </CallbackSubscription>
</Subscription>
```
The credentials used to impose security on the callbacks are defined in the <CallbackCredentials> element.  The Basic authentication is straightforward, but the <PublicKey> requires a little more explanation.  Please see the document to the left on Mutual Authentication for CallBacks.<p>
When an event happens that had been subscribed to with a callback subscription (order update, note added to order), the following payload
will be POSTed to the URL of the callback subscription.<br>More detail can be found in the API documentation for the fictitious endpoint /callbacks
```xml
<Notification>
    <SubscriptionId>...</SubscriptionId>
    <OrderType>portins | portouts | orders | disconnects | dldas | lsrorders | e911s| tnoptions | externalTns</OrderType>
    <OrderId>...</OrderId>
    <!-- for order update events -->
    <Status>COMPLETE | FAILED | PARTIAL | EXCEPTION ... </Status>
    <!-- for order update events -->
    <Message>...</Message>
    <!-- for note events -->
    <Note>...</Note>
    <!-- for portins/portouts/orders/disconnects OrderTypes -->
    <CompletedTelephoneNumbers>
        <TelephoneNumber> ... </TelephoneNumber>
        <!-- ... -->
    </CompletedTelephoneNumbers>
</Notification>
```



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |





## Example Request
```xml
<!-- for an email subscription -->
```


{% common %}



{% endmethod %}