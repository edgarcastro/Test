CREATE TABLE User_Profile(
    id_user INT IDENTITY(1,1) NOT NULL,
    nm_first VARCHAR(50) NULL,
    nm_middle VARCHAR(50) NULL,
    nm_last VARCHAR(50) NULL

    CONSTRAINT PK_id_user PRIMARY KEY NONCLUSTERED (id_user)
)

CREATE TABLE User_role(
    id_user INT NOT NULL,
    cd_role_type VARCHAR(100) NOT NULL,
    id_entity INT IDENTITY(1,1) NOT NULL,
    in_status INT NOT NULL,

	CONSTRAINT PK_id_entity PRIMARY KEY NONCLUSTERED (id_entity, cd_role_type),
	CONSTRAINT FK_User_role_User_Profile FOREIGN KEY (id_user)     
    REFERENCES dbo.User_Profile(id_user)
)

CREATE TABLE User_address(
    id_address INT IDENTITY(1,1),
    id_user INT,

    CONSTRAINT PK_id_address PRIMARY KEY NONCLUSTERED (id_address),
    CONSTRAINT FK_User_address_User_Profile FOREIGN KEY (id_user)     
    REFERENCES dbo.User_Profile(id_user)
)