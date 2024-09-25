document.addEventListener('DOMContentLoaded', function () {
  var menuLinks = document.querySelectorAll('.left_menu a');
  var profileLink = document.querySelector('.profile a');
  var sliders = document.querySelectorAll('.slider-container'); // Tüm slider'ları seçelim
  var posters = document.querySelectorAll('.poster'); // Posterler
  var indicators = document.querySelectorAll('.indicator'); // Poster çemberleri
  var posterWrapper = document.querySelector('.poster-wrapper'); // Posterleri kaydırmak için kapsayıcı

  var links = Array.from(menuLinks).concat(profileLink); // Menü ve profil bağlantılarını birleştir
  var selectedIndex = 0; // Menüde seçili olan öğenin indeksi
  var selectedPosterIndex = 0; // Poster'de seçili olan posterin indeksi
  var activeSection = 'menu'; // Başlangıçta menü aktif
  var activeSliderIndex = 0; // Aktif slider'ı tutacak (0: Film, 1: Dizi, 2: Üçüncü slider)
  var sliderCardIndices = []; // Her slider'daki seçili kartın indekslerini tutacağız

  // Slider'lar için her biri için seçili kartın başlangıç indeksini tutalım (her slider'ın ilk kartı seçili)
  sliders.forEach(function () {
    sliderCardIndices.push(0); // Her slider'da başlangıçta ilk kart seçili
  });

  // İlk menü öğesini seçelim
  links[selectedIndex].classList.add('selected');

  // Poster çemberlerini güncelle
  function updatePosterIndicators() {
    indicators.forEach(function (indicator, index) {
      if (index === selectedPosterIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  // Posterleri kaydırmak için işlev
  function updatePosterPosition() {
    posterWrapper.style.transform = `translateX(-${selectedPosterIndex * 100}%)`;
  }

  // Slider'lar arasında geçiş yaparken görünümü güncelle
  function updateSliderVisibility() {
    sliders.forEach(function (slider, index) {
      if (index === activeSliderIndex) {
        slider.classList.remove('hidden'); // Aktif slider'ı göster
      } else {
        slider.classList.add('hidden'); // Diğer slider'ları gizle
      }
    });
  }

  // Kartların seçim durumunu güncelleme
  function updateSliderCardSelection() {
    var currentSliderCards = sliders[activeSliderIndex].querySelectorAll('.film_card');
    currentSliderCards.forEach(function (card, index) {
      if (index === sliderCardIndices[activeSliderIndex]) {
        card.classList.add('selected'); // Seçili kartı vurgula
      } else {
        card.classList.remove('selected'); // Diğer kartları vurgulamayı kaldır
      }
    });
  }

  // İlk slider'ı gösterelim
  updateSliderVisibility();
  updatePosterIndicators();
  updatePosterPosition(); // İlk poster konumunu güncelle

  // Klavye olaylarını dinleyelim
  document.addEventListener('keydown', function (event) {
    var key = event.key;

    // Menüdeyken yukarı ve aşağı ok tuşlarıyla gezinme
    if (activeSection === 'menu') {
      if (key === 'ArrowUp') {
        links[selectedIndex].classList.remove('selected');
        selectedIndex = selectedIndex === 0 ? links.length - 1 : selectedIndex - 1;
        links[selectedIndex].classList.add('selected');
      } else if (key === 'ArrowDown') {
        links[selectedIndex].classList.remove('selected');
        selectedIndex = selectedIndex === links.length - 1 ? 0 : selectedIndex + 1;
        links[selectedIndex].classList.add('selected');
      } else if (key === 'ArrowRight') {
        // Menüden postere geçiş
        links[selectedIndex].classList.remove('selected');
        activeSection = 'poster';
        selectedPosterIndex = 0; // Poster geçişinde ilk posteri seç
        updatePosterIndicators(); // Çemberi güncelle
        updatePosterPosition(); // Poster konumunu güncelle
      }
    }

    // Poster aktifken sağ ve sol ok tuşlarıyla posterler arasında gezinme
    else if (activeSection === 'poster') {
      if (key === 'ArrowRight') {
        selectedPosterIndex = selectedPosterIndex === posters.length - 1 ? 0 : selectedPosterIndex + 1;
        updatePosterIndicators(); // Çemberi güncelle
        updatePosterPosition(); // Poster konumunu güncelle
      } else if (key === 'ArrowLeft') {
        if (selectedPosterIndex === 0) {
          // İlk poster seçili iken menüye geri dön
          activeSection = 'menu';
          links[selectedIndex].classList.add('selected');
        } else {
          selectedPosterIndex = selectedPosterIndex - 1;
          updatePosterIndicators(); // Çemberi güncelle
          updatePosterPosition(); // Poster konumunu güncelle
        }
      } else if (key === 'ArrowDown') {
        // Posterden slider'a geçiş
        activeSection = 'slider';
        activeSliderIndex = 0; // İlk slider (filmler) ile başlayalım
        updateSliderVisibility();
        updateSliderCardSelection(); // İlk slider'daki kart seçim durumu güncellensin
      }
    }

    // Slider'lar arasında gezinme ve sağ-sol ok tuşları ile kartlar arasında gezinme
    else if (activeSection === 'slider') {
      var currentSliderCards = sliders[activeSliderIndex].querySelectorAll('.film_card');
      var selectedSliderIndex = sliderCardIndices[activeSliderIndex];

      if (key === 'ArrowRight') {
        // Sağ ok ile slider kartları arasında gezinme
        currentSliderCards[selectedSliderIndex].classList.remove('selected');
        selectedSliderIndex = selectedSliderIndex === currentSliderCards.length - 1 ? 0 : selectedSliderIndex + 1;
        currentSliderCards[selectedSliderIndex].classList.add('selected');
        sliderCardIndices[activeSliderIndex] = selectedSliderIndex; // Yeni kart seçimini kaydet
      } else if (key === 'ArrowLeft') {
        // Eğer ilk kart seçiliyse menüye geri dön
        if (selectedSliderIndex === 0) {
          activeSection = 'menu';
          currentSliderCards[selectedSliderIndex].classList.remove('selected');
          links[selectedIndex].classList.add('selected');
        } else {
          // Sol ok ile slider kartları arasında gezinme
          currentSliderCards[selectedSliderIndex].classList.remove('selected');
          selectedSliderIndex = selectedSliderIndex === 0 ? currentSliderCards.length - 1 : selectedSliderIndex - 1;
          currentSliderCards[selectedSliderIndex].classList.add('selected');
          sliderCardIndices[activeSliderIndex] = selectedSliderIndex; // Yeni kart seçimini kaydet
        }
      } else if (key === 'ArrowDown') {
        // Bir sonraki slider'a geç
        activeSliderIndex = (activeSliderIndex + 1) % sliders.length; // Slider indexini artır
        updateSliderVisibility(); // Slider görünümünü güncelle
        updateSliderCardSelection(); // Yeni slider'daki kart seçim durumu güncellensin
      } else if (key === 'ArrowUp') {
        // Yukarı ok ile postere geri dönme
        activeSection = 'poster';
        currentSliderCards[selectedSliderIndex].classList.remove('selected');
        updatePosterIndicators(); // Çemberi güncelle
        updatePosterPosition(); // Poster konumunu güncelle
      }
    }
  });
});










document.addEventListener('DOMContentLoaded', function () {
  var sliders = document.querySelectorAll('.slider'); // Tüm slider'ları seçelim
  var currentSliderIndex = 0; // Hangi slider'ın aktif olduğunu izlemek için

  // Sağ ok tuşu ile slider'ı sağa kaydırma
  function moveSliderRight(slider) {
    slider.scrollLeft += slider.offsetWidth; // Slider'ı bir kart genişliği kadar kaydır
  }

  // Sol ok tuşu ile slider'ı sola kaydırma
  function moveSliderLeft(slider) {
    slider.scrollLeft -= slider.offsetWidth; // Slider'ı bir kart genişliği kadar geri kaydır
  }

  // Klavye tuşlarını dinleyelim
  document.addEventListener('keydown', function (event) {
    var key = event.key;
    var activeSlider = sliders[currentSliderIndex]; // Şu anki aktif slider

    if (key === 'ArrowRight') {
      // Sağ ok tuşuna basıldığında slider'ı sağa kaydır
      moveSliderRight(activeSlider);
    } else if (key === 'ArrowLeft') {
      // Sol ok tuşuna basıldığında slider'ı sola kaydır
      moveSliderLeft(activeSlider);
    } else if (key === 'ArrowDown') {
      // Aşağı ok tuşuna basıldığında bir sonraki slider'a geç
      currentSliderIndex = (currentSliderIndex + 1) % sliders.length; // Slider indexini artır
    } else if (key === 'ArrowUp') {
      // Yukarı ok tuşuna basıldığında bir önceki slider'a geç
      currentSliderIndex = (currentSliderIndex - 1 + sliders.length) % sliders.length; // Slider indexini azalt
    }
  });
});
