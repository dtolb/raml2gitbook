{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/features/mms

Retrieve mms feature settings for sippeer



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |
| `sippeerId` | string | true |






{% common %}


## Example : A successful result that contains the response data

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<MmsFeatureResponse>
    <MmsFeature>
        <MmsSettings>
            <protocol>
                HTTP
            </protocol>
        </MmsSettings>
        <Protocols>
            <HTTP>
                <HttpSettings>
                    <proxyPeerId>
                        500017
                    </proxyPeerId>
                </HttpSettings>
            </HTTP>
        </Protocols>
    </MmsFeature>
</MmsFeatureResponse>
```


{% endmethod %}