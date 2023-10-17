function Redirect(tip,deger,target) {
    
    switch (tip) {
        case 'whatsapp':
          window.open('https://api.whatsapp.com/send/?phone=' + deger + '&text=Merhaba&type=phone_number&app_absent=0', target);
          break;
        
        case 'tel':
          window.location.href = 'tel:+90' + deger;
          break;
      
        case 'Youtube':
          window.open('https://www.youtube.com/@' + deger + '/', target);
          break;
      
        case 'Konum':
          window.open('https://www.google.com/maps/place/' + deger, target);
          break;
      
        case 'İnstagram':
          window.open('https://www.instagram.com/' + deger + '/', target);
          break;
      
        default:
          console.log('Bilinmeyen tip: ' + tip);
      }
  }
  