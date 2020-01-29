declare module 'cordova-plugin-flic-lib' {

    interface Config {
        appId: string;
        appSecret: string;
        appName: string;
        reloadOnFlicEvent: boolean
    }

    interface ForgetConfig {
        buttonId: string;
    }

}
