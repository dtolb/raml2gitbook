{% method %}
## /accounts/{accountId}/lidbs/{lidbid}

Retrieve information about a specific Lidb Order identified as the resource.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `lidbid` | string | true |






{% common %}


## Example : The descriptive payload for the Lidb Orders query provides a broad range of information about the Lidb Order identified in the URL.  Included amongst the information is:
<ul>
<li>ErrorList - the errors discovered with codes and explanations</li>
<li>various dates</li>
<li>ProcessingStatus(RECEIVED, PROCESSING, COMPLETE, PARTIAL, FAILED) - the overall status of the order</li>
<li>LidbTnGroups - list of LidbTnGroup elements that contains list of TNs with SubscriberInformation, UseType(RESIDENTIAL or BUSINESS) and Visibility (PUBLIC or PRIVATE)</li>
</ul>


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LidbOrder>
    <CustomerOrderId>
        testCustomerOrderId
    </CustomerOrderId>
    <orderId>
        255bda29-fc57-44e8-a6c2-59b45388c6d0
    </orderId>
    <OrderCreateDate>
        2014-05-28T14:46:21.724Z
    </OrderCreateDate>
    <ProcessingStatus>
        RECEIVED
    </ProcessingStatus>
    <CreatedByUser>
        jbm
    </CreatedByUser>
    <LastModifiedDate>
        2014-02-20T19:33:17.600Z
    </LastModifiedDate>
    <OrderCompleteDate>
        2014-02-20T19:33:17.600Z
    </OrderCompleteDate>
    <ErrorList/>
    <LidbTnGroups>
        <LidbTnGroup>
            <TelephoneNumbers>
                <TelephoneNumber>
                    4082213311
                </TelephoneNumber>
            </TelephoneNumbers>
            <FullNumber>
                8042105618
            </FullNumber>
            <SubscriberInformation>
                Fred
            </SubscriberInformation>
            <UseType>
                BUSINESS
            </UseType>
            <Visibility>
                PRIVATE
            </Visibility>
        </LidbTnGroup>
        <LidbTnGroup>
            <TelephoneNumbers>
                <TelephoneNumber>
                    4082212850
                </TelephoneNumber>
                <TelephoneNumber>
                    4082213310
                </TelephoneNumber>
            </TelephoneNumbers>
            <FullNumber>
                8042105760
            </FullNumber>
            <SubscriberInformation>
                Fred
            </SubscriberInformation>
            <UseType>
                RESIDENTIAL
            </UseType>
            <Visibility>
                PUBLIC
            </Visibility>
        </LidbTnGroup>
    </LidbTnGroups>
</LidbOrder>
```

## Example : NOT FOUND - the order id does not exist in the system

* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LidbOrderReportResponse>
    <ResponseStatus>
        <Description>
            The resource does not exist
        </Description>
    </ResponseStatus>
</LidbOrderReportResponse>
```


{% endmethod %}