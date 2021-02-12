<?php

class Router {

    private static $placeholderCollection = array();
    private static $isAuthenticatable = false;

    /**
     * 
     * @param type $requestUrlPathInformation
     * @return type
     */
    public static function bootstrap() {

        $requestUrlPathInformation   = isset($_SERVER['REDIRECT_URL']) ? $_SERVER['REDIRECT_URL'] : '/';
        $requestMethod               = $_SERVER['REQUEST_METHOD'];
        $requestActionFileCollection = explode('/', $requestUrlPathInformation); //split - връща масив

        array_shift($requestActionFileCollection);
        array_shift($requestActionFileCollection);
        array_shift($requestActionFileCollection);    // хващаме си например blog_post от масива

        $requestAction     = $requestActionFileCollection[0]; //взимаме си първият елемент от масива като така елиминираме празното пространство отпред
        $requestActionFile = Router::processRequestActionMapping($requestAction); // blog_post



        include './src/api/' . $requestActionFile . '.php';

        $functionExecutor = Router::processRequestURIFunctionMapping($requestActionFileCollection, $requestMethod); // връша тази функция get_blog_post_all

        if (is_null($functionExecutor)) {
            return Response::notFound(array('message' => 'No mapping found'));
        }

        // ако потребителят е автентикиран и няма тоукън(имамем проверка за тоукън, който да ни се изпраща при поискаване)
        $isUserRequestNotAuthenticated = self::$isAuthenticatable &&
                self::isForbidden();

        if ($isUserRequestNotAuthenticated) {
            return Response::forbidden();
        }
        call_user_func_array($functionExecutor, Router::getPlaceholderValueCollection());
    }

    /**
     * 
     * @param type $placeholder
     * @return type
     */
    private static function isOptionalPlaceholder($placeholder) {
        return Router::isPlaceholder($placeholder, '{', '}');
    }

    /**
     * 
     * @param type $placeholder
     * @return type
     */
    private static function isRequiredPlaceholder($placeholder) {
        return Router::isPlaceholder($placeholder, '[', ']');
    }

    /**
     * 
     * @param type $placeholderValue
     */
    private static function pushPlaceholder($placeholderValue) {
        array_push(Router::$placeholderCollection, $placeholderValue);
    }

    /**
     * 
     * @return type
     */
    private static function getPlaceholderValueCollection() {
        return Router::$placeholderCollection;
    }

    /**
     * 
     * @param type $placeholder
     * @param type $leftTerminal
     * @param type $rigthTerminal
     * @return type
     */
    private static function isPlaceholder($placeholder, $leftTerminal, $rigthTerminal) { //за проверка използваме функция за работа със стрингове
        $placeholderLength = strlen($placeholder);
        $startPosition     = strpos($placeholder, $leftTerminal);
        $endPosition       = strpos($placeholder, $rigthTerminal);

        return ($startPosition == 0) &&
                ($endPosition  == ($placeholderLength - 1)); //защото $placeholderLength брои от 1 до 4, а в другите функции се брои от 0
    }

    /**
     * 
     * @param type $requestEndpoint
     * @return type
     */
    private static function processRequestURIFunctionMapping($requestEndpoint, $requestMethod) {

        $requestEndpoinMapping = getRequestEndpointMapping();

        //обхождаме масива
        foreach ($requestEndpoinMapping as $endpointConfigurationCollection) {

            // $requestEndpoint  - фактически endpoint     (blog_post/category/2)  
            // $endpoint         - абстрактен endpoint    (blog_post/category/{category_id})

            $endpoint = explode('/', $endpointConfigurationCollection['endpoint']);
            $method   = $endpointConfigurationCollection['method'];
            $execute  = $endpointConfigurationCollection['execute'];

            $isValid  = Router::validateEndpointCollectionCount($endpoint, $requestEndpoint) &&
                        Router::validateEndpointCollectionElement($endpoint, $requestEndpoint) &&
                        Router::validateEndpointCollectionMethod($method, $requestMethod);

            if ($isValid) {

                self::$isAuthenticatable = self::isAuthenticatable($endpointConfigurationCollection);
                return $execute;
            }
        }

        return null;
    }

    /**
     * 
     * @param type $endpointConfigurationCollection
     * @return type
     */
    private static function isAuthenticatable($endpointConfigurationCollection) {
        return isset($endpointConfigurationCollection['auth']) ? $endpointConfigurationCollection['auth'] : false;
    }

    /**
     * 
     * @param type $requestEndpoint
     * @return type
     */
    private static function isForbidden() {
        return !Auth::isTokkenAvailable(Request::authTokken());
    }

    /**
     * 
     * @param type $endpointCollection
     * @param type $requestEndpointCollection
     * @return boolean
     */
    private static function validateEndpointCollectionCount($endpointCollection, $requestEndpointCollection) {
        return count($endpointCollection) == count($requestEndpointCollection);
    }

    /**
     * 
     * @param type $endpointMethod
     * @param type $requestMethod
     * @return boolean
     */
    private static function validateEndpointCollectionMethod($endpointMethod, $requestMethod) {
        return $endpointMethod == $requestMethod;
    }

    /**
     * 
     * @param type $endpointCollection
     * @param type $requestEndpointCollection
     * @return boolean
     */
    private static function validateEndpointCollectionElement($endpointCollection, $requestEndpointCollection) {

        for ($i = 0; $i < count($endpointCollection); $i++) {


            $endpointElement = $endpointCollection[$i];         //какво е дошло от мапинга
            $requestElement = $requestEndpointCollection[$i]; //какво е дошло от браузъра

            if (Router::isOptionalPlaceholder($endpointElement)) {
                Router::pushPlaceholder($requestElement);
            } else if ($endpointElement != $requestElement) {
                return false;
            }
        }
        return true;
    }

    /**
     * 
     * @param type $requestAction
     * @return type
     */
    private static function processRequestActionMapping($requestAction) {

        $requestActionMapping = getRequestActionMapping();
        return (array_key_exists($requestAction, $requestActionMapping)) ? $requestActionMapping[$requestAction] : $requestAction;
    }

}
