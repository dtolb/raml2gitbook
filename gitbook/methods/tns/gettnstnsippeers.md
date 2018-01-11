{% method %}
## /tns/{tn}/sippeers

Retrieves the sippeers associated with that telephone number.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `tn` | string | true |






{% common %}


## Example : The sippeers have been successfully retrieved and displayed.

* Response: 200

{% sample lang="xml" %}

```xml
<SipPeer>
    <Id>
        305643
    </Id>
    <Name>
        PeerOneSiteThree
    </Name>
</SipPeer>
```


{% endmethod %}