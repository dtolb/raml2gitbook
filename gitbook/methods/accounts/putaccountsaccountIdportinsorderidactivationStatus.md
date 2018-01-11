{% method %}
## /accounts/{accountId}/portins/{orderid}/activationStatus

Sets the activation time for the portin order.  <br> <br>
This API call is currently used to set the Activation time of the customer activated (triggered) port.
<ul>
<li>If the time is in the past all of the TNs in the portin request will be activated 'immediately'.</li>
<li>If the time is within the three days after the approved FoC date, the auto-activation time for the port will be set to that time</li>
</ul>
Activation of individual telephone numbers will be enabled in a future release, but are not currently modifiable via this API



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |





## Example Request
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ActivationStatus>
    <AutoActivationDate>
        2014-08-30T18:30:00+03:00
    </AutoActivationDate>
</ActivationStatus>
```


{% common %}


## Example : 

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ActivationStatusResponse>
    <ActivationStatus>
        <AutoActivationDate>
            2014-08-30T18:30:00+03:00
        </AutoActivationDate>
    </ActivationStatus>
</ActivationStatusResponse>
```

## Example : 

* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ActivationStatusResponse>
    <ResponseStatus>
        <ErrorCode>
            7342
        </ErrorCode>
        <Description>
            On demand portin activation not yet allowed.
        </Description>
    </ResponseStatus>
</ActivationStatusResponse>
```

## Example : 

* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ActivationStatusResponse>
    <ResponseStatus>
        <ErrorCode>
            7348
        </ErrorCode>
        <Description>
            The order is already complete
        </Description>
    </ResponseStatus>
</ActivationStatusResponse>
```


{% endmethod %}