/**creacion */
const CACHE_ELEMENTS=[
    './',
     '../../js/formulario.js',
     '../contact.html',
     '../about.html',
     '../gameInformation.html',
     '../registration.html',
     '../rules.html',
     '../show_data.html',
      '../../IMAGENES/soccer_image2.jpg',
      '../../IMAGENES/soccer_image1.jpg',
     '../../IMAGENES/soccer_image3.jpg',
      '../../CSS/diseño_formulario.css',
      '../../CSS/diseño.css'
]
/**si no se en live server abrir una nueva ventana */
const CACHE_NAME='v1_cache';
 self=this
 self.addEventListener('install',(e)=>{
    console.log(e)
     e.waitUntil(caches.open(CACHE_NAME).then((cache)=>{
        cache.addAll(CACHE_ELEMENTS).then(()=>{
        console.log(cache)
             self.skipWaiting()
         })
    .catch(console.log)
     }))

 })


// /**activacion */
self.addEventListener("activate",(e)=>{
    const cacheWhiteList=[CACHE_NAME];
    e.waitUntil(caches.keys().then((cacheNames)=>{
        return Promise.all(cacheNames.map((cacheName)=>{
            return cacheWhiteList.indexOf(cacheName)===-1 && caches.delete(cacheName)
        }))
    }).then(()=>self.clients.claim()) 
    )//reclama el cache en caso de haber uno nuevo
})