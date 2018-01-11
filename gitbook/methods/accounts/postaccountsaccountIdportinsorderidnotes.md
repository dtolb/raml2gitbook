{% method %}
## /accounts/{accountId}/portins/{orderid}/notes

Updates the Notes resource by adding a note.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |





## Example Request
```xml
<?xml version="1.0" encoding="UTF-8"?>
<Note>
    <UserId>
        user id
    </UserId>
    <Description>
        note text
    </Description>
</Note>
```


{% common %}



{% endmethod %}