export default {
  name: 'daybook',
  component: () =>
    import(
      /* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DaybookLayout'
    ),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () =>
        import(
          /* webpackChunkName: "no-entry" */ '@/modules/daybook/views/NoEntrySelected'
        ),
    },
    {
      path: 'entry/:id',
      name: 'entry',
      component: () =>
        import(
          /* webpackChunkName: "entry" */ '@/modules/daybook/views/EntryView'
        ),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '',
    },
  ],
};
