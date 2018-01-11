{% method %}
## /accounts/{accountId}/subscriptions/{subscriptionid}

Retrieves the information associated with the subscription ID.
The returned information reflects the subscription as it has been defined, and for callback subscriptions will reflect the status of the latest attempt to place the callback.  The <status> element will indicate if an error is being encountered when the Bandwidth Dashboard attempts to place the callback.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `subscriptionid` | string | true |






{% common %}



{% endmethod %}