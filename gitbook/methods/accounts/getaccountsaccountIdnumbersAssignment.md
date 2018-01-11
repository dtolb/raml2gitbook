{% method %}
## /accounts/{accountId}/numbersAssignment

Retrieve a list of the TelephoneNumbersAssignment orders that are associated with the account.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `status` | string | true | The status of the TelephoneNumbersAssignment order being searched for.  COMPLETE, PARTIAL, and FAILED are 'terminal' states indicating that the order has finished all processing. |
| `tn` | string | true | A Telephone Number (TN) that is referenced in the order |
| `customerOrderId` | string | true | The Customer Order ID is an ID assigned by the account owner to provide a reference number for the TelephoneNumbersAssignment order. |
| `createdDateFrom` | string | true | Checks the order's creation date against this value. Orders that have a creation date after this date will be included. Format is yyyy-MM-dd |
| `createdDateTo` | string | true | Checks the order's creation date against this value. Orders that have a creation date before this date will be included. Format is yyyy-MM-dd |
| `orderIdFragment` | string | true | This search parameter represents the internal Bandwidth Dashboard ID that has been assigned to the TelephoneNumbersAssignment Order.  This parameter is the first few characters of the internal ID - the entire ID does not need to be specified. |
| `action` | string | true | whether or not the results should be restricted to ASSIGNED or UNASSIGNED assignment actions." |




{% common %}



{% endmethod %}