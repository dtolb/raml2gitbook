{% method %}
## /accounts/{accountId}/portins/{orderid}/notes

Retrieve the set of notes associated with an order.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |






{% common %}


## Example : OK - there are Notes associated with the order, and they have been returned in the response.

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Notes>
    <Note>
        <Id>
            87037
        </Id>
        <UserId>
            jbm
        </UserId>
        <Description>
            This is a test note
        </Description>
        <LastDateModifier>
            2014-11-16T04:01:10.000Z
        </LastDateModifier>
    </Note>
    <Note>
        <Id>
            87039
        </Id>
        <UserId>
            smckinnon
        </UserId>
        <Description>
            This is a second test note
        </Description>
        <LastDateModifier>
            2014-11-16T04:08:46.000Z
        </LastDateModifier>
    </Note>
</Notes>
```


{% endmethod %}