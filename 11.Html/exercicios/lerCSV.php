<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
    
<?php
header("Content-type: text/html; charset=utf-8");
$registro = array();
$numAula = 1;
$file = fopen("../midia/Udemy.csv","r");
$linha = fgetcsv($file, 0, ";");
$linha = array_map("utf8_encode", $linha);
echo "<h1> Curso JavaScript Udemy </h1>";
echo "<ol><h3>$linha[1]</h3>";
if ($file)
while (!feof($file)) {
    $linha = fgetcsv($file, 0, ";");
    if (!$linha) {
        continue;
    }
    $linha = array_map("utf8_encode", $linha);
    if ($linha[0] == 0) {
        echo "</ol><ol><h3>$linha[1]</h3>";
    } else {
        echo "<li numero=\"$numAula\" tempo=\"$linha[2]\" title=\"Aula:$numAula - Tempo:$linha[2]\" >$linha[1]</li>";
        $numAula++;
    }
    array_push($registro, $linha);
}
echo "</ol>";
//print_r($registro);
fclose($file);

?>
</body>
</html>