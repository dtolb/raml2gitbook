{% method %}
## /accounts/{accountId}/subscriptions/{subscriptionid}

Updates the subscription. This can be be used to update various values (expiry, email address, url, credentials...).
Note that the initial state changes for an order may happen very quickly, so subscribing to an
order once the system creates it needs to account for the fact that the initial state may be
different based on timing factors. It is recommended that the application creating the
subscription check the order status after the subscription is created to ensure the correct initial
condition. <br>
The same rules around valid or possible values as for POSTs apply.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `subscriptionid` | string | true |





## Example Request
```xml
<Subscription>
    <OrderType>
         [portins | portouts | orders | disconnects | dldas | lsrorders | e911s | tnoptions | externalTns] 
    </OrderType>
    <OrderId>
         [UUID] 
    </OrderId>
    <CallbackSubscription>
        <URL>
             [valid publically addressable URL] 
        </URL>
        <Expiry>
             [time in seconds] 
        </Expiry>
        <CallbackCredentials>
            <BasicAuthentication>
                <Username>
                     [username] 
                </Username>
                <Password>
                     [password] 
                </Password>
            </BasicAuthentication>
            <PublicKey>
                 [BASE64 encoded public key] 
            </PublicKey>
        </CallbackCredentials>
    </CallbackSubscription>
</Subscription>
```


{% common %}



{% endmethod %}