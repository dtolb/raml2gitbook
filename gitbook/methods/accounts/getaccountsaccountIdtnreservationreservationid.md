{% method %}
## /accounts/{accountId}/tnreservation/{reservationid}

Retrieves a TN reservation's information.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `reservationid` | string | true |






{% common %}


## Example : A reservation's information has been successfully retrieved.

* Response: 200

{% sample lang="xml" %}

```xml
<ReservationResponse>
    <Reservation>
        <ReservationId>
            f342904f-b03a-4499-bac0-e8f43a2664a1
        </ReservationId>
        <AccountId>
            12346099
        </AccountId>
        <ReservationExpires>
            1492
        </ReservationExpires>
        <ReservedTn>
            4354776010
        </ReservedTn>
    </Reservation>
</ReservationResponse>
```


{% endmethod %}