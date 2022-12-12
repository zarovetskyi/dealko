<?php 

$DIR = array_slice(scandir('./'), 2);

?>


<?php foreach ($DIR as $key) : ?>
	<p><a href="<?= $key ?>"><?= $key ?></a></p>
<?php endforeach; ?>