
    document.getElementById('product-tab').addEventListener('click', function() {
      document.getElementById('information-section').classList.remove('hidden');
      document.getElementById('specs-section').classList.add('hidden');
      document.getElementById('images-section').classList.add('hidden');
      
      this.classList.remove('bg-gray-100', 'text-gray-700');
      this.classList.add('bg-blue-600', 'text-white');
      
      document.getElementById('specs-tab').classList.remove('bg-blue-600', 'text-white');
      document.getElementById('specs-tab').classList.add('bg-gray-100', 'text-gray-700');
      
      document.getElementById('images-tab').classList.remove('bg-blue-600', 'text-white');
      document.getElementById('images-tab').classList.add('bg-gray-100', 'text-gray-700');
    });

    document.getElementById('specs-tab').addEventListener('click', function() {
      document.getElementById('information-section').classList.add('hidden');
      document.getElementById('specs-section').classList.remove('hidden');
      document.getElementById('images-section').classList.add('hidden');
      
      this.classList.remove('bg-gray-100', 'text-gray-700');
      this.classList.add('bg-blue-600', 'text-white');
      
      document.getElementById('product-tab').classList.remove('bg-blue-600', 'text-white');
      document.getElementById('product-tab').classList.add('bg-gray-100', 'text-gray-700');
      
      document.getElementById('images-tab').classList.remove('bg-blue-600', 'text-white');
      document.getElementById('images-tab').classList.add('bg-gray-100', 'text-gray-700');
    });

    document.getElementById('images-tab').addEventListener('click', function() {
      document.getElementById('information-section').classList.add('hidden');
      document.getElementById('specs-section').classList.add('hidden');
      document.getElementById('images-section').classList.remove('hidden');
      
      this.classList.remove('bg-gray-100', 'text-gray-700');
      this.classList.add('bg-blue-600', 'text-white');
      
      document.getElementById('product-tab').classList.remove('bg-blue-600', 'text-white');
      document.getElementById('product-tab').classList.add('bg-gray-100', 'text-gray-700');
      
      document.getElementById('specs-tab').classList.remove('bg-blue-600', 'text-white');
      document.getElementById('specs-tab').classList.add('bg-gray-100', 'text-gray-700');
    });

    function toExchangeImage(element) {
      document.getElementById('img_main').src = element.src;
    }

    function viewImage(src) {
      document.getElementById('modal-image').src = src;
      document.getElementById('image-modal').classList.remove('hidden');
    }

    function closeModal() {
      document.getElementById('image-modal').classList.add('hidden');
    }