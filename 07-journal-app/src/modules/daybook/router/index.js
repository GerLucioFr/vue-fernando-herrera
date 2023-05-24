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
      props: (route) => {
        const { id } = route.params;
        return {
          id,
        };
      },
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
