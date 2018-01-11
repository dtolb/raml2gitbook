{% method %}
## /accounts/{accountId}/portins/{orderid}/loas

Retrieves the list of the loa (and other) files associated with the portin order


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `metadata` | boolean | false | if true it will return meta-data assoociated with the file used to describe the file. |




{% common %}



{% endmethod %}