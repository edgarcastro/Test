SELECT COUNT(P.id_user) AS 'Active Licensees With Address Info'
FROM User_Profile P 
    INNER JOIN User_role R ON R.id_user = P.id_user
    INNER JOIN User_address A ON A.id_user = P.id_user 
    WHERE (R.cd_role_type LIKE 'LICENSEE' 
        OR R.cd_role_type LIKE 'LIMITED') 
        AND R.in_status = 1
        AND P.id_user > 0
        AND A.id_address IS NOT NULL