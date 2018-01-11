{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/movetns

The POST method moves all telephone numbers specified in the body to the given SIP peer.<br>
The source SIP peer is determined by the Telephone Number, i.e. the PUT method can move multiple numbers from different source SIP peers.<br>
The destination SIP peer is specified in the URL.<br>
NOTE: only a maximum of 5000 Telephone Numbers can be moved in one operation.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |
| `sippeerId` | string | true |





## Example Request
```xml
<SipPeerTelephoneNumbers>
    <FullNumber>
        9199921234
    </FullNumber>
    <!-- SNIP -->
    <FullNumber>
        9199998550
    </FullNumber>
</SipPeerTelephoneNumbers>
```


{% common %}



{% endmethod %}