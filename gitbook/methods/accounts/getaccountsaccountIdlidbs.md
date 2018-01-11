{% method %}
## /accounts/{accountId}/lidbs

Retrieve a list of the LIDB orders that are associated with the account.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `tn` | string | true | A Telephone Number (TN) that is referenced in the order |
| `lastModifiedAfter` | string | true | Checks the order's last modified date against this value. Orders that have a modification date after this date will be included. Format is yyyy-MM-dd |




{% common %}


## Example : OK <br> a 200 OK indicates that there are LIDB orders associated with the account.
The 200 OK response payload provides a list of all LIDB orders that have been issued against that account.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0"?>
<ResponseSelectWrapper>
    <ListOrderIdUserIdDate>
        <TotalCount>
            2122
        </TotalCount>
        <OrderIdUserIdDate>
            <accountId>
                9999999
            </accountId>
            <CountOfTNs>
                0
            </CountOfTNs>
            <lastModifiedDate>
                2014-02-25T16:02:43.195Z
            </lastModifiedDate>
            <OrderType>
                lidb
            </OrderType>
            <OrderDate>
                2014-02-25T16:02:43.195Z
            </OrderDate>
            <orderId>
                abe36738-6929-4c6f-926c-88e534e2d46f
            </orderId>
            <OrderStatus>
                FAILED
            </OrderStatus>
            <TelephoneNumberDetails/>
            <userId>
                team_ua
            </userId>
        </OrderIdUserIdDate>
        <!-- ...SNIP... -->
        <OrderIdUserIdDate>
            <accountId>
                9999999
            </accountId>
            <CountOfTNs>
                0
            </CountOfTNs>
            <lastModifiedDate>
                2014-02-25T16:02:39.021Z
            </lastModifiedDate>
            <OrderType>
                lidb
            </OrderType>
            <OrderDate>
                2014-02-25T16:02:39.021Z
            </OrderDate>
            <orderId>
                ba5b6297-139b-4430-aab0-9ff02c4362f4
            </orderId>
            <OrderStatus>
                FAILED
            </OrderStatus>
            <userId>
                team_ua
            </userId>
        </OrderIdUserIdDate>
    </ListOrderIdUserIdDate>
</ResponseSelectWrapper>
```


{% endmethod %}