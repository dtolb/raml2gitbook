{% method %}
## /coveredRateCenters/{rateCenterId}

Retrieve information about a specific covered rate center identified as the resource.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `rateCenterId` | string | true |






{% common %}


## Example : 

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CoveredRateCenter>
    <Name>
        LOMITA
    </Name>
    <Abbreviation>
        LOMITA
    </Abbreviation>
    <State>
        CA
    </State>
    <Lata>
        730
    </Lata>
    <AvailableNumberCount>
        5536
    </AvailableNumberCount>
    <ZipCodes>
        <ZipCode>
            90044
        </ZipCode>
        <ZipCode>
            90059
        </ZipCode>
        <ZipCode>
            90061
        </ZipCode>
        <ZipCode>
            90247
        </ZipCode>
        <ZipCode>
            90248
        </ZipCode>
        <ZipCode>
            90249
        </ZipCode>
        <ZipCode>
            90717
        </ZipCode>
        <ZipCode>
            90802
        </ZipCode>
        <ZipCode>
            90813
        </ZipCode>
        <ZipCode>
            90822
        </ZipCode>
        <ZipCode>
            90831
        </ZipCode>
        <ZipCode>
            90834
        </ZipCode>
    </ZipCodes>
    <Cities>
        <City>
            GARDENA
        </City>
        <City>
            LOMITA
        </City>
        <City>
            LONG BEACH
        </City>
        <City>
            LOS ANGELES
        </City>
    </Cities>
</CoveredRateCenter>
```


{% endmethod %}