{% method %}
## /accounts/{accountId}/disconnects

retrieve a list of disconnect orders that is associated with an account


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `page` | string | true | The disconnect order-id of the first record on the page.   "1" is used as a convention for the first disconnect order in the collection |
| `size` | integer | true | The number of records that should be returned by the query |
| `userid` | string | true | The user ID associated with disconnected phone numbers |
| `status` | string | true | The status of the order |
| `startdate` | date | true | Retrieves all phone numbers disconnected after this date. The start date also requires the end date to be specified. |
| `enddate` | date | true | Retrieves all phone numbers disconnected before this date. The end date also requires the start date to be specified. |




{% common %}


## Example : A list of Disconnect orders

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ResponseSelectWrapper>
    <ListOrderIdUserIdDate>
        <TotalCount>
            7
        </TotalCount>
        <Links>
            <!-- SNIP -->
        </Links>
        <OrderIdUserIdDate>
            <CountOfTNs>
                1
            </CountOfTNs>
            <userId>
                smckinnon
            </userId>
            <lastModifiedDate>
                2014-01-10T17-34-15Z
            </lastModifiedDate>
            <OrderId>
                6d7da966-e071-4741-b31c-1d8932f4b8da
            </OrderId>
            <OrderType>
                disconnect
            </OrderType>
            <OrderDate>
                2014-01-10T17-34-15.797Z
            </OrderDate>
            <OrderStatus>
                COMPLETE
            </OrderStatus>
            <TelephoneNumberDetails>
                <!-- SNIP -->
            </TelephoneNumberDetails>
        </OrderIdUserIdDate>
        <OrderIdUserIdDate>
            <CountOfTNs>
                1
            </CountOfTNs>
            <userId>
                jbm
            </userId>
            <lastModifiedDate>
                2013-12-04T21-59-32Z
            </lastModifiedDate>
            <OrderId>
                4ffe9262-1965-4479-a1d5-b8584440667d
            </OrderId>
            <OrderType>
                disconnect
            </OrderType>
            <OrderDate>
                2013-12-04T21-59-32.243Z
            </OrderDate>
            <OrderStatus>
                COMPLETE
            </OrderStatus>
            <TelephoneNumberDetails>
                <!-- SNIP -->
            </TelephoneNumberDetails>
        </OrderIdUserIdDate>
    </ListOrderIdUserIdDate>
</ResponseSelectWrapper>
```

## Example : No disconnect orders are present on the indicated account

* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Links>
    <first>
           Link description  
    </first>
</Links>
```


{% endmethod %}