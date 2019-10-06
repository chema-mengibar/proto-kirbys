# kirbys

# Installation

https://getkirby.com/docs/guide

>If you want to unzip the file in the **root dir** and not in a **subfolder**   
change the path in the unzip-file.

1. Download the cms zip project from website `plainkit-master.zip`
2. Upload unzip.php file and plainkit-master.zip to Server in root dir
3. Call the unzip script in Browser  
  `http://{YOUR_DOMAIN}/unzip.php `

3. Rename the output folder with the project name  
   (! just for subfolder unzip )
4. Remove the .zip and the unzip.php files
4. Upload config files.
    See in: _cms\kirby_initial_configuration


# Configuration

## htaccess
>If the site is in a **subfolder** and not in the **root dir**,  

```
RewriteBase /{SUB_FOLDER_NAME}
```

## Config File
Upload the file from `{ROOT_PROJECT}\_cms\kirby_initial_configuration`  
in the same folder structure to the server.  
-> `.\site\config\config.php`


## Panel Access
`http://{YOUR_DOMAIN}/{SUB_FOLDER_NAME}/panel`
