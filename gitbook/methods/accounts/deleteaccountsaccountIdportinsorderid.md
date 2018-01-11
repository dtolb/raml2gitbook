{% method %}
## /accounts/{accountId}/portins/{orderid}

Cancels the port-in order. This does not remove the order from the system.  It simply places the existing order in a canceled state.
Note that only a pending port-in order can be canceled; if the order was previously canceled or completed, then a DELETE will not be possible.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |






{% common %}



{% endmethod %}