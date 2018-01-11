{% method %}
## /tns/{tn}/tnreservation

Retrieves reservation information associated with the Telephone Number.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `tn` | string | true |






{% common %}


## Example : The reservation information has been successfully retrieved.

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0"?>
<TNReservation>
    <ReservationID>
        d28529e6-23dc-408e-b7ad-f2015a6975d5
    </ReservationID>
    <Account>
        12346099
    </Account>
    <ReservationExpires>
        14346
    </ReservationExpires>
    <ReservedTN>
        6136211234
    </ReservedTN>
</TNReservation>
```


{% endmethod %}