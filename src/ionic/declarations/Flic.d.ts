/// <reference path="interfaces/Config.d.ts" />
/// <reference path="interfaces/FlicButton.d.ts" />
/// <reference path="interfaces/FlicEvent.d.ts" />

declare module 'cordova-plugin-flic-lib' {

    export default class Flic {

        /**
         * Initialize Flic
         * Input config:
         * - appId: your app client ID
         * - appSecret: your app client secret
         * - appName: your app name
         * - reloadOnFlicEvent: in case we should reload our activity when the Flic event happened
         * - success: called on function success
         * - error: called on function error
         */
        static init(config: Config, success: (result: any) => void, error: (reason: any) => void);


        /**
         * Get known buttons
         * In case of success, returns a list of buttons
         * Input params:
         *  - success: called on function success
         *  - error: called on function error
         */
        static getKnownButtons(success: (result: FlicButton[]) => void, error: (reason: any) => void);

        /**
         * Grab button
         * In case of success, returns the grabbed button
         * Input params:
         *  - success: called on function success
         *  - error: called on function error
         */
        static grabButton(success: (result: FlicButton) => void, error: (reason: any) => void);

        /**
         * On flic button click event
         * Waits for a button click event and returns the button pressed and the event
         * Input params:
         *  - success: called on function success
         *  - error: called on function error
         */
        static onButtonClick(success: (result: FlicEvent) => void, error: (reason: any) => void);

        /**
         * Forget button. Disposes a button object and removes it from the
         * internal list of known buttons.
         * You will no longer get callbacks for this button.
         */
        static forgetButton(config: ForgetConfig, success: (result: any) => void, error: (reason: any) => void);

        /**
         * Have to been called after the App opens through Deeplink on iOS
         */
        static handleOpenFlicURL(url: string, success: (result: any) => void, error: (reason: any) => void);

    }

}
