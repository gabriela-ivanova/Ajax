<?php

class User {

    private static $table = 'tb_users';

    /**
     * 
     * @param type $parameterCollection
     * @return type
     */
    public static function doesExists($parameterCollection) {

        $collection = Database::select(self::$table)
                              ::where('email', $parameterCollection['email'])
                              ::orWhere('user_name', $parameterCollection['user_name'])
                              ::build();

        return (count($collection) > 0);
    }

    /**
     * 
     * @param type $parameterCollection
     * @return type
     */
    public static function signup($parameterCollection) {

        Database::insert(self::$table, $parameterCollection);

        return Database::getLastInsertedId();
    }

    /**
     * 
     * @param type $userid
     * @param type $roleId
     * @return type
     */
    public static function assigneRoleToUser($userid, $roleId) {

        return Database::insert('tb_user__role', array(
                'user_id' => $userid,
                'role_id' => $roleId
        ));
    }

    /**
     * 
     * @param type $parameterCollection
     * @return type
     */
    public static function get($parameterCollection) {

        $userObject = Database::select(self::$table)
                              ::where('email', $parameterCollection ['email'])
                              ::andWhere('password', $parameterCollection['password'])
                              ::buildSingle();

        if (is_null($userObject)) {
            return NULL;
        }

        $userId = $userObject['id'];
        $getUserRoleCollectionQuery = " SELECT b.title AS role_title"
                                    . " FROM tb_user__role  AS a, "
                                    . " tm_roles            AS b "
                                    . " WHERE user_id = $userId AND "
                                    . " a.role_id     = b.id";
        $userRoleCollection = Database::getAll($getUserRoleCollectionQuery);

        return array(
            'user'  => $userObject,
            'roles' => $userRoleCollection
        );
    }
}
