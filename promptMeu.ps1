function prompt
 {
	$tam = 20
	$str = $pwd.Path
	$str = $str.substring(3, $str.length - 3)
	$dri = $pwd.Path.substring(0,3)
	if ($str.length -ge $tam) {
		$str = "..." + $str.substring($str.length - $tam + 4)
	}
	"$dri$str>"
}