# E-Shop Uygulaması

E-Shop, kullanıcıların online alışveriş deneyimini daha kolay ve keyifli hale getirmek amacıyla geliştirilmiş bir web uygulamasıdır. Bu uygulama, modern teknolojilerle oluşturulmuş olup, kullanıcıların ürünleri görüntüleyebilmesini, sepete ekleyebilmesini, giriş yapabilmesini ve daha fazlasını mümkün kılar.

## Kullanılan Teknolojiler
- Next.js 13
- TypeScript
- Context API
- SCSS (Sass)
- Axios

## Özellikler
- Kullanıcı verileri lokalde depolanır ve daha önce kayıt yapan biri aynı kullanıcı adı ile kayıt olmaya çalıştığında varolan kullanıcı hatası verir.
- Giriş ekranında hatalı giriş durumlarında kullanıcıya uygun hata mesajları gösterilir.
- Kullanıcı giriş yapmadan sepete ürün eklemesine izin verilir, ancak giriş yapılmadan önce sepet içeriğini göremez.
- Kullanıcı giriş yaptıktan sonra çıkış yapma ve sepeti görüntüleme gibi işlemler için butonlar aktif hale gelir.
- Sepette bulunan ürünlerin toplam tutarı görüntülenir ve ürünler sepetten çıkarıldıkça ödenmesi gereken tutar güncellenir.
- Ürün resimlerine tıklanarak ilgili ürünün detay sayfasına yönlendirilebilir ve buradan ürün sepete eklenebilir.