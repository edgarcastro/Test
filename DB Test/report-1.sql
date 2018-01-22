SELECT 
	R.cd_role_type AS 'User Type',
	(SELECT COUNT(R2.id_user) 
		FROM User_role R2 
		WHERE R2.in_status = 1
		AND R2.cd_role_type = R.cd_role_type) AS 'Total Active',
	(SELECT COUNT(P.id_user) 
		FROM User_role R2
		INNER JOIN User_Profile P ON R2.id_user = P.id_user AND P.nm_middle IS NULL
		WHERE R2.in_status = 1
		AND R2.cd_role_type = R.cd_role_type) AS 'No Middle Name'
FROM dbo.User_role R
GROUP BY R.cd_role_type