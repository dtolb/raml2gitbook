{% method %}
## /users/{userid}

Retrieve the information (except the password) for a specific user id


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `userid` | string | true |






{% common %}


## Example : 

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<UserResponse>
    <User>
        <Username>
            testcustomer
        </Username>
        <FirstName>
            Jane
        </FirstName>
        <LastName>
            Doe
        </LastName>
        <EmailAddress>
            janedoe@bandwidth.com
        </EmailAddress>
        <TelephoneNumber>
            9199999999
        </TelephoneNumber>
        <Roles>
            <Role>
                <RoleName>
                    ROLE_BDR
                </RoleName>
                <Permissions>
                    <Permission>
                        <PermissionName>
                            VIEW
                        </PermissionName>
                    </Permission>
                </Permissions>
            </Role>
        </Roles>
        <Accounts>
            <Account>
                <AccountId>
                    12346095
                </AccountId>
                <CompanyName>
                    ABC Corp
                </CompanyName>
            </Account>
        </Accounts>
    </User>
</UserResponse>
```


{% endmethod %}