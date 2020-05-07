/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js')

firebase.initializeApp({
  apiKey: 'AIzaSyD9rNdySsFa1fqymv7pW77L-upW2zfV9t8',
  authDomain: 'wapp-framework.firebaseapp.com',
  databaseURL: 'https://wapp-framework.firebaseio.com',
  projectId: 'wapp-framework',
  storageBucket: 'wapp-framework.appspot.com',
  messagingSenderId: '1046696464098',
  appId: '1:1046696464098:web:9a9c21ad8c19320ac7d8bb',
  measurementId: 'G-0HVSXHW2H2',
})

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
  const {
    data: { title, actions },
  } = payload
  const parseActions = JSON.parse(actions)
  const options = { icon: '/images/public/logo_192x192.png', actions: parseActions }

  return self.registration.showNotification(title, options)
})

self.addEventListener('notificationclick', (event) => {
  if (event.action) {
    clients.openWindow(event.action)
  }
  event.notification.close()
})
