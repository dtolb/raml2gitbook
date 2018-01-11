{% method %}
## /accounts/{accountId}/disconnects/{disconnectid}/notes

Updates the Notes resource by adding a note.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `disconnectid` | string | true |





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