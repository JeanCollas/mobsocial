﻿window.mobSocial.lazy.controller("settingEditController",
[
    "$scope", "settingService", "$stateParams", "$state",
    function ($scope, settingService, $stateParams, $state) {
        const settingType = $stateParams.settingType;
        const settingIndex = {
            "general": "GeneralSettings",
            "media": "MediaSettings",
            "security": "SecuritySettings",
            "user": "UserSettings",
            "thirdparty": "ThirdPartySettings",
            "battle": "BattleSettings",
            "datetime": "DateTimeSettings",
            "payment": "PaymentSettings"
        };
        if (settingIndex[settingType] == undefined) {
            $state.go("layoutZero.404");
            return;
        }

        $scope.get = function() {
            settingService.get(settingType,
                function(response) {
                    if (response.Success) {
                        $scope.setting = response.ResponseData[settingIndex[settingType]];
                        
                    }
                },
                function(response) {

                });
        };

        $scope.save = function() {
            const successHandler = function(response) {
                if (response.Success) {
                    
                }
            };
            const errorHandler = function(response) {

            };
            switch(settingType) {
                case "general":
                    settingService.postGeneralSettings($scope.setting, successHandler, errorHandler);
                    break;
                case "media":
                    settingService.postMediaSettings($scope.setting, successHandler, errorHandler);
                    break;
                case "thirdparty":
                    settingService.postThirdPartySettings($scope.setting, successHandler, errorHandler);
                    break;
                case "security":
                    settingService.postSecuritySettings($scope.setting, successHandler, errorHandler);
                    break;
                case "user":
                    settingService.postUserSettings($scope.setting, successHandler, errorHandler);
                    break;
                case "datetime":
                    settingService.postDateTimeSettings($scope.setting, successHandler, errorHandler);
                    break;
                case "payment":
                    settingService.postPaymentSettings($scope.setting, successHandler, errorHandler);
                    break;
                case "battle":
                    settingService.postBattleSettings($scope.setting, successHandler, errorHandler);
                    break;
            }
        }

        $scope.init = function () {
            $scope.setting = {

            };
            //request data
            $scope.get();
        }();
    }
]);