import { UserManager, UserManagerSettings } from 'oidc-client'

function log(...logArguments) {
    document.getElementById('results').innerText = '';

    Array.prototype.forEach.call(logArguments, function (msg) {
        if (msg instanceof Error) {
            msg = "Error: " + msg.message;
        }
        else if (typeof msg !== 'string') {
            msg = JSON.stringify(msg, null, 2);
        }
        document.getElementById('results').innerHTML += msg + '\r\n';
    });
}

let managerSettings : UserManagerSettings =  {
    authority: "http://localhost:5000",
    client_id: "techCommunityWebClient",
    redirect_uri: "/Home",
    response_type: "id_token token",
    scope:"openid profile techCommunityApi",
    post_logout_redirect_uri : "/",
};

let mgr = new UserManager(managerSettings);

mgr.getUser().then(function (user) {
    if(user) {
        log("User logged in", user.profile);
    } else {
        log("User not logged in");
    }
});