{% method %}
## /accounts/{accountId}/e911s

Retrieve a list of the E911 orders that are associated with the account.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `status` | string | true | The status of the E911 order being searched for. |
| `tn` | string | true | A Telephone Number (TN) that is referenced in the order |
| `callBack` | string | true | A callback Telephone Number (TN) used for 911 purposes. |
| `aeui` | string | true | Alternate End-user Identifier used to identify the calling party for 911 purposes. |
| `customerOrderId` | string | true | The Customer Order ID is an ID assigned by the account owner to provide a reference number for the E911 order. |
| `modifiedDateFrom` | string | true | For Date-based searches, the starting date of a date range that will be used to find E911 Orders that were modified within the date range.  It is in the form yyyy-MM-dd. |
| `modifiedDateTo` | string | true | For Date-based searches, the ending date of a date range that will be used to find E911 Orders that were modified within the date range.  It is in the form yyyy-MM-dd. |
| `createdDateFrom` | string | true | Checks the order's creation date against this value. Orders that have a creation date after this date will be included. Format is yyyy-MM-dd |
| `createdDateTo` | string | true | Checks the order's creation date against this value. Orders that have a creation date before this date will be included. Format is yyyy-MM-dd |
| `lastModifiedAfter` | string | true | Checks the order's last modified date against this value. Orders that have a modification date after this date will be included. Format is yyyy-MM-dd |
| `lastModifiedBy` | string | true | This is the user-name of the user that last modified the E911 Order. |
| `orderIdFragment` | string | true | This search parameter represents the internal Bandwidth Dashboard ID that has been assigned to the E911 Order.  This parameter is the first few characters of the internal ID - the entire ID does not need to be specified. |
| `orderDetails` | boolean | true | If set to true, a list of order details will be displayed instead the summary information. |




{% common %}


## Example : The descriptive payload for the E911 Orders query provides a broad range of information about the E911  Orders found by the query, including the data associated with the order, the state of the order, and details about the order if it was successful.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<E911Orders>
    <TotalCount>
        2
    </TotalCount>
    <E911OrderSummary>
        <accountId>
            1
        </accountId>
        <CountOfTNs>
            1
        </CountOfTNs>
        <userId>
            admin
        </userId>
        <lastModifiedDate>
            2015-08-03T14:41:01.769Z
        </lastModifiedDate>
        <OrderDate>
            2015-08-03T14:41:00.815Z
        </OrderDate>
        <OrderType>
            e911
        </OrderType>
        <OrderStatus>
            COMPLETE
        </OrderStatus>
        <OrderId>
            6dae2a67-b8f5-4bf2-9bf7-5216277b9be3
        </OrderId>
    </E911OrderSummary>
    <E911OrderSummary>
        <accountId>
            1
        </accountId>
        <CountOfTNs>
            1
        </CountOfTNs>
        <userId>
            admin
        </userId>
        <lastModifiedDate>
            2015-08-03T14:40:19.008Z
        </lastModifiedDate>
        <OrderDate>
            2015-08-03T14:40:17.864Z
        </OrderDate>
        <OrderType>
            e911
        </OrderType>
        <OrderStatus>
            ADJUSTED_COMPLETE
        </OrderStatus>
        <OrderId>
            6a97b54f-459e-4683-a79c-0de52acf7c6b
        </OrderId>
    </E911OrderSummary>
</E911Orders>
```


{% endmethod %}