<template>
    <sidebar-menu :menu="menu" />
  </template>
  
  <script>
      export default {
        name:'sideNav',
          data() {
              return {
                  menu: [
                      {
                          header: true,
                          title: 'Nav',
                          hiddenOnCollapse: true
                      },

                      {
                          title: 'Home',
                          href: '/',
                          icon: 'fa fa-chart-area',
                          child: [
                              {
                                  href: '/home/electronics',
                                  title: 'electronics',
                                  icon: 'fa-solid fa-laptop-medical',
                              },
                              {
                                  href: '/home/men',
                                  title: 'Men',
                                  icon: 'fa-solid fa-person'
                              },
                              {
                                  href: '/home/womens',
                                  title: 'Womens',
                                  icon: 'fa-solid fa-person-dress'
                              },
                              {
                                  href: '/home/jewelery',
                                  title: 'Jewelery',
                                  icon: 'fa-regular fa-gem'
                              },
                              {
                                  href: '/home/appliances',
                                  title: 'Appliances',
                                  icon: 'fa-regular fa-gem'
                              }
                          ]
                      }
                  ]
              }
          }
      }
  </script>
  