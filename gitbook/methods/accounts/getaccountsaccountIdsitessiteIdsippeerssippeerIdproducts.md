{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products

list the products associated with a SIP Peer


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |
| `sippeerId` | string | true |






{% common %}


## Example : There is at least one product associated with the SIP Peer. If there is no products associated with Sip Peer, empty list will be displayed.

* Response: 200

{% sample lang="xml" %}

```xml
<SipPeerProductResponse>
    <Products>
        <Product>
            <Name>
                Termination
            </Name>
        </Product>
        <Product>
            <Name>
                EdgeManagement
            </Name>
        </Product>
    </Products>
</SipPeerProductResponse>
```


{% endmethod %}