$c = Get-Content "app/components.tsx" -Raw
$i = $c.IndexOf("export function ContactPage()")
echo "Index is $i"
if ($i -ge 0) {
    echo $c.Substring($i, 700)
}

