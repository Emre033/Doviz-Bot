module.exports = {
    name:"döviz",
    aliases:["doviz"],
    code:`
    $author[Döviz 💸;$userAvatar]
    $description[
        Aşağıda güncel döviz kuru yer alıyor!\n\nEuro: **$get[euro]**\nDolar: **$get[dolar]**
    ]
    $let[euro;$jsonRequest[https://api.metehanstudio.xyz/api/euro?api_key=metehanfreekey;euro;Hata!
]]
$let[dolar;$jsonRequest[https://api.metehanstudio.xyz/api/dolar?api_key=metehanfreekey;dolar;Hata!
]]
    `
}
