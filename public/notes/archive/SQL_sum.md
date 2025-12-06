# SQL

> 作者：OP
>
> 创作时间：2021/05/29
>
> 上次修改时间：2023/09/27

## Abstract

- SQL: Structured Query Language. 
- Purpose of SQL: Create/Insert. Read/Select. Update. Delete. (CRUD)
- References: [RUNOOB.com][r1], [W3school_Chinese][r2], [极客学院][r3], [W3school_English][r4], [PG4E][r5], 《SQL必知必会》（第5版）

```mermaid
graph LR
A(user) --> B(SQL)
    B --> C(Database)
```



## Terminology

- Database: A container. Contains one or more tables.
- Relational Database Management System (RDBMS): The applications we use like MySQL, Microsoft SQL Server Express, SQL Server Management Studio. We create and manipulate database by RDBMS. 
- Table (Relation or Entity): Contains rows and columns. A collection of records. 
- Schema: Layout and character of the table. 
- Row (Tuple or record): General object like person or music track. A collection of fields that describes one instance of a table. 
- Column (Attribute or field): One of many possible elements of the data corresponding to the object. A single characteristic or fact about a table. 
- Datatype: Every column has its own datatype. 
- Primary key: One or several columns which can identify every row in the table. 
- Keyword: SQL commands or default statement in RDBMS. 
- Clause: A full SQL statement are made of several clauses. Some of them are mandatory, some of them are optional. 



## Regulation

- Every sentence ends at semicolon`;`.
- SQL is not case sensitive. 
- Space `( )` will not affect the result of SQL. So SQL can be written in one line or several. 
- Characters are quoted by single quote `('')`.  Numbers are not quoted. 
- Important SQL command:
  - SELECT
  - UPDATE
  - DELETE
  - INSERT INTO
  - CREATE DATABASE
  - ALTER DATABASE
  - CREATE TABLE
  - DROP TABLE
  - CREATE INDEX
  - DROP INDEX



##  Basic Statement

> `raw_data`, `raw_data_date`, and `raw_data_app` will be the original tables which will be manipulated in the following sample statements. 
>
> **raw_data**
>
> ```sql
> -- sql statements to construct raw_data
> CREATE TABLE raw_data
> (
>     id numeric, name CHAR(15), 
>     url CHAR(30), 
>     alexa numeric, 
>     country CHAR(10)
> );
> 
> INSERT INTO raw_data
> VALUES (1,'Google','https://www.google.com/',1,'USA'),
> (2,'淘宝','https://www.taobao.com/',13,'CN'),
> (3,'微博','http://weibo.com/',20,'CN'),
> (4,'Facebook','https://www.facebook.com/',3,'USA');
> ```
>
> | id   | name     | url                       | alexa | country |
> | ---- | -------- | ------------------------- | ----- | ------- |
> | 1    | Google   | https://www.google.com/   | 1     | USA     |
> | 2    | 淘宝     | https://www.taobao.com/   | 13    | CN      |
> | 3    | 微博     | http://weibo.com/         | 20    | CN      |
> | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |
>
> 
>
> **raw_data_date**
>
> `aid`: auto-increment ID.
>
> `site_id`: ID for the website. 
>
> `count`: the number of times the website is accessed.
>
> `date`: date of access. 
>
> ```sql
> CREATE TABLE raw_data_date
> (
>     aid numeric,
>     site_id numeric,
>     count numeric,date CHAR(20)
> );
> 
> INSERT INTO raw_data_date
> VALUES (1,1,45,'2016-05-10');
> INSERT INTO raw_data_date
> VALUES (2,3,100,'2016-05-13');
> INSERT INTO raw_data_date
> VALUES (3,1,230,'2016-05-14');
> INSERT INTO raw_data_date
> VALUES (4,2,10,'2016-05-14');
> INSERT INTO raw_data_date
> VALUES (5,5,205,'2016-05-14');
> INSERT INTO raw_data_date
> VALUES (6,4,13,'2016-05-15');
> INSERT INTO raw_data_date
> VALUES (7,3,220,'2016-05-15');
> INSERT INTO raw_data_date
> VALUES (8,5,545,'2016-05-16');
> INSERT INTO raw_data_date
> VALUES (9,3,201,'2016-05-17');
> ```
>
> | aid  | site_id | count | date       |
> | ---- | ------- | ----- | ---------- |
> | 1    | 1       | 45    | 2016-05-10 |
> | 2    | 3       | 100   | 2016-05-13 |
> | 3    | 1       | 230   | 2016-05-14 |
> | 4    | 2       | 10    | 2016-05-14 |
> | 5    | 5       | 205   | 2016-05-14 |
> | 6    | 4       | 13    | 2016-05-15 |
> | 7    | 3       | 220   | 2016-05-15 |
> | 8    | 5       | 545   | 2016-05-16 |
> | 9    | 3       | 201   | 2016-05-17 |
>
> 
>
> **raw_data_app**
>
> ```sql
> CREATE TABLE raw_data_app
> (
>     id numeric,
>     app_name CHAR(20),
>     url CHAR(30),
>     country CHAR(10)
> );
> 
> INSERT INTO raw_data_app
> VALUES (1,'QQ','http://im.qq.com/','CN'),
> (2,'微博','http://weibo.com/','CN'),
> (3,'淘宝','https://www.taobao.com/','CN');
> 
> SELECT * 
> FROM raw_data_app;
> ```
>
> | id   | app_name | url                     | country |
> | ---- | -------- | ----------------------- | ------- |
> | 1    | QQ       | http://im.qq.com/       | CN      |
> | 2    | 微博     | http://weibo.com/       | CN      |
> | 3    | 淘宝     | https://www.taobao.com/ | CN      |



### SELECT

- Purpose: select data from database and save the result in the result set table. 
- Notes: 
  - `SELECT` is a statement. 
  - Result set of `SELECT` statement might be random. We can use `ORDER BY`[^6] to specify the order. 
  - `FROM` is a clause. 
- Format: 
  - select certain columns from the table `SELECT column_name1,column_name2,...,column_name FROM table_name;` 
  - select all columns from the table `SELECT * FROM table_name;`. However, using `*` will not be effective. 
- Sample: 
  - ```sql
    SELECT name,country 
    FROM raw_data;
    ```
  - | name     | country |
    | -------- | ------- |
    | Google   | USA     |
    | 淘宝     | CN      |
    | 微博     | CN      |
    | Facebook | USA     |
  - ```sql
    SELECT * FROM raw_data;
    ```
  - | id   | name     | url                       | alexa | country |
    | ---- | -------- | ------------------------- | ----- | ------- |
    | 1    | Google   | https://www.google.com/   | 1     | USA     |
    | 2    | 淘宝     | https://www.taobao.com/   | 13    | CN      |
    | 3    | 微博     | http://weibo.com/         | 20    | CN      |
    | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |



#### SELECT DISTINCT[^Note1]

- Purpose: select data without repetition and return the distinct values. 
- Notes:
  - `DISTINCT` is a keyword. 
- Format:
  - `SELECT DISTINCT column_name1,column_name2,...,column_name FROM table_name;`
- Sample:
  - ```sql
    SELECT DISTINCT country 
    FROM raw_data;
    ```
  - | country |
    | ------- |
    | USA     |
    | CN      |



#### SELECT TOP[^Note2]

- Purpose: Select certain number of records in the result set.
- Notes: 
  - `TOP` is a keyword. 
  - `SELECT TOP` statement is not compatible for all RDBMS.
  - MySQL accepts `limit` statement while Oracle accepts `ROWNUM` statement.
  - If you want to select from the bottom, you can use `ORDER BY id DESC`, which `DESC` means descending, `ASC` means ascending. 
- Format: 
  - SQL server is `SELECT TOP number|percent column_name1,column_name2,...,column_name FROM table_name;`
  - BD2 is `SELECT complumn_name1,column_name2,...,column_name FROM table_name FETCH FIRST # ROWS ONLY;`
  - MySQL is 
    - `SELECT column_name1,column_name2,...,column_name FROM table_name LIMIT number;`
    - `SELECT column_name1,column_name2,...,column_name FROM table_name LIMIT #1 OFFSET #2;` Start from row $\#2$ and select $\#1$ rows. [^Q2]
  - Oracle is `SELECT column_name1,column_name2,...,column_name FROM table_name WHERE ROWNUM<=#;`
- Sample[^Q1]:
  - ```sql
    SELECT TOP 50 PERCENT * 
    FROM raw_data;
    ```
  - | id   | name   | url                     | alexa | country |
    | ---- | ------ | ----------------------- | ----- | ------- |
    | 1    | Google | https://www.google.com/ | 1     | USA     |
    | 2    | 淘宝   | https://www.taobao.com/ | 13    | CN      |
  - ```sql
    SELECT * 
    FROM raw_data 
    LIMIT 2;
    ```
  - | id   | name   | url                     | alexa | country |
    | ---- | ------ | ----------------------- | ----- | ------- |
    | 1    | Google | https://www.google.com/ | 1     | USA     |
    | 2    | 淘宝   | https://www.taobao.com/ | 13    | CN      |
  - ```sql
    SELECT TOP 2 * 
    FROM raw_data 
    ORDER BY id DESC;
    ```
  - | id   | name     | url                       | alexa | country |
    | ---- | -------- | ------------------------- | ----- | ------- |
    | 3    | 微博     | http://weibo.com/         | 20    | CN      |
    | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |



#### SELECT INTO

- Purpose: Duplicate data from one table and import them into another table which **does NOT exist** before. 
- Notes:
  - MySQL does not support `SELECT...INTO...` statement, but support `INSERT INTO...SELECT`[^7].
  - In MySQL, one can use following statements to achieve this purpose. 
    - ```sql
      CREATE TABLE new_tableA 
      SELECT * FROM old_table;
      ```
  - The header of the new table as well as the data types will be created by the columns in `SELECT` statement. One can use `AS` to rename them. 
- Format: 
  - Select all columns: `SELECT * INTO new_table [IN externaldb] FROM old_table;`
  - Select certain columns only: `SELECT column_name1,column_name2,...,column_name INTO new_table [IN externaldb] FROM old_table;`
- Sample:
  - ```sql
    -- create backup file
    SELECT * 
    INTO back_up 
    FROM raw_data;
    ```
  - > **back_up**
    >
    > | id   | name     | url                       | alexa | country |
    > | ---- | -------- | ------------------------- | ----- | ------- |
    > | 1    | Google   | https://www.google.com/   | 1     | USA     |
    > | 2    | 淘宝     | https://www.taobao.com/   | 13    | CN      |
    > | 3    | 微博     | http://weibo.com/         | 20    | CN      |
    > | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |
  - ```sql
    SELECT name,url 
    INTO back_up1 
    FROM raw_data;
    ```
  - | name     | url                       |
    | -------- | ------------------------- |
    | Google   | https://www.google.com/   |
    | 淘宝     | https://www.taobao.com/   |
    | 微博     | http://weibo.com/         |
    | Facebook | https://www.facebook.com/ |
  - ```sql
    SELECT * INTO back_up2 
    FROM raw_data 
    WHERE country IN ('CN');
    ```
  - | id   | name | url                     | alexa | country |
    | ---- | ---- | ----------------------- | ----- | ------- |
    | 2    | 淘宝 | https://www.taobao.com/ | 13    | CN      |
    | 3    | 微博 | http://weibo.com/       | 20    | CN      |
  - ```sql
    SELECT a.name,b.count,b.date 
    INTO back_up3 
    FROM raw_data AS a 
    LEFT JOIN raw_data_date AS b 
    ON a.id=b.site_id;
    ```
  - | name     | count | date       |
    | -------- | ----- | ---------- |
    | Google   | 45    | 2016-05-10 |
    | 微博     | 100   | 2016-05-13 |
    | Google   | 230   | 2016-05-14 |
    | 淘宝     | 10    | 2016-05-14 |
    | Facebook | 13    | 2016-05-15 |
    | 微博     | 220   | 2016-05-15 |
    | 微博     | 201   | 2016-05-17 |
  - ```sql
    -- create new table
    SELECT * 
    INTO new_table 
    FROM raw_data 
    WHERE 1=0;
    ```
  - | id   | name | url  | alexa | country |
    | ---- | ---- | ---- | ----- | ------- |
    |      |      |      |       |         |



### INSERT INTO

- Purpose: insert new records to the table. 
- Notes:
  - id column can automated update. So we don't need to insert any value for id column. 
  - Values that are inserted in the table are quoted by single quote`('')`.
  - The differences between`INSERT INTO table_name SELECT` & `SELECT INTO table_name FROM`.
- Format:
  - If the column names to contain the inserted values are not specified, one must specify values for every column. 
    
    `INSERT INTO table_name VALUES (value1,value2,value3,...);`
  - Insert value into certain columns. 
    
    `INSERT INTO table_name (column1,colum2,column3,...) VALUES (value1,value2,value3,...);`
- Sample:
  - ```sql
    INSERT INTO raw_data (name,url,alexa,country) 
    VALUES ('百度','https://wwww.baidu.com/','4','CN');
    
    SELECT * 
    FROM raw_data;
    ```
  - | id   | name     | url                       | alexa | country |
    | ---- | -------- | ------------------------- | ----- | ------- |
    | 1    | Google   | https://www.google.com/   | 1     | USA     |
    | 2    | 淘宝     | https://www.taobao.com/   | 13    | CN      |
    | 3    | 微博     | http://weibo.com/         | 20    | CN      |
    | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |
    | 5    | 百度     | https://www.facebook.com/ | 4     | CN      |
  - ```sql
    INSERT INTO raw_data (name,url,country) 
    VALUES ('stackoverflow','http://stackoverflow.com/','IND');
    
    SELECT * 
    FROM raw_data;
    ```
  - | id   | name          | url                       | alexa | country |
    | ---- | ------------- | ------------------------- | ----- | ------- |
    | 1    | Google        | https://www.google.com/   | 1     | USA     |
    | 2    | 淘宝          | https://www.taobao.com/   | 13    | CN      |
    | 3    | 微博          | http://weibo.com/         | 20    | CN      |
    | 4    | Facebook      | https://www.facebook.com/ | 3     | USA     |
    | 5    | 百度          | https://www.facebook.com/ | 4     | CN      |
    | 6    | stackoverflow | http://stackoverflow.com/ | 0     | IND     |



#### INSERT INTO SELECT

- Purpose: Duplicate data from one table and insert them into an existing table without affecting other records of the **existing** table. 
- Notes:
  - One can use `SELECT INTO` statement if wants to insert the duplicated date into a new table. 
- Format: 
  - Select all columns: `INSERT INTO table2 SELECT FROM table1;`
  - Select certain columns only: `INSERT INTO table2 (column_name1,column_name2,...,column_name) SELECT column_name1,column_name2,...,column_name FROM table1;`
- Sample: 
  - ```sql
    SELECT * 
    INTO back_up_app 
    FROM raw_data_app;
    
    INSERT INTO back_up (name,country) 
    SELECT app_name,country 
    FROM back_up_app;
    
    SELECT * 
    FROM back_up;
    ```
    
  - | id   | name     | url                       | alexa | country |
    | ---- | -------- | ------------------------- | ----- | ------- |
    | 1    | Google   | https://www.google.com/   | 1     | USA     |
    | 2    | 淘宝     | https://www.taobao.com/   | 13    | CN      |
    | 3    | 微博     | http://weibo.com/         | 20    | CN      |
    | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |
    |      | QQ       |                           |       | CN      |
    |      | 微博     |                           |       | CN      |
    |      | 淘宝     |                           |       | CN      |
    
  - ```sql
    DROP TABLE back_up; 
    SELECT * 
    INTO back_up 
    FROM raw_data; 
    
    INSERT INTO back_up (name, country) 
    SELECT app_name, country 
    FROM back_up_app 
    WHERE id=1; 
    
    SELECT * 
    FROM back_up;
    ```
    
  - | id   | name     | url                       | alexa | country |
    | ---- | -------- | ------------------------- | ----- | ------- |
    | 1    | Google   | https://www.google.com/   | 1     | USA     |
    | 2    | 淘宝     | https://www.taobao.com/   | 13    | CN      |
    | 3    | 微博     | http://weibo.com/         | 20    | CN      |
    | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |
    |      | QQ       |                           |       | CN      |
    
  - ==**There are some comments in the [RUNOOB.com][r1] which need further study. **==



### UPDATE

- Purpose: update records in the table. 
- Notes:
  - **BE CAREFUL** when using `UPDATE` statement without a `WHERE` statement. Since all the records will be updated without a `WHERE` statement. 
  - One can use `sql_safe_updates` in MySQL to prevent misoperation. `SET sql_safe_updates=1;` means open this parameter. 
- Format: `UPDATE table_name SET column1=value1,column2=value2,...,column=value WHERE certain_column=certain_value;`
- Sample:
  - ```sql
    UPDATE raw_data 
    SET alexa='20',country='CN' 
    WHERE name='Facebook';
    
    SELECT * 
    FROM raw_data;
    ```
  - | id   | name     | url                       | alexa | country |
    | ---- | -------- | ------------------------- | ----- | ------- |
    | 1    | Google   | https://www.google.com/   | 1     | USA     |
    | 2    | 淘宝     | https://www.taobao.com/   | 13    | CN      |
    | 3    | 微博     | http://weibo.com/         | 20    | CN      |
    | 4    | Facebook | https://www.facebook.com/ | 20    | CN      |
    | 5    | 百度     | https://www.facebook.com/ | 4     | CN      |



### DELETE

- Purpose: delete records (rows) from the table. 
- Notes: **BE CAREFUL** when using `DELETE` statement since all the records will be deleted without any undo button. 
- Format: `DELETE FROM table_name WHERE certain_column=certain_value;`
- Sample:
  - ```sql
    DELETE FROM raw_data 
    WHERE name='Facebook' 
    AND country='USA';
    ```
  - | id   | name   | url                       | alexa | country |
    | ---- | ------ | ------------------------- | ----- | ------- |
    | 1    | Google | https://www.google.com/   | 1     | USA     |
    | 2    | 淘宝   | https://www.taobao.com/   | 13    | CN      |
    | 3    | 微博   | http://weibo.com/         | 20    | CN      |
    | 4    | 百度   | https://www.facebook.com/ | 4     | CN      |
  - ```sql
    DELETE FROM raw_data;
    ```
  - | id   | name | url  | alexa | country |
    | ---- | ---- | ---- | ----- | ------- |
    |      |      |      |       |         |



### CREATE

#### CREATE DATABASE

- Purpose: Create database.
- Format: `CREATE DATABASE dbname;`
- Sample: 
  - ```sql
    CREATE DATABASE db_test; 
    ```



#### CREATE TABLE

- Purpose: Create table in certain database.
- Notes:
  - Every table consist of rows and columns.
  - Every table must have a header. 
  - Every column has its data type which should be initialized. 
  - Every column has a max length which should be initialized. 
  - Commonly used data types: `varchar`, `integer`, `decimal`, `date` and etc.
  - `int` data type means the column will contain integers.
- ==***TBC***==
  - | Data type                          | Descriptions                                                 |
    | ---------------------------------- | ------------------------------------------------------------ |
    | CHARACTER(n)                       | 字符/字符串。固定长度 n。                                    |
    | VARCHAR(n) 或 CHARACTER VARYING(n) | 字符/字符串。可变长度。最大长度 n。                          |
    | BINARY(n)                          | 二进制串。固定长度 n。                                       |
    | BOOLEAN                            | 存储 TRUE 或 FALSE 值                                        |
    | VARBINARY(n) 或 BINARY VARYING(n)  | 二进制串。可变长度。最大长度 n。                             |
    | INTEGER(p)                         | 整数值（没有小数点）。精度 p。                               |
    | SMALLINT                           | 整数值（没有小数点）。精度 5。                               |
    | INTEGER                            | 整数值（没有小数点）。精度 10。                              |
    | BIGINT                             | 整数值（没有小数点）。精度 19。                              |
    | DECIMAL(p,s)                       | 精确数值，精度 p，小数点后位数 s。例如：decimal(5,2) 是一个小数点前有 3 位数，小数点后有 2 位数的数字。 |
    | NUMERIC(p,s)                       | 精确数值，精度 p，小数点后位数 s。（与 DECIMAL 相同）        |
    | FLOAT(p)                           | 近似数值，尾数精度 p。一个采用以 10 为基数的指数计数法的浮点数。该类型的 size 参数由一个指定最小精度的单一数字组成。 |
    | REAL                               | 近似数值，尾数精度 7。                                       |
    | FLOAT                              | 近似数值，尾数精度 16。                                      |
    | DOUBLE PRECISION                   | 近似数值，尾数精度 16。                                      |
    | DATE                               | 存储年、月、日的值。                                         |
    | TIME                               | 存储小时、分、秒的值。                                       |
    | TIMESTAMP                          | 存储年、月、日、小时、分、秒的值。                           |
    | INTERVAL                           | 由一些整数字段组成，代表一段时间，取决于区间的类型。         |
    | ARRAY                              | 元素的固定长度的有序集合                                     |
    | MULTISET                           | 元素的可变长度的无序集合                                     |
    | XML                                | 存储 XML 数据                                                |
    | 数据类型                           | Access                                                       |
    | :--                                | :--                                                          |
    | *boolean*                          | Yes/No                                                       |
    | *integer*                          | Number (integer)                                             |
    | *float*                            | Number (single)                                              |
    | *currency*                         | Currency                                                     |
    | *string (fixed)*                   | N/A                                                          |
    | *string (variable)*                | Text (<256) Memo (65k+)                                      |
    | *binary object*                    | OLE Object Memo                                              |
- Format:
  - ```sql
    CREATE TABLE table_name
    (    
        column_name1 data_type(size),    
        column_name2 data_type(size),    
        column_name3 data_type(size),    
        ....    
        column_name data_type(size)
    );
    ```
- Sample:
  - ```sql
    CREATE TABLE person
    (    
        id numeric,    
        PersonID int,    
        LastName varchar(255),    
        FirstName varchar(255),    
        Address varchar(255),    
        City varchar(255),    
        Country char(20)
    );
    ```
  - | id   | personid | lastname | firstname | address | city | country |
    | ---- | -------- | -------- | --------- | ------- | ---- | ------- |
    |      |          |          |           |         |      |         |



#### CREATE INDEX



#### CREATE VIEW





### DROP

#### DROP INDEX



#### DROP TABLE



#### DROP DATABASE



#### DROP COLUMN



#### DROP VIEW





### TRUNCATE TABLE





### ALTER TABLE









### Comment

- Purpose: Add comments by using `#`, `/**/`, & double `-`.
- Format: 
  - `-- + space + comments`
  - Some RDBMS support comments leading by `(#)`. `# + comments`
  - In-text comments are `/* comments */`
- Sample:
  - ```sql
    SELECT XXX -- comments
    ```



## Clause

### WHERE[^Q4]

- Purpose: help to select the data filtered by certain condition. 
- Notes: 
  - String is quoted by single quote `('')`.  Numeric is not quoted. 
  - `WHERE` clause is listed after `FROM` clause. 
- Format:
  - `SELECT column_name1,column_name2,...,column_name FROM table_name WHERE column_name operator value;`
- Operator:
  - Different RDBMS may accept different operators. 
  - | Operator        | Description                                                  |
    | --------------- | ------------------------------------------------------------ |
    | =               | Equal to                                                     |
    | <> or !=        | Not Equal to                                                 |
    | >               | Bigger than                                                  |
    | <               | Smaller than                                                 |
    | >=              | Bigger than and equal to                                     |
    | <=              | Smaller than and equal to                                    |
    | !>              | Not bigger than                                              |
    | !<              | Not smaller than                                             |
    | BETWEEN         | Between some range. Keyword `AND` is needed to separate beginnign value and end value. |
    | IS NULL[^Note3] | Whether the cell is null                                     |
    | LIKE[^1]        | Search certain pattern                                       |
    | IN              | Search several potential values for certain column           |
    | NOT             | Not                                                          |
    | AND[^2]         | And                                                          |
    | OR[^3]          | Or                                                           |
- Special example:
  - ```sql
    SELECT * 
    FROM test 
    WHERE age 
    BETWEEN 5 AND 50;
    ```
  - ```sql
    SELECT * 
    FROM test 
    WHERE name 
    LIKE "M%";
    ```
  - ```sql
    SELECT * 
    FROM test 
    WHERE age IN (5,10,23);
    ```
  - ```sql
    SELECT * 
    FROM test 
    WHERE NOT age < 4;
    ```
  - ```sql
    SELECT * 
    FROM test 
    WHERE age > 6 AND age < 29;
    ```
  - ```sql
    SELECT * 
    FROM test 
    WHERE age < 7 OR age > 20;
    ```
  - ```sql
    SELECT * 
    FROM test 
    WHERE name IS NULL;
    ```
- Sample: 
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE country='CN';
    ```
  - | id   | name | url                     | alexa | country |
    | ---- | ---- | ----------------------- | ----- | ------- |
    | 2    | 淘宝 | https://www.taobao.com/ | 13    | CN      |
    | 3    | 微博 | http://weibo.com/       | 20    | CN      |



#### AND & OR[^Note4]

- Purpose: combine two or more conditions. 
  - AND: The condition will be true if all conditions must be true.
  - OR: The condition will be true if more than one condition(include one condition) must be true. 
- Notes:
  - `AND` and `OR` must be added between every two conditions. 
  - The priority of `AND` is bigger than `OR`.
- Format: 
  - `condition1 AND condition2`
  - `condition1 OR condition2`
- Priority: 
  - | Preference | Operator |
    | ---------- | -------- |
    | 1          | ()       |
    | 2          | AND      |
    | 3          | OR       |
- Sample:
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE country='USA' 
    AND alexa<2;
    ```
  - | id   | name   | url                     | alexa | country |
    | ---- | ------ | ----------------------- | ----- | ------- |
    | 1    | Google | https://www.google.com/ | 1     | USA     |
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE country='USA' 
    OR country='CN';
    ```
  - | id   | name     | url                       | alexa | country |
    | ---- | -------- | ------------------------- | ----- | ------- |
    | 1    | Google   | https://www.google.com/   | 1     | USA     |
    | 2    | 淘宝     | https://www.taobao.com/   | 13    | CN      |
    | 3    | 微博     | http://weibo.com/         | 20    | CN      |
    | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |



#### IN[^Note4]

- Purpose: Specify a condition range. Allow one to include multiple values in `WHERE` statement. 
- Notes:
  - `IN` operator is faster than `OR` operator. 
  - One can include `SELECT` statement in `IN` operator. 
- Format: `SELECT column_name1,column_name2,...,column_name FROM table_name WHERE column_name IN (value1,value2,value3...);`
- Sample:
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE name IN ('Google','Facebook');
    ```
  - | id   | name     | url                       | alexa | country |
    | ---- | -------- | ------------------------- | ----- | ------- |
    | 1    | Google   | https://www.google.com/   | 1     | USA     |
    | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |



#### NOT[^Note4]

- Purpose: Give the opposite logical value of one condition. 
- Notes:
  - Different RDBMS allow `NOT` to negative different clause. 
- Format: `SELECT column_name1,column_name2,...,column_name FROM table_name WHERE column_name NOT IN (value1,value2,value3,...);`[^Q1]
- Sample[^Q1]:
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE NOT name IN ('Google','Facebook');
    ```
  - | id   | name | url                     | alexa | country |
    | ---- | ---- | ----------------------- | ----- | ------- |
    | 2    | 淘宝 | https://www.taobao.com/ | 13    | CN      |
    | 3    | 微博 | http://weibo.com/       | 20    | CN      |



#### BETWEEN

- Purpose: It can choose values in some range. 
- Notes: 
  - If one don't want to choose values in certain range, one can use `NOT BETWEEN` statement. 
  - Different RDBMS may have different application of `BETWEEN` statement. **BE CAREFUL** about the first and the last value. 
- Format: `SELECT column_name1,column_name2,...,column_name FROM table_name WHERE column_name BETWEEN value1 AND value2;`
- Sample:
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE alexa BETWEEN 1 AND 15;
    ```
  - | id   | name     | url                       | alexa | country |
    | ---- | -------- | ------------------------- | ----- | ------- |
    | 1    | Google   | https://www.google.com/   | 1     | USA     |
    | 2    | 淘宝     | https://www.taobao.com/   | 13    | CN      |
    | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE alexa NOT BETWEEN 1 AND 15;
    ```
  - | id   | name | url               | alexa | country |
    | ---- | ---- | ----------------- | ----- | ------- |
    | 3    | 微博 | http://weibo.com/ | 20    | CN      |
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE (alexa BETWEEN 1 AND 15) 
    AND NOT country IN ('USA');
    ```
  - | id   | name | url                     | alexa | country |
    | ---- | ---- | ----------------------- | ----- | ------- |
    | 2    | 淘宝 | https://www.taobao.com/ | 13    | CN      |
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE name 
    BETWEEN 'A' AND 'H';
    ```
  - | id   | name     | url                       | alexa | country |
    | ---- | -------- | ------------------------- | ----- | ------- |
    | 1    | Google   | https://www.google.com/   | 1     | USA     |
    | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE name NOT BETWEEN 'A' AND 'H';
    ```
  - | id   | name | url                     | alexa | country |
    | ---- | ---- | ----------------------- | ----- | ------- |
    | 2    | 淘宝 | https://www.taobao.com/ | 13    | CN      |
    | 3    | 微博 | http://weibo.com/       | 20    | CN      |
  - ```sql
    SELECT * 
    FROM raw_data_date 
    WHERE date BETWEEN '2016-05-10' AND '2016-05-14';
    ```
  - | aid  | site_id | count | date       |
    | ---- | ------- | ----- | ---------- |
    | 1    | 1       | 45    | 2016-05-10 |
    | 2    | 3       | 100   | 2016-05-13 |
    | 3    | 1       | 230   | 2016-05-14 |
    | 4    | 2       | 10    | 2016-05-14 |
    | 5    | 5       | 205   | 2016-05-14 |



#### LIKE[^Note4]

- Purpose: Use in `WHERE` statement to search for record with certain pattern. 
- Notes: 
  - `LIKE` statement can be used with wildcard[^4].
  - For most of RDBMS, search clause such as `LIKE` is case sensitive. 
- Format: `SELECT column_name1,column_name2,...,column_name FROM table_name WHERE column_name LIKE pattern;`
- Sample:
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE name LIKE 'G%';
    ```
  - | id   | name   | url                     | alexa | country |
    | ---- | ------ | ----------------------- | ----- | ------- |
    | 1    | Google | https://www.google.com/ | 1     | USA     |
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE name LIKE '%k';
    ```
  - | id   | name     | url                       | alexa | country |
    | ---- | -------- | ------------------------- | ----- | ------- |
    | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE name LIKE '%oo%';
    ```
  - | id   | name     | url                       | alexa | country |
    | ---- | -------- | ------------------------- | ----- | ------- |
    | 1    | Google   | https://www.google.com/   | 1     | USA     |
    | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE name NOT LIKE '%oo%';
    ```
  - | id   | name | url                     | alexa | country |
    | ---- | ---- | ----------------------- | ----- | ------- |
    | 2    | 淘宝 | https://www.taobao.com/ | 13    | CN      |
    | 3    | 微博 | http://weibo.com/       | 20    | CN      |



#### IS NULL



#### IS NOT NULL



#### Wildcard

- Purpose: Wildcard can be used to substitute other characters in the string or construct certain search pattern. 
- Notes: 
  - Wildcard is used with `LIKE` statement to search for record with certain pattern. 
  - Wildcards can only be used by strings but not numeric. 
  - One may need to eliminate all `space` before using wildcards. 
  - Operator `%` will not return `NULL` value. 
  - DB2 doesn't support wildcard `_`.
  - Some RDBMS don't support wildcard `[charlist]`. 
  - Wildcard is time-consuming. 
- Description:
  - | Wildcard                   | Description                                                  |
    | -------------------------- | ------------------------------------------------------------ |
    | %                          | Subsitute 0 character, one character, or several characters. |
    | _                          | Substitute 1 character.                                      |
    | [charlist]                 | Substitute single character within charlist.                 |
    | [^charlist] or [!charlist] | Subsitute single character not within charlist.              |
- Sample:
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE url LIKE 'https%';
    ```
    
  - | id   | name     | url                       | alexa | country |
    | ---- | -------- | ------------------------- | ----- | ------- |
    | 1    | Google   | https://www.google.com/   | 1     | USA     |
    | 2    | 淘宝     | https://www.taobao.com/   | 13    | CN      |
    | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |
    
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE url LIKE '%oo%';
    ```
    
  - | id   | name     | url                       | alexa | country |
    | ---- | -------- | ------------------------- | ----- | ------- |
    | 1    | Google   | https://www.google.com/   | 1     | USA     |
    | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |
    
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE name LIKE '_oogle';
    ```
    
  - | id   | name   | url                     | alexa | country |
    | ---- | ------ | ----------------------- | ----- | ------- |
    | 1    | Google | https://www.google.com/ | 1     | USA     |
    
  - ```sql
    SELECT * 
    FROM raw_data 
    WHERE name LIKE 'G_o_le';
    ```
    
  - | id   | name   | url                     | alexa | country |
    | ---- | ------ | ----------------------- | ----- | ------- |
    | 1    | Google | https://www.google.com/ | 1     | USA     |
    
  - How to use `[charlist]`, `[^charlist]`  or `^[^charlist]` and `REGEXP` or `NOT REGEXP`. 



### ORDER BY[^Q3]

- Purpose: sort the column(s) of result set by certain keywords.
- Notes: 
  - Ascending order is the default one. If want to sort the result set by descending order, one can use keyword `DESC` or `DESCENDING`.
  - When `ORDER BY` several columns, the priority of the order accords with the order of mention of the columns. 
  - When `ORDER BY` several columns, `ASC`/`ASCENDING` or `DESC`/`DESCENDING` are only valid for the nearest left most column name. Other column names without `ASC` or `DESC` are the default ascending order. 
  - `ORDER BY` must be the last clause in the statement. Otherwise, there will be an error message. 
  - We can use the relative position of the column in the `SELECT` statement to replace the column name in `ORDER BY` clause. 
- Format: `SELECT column_name1,column_name2,...column_name FROM table_name ORDER BY column_name1,column_name2,...,column_name ASC|DESC;`
- Sample:
  - ```sql
    SELECT * 
    FROM raw_data ORDER by alexa;
    ```
  - | id   | name     | url                       | alexa | country |
    | ---- | -------- | ------------------------- | ----- | ------- |
    | 1    | Google   | https://www.google.com/   | 1     | USA     |
    | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |
    | 2    | 淘宝     | https://www.taobao.com/   | 13    | CN      |
    | 3    | 微博     | http://weibo.com/         | 20    | CN      |
  - ```sql
    SELECT * 
    FROM raw_data ORDER BY alexa DESC;
    ```
  - | id   | name     | url                       | alexa | country |
    | ---- | -------- | ------------------------- | ----- | ------- |
    | 3    | 微博     | http://weibo.com/         | 20    | CN      |
    | 2    | 淘宝     | https://www.taobao.com/   | 13    | CN      |
    | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |
    | 1    | Google   | https://www.google.com/   | 1     | USA     |
  - ```sql
    SELECT * 
    FROM raw_data ORDER BY country,alexa;
    ```
  - | id   | name     | url                       | alexa | country |
    | ---- | -------- | ------------------------- | ----- | ------- |
    | 2    | 淘宝     | https://www.taobao.com/   | 13    | CN      |
    | 3    | 微博     | http://weibo.com/         | 20    | CN      |
    | 1    | Google   | https://www.google.com/   | 1     | USA     |
    | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |



### JOIN[^Note6]

- Purpose: Combine two or more tables together based on common fields. Normally `JOIN` means `INNER JOIN`.

<img src="https://www.runoob.com/wp-content/uploads/2019/01/sql-join.png" alt="`JOIN` summary" style="zoom:50%;" />

- Briefly, 
  - $A$ `INNER JOIN` $B$ means $A \cap B$. 
  - $A$ `LEFT JOIN` $B$ means return all the records of $A$, and return `NULL` if the record $n$ is in $A$ but not in $B$ $(i.e \quad n \in A, \ n \notin B)$.
  - $A$ `RIGHT JOIN` $B$ means return all the records of $B$, and return `NULL` if the record $n$ is in $B$ but not in $A$ $(i.e \quad n \in B, \ n \notin A)$.
  - $A$ `FULL OUTER JOIN` $B$ means $A \cup B$.



#### INNER JOIN

- Purpose: It returns the records which satisfy the condition of `JOIN` from all tables. 
  
  ![`INNER JOIN` picture](https://www.runoob.com/wp-content/uploads/2013/09/img_innerjoin.gif "INNER JOIN")
- Notes:
  - `JOIN` and `INNER JOIN` are the same. 
  - There are some differences using clause `ON` and `WHERE`. ***NEED FURTHER CHECK***.
  - If no condition holds in certain row of table1, the row will not be returned. 
- Format:  
  - `SELECT column_name1,column_name2,...,column_name FROM table1 INNER JOIN table2 ON table1.column_name=table2.column_name;`
  - `SELECT column_name1,column_name2,...,column_name FROM table1 JOIN table2 ON table1.column_name=table2.column_name;`
- Sample:
  - ```sql
    INSERT INTO raw_data 
    VALUES (5,'百度','https://wwww.baidu.com/',4,'CN');
    
    SELECT raw_data.name, raw_data_date.count, raw_data_date.date 
    FROM raw_data 
    INNER JOIN raw_data_date 
    ON raw_data.id = raw_data_date.site_id 
    ORDER BY raw_data_date.count;
    
    DELETE FROM raw_data 
    WHERE name = '百度';
    ```
  - | name     | count | date       |
    | -------- | ----- | ---------- |
    | 淘宝     | 10    | 2016-05-14 |
    | Facebook | 13    | 2016-05-15 |
    | Google   | 45    | 2016-05-10 |
    | 微博     | 100   | 2016-05-13 |
    | 微博     | 201   | 2016-05-17 |
    | 百度     | 205   | 2016-05-14 |
    | 微博     | 220   | 2016-05-15 |
    | Google   | 230   | 2016-05-14 |
    | 百度     | 545   | 2016-05-16 |



#### OUTER JOIN

##### LEFT JOIN

- Purpose: `LEFT JOIN` returns every column in table1 which is the left table. If there is no match in table2, then return `NULL`. 

![`LEFT JOIN` picture](https://www.runoob.com/wp-content/uploads/2013/09/img_leftjoin.gif)

- Notes:
  - In some RDBMS, `LEFT JOIN` is equivalent with `LEFT OUTER JOIN`.
- Format: 
  - `SELECT column_name1,column_name2,...,column_name FROM table1 LEFT JOIN table2 ON table1.column_name=table2.colmn_name;`
  - `SELECT column_name1,column_name2,...,column_name FROM table1 LEFT OUTER JOIN table2 ON table1.column_name=table2.column_name;`
- Sample:
  - ```sql
    INSERT INTO raw_data 
    VALUES (5,'百度','https://wwww.baidu.com/',4,'CN'), (6,'stackoverflow','http://stackoverflow.com/',0,'IND'); 
    
    SELECT a.name,b.count,b.date 
    FROM raw_data AS a 
    LEFT JOIN raw_data_date AS b 
    ON a.id = b.site_id 
    ORDER BY b.count DESC; 
    
    DELETE FROM raw_data WHERE name IN ('百度','stackoverflow'); 
    ```
  - | name          | count | date       |
    | ------------- | ----- | ---------- |
    | stackoverflow | NULL  | NULL       |
    | 百度          | 545   | 2016-05-16 |
    | Google        | 230   | 2016-05-14 |
    | 微博          | 220   | 2016-05-15 |
    | 百度          | 205   | 2016-05-14 |
    | 微博          | 201   | 2016-05-17 |
    | 微博          | 100   | 2016-05-13 |
    | Google        | 45    | 2016-05-10 |
    | Facebook      | 13    | 2016-05-15 |
    | 淘宝          | 10    | 2016-05-14 |



##### RIGHT JOIN

- Purpose: `RIGHT JOIN` returns every column in table2 which is the right table. If there is no match in table1, then return `NULL`. 

![`RIGHT JOIN` picture](https://www.runoob.com/wp-content/uploads/2013/09/img_rightjoin.gif)

- Notes: 
  - In some RDBMS, `RIGHT JOIN` is equivalent with `RIGHT OUTER JOIN`.
- Format: 
  - `SELECT column_name1,column_name2,...,column_name FROM table1 RIGHT JOIN table2 ON table1.column_mame=table2.column_name;`
  - `SELECT column_name1,column_name2,...,column_name FROM table1 RIGHT OUTER JOIN table2 ON table1.column_name=table2.column_name;` 
- Sample:
  - ```sql
    INSERT INTO raw_data_date 
    VALUES (10,6,111,'2016-03-19'); 
    
    INSERT INTO raw_data 
    VALUES (5,'百度','https://wwww.baidu.com/',4,'CN'); 
    
    SELECT a.name,b.count,b.date 
    FROM raw_data AS a 
    RIGHT JOIN raw_data_date AS b  
    ON b.site_id = a.id 
    ORDER BY b.count DESC; 
    
    DELETE FROM raw_data_date WHERE site_id = 6; 
    DELETE FROM raw_data WHERE name IN ('百度');
    ```
  - | name     | count | date       |
    | -------- | ----- | ---------- |
    | 百度     | 545   | 2016-05-16 |
    | Google   | 230   | 2016-05-14 |
    | 微博     | 220   | 2016-05-15 |
    | 百度     | 205   | 2016-05-14 |
    | 微博     | 201   | 2016-05-17 |
    | NULL     | 111   | 2016-03-19 |
    | 微博     | 100   | 2016-05-13 |
    | Google   | 45    | 2016-05-10 |
    | Facebook | 13    | 2016-05-15 |
    | 淘宝     | 10    | 2016-05-14 |



##### FULL OUTER JOIN

- Purpose: It will return the record of both table1 and table2. If there is no match in neither table1 or table2, it will return `NULL`. 

![`FULL OUTER JOIN` picture](https://www.runoob.com/wp-content/uploads/2013/09/img_fulljoin.gif)

- Notes:
  - `FULL OUTER JOIN` combines the results of both `LEFT JOIN` and `RIGHT JOIN`.
  - MySQL does not support `FULL OUTER JOIN` clause. 
- Format: `SELECT column_name1,column_name2,...,column_name FROM table1 FULL OUTER JOIN table2 ON table1.column_name=table2.column_name;`
- Sample: 
  - ```sql
    INSERT INTO raw_data_date 
    VALUES (10,7,111,'2016-03-19'); 
    
    INSERT INTO raw_data 
    VALUES (6,'百度','https://wwww.baidu.com/',4,'CN'); 
    
    SELECT a.name, b.count, b.date 
    FROM raw_data AS a 
    FULL OUTER JOIN raw_data_date AS b 
    ON a.id=b.site_id 
    ORDER BY b.count DESC; 
    
    DELETE FROM raw_data_date WHERE site_id = 7; 
    DELETE FROM raw_data WHERE name IN ('百度');
    ```
  - | name     | count | date       |
    | -------- | ----- | ---------- |
    | 百度     | NULL  | NULL       |
    | NULL     | 545   | 2016-05-16 |
    | Google   | 230   | 2016-05-14 |
    | 微博     | 220   | 2016-05-15 |
    | NULL     | 205   | 2016-05-14 |
    | 微博     | 201   | 2016-05-17 |
    | NULL     | 111   | 2016-03-19 |
    | 微博     | 100   | 2016-05-13 |
    | Google   | 45    | 2016-05-10 |
    | Facebook | 13    | 2016-05-15 |
    | 淘宝     | 10    | 2016-05-14 |



## Calculate fields

### Concatenate

- Purpose: combine several column together as a single output. 
- Notes:
  - Different RDBMS have different signs or functions to concatenate fields. 
- Format: One can use `+` or `||` to concatenate values. In MySQL and MariaDB, one should use special function. 
- Sample: ==***TBC***==



## Advanced Statement

### CASE[^Note5]

- Purpose: It goes through conditions and returns a value when the first condition is met (like if-then-else statement). 
- Notes:
  - Once a condition is true, it will stop reading and return the result. If no conditions are true, it returns the value in the `ELSE` clause. 
  - If there is no `ELSE` clause and no conditions are true, it will return `NULL`. 
  - `AS` clause is optional. It can help you to create a column if you use `CASE` statement behind `SELECT` statement. 
- Format: 
  - ```sql
    CASE
    	WHEN condition1 
    	THEN result1    
    	WHEN condition2 
    	THEN result2    
    	...     
    	WHEN conditonN 
    	THEN resultN    
    	ELSE result 
    END AS column_name;
    ```
- Sample:
  - ```sql
    SELECT name, url, alexa, country, 
    CASE    
    	WHEN country = 'USA'  
    	THEN 'not China'    
    	WHEN country = 'CN'  
    	THEN 'not USA'  
    END AS country_logic 
    FROM raw_data;
    ```
    
  - | name     | url                       | alexa | country | country_logic |
    | -------- | ------------------------- | ----- | ------- | ------------- |
    | Google   | https://www.google.com/   | 1     | USA     | not China     |
    | 淘宝     | https://www.taobao.com/   | 13    | CN      | not USA       |
    | 微博     | http://weibo.com/         | 20    | CN      | not USA       |
    | Facebook | https://www.facebook.com/ | 3     | USA     | not China     |
    
  - ```sql
    SELECT name, url, alexa, country, 
    CASE    
    	country    
    	WHEN 'USA'  
    	THEN 'not CHina'    
    	WHEN 'CN'  
    	THEN 'not USA' 
    END AS country_logic 
    FROM raw_data;
    ```
    
  - | name     | url                       | alexa | country | country_logic |
    | -------- | ------------------------- | ----- | ------- | ------------- |
    | Google   | https://www.google.com/   | 1     | USA     | not China     |
    | 淘宝     | https://www.taobao.com/   | 13    | CN      | not USA       |
    | 微博     | http://weibo.com/         | 20    | CN      | not USA       |
    | Facebook | https://www.facebook.com/ | 3     | USA     | not China     |
    
  - It can also use in `GROUP BY` clause.



### IF

* Purpose: Return certain value regarding the result of logical expression. 
* Notes: `IF` function is not supported by psql. 

* Format: `IF(logical_expression,true_value,false_value)`

* Sample: 

  * ```sql
    SELECT
      name,
      url,
      IF(country = 'CN', 1, 2) AS nation
    FROM
      raw_data;
    ```

  * | id   | name     | url                       | alexa | country |
   | ---- | -------- | ------------------------- | ----- | ------- |
    | 1    | Google   | https://www.google.com/   | 1     | 2       |
    | 2    | 淘宝     | https://www.taobao.com/   | 13    | 1       |
    | 3    | 微博     | http://weibo.com/         | 20    | 1       |
    | 4    | Facebook | https://www.facebook.com/ | 3     | 2       |



### AS[^Note4] (Alias)

- Purpose: designate an alias for a column or a table to increase readability. 
- Notes: 
  - If column_name contains space, one should use double quotes`“”` or square brackets`[]`.
  - It is useful to use alias in the following conditions:
    - It involves more than one table in the search. 
    - It uses function during the search. [^Q1]
    - The column name is long or not readable. 
    - It needs to concatenate more than one column together. 
- Format: 
  - Column alias: `SELECT column_name AS alias_name FROM table_name;`
  - Table alias: `SELECT column_name1,column_name2,...,column_name FROM table_name AS alias_name;`
- Sample: 
  - ```sql
    SELECT name AS n, 
    country AS c 
    FROM raw_data;
    ```
  - | n        | c    |
    | -------- | ---- |
    | Google   | USA  |
    | 淘宝     | CN   |
    | 微博     | CN   |
    | Facebook | USA  |
  - > `CONCAT()`[^5] means concatenate values. 
  - ```sql
    SELECT name,
    CONCAT(url,', ',alexa,', ',country) AS site_info 
    FROM raw_data;
    ```
  - | name     | CONCAT(url,',',alexa,',',country) |
    | -------- | --------------------------------- |
    | Google   | https://www.google.com/, 1, USA   |
    | 淘宝     | https://www.taobao.com/, 13, CN   |
    | 微博     | http://weibo.com/, 20, CN         |
    | Facebook | https://www.facebook.com/, 3, USA |
  - ```sql
    SELECT w.name, w.url, d.count, d.date 
    FROM raw_data AS w, 
    raw_data_date AS d 
    WHERE d.site_id=w.id AND w.name='Google';
    ```
  - | name   | url                     | count | date       |
    | ------ | ----------------------- | ----- | ---------- |
    | Google | https://www.google.com/ | 45    | 2016-05-10 |
    | Google | https://www.google.com/ | 230   | 2016-05-14 |
  - ```sql
    SELECT raw_data.name, raw_data.url, raw_data_date.count, raw_data_date.date 
    FROM raw_data, raw_data_date 
    WHERE raw_data_date.site_id=raw_data.id AND raw_data.name='Google';
    ```
  - | name   | url                     | count | date       |
    | ------ | ----------------------- | ----- | ---------- |
    | Google | https://www.google.com/ | 45    | 2016-05-10 |
    | Google | https://www.google.com/ | 230   | 2016-05-14 |



### UNION[^Note7]

- Purpose: `Union` can combine the results of two or more `SELECT` statements. 
- Notes:
  - The result sets which one intends to combine must have the same number of column and the similar data type for each column. 
  - The order of columns for each result sets intended to combine must be the same. 
  - `UNION` will pick different records by default. One can use `UNION ALL` if allows duplicate values. 
  - The header of the union set equals to the header of the result set of the first `SELECT` statement.
- Format: 
  - `SELECT column_name1,column_name2,...,column_name FROM table1 UNION SELECT column_name1,column_name2,...,column_name FROM table2;`
  - `SELECT column_name1,column_name2,...,column_name FROM table1 UNION ALL SELECT column_name1,column_name2,...,column_name FROM table2;`
- Sample:
  - ```sql
    SELECT country 
    FROM raw_data 
    UNION 
    SELECT country 
    FROM raw_data_app 
    ORDER BY country;
    ```
  - | country |
    | ------- |
    | CN      |
    | USA     |
  - ```sql
    SELECT country 
    FROM raw_data 
    UNION ALL 
    SELECT country 
    FROM raw_data_app 
    ORDER BY country;
    ```
  - | country |
    | ------- |
    | CN      |
    | CN      |
    | CN      |
    | CN      |
    | CN      |
    | USA     |
    | USA     |
  - ```sql
    SELECT country, name 
    FROM raw_data 
    WHERE country IN ('CN') 
    UNION ALL 
    SELECT country, app_name 
    FROM raw_data_app 
    WHERE country IN ('CN') 
    ORDER BY country;
    ```
  - | country | name |
    | ------- | ---- |
    | CN      | 淘宝 |
    | CN      | 微博 |
    | CN      | QQ   |
    | CN      | 微博 |
    | CN      | 淘宝 |



### Constraints

- Purpose: Set certain rules for the data in the table. If there are some data violate certain constraint, it will be terminated. 
- Notes:
  - Constraints can be use in `CREATE TABLE` statement or `ALTER TABLE` statement. 
- General format:
  - ```sql
    CREATE TABLE table_name 
    (    
        column_name1 data_type(size) constraint_name,    
        column_name2 data_type(size) constraint_name,    
        column_name3 data_type(size) constraint_name,    
        ....    
        column_name data_type(size) constraint_name
    );
    ```



#### NOT NULL

- Purpose: Prohibit `NULL` value in certain column. If there is no value in one record, it can not be insert into the table. 
- Format, & sample:
  - ```sql
    CREATE TABLE person 
    (    
        ID int NOT NULL,    
        LastName varchar(255) NOT NULL,    
        FirstName varchar(255) NOT NULL,    
        Age int 
    );
    ```
  - | id   | lastname | firstname | age  |
    | ---- | -------- | --------- | ---- |
    |      |          |           |      |
  - ==The following two examples have some bugs.== `ALTER` or `MODIFY`?
  - ```sql
    -- use the table created above.  
    -- add constraint to column Age 
    ALTER TABLE person 
    ALTER Age numeric NOT NULL;
    ```
  - ```sql
    -- use the table created above. 
    -- delete constraint to column Age 
    ALTER TABLE person 
    MODIFY Age int NULL;
    ```



#### UNIQUE

- Purpose: Guarantee values in each record are unique. 
- Notes: 
  - `UNIQUE` and `PRIMARY KEY` guarantee the uniqueness of each record. 
  - `PRIMARY KEY` has an auto `UNIQUE` constraint. 
  - There can be more than one `UNIQUE` in one table. There can be only one `PRIMARY KEY` in one table. 
  - Different RDBMS have different syntax for `UNIQUE`. 
- Format, & sample:
  - ```sql
    -- MySQL `CREATE TABLE` 
    CREATE TABLE person 
    ( 
        P_Id int NOT NULL, 
        LastName varchar(255) NOT NULL, 
        FirstName varchar(255), 
        Address varchar(255), 
        City varchar(255), 
        UNIQUE (P_Id) 
    );
    ```
  - ```sql
    -- SQL server, Oracle, MS Access `CREATE TABLE` 
    CREATE TABLE person 
    ( 
        P_Id int NOT NULL UNIQUE, 
        LastName varchar(255) NOT NULL, 
        FirstName varchar(255), 
        Address varchar(255), 
        City varchar(255) 
    ); 
    ```
  - ```sql
    -- SQL server, Oracle, MS Access `CREATE TABLE` several `UNIQUE` 
    CREATE TABLE person 
    ( 
        P_Id int NOT NULL, 
        LastName varchar(255) NOT NULL, 
        FirstName varchar(255), 
        Address varchar(255), 
        City varchar(255), 
        CONSTRAINT uc_PersonID UNIQUE (P_Id,LastName) 
    ); 
    ```
  - ```sql
    -- MySQL, SQL server, Oracle, MS Access `ALTER TABLE` 
    ALTER TABLE person   
    ADD UNIQUE (P_Id); 
    ```
  - ```sql
    -- MySQL, SQL server, Oracle, MS Access `ALTER TABLE` several `UNIQUE`  
    ALTER TABLE person  
    ADD CONSTRAINT uc_PersonID UNIQUE (P_Id,LastName); 
    ```
  - ```sql
    -- MySQL delete `UNIQUE` constraint  
    ALTER TABLE person  
    DROP INDEX uc_PersonID; 
    ```
  - ```sql
    -- SQL server, Oracle, MS Access delete `UNIQUE` constraint  
    ALTER TABLE person  
    DROP CONSTRAINT uc_PersonID; 
    ```



#### PRIMARY KEY

- Purpose: Combination of `NOT NULL` and `UNIQUE` to make sure that every column or the combination of more than one column have the unique identifier. It can help to locate certain record easier and faster. 
- Notes:
  - There can be more than one `UNIQUE` in one table. There can be only one `PRIMARY KEY` in one table. 
  - `PRIMARY KEY` must contain unique value. 
  - `PRIMARY KEY` can not contain `NULL` value. 
  - Every table should have one and only one `PRIMARY KEY`. But a `PRIMARY KEY` can have more than one column.  
  - Different RDBMS have different syntax for `PRIMARY KEY`. 
- Format, & sample:
  - ```sql
    -- MySQL 
    CREATE TABLE person 
    ( 
        P_Id int NOT NULL, 
        LastName varchar(255) NOT NULL, 
        FirstName varchar(255), 
        Address varchar(255), 
        City varchar(255), 
        PRIMARY KEY (P_Id) 
    ); 
    ```
  - ```sql
    -- SQL server, Oracle, MS Access 
    CREATE TABLE person 
    ( 
        P_Id int NOT NULL PRIMARY KEY, 
        LastName varchar(255) NOT NULL, 
        FirstName varchar(255), 
        Address varchar(255), 
        City varchar(255) 
    ); 
    ```
  - ```sql
    -- MySQL, SQL server, Oracle, MS Access. Define more than one column to be the `PRIMARY KEY` 
    CREATE TABLE person 
    ( 
    	P_Id int NOT NULL, 
    	LastName varchar(255) NOT NULL, 
    	FirstName varchar(255), 
    	Address varchar(255), 
    	City varchar(255), 
    	CONSTRAINT pk_PersonID PRIMARY KEY (P_Id,LastName) 
    ); 
    -- pk_PersonID consistes of two columns which are P_ID and LastName. 
    ```
  - ```sql
    -- MySQL, SQL server, Oracle, MS Access. `ALTER TABLE` 
    ALTER TABLE person 
    ADD PRIMARY KEY (P_Id); 
    -- P_ID must not have `NUILL` value in `CREATE TABLE` statement.  
    ```
  - ```sql
    -- MySQL, SQL server, Oracle, MS Access. `ALTER TABLE`. Define more than one column to be the `PRIMARY KEY` 
    ALTER TABLE person 
    ADD CONSTRAINT pk_PersonID PRIMARY KEY (P_Id,LastName); 
    -- P_ID must not have `NUILL` value in `CREATE TABLE` statement.  
    ```
  - ```sql
    -- MySQL delete `PRIMARY KEY` 
    ALTER TABLE person 
    DROP PRIMARY KEY; 
    ```
  - ```sql
    -- SQL server, Oracle, MS Access delete `PRIMARY KEY` 
    ALTER TABLE person 
    DROP CONSTRAINT pk_PersonID; 
    ```



#### FEIGN KEY

- Purpose: The foreign key in one table (Child table) will point at the unique key in the other table (Parent table). Database uses `FOREIGN KEY` to store relationship. 
- Example: 

> Take **raw_data** and **raw_data_date** as examples
>
> ```sql
> INSERT INTO raw_data (name,url,alexa,country) 
> VALUES ('百度','https://wwww.baidu.com/','4','CN'); 
> SELECT * FROM raw_data; 
> ```
>
> **raw_data**
>
> | id   | name     | url                       | alexa | country |
> | ---- | -------- | ------------------------- | ----- | ------- |
> | 1    | Google   | https://www.google.com/   | 1     | USA     |
> | 2    | 淘宝     | https://www.taobao.com/   | 13    | CN      |
> | 3    | 微博     | http://weibo.com/         | 20    | CN      |
> | 4    | Facebook | https://www.facebook.com/ | 3     | USA     |
> | 5    | 百度     | https://www.facebook.com/ | 4     | CN      |
>
> **raw_data_date**
>
> | aid  | site_id | count | date       |
> | ---- | ------- | ----- | ---------- |
> | 1    | 1       | 45    | 2016-05-10 |
> | 2    | 3       | 100   | 2016-05-13 |
> | 3    | 1       | 230   | 2016-05-14 |
> | 4    | 2       | 10    | 2016-05-14 |
> | 5    | 5       | 205   | 2016-05-14 |
> | 6    | 4       | 13    | 2016-05-15 |
> | 7    | 3       | 220   | 2016-05-15 |
> | 8    | 5       | 545   | 2016-05-16 |
> | 9    | 3       | 201   | 2016-05-17 |
>
> Column `site_id` is a foreign key for raw_data_date which points at column `id` in raw_data as primary key. 

- Notes: 

  - `FOREIGN KEY` can prevent the destruction of the connection of both tables. 
  - It can prevent from inputting invalid data in `FOREIGN KEY`. Since all the data in the `FOREIGN KEY` must point at `PRIMARY KEY`.
  - `FOREIGN KEY` can be on the child table side in one-to-many relationship.
  - `PRIMARY KEY` in the child table will be the `FOREIGN KEY` in one-to-one relationship. 
  - Normally, we can store sensitive data in the child table to prevent modification. 

- Format, & sample:

  - ```sql
    -- MySQL 
    CREATE TABLE orders 
    ( 
        O_Id int NOT NULL, 
    	OrderNo int NOT NULL, 
    	P_Id int, 
    	PRIMARY KEY (O_Id), 
    	FOREIGN KEY (P_Id) REFERENCES person(P_Id) 
    ); 
    ```

  - ```sql
    -- SQL server, Oracle, MS Access 
    CREATE TABLE orders 
    ( 
    	O_Id int NOT NULL PRIMARY KEY, 
    	OrderNo int NOT NULL, 
    	P_Id int FOREIGN KEY REFERENCES person(P_Id) 
    ); 
    ```

  - ```sql
    -- MySQL, SQL server, Oracle, MS Access. Define more than one column to be the `FOREIGN KEY` 
    CREATE TABLE orders 
    ( 
    	O_Id int NOT NULL, 
    	OrderNo int NOT NULL, 
    	P_Id int, 
    	PRIMARY KEY (O_Id), 
    	CONSTRAINT fk_PerOrders FOREIGN KEY (P_Id, OrderNo) 
    	REFERENCES person(P_Id, No) 
    ); 
    -- may need further check 
    ```

  - ```sql
    -- MySQL, SQL server, Oracle, MS Access. `ALTER TABLE` 
    ALTER TABLE order 
    ADD FOREIGN KEY (P_Id) 
    REFERENCES Persons(P_Id); 
    ```

  - ```sql
    -- MySQL, SQL server, Oracle, MS Access. `ALTER TABLE`. Define more than one column to be the `FOREIGN KEY` 
    ALTER TABLE order 
    ADD CONSTRAINT fk_PerOrders 
    FOREIGN KEY (P_Id, OrderNo) 
    REFERENCES Persons(P_Id, No); 
    ```

  - ```sql
    -- MySQL delete `FOREIGN KEY` 
    ALTER TABLE order 
    DROP FOREIGN KEY fk_PerOrders; 
    ```

  - ```sql
    -- SQL server, Oracle, MS Access delete `PRIMARY KEY` 
    ALTER TABLE order 
    DROP CONSTRAINT fk_PerOrders; 
    ```

  - ==**There are some comments in the [RUNOOB.com][r1] which need further study. **==



#### CHECK

- Purpose: Make sure value in this column will satisfy certain criterion. 

- Notes:
  - It may affect the specific column related to the value in other columns. 
  
- Format, & sample: 

  - ```sql
    -- MySQL 
    CREATE TABLE person 
    ( 
        P_Id int NOT NULL, 
        LastName varchar(255) NOT NULL, 
        FirstName varchar(255), 
        Address varchar(255), 
        City varchar(255), 
        CHECK (P_Id>0) 
    ); 
    ```

  - ```sql
    -- SQL server, Oracle, MS Access 
    CREATE TABLE person 
    ( 
        P_Id int NOT NULL CHECK (P_Id>0), 
        LastName varchar(255) NOT NULL, 
        FirstName varchar(255), 
        Address varchar(255), 
        City varchar(255) 
    ); 
    ```

  - ```sql
    -- MySQL, SQL server, Oracle, MS Access. Define `CHECK` to more than one column 
    CREATE TABLE person 
    ( 
        P_Id int NOT NULL, 
        LastName varchar(255) NOT NULL, 
        FirstName varchar(255), 
        Address varchar(255), 
        City varchar(255), 
        CONSTRAINT chk_person CHECK (P_Id>0 AND City='Sandnes')  
    ); 
    ```

  - ```sql
    -- MySQL, SQL server, Oracle, MS Access. `ALTER TABLE`  
    ALTER TABLE person  
    ADD CHECK (P_Id>0); 
    ```

  - ```sql
    -- MySQL, SQL server, Oracle, MS Access. `ALTER TABLE`. Define `CHECK` to more than one column  
    ALTER TABLE person 
    ADD CONSTRAINT chk_Person CHECK (P_Id>0 AND City='Sandnes'); 
    ```

  - ```sql
    -- MySQL delete `CHECK`  
    ALTER TABLE person 
    DROP CHECK chk_person; 
    ```

  - ```sql
    -- SQL server, Oracle, MS Access delete `CHECK`  
    ALTER TABLE person 
    DROP CONSTRAINT chk_person; 
    ```

  - ==**There are some comments in the [RUNOOB.com][r1] which need further study. **==



#### DEFAULT

- Purpose: Assign default value to a record when there is no value in it. 

- Notes:

  - If there is no other value defined, it will assign default value in every new record. 

- Format, & sample:

  - ```sql
    ```

  - 



#### AUTO INCREMENT



### NULL

​    

## Function

### CONCAT()

- Purpose: Concatenate several string into one string. 
- Format: `CONCAT('value1','value2')`
- Sample:
  - ```sql
    SELECT CONCAT('FIRST ','SECOND');
    ```
  - | CONCAT('FIRST ','SECOND') |
    | ------------------------- |
    | FIRST SECOND              |
  - ```sql
    SELECT CONCAT(id,name,url) 
    FROM raw_data;
    ```
  - | CONCAT(id,name,url)                |
    | ---------------------------------- |
    | 1Googlehttps://www.google.com/     |
    | 2淘宝https://www.taobao.com/       |
    | 3微博http://weibo.com/             |
    | 4Facebookhttps://www.facebook.com/ |



### COUNT()

- Purpose: It returns the number of rows which satisfy certain conditions. 
- Notes:
  - `NULL` value will not be counted. 
  - ==***TBC***==



### SUM()

- Purpose: Return the sum of the select numeric column.
- Format: `SELECT SUM(column_name) FROM table_name;`
- Sample:
  - ```sql
    SELECT SUM(count) 
    FROM raw_data_date;
    ```
  - | sum  |
    | ---- |
    | 1569 |



### CAST()

* Purpose: Transform data type of the record into other data types with the help of `AS` keyword. 

* Notes:

  * There are limited number of data type one can transfer (Listed below). 

  * | Data type | Description                  |
    | --------- | ---------------------------- |
    | BINARY    | 二进制，同带binary前缀的效果 |
    | CHAR()    | 字符型，可带参数             |
    | DATE      | 日期                         |
    | TIME      | 时间                         |
    | DATETIME  | 日期时间型                   |
    | DECIMAL   | 浮点数                       |
    | SIGNED    | 有符号整数                   |
    | UNSIGNED  | 无符号整数                   |
    | INT       | 整数                         |

* Format: `CAST(expression AS data_type)`

* Sample: 

  * ```sql
    SELECT CAST('9.32' AS DECIMAL(100,2));
    -- DECIMAL(accuracy, decimal_point)
    -- accuracy means the how many digit we want to have.
    -- decimal_point means how many digit after the decimal point. 
    ```

  * | numeric |
    | ------- |
    | 9.32    |

    

### DATE



### NULL



### ROW_NUMBER()





## Cheatsheet

==**TBC**==



## References

[^1]: LIKE command will be elaborated in the following chapter.
[^2]: AND command will be elaborated in the following chapter. 
[^3]: OR command will be elaborated in the following chapter. 
[^4]: Wildcard will be specified in the following chapter.
[^5]: CONCAT() function will be elaborated in the following chapter.
[^6]: ORDER BY clause will be elaborated in the following chapter.
[^7]: INSERT INTO SELECT statement will be elaborated in the following chapter. 
[^Q1]: This part needs further investigation.
[^Q2]:  What does “start from row #2” mean exactly?
[^Q3]: ORDER BY is a clause.
[^Q4]: WHERE is a clause. 
[^Note1]: I think this syntax belongs to advanced syntax. DISTINCT is a keyword. 
[^Note2]: TOP is a keyword. 
[^Note3]: NULL means no value. It is different with space, empty string or 0. 
[^Note4]: This is/ They are keyword(s).
[^Note5]: This is/They are statement(s).
[^Note6]: THis is/They are clause(s).
[^Note7]: This is/They are operator(s).

[r1]: https://www.runoob.com/sql/sql-tutorial.html    "菜鸟教程"

[r2]: https://www.w3school.com.cn/sql/index.asp    "W3school中文版"

[r3]: https://wiki.jikexueyuan.com/project/sql/overview.html    "极客学院"

[r4]: https://www.w3schools.com/sql/default.asp    "W3school英文版"

[r5]: http://pg4e.com/    "PG4E"

> 《SQL必知必会》已看到P58。（2021/6/10 20:48）







## Picture references

![MySQL](D:\OneDrive - The Chinese University of Hong Kong\学术\extra_curriculum\coursera\Database_Design_and_Basic_SQL_in_PostgreSQL\picture_from_zhangxun\MySQL.jpg)

![SQL_queries_run_order](D:\OneDrive - The Chinese University of Hong Kong\学术\extra_curriculum\coursera\Database_Design_and_Basic_SQL_in_PostgreSQL\picture_from_zhangxun\SQL_queries_run_order.jpg)

![SQL_select_order](D:\OneDrive - The Chinese University of Hong Kong\学术\extra_curriculum\coursera\Database_Design_and_Basic_SQL_in_PostgreSQL\picture_from_zhangxun\SQL_select_order.jpg)

![SQL必会](D:\OneDrive - The Chinese University of Hong Kong\学术\extra_curriculum\coursera\Database_Design_and_Basic_SQL_in_PostgreSQL\picture_from_zhangxun\SQL必会.jpg)

![SQL基础知识](D:\OneDrive - The Chinese University of Hong Kong\学术\extra_curriculum\coursera\Database_Design_and_Basic_SQL_in_PostgreSQL\picture_from_zhangxun\SQL基础知识.jpg)

![数据库](D:\OneDrive - The Chinese University of Hong Kong\学术\extra_curriculum\coursera\Database_Design_and_Basic_SQL_in_PostgreSQL\picture_from_zhangxun\数据库.jpg)



## Practice

### Practice in PG4E

> psql command to access database: `psql -h pg.pg4e.com -p 5432 -U pg4e_e355679f28 pg4e_e355679f28`
>
> Password: `pg4e_p_08b5622af7e523c`
>
> Host: `pg.pg4e.com`
>
> Port: `5432`
>
> Database: `pg4e_e355679f28`
>
> User: `pg4e_e355679f28`
>
> Password: `pg4e_p_08b5622af7e523c`



### Practice in Zhihu

#### Sample 1

![sample1](D:\OneDrive - The Chinese University of Hong Kong\学术\extra_curriculum\coursera\Database_Design_and_Basic_SQL_in_PostgreSQL\sample_screenshot_zhihu\sample1.png)

```sql
SELECT  
member_id,  
url_token,  
p_date 
FROM  
creator_tool.crm_creator 
WHERE  
url_token IN ('tian-cai-mei-shao-nu-wang-ji-chao')  
AND p_date IN ('2021-06-10');
```

> Presto Source = moses:1988798
> 开始执行 SQL：
> SELECT
> member_id,
> url_token，
> p_date
> FROM
> creator_tool.crm_creator
> WHERE
> url_token IN ('tian-cai-mei-shao-nu-wang-ji-chao')
> AND p_date IN ('2021-06-10')
> QUERY STATE: QUEUED
> QUERY STATE: QUEUED
> QUERY STATE: QUEUED
> QUERY STATE: RUNNING; PROGRESS = 86.5%.
> 查询结束！



#### Sample 2

![sample2](D:\OneDrive - The Chinese University of Hong Kong\学术\extra_curriculum\coursera\Database_Design_and_Basic_SQL_in_PostgreSQL\sample_screenshot_zhihu\sample2.png)

```sql
SELECT
  DISTINCT title,
  concat(
    'https://www.zhihu.com/zvideo/',
    cast(zvideo_id as varchar)
  ) as website,
  zvideo_final_level
FROM
  (
    SELECT
      member_id,
      zvideo_id,
      title,
      zvideo_final_level,
      state,
      row_number() OVER(
        PARTITION BY zvideo_id
        ORDER BY
          zvideo_final_level ASC
      ) rn
      -- try to eliminate duplicates
    FROM
      dws_content.dws_content_zvideo_pt
  )
WHERE
  rn = 1
  AND member_id = 56104627
  AND zvideo_final_level IS NOT NULL
  AND state = 1
GROUP BY
  member_id,
  zvideo_id,
  title,
  zvideo_final_level;
  -- output in sample2.csv
```

> Presto Source = moses:2056646
开始执行 SQL：
SELECT
  DISTINCT title,
  concat(
    'https://www.zhihu.com/zvideo/',
    cast(zvideo_id as varchar)
  ) as website,
  zvideo_final_level
FROM
  (
    SELECT
      member_id,
      zvideo_id,
      title,
      zvideo_final_level,
      state,
      row_number() OVER(
        PARTITION BY zvideo_id
        ORDER BY
          zvideo_final_level ASC
      ) rn
    FROM
      dws_content.dws_content_zvideo_pt
  )
WHERE
  rn = 1
  AND member_id = 56104627
  AND zvideo_final_level IS NOT NULL
  AND state = 1
GROUP BY
  member_id,
  zvideo_id,
  title,
  zvideo_final_level
QUERY STATE: QUEUED
QUERY STATE: RUNNING
QUERY STATE: RUNNING; PROGRESS = 64.2%.
QUERY STATE: RUNNING; PROGRESS = 82.13%.
查询结束！



#### Sample 3

![sample3](D:\OneDrive - The Chinese University of Hong Kong\学术\extra_curriculum\coursera\Database_Design_and_Basic_SQL_in_PostgreSQL\sample_screenshot_zhihu\sample3.png)

```sql
SELECT
  DISTINCT member_id,
  zvideo_id,
  title,
  count(distinct title) as duplicate,
  concat(
    'https://www.zhihu.com/zvideo/',
    cast(zvideo_id as varchar)
  ) as website,
  published_date,
  zvideo_final_level,
  first_level_category_name
FROM
  dws_content.dws_content_zvideo_pt
WHERE
  p_date = date_sub(current_date, 1)
  AND member_id = 56104627
  AND zvideo_final_level IS NOT NULL
  AND zvideo_source = 5
  AND state = 1
GROUP BY
  member_id,
  zvideo_id,
  title,
  zvideo_final_level,
  published_date,
  first_level_category_name;
  -- output in sample3.csv
```

> Presto Source = moses:2056779
开始执行 SQL：
SELECT
  DISTINCT member_id,
  zvideo_id,
  title,
  count(distinct title) as duplicate,
  concat(
    'https://www.zhihu.com/zvideo/',
    cast(zvideo_id as varchar)
  ) as website,
  published_date,
  zvideo_final_level,
  first_level_category_name
FROM
  dws_content.dws_content_zvideo_pt
WHERE
  p_date = date_sub(current_date, 1)
  AND member_id = 56104627
  AND zvideo_final_level IS NOT NULL
  AND zvideo_source = 5
  AND state = 1
GROUP BY
  member_id,
  zvideo_id,
  title,
  zvideo_final_level,
  published_date,
  first_level_category_name
QUERY STATE: QUEUED
QUERY STATE: RUNNING; PROGRESS = 2.96%.
QUERY STATE: RUNNING; PROGRESS = 3.65%.
查询结束！



#### Sample 4

![sample4](D:\OneDrive - The Chinese University of Hong Kong\学术\extra_curriculum\coursera\Database_Design_and_Basic_SQL_in_PostgreSQL\sample_screenshot_zhihu\sample4.png)

```sql
SELECT
  DISTINCT a.member_id,
  b.fullname,
  a.title,
  a.website,
  a.published_date,
  a.zvideo_source
FROM
  (
    SELECT
      member_id,
      title,
      concat(
        'https://www.zhihu.com/zvideo/',
        cast(zvideo_id AS VARCHAR)
      ) AS website,
      published_date,
      IF(
        zvideo_source = 5,
        'spidered',
        cast(zvideo_source AS VARCHAR)
      ) AS zvideo_source
    FROM
      dws_content.dws_content_zvideo_pt
    WHERE
      p_date = date_sub(current_date, 1)
      AND published_date BETWEEN '2021-06-17'
      AND '2021-06-28'
      AND member_id IN (${ member_id })
      AND state = 1
    GROUP BY
      member_id,
      zvideo_id,
      title,
      published_date,
      zvideo_source
  ) AS a
  LEFT JOIN (
    SELECT
      fullname,
      member_id
    FROM
      dw_member.dw_member_pt_info
    where
      concat(p_year, '-', p_month, '-', p_day) = '2021-06-28'
    ORDER BY
      member_id
  ) AS b ON a.member_id = b.member_id;
  -- output in sample4.csv
```

> Presto Source = moses:2060205
开始执行 SQL：
SELECT
  DISTINCT a.member_id,
  b.fullname,
  a.title,
  a.website,
  a.published_date,
  a.zvideo_source
FROM
  (
    SELECT
      member_id,
      title,
      concat(
        'https://www.zhihu.com/zvideo/',
        cast(zvideo_id AS VARCHAR)
      ) AS website,
      published_date,
      IF(
        zvideo_source = 5,
        'spidered',
        cast(zvideo_source AS VARCHAR)
      ) AS zvideo_source
    FROM
      dws_content.dws_content_zvideo_pt
    WHERE
      p_date = date_sub(current_date, 1)
      AND published_date BETWEEN '2021-06-17'
      AND '2021-06-28'
      AND member_id IN (189466678, 752193450, 316134792, 37564890, 759173635, 575866543, 62898715, 713780394, 108859715, 748385815, 68057469, 543402713, 700733287, 3102708, 196047481, 8927436, 57827410, 84159440, 758039764, 201139173, 163443973, 242968964, 52953058, 766858797, 119161372, 55808214, 55676007, 508701489, 97022353, 524975766, 768122909, 37992790, 60835403, 422873, 36600042, 104456142, 242837628, 48840211, 95375386, 172349938, 54981091, 773830506, 773047576, 531430800, 767049164, 274320353, 8633874, 41972003, 53803864, 37204145, 109631619, 107598829, 106666949, 95538459)
      AND state = 1
    GROUP BY
      member_id,
      zvideo_id,
      title,
      published_date,
      zvideo_source
  ) AS a
  LEFT JOIN (
    SELECT
      fullname,
      member_id
    FROM
      dw_member.dw_member_pt_info
    where
      concat(p_year, '-', p_month, '-', p_day) = '2021-06-28'
    ORDER BY
      member_id
  ) AS b ON a.member_id = b.member_id
QUERY STATE: QUEUED
QUERY STATE: RUNNING
QUERY STATE: RUNNING; PROGRESS = 6.89%.
QUERY STATE: RUNNING; PROGRESS = 14.26%.
QUERY STATE: RUNNING; PROGRESS = 42.93%.
QUERY STATE: RUNNING; PROGRESS = 76.04%.
查询结束！



#### Sample 5

![sample5](D:\OneDrive - The Chinese University of Hong Kong\学术\extra_curriculum\coursera\Database_Design_and_Basic_SQL_in_PostgreSQL\sample_screenshot_zhihu\sample5.png)

```sql
SELECT
  a.material_id,
  a.commodity_name,
  a.commodity_type,
  a.asset_body_title,
  a.asset_body_url,
  b.show_pv,
  b.click_pv
FROM
  (
    SELECT
      material_id,
      commodity_name,
      commodity_type,
      asset_body_title,
      asset_body_url
    FROM
      rhea.material_v2
    WHERE
      commodity_name LIKE '首页槽位回答%'
      OR commodity_name LIKE '首页槽位视频%'
      OR commodity_name LIKE '首页槽位文章%'
  ) AS a
  JOIN (
    SELECT
      recommend_material_id,
      SUM(IF(logtype = 'cardshow', 1, 0)) AS show_pv,
      SUM(IF(logtype = 'event', 1, 0)) AS click_pv
    FROM
      dwd_vip.dwd_vip_channel_log_detail_pd
    WHERE
      p_date BETWEEN '${start_date}'
      AND '${end_date}'
    GROUP BY
      recommend_material_id
  ) AS b ON CAST(a.material_id AS VARCHAR) = CAST(b.recommend_material_id AS VARCHAR)
WHERE
  b.show_pv > 500;
  -- output in sample5.csv
```

> Presto Source = moses:2072780
开始执行 SQL：
SELECT
  a.material_id,
  a.commodity_name,
  a.commodity_type,
  a.asset_body_title,
  a.asset_body_url,
  b.show_pv,
  b.click_pv
FROM
  (
    SELECT
      material_id,
      commodity_name,
      commodity_type,
      asset_body_title,
      asset_body_url
    FROM
      rhea.material_v2
    WHERE
      commodity_name LIKE '首页槽位回答%'
      OR commodity_name LIKE '首页槽位视频%'
      OR commodity_name LIKE '首页槽位文章%'
  ) AS a
  JOIN (
    SELECT
      recommend_material_id,
      SUM(IF(logtype = 'cardshow', 1, 0)) AS show_pv,
      SUM(IF(logtype = 'event', 1, 0)) AS click_pv
    FROM
      dwd_vip.dwd_vip_channel_log_detail_pd
    WHERE
      p_date BETWEEN '2021-05-01'
      AND '2021-06-30'
    GROUP BY
      recommend_material_id
  ) AS b ON CAST(a.material_id AS VARCHAR) = CAST(b.recommend_material_id AS VARCHAR)
WHERE
  b.show_pv > 500
QUERY STATE: QUEUED
QUERY STATE: RUNNING
QUERY STATE: RUNNING; PROGRESS = 97.81%.
查询结束！



#### Sample 6

![sample6](D:\OneDrive - The Chinese University of Hong Kong\学术\extra_curriculum\coursera\Database_Design_and_Basic_SQL_in_PostgreSQL\sample_screenshot_zhihu\sample6.png)

```sql
SELECT
  DISTINCT a.member_id,
  b.fullname,
  a.title,
  a.website,
  a.published_date,
  a.published_time,
  a.zvideo_final_level,
  a.duration,
  a.avg_playduration,
  a.collected_num,
  a.shared_num,
  a.video_bullet,
  a.follow_num,
  a.card_num,
  a.upvoted_num,
  a.play_num,
  a.interest_play,
  a.initiative_play_num,
  a.vote_play_rate
FROM
  (
    SELECT
      member_id,
      title,
      CONCAT(
        'https://www.zhihu.com/zvideo/',
        CAST(zvideo_id AS VARCHAR)
      ) AS website,
      duration,
      published_date,
      FROM_UNIXTIME(published_time) AS published_time,
      play_num,
      video_bullet,
      vote_play_rate,
      collected_num,
      shared_num,
      card_num,
      follow_num,
      interest_play,
      upvoted_num,
      avg_playduration,
      zvideo_final_level,
      initiative_play_num
    FROM
      dws_content.dws_content_zvideo_pt
    WHERE
      p_date = date_sub(current_date, 1)
      AND member_id IN (${ member_id })
      AND state = 1
    GROUP BY
      member_id,
      zvideo_id,
      title,
      published_date,
      duration,
      play_num,
      published_time,
      video_bullet,
      vote_play_rate,
      collected_num,
      shared_num,
      card_num,
      follow_num,
      interest_play,
      upvoted_num,
      avg_playduration,
      zvideo_final_level,
      initiative_play_num
  ) AS a
  LEFT JOIN (
    SELECT
      fullname,
      member_id
    FROM
      dw_member.dw_member_pt_info
    where
      CONCAT(p_year, '-', p_month, '-', p_day) = '${end_date}'
    ORDER BY
      member_id
  ) AS b ON a.member_id = b.member_id;
  -- output in sample6.csv
```

> Presto Source = moses:2072873
开始执行 SQL：
SELECT
  DISTINCT a.member_id,
  b.fullname,
  a.title,
  a.website,
  a.published_date,
  a.published_time,
  a.zvideo_final_level,
  a.duration,
  a.avg_playduration,
  a.collected_num,
  a.shared_num,
  a.video_bullet,
  a.follow_num,
  a.card_num,
  a.upvoted_num,
  a.play_num,
  a.interest_play,
  a.initiative_play_num,
  a.vote_play_rate
FROM
  (
    SELECT
      member_id,
      title,
      CONCAT(
        'https://www.zhihu.com/zvideo/',
        CAST(zvideo_id AS VARCHAR)
      ) AS website,
      duration,
      published_date,
      FROM_UNIXTIME(published_time) AS published_time,
      play_num,
      video_bullet,
      vote_play_rate,
      collected_num,
      shared_num,
      card_num,
      follow_num,
      interest_play,
      upvoted_num,
      avg_playduration,
      zvideo_final_level,
      initiative_play_num
    FROM
      dws_content.dws_content_zvideo_pt
    WHERE
      p_date = date_sub(current_date, 1)
      AND member_id IN (45407634, 751551857, 189466678, 752193450, 725772798, 188223771, 41465620, 537772632, 47534862, 752932317, 579079232, 55469784, 544304565, 528168507, 222202886, 574812718, 101529511, 754205358, 137911735, 96816760, 753741809, 572833685, 52511443, 533427804, 268257196, 96605501, 526077489, 92991469, 113542582, 23662911, 755646761, 196408731, 755564145, 755295561, 543858738, 756035136, 216468856)
      AND state = 1
    GROUP BY
      member_id,
      zvideo_id,
      title,
      published_date,
      duration,
      play_num,
      published_time,
      video_bullet,
      vote_play_rate,
      collected_num,
      shared_num,
      card_num,
      follow_num,
      interest_play,
      upvoted_num,
      avg_playduration,
      zvideo_final_level,
      initiative_play_num
  ) AS a
  LEFT JOIN (
    SELECT
      fullname,
      member_id
    FROM
      dw_member.dw_member_pt_info
    where
      CONCAT(p_year, '-', p_month, '-', p_day) = '2021-06-30'
    ORDER BY
      member_id
  ) AS b ON a.member_id = b.member_id
QUERY STATE: QUEUED
QUERY STATE: RUNNING
QUERY STATE: RUNNING; PROGRESS = 4.42%.
QUERY STATE: RUNNING; PROGRESS = 43.2%.
QUERY STATE: RUNNING; PROGRESS = 63.04%.
查询结束！
