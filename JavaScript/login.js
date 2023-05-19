const xl = new XsollaLogin.Widget({
    projectId: '41da3d87-7f53-442e-a993-ba5cc9941b07',
    preferredLocale: 'en_US'
  });

  xl.mount('xl_auth');
      
  function showFullscreen() {
    const myDiv = document.querySelector('#xl_auth');
    myDiv.style.display = 'block';
  
    xl.open();
  }