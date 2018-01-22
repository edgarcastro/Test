SELECT COUNT(P.id_user) AS 'Non-active Providers'
FROM User_Profile P 
    INNER JOIN User_role R ON R.id_user = P.id_user
    WHERE R.cd_role_type LIKE 'PROVIDER' 
        AND R.in_status <> 1