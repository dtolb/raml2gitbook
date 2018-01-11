{% method %}
## /accounts/{accountId}/subscriptions

GET is used to retrieve all subscriptions for the account (including email and callback subscriptions).
The returned information reflects the subscription as it has been defined, and for callback subscriptions will reflect the status of the latest attempt to place the callback.  The <Status> element will indicate if an error is being encountered when the Bandwidth Dashboard attempts to place the callback.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |






{% common %}


## Example : The subscriptions retrieval request will return a list of the subscriptions that are created on this account.

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SubscriptionsResponse>
    <Subscriptions>
        <Subscription>
            <SubscriptionId>
                0b3aa54d-0ce5-4f5b-bd75-1c30967b197f
            </SubscriptionId>
            <OrderType>
                orders
            </OrderType>
            <EmailSubscription>
                <Email>
                    bwtest@gmail.com
                </Email>
                <DigestRequested>
                    NONE
                </DigestRequested>
            </EmailSubscription>
        </Subscription>
        <Subscription>
            <SubscriptionId>
                ddf05927-780f-4f8f-89ab-e581f52f5f20
            </SubscriptionId>
            <CallbackSubscription>
                <URL>
                    "https://company.com/iriscallback"
                </URL>
                <Expiry>
                    30000
                </Expiry>
                <Status>
                    some message containing status code and response body of last callback
                </Status>
                <CallbackCredentials>
                    <BasicAuthentication>
                        <Username>
                            iris
                        </Username>
                    </BasicAuthentication>
                </CallbackCredentials>
            </CallbackSubscription>
        </Subscription>
    </Subscriptions>
</SubscriptionsResponse>
```


{% endmethod %}