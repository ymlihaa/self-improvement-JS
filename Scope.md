# What's scope in JS

Scope javascript ' te değişkenlerin erişebilirliğini (Görülürlüğünü) belirler .

### JavaScript Fonksiyon Kapsamı :

<ul>
    <li>1. Local scope</li>
    <li>2. Global scope</li>
</ul>
<p>
JS'de fonksiyon kapsamı diye bir şey de vardır. Bu her fonksiyonunu kendi scope ' u olduğu anlamına gelir.
<br>
- Bir fonksiyonunun içerisinde tanımlanan değişkene fonksiyonunun dışarısından erişilemez.
</p>

### Local JS Değişkenleri :

<p>
Bir JS fonksiyonu içerisinde belirlenen değişkenler local değişken olur .
Local değişkenlerin fonksiyon kapsamı vardır . Yani bunlara sadece fonksiyonun içerisinden erişilebilir.
</p>

##### For Example :

```
function myFunc() {
  var carName = "volvo";
}
console.log(carName);
```

<p>
Yukarıdaki kod;
carName is not defined hatası döndürecektir. Global scope üzerinden bu değişkene erişilemez . Çünkü bu değişkenin
kapsamı fonksiyonun scope'u kadardır .
</p>

### Global JS Değişkenleri :

<p>Bir değişken herhangi bir fonksiyonun içerisinde tanımlanmamış ise Global değişken olur .<br>
Bir web sayfasındaki tüm komut dosyaları ve fonskiyonlar ona erişebilir .
</p>

```
var carName = "volvo";
function myFunc() {
  console.log(carName);
}
```

Bu kod sorunsuz çalışacaktır.

### JS DEĞİŞKENLERİ :

<p> Javascriptte fonksiyonlar da nesnelerde birer değişkendir .</p>

### Default Scope :

<p> Eğer bir değişken bildirilmeden kullanılmak isterse bu değişkenin scope 'u varsayılan olarak global olarak ayarlanır .</p>

##### For example :

```
function myFunc() {
  carName = "volvo";
}
myFunc();
console.log(carName);
```

<p> Bu kod çalışacaktır. Fakat myFunc fonskiyonunu çağırmadan bunu deneyecek olursak hata alacağız . Bunun sebebini bende araştırıyorum . Ama tahminim gecerli atamayı yapması için fonksiyonun çağırılması gerekliliği. </p>

<p> Keza strict mod da bu kod referans hatası vericektir .</p>

<p> JS de global scope window nesnesidir .Tüm global değişkenler window nesnesine aittir. </p>

```
var carName = "volvo";
console.log(window);
```

<p> Bu kod bize volvo çıktısını verecektir .</p>

<p> Bu arada bu kodları node js ile derlemeye çalıştığınız da window is not defined hatası alacaksınız .
Bunun sebebi window nesnesi yalnızca tarayıcılarda tanımlıdır .
Browser 'da denerseniz bir sorunla karşılaşmassınız .
</p>

## UYARI :

<p>
Gerek olmadığı sürece global değişken tanımlamaktan kaçının.
Global değişkenler ve window değişkenlerinin veya işlevlerinin üzerine yazılabilir.
</p>

### JavaScript Değişkenlerinin Ömrü

###### Bir js değişkeninin ömrü ;

<p>
Tanımlandığında başlar , Fonksiyon tamamlandığında local değişkenler silinir .
Bir web tarayıcısında ise , tarayıcı penceresini veya sekmeyi kapattığınızda global değişkenler silinir .
</p>

###### Fonksiyon Argümanları :

<p>
Fonksiyonların bağımsız değişkenleri (parametreleri) , local değişken davranışı sergiler .
</p>

<p>Kaynakça<a href="https://www.w3schools.com/js/js_scope.asp" title="Kaynakça"></a> inline link.</p>
