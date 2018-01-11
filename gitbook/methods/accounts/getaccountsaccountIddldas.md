{% method %}
## /accounts/{accountId}/dldas

Retrieve a list of the DLDA orders that are associated with the account.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `tn` | string | true | A Telephone Number (TN) that is referenced in the order |
| `lastModifiedAfter` | string | true | Checks the order's last modified date against this value. Orders that have a modification date after this date will be included. Format is yyyy-MM-dd |
| `modifiedDateFrom` | string | true | For Date-based searches, the starting date of a date range that will be used to find DLDA Orders that were modified within the date range.  It is in the form yyyy-MM-dd. |
| `modifiedDateTo` | string | true | For Date-based searches, the ending date of a date range that will be used to find DLDA Orders that were modified within the date range.  It is in the form yyyy-MM-dd. |




{% common %}


## Example : OK <br> a 200 OK indicates that there are DLDA orders associated with the account.
The 200 OK response payload provides a list of all DLDA orders that have been issued against that account.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ResponseSelectWrapper>
    <ListOrderIdUserIdDate>
        <TotalCount>
            3
        </TotalCount>
        <OrderIdUserIdDate>
            <accountId>
                14
            </accountId>
            <CountOfTNs>
                2
            </CountOfTNs>
            <userId>
                team_ua
            </userId>
            <lastModifiedDate>
                2014-07-07T10:06:43.427Z
            </lastModifiedDate>
            <OrderType>
                dlda
            </OrderType>
            <OrderDate>
                2014-07-07T10:06:43.427Z
            </OrderDate>
            <orderId>
                37a6447c-1a0b-4be9-ba89-3f5cb0aea142
            </orderId>
            <OrderStatus>
                FAILED
            </OrderStatus>
        </OrderIdUserIdDate>
        <OrderIdUserIdDate>
            <accountId>
                14
            </accountId>
            <CountOfTNs>
                2
            </CountOfTNs>
            <userId>
                team_ua
            </userId>
            <lastModifiedDate>
                2014-07-07T10:05:56.595Z
            </lastModifiedDate>
            <OrderType>
                dlda
            </OrderType>
            <OrderDate>
                2014-07-07T10:05:56.595Z
            </OrderDate>
            <orderId>
                743b0e64-3350-42e4-baa6-406dac7f4a85
            </orderId>
            <OrderStatus>
                RECEIVED
            </OrderStatus>
        </OrderIdUserIdDate>
        <OrderIdUserIdDate>
            <accountId>
                14
            </accountId>
            <CountOfTNs>
                2
            </CountOfTNs>
            <userId>
                team_ua
            </userId>
            <lastModifiedDate>
                2014-07-07T09:32:17.234Z
            </lastModifiedDate>
            <OrderType>
                dlda
            </OrderType>
            <OrderDate>
                2014-07-07T09:32:17.234Z
            </OrderDate>
            <orderId>
                f71eb4d2-bfef-4384-957f-45cd6321185e
            </orderId>
            <OrderStatus>
                RECEIVED
            </OrderStatus>
        </OrderIdUserIdDate>
    </ListOrderIdUserIdDate>
</ResponseSelectWrapper>
```


{% endmethod %}