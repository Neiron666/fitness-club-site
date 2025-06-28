const querystring = require("querystring");

exports.handler = async (event) => {
    const CLIENT_ID = "Ov23liK49RBQGQE3FmDw";
    const REDIRECT_URI = "https://fitness-club-il-project.netlify.app/admin/";

    return {
        statusCode: 302,
        headers: {
            Location: `https://github.com/login/oauth/authorize?${querystring.stringify(
                {
                    client_id: CLIENT_ID,
                    redirect_uri: REDIRECT_URI,
                    scope: "repo",
                }
            )}`,
        },
    };
};
