{% method %}
## /accounts/{accountId}/sipcredentials/{compositeUserName}

DELETE is used to delete SIP credential.  compositeUserName is comprised of the ```UserName```, and, if there is a ```Domain``` part, an @ followed by the ```Domain```.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `compositeUserName` | string | true |






{% common %}



{% endmethod %}