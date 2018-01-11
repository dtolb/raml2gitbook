{% method %}
## /accounts/{accountId}/subscriptions/{subscriptionid}

Deletes the specified subscription. Note that deleting subscriptions is only supported on a one-by-one basis.
Deleting all subscriptions associated with an order requires GETting all of those subscriptions, then deleting them one by one.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `subscriptionid` | string | true |






{% common %}



{% endmethod %}