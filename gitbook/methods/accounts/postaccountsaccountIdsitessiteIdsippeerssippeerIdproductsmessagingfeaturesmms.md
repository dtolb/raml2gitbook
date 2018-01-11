{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/features/mms

Set mms feature settings



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |
| `sippeerId` | string | true |





## Example Request
```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?>
<MmsFeature>
    <MmsSettings>
        <protocol>
            MM4
        </protocol>
    </MmsSettings>
    <Protocols>
        <MM4>
            <MmsMM4TermHosts>
                <TermHosts>
                    <TermHost>
                        <HostName>
                            206.107.248.58
                        </HostName>
                    </TermHost>
                </TermHosts>
            </MmsMM4TermHosts>
            <MmsMM4OrigHosts>
                <OrigHosts>
                    <OrigHost>
                        <HostName>
                            30.239.72.55
                        </HostName>
                        <Port>
                            8726
                        </Port>
                        <Priority>
                            0
                        </Priority>
                    </OrigHost>
                </OrigHosts>
            </MmsMM4OrigHosts>
        </MM4>
    </Protocols>
</MmsFeature>
```


{% common %}


## Example : setting was successfully added

* Response: 201

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<MmsFeatureResponse>
    <MmsFeature>
        <MmsSettings>
            <protocol>
                MM4
            </protocol>
        </MmsSettings>
        <Protocols>
            <MM4>
                <MmsMM4TermHosts>
                    <TermHosts>
                        <TermHost>
                            <HostId>
                                1
                            </HostId>
                            <HostName>
                                206.107.248.58
                            </HostName>
                        </TermHost>
                    </TermHosts>
                </MmsMM4TermHosts>
                <MmsMM4OrigHosts>
                    <OrigHosts>
                        <OrigHost>
                            <HostName>
                                30.239.72.55
                            </HostName>
                            <Port>
                                8726
                            </Port>
                            <HostId>
                                1
                            </HostId>
                            <Priority>
                                0
                            </Priority>
                        </OrigHost>
                    </OrigHosts>
                </MmsMM4OrigHosts>
            </MM4>
        </Protocols>
    </MmsFeature>
</MmsFeatureResponse>
```

## Example : Bad Request. Possible errors in response:
<ul>
   <li>Pauload contains two protocol</li>
</ul>


* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<MmsFeatureResponse>
    <ResponseStatus>
        <ErrorCode>
            13606
        </ErrorCode>
        <Description>
            Messaging feature may have only one protocol assigned.
        </Description>
    </ResponseStatus>
</MmsFeatureResponse>
```


{% endmethod %}