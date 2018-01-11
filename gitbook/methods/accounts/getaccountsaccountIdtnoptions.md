{% method %}
## /accounts/{accountId}/tnoptions

Retrieve a list of the TN Option orders that are associated with the account.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `status` | string | true | The status of the TN Option order being searched for. |
| `tn` | string | true | A Telephone Number (TN) that is referenced in the order |
| `customerOrderId` | string | true | The Customer Order ID is an ID assigned by the account owner to provide a reference number for the TN Option order. |
| `modifiedDateFrom` | string | true | For Date-based searches, the starting date of a date range that will be used to find TN Option Orders that were modified within the date range.  It is in the form yyyy-MM-dd. |
| `modifiedDateTo` | string | true | For Date-based searches, the ending date of a date range that will be used to find TN Option Orders that were modified within the date range.  It is in the form yyyy-MM-dd. |
| `createdDateFrom` | string | true | Checks the order's creation date against this value. Orders that have a creation date after this date will be included. Format is yyyy-MM-dd |
| `createdDateTo` | string | true | Checks the order's creation date against this value. Orders that have a creation date before this date will be included. Format is yyyy-MM-dd |
| `lastModifiedAfter` | string | true | Checks the order's last modified date against this value. Orders that have a modification date after this date will be included. Format is yyyy-MM-dd |
| `lastModifiedBy` | string | true | This is the user-name of the user that last modified the TN Option Order. |
| `orderIdFragment` | string | true | This search parameter represents the internal Bandwidth Dashboard ID that has been assigned to the TN Option Order.  This parameter is the first few characters of the internal ID - the entire ID does not need to be specified. |
| `orderDetails` | boolean | true | If set to true, a list of order details will be displayed instead the summary information. |




{% common %}



{% endmethod %}