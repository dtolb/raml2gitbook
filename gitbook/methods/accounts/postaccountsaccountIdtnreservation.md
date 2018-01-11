{% method %}
## /accounts/{accountId}/tnreservation

Reserves a telephone number or a set of telephone numbers for a default time of 4 hours. A successful reservation returns a location header that can be used to retrieve the reservation at a later time.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |





## Example Request
```xml
<Reservation>
    <ReservedTn>
        4354770625
    </ReservedTn>
</Reservation>
```


{% common %}



{% endmethod %}