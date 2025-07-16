const componentsToLoad = {
  'navbar-container': '../components/navbar.html',
  'footer-container': '../components/footer.html',
  'lista-container': '../components/lista.html',
  'marcas-container': '../components/marcas.html'
};

const loadComponent = async (containerId, filePath) => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Error al cargar ${filePath}`);
    const html = await response.text();
    document.getElementById(containerId).innerHTML = html;
    
    const scripts = document.getElementById(containerId).querySelectorAll('script');
    scripts.forEach(script => {
      const newScript = document.createElement('script');
      if (script.src) newScript.src = script.src;
      else newScript.textContent = script.textContent;
      document.body.appendChild(newScript);
    });
  } catch (error) {
    console.error(`Error en ${filePath}:`, error);
  }
};

const loadAllComponents = async () => {
  const promises = Object.entries(componentsToLoad).map(([containerId, filePath]) => 
    loadComponent(containerId, filePath)
  );
  await Promise.all(promises);
  console.log("¡Todos los componentes cargados!");
};

document.addEventListener('DOMContentLoaded', loadAllComponents);