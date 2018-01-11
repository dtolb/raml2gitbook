{% method %}
## /accounts/{accountId}/portins/{orderid}/activationStatus

Retrieve the currently activated status for customer activated (triggered) portin orders. The payload returns the list of activated TNs associated with the order. It also returns a list of the TNs associated with the order that have not yet been activated <br><br>
At this time all phone numbers associated with a PON will be activated at the same time, but a change to per-TN activation is coming and will use the same basic payload and activation model.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |






{% common %}


## Example : Activation Status information is available for this order.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ActivationStatusResponse>
    <ActivationStatus>
        <AutoActivationDate>
            2014-08-29T18:30:00+03:00
        </AutoActivationDate>
        <ActivatedTelephoneNumbersList>
            <TelephoneNumber>
                6052609021
            </TelephoneNumber>
        </ActivatedTelephoneNumbersList>
        <NotYetActivatedTelephoneNumbersList/>
    </ActivationStatus>
</ActivationStatusResponse>
```

## Example : Return a 400 error if the Portin Order is not in FOC status, or if not executed on the day of FOC or within the delay interval.


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

## Example : Return a 404 if the Portin Order is missing, or if the activation is complete, and thus the ActivationStatus resource has been erased.


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