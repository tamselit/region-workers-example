import flag from 'country-code-emoji'

const template = cf => {
  const emoji = flag(cf.country) || "👋🏻"

  return `
    <html> 
 <head> <!-- Required meta tags --> 
  <meta charset="utf-8"> 
  <meta name="viewport" content="width=device-width, initial-scale=1"> 
  <title>inforkom 2 Page || WEC Madiun</title> 
 </head> 
 <body> 
  <center> 
   <br> 
   <h1 id="judul">Inforkom II 2022/2023</h1> 
   <h3>Teknik Informatika Android &amp; Game Developer</h3> 
  </center> 
  <hr width="95%"> 
  <br> 
  <br> 
  <ol type="1"> 
   <li><a href="#about">About</a></li> 
   <br> 
   <li><a href="#table">Tabel Angsuran</a></li> 
   <br> 
   <li><a href="#map">Maps</a></li> 
   <br> 
   <li><a href="#contact">Contact</a></li> 
   <br> 
   <li><a href="#about">About</a></li> 
   <br> 
  </ol> 
  <ul type="square"> 
   <li><h2>Deskripsi Jurusan</h2></li> 
   <img src="https://st2.depositphotos.com/1017986/5552/i/600/depositphotos_55526803-stock-photo-student-with-computer-studying-at.jpg" width="250px"> 
   <p><b id="about"><a href="https://www.wearneseducation.com/jurusan/teknik-informatika-android-game-developer.html" target="_blank">Profesi Game Developer</a> </b> memiliki pekerjaan spesifik sebagai pencipta video game. Mereka menciptakan software untuk berbagai macam permainan, yang dapat diakses melalui Play Station, Nintendo, ataupun aplikasi berbasis Android dan iOS. Seorang pencipta game pastinya harus mempelajari konsep-konsep penting dari pembuatan sebuah aplikasi permainan, serta merancang program coding and programming. Area pekerjaan dari seorang game developer mencakup pembuatan audio yang tepat, desain grafis dari permainan tersebut, produksi aplikasi, serta seni visualnya.</p> 
   <p> Teknik Informatika merupakan bidang ilmu yang mempelajari bagaimana menggunakan teknologi komputer secara optimal guna menangani masalah transformasi atau pengolahan data dengan proses logika. Di Jurusan Teknik Informatika kamu akan mempelajari berbagai prinsip terkait ilmu komputer mulai dari proses perancangan, pengembangan, pengujian, hingga evaluasi sistem operasi perangkat lunak. Selama kuliah kamu akan banyak mengkaji pemrograman dan komputasi, dan dibekali pula dengan keterampilan merancang perangkat lunak.</p> 
   <p>Ilmu pemrograman yang diberikan tentu saja pemrograman yang aplikatif dan sedang menjadi trend didunia industri, seperti pembuatan software aplikasi yang berbasis jaringan komputer, Web Application dan Mobile Application, selain itu mahasiswa jurusan ini juga dibekali dengan kemampuan agar mereka dapat mengatasi permasalahan-permasalahan yang mungkin terjadi berkaitan dengan komputer baik secara hardware dan software.</p> 
   <table border="1" width="100%"> 
    <tbody> 
     <tr align="center"> 
      <td id="table" rowspan="2" width="5%">No</td> 
      <td rowspan="2" width="5%">Jurusan</td> 
      <td colspan="10" width="30%">Biaya Bulanan</td> 
     </tr> 
     <tr align="center"> 
      <td width="5%">Angsuran 1</td> 
      <td width="5%">Angsuran 2</td> 
      <td width="5%">Angsuran 3</td> 
      <td width="5%">Angsuran 4</td> 
      <td width="5%">Angsuran 5</td> 
      <td width="5%">Angsuran 6</td> 
      <td width="5%">Angsuran 7</td> 
     </tr> 
     <tr> 
      <td align="center">1</td> 
      <td>Inforkom II</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
     </tr> 
     <tr> 
      <td align="center">1</td> 
      <td>Inforkom II</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
     </tr> 
     <tr> 
      <td align="center">1</td> 
      <td>Inforkom II</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
      <td align="right">1</td> 
     </tr> 
    </tbody> 
   </table> 
   <br> 
   <br> 
   <br> 
   <br> 
   <form> 
    <table width="50%"> 
     <tbody> 
      <tr> 
       <td colspan="2">Pendaftaran Mahasiswa</td> 
      </tr> 
      <tr> 
       <td width="40%">NIM</td> 
       <td width="60%"><input type="text" name="txtnim" size="20"></td> 
      </tr> 
      <tr> 
       <td width="40%">Nama Lengkap</td> 
       <td width="60%"><input type="text" name="txtnama" size="40"></td> 
      </tr> 
      <tr> 
       <td width="40%">Tanggal Lahir</td> 
       <td width="60%"><input type="date" name="datetgl" size="40"></td> 
      </tr> 
      <tr> 
       <td width="40%">Jenis Kelamin</td> 
       <td width="60%"><input type="radio" name="rajkel" value="L">Laki Laki</td> 
       <td width="40%"><input type="radio" name="rajkel" value="P">Perempuan</td> 
      </tr> 
      <tr> 
       <td width="40%">Hobby</td> 
       <td width="60%"><input type="checkbox" name="chnonton">Nonton Bioskop</td> 
       <td width="60%"><input type="checkbox" name="chjalan">Explorasi Alam</td> 
      </tr> 
      <tr> 
       <td width="40%">Pendidikan AKhir</td> 
       <td width="60%"><select name="cbpenda"> <option value="1">SMA</option> <option value="1">SMK</option> <option value="1">MA</option> <option value="1">SMP</option> </select></td> 
      </tr> 
      <tr> 
       <td width="40%">Motto Hidup</td> 
       <td width="60%"><input type="text" name="txtmotto" size="20"></td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> <br> <input type="submit" value="Simpan Data"> <input type="reset" value="Batalkan Data"> </td> 
      </tr> 
     </tbody> 
    </table> 
   </form> 
   <br> 
   <hr> 
   <center> <font size="5px"><b id="map">Letak Map WEC</b></font> 
    <br> 
    <br> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.512469073157!2d111.53275049999999!3d-7.6279034999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bef1b013b46b%3A0xc7b5a3e8a713f9fa!2sWearnes%20Education%20Center%20Madiun!5e0!3m2!1sid!2sid!4v1667810777465!5m2!1sid!2sid" width="300" height="225" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
   </center> 
   <br> 
   <br> 
   <ul id="contact" class="social-icons"> 
    <li> <a href="https://wa.me/6282210819939" target="_blank"><img src="https://w7.pngwing.com/pngs/672/164/png-transparent-whatsapp-icon-whatsapp-logo-computer-icons-zubees-halal-foods-whatsapp-text-circle-unified-payments-interface.png" width="51"><i class="wa"></i></a> </li> 
    <li> <a href="https://instagram.com/inforkom_2.2022?igshid=YmMyMTA2M2Y=" target="_blank"><img src="https://png.pngtree.com/png-clipart/20220810/original/pngtree-instagram-icon-instagram-logo-picture-image_3584852.png" width="50"><i class="ig"></i></a> </li> 
    <li> <a href="https://github.com/tamselit" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="50"><i class="git"></i></a> </li> 
   </ul> 
  </ul> 
 </body>
</html>
    `
}

export default template
