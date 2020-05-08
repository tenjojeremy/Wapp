/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js')

firebase.initializeApp({
  apiKey: 'AIzaSyA-z2vTXvO5PFCyx7IhqGcWsmEh0hPq3Co',
  authDomain: 'wapp-framework-test.firebaseapp.com',
  databaseURL: 'https://wapp-framework-test.firebaseio.com',
  projectId: 'wapp-framework-test',
  storageBucket: 'wapp-framework-test.appspot.com',
  messagingSenderId: '855153437134',
  appId: '1:855153437134:web:3e948795e58083a558639f',
  measurementId: 'G-96GY84ES9F',
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
