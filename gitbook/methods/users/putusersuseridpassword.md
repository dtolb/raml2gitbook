{% method %}
## /users/{userid}/password

Update a user's password.   Security is maintained by requiring the user's existing password as part of the authentication for the API call.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `userid` | string | true |





## Example Request
```xml
<Password>
    $uper$ecure
</Password>
```


{% common %}


## Example : 

* Response: 200

{% sample lang="xml" %}

```xml

```

## Example : 

* Response: 400

{% sample lang="xml" %}

```xml
<UserResponse>
    <ResponseStatus>
        <ErrorCode>
            12504
        </ErrorCode>
        <Description>
            Password must be at least 6 characters long
        </Description>
    </ResponseStatus>
</UserResponse>
```


{% endmethod %}