//
//  Flic
//

#import <UIKit/UIKit.h>
#import "./simulator-wrapper/fliclibWrapper.h"
#import <Cordova/CDVPlugin.h>

@interface Flic: CDVPlugin

@property (nonatomic, strong) SCLFlicManager *flicManager;
@property (nonatomic, strong) NSString *onButtonClickCallbackId;

- (void) init:(CDVInvokedUrlCommand*)command;
- (void) getKnownButtons:(CDVInvokedUrlCommand*)command;
- (void) grabButton:(CDVInvokedUrlCommand*)command;
- (void) waitForButtonEvent:(CDVInvokedUrlCommand*)command;
- (void) triggerButtonEvent:(CDVInvokedUrlCommand*)command;
- (void) onButtonClick:(CDVInvokedUrlCommand*)command;
@end
