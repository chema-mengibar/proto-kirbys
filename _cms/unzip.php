<?php

$zip = new ZipArchive;
$res = $zip->open('plainkit-master.zip');
if ($res === TRUE) {
  $zip->extractTo('./');
  $zip->close();
  echo 'WARNING: rename folder "starterkit-master" to "kirbi"';
} else {
  echo 'doh!';
}


?>