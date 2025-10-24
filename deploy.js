import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Iniciando deploy a GitHub Pages...');

try {
  // Crear la carpeta dist si no existe
  if (!fs.existsSync('dist')) {
    console.log('❌ La carpeta dist no existe. Ejecuta npm run build primero.');
    process.exit(1);
  }

  // Cambiar a la carpeta dist
  process.chdir('dist');

  // Inicializar git en dist si no existe
  if (!fs.existsSync('.git')) {
    execSync('git init', { stdio: 'inherit' });
    execSync('git remote add origin https://github.com/JoelML1/lading_page.git', { stdio: 'inherit' });
  }

  // Agregar todos los archivos
  execSync('git add .', { stdio: 'inherit' });
  
  // Verificar si hay cambios para commitear
  try {
    execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });
  } catch (error) {
    console.log('ℹ️  No hay cambios nuevos para commitear');
  }

  // Push a la rama gh-pages
  execSync('git branch -M gh-pages', { stdio: 'inherit' });
  execSync('git push -f origin gh-pages', { stdio: 'inherit' });

  console.log('✅ Deploy completado exitosamente!');
  console.log('🌐 Tu sitio estará disponible en: https://joelml1.github.io/lading_page/');

} catch (error) {
  console.error('❌ Error durante el deploy:', error.message);
  process.exit(1);
}