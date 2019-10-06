# Kirbys Integration

## Menu
- https://getkirby.com/docs/cookbook/templating/menus

```php
<?php

// main menu items
$items = $pages->listed();

// only show the menu if items are available
if($items->isNotEmpty()):

?>
<nav>
  <ul>
    <?php foreach($items as $item): ?>
    <li><a<?php e($item->isOpen(), ' class="active"') ?> href="<?= $item->url() ?>"><?= $item->title()->html() ?></a></li>
    <?php endforeach ?>
  </ul>
</nav>
<?php endif ?>
```

- https://getkirby.com/docs/guide/blueprints/fields


| Page / Component | Variable         | Type |
|:---------------- |:---------------- | ---- |
| Home             | box_teaser__text |      |
|                  |                  |      |
