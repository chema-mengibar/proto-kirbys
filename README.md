# INSTALLATION
```
npm i
```

# TASKS - DEVELOPMENT

Change the .env file to the target enviroment: CMS or PUG

```
npm run base
npm run dev
```

```
npm run cms:cut
```

# TASKS - CMS EXPORT

Same build and Snippets cut, without Browser Sync.  
Change the .env file to the target enviroment: CMS
```
npm run build
```


# ASSETS - IMAGES

## Logo, Icons and Placeholders
- **Edit File:** `_project\images-layout` (Affinity, Adobe Illustrator)
- **Files Dir:** `src\assets\images`

### Formats
  - 100x100
  - 375x667
  - 800x600
  - 864x486
  - 864x864
  - 864x1536
  - 1152x640
  - 1920x1080
  - 1920x1440
  - 2880x1620

## Icons
Icons are in `.\src\view\index.pug` file included
```
include ../assets/images/icons.svg
```
Use the mixin Icon to add css-customizable svg-icons to the site.
`\src\view\components\icon\icon.pug`

## More Icons
- https://www.flaticon.com/

## Reads
- **Background image sizes**  
  https://www.webmalama.com/the-best-full-screen-background-image-sizes-for-web-design/


# PARTS - CMS (Kirbi)
**See in project:** `./_cms/KIRBIS_CMS.md`


# PARTS - TEMPLATE TOOL (Pug +  Gulp)
https://pugjs.org/api/getting-started.html

## Project Structure
- **Source files:** `\src\view`
  - ./components
  - ./pages
  - ./temp
  - index
- **Build Pages files:** `\dist-pages`

## Reads
- https://stackoverflow.com/questions/42023440/is-it-possible-to-write-php-in-jade-pug

## Enviroment Variables
- **File:** `.env`  

### Usage in node script
```
require('dotenv').config();

console.log( 'BUILD_CONTENT', process.env.BUILD_CONTENT )
```

### Blocks and Components

Each block has a pug and a data file.  
Inside the code are **delimiters** lines code that could be use to cut and create easily the snippets for the cms.
```
@cursor:pug:header:end
```

# Development Automated Task (Gulp)
https://gulpjs.com/

## Project Structure
- **Main Tasks:** `gulpfile.js`
- **Sub Tasks:** `.\gulp-tasks`

## Reads
- https://www.sitepoint.com/how-to-migrate-to-gulp-4/

# INTEGRATION in CMS
- ./dist-pages
- ./src-cms
