const auth = {
    ACCESS_TOKEN_SECRET: 'DF9FBC65B01782D75ECE2DAD1CF5449980EAD2F6F50C8AECD080A74CEB279B91'
    , ACCESS_TOKEN_TIMEOUT: '12h'
    , REFRESH_TOKEN_SECRET: '2951432B1944EF333F6E909F99B271CD953CBE167F92E16F2080CF059BEBA44C'
    , REFRESH_TOKEN_TIMEOUT: '1d'
    , REFRESH_TOKEN_COOKIE_NAME: 'GeoTriviaJWT'
    , REFRESH_TOKEN_COOKIE_TIMEOUT: 24 * 60 * 60 * 1000  
};
// GENERATE 64BYTE KEY FOR TOKEN SECRET https://numbergenerator.org/hex-code-generator#!numbers=1&length=64&addfilters=
module.exports = auth;