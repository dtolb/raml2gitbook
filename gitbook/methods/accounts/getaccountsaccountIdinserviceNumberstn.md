{% method %}
## /accounts/{accountId}/inserviceNumbers/{tn}

A GET on the number desired will return a 200 OK if the number is in service on the account, or a 404 not found.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `tn` | string | true |






{% common %}



{% endmethod %}